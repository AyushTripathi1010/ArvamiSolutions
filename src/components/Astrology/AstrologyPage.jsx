import { useEffect, useState, createContext } from 'react';

// Import section components
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ApproachSection from './ApproachSection';
import FaqSection from './FaqSection';
import TestimonialsSection from '../Home/TestimonialsSection'; // Reusing existing component
import ContactForm from '../Contacts/Section2'; // Reusing existing component
import GoogleFormAstrology from '../Forms/GoogleFormAstrology';

export const ModalContext = createContext();
const AstrologyPage = () => {
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
        <ApproachSection />
        <FaqSection />
        <TestimonialsSection />
        {/* <div className="py-20 bg-navy-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Need Astrological Guidance? Let's Talk!</h2> */}
        {/* <ContactForm /> */}

        {/* Google Form Modal */}
        <GoogleFormAstrology
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </ModalContext.Provider>

  );
};

export default AstrologyPage;