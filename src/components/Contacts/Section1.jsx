import React from 'react';
import Bgimg from '../../assets/ContactPage/Bg_img1.jpg';
import { ModalContext } from './ContactPage';
import { useContext } from 'react';
const ContactSection = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="w-full h-[95vh] relative" style={{ backgroundColor: "#000322" }}>
      {/* Overlayed "Contact Us" header with higher z-index */}
      <div className="absolute w-full text-center pt-12 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>
      {/* Full viewport background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={Bgimg}
          alt="Background"
          className="bg-container w-full h-full object-fill"
        />
      </div>
      {/* Absolutely positioned button centered on top of images */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[28rem]">
        <button
          onClick={openModal}
          className="bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 hero-button pointer-events-auto"
        >
          Contact us
        </button>
      </div>
      {/* Add responsive styling for better mobile experience */}
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            height: 100vh; /* Fallback */
            height: -webkit-fill-available;
          }

          .bg-container {
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
          }


        }
        
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          h1 {
            font-size: 1.75rem !important;
            margin-bottom: 1.5rem;
          }
          
          .hero-button {
            font-size: 0.875rem;
            padding: 0.5rem 1.5rem;
          }
          
          .mt-\\[20rem\\] {
            margin-top: 10rem;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          h1 {
            font-size: 2rem !important;
            margin-bottom: 2rem;
          }
          
          .hero-button {
            font-size: 0.9rem;
            padding: 0.75rem 2rem;
          }
          
          .mt-\\[20rem\\] {
            margin-top: 12rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          h1 {
            font-size: 2.25rem !important;
            margin-bottom: 2.5rem;
          }
          
          .hero-button {
            font-size: 1rem;
            padding: 0.75rem 2.5rem;
          }
          
          .mt-\\[20rem\\] {
            margin-top: 15rem;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          .hero-button {
            font-size: 1.1rem;
            padding: 0.85rem 2.75rem;
          }
          
          .object-fill {
            object-fit: cover;
          }
          
          .mt-\\[20rem\\] {
            margin-top: 18rem;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          h1 {
            font-size: 2.75rem !important;
          }
          
          .hero-button {
            font-size: 1.125rem;
            padding: 1rem 3rem;
          }
          
          .object-fill {
            object-fit: fill;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          h1 {
            font-size: 3rem !important;
          }
          
          .hero-button {
            font-size: 1.1rem;
            padding: 1.1rem 1.5rem;
          }
          
          .object-fill {
            object-fit: cover;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          h1 {
            font-size: 3.5rem !important;
          }
          
          .hero-button {
            font-size: 1.4rem;
            padding: 1.25rem 4rem;
          }
          
          .object-fill {
            object-fit: cover;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          h1 {
            font-size: 4rem !important;
          }
          
          .hero-button {
            font-size: 1.6rem;
            padding: 1.5rem 5rem;
          }
          
          .object-fill {
            object-fit: cover;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          h1 {
            font-size: 5rem !important;
          }
          
          .hero-button {
            font-size: 2rem;
            padding: 2rem 6rem;
          }
          
          .object-fill {
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
};
export default ContactSection;