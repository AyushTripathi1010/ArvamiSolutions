import React from 'react';
import contactHeroImage from '../../assets/ContactPage/C_img2.png';
import phoneImage from '../../assets/ContactPage/C_img3.png';

const ContactSection = () => {
  return (
    <div className="w-full" style={{ backgroundColor: "#000322" }}>
      {/* Contact Header */}
      <div className="w-full text-center py-12 absolute">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>
      
      {/* Full-width image container */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left side - Woman with phone */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] bg-navy-900">
          <img 
            src={phoneImage} 
            alt="Customer Service Representative" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Right side - Digital phone illustration */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] bg-blue-900">
          <img 
            src={contactHeroImage} 
            alt="Digital Phone" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;