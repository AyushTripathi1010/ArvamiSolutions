import { Link } from 'react-router-dom';
import uiuxImage from '../../assets/DesignPage/Design_img10.png';
import webDevImage from '../../assets/DesignPage/Design_img11.png';
import brandingImage from '../../assets/DesignPage/Design_img12.png';
import printDesignImage from '../../assets/DesignPage/Design_img13.png';
import bgImage from '../../assets/DesignPage/Design_img7.png';

const Section2 = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "We design intuitive & visually stunning UI/UX for websites and apps.",
      image: uiuxImage,
      link: "/design/ui-ux",
      btnText: "View Our Portfolio"
    },
    {
      id: 2,
      title: "Website Development",
      description: "From business websites to eCommerce stores, we build seamless digital experiences",
      image: webDevImage,
      link: "/design/web-development",
      btnText: "Get a Website Quote"
    },
    {
      id: 3,
      title: "Logo & Branding",
      description: "Your brand deserves a unique & professional logo that stands out.",
      image: brandingImage,
      link: "/design/branding",
      btnText: "Design my Logo"
    }
  ];

  const printService = {
    id: 4,
    title: "Brochure & Print Design",
    description: "Eye-catching brochures, flyers, and banners for strong brand communication.",
    image: printDesignImage,
    link: "/design/print",
    btnText: "Get a Quote"
  };

  return (
    <div className="design-section py-20 relative" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-opacity-95"></div>

      <div className="design-container container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="design-title text-3xl font-bold text-white mb-6">
            We bring your design vision to life efficiently and affordably. From websites and UI/UX to
            logos and brochures, we craft impactful designs that captivate your audience.
          </h2>
        </div>

        {/* First 3 service boxes */}
        <div className="design-grid grid grid-cols-1 md:grid-cols-3 gap-10 pl-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="design-card bg-navy-800 rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 h-full flex flex-col pb-10 w-[95%]"
              style={{
                backgroundColor: "#000322",
                boxShadow: "0px 0px 20px 10px rgba(60,31,122,1)"
              }}
            >
              <div className="design-image-container h-72 overflow-hidden mb-7">
                <img
                  src={service.image}
                  alt={service.title}
                  className="design-image w-full h-full object-cover"
                />
              </div>
              <div className="design-content p-5 flex-grow flex flex-col justify-between">
                <div className="design-text-wrapper">
                  <h3 className="design-title font-bold text-white mb-2" style={{ fontSize: '20px' }}>{service.title}</h3>
                  <p className="design-description text-gray-300 mb-4 text-sm">{service.description}</p>
                </div>
                <Link
                  to={service.link}
                  className="design-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
                >
                  {service.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth service box centered */}
        <div className="flex justify-center mt-10">
          <div
            className="design-card last-grid bg-navy-800 rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 flex flex-col pb-10 w-[60%]"
            style={{
              backgroundColor: "#000322",
              boxShadow: "0px 0px 20px 10px rgba(60,31,122,1)"
            }}
          >
            <div className="design-image-container h-72 overflow-hidden mb-7">
              <img
                src={printService.image}
                alt={printService.title}
                className="design-image w-full h-full object-cover"
              />
            </div>
            <div className="design-content p-5 flex-grow flex flex-col justify-between">
              <div className="design-text-wrapper">
                <h3 className="design-title font-bold text-white mb-2" style={{ fontSize: '20px' }}>{printService.title}</h3>
                <p className="design-description text-gray-300 mb-4 text-sm">{printService.description}</p>
              </div>
              <Link
                to={printService.link}
                className="design-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
              >
                {printService.btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background design elements */}
      <div className="pattern-overlay absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="pattern-inner w-full h-full bg-network-pattern bg-no-repeat bg-right-bottom bg-contain"></div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .design-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .design-title {
            font-size: 1.75rem !important;
            margin-bottom: 2rem;
          }
          
          .design-grid {
            padding-left: 0;
          }
          
          .design-card {
            width: 100% !important;
            margin-bottom: 2rem;
          }
          
          .design-image-container {
            height: 200px;
          }
          
          .design-title {
            font-size: 16px !important;
            margin-bottom: 0.5rem;
          }
          
          .design-description {
            font-size: 0.875rem !important;
            margin-bottom: 1rem;
          }
          
          .design-link {
            font-size: 0.75rem !important;
          }
          
          .design-content {
            padding: 1rem;
          }
          
          .flex.justify-center .design-card {
            width: 100% !important;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .design-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .design-title {
            font-size: 2rem !important;
            margin-bottom: 2.5rem;
          }
          
          .design-grid {
            padding-left: 0;
          }
          
          .design-card {
            width: 100% !important;
            margin-bottom: 2rem;
          }
          
          .design-image-container {
            height: 225px;
          }
          
          .design-title {
            font-size: 18px !important;
          }
          
          .design-description {
            font-size: 1rem !important;
          }
          
          .design-content {
            padding: 1.5rem;
          }
          
          .flex.justify-center .design-card {
            width: 90% !important;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .design-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .design-title {
            font-size: 2.25rem !important;
            margin-bottom: 3rem;
          }
          
          .design-grid {
            gap: 1.5rem;
            padding-left: 0;
          }
          
          .design-card {
            width: 100% !important;
          }
          
          .design-image-container {
            height: 250px;
          }
          
          .design-title {
            font-size: 16px !important;
          }
          
          .design-description {
            font-size: 0.875rem !important;
          }
          
          .flex.justify-center .design-card {
            width: 80% !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .design-section {
            padding-top: 5.5rem;
            padding-bottom: 5.5rem;
          }
          
          .design-title {
            font-size: 2.5rem !important;
            margin-bottom: 3.5rem;
          }
          
          .design-grid {
            gap: 2rem;
            padding-left: 0.5rem;
          }
          
          .design-title {
            font-size: 18px !important;
          }
          
          .design-description {
            font-size: 1rem !important;
          }
          
          .flex.justify-center .design-card {
            width: 70% !important;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .design-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .design-container {
            max-width: 90%;
          }
          
          .design-title {
            font-size: 2.75rem !important;
            margin-bottom: 1.5rem;
          }
          
          .design-image-container {
            height: 280px;
          }

          .design-title {
            font-size: 22px !important;
          }
          
          

          .last-grid{
              width:31%;
            }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .design-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .design-container {
            max-width: 95%;
          }
          
          .design-title {
            font-size: 3rem !important;
            margin-bottom: 4.5rem;
          }
          
          .design-grid {
            gap: 2.5rem;
          }
            .last-grid{
              width:31%;
            }
          
          .design-image-container {
            height: 300px;
          }
          
          .design-title {
            font-size: 24px !important;
            margin-bottom: 1rem;
          }
          
          .design-description {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem;
          }
          
          .design-link {
            font-size: 1rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .design-section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          .design-container {
            max-width: 100%;
          }
          
          .design-title {
            font-size: 3.5rem !important;
            margin-bottom: 5rem;
          }
          
          .design-grid {
            gap: 3rem;
          }
          
          .design-image-container {
            height: 350px;
          }
          
          .design-content {
            padding: 2rem;
          }
          
          .design-title {
            font-size: 28px !important;
            margin-bottom: 1.25rem;
          }
          
          .design-description {
            font-size: 1.25rem !important;
            margin-bottom: 2rem;
          }
          
          .design-link {
            font-size: 1.125rem !important;
          }

          .last-grid{
              width:31%;
            }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .design-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .design-container {
            max-width: 75%;
          }
          
          .design-title {
            font-size: 4rem !important;
            margin-bottom: 6rem;
          }
          
          .design-grid {
            gap: 4rem;
          }
          
          .design-image-container {
            height: 450px;
          }
          
          .design-content {
            padding: 3rem;
          }
          
          .design-title {
            font-size: 32px !important;
            margin-bottom: 1.5rem;
          }
          
          .design-description {
            font-size: 1.5rem !important;
            margin-bottom: 3rem;
          }
          
          .design-link {
            font-size: 1.25rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .design-section {
            padding-top: 12rem;
            padding-bottom: 12rem;
          }
          
          .design-container {
            max-width: 70%;
          }
          
          .design-title {
            font-size: 5rem !important;
            margin-bottom: 8rem;
          }
          
          .design-grid {
            gap: 6rem;
          }
          
          .design-image-container {
            height: 550px;
          }
          
          .design-content {
            padding: 4rem;
          }
          
          .design-title {
            font-size: 36px !important;
            margin-bottom: 2rem;
          }
          
          .design-description {
            font-size: 2rem !important;
            margin-bottom: 4rem;
          }
          
          .design-link {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Section2;