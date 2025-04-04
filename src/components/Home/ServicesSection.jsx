import { Link } from 'react-router-dom';
import designImg from '../../assets/HomePage/Home_img2.png';
import legalImg from '../../assets/HomePage/Home_img3.png';
import astrologyImg from '../../assets/HomePage/Home_img4.png';
import wallpaper from '../../assets/HomePage/Wallpaper.png';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

const ServicesSection = () => {


  const services = [
    {
      id: 1,
      title: "Design Services",
      description: "Transform your brand with UX/UI design, logo design, and more.",
      image: astrologyImg,
      link: "https://arvami.framer.website/",
      btnText: "View Our Portfolio"
    },
    {
      id: 2,
      title: "GST Registration & Tax Services",
      description: "Efficient GST registration, PAN card, and income tax return services.",
      image: legalImg,
      link: "/business-registrations-legal",
      btnText: "Learn more"
    },
    {
      id: 3,
      title: "Astrology Services",
      description: "Unlock the secrets of numerology, Vedic astrology, and more.",
      image: designImg,
      link: "/astrology",
      btnText: "Explore Astrology"
    }
  ];



  return (
    <div className="services-section py-20 bg-navy-900 relative">
      {/* Background Image */}
      <div className="services-bg-wrapper absolute inset-0 w-full h-full">
        <img
          src={wallpaper}
          alt="Background"
          className="services-bg-image w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900 opacity-50"></div> */}
      </div>
      <div className="services-container container relative mx-auto px-6 z-10">
        <h2 className="services-title text-3xl font-bold text-white text-center mb-16">Featured Services</h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {services.map((service, index) => (
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={index * 200} threshold={0.2}>
              <div
                key={service.id}
                className={"service-card  bg-navy-800 rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 h-full flex flex-col pb-10 w-[95%] border-2 border-gray-400 hover:border-blue-500"}
                style={{
                  backgroundColor: "#000322",
                  perspective: "1000px", // Add 3D perspective
                }}
              >
                <div className="card-inner">
                  <div className="service-image-container h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="service-content p-8 flex-grow flex flex-col justify-between">
                    <div className="service-text-wrapper">
                      <h3 className="service-title font-bold text-white mb-4" style={{ fontSize: '20px' }}>{service.title}</h3>
                      <p className="service-description text-gray-300 mb-6">{service.description}</p>
                    </div>
                    <a
                      href={service.link}
                      target='_blank'
                      className="service-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
                    >
                      {service.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Background design elements - network pattern */}
      <div className="pattern-overlay absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="pattern-inner w-full h-full bg-network-pattern bg-no-repeat bg-right-bottom bg-contain"></div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        /* Card flip animation */
        .service-card {
          transform-style: preserve-3d;
          position: relative;
        }
        
        .card-inner {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .flip-card .card-inner {
          animation: flipAnimation 2s forwards;
        }
        
        @keyframes flipAnimation {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Animation delay for cards */
        .service-card:nth-child(2) .card-inner {
          animation-delay: 0.1s;
        }
        
        .service-card:nth-child(3) .card-inner {
          animation-delay: 0.2s;
        }
        
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .services-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .services-title {
            font-size: 1.75rem !important;
            margin-bottom: 2rem;
          }
          
          .service-card {
            width: 100% !important;
            margin-bottom: 2rem;
          }
          
          .service-image-container {
            height: 200px;
          }
          
          .service-title {
            font-size: 16px !important;
            margin-bottom: 0.5rem;
          }
          
          .service-description {
            font-size: 0.875rem !important;
            margin-bottom: 1rem;
          }
          
          .service-link {
            font-size: 0.75rem !important;
          }
          
          .service-content {
            padding: 1rem;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .services-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .services-title {
            font-size: 2rem !important;
            margin-bottom: 2.5rem;
          }
          
          .service-card {
            width: 100% !important;
            margin-bottom: 2rem;
          }
          
          .service-image-container {
            height: 225px;
          }
          
          .service-title {
            font-size: 18px !important;
          }
          
          .service-description {
            font-size: 1rem !important;
          }
          
          .service-content {
            padding: 1.5rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .services-title {
            font-size: 2.25rem !important;
            margin-bottom: 3rem;
          }
          
          .services-grid {
            gap: 1.5rem;
          }
          
          .service-card {
            width: 100% !important;
          }
          
          .service-image-container {
            height: 250px;
          }
          
          .service-title {
            font-size: 16px !important;
          }
          
          .service-description {
            font-size: 0.875rem !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .services-section {
            padding-top: 5.5rem;
            padding-bottom: 5.5rem;
          }
          
          .services-title {
            font-size: 2.5rem !important;
            margin-bottom: 3.5rem;
          }
          
          .services-grid {
            gap: 2rem;
          }
          
          .service-title {
            font-size: 18px !important;
          }
          
          .service-description {
            font-size: 1rem !important;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .services-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .services-container {
            max-width: 90%;
          }
          
          .services-title {
            font-size: 2.75rem !important;
            margin-bottom: 4rem;
          }
          
          .service-image-container {
            height: 280px;
          }
          
          .service-title {
            font-size: 22px !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .services-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .services-container {
            max-width: 85%;
          }
          
          .services-title {
            font-size: 3rem !important;
            margin-bottom: 4.5rem;
          }
          
          .services-grid {
            gap: 2.5rem;
          }
          
          .service-image-container {
            height: 300px;
          }
          
          .service-title {
            font-size: 24px !important;
            margin-bottom: 1rem;
          }
          
          .service-description {
            font-size: 1.125rem !important;
            margin-bottom: 1.5rem;
          }
          
          .service-link {
            font-size: 1rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .services-section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          .services-container {
            max-width: 80%;
          }
          
          .services-title {
            font-size: 3.5rem !important;
            margin-bottom: 5rem;
          }
          
          .services-grid {
            gap: 3rem;
          }
          
          .service-image-container {
            height: 350px;
          }
          
          .service-content {
            padding: 2rem;
          }
          
          .service-title {
            font-size: 28px !important;
            margin-bottom: 1.25rem;
          }
          
          .service-description {
            font-size: 1.25rem !important;
            margin-bottom: 2rem;
          }
          
          .service-link {
            font-size: 1.125rem !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .services-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .services-container {
            max-width: 75%;
          }
          
          .services-title {
            font-size: 4rem !important;
            margin-bottom: 6rem;
          }
          
          .services-grid {
            gap: 4rem;
          }
          
          .service-image-container {
            height: 450px;
          }
          
          .service-content {
            padding: 3rem;
          }
          
          .service-title {
            font-size: 32px !important;
            margin-bottom: 1.5rem;
          }
          
          .service-description {
            font-size: 1.5rem !important;
            margin-bottom: 3rem;
          }
          
          .service-link {
            font-size: 1.25rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .services-section {
            padding-top: 12rem;
            padding-bottom: 12rem;
          }
          
          .services-container {
            max-width: 70%;
          }
          
          .services-title {
            font-size: 5rem !important;
            margin-bottom: 8rem;
          }
          
          .services-grid {
            gap: 6rem;
          }
          
          .service-image-container {
            height: 550px;
          }
          
          .service-content {
            padding: 4rem;
          }
          
          .service-title {
            font-size: 36px !important;
            margin-bottom: 2rem;
          }
          
          .service-description {
            font-size: 2rem !important;
            margin-bottom: 4rem;
          }
          
          .service-link {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;