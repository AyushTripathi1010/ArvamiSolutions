import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage1 from '../../assets/DesignPage/Design_img3.png';
import heroImage2 from '../../assets/DesignPage/Design_img1.png';
import heroImage3 from '../../assets/DesignPage/Design_img2.png';
import bgImage from '../../assets/DesignPage/Design_img8.png';
import { FormatQuote } from '@mui/icons-material';
import { useContext } from 'react';
import { ModalContext } from './DesignPage';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

const Section1 = () => {
    // Get openModal function from context  
    const { openModal } = useContext(ModalContext);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        // Cycle through all 3 images: 0, 1, 2, 0, 1, 2, ...
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                return nextIndex >= heroImages.length ? 0 : nextIndex;
            });
        }, 2500);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="design-hero-section relative min-h-screen flex items-center w-full" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="hero-overlay absolute inset-0"></div>

            <div className="hero-container container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-10 relative z-10">
                <div className="hero-content-grid grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-20 xl:gap-40 2xl:gap-80">
                    <div className="hero-text-content text-white w-full md:w-auto lg:w-auto xl:w-[800px]">
                        <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                            <h1 className="hero-heading font-bold mb-10" style={{
                                fontSize: 'clamp(28px, 3.5vw, 40px)',
                                lineHeight: '1.5'
                            }}>
                                A legacy of EXCELLENCE is crafted by the EXTRAORDINARY TEAMS.
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                            <p className="hero-subheading mb-8" style={{
                                fontSize: 'clamp(18px, 2.5vw, 28px)'
                            }}>
                                From websites to logos, we bring your vision to life
                            </p>
                        </ScrollAnimation>

                        <div className="hero-quote-container flex flex-col my-2 relative max-w-[90%]">
                            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                                <FormatQuote className="quote-icon-left text-white transform rotate-180 flex-shrink-0" fontSize="large" />
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                                <p className="hero-quote-text px-9" style={{
                                    fontSize: 'clamp(14px, 1.8vw, 20px)',
                                    lineHeight: '1.4'
                                }}>
                                    Design is more than aesthetics, it's about results. We blend creativity with strategy to attract, engage, and convert, driving real business impact
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                                <div className="quote-container-2 w-full flex justify-end pr-[12%]">
                                    <FormatQuote className="quote-icon-right text-white flex-shrink-0" fontSize="large" />
                                </div>
                            </ScrollAnimation>
                        </div>


                        <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                            <button
                                onClick={openModal}
                                className="hero-cta-button inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500"
                                style={{ marginTop: '20px' }}
                            >
                                Get a Consultation
                            </button>
                        </ScrollAnimation>
                    </div>


                    <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                        <div className="hero-image-container flex justify-center md:justify-end md:mr-6 lg:mr-6 xl:mr-0 2xl:mr-36 mb-14 relative">
                            {/* Empty element to maintain the dimensions */}
                            <div
                                className="hero-image-placeholder w-auto h-auto max-w-[90%] md:max-w-[75%] lg:max-w-[95%] xl:max-h-[900px]"
                                style={{
                                    maxHeight: 'clamp(350px, 80vh, 900px)',
                                    visibility: 'hidden'
                                }}
                            >
                                <img src={heroImage1} alt="Placeholder" className="placeholder-img" style={{ visibility: 'hidden' }} />
                            </div>

                            {heroImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Design Interface ${index + 1}`}
                                    className={`hero-image-${index} w-auto h-auto max-w-[90%] md:max-w-[75%] lg:max-w-[95%] xl:max-h-[900px] xlrounded-lg shadow-2xl`}
                                    style={{
                                        maxHeight: 'clamp(350px, 80vh, 900px)',
                                        opacity: currentImageIndex === index ? 1 : 0,
                                        transition: 'opacity 0.9s ease-in-out',
                                        position: 'absolute',
                                        top: 0
                                    }}
                                />
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>

            </div>

            {/* Network Pattern Overlay */}
            <div className="pattern-overlay absolute inset-0 pointer-events-none">
                <div className="network-pattern w-full h-full bg-network-pattern opacity-20"></div>
            </div>

            {/* Custom Media Queries for responsive design */}
            <style jsx>{`
                /* For mobile devices (up to 767px) */
                @media (max-width: 767px) {
                    .hero-container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    
                    .hero-content-grid {
                        gap: S2rem;
                    }
                    
                    .hero-heading {
                        font-size: 24px !important;
                        margin-bottom: 1rem;
                    }
                    
                    .hero-subheading {
                        font-size: 16px !important;
                        margin-bottom: 1rem;
                    }
                    
                    .hero-quote-text {
                        font-size: 14px !important;
                    }
                    
                    .quote-icon-left,
                    .quote-icon-right {
                        transform: scale(0.8);
                    }
                    
                    .hero-cta-button {
                        padding: 0.5rem 1.5rem;
                        font-size: 0.875rem;
                        margin-top: 2rem !important;
                    }
                    
                    .hero-image-container {
                        margin-bottom: 2rem;
                    }
                }
                
                /* For tablets (768px - 1023px) */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .hero-container {
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }
                    
                    .hero-content-grid {
                        gap: 2.5rem;
                    }
                    
                    .hero-heading {
                        font-size: 28px !important;
                    }
                    
                    .hero-subheading {
                        font-size: a20px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 16px !important;
                    }
                    
                    .hero-cta-button {
                        margin-top: 2.5rem !important;
                    }
                }
                
                /* For smaller laptop screens (1024px) */
                @media (max-width: 1024px) {
                    .hero-container {
                        padding-left: 5%;
                        padding-right: 5%;
                    }
                    
                    .hero-content-grid {
                        gap: 3%;
                    }
                }
                
                /* For medium laptops (1025px - 1440px) */
                @media (min-width: 1025px) and (max-width: 1440px) {
                    .hero-container {
                        padding-left: 6%;
                        padding-right: 6%;
                    }
                    
                    .hero-content-grid {
                        gap: 4%;
                    }
                    
                    .hero-heading {
                        font-size: 32px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 22px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 17px !important;
                    }

                    .quote-container-2 {
                       width: 100%;
                       display: flex;
                       justify-content:flex-end;
                       padding-right: 30%;
                    }
                }
                
                /* For larger laptops (1441px - 1919px) */
                @media (min-width: 1441px) and (max-width: 1919px) {
                    .hero-container {
                        padding-left: 7%;
                        padding-right: 7%;
                    }
                    
                    .hero-content-grid {
                        gap: 4.5%;
                    }
                    
                    .hero-heading {
                        font-size: 36px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 24px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 18px !important;
                    }

                    .quote-container-2 {
                       width: 100%;
                       display: flex;
                       justify-content:flex- end;
                       padding-right: 13%;
                    }
                }
                
                /* For desktop screens (1920px - 1999px) */
                @media (min-width: 1920px) and (max-width: 1999px) {
                    .hero-container {
                        max-width: 90%;
                        margin: 0 auto;
                    }
                    
                    .hero-content-grid {
                        gap: 4.8%;
                    }
                    
                    .hero-heading {
                        font-size: 38px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 25px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 19px !important;
                    }

                    .quote-container-2 {
                       width: 100%;
                       display: flex;
                       justify-content:flex-end;
                       padding-right: 10%;
                    }
                }
                
                /* For larger screens (2000px and above) */
                @media (min-width: 2000px) {
                    .hero-container {
                        max-width: 80%;
                        margin: 0 auto;
                    }
                    
                    .hero-content-grid {
                        gap: 5%;
                    }
                    
                    .hero-heading {
                        font-size: 52px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 26px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 22px !important;
                    }
                    
                    .hero-cta-button {
                        padding: 1rem 2.5rem;
                        font-size: 1.2rem;
                    }

                    .quote-container-2 {
                       width: 100%;
                       display: flex;
                       justify-content:flex-end;
                       padding-right: 65%;
                    }
                }
                
                /* For extra-large screens (3000px and above) */
                @media (min-width: 3000px) {
                    .hero-container {
                        max-width: 70%;
                    }
                    
                    .hero-content-grid {
                        gap: 8%;
                    }
                    
                    .hero-heading {
                        font-size: 64px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 32px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 28px !important;
                    }
                    
                    .hero-cta-button {
                        padding: 1.25rem 3rem;
                        font-size: 1.5rem;
                        margin-top: 4rem !important;
                    }
                }
                
                /* For ultra-wide screens (4000px and above) */
                @media (min-width: 4000px) {
                    .hero-container {
                        max-width: 60%;
                    }
                    
                    .hero-content-grid {
                        gap: 10%;
                    }
                    
                    .hero-heading {
                        font-size: 80px !important;
                    }
                    
                    .hero-subheading {
                        font-size: 42px !important;
                    }
                    
                    .hero-quote-text {
                        font-size: 36px !important;
                    }
                    
                    .hero-cta-button {
                        padding: 1.5rem 4rem;
                        font-size: 2rem;
                        margin-top: 5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Section1;