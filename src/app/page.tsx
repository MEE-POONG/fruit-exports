import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ProcessSection from "@/components/ProcessSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-0">
        <ProductSection />
        <ProcessSection />
        <CertificationsSection />
        <AboutSection />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
