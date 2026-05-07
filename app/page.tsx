import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Contributions from '@/components/Contributions';
import GitHub from '@/components/GitHub';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Contributions />
        <GitHub />
        <Education />
        <Certifications />
        <Articles />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
