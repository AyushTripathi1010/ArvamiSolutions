import astroImg3 from '../../assets/AstrologyPage/Astro_img3.png';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';
const ApproachSection = () => {
  return (
    <div className="py-20 relative" style={{
      backgroundImage: `url(${astroImg3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Astrological Approach</h2>

        </ScrollAnimation>
        <div className="flex flex-col md:flex-row ml-20">
          {/* Left column - approach points */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <h3 className="text-xl font-bold text-white mb-8">Understanding Our Approach</h3>

            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <div className="flex items-start">
                  <span className="text-2xl text-primary-400 mr-4">👋</span>
                  <div>
                    <h4 className="text-white font-semibold">Guidance, not fortune-telling</h4>
                  </div>
                </div>

              </ScrollAnimation>

              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <div className="flex items-start">
                  <span className="text-2xl text-primary-400 mr-4">👋</span>
                  <div>
                    <h4 className="text-white font-semibold">Personalized attention</h4>
                  </div>
                </div>

              </ScrollAnimation>

              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

                <div className="flex items-start">
                  <span className="text-2xl text-primary-400 mr-4">👋</span>
                  <div>
                    <h4 className="text-white font-semibold">Respect for tradition</h4>
                  </div>
                </div>

              </ScrollAnimation>

              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

                <div className="flex items-start">
                  <span className="text-2xl text-primary-400 mr-4">👋</span>
                  <div>
                    <h4 className="text-white font-semibold">Ethical practices</h4>
                  </div>
                </div>

              </ScrollAnimation>

              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

                <div className="flex items-start">
                  <span className="text-2xl text-primary-400 mr-4">👋</span>
                  <div>
                    <h4 className="text-white font-semibold">Collaborative exploration</h4>
                  </div>
                </div>

              </ScrollAnimation>
            </div>
          </div>

          {/* Right column - description */}
          <div className="w-full md:w-1/2">
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <p className="text-gray-300 mb-8">
                At Arvami, we view astrology as a tool for self-discovery and empowerment. Our consultations combine traditional astrological wisdom with a modern, client-centered approach. We prioritize ethical practices, offering guidance and insights to help you navigate life's complexities with greater awareness and confidence.
              </p>

            </ScrollAnimation>

            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

              <p className="text-gray-300 mb-8">
                Our consultations typically last 1 week and cover career, relationships, finances, Health etc. We look forward to helping you on your journey of self-discovery.
              </p>

            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;