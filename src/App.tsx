import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedWork from './sections/FeaturedWork';
import Contact from './sections/Contact';
import './App.css'; // Keep if you have specific App-level styles
// import './index.css'; // Already imported in main.tsx

function App() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <FeaturedWork />
      <Contact />
    </main>
  );
}

export default App;