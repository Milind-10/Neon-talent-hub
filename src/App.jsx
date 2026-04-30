import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
      </main>
      <Contact />
    </div>
  );
}

export default App;
