import { useEffect } from 'react';
import aboutImg1 from '../../assets/AboutPage/About_img1.png';

const AboutPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative w-full overflow-hidden">
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src={aboutImg1}
            alt="Arvami Team"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
 
      {/* Founder's Story Section */}
      <div className="py-16" style={{ backgroundColor: "#000322" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-lg p-10 md:p-16 shadow-xl border border-gray-400" style={{ backgroundColor: "#000322" }}>
            <p className="text-white mb-8 leading-relaxed">
              My journey to creating Arvami Solutions wasn't linear. Like many
              women, I took a career break to focus on family. Returning to
              work was tougher than expected—I saw talented women
              struggling to find opportunities despite their skills. This
              realization sparked my vision: a platform that simplifies business
              services while empowering women re-entering the workforce.
            </p>
            
            <p className="text-white mb-8 leading-relaxed">
              At Arvami Solutions, we provide a one-stop solution for
              businesses—offering GST registration, legal assistance, website
              design, branding, and even astrological guidance. Our mission is
              twofold: streamlining business operations and creating flexible
              work opportunities for women. Our team includes professionals
              who've restarted their careers, and we support them with
              training, mentorship, and work-life balance.
            </p>
            
            <p className="text-white mb-10 leading-relaxed">
              By empowering women, we strengthen businesses and
              communities. At Arvami Solutions, we handle the complexities
              so you can focus on growing your business. Let's build success
              —together.
            </p>
            
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-white text-xl font-semibold">Chhaya Poojary</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;