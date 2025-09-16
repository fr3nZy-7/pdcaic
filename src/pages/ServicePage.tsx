// src/pages/ServicePage.tsx
import { useParams } from "react-router-dom";
import { services } from "@/data/services";
import NotFound from "./NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookAppointmentButton from "@/components/BookAppointmentButton";


const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      {/* SEO Meta Tags */}
      
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta name="keywords" content={service.seo.keywords.join(", ")} />
      

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center bg-black/50 rounded-xl p-6">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg">{service.shortDescription}</p>
        </div>
      </section>

      {/* Infographic Section */}
      {service.infographicImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {service.infographicImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${service.title} infographic ${idx + 1}`}
                className="rounded-xl shadow-lg"
              />
            ))}
          </div>
        </section>
      )}

      {/* Long Description */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">About {service.title}</h2>
        <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
      </section>

   

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicePage;
