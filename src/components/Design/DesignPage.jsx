import { useEffect, useState, createContext } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import TestimonialsSection from '../Home/TestimonialsSection';
import GoogleFormDesign from '../Forms/GoogleFormDesign';

export const ModalContext = createContext();

const DesignPage = () => {
 

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
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <TestimonialsSection />

        {/* Google Form Modal */}
        <GoogleFormDesign
          isOpen={isModalOpen}
          onClose={closeModal}
        />

      </div>
    </ModalContext.Provider>
  );
};

export default DesignPage;