// src/pages/BookAppointment.tsx
// Remove Next.js-specific imports
import CalcomWidget from '@/components/CalcomWidget';

const BookAppointment = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      {/* Simply render the component directly */}
      <CalcomWidget />
    </main>
  );
};

export default BookAppointment;