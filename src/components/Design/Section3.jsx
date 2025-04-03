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
      <div className="absolute inset-0 z-0 section-bg" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'rotate(180deg)',
      }}></div>

      {/* Content - not rotated */}
      <div className="container mx-auto px-6 relative z-10 mt-14 content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center content-grid">
          <div className="text-white left-content">
            <h2 className="text-3xl font-bold mb-8 reason-heading" style={{ lineHeight: '1.3' }}>Why Choose Arvami Solutions?</h2>

            <div className="space-y-6 reasons-container">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start reason-item py-4">
                  <div className="mr-4 mt-1 flex-shrink-0 icon-container">
                    <svg className="h-5 w-5 text-primary-400 reason-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-xl reason-text">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-0 image-container">
            <img
              src={whyChooseImage}
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-2xl reason-image"
            />
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 pointer-events-none z-5 overlay-pattern">
        <div className="w-full h-full opacity-20 pattern-grid" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        /* Small screens (mobile) */
        @media (max-width: 639px) {
          .why-choose-section {
            height: auto;
            min-height: 100vh;
            padding-top: 3rem;
            padding-bottom: 3rem;
            
          }
          
          .reason-heading {
            font-size: 1.75rem !important;
            line-height: 2.2rem !important;
            margin-bottom: 1.5rem;
          }
          
          .reason-text {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          
          .reason-icon {
            height: 1.2rem;
            width: 1.2rem;
          }
          
          .reason-item {
            margin-bottom: 1rem;
            line-height: 1.5;
          }
          
          .reasons-container {
            margin-bottom: 2rem;
          }
          
          .content-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .content-grid {
            gap: 2rem;
          }
          
          .reason-image {
            transform: scale(1) !important;
          
        }
        
        /* SM breakpoint */
        @media (min-width: 640px) and (max-width: 767px) {
          .why-choose-section {
            height: fit-content;
            min-height: 100vh;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .reason-heading {
            font-size: 2rem;
            line-height: 2.5rem;
          }
          
          .reason-text {
            font-size: 1.05rem;
            line-height: 1.6rem;
          }
          
          .reason-item {
            margin-bottom: 1.25rem;
            line-height: 1.6;
          }
          
          .content-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          
          .content-grid {
            gap: 2.5rem;
          }
          
          .reason-image {
            transform: scale(1) !important;
          }
        }
        
        /* MD breakpoint */
        @media (min-width: 768px) and (max-width: 1023px) {
          .why-choose-section {
            height: auto;
            min-height: 100vh;
          }
          
          .reason-heading {
            font-size: 2.25rem;
            line-height: 2.75rem;
          }
          
          .reason-text {
            font-size: 1.1rem;
            line-height: 1.7rem;
          }
          
          .reason-icon {
            height: 1.25rem;
            width: 1.25rem;
            margin-top: 0.2rem;
          }
          
          .reason-item {
            margin-bottom: 1.5rem;
            line-height: 1.7;
          }
          
          .content-container {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          
          .content-grid {
            gap: 3rem;
          }
          
          .reason-image {
            transform: scale(1.05);
          }
        }
        
        /* LG breakpoint */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .container {
            padding-left: 4%;
            padding-right: 4%;
          }
          
          .why-choose-section {
            height: auto;
            min-height: 100vh;
          }
          
          .reason-heading {
            font-size: 2.5rem !important;
            line-height: 6rem !important;
          }
          
          .reason-text {
            font-size: 2.5rem !important;
            line-height: 2.8rem !important;
          }
          
          .reason-container {
             font-size:3rem;
           }
          .reason-icon {
            height: 1.3rem;
            width: 1.3rem;
            margin-top: 0.25rem;
          }
          
          .reason-item {
            margin-bottom: 2.5rem;
            line-height: 1.8;
            font-size:3rem;
          }

          .reason-image {
            transform: scale(1.5) !important;
          }
        }
        
        /* XL breakpoint */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .why-choose-section {
            height: auto;
            min-height: 100vh;
          }
          
          .reason-heading {
            font-size: 2.5rem;
            line-height: 3.2rem;
          }
          
          .reason-text {
            font-size: 1.25rem;
            line-height: 1.9rem;
          }
          
          .reason-icon {
            height: 1.4rem;
            width: 1.4rem;
            margin-top: 0.3rem;
          }
          
          .reason-item {
            margin-bottom: 1.75rem;
            line-height: 1.9;
          }
        }
        
        /* 2XL breakpoint */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .container {
            max-width: 85%;
            margin: 0 auto;
          }
          
          .reason-heading {
            font-size: 2.5rem;
            line-height: 3.2rem;
          }
          
          .reason-text {
            font-size: 1.3rem;
            line-height: 2rem;
          }
          
          .reason-icon {
            height: 1.45rem;
            width: 1.45rem;
            margin-top: 0.3rem;
          }
          
          .reason-item {
            margin-bottom: 1.75rem;
            line-height: 2;
          }
          
          .reason-image {
            transform: scale(1.02);
          }
        }
        
        /* 1080p-1440p screens */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .reason-heading {
            font-size: 2.75rem;
            line-height: 3.5rem;
          }
          
          .reason-text {
            font-size: 1.4rem;
            line-height: 2.1rem;
          }
          
          .reason-icon {
            height: 1.5rem;
            width: 1.5rem;
            margin-top: 0.3rem;
          }
          
          .reason-item {
            margin-bottom: 2rem;
            line-height: 2.1;
          }
          
          .reason-image {
            transform: scale(1.05);
          }
        }
        
        /* 4K screens */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .container {
            max-width: 75%;
            margin: 0 auto;
          }
          
          .reason-heading {
            font-size: 3rem;
            line-height: 3.75rem;
          }
          
          .reason-text {
            font-size: 1.6rem;
            line-height: 2.4rem;
          }
          
          .reason-icon {
            height: 1.75rem;
            width: 1.75rem;
            margin-top: 0.4rem;
          }
          
          .reason-item {
            margin-bottom: 2.25rem;
            line-height: 2.4;
          }
          
          .reason-image {
            transform: scale(1.08);
          }
        }
        
        /* 8K screens */
        @media (min-width: 3840px) {
          .container {
            max-width: 70%;
            margin: 0 auto;
          }
          
          .reason-heading {
            font-size: 3.5rem;
            line-height: 4.25rem;
          }
          
          .reason-text {
            font-size: 1.9rem;
            line-height: 2.8rem;
          }
          
          .reason-icon {
            height: 2rem;
            width: 2rem;
            margin-top: 0.5rem;
          }
          
          .reason-item {
            margin-bottom: 2.5rem;
            line-height: 2.8;
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