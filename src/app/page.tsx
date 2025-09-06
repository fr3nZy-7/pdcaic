import BookAppointmentButton from "./components/common/BookAppointmentButton";
import WhatsAppUsButton from "./components/common/WhatsAppUsButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Padmanaabh Dental Clinic</h1>
      <p className="mt-4 text-lg text-gray-600">Welcome to our new website!</p>
      <img src="/images/common/short-logo-wo-name.svg" alt="Clinic Hero" className="mt-6 rounded-lg shadow-lg w-96" />
      <BookAppointmentButton/>
      <WhatsAppUsButton/>
    </main>
  );
}
