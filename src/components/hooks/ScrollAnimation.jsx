import { useEffect, useRef, useState } from 'react';

// ScrollAnimation component to animate elements on scroll
const ScrollAnimation = ({
  children,
  className = '',
  direction = 'up',
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  distance = '50px'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Determine the transform based on direction prop
  const getTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance})`;
      case 'down': return `translateY(-${distance})`;
      case 'left': return `translateX(${distance})`;
      case 'right': return `translateX(-${distance})`;
      default: return `translateY(${distance})`;
    }
  };

  const animationStyles = {
    opacity: 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  };

  const visibleStyle = {
    opacity: 1,
    transform: 'translate(0)'
  };

  return (
    <div
      ref={domRef}
      className={`scroll-animation ${className}`}
      style={isVisible ? { ...animationStyles, ...visibleStyle } : animationStyles}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;