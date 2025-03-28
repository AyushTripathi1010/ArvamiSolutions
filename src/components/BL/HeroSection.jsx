import { useContext } from 'react';
import blImg16 from '../../assets/BusinessLegalPage/handshake-removebg-preview.png';
import blImg17 from '../../assets/BusinessLegalPage/notebook-removebg-preview.png';
import blImg1 from '../../assets/BusinessLegalPage/BL_img1.png'
import { ModalContext } from './BusinessLegalPage'

const HeroSection = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="hero-container relative h-screen w-full overflow-hidden">
      {/* Optional background image if needed */}
      <div className="hero-bg-image absolute inset-0 " style={{
        backgroundImage: `url(${blImg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      {/* Handshake image */}
      <div className="handshake-wrapper absolute right-[6%] top-48 transform -translate-y-1/2 opacity-80 hidden lg:block handshake-image">
        <img
          src={blImg16}
          alt="Handshake"
          className="handshake-img h-[55vh]"
        />
      </div>

      {/* Document image */}
      <div className="document-wrapper absolute right-[-3%] bottom-8 opacity-80 hidden lg:block transform -rotate-[30deg] document-image">
        <img
          src={blImg17}
          alt="Document"
          className="document-img h-[52vh]"
        />
      </div>

      {/* Content Container - Left-aligned */}
      <div className="hero-content-container container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 h-full relative z-10 mt-0 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20 xl:gap-40 2xl:gap-80"
        style={{ marginLeft: '7%' }}>
        <div className="hero-text-wrapper text-white w-full ">
          <h1 style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            lineHeight: '1.5'
          }} className="hero-heading font-bold mb-6">
            Streamline Your Business with Our Expert Legal & Registration Services
          </h1>
          <p className="hero-subheading mb-10" style={{
            fontSize: 'clamp(18px, 2.5vw, 28px)'
          }}>
            Simplify complex processes and focus on what matters most – growing your business.
          </p>
          {/* Increased width of paragraph container */}
          <div className="hero-desc-container w-full md:w-[90%] lg:w-[85%] xl:w-[800px]">
            <p className="hero-description text-white mb-10 text-[19px]">
              Our team of experienced professionals specializes in a wide range of business
              registration and legal services. We understand the intricacies of GST, PAN, TDS,
              FSSAI, MSME, and other regulatory requirements. You can rely on us for accurate,
              efficient, and timely processing of your essential business documents.
            </p>
          </div>
          <button
            onClick={openModal}
            className="hero-cta-button inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 "
            style={{ marginTop: '55px' }}
          >
            Request a Service
          </button>
        </div>
      </div>

      {/* Network Pattern Overlay - Similar to Section1 */}
      <div className="overlay-pattern absolute inset-0 pointer-events-none">
        <div className="pattern-inner w-full h-full bg-network-pattern opacity-20"></div>
      </div>

      {/* Custom Media Queries for responsive design */}
      <style jsx>{`
        /* For smaller laptop screens (1024px) */
        @media (max-width: 1024px) {
          .container {
            padding-left: 0%;
            padding-right: 0%;
            margin-left:5%;
          }
          
          .grid {
            gap: 3%;
          }
          
          .handshake-image {
            right: 6%;
            top: 25%;
          }
          
          .handshake-image img {
            height: 48vh;
          }
          
          .document-image {
            right: -3%;
            bottom: 6%;
          }
          
          .document-image img {
            height: 45vh;
          }

          .hero-heading {
            font-size: 24px !important;
          }
          
          .hero-subheading {
            font-size: 16px !important;
          }
          
          .hero-description {
            font-size: 16px !important;
          }
        }
        
        /* For smaller laptops (1366px) */
        @media (min-width: 1025px) and (max-width: 1366px) {
          .container {
            padding-left: 5%;
            padding-right: 5%;
          }
          
          .grid {
            gap: 3%;
          }

          .handshake-image {
            right: 6%;
            top: 48%;
          }
          
          .handshake-image img {
            height: 50vh;
          }
          
          .document-image {
            right: -3%;
            bottom: 8%;
          }
          
          .document-image img {
            height: 48vh;
          }

          .hero-heading {
            font-size: 30px !important;
          }
          
          .hero-subheading {
            font-size: 20px !important;
          }
          
          .hero-description {
            font-size: 17px !important;
          }
        }
        
        /* For medium laptops and desktops (1367px to 1999px) */
        @media (min-width: 1367px) and (max-width: 1999px) {
          .container {
              padding-left: 0%;
              padding-right: 0%;
          }
            
          .grid {
            gap: 3%;
          }

          .handshake-image {
            right: 6%;
            top: 25%;
          }
          
          .handshake-image img {
            height: 55vh;
          }
          
          .document-image {
            right: -3%;
            bottom: 6%;
          }
          
          .document-image img {
            height: 52vh;
          }

          .hero-heading {
            font-size: 36px !important;
          }
          
          .hero-subheading {
            font-size: 24px !important;
          }
          
          .hero-description {
            font-size: 19px !important;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .grid {
            gap: 5%;
          }
          
          .hero-heading {
            font-size: 52px !important;
          }
          
          .hero-subheading {
            font-size: 26px !important;
          }
          
          .hero-description {
            font-size: 22px !important;
            line-height: 1.6;
            width: 800px;
            max-width: 100%;
          }
          
          .hero-cta-button {
            padding: 1rem 2.5rem;
            font-size: 1.2rem;
          }
          
          .handshake-image {
            right: 7%;
            top: 48%;
          }
          
          .handshake-image img {
            height: 62vh;
          }
          
          .document-image {
            right: -2%;
            bottom: 8%;
          }
          
          .document-image img {
            height: 58vh;
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .container {
            max-width: 70%;
          }
          
          .grid {
            gap: 8%;
          }
          
          .hero-heading {
            font-size: 64px !important;
          }
          
          .hero-subheading {
            font-size: 32px !important;
          }
          
          .hero-description {
            font-size: 24px !important;
            line-height: 1.7;
            width: 1000px;
            max-width: 100%;
          }
          
          .hero-cta-button {
            padding: 1.2rem 3rem;
            font-size: 1.4rem;
          }
          
          .handshake-image {
            right: 8%;
            top: 48%;
          }
          
          .handshake-image img {
            height: 70vh;
          }
          
          .document-image {
            right: -1%;
            bottom: 10%;
          }
          
          .document-image img {
            height: 65vh;
          }
        }
        
        /* For ultra-wide screens (4000px and above) */
        @media (min-width: 4000px) {
          .hero-heading {
            font-size: 80px !important;
          }
          
          .hero-subheading {
            font-size: 40px !important;
          }
          
          .hero-description {
            font-size: 28px !important;
            width: 1200px;
          }
          
          .hero-cta-button {
            padding: 1.5rem 4rem;
            font-size: 1.6rem;
          }
          
          .handshake-image {
            right: 10%;
            top: 45%;
          }
          
          .handshake-image img {
            height: 75vh;
          }
          
          .document-image {
            right: 0%;
            bottom: 12%;
          }
          
          .document-image img {
            height: 70vh;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;