import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./TestimonialsSection.css";
import profile1 from '../../assets/HomePage/profile_1.jpg'
import profile2 from '../../assets/HomePage/profile_2.jpg'
import profile3 from '../../assets/HomePage/profile_3.jpg'
import profile4 from '../../assets/HomePage/profile_4.jpg'
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

// SVG Background component with proper mask scaling
const TestimonialBackground = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom, #000322, #050E66)",
        minHeight: "100%"
      }}
    >
    </div>
  );
};

const testimonials = [
  {
    text: "Starting my business felt overwhelming with all the legal formalities, but Arvami Solutions made it effortless! From GST registration to company incorporation, their team handled everything with precision. Highly professional and reliable—definitely my go-to for business solutions!",
    author: "Rohit Sharma",
    role: "Startup Founder",
    image: profile1,
  },
  {
    text: "I was skeptical at first, but their services truly helped me refine my strategy. Their numbers gave me confidence in making decisions—a valuable service for any business.",
    author: "Amit Verma",
    role: "Business Consultant",
    image: profile3,
  },
  {
    text: "The team at Arvami Solutions exceeded my expectations! Their attention to detail and timely delivery were remarkable. I highly recommend their services.",
    author: "Priya Mehta",
    role: "Entrepreneur",
    image: profile2,
  },
  {
    text: "Exceptional service! I'm impressed by their expertise and quick support. A game-changer for my business operations.",
    author: "Karan Patel",
    role: "CEO",
    image: profile4,
  },
];

// Testimonial Card Component for center position - FIXED
const CenterTestimonial = ({ testimonial }) => {
  return (
    <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
      <div className="relative max-w-2xl mx-auto overflow-visible">
        <div className="bg-white rounded-2xl shadow-xl p-8 pt-20 mx-auto mt-16">
          <div className="profile-container absolute left-1/2 -top-16 transform -translate-x-1/2 z-30">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover text-white"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-blue-500 text-5xl mb-3 text-start">❝</p>
            <p className="text-lg text-gray-700 mb-1">
              {testimonial.text}
            </p>
            <p className="text-blue-500 text-5xl text-start rotate-180">❝</p>
            <p className="font-bold text-gray-900 text-xl">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

// Testimonial Card Component for side positions - FIXED
const SideTestimonial = ({ testimonial }) => {
  return (

    <div className="testimonial-card mx-auto max-w-2xl overflow-visible pt-12">
      <div className="relative">
        <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-30">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-8 pt-16 rounded-xl w-full text-center bg-white bg-opacity-90 shadow-lg">
          <p className="text-lg text-gray-700 mb-4 line-clamp-4">
            {testimonial.text}
          </p>
          <p className="font-bold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>

  );
};

const TestimonialsSection = () => {
  // Create a wrapped array: [last, ...original, first] to allow seamless transitions
  const getWrappedTestimonials = () => {
    const lastItem = testimonials[testimonials.length - 1];
    const firstItem = testimonials[0];
    return [lastItem, ...testimonials, firstItem];
  };

  const wrappedTestimonials = getWrappedTestimonials();

  // slideIndex refers to index in wrappedTestimonials.
  // Start at 1 so that the first actual testimonial is centered.
  const [slideIndex, setSlideIndex] = useState(1);
  const [, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const transitionDuration = 500; // in ms

  const handleNext = () => {
    if (isTransitioning) return;
    const newSlideIndex = slideIndex + 1;
    setIsTransitioning(true);
    setSlideIndex(newSlideIndex);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    // When reaching the clone of the first slide, jump instantly to the real first slide
    if (newSlideIndex === wrappedTestimonials.length - 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setSlideIndex(1);
        // small timeout to force reflow then re-enable transition
        setTimeout(() => {
          setTransitionEnabled(true);
          setIsTransitioning(false);
        }, 50);
      }, transitionDuration);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    const newSlideIndex = slideIndex - 1;
    setIsTransitioning(true);
    setSlideIndex(newSlideIndex);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // When reaching the clone of the last slide, jump instantly to the real last slide
    if (newSlideIndex === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setSlideIndex(testimonials.length);
        setTimeout(() => {
          setTransitionEnabled(true);
          setIsTransitioning(false);
        }, 50);
      }, transitionDuration);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    }
  };

  // const handleDotClick = (index) => {
  //   if (isTransitioning || index === currentIndex) return;
  //   // Calculate difference
  //   const diff = index - currentIndex;
  //   setIsTransitioning(true);
  //   setSlideIndex((prev) => prev + diff);
  //   setCurrentIndex(index);
  //   setTimeout(() => setIsTransitioning(false), transitionDuration);
  // };

  return (
    <div className="testimonials-section relative">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <TestimonialBackground />
      </div>
      <div class="custom-shape-divider-top-1743787934">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1743787664">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
        </svg>
      </div>
      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 pt-16 pb-8">
          <h2 className="text-3xl font-bold text-white text-left md:text-left">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[550px] w-full overflow-visible">
          <div className="flex justify-center items-center h-full relative">
            {/* Carousel Track */}
            <div
              className="flex items-center"
              style={{
                transition: transitionEnabled ? `transform ${transitionDuration}ms ease-in-out` : 'none',
                transform: `translateX(calc(-${slideIndex * 33.33}% + 33.33%))`,
                width: 'calc(100% * 6)' // remains as before
              }}
            >
              {wrappedTestimonials.map((testimonial, index) => {
                const relativePosition = index - slideIndex;
                const isCurrent = relativePosition === 0;

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-1/3 px-6 transition-all duration-500 flex items-center justify-center overflow-visible
                      ${isCurrent
                        ? 'z-30 transform scale-105 opacity-100'
                        : 'z-10 transform scale-90 opacity-50'
                      }`}
                    style={{ minHeight: '450px' }}
                  >
                    {isCurrent ? (
                      <CenterTestimonial testimonial={testimonial} />
                    ) : (
                      <SideTestimonial testimonial={testimonial} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="group absolute left-[28%] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-[#2196F3] transition-all duration-300 shadow-lg z-30 hover:w-16 hover:h-16"
            disabled={isTransitioning}
          >
            <ArrowBackIcon className="transition-all duration-300" />
          </button>

          <button
            onClick={handleNext}
            className="group absolute right-[28%] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-[#2196F3] transition-all duration-300 shadow-lg z-30 hover:w-16 hover:h-16"
            disabled={isTransitioning}
          >
            <ArrowForwardIcon className="transition-all duration-300" />
          </button>
        </div>

        <div className='mt-20'></div>
        {/* Dots Navigation */}
        {/* <div className="flex justify-center mt-10 space-x-2 pb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-600"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>

      {/* Add responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */

        .custom-shape-divider-top-1743787934 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
      }

      .custom-shape-divider-top-1743787934 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 70px;
      }

      .custom-shape-divider-bottom-1743787664 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
      }

    .custom-shape-divider-bottom-1743787664 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 70px;
        }

    .custom-shape-divider-bottom-1743787664 .shape-fill {
        fill: #FFFFFF;
    }

.custom-shape-divider-top-1743787934 .shape-fill {
    fill: #FFFFFF;
}
        @media (max-width: 639px) {
          .testimonials-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          h2 {
            font-size: 1.75rem !important;
            margin-bottom: 1.5rem;
          }
          
          .min-h-\\[550px\\] {
            min-height: 650px !important;
          }
          
          .w-32.h-32 {
            width: 5rem !important;
            height: 5rem !important;
          }
          
          .w-24.h-24 {
            width: 4rem !important;
            height: 4rem !important;
          }
          
          .p-8 {
            padding: 1rem !important;
          }
          
          .pt-20 {
            padding-top: 4rem !important;
          }
          
          .text-5xl {
            font-size: 2rem !important;
          }
          
          .text-lg {
            font-size: 0.875rem !important;
          }
          
          .text-xl {
            font-size: 1rem !important;
          }
          
          .w-12.h-12 {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          
          .left-\\[28\\%\\] {
            left: 5% !important;
          }
          
          .right-\\[28\\%\\] {
            right: 5% !important;
          }
          
          .hover\\:w-16.hover\\:h-16:hover {
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
          
          .profile-container{
            top:-9%;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .testimonials-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          h2 {
            font-size: 2rem !important;
            margin-bottom: 2rem;
          }
          
          .min-h-\\[550px\\] {
            min-height: 600px !important;
          }
          
          .w-32.h-32 {
            width: 6rem !important;
            height: 6rem !important;
          }
          
          .w-24.h-24 {
            width: 4.5rem !important;
            height: 4.5rem !important;
          }
          
          .left-\\[28\\%\\] {
            left: 10% !important;
          }
          
          .right-\\[28\\%\\] {
            right: 10% !important;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .testimonials-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          h2 {
            font-size: 2.25rem !important;
            margin-bottom: 2.5rem;
          }
          
          .left-\\[28\\%\\] {
            left: 15% !important;
          }
          
          .right-\\[28\\%\\] {
            right: 15% !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          h2 {
            font-size: 2.5rem !important;
          }
          
          .left-\\[28\\%\\] {
            left: 20% !important;
          }
          
          .right-\\[28\\%\\] {
            right: 20% !important;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          h2 {
            font-size: 2.75rem !important;
          }
          
          .left-\\[28\\%\\] {
            left: 25% !important;
          }
          
          .right-\\[28\\%\\] {
            right: 25% !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          h2 {
            font-size: 3rem !important;
          }
          
          .w-32.h-32 {
            width: 9rem !important;
            height: 9rem !important;
          }
          
          .w-24.h-24 {
            width: 7rem !important;
            height: 7rem !important;
          }
          
          .text-5xl {
            font-size: 3.5rem !important;
          }
          
          .text-lg {
            font-size: 1.125rem !important;
          }
          
          .text-xl {
            font-size: 1.25rem !important;
          }
          
          .w-12.h-12 {
            width: 3.5rem !important;
            height: 3.5rem !important;
          }
          
          .hover\\:w-16.hover\\:h-16:hover {
            width: 4rem !important;
            height: 4rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .testimonials-section {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          h2 {
            font-size: 3.5rem !important;
            margin-bottom: 3rem;
          }
          
          .min-h-\\[550px\\] {
            min-height: 650px !important;
          }
          
          .w-32.h-32 {
            width: 10rem !important;
            height: 10rem !important;
          }
          
          .w-24.h-24 {
            width: 8rem !important;
            height: 8rem !important;
          }
          
          .p-8 {
            padding: 2rem !important;
          }
          
          .pt-20 {
            padding-top: 7rem !important;
          }
          
          .text-5xl {
            font-size: 4rem !important;
          }
          
          .text-lg {
            font-size: 1.25rem !important;
          }
          
          .text-xl {
            font-size: 1.5rem !important;
          }
          
          .w-12.h-12 {
            width: 4rem !important;
            height: 4rem !important;
          }
          
          .hover\\:w-16.hover\\:h-16:hover {
            width: 4.5rem !important;
            height: 4.5rem !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .testimonials-section {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          h2 {
            font-size: 4rem !important;
            margin-bottom: 4rem;
          }
          
          .min-h-\\[550px\\] {
            min-height: 750px !important;
          }
          
          .w-32.h-32 {
            width: 12rem !important;
            height: 12rem !important;
          }
          
          .w-24.h-24 {
            width: 10rem !important;
            height: 10rem !important;
          }
          
          .p-8 {
            padding: 3rem !important;
          }
          
          .pt-20 {
            padding-top: 9rem !important;
          }
          
          .text-5xl {
            font-size: 5rem !important;
          }
          
          .text-lg {
            font-size: 1.5rem !important;
          }
          
          .text-xl {
            font-size: 1.75rem !important;
          }
          
          .w-12.h-12 {
            width: 5rem !important;
            height: 5rem !important;
          }
          
          .hover\\:w-16.hover\\:h-16:hover {
            width: 5.5rem !important;
            height: 5.5rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .testimonials-section {
            padding-top: 10rem;
            padding-bottom: 10rem;
          }
          
          h2 {
            font-size: 5rem !important;
            margin-bottom: 5rem;
          }
          
          .min-h-\\[550px\\] {
            min-height: 900px !important;
          }
          
          .w-32.h-32 {
            width: 16rem !important;
            height: 16rem !important;
          }
          
          .w-24.h-24 {
            width: 12rem !important;
            height: 12rem !important;
          }
          
          .p-8 {
            padding: 4rem !important;
          }
          
          .pt-20 {
            padding-top: 12rem !important;
          }
          
          .text-5xl {
            font-size: 6rem !important;
          }
          
          .text-lg {
            font-size: 2rem !important;
          }
          
          .text-xl {
            font-size: 2.25rem !important;
          }
          
          .w-12.h-12 {
            width: 6rem !important;
            height: 6rem !important;
          }
          
          .hover\\:w-16.hover\\:h-16:hover {
            width: 7rem !important;
            height: 7rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;