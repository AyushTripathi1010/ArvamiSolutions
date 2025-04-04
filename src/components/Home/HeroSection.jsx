import { Link } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import Home_img5 from '../../assets/HomePage/Home_img5.png'
import Home_img5_video_mobile from '../../assets/HomePage/Home_page_video.mp4'
import Home_img5_video from '../../assets/HomePage/Home_page_video2.mp4'
import { ModalContext } from './HomePage';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

const HeroSection = () => {
  // Get openModal function from context  
  const { openModal } = useContext(ModalContext);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  // Check if screen is mobile and update video source directly
  useEffect(() => {
    const checkIfMobile = () => {
      const mobileView = window.innerWidth <= 767;
      setIsMobile(mobileView);

      // Directly update video source when size changes
      if (videoRef.current) {
        const videoElement = videoRef.current;
        const currentSrc = videoElement.querySelector('source');
        const targetSrc = mobileView ? Home_img5_video_mobile : Home_img5_video;

        // Only reload if source changed
        if (currentSrc && currentSrc.src !== targetSrc) {
          currentSrc.src = targetSrc;
          videoElement.load(); // Force reload with new source
          videoElement.play().catch(err => console.error("Video play failed:", err));
        }
      }
    };

    // Run on initial load
    checkIfMobile();

    // Set up event listener for resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="video-container absolute inset-0">
          {isMobile ? (
            // Mobile video (rendered conditionally)
            <video
              ref={videoRef}
              key="mobile-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover video-bg"
            >
              <source src={Home_img5_video_mobile} type="video/mp4" />
              <img
                src={Home_img5}
                alt="Background"
                className="w-full h-full object-contain"
              />
            </video>
          ) : (
            // Desktop video
            <video
              ref={videoRef}
              key="desktop-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover video-bg"
            >
              <source src={Home_img5_video} type="video/mp4" />
              <img
                src={Home_img5}
                alt="Background"
                className="w-full h-full object-contain"
              />
            </video>
          )}
        </div>
        {/* Black opacity overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Original gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollAnimation direction="up" distance="40px" duration={1200}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-14 mt-[-100px] hero-title" style={{ lineHeight: '1.4' }}>
            Empowering Businesses and Individuals
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance="40px" duration={1200} delay={300}>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto hero-description">
            Providing expert IT, legal, design, and personalized astrology services to help you thrive.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" distance="40px" duration={1200} delay={600}>
          <button
            onClick={openModal}
            className="inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 hero-button"
            style={{ marginTop: '55px' }}
          >
            Explore Our Services
          </button>
        </ScrollAnimation>
      </div>

      {/* Network Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-network-pattern opacity-20"></div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        /* Video Background Specific Styles */
        .video-container {
          width: 100%;
          height: 100%;
        }

        .video-bg {
          min-width: 100%;
          min-height: 100%;
          width: 100%;
          height: 100%;
          object-fit: fill;
          background-repeat: repeat;
          background-size: auto;
        }
        
        @media (max-width: 767px) {
          .video-bg {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .hero-title {
            font-size: 2rem !important;
            margin-top: -50px !important;
            margin-bottom: 1rem !important;
            line-height: 1.2;
            padding: 0 0.5rem;
          }
          
          .hero-description {
            font-size: 1rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.4;
            padding: 0 0.5rem;
          }
          
          .hero-button {
            font-size: 0.875rem !important;
            padding: 0.5rem 1.25rem !important;
            margin-top: 25px !important;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem !important;
            margin-top: -70px !important;
            margin-bottom: 1.25rem !important;
          }
          
          .hero-description {
            font-size: 1.125rem !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-button {
            font-size: 0.9375rem !important;
            padding: 0.625rem 1.75rem !important;
            margin-top: 35px !important;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-title {
            font-size: 3rem !important;
            margin-top: -80px !important;
            margin-bottom: 1.5rem !important;
          }
          
          .hero-description {
            font-size: 1.25rem !important;
            margin-bottom: 1.25rem !important;
            max-width: 90% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1rem !important;
            padding: 0.75rem 2rem !important;
            margin-top: 45px !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .hero-title {
            font-size: 3.5rem !important;
            margin-top: -90px !important;
            margin-bottom: 1.75rem !important;
          }
          
          .hero-description {
            font-size: 1.375rem !important;
            margin-bottom: 1.5rem !important;
            max-width: 85% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1.0625rem !important;
            padding: 0.75rem 2.25rem !important;
            margin-top: 50px !important;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .hero-title {
            font-size: 2rem !important;
            margin-top: -95px !important;
            margin-bottom: 2rem !important;
          }
          
          .hero-description {
            font-size: 1.5rem !important;
            margin-bottom: 1.75rem !important;
            max-width: 80% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1.125rem !important;
            padding: 0.875rem 2.5rem !important;
            margin-top: 52px !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .hero-title {
            font-size: 3.5rem !important;
            margin-top: -100px !important;
            margin-bottom: 3.5rem !important;
          }
          
          .hero-description {
            font-size: 1.6rem !important;
            margin-bottom: 2rem !important;
            max-width: 60% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1.1875rem !important;
            padding: 1rem 3rem !important;
            margin-top: 55px !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .hero-title {
            font-size: 5rem !important;
            margin-top: -110px !important;
            margin-bottom: 2.5rem !important;
          }
          
          .hero-description {
            font-size: 1.75rem !important;
            margin-bottom: 2.25rem !important;
            max-width: 70% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1.25rem !important;
            padding: 1.125rem 3.5rem !important;
            margin-top: 60px !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .hero-title {
            font-size: 6rem !important;
            margin-top: -120px !important;
            margin-bottom: 3rem !important;
          }
          
          .hero-description {
            font-size: 2rem !important;
            margin-bottom: 2.5rem !important;
            max-width: 65% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 1.5rem !important;
            padding: 1.25rem 4rem !important;
            margin-top: 70px !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .hero-title {
            font-size: 7rem !important;
            margin-top: -140px !important;
            margin-bottom: 3.5rem !important;
          }
          
          .hero-description {
            font-size: 2.5rem !important;
            margin-bottom: 3rem !important;
            max-width: 60% !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-button {
            font-size: 2rem !important;
            padding: 1.5rem 5rem !important;
            margin-top: 80px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;