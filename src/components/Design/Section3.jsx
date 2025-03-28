import { Link } from 'react-router-dom';
import whyChooseImage from '../../assets/DesignPage/Design_img9.png';
import bgImage from '../../assets/DesignPage/Design_img7.png';

const Section3 = () => {
  const reasons = [
    { id: 1, text: "Creative & Experienced Designers" },
    { id: 2, text: "Tailor-Made Designs for Your Brand" },
    { id: 3, text: "Affordable Pricing & Fast Turnaround" },
    { id: 4, text: "100% Client Satisfaction Guarantee" }
  ];

  return (
    <div className="py-20 relative h-screen w-full overflow-hidden why-choose-section">
      {/* Rotated background image */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(180deg)',
      }}></div>
      
      {/* Content - not rotated */}
      <div className="container mx-auto px-6 relative z-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-8 reason-heading">Why Choose Arvami Solutions?</h2>
            
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start reason-item">
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <svg className="h-5 w-5 text-primary-400 reason-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-lg reason-text">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 md:mt-0">
            <img 
              src={whyChooseImage} 
              alt="Why Choose Us" 
              className="w-full h-auto rounded-lg shadow-2xl reason-image"
            />
          </div>
        </div>
      </div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="w-full h-full opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Media Queries */}
      <style jsx>{`
        /* For smaller laptop screens (1024px) */
        @media (max-width: 1024px) {
          .container {
            padding-left: 4%;
            padding-right: 4%;
          }
          
          .why-choose-section {
            height: auto;
            min-height: 100vh;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .reason-heading {
            font-size: 2.5rem;
          }
          
          .reason-text {
            font-size: 1.4rem;
          }
          
          .reason-icon {
            height: 1.5rem;
            width: 1.5rem;
            margin-top: 0.3rem;
          }
          
          .reason-item {
            margin-bottom: 1.5rem;
          }
          
          .reason-image {
            transform: scale(1.05);
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .container {
            max-width: 70%;
          }
          
          .reason-heading {
            font-size: 3rem;
          }
          
          .reason-text {
            font-size: 1.75rem;
          }
          
          .reason-icon {
            height: 1.75rem;
            width: 1.75rem;
            margin-top: 0.4rem;
          }
          
          .reason-item {
            margin-bottom: 2rem;
          }
          
          .reason-image {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Section3;