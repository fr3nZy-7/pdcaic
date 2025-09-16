// src/pages/services/root-canal.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function RootCanal() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Root Canal Treatment</h1>
        <p className="text-lg mb-4">
          Root canal treatment is a dental procedure used to treat infection at
          the center of a tooth. It can save your natural tooth and relieve
          pain.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">When do you need it?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Severe toothache when chewing or biting</li>
          <li>Lingering sensitivity to hot or cold</li>
          <li>Swollen or tender gums</li>
          <li>Darkening of the tooth</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Benefits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Relieves pain</li>
          <li>Preserves natural tooth</li>
          <li>Restores normal chewing</li>
          <li>Prevents spread of infection</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
