import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import MissionSection from './MissionSection';
import TestimonialsSection from './TestimonialsSection';
import GoogleFormService from '../Forms/GoogleFormService';
import { useEffect, useState, createContext } from 'react';

// Create a context to share modal state across components
export const ModalContext = createContext();

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div className="bg-navy-900 min-h-screen">
        <HeroSection />
        <ServicesSection />
        <MissionSection />
        <TestimonialsSection />

        {/* Google Form Modal */}
        <GoogleFormService
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </ModalContext.Provider>
  );
};

export default HomePage;