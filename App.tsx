import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import About from './components/About';
import NutritionChat from './components/NutritionChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-yasai-dark text-white font-sans selection:bg-yasai-orange selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
      </main>
      <Footer />
      <NutritionChat />
    </div>
  );
}

export default App;