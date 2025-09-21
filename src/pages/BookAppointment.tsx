// src/pages/BookAppointment.tsx
import { useEffect, useState } from 'react';
import CalcomWidget from '@/components/CalcomWidget';

const BookAppointment = () => {
  const [slug, setSlug] = useState('dental-appointment'); // Default slug
  
  useEffect(() => {
    // This code runs only in the browser
    const params = new URLSearchParams(window.location.search);
    const eventSlugFromUrl = params.get('eventSlug');
    if (eventSlugFromUrl) {
      setSlug(eventSlugFromUrl);
    }
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      {/* Pass the dynamic slug to the widget */}
      <CalcomWidget eventSlug={slug} />
    </main>
  );
};

export default BookAppointment;