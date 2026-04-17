import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import GitHub from '@/components/GitHub';
import Articles from '@/components/Articles';
import CV from '@/components/CV';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <GitHub />
        <Articles />
        <CV />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
