import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/ Services";
import SaaS from "./components/SaaS";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <SaaS />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
