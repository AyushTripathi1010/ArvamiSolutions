import { Link } from 'react-router-dom';
import { useContext } from 'react';
// import wallpaper from '../../assets/HomePage/Wallpaper.png';
import Home_img5 from '../../assets/HomePage/Home_img5.png'
import { ModalContext } from './HomePage';

const HeroSection = () => {
  // Get openModal function from context  
  const { openModal } = useContext(ModalContext);
  return (
    <div className="home-hero-section relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="hero-bg-wrapper absolute inset-0 w-full h-full">
        <img
          src={Home_img5}
          alt="Background"
          className="hero-bg-image w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="hero-content-container container mx-auto px-6 relative z-10 text-center">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-14 mt-[-100px]">
          Empowering Businesses and Individuals
        </h1>
        <p className="hero-description text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto">
          Providing expert IT, legal, design, and personalized astrology services to help you thrive.
        </p>
        <button
          onClick={openModal}
          className="hero-cta-button inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 "
          style={{ marginTop: '55px' }}
        >
          Explore Our Services
        </button>
      </div>

      {/* Network Pattern Overlay */}
      <div className="pattern-overlay absolute inset-0 pointer-events-none">
        <div className="pattern-inner w-full h-full bg-network-pattern opacity-20"></div>
      </div>
      
      {/* Responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 1.5rem;
            margin-top: -50px !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
            margin-bottom: 1.5rem;
            max-width: 100%;
          }
          
          .hero-cta-button {
            padding: 0.5rem 1.5rem;
            font-size: 0.875rem;
            margin-top: 2rem !important;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem !important;
            margin-bottom: 2rem;
            margin-top: -70px !important;
          }
          
          .hero-description {
            font-size: 1.125rem !important;
            margin-bottom: 1.5rem;
          }
          
          .hero-cta-button {
            padding: 0.75rem 1.75rem;
            margin-top: 2.5rem !important;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-title {
            font-size: 3rem !important;
            margin-bottom: 2.5rem;
            margin-top: -80px !important;
          }
          
          .hero-description {
            font-size: 1.25rem !important;
            max-width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 0.75rem 2rem;
            margin-top: 3rem !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hero-title {
            font-size: 3.5rem !important;
            margin-bottom: 3rem;
            margin-top: -90px !important;
          }
          
          .hero-description {
            font-size: 1.375rem !important;
            max-width: 75%;
            margin-left: auto;
            margin-right: auto;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .hero-title {
            font-size: 4rem !important;
            margin-bottom: 3.5rem;
          }
          
          .hero-description {
            font-size: 1.5rem !important;
            max-width: 70%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 1rem 2.25rem;
            font-size: 1.125rem;
            margin-top: 4rem !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .hero-content-container {
            max-width: 85%;
          }
          
          .hero-title {
            font-size: 4.5rem !important;
            margin-bottom: 4rem;
          }
          
          .hero-description {
            font-size: 1.75rem !important;
            max-width: 65%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 1.25rem 2.5rem;
            font-size: 1.25rem;
            margin-top: 4.5rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .hero-content-container {
            max-width: 80%;
          }
          
          .hero-title {
            font-size: 5rem !important;
            margin-bottom: 4.5rem;
            margin-top: -120px !important;
          }
          
          .hero-description {
            font-size: 2rem !important;
            max-width: 60%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 1.5rem 3rem;
            font-size: 1.375rem;
            margin-top: 5rem !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .hero-content-container {
            max-width: 75%;
          }
          
          .hero-title {
            font-size: 6rem !important;
            margin-bottom: 5rem;
            margin-top: -150px !important;
          }
          
          .hero-description {
            font-size: 2.5rem !important;
            max-width: 55%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 1.75rem 3.5rem;
            font-size: 1.75rem;
            margin-top: 6rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .hero-content-container {
            max-width: 70%;
          }
          
          .hero-title {
            font-size: 7.5rem !important;
            margin-bottom: 6rem;
            margin-top: -200px !important;
          }
          
          .hero-description {
            font-size: 3rem !important;
            max-width: 50%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-button {
            padding: 2rem 4rem;
            font-size: 2rem;
            margin-top: 7rem !important;
            border-radius: 9999px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;