import { Link } from 'react-router-dom';
import blImg9 from '../../assets/BusinessLegalPage/BL_img9.png';
import blImg10 from '../../assets/BusinessLegalPage/BL_img10.png';
import blImg11 from '../../assets/BusinessLegalPage/BL_img11.png';
import blImg12 from '../../assets/BusinessLegalPage/BL_img12.png';
import blImg13 from '../../assets/BusinessLegalPage/BL_img13.png';
import blImg14 from '../../assets/BusinessLegalPage/BL_img14.png';
import blImg15 from '../../assets/BusinessLegalPage/BL_img15.png';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "GST Registration",
      description: "Simplify GST compliance and avoid penalties. We handle the entire registration process, ensuring accurate documentation and timely filing.",
      image: blImg15,
      action: "Get Your Numerology Report",
      link: "/contact-us"
    },
    {
      id: 2,
      title: "TDS Return Filing",
      description: "Ensure accurate and timely filing of your TDS returns. We handle the calculations and filing process, minimizing your tax liabilities and avoiding penalties.",
      image: blImg14,
      action: "Analyze handwriting",
      link: "/contact-us"
    },
    {
      id: 3,
      title: "PAN Card Application",
      description: "Get your PAN card quickly and easily. We assist with the application process, ensuring all details are correct and submitted promptly.",
      image: blImg13,
      action: "Consult a Vaastu expert",
      link: "/contact-us"
    },
    {
      id: 4,
      title: "Aadhar Card Address Change",
      description: "Update your Aadhar card address hassle-free. We assist with the online process, ensuring your information is accurately reflected in government records.",
      image: blImg12,
      action: "Get Your Numerology Report",
      link: "/contact-us",
      listStyle: true
    },
    {
      id: 5,
      title: "Project Report Preparation",
      description: "Need a professional project report for a loan, ISO certification, or other purpose? We create comprehensive and compelling reports tailored to your specific requirements.",
      image: blImg11,
      action: "Analyze handwriting",
      link: "/contact-us",
      listStyle: true
    },
    {
      id: 6,
      title: "FSSAI Food License",
      description: "Obtain your FSSAI food license without the stress. We guide you through the application process, ensuring compliance with all regulations and food safety standards.",
      image: blImg10,
      action: "Consult a Vaastu expert",
      link: "/contact-us",
      listStyle: true
    }
  ];

  const centerService = {
    id: 7,
    title: "Udyam Aadhaar Registration",
    description: "Register your business as an MSME and unlock numerous benefits. We simplify the online registration process, helping you obtain your Udyam Aadhaar certificate quickly.",
    image: blImg9,
    action: "Get Your Numerology Report",
    link: "/contact-us",
    listStyle: true
  };

  return (
    <div className="services-section py-20" style={{ backgroundColor: "#000322" }}>
      <div className="services-container container mx-auto px-6" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
        <h2 className="services-title text-3xl font-bold text-white text-center mb-16">How We Can Help?</h2>

        {/* Grid for first 6 services (3x2) */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {services.map((service) => ( 
            <div key={service.id} className="service-card bg-navy-800 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl border border-s-white flex flex-col" style={{ backgroundColor: "#000322" }}>
              <div className="service-image-container h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image w-full h-full object-cover"
                />
              </div>
              <div className="service-content p-6 flex flex-col flex-grow">
                <h3 className="service-title text-xl font-bold text-white mb-4">{service.title}</h3>
                {service.listStyle ? (
                  <ul className="service-description-list text-gray-300 mb-6 space-y-2 flex-grow">
                    <li className="service-description-item flex items-start">
                      <span className="service-bullet mr-2">•</span>
                      <span className="service-description-text">{service.description}</span>
                    </li>
                  </ul>
                ) : (
                  <p className="service-description text-gray-300 mb-6 flex-grow">{service.description}</p>
                )}
                <Link
                  to={service.link}
                  className="service-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
                >
                  {service.action}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Center service card - 7th card */}
        <div className="center-service-wrapper flex justify-center">
          <div className="center-service-card bg-navy-800 rounded-xl overflow-hidden shadow-lg max-w-md transition duration-300 hover:shadow-2xl border border-s-white flex flex-col" style={{ backgroundColor: "#000322" }}>
            <div className="center-service-image-container h-60 overflow-hidden">
              <img
                src={centerService.image}
                alt={centerService.title}
                className="center-service-image w-full h-full object-cover"
              />
            </div>
            <div className="center-service-content p-6 flex flex-col flex-grow">
              <h3 className="center-service-title text-xl font-bold text-white mb-4">{centerService.title}</h3>
              <ul className="center-service-description-list text-gray-300 mb-6 space-y-2 flex-grow">
                <li className="center-service-description-item flex items-start">
                  <span className="center-service-bullet mr-2">•</span>
                  <span className="center-service-description-text">{centerService.description}</span>
                </li>
              </ul>
              <Link
                to={centerService.link}
                className="center-service-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
              >
                {centerService.action}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 767px) */
        @media (max-width: 767px) {
          .services-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .services-title {
            font-size: 24px !important;
            margin-bottom: 2rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 18px !important;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 14px !important;
          }
          
          .service-link,
          .center-service-link {
            font-size: 12px !important;
          }
          
          .services-grid {
            gap: 2rem;
          }
          
          .service-image-container,
          .center-service-image-container {
            height: 180px;
          }
          
          .service-content,
          .center-service-content {
            padding: 1rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .services-title {
            font-size: 28px !important;
            margin-bottom: 2.5rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 20px !important;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 15px !important;
          }
          
          .services-grid {
            gap: 1.5rem;
          }
          
          .service-image-container,
          .center-service-image-container {
            height: 200px;
          }
        }
        
        /* For smaller laptops (1024px - 1366px) */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .services-title {
            font-size: 30px !important;
            margin-bottom: 3rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 20px !important;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 15px !important;
          }
          
          .services-grid {
            gap: 2rem;
          }
        }
        
        /* For medium laptops and desktops (1367px - 1999px) */
        @media (min-width: 1367px) and (max-width: 1999px) {
          .services-title {
            font-size: 36px !important;
            margin-bottom: 3.5rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 22px !important;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 16px !important;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .services-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .services-container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .services-title {
            font-size: 48px !important;
            margin-bottom: 4rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 28px !important;
            margin-bottom: 1.5rem;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 18px !important;
          }
          
          .service-link,
          .center-service-link {
            font-size: 16px !important;
          }
          
          .service-content,
          .center-service-content {
            padding: 2rem;
          }
          
          .service-image-container,
          .center-service-image-container {
            height: 300px;
          }
          
          .center-service-card {
            max-width: 600px;
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .services-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .services-container {
            max-width: 70%;
          }
          
          .services-title {
            font-size: 60px !important;
            margin-bottom: 5rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 36px !important;
            margin-bottom: 2rem;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 24px !important;
            margin-bottom: 2rem;
          }
          
          .service-link,
          .center-service-link {
            font-size: 20px !important;
          }
          
          .service-content,
          .center-service-content {
            padding: 3rem;
          }
          
          .service-image-container,
          .center-service-image-container {
            height: 400px;
          }
          
          .center-service-card {
            max-width: 800px;
          }
        }
        
        /* For ultra-wide screens (4000px and above) */
        @media (min-width: 4000px) {
          .services-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .services-container {
            max-width: 60%;
          }
          
          .services-title {
            font-size: 80px !important;
            margin-bottom: 6rem;
          }
          
          .service-title, 
          .center-service-title {
            font-size: 48px !important;
            margin-bottom: 3rem;
          }
          
          .service-description, 
          .service-description-text,
          .center-service-description-text {
            font-size: 32px !important;
            margin-bottom: 3rem;
          }
          
          .service-link,
          .center-service-link {
            font-size: 24px !important;
          }
          
          .service-content,
          .center-service-content {
            padding: 4rem;
          }
          
          .service-image-container,
          .center-service-image-container {
            height: 500px;
          }
          
          .center-service-card {
            max-width: 1000px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;