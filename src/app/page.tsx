import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TradersMarquee } from '@/components/sections/TradersMarquee';
import { LiveClassPreview } from '@/components/sections/LiveClassPreview';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { CuratedCourses } from '@/components/sections/CuratedCourses';
import { TrustedPlatforms } from '@/components/sections/TrustedPlatforms';
import { CurriculumRoadmap } from '@/components/sections/CurriculumRoadmap';
import { OurEcosystem } from '@/components/sections/OurEcosystem';
import { AboutMentor } from '@/components/sections/AboutMentor';
import { SimpleProcess } from '@/components/sections/SimpleProcess';
import { StudentReviews } from '@/components/sections/StudentReviews';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <Navbar />
      <Hero />
      <TradersMarquee />
      <LiveClassPreview />
      <ComparisonSection />
      <CuratedCourses />
      <TrustedPlatforms />
      <CurriculumRoadmap />
      <OurEcosystem />
      <AboutMentor />
      <SimpleProcess />
      <StudentReviews />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
