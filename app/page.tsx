import { AboutSection } from '@/components/AboutSection';
import { BiographySection } from '@/components/BiographySection';
import { CareerResultSection } from '@/components/CareerResultSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FuturePlanSection } from '@/components/FuturePlanSection';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { ResumeSection } from '@/components/ResumeSection';
import { TargetJobSection } from '@/components/TargetJobSection';
import { aboutData } from '@/data/profile';
import { careerResult } from '@/data/career';
import { footerData, heroData } from '@/data/profile';
import { contactData } from '@/data/contact';
import { targetJob } from '@/data/job';
import { biographyData, resumeData } from '@/data/resume';
import { futurePlan } from '@/data/futurePlan';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection data={heroData} />
        <AboutSection data={aboutData} />
        <CareerResultSection data={careerResult} />
        <TargetJobSection data={targetJob} />
        <BiographySection data={biographyData} />
        <ResumeSection data={resumeData} />
        <FuturePlanSection data={futurePlan} />
        <ContactSection data={contactData} />
      </main>
      <Footer data={footerData} />
    </div>
  );
}
