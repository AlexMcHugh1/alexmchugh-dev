import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import GitHub from '@/components/GitHub';
import Contributions from '@/components/Contributions';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <GitHub />
        <Contributions />
        <Articles />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
