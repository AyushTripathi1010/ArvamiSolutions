import { useEffect } from 'react';
import aboutImg1 from '../../assets/AboutPage/About_img1.png';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';
const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page bg-navy-900 min-h-screen">
      {/* Hero Section with Image */}
      <div className="about-hero-section relative w-full overflow-hidden">
        <div className="about-hero-image-container w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src={aboutImg1}
            alt="Arvami Team"
            className="about-hero-image w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Founder's Story Section */}
      <div className="about-story-section py-16" style={{ backgroundColor: "#000322" }}>
        <div className="about-story-container container mx-auto px-6 max-w-4xl">
          <div className="about-story-card rounded-lg p-10 md:p-16 shadow-xl border border-gray-400" style={{ backgroundColor: "#000322" }}>

            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <p className="about-story-paragraph text-white mb-8 leading-relaxed">
                My journey to creating Arvami Solutions wasn't linear. Like many
                women, I took a career break to focus on family. Returning to
                work was tougher than expected—I saw talented women
                struggling to find opportunities despite their skills. This
                realization sparked my vision: a platform that simplifies business
                services while empowering women re-entering the workforce.
              </p>

            </ScrollAnimation>



            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

              <p className="about-story-paragraph text-white mb-8 leading-relaxed">
                At Arvami Solutions, we provide a one-stop solution for
                businesses—offering GST registration, legal assistance, website
                design, branding, and even astrological guidance. Our mission is
                twofold: streamlining business operations and creating flexible
                work opportunities for women. Our team includes professionals
                who've restarted their careers, and we support them with
                training, mentorship, and work-life balance.
              </p>

            </ScrollAnimation>

            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>

              <p className="about-story-paragraph text-white mb-10 leading-relaxed">
                By empowering women, we strengthen businesses and
                communities. At Arvami Solutions, we handle the complexities
                so you can focus on growing your business. Let's build success
                —together.
              </p>

            </ScrollAnimation>

            <div className="about-founder-info border-t border-gray-700 pt-8">
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <h3 className="founder-name text-white text-xl font-semibold">Chhaya Poojary</h3>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <p className="founder-designation text-gray-400">Founder & CEO</p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <h3 className="cofounder-name text-white text-xl font-semibold mt-4">Shradha Tiwari</h3>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <p className="cofounder-designation text-gray-400">Co-Founder</p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .about-story-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .about-story-card {
            padding: 1.5rem;
            border-radius: 0.5rem;
          }
          
          .about-story-paragraph {
            font-size: 0.9375rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          
          .about-founder-info {
            padding-top: 1.5rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.125rem;
          }
          
          .founder-designation,
          .cofounder-designation {
            font-size: 0.875rem;
          }
          
          .cofounder-name {
            margin-top: 1rem;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .about-story-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .about-story-card {
            padding: 2rem;
          }
          
          .about-story-paragraph {
            font-size: 1rem;
            margin-bottom: 1.75rem;
          }
          
          .about-founder-info {
            padding-top: 1.75rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.25rem;
          }
          
          .cofounder-name {
            margin-top: 1.25rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-story-section {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .about-story-container {
            max-width: 90%;
          }
          
          .about-story-card {
            padding: 2.5rem;
          }
          
          .about-story-paragraph {
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.7;
          }
          
          .about-founder-info {
            padding-top: 2rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.25rem;
          }
          
          .founder-designation,
          .cofounder-designation {
            font-size: 0.9375rem;
          }
          
          .cofounder-name {
            margin-top: 1.5rem;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .about-story-section {
            padding-top: 5.5rem;
            padding-bottom: 5.5rem;
          }
          
          .about-story-card {
            padding: 3rem;
          }
          
          .about-story-paragraph {
            font-size: 1rem;
            margin-bottom: 2.25rem;
          }
          
          .about-founder-info {
            padding-top: 2.25rem;
          }
          
          .cofounder-name {
            margin-top: 1.75rem;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .about-story-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .about-story-container {
            max-width: 4xl;
          }
          
          .about-story-card {
            padding: 3.5rem;
          }
          
          .about-story-paragraph {
            font-size: 1rem;
            line-height: 1.75;
          }
          
          .about-founder-info {
            padding-top: 2.5rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.25rem;
          }
          
          .cofounder-name {
            margin-top: 2rem;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .about-hero-image-container {
            height: 75vh;
          }
          
          .about-story-section {
            padding-top: 7rem;
            padding-bottom: 7rem;
          }
          
          .about-story-container {
            max-width: 5xl;
          }
          
          .about-story-card {
            padding: 4rem;
            border-radius: 1rem;
          }
          
          .about-story-paragraph {
            font-size: 1.125rem;
            margin-bottom: 2.5rem;
            line-height: 1.8;
          }
          
          .about-founder-info {
            padding-top: 3rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.3rem;
          }
          
          .founder-designation,
          .cofounder-designation {
            font-size: 1rem;
          }
          
          .cofounder-name {
            margin-top: 2.25rem;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .about-hero-image-container {
            height: 80vh;
          }
          
          .about-story-section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          .about-story-container {
            max-width: 6xl;
          }
          
          .about-story-card {
            padding: 5rem;
            border-radius: 1.25rem;
          }
          
          .about-story-paragraph {
            font-size: 1.25rem;
            margin-bottom: 3rem;
            line-height: 1.9;
          }
          
          .about-founder-info {
            padding-top: 3.5rem;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 1.5rem;
          }
          
          .founder-designation,
          .cofounder-designation {
            font-size: 1.125rem;
          }
          
          .cofounder-name {
            margin-top: 2.5rem;
          }
        }
        
        /* For extra large screens (2560px and above) */
        @media (min-width: 2560px) {
          .about-hero-image-container {
            height: 85vh;
          }
          
          .about-story-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          .about-story-container {
            max-width: 7xl;
          }
          
          .about-story-card {
            padding: 6rem;
            border-radius: 1.5rem;
            border-width: 2px;
          }
          
          .about-story-paragraph {
            font-size: 1.5rem;
            margin-bottom: 3.5rem;
            line-height: 2;
          }
          
          .about-founder-info {
            padding-top: 4rem;
            border-top-width: 2px;
          }
          
          .founder-name, 
          .cofounder-name {
            font-size: 2rem;
          }
          
          .founder-designation,
          .cofounder-designation {
            font-size: 1.25rem;
          }
          
          .cofounder-name {
            margin-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;