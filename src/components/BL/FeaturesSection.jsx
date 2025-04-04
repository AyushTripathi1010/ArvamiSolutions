import blImg3 from '../../assets/BusinessLegalPage/BL_img3.png';
import blImg4 from '../../assets/BusinessLegalPage/BL_img4.png';
import blImg5 from '../../assets/BusinessLegalPage/BL_img5.png';
import blImg6 from '../../assets/BusinessLegalPage/BL_img6.png';
import blImg7 from '../../assets/BusinessLegalPage/BL_img7.png';
import blImg8 from '../../assets/BusinessLegalPage/BL_img8.png';
import ProcessSection from './ProcessSection';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

const FeaturesSection = () => {
  const features = {
    complianceFocus: {
      title: "Compliance Focus",
      image: blImg8
    },
    expertise: {
      title: "Expertise",
      image: blImg7
    },
    personalizedService: {
      title: "Personalized Service",
      image: blImg6
    },
    efficiency: {
      title: "Efficiency",
      image: blImg4
    },
    accuracy: {
      title: "Accuracy",
      image: blImg5
    }
  };

  return (
    <div className="features-section py-20 relative bg-navy-900">
      {/* Optional background image if needed */}
      <div className="features-bg-image absolute inset-0 bg-navy-900 opacity-90" style={{
        backgroundImage: `url(${blImg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      <div className="features-container container mx-auto px-6 relative z-10">
        {/* Top Feature - Compliance Focus */}
        <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>


          <h2 className="features-main-title text-3xl font-bold text-white text-center mb-14">{features.complianceFocus.title}</h2>
        </ScrollAnimation>

        <div className="top-feature-wrapper flex justify-center mb-14">
          <div className="top-feature-image-container max-w-md">
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <img
                src={features.complianceFocus.image}
                alt={features.complianceFocus.title}
                className="top-feature-image w-full"
              />
            </ScrollAnimation>
          </div>
        </div>

        <div className="features-content max-w-6xl mx-auto relative">
          {/* Middle Row Features */}
          <div className="middle-row flex flex-col md:flex-row justify-between mb-14">
            {/* Left Feature - Expertise */}
            <div className="left-feature md:w-1/3 mb-10 md:mb-0 flex flex-col items-center">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>


                <h3 className="feature-title text-xl font-bold text-white mb-6">{features.expertise.title}</h3>
              </ScrollAnimation>
              <div className="feature-image-container w-64 h-64 border border-gray-800 bg-navy-800 rounded-lg p-2">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <img
                    src={features.expertise.image}
                    alt={features.expertise.title}
                    className="feature-image w-full h-full object-contain"
                  />
                </ScrollAnimation>
              </div>
            </div>

            {/* Center Circle */}
            <div className="center-circle md:w-1/3 flex justify-center items-center mb-10 md:mb-0">
              <div className="circle-container w-64 h-64 border-2 border-gray-700 rounded-full flex items-center justify-center p-6">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <p className="circle-text text-white text-center">
                    Choosing the right partner for your legal and registration needs is crucial. Here's why you can trust us:
                  </p>
                </ScrollAnimation>
              </div>
            </div>

            {/* Right Feature - Personalized Service */}
            <div className="right-feature md:w-1/3 flex flex-col items-center">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

                <h3 className="feature-title text-xl font-bold text-white mb-6">{features.personalizedService.title}</h3>
              </ScrollAnimation>
              <div className="feature-image-container w-64 h-64 border border-gray-800 bg-navy-800 rounded-lg p-2">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <img
                    src={features.personalizedService.image}
                    alt={features.personalizedService.title}
                    className="feature-image w-full h-full object-contain"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>

          {/* Bottom Row Features */}
          <div className="bottom-row flex flex-col md:flex-row justify-around">
            {/* Bottom Left Feature - Efficiency */}
            <div className="bottom-left-feature md:w-1/3 mb-10 md:mb-0 flex flex-col items-center">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

                <h3 className="feature-title text-xl font-bold text-white mb-6">{features.efficiency.title}</h3>
              </ScrollAnimation>
              <div className="feature-image-container w-64 h-64 border border-gray-800 bg-navy-800 rounded-lg p-2">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <img
                    src={features.efficiency.image}
                    alt={features.efficiency.title}
                    className="feature-image w-full h-full object-contain"
                  />
                </ScrollAnimation>
              </div>
            </div>

            {/* Bottom Right Feature - Accuracy */}
            <div className="bottom-right-feature md:w-1/3 flex flex-col items-center">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>


                <h3 className="feature-title text-xl font-bold text-white mb-6">{features.accuracy.title}</h3>
              </ScrollAnimation>
              <div className="feature-image-container w-64 h-64 border border-gray-800 bg-navy-800 rounded-lg p-2">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <img
                    src={features.accuracy.image}
                    alt={features.accuracy.title}
                    className="feature-image w-full h-full object-contain"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Add responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 767px) */
        @media (max-width: 767px) {
          .features-main-title {
            font-size: 24px !important;
            margin-bottom: 2rem;
          }
          
          .feature-title {
            font-size: 18px !important;
          }
          
          .feature-image-container {
            width: 200px;
            height: 200px;
          }
          
          .circle-container {
            width: 200px;
            height: 200px;
            margin: 1rem auto;
          }
          
          .circle-text {
            font-size: 14px;
          }
          
          .top-feature-image-container {
            max-width: 90%;
          }
          
          .features-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .features-main-title {
            font-size: 28px !important;
          }
          
          .feature-title {
            font-size: 20px !important;
          }
          
          .feature-image-container {
            width: 220px;
            height: 220px;
          }
          
          .circle-container {
            width: 220px;
            height: 220px;
          }
          
          .circle-text {
            font-size: 15px;
          }
          
          .features-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
        
        /* For smaller laptops (1024px - 1366px) */
        @media (min-width: 1024px) and (max-width: 1366px) {
          .features-main-title {
            font-size: 30px !important;
          }
          
          .feature-title {
            font-size: 20px !important;
          }
          
          .feature-image-container {
            width: 230px;
            height: 230px;
          }
          
          .circle-container {
            width: 230px;
            height: 230px;
          }
          
          .circle-text {
            font-size: 16px;
          }
        }
        
        /* For medium laptops and desktops (1367px - 1999px) */
        @media (min-width: 1367px) and (max-width: 1999px) {
          .features-main-title {
            font-size: 36px !important;
          }
          
          .feature-title {
            font-size: 22px !important;
          }
          
          .feature-image-container {
            width: 280px;
            height: 280px;
          }
          
          .circle-container {
            width: 280px;
            height: 280px;
          }
          
          .circle-text {
            font-size: 17px;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .features-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .features-main-title {
            font-size: 48px !important;
            margin-bottom: 3rem;
          }
          
          .feature-title {
            font-size: 28px !important;
            margin-bottom: 1.5rem;
          }
          
          .feature-image-container {
            width: 320px;
            height: 320px;
          }
          
          .circle-container {
            width: 300px;
            height: 300px;
            padding: 2rem;
          }
          
          .circle-text {
            font-size: 20px;
          }
          
          .features-container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .top-feature-image-container {
            max-width: 600px;
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .features-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .features-main-title {
            font-size: 60px !important;
            margin-bottom: 4rem;
          }
          
          .feature-title {
            font-size: 36px !important;
            margin-bottom: 2rem;
          }
          
          .feature-image-container {
            width: 400px;
            height: 400px;
          }
          
          .circle-container {
            width: 400px;
            height: 400px;
            padding: 3rem;
          }
          
          .circle-text {
            font-size: 24px;
          }
          
          .features-container {
            max-width: 70%;
          }
          
          .top-feature-image-container {
            max-width: 800px;
          }
        }
        
        /* For ultra-wide screens (4000px and above) */
        @media (min-width: 4000px) {
          .features-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .features-main-title {
            font-size: 80px !important;
            margin-bottom: 5rem;
          }
          
          .feature-title {
            font-size: 48px !important;
            margin-bottom: 3rem;
          }
          
          .feature-image-container {
            width: 500px;
            height: 500px;
          }
          
          .circle-container {
            width: 500px;
            height: 500px;
            padding: 4rem;
          }
          
          .circle-text {
            font-size: 32px;
          }
          
          .features-container {
            max-width: 60%;
          }
          
          .top-feature-image-container {
            max-width: 1000px;
          }
        }
      `}</style>

      <ProcessSection />
    </div>
  );
};

export default FeaturesSection;