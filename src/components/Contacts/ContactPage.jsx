import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import GoogleFormService from '../Forms/GoogleFormService';
import { useEffect, useState, createContext } from 'react';


export const ModalContext = createContext();
const ContactPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div className="bg-navy-900 min-h-screen">
        <Section1 />
        {/* <Section2 /> */}
        <Section3 />
        <GoogleFormService
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </ModalContext.Provider>
  );
};

export default ContactPage;