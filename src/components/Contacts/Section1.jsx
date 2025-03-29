import React from 'react';
import contactHeroImage from '../../assets/ContactPage/C_img2.png';
import phoneImage from '../../assets/ContactPage/C_img3.png';
import { ModalContext } from './ContactPage';
import { useContext } from 'react';

const ContactSection = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full h-[90vh] relative flex flex-col" style={{ backgroundColor: "#000322" }}>
      {/* Overlayed "Contact Us" header with higher z-index */}
      <div className="absolute w-full text-center pt-12 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>

      {/* Full viewport height image container with centered button */}
      <div className="w-full h-full relative z-0">
        {/* Image container */}
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left side - Woman with phone */}
          <div className="w-full md:w-1/2 h-full bg-navy-900">
            <img
              src={phoneImage}
              alt="Customer Service Representative"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right side - Digital phone illustration */}
          <div className="w-full md:w-1/2 h-full bg-blue-900">
            <img
              src={contactHeroImage}
              alt="Digital Phone"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Absolutely positioned button centered on top of images */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[25rem]">
          <button
            onClick={openModal}
            className="bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 hero-button pointer-events-auto"
          >
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Add responsive styling for better mobile experience */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            height: 100vh; /* Fallback */
            height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;