import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ExportProcessSection } from '@/components/sections/ExportProcessSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { WhyMultiplezSection } from '@/components/sections/WhyMultiplezSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ClosingSection } from '@/components/sections/ClosingSection';
import { Stack } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Stack gap={0}>
          <HeroSection />
          <ProblemSection />
          <ExportProcessSection />
          <SolutionSection />
          <WhyMultiplezSection />
          <RoadmapSection />
          <ResultsSection />
          <FaqSection />
          <CtaSection />
          <SocialProofSection />
          <ClosingSection />
        </Stack>
      </main>
      <Footer />
    </>
  );
}
