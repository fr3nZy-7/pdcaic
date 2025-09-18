// src/components/FooterCTA.tsx
import { useLocation } from "react-router-dom";
import WhatsAppUsButton from "@/components/WhatsAppUsButton";
import BookAppointmentButton from "@/components/BookAppointmentButton";


type Props = {
  headingOverride?: string;
};

const getHeadingFromPath = (path: string, override?: string) => {
  if (override && override.trim().length) return override;
  const p = path.toLowerCase();

  if (p === "/" || p === "") return "Your Smile Matters";
  if (p.startsWith("/services")) return "Ready to schedule your treatment?";
  if (p.startsWith("/blog") || p.includes("dental") || p.startsWith("/about"))
    return "Start your treatment journey today";
  if (p.startsWith("/faq")) return "Still have questions?";

  return "Ready to schedule your treatment?";
};

const FooterCTA: React.FC<Props> = ({ headingOverride }) => {
  const location = useLocation();
  const heading = getHeadingFromPath(location.pathname, headingOverride);

  return (
    <section
      aria-labelledby="footer-cta-heading"
      className="py-16 bg-gradient-to-br from-[#00ABDA] to-[#4DD0E1] relative overflow-hidden"
      
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Heading + Timings + short text */}
          <div>
            <h2
              id="footer-cta-heading"
              className="text-2xl md:text-4xl font-semibold text-white"
            >
              {heading}
            </h2>

            
            <div className="mt-6 text-sm text-white dark:text-gray-400 space-y-1">
              <div className="font-medium text-shade">
                Open today 10:00 am – 08:00 pm
              </div>
              <ul className="mt-2 space-y-0.5">
                <li>Monday to Friday – 9:00am to 9:00pm</li>
                <li>Saturday – 10:00am to 08:00pm</li>
                <li>Sunday – By Appointments Only</li>
              </ul>
            </div>
          </div>

          {/* Right: supporting text + CTA buttons */}
          <div className="flex flex-col items-start md:items-end">
            <p className="hidden md:block md:text-right text-white dark:text-gray-300 max-w-md">
              Experience exceptional dental care in a comfortable environment.
              Our dedicated team is here to ensure your smile shines bright.
            </p>

            <div className="mt-6 w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="w-full sm:w-auto">
                  <WhatsAppUsButton className="w-full" />
                </div>
                <div className="w-full sm:w-auto">
                  <BookAppointmentButton className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
