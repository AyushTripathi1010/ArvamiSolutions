import { Link } from 'react-router-dom';
import numerologyImg from '../../assets/AstrologyPage/Astro_img5.png';
import graphologyImg from '../../assets/AstrologyPage/Astro_img4.png';
import vastuImg from '../../assets/AstrologyPage/Astro_img6.png';

const ServicesSection = () => {
    return (
        <div className="py-20 relative" style={{ backgroundColor: "#000322" }}>
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-white text-lg mb-16 max-w-4xl mx-auto">
                    Astrology is more than just predicting the future; it's a powerful tool for self-discovery and understanding.
                    We approach astrology with reverence for its ancient wisdom, using its insights to guide you on your life's journey.
                    Our consultations provide personalized guidance, helping you navigate challenges, unlock your potential, and make informed decisions
                    aligned with your true purpose.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 astro-services-grid">
                    {/* Numerology Card */}
                    <div className="astro-service-card bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 mx-auto"
                        style={{ backgroundColor: "#000322", width: "90%" }}>
                        <div className="h-[17.5rem] overflow-hidden">
                            <img
                                src={numerologyImg}
                                alt="Numerology Readings"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Numerology Readings</h3>
                            <ul className="text-gray-300 mb-4 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Personalized Numerology Reports.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Name & Date of Birth Analysis.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Lucky Numbers & Career Guidance.</span>
                                </li>
                            </ul>
                            <Link
                                to="/contact-us"
                                className="inline-block text-sm text-primary-400 hover:text-primary-300"
                            >
                                Get Your Numerology Report
                            </Link>
                        </div>
                    </div>

                    {/* Graphology Card */}
                    <div className="astro-service-card bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 mx-auto"
                        style={{ backgroundColor: "#000322", width: "90%" }}>
                        <div className="h-[17.5rem] overflow-hidden">
                            <img
                                src={graphologyImg}
                                alt="Graphology Consultation"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Graphology Consultation</h3>
                            <ul className="text-gray-300 mb-4 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Handwriting Reveals Personality</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Analyze Traits & Behavior</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Improve Self-Awareness</span>
                                </li>
                            </ul>
                            <Link
                                to="/contact-us"
                                className="inline-block text-sm text-primary-400 hover:text-primary-300"
                            >
                                Analyze handwriting
                            </Link>
                        </div>
                    </div>

                    {/* Vaastu Card */}
                    <div className="astro-service-card bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 mx-auto"
                        style={{ backgroundColor: "#000322", width: "90%" }}>
                        <div className="h-[17.5rem] overflow-hidden">
                            <img
                                src={vastuImg}
                                alt="Vaastu"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Vaastu</h3>
                            <ul className="text-gray-300 mb-4 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Home & Office Vastu Analysis.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Remedies for Prosperity & Peace.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Personalized Vastu Tips</span>
                                </li>
                            </ul>
                            <Link
                                to="/contact-us"
                                className="inline-block text-sm text-primary-400 hover:text-primary-300"
                            >
                                Consult a Vaastu expert
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add comprehensive responsive styling */}
            <style jsx>{`
                /* For mobile devices (up to 639px) */
                @media (max-width: 639px) {
                    .astro-services-grid {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                    }
                    
                    .astro-service-card {
                        width: 90% !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-bottom: 2rem !important;
                    }
                    
                    .astro-service-card h3 {
                        font-size: 18px !important;
                        margin-bottom: 0.5rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 0.875rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 0.75rem !important;
                    }
                    
                    .astro-service-card .p-6 {
                        padding: 1rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 200px !important;
                    }
                }
                
                /* For medium mobile devices (640px - 767px) */
                @media (min-width: 640px) and (max-width: 767px) {
                    .astro-services-grid {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                    }
                    
                    .astro-service-card {
                        width: 90% !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-bottom: 2rem !important;
                    }
                    
                    .astro-service-card h3 {
                        font-size: 20px !important;
                        margin-bottom: 0.75rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 1rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 0.875rem !important;
                    }
                    
                    .astro-service-card .p-6 {
                        padding: 1.5rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 225px !important;
                    }
                }
                
                /* For tablets (768px - 1023px) */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .astro-service-card {
                        width: 100% !important;
                    }
                    
                    .astro-service-card h3 {
                        font-size: 18px !important;
                        margin-bottom: 0.75rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 0.875rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 250px !important;
                    }
                    
                    .astro-services-grid {
                        gap: 1.5rem !important;
                    }
                }
                
                /* For smaller laptops (1024px - 1279px) */
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .astro-service-card h3 {
                        font-size: 18px !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 1rem !important;
                    }
                    
                    .astro-services-grid {
                        gap: 2rem !important;
                    }
                }
                
                /* For medium laptops (1280px - 1535px) */
                @media (min-width: 1280px) and (max-width: 1535px) {
                    .astro-service-card h3 {
                        font-size: 22px !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 250px !important;
                    }
                }
                
                /* For desktop screens (1536px - 1919px) */
                @media (min-width: 1536px) and (max-width: 1919px) {
                    .astro-service-card h3 {
                        font-size: 24px !important;
                        margin-bottom: 1rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 1.125rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 1rem !important;
                    }
                    
                    .astro-services-grid {
                        gap: 2.5rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 270px !important;
                    }
                }
                
                /* For large screens (1920px - 2559px) */
                @media (min-width: 1920px) and (max-width: 2559px) {
                    .astro-service-card h3 {
                        font-size: 28px !important;
                        margin-bottom: 1.25rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 1.25rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 1.125rem !important;
                    }
                    
                    .astro-service-card .p-6 {
                        padding: 2rem !important;
                    }
                    
                    .astro-services-grid {
                        gap: 3rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 300px !important;
                    }
                }
                
                /* For extra large screens (2560px - 3839px) */
                @media (min-width: 2560px) and (max-width: 3839px) {
                    .astro-service-card h3 {
                        font-size: 32px !important;
                        margin-bottom: 1.5rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 1.5rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 1.25rem !important;
                    }
                    
                    .astro-service-card .p-6 {
                        padding: 3rem !important;
                    }
                    
                    .astro-services-grid {
                        gap: 4rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 450px !important;
                    }
                }
                
                /* For ultra-wide screens (3840px and above) */
                @media (min-width: 3840px) {
                    .astro-service-card h3 {
                        font-size: 36px !important;
                        margin-bottom: 2rem !important;
                    }
                    
                    .astro-service-card ul li span {
                        font-size: 2rem !important;
                    }
                    
                    .astro-service-card a {
                        font-size: 1.5rem !important;
                    }
                    
                    .astro-service-card .p-6 {
                        padding: 4rem !important;
                    }
                    
                    .astro-services-grid {
                        gap: 6rem !important;
                    }
                    
                    .astro-service-card .h-[17.5rem] {
                        height: 550px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ServicesSection;