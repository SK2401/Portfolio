
import React from 'react';
import Header from './components/Header.tsx'; 
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import ImpactSection from './components/ImpactSection.tsx';
import ToolsSection from './components/ToolsSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx'; // Added Footer import

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