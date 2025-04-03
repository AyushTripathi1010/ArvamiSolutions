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
    <div className="bl-services-section py-20" style={{ backgroundColor: "#000322" }}>
      <div className="bl-services-container container mx-auto px-4 md:px-6">
        <h2 className="bl-services-title text-3xl font-bold text-white text-center mb-16">How We Can Help?</h2>

        {/* Grid for first 6 services (3x2) */}
        <div className="bl-services-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bl-service-card bg-navy-800 rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 h-full flex flex-col pb-10 border-2 border-gray-400 hover:border-blue-500 mx-auto"
              style={{
                backgroundColor: "#000322",
                width: "100%", // Use 100% for responsive sizing
              }}
            >
              <div className="bl-service-image-container h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="bl-service-image w-full h-full object-cover"
                />
              </div>
              <div className="bl-service-content p-6 flex flex-col flex-grow">
                <h3 className="bl-service-title font-bold text-white mb-4" style={{ fontSize: '20px' }}>{service.title}</h3>
                {service.listStyle ? (
                  <ul className="bl-service-description-list text-gray-300 mb-6 space-y-2 flex-grow">
                    <li className="bl-service-description-item flex items-start">
                      <span className="bl-service-bullet mr-2">•</span>
                      <span className="bl-service-description-text">{service.description}</span>
                    </li>
                  </ul>
                ) : (
                  <p className="bl-service-description text-gray-300 mb-6 flex-grow">{service.description}</p>
                )}
                <Link
                  to={service.link}
                  className="bl-service-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
                >
                  {service.action}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Center service card - 7th card */}
        <div className="bl-center-service-wrapper flex justify-center">
          <div
            className="bl-center-service-card bg-navy-800 rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 flex flex-col pb-10 border-2 border-gray-400 hover:border-blue-500"
            style={{
              backgroundColor: "#000322",
              width: "60%", // Desktop width
            }}
          >
            <div className="bl-center-service-image-container h-52 overflow-hidden">
              <img
                src={centerService.image}
                alt={centerService.title}
                className="bl-center-service-image w-full h-full object-cover"
              />
            </div>
            <div className="bl-center-service-content p-6 flex flex-col flex-grow">
              <h3 className="bl-center-service-title font-bold text-white mb-4" style={{ fontSize: '20px' }}>{centerService.title}</h3>
              <ul className="bl-center-service-description-list text-gray-300 mb-6 space-y-2 flex-grow">
                <li className="bl-center-service-description-item flex items-start">
                  <span className="bl-center-service-bullet mr-2">•</span>
                  <span className="bl-center-service-description-text">{centerService.description}</span>
                </li>
              </ul>
              <Link
                to={centerService.link}
                className="bl-center-service-link inline-block text-sm text-primary-400 hover:text-primary-300 mt-auto"
              >
                {centerService.action}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .bl-services-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .bl-services-title {
            font-size: 1.75rem !important;
            margin-bottom: 2rem;
          }
          
          .bl-service-card {
            width: 90% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 2rem;
          }

          .bl-center-service-card {
            width: 90% !important;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 200px;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 16px !important;
            margin-bottom: 0.5rem;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 0.875rem !important;
            margin-bottom: 1rem;
          }
          
          .bl-service-link, .bl-center-service-link {
            font-size: 0.75rem !important;
          }
          
          .bl-service-content, .bl-center-service-content {
            padding: 1rem;
          }
          
          .bl-services-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .bl-services-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .bl-services-title {
            font-size: 2rem !important;
            margin-bottom: 2.5rem;
          }
          
          .bl-service-card {
            width: 90% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 2rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 225px;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 18px !important;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 1rem !important;
          }
          
          .bl-service-content, .bl-center-service-content {
            padding: 1.5rem;
          }
          
          .bl-center-service-card {
            width: 90% !important;
          }
          
          .bl-services-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bl-services-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .bl-services-title {
            font-size: 2.25rem !important;
            margin-bottom: 3rem;
          }
          
          .bl-services-grid {
            gap: 1.5rem;
          }
          
          .bl-service-card {
            width: 100% !important;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 250px;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 16px !important;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 0.875rem !important;
          }
          
          .bl-center-service-card {
            width: 40% !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .bl-services-section {
            padding-top: 5.5rem;
            padding-bottom: 5.5rem;
          }
          
          .bl-services-title {
            font-size: 2.5rem !important;
            margin-bottom: 3.5rem;
          }
          
          .bl-services-grid {
            gap: 2rem;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 18px !important;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 1rem !important;
          }
          
          .bl-center-service-card {
            width: 30% !important;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .bl-services-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .bl-services-container {
            max-width: 90%;
          }
          
          .bl-services-title {
            font-size: 2.75rem !important;
            margin-bottom: 4rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 210px;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 22px !important;
          }

          .bl-center-service-card{
             width:31% !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .bl-services-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .bl-services-container {
            max-width: 95%;
          }
          
          .bl-services-title {
            font-size: 3rem !important;
            margin-bottom: 4.5rem;
          }
          
          .bl-services-grid {
            gap: 2.5rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 210px;
          }
          .bl-center-service-card{
             width:31% !important;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 24px !important;
            margin-bottom: 1rem;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 1.125rem !important;
            margin-bottom: 1.5rem;
          }
          
          .bl-service-link, .bl-center-service-link {
            font-size: 1rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .bl-services-section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          .bl-services-container {
            max-width: 100%;
          }
          
          .bl-services-title {
            font-size: 3.5rem !important;
            margin-bottom: 5rem;
          }
          
          .bl-services-grid {
            gap: 3rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 300px;
          }
          
          .bl-service-content, .bl-center-service-content {
            padding: 2rem;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 28px !important;
            margin-bottom: 1.25rem;
          }

          .bl-center-service-card{
             width:31%;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 1.25rem !important;
            margin-bottom: 2rem;
          }
          
          .bl-service-link, .bl-center-service-link {
            font-size: 1.125rem !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .bl-services-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .bl-services-container {
            max-width: 75%;
          }
          
          .bl-services-title {
            font-size: 4rem !important;
            margin-bottom: 6rem;
          }
          
          .bl-services-grid {
            gap: 4rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 450px;
          }
          
          .bl-service-content, .bl-center-service-content {
            padding: 3rem;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 32px !important;
            margin-bottom: 1.5rem;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 1.5rem !important;
            margin-bottom: 3rem;
          }
          
          .bl-service-link, .bl-center-service-link {
            font-size: 1.25rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .bl-services-section {
            padding-top: 12rem;
            padding-bottom: 12rem;
          }
          
          .bl-services-container {
            max-width: 70%;
          }
          
          .bl-services-title {
            font-size: 5rem !important;
            margin-bottom: 8rem;
          }
          
          .bl-services-grid {
            gap: 6rem;
          }
          
          .bl-service-image-container, .bl-center-service-image-container {
            height: 550px;
          }
          
          .bl-service-content, .bl-center-service-content {
            padding: 4rem;
          }
          
          .bl-service-title, .bl-center-service-title {
            font-size: 36px !important;
            margin-bottom: 2rem;
          }
          
          .bl-service-description, .bl-service-description-text, .bl-center-service-description-text {
            font-size: 2rem !important;
            margin-bottom: 4rem;
          }
          
          .bl-service-link, .bl-center-service-link {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;