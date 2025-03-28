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
    <div className="py-20 relative" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-opacity-95"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            We bring your design vision to life efficiently and affordably. From websites and UI/UX to
            logos and brochures, we craft impactful designs that captivate your audience.
          </h2>
        </div>

        {/* First 3 service boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pl-10">
          {services.map((service) => (
            <div key={service.id} className="bg-navy-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border border-s-white service-card pb-10 w-[90%]" style={{ backgroundColor: "#000322" }}>
              <div className="h-72 overflow-hidden mb-7">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 service-title">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm service-description">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block text-sm text-primary-400 hover:text-primary-300 service-link"
                >
                  {service.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth service box centered */}
        <div className="flex justify-center">
          <div className="bg-navy-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border border-s-white max-w-md service-card pb-10 w-[90%]" style={{ backgroundColor: "#000322" }}>
            <div className="h-72 overflow-hidden mb-7">
              <img
                src={printService.image}
                alt={printService.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2 service-title">{printService.title}</h3>
              <p className="text-gray-300 mb-4 text-sm service-description">{printService.description}</p>
              <Link
                to={printService.link}
                className="inline-block text-sm text-primary-400 hover:text-primary-300 service-link"
              >
                {printService.btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background design elements */}
      <div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-network-pattern bg-no-repeat bg-right-bottom bg-contain"></div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        /* For smaller laptop screens (1024px) */
        @media (max-width: 1024px) {
          .container {
            padding-left: 5%;
            padding-right: 5%;
          }
          
          .service-card {
            transform: scale(0.98);
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          h2 {
            font-size: 2.5rem;
            max-width: 70%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .service-title {
            font-size: 1.5rem;
          }
          
          .service-description {
            font-size: 1rem;
          }
          
          .service-link {
            font-size: 1rem;
          }
          
          .service-card {
            padding-bottom: 0.5rem;
          }
          
          .service-card .h-48 {
            height: 14rem;
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .container {
            max-width: 70%;
          }
          
          h2 {
            font-size: 3rem;
          }
          
          .service-title {
            font-size: 1.75rem;
          }
          
          .service-description {
            font-size: 1.25rem;
          }
          
          .service-link {
            font-size: 1.25rem;
          }
          
          .service-card .h-48 {
            height: 18rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Section2;