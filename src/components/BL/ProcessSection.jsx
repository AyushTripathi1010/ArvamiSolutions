import blImg3 from '../../assets/BusinessLegalPage/BL_img3.png';

const ProcessSection = () => {
  const steps = [
    { id: 1, title: "Initial consultation" },
    { id: 2, title: "Document collection" },
    { id: 3, title: "Application filing" },
    { id: 4, title: "Follow-up" }
  ];

  return (
    <div className="process-section py-20 relative flex justify-center">
      <div className="process-container container mx-auto px-6">
        <h2 className="process-title text-3xl font-bold text-white text-center mb-20">
          Our Process
        </h2>

        <div className="process-content max-w-5xl mx-auto">
          {/* Boxes with arrows */}
          {/* 
            1) We replaced justify-between with gap classes for better spacing control.
            2) The items are in a row on md+ screens, stacked on small screens.
          */}
          <div
            className="
              process-steps-container
              flex
              flex-col
              md:flex-row
              items-center
              md:gap-16
              mb-24
              relative
            "
          >
            {steps.map((step, index) => (
              <div key={step.id} className="process-step-wrapper relative">
                {/* Step box */}
                <div className="process-step-box bg-navy-800 border border-gray-700 rounded-md py-4 px-8 w-56 text-center">
                  <p className="process-step-text text-white font-medium">{step.title}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      process-arrow
                      hidden
                      md:block
                      absolute
                      top-1/2
                      left-full
                      -translate-y-1/2
                      // Adjust this margin-left to move arrow closer/farther from the box:
                      ml-[0px]
                      z-20
                    "
                    // Adjust the width for arrow length
                    style={{ width: '60px' }}
                  >
                    <svg
                      className="process-arrow-svg"
                      width="70"
                      height="24"
                      viewBox="0 0 60 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Horizontal line (0 -> 50 here, you can tweak) */}
                      <path
                        className="process-arrow-line"
                        d="M0 12 L50 12"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      {/* Arrowhead at 50 */}
                      <path
                        className="process-arrow-head-top"
                        d="M50 12 L45 7"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      <path
                        className="process-arrow-head-bottom"
                        d="M50 12 L45 17"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 767px) */
        @media (max-width: 767px) {
          .process-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .process-title {
            font-size: 24px !important;
            margin-bottom: 2rem;
          }
          
          .process-step-box {
            width: 220px;
            margin-bottom: 1.5rem;
            padding: 0.75rem 1rem;
          }
          
          .process-step-text {
            font-size: 14px;
          }
          
          .process-steps-container {
            gap: 2rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .process-title {
            font-size: 28px !important;
            margin-bottom: 3rem;
          }
          
          .process-step-box {
            width: 150px;
            padding: 0.75rem 1rem;
          }
          
          .process-step-text {
            font-size: 14px;
          }
          
          .process-steps-container {
            gap: 0.5rem;
          }
          
          .process-arrow {
            width: 40px !important;
          }
          
          .process-arrow-svg {
            width: 40px;
          }
        }
        
        /* For smaller laptops (1024px - 1366px) */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .process-title {
            font-size: 30px !important;
            margin-bottom: 3.5rem;
          }
          
          .process-step-box {
            width: 180px;
          }
          
          .process-step-text {
            font-size: 15px;
          }
          
          .process-steps-container {
            gap: 3rem;
          }
          
          .process-arrow {
            width: 50px !important;
          }
          
          .process-arrow-svg {
            width: 50px;
          }
        }
        
        /* For medium laptops and desktops (1367px - 1999px) */
        @media (min-width: 1367px) and (max-width: 1999px) {
          .process-title {
            font-size: 36px !important;
            margin-bottom: 4rem;
          }
          
          .process-step-box {
            width: 220px;
            padding: 1.25rem 1.5rem;
          }
          
          .process-step-text {
            font-size: 16px;
          }
          
          .process-steps-container {
            gap: 4rem;
          }
          
          .process-arrow {
            width: 70px !important;
          }
          
          .process-arrow-svg {
            width: 70px;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .process-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
            display:flex;
            justify-content: center;
          }
          
          .process-container {
            
            margin: 0 auto;
          }
          
          .process-title {
            font-size: 48px !important;
            margin-bottom: 5rem;
          }
          
          .process-step-box {
            width: 280px;
            padding: 1.5rem 2rem;
            border-radius: 0.5rem;
          }
          
          .process-step-text {
            font-size: 20px;
          }
          
          .process-steps-container {
            gap: 5rem;
          }
          
          .process-arrow {
            width: 90px !important;
          }
          
          .process-arrow-svg {
            width: 90px;
            height: 30px;
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .process-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .process-container {
            max-width: 70%;
          }
          
          .process-title {
            font-size: 60px !important;
            margin-bottom: 6rem;
          }
          
          .process-step-box {
            width: 350px;
            padding: 2rem 2.5rem;
            border-radius: 0.75rem;
          }
          
          .process-step-text {
            font-size: 24px;
          }
          
          .process-steps-container {
            gap: 7rem;
          }
          
          .process-arrow {
            width: 120px !important;
          }
          
          .process-arrow-svg {
            width: 120px;
            height: 36px;
          }
        }
        
        /* For ultra-wide screens (4000px and above) */
        @media (min-width: 4000px) {
          .process-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .process-container {
            max-width: 60%;
          }
          
          .process-title {
            font-size: 80px !important;
            margin-bottom: 8rem;
          }
          
          .process-step-box {
            width: 450px;
            padding: 2.5rem 3rem;
            border-radius: 1rem;
          }
          
          .process-step-text {
            font-size: 32px;
          }
          
          .process-steps-container {
            gap: 10rem;
          }
          
          .process-arrow {
            width: 160px !important;
          }
          
          .process-arrow-svg {
            width: 160px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProcessSection;