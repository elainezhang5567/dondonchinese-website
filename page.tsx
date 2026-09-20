import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MenuCategories from "@/components/MenuCategories";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <TrustBar />
        <MenuCategories />
        <Story />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
