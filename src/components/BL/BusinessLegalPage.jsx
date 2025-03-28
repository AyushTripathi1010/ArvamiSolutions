import { useEffect, useState, createContext } from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import TestimonialsSection from '../Home/TestimonialsSection';
import GoogleFormBL from '../Forms/GoogleFormBL';

export const ModalContext = createContext();
const BusinessLegalPage = () => {

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
        <FeaturesSection />
        {/* <ProcessSection /> */}
        <TestimonialsSection />

        {/* Google Form Modal */}
        <GoogleFormBL
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </ModalContext.Provider>

  );
};

export default BusinessLegalPage;