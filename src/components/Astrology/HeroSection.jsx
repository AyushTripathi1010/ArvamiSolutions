import { useContext } from 'react';
import astroImg7 from '../../assets/AstrologyPage/Astro_img7.png';
import { ModalContext } from './AstrologyPage';


const HeroSection = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div 
      className="relative h-screen w-full bg-navy-900"
      style={{
        backgroundImage: `url(${astroImg7})`,
        backgroundPositionX: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' // This ensures the full image is visible
      }}
    >
      {/* Content Container - Left-aligned */}
      <div className="container mx-auto px-24 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Unlock the Mystical Power of Astrology for a Better Life!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 drop-shadow-lg">
            Discover insights into your destiny with Numerology, Vastu, and Vedic Switch Words.
          </p>
          <button
                onClick={openModal}
                className="inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 "
                style={{ marginTop: '55px' }}
              >
                Book a Consultation
              </button>
        </div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;