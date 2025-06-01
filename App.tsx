
import React from 'react';
import Header from './components/Header'; 
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ImpactSection from './components/ImpactSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; // Added Footer import

const App: React.FC = () => {
  return (
    <> 
      <div className="min-h-screen flex flex-col text-brand-dark font-sans antialiased">
        <Header /> 
        <main className="flex-grow pt-24 pb-16"> {/* Added pb-16 for new Footer */}
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ImpactSection />
          <ToolsSection />
          <ContactSection />
        </main>
      </div>
      <Footer /> {/* Added Footer component */}
    </>
  );
};

export default App;