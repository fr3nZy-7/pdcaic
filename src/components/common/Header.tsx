import Link from "next/link";
import BookAppointmentButton from "@/components/common/BookAppointmentButton"

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Nav */}
        <nav className="flex gap-6 font-medium text-[#007099] text-[16px] text-black">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/dental-tourism">Dental Tourism</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/faqs">FAQ</Link>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/images/common/short-logo-wo-name.svg"
            alt="Clinic Logo"
            className="h-auto w-16"
          />
        </div>

        {/* Right CTA */}
        <div>
          <BookAppointmentButton 
          // onClick={() => console.log("Booking flow")} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
