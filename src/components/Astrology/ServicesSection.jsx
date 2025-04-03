import { Link } from 'react-router-dom';
import numerologyImg from '../../assets/AstrologyPage/Astro_img5.png';
import graphologyImg from '../../assets/AstrologyPage/Astro_img4.png';
import vastuImg from '../../assets/AstrologyPage/Astro_img6.png';

const ServicesSection = () => {
    return (
        <div className="py-20 relative" style={{ backgroundColor: "#000322" }}>
            <div className="container mx-auto px-6">
                <p className="text-center text-white text-lg mb-16 max-w-4xl mx-auto">
                    Astrology is more than just predicting the future; it's a powerful tool for self-discovery and understanding.
                    We approach astrology with reverence for its ancient wisdom, using its insights to guide you on your life's journey.
                    Our consultations provide personalized guidance, helping you navigate challenges, unlock your potential, and make informed decisions
                    aligned with your true purpose.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Numerology Card */}
                    <div className="bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 w-[90%]" style={{ backgroundColor: "#000322" }}>
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
                    <div className="bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 w-[90%]" style={{ backgroundColor: "#000322" }}>
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
                    <div className="bg-navy-800 rounded-3xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:transform hover:scale-105 border-2 border-gray-400 hover:border-blue-500 w-[90%]" style={{ backgroundColor: "#000322" }}>
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
        </div>
    );
};

export default ServicesSection;