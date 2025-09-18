-- Create enum types
CREATE TYPE public.user_role AS ENUM ('admin', 'moderator', 'user');
CREATE TYPE public.appointment_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE public.inquiry_status AS ENUM ('new', 'in_progress', 'resolved', 'closed');
CREATE TYPE public.media_type AS ENUM ('image', 'video');
CREATE TYPE public.post_status AS ENUM ('draft', 'published', 'archived');

-- Create profiles table for admin users
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role user_role NOT NULL DEFAULT 'user',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create services table
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  short_description TEXT,
  price_range TEXT,
  duration_minutes INTEGER,
  image_url TEXT,
  gallery_images TEXT[],
  features TEXT[],
  is_active BOOLEAN NOT NULL DEFAULT true,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery table
CREATE TABLE public.gallery (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  media_type media_type NOT NULL DEFAULT 'image',
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  alt_text TEXT,
  tags TEXT[],
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  uploaded_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT,
  featured_image_url TEXT,
  status post_status NOT NULL DEFAULT 'draft',
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  tags TEXT[],
  reading_time INTEGER,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  status appointment_status NOT NULL DEFAULT 'pending',
  notes TEXT,
  admin_notes TEXT,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create inquiries table
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status inquiry_status NOT NULL DEFAULT 'new',
  admin_response TEXT,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create analytics table
CREATE TABLE public.analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  event_data JSONB,
  page_url TEXT,
  user_agent TEXT,
  ip_address INET,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create seo_settings table
CREATE TABLE public.seo_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_type TEXT NOT NULL,
  page_identifier TEXT,
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT[],
  og_title TEXT,
  og_description TEXT,
  og_image TEXT,
  canonical_url TEXT,
  schema_markup JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_type, page_identifier)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_settings ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS user_role AS $$
  SELECT role FROM public.profiles WHERE profiles.user_id = $1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = $1 AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- RLS Policies for profiles
CREATE POLICY "Profiles are viewable by admins" ON public.profiles
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can insert profiles" ON public.profiles
FOR INSERT WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update profiles" ON public.profiles
FOR UPDATE USING (public.is_admin(auth.uid()));

CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for services (Admin only for CUD, public read)
CREATE POLICY "Services are viewable by everyone" ON public.services
FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage services" ON public.services
FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for categories (Admin only for CUD, public read)
CREATE POLICY "Categories are viewable by everyone" ON public.categories
FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage categories" ON public.categories
FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for gallery (Admin only for CUD, public read)
CREATE POLICY "Gallery is viewable by everyone" ON public.gallery
FOR SELECT USING (is_active = true OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage gallery" ON public.gallery
FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for blog_posts (Admin only for CUD, public read published)
CREATE POLICY "Published blog posts are viewable by everyone" ON public.blog_posts
FOR SELECT USING (status = 'published' OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage blog posts" ON public.blog_posts
FOR ALL USING (public.is_admin(auth.uid()));

-- RLS Policies for appointments (Admin only)
CREATE POLICY "Admins can view all appointments" ON public.appointments
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can create appointments" ON public.appointments
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage appointments" ON public.appointments
FOR UPDATE USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete appointments" ON public.appointments
FOR DELETE USING (public.is_admin(auth.uid()));

-- RLS Policies for inquiries (Admin only)
CREATE POLICY "Admins can view all inquiries" ON public.inquiries
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can create inquiries" ON public.inquiries
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can manage inquiries" ON public.inquiries
FOR UPDATE USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete inquiries" ON public.inquiries
FOR DELETE USING (public.is_admin(auth.uid()));

-- RLS Policies for analytics (Admin only)
CREATE POLICY "Admins can view analytics" ON public.analytics
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can insert analytics" ON public.analytics
FOR INSERT WITH CHECK (true);

-- RLS Policies for seo_settings (Admin only)
CREATE POLICY "SEO settings are viewable by admins" ON public.seo_settings
FOR SELECT USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage SEO settings" ON public.seo_settings
FOR ALL USING (public.is_admin(auth.uid()));

-- Create triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_gallery_updated_at
  BEFORE UPDATE ON public.gallery
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON public.appointments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON public.inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_seo_settings_updated_at
  BEFORE UPDATE ON public.seo_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial admin user
INSERT INTO public.profiles (user_id, email, full_name, role)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'nehaendo2019@gmail.com',
  'Admin User',
  'admin'
) ON CONFLICT (email) DO NOTHING;

-- Insert default categories
INSERT INTO public.categories (name, slug, description) VALUES
('General Dentistry', 'general-dentistry', 'Basic dental care and treatments'),
('Cosmetic Dentistry', 'cosmetic-dentistry', 'Aesthetic dental procedures'),
('Orthodontics', 'orthodontics', 'Teeth alignment and braces'),
('Oral Surgery', 'oral-surgery', 'Surgical dental procedures'),
('Pediatric Dentistry', 'pediatric-dentistry', 'Dental care for children'),
('Before & After', 'before-after', 'Treatment results showcase'),
('Patient Testimonials', 'testimonials', 'Patient reviews and feedback'),
('Clinic Gallery', 'clinic-gallery', 'Clinic facilities and equipment');

-- Create indexes for better performance
CREATE INDEX idx_services_slug ON public.services(slug);
CREATE INDEX idx_services_is_active ON public.services(is_active);
CREATE INDEX idx_gallery_category_id ON public.gallery(category_id);
CREATE INDEX idx_gallery_service_id ON public.gallery(service_id);
CREATE INDEX idx_gallery_is_featured ON public.gallery(is_featured);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at);
CREATE INDEX idx_appointments_status ON public.appointments(status);
CREATE INDEX idx_appointments_preferred_date ON public.appointments(preferred_date);
CREATE INDEX idx_inquiries_status ON public.inquiries(status);
CREATE INDEX idx_analytics_event_type ON public.analytics(event_type);
CREATE INDEX idx_analytics_created_at ON public.analytics(created_at);