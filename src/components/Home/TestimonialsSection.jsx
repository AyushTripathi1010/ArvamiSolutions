import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./TestimonialsSection.css";

// SVG Background component with proper mask scaling
const TestimonialBackground = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 1512 836"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
      style={{ minHeight: "100%" }}
    >
      <g clipPath="url(#clip0_1127_1573)">
        <rect width="1512" height="835.5" fill="white" />
        <rect width="1512" height="850.5" fill="#F4FBF7" />
        <g filter="url(#filter0_d_1127_1573)">
          <rect width="1512" height="850.5" fill="#01052B" />
          <rect width="1512" height="850.5" fill="url(#paint0_linear_1127_1573)" />
          <rect x="0.5" y="0.5" width="1511" height="849.5" stroke="black" />
        </g>
        <mask id="mask0_1127_1573" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="601" width="1512" height="250">
          <rect width="1512" height="250" transform="translate(0 601)" fill="white" />
        </mask>
        <g mask="url(#mask0_1127_1573)">
          <circle cx="755.5" cy="5251.84" r="4485.5" fill="#F4FBF7" />
        </g>
        <mask id="mask1_1127_1573" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-18" y="0" width="1512" height="250">
          <g clipPath="url(#clip1_1127_1573)">
            <rect width="1512" height="250" transform="matrix(1 0 0 -1 -18 250)" fill="white" />
          </g>
        </mask>
        <g mask="url(#mask1_1127_1573)">
          <circle cx="4485.5" cy="4485.5" r="4485.5" transform="matrix(1 0 0 -1 -3748 54.6562)" fill="white" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_1127_1573" x="-4" y="0" width="1520" height="858.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1127_1573" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1127_1573" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_1127_1573" x1="756" y1="0" x2="756" y2="850.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#000322" />
          <stop offset="1" stopColor="#050E66" />
        </linearGradient>
        <clipPath id="clip0_1127_1573">
          <rect width="1512" height="835.5" fill="white" />
        </clipPath>
        <clipPath id="clip1_1127_1573">
          <rect width="1512" height="250" fill="white" transform="matrix(1 0 0 -1 -18 250)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const testimonials = [
  {
    text: "Starting my business felt overwhelming with all the legal formalities, but Arvami Solutions made it effortless! From GST registration to company incorporation, their team handled everything with precision. Highly professional and reliable—definitely my go-to for business solutions!",
    author: "Rohit Sharma",
    role: "Startup Founder",
    image: "https://via.placeholder.com/150",
  },
  {
    text: "I was skeptical at first, but their services truly helped me refine my strategy. Their numbers gave me confidence in making decisions—a valuable service for any business.",
    author: "Amit Verma",
    role: "Business Consultant",
    image: "https://via.placeholder.com/150",
  },
  {
    text: "The team at Arvami Solutions exceeded my expectations! Their attention to detail and timely delivery were remarkable. I highly recommend their services.",
    author: "Priya Mehta",
    role: "Entrepreneur",
    image: "https://via.placeholder.com/150",
  },
  {
    text: "Exceptional service! I'm impressed by their expertise and quick support. A game-changer for my business operations.",
    author: "Karan Patel",
    role: "CEO",
    image: "https://via.placeholder.com/150",
  },
];

// Testimonial Card Component for center position - FIXED
const CenterTestimonial = ({ testimonial }) => {
  return (
    <div className="relative max-w-2xl mx-auto overflow-visible">
      <div className="bg-white rounded-2xl shadow-xl p-8 pt-20 mx-auto mt-16">
        <div className="absolute left-1/2 -top-0 transform -translate-x-1/2 z-30">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-blue-500 text-5xl mb-6">❝</p>
          <p className="text-lg text-gray-700 mb-6">
            {testimonial.text}
          </p>
          <p className="font-bold text-gray-900 text-xl">{testimonial.author}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
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
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleDotClick = (index) => {
    if (isTransitioning || index === currentIndex) return;
    // Calculate difference
    const diff = index - currentIndex;
    setIsTransitioning(true);
    setSlideIndex((prev) => prev + diff);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  };

  return (
    <div className="testimonials-section relative">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full">
        <TestimonialBackground />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 pt-16 pb-8">
          <h2 className="text-4xl font-bold text-white text-left md:text-left">
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
            className="group absolute left-[14%] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-lg text-white hover:bg-green-600 transition-all duration-300 shadow-lg z-30 hover:w-16 hover:h-16"
            disabled={isTransitioning}
          >
            <ArrowBackIcon className="transition-all duration-300" />
          </button>

          <button
            onClick={handleNext}
            className="group absolute right-[14%] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-lg text-white hover:bg-green-600 transition-all duration-300 shadow-lg z-30 hover:w-16 hover:h-16"
            disabled={isTransitioning}
          >
            <ArrowForwardIcon className="transition-all duration-300" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 space-x-2 pb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
