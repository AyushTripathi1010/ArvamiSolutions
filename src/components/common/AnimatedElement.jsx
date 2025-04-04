// src/components/common/AnimatedElement.jsx
import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AnimatedElement = ({
    children,
    className = '',
    threshold = 0.1,
    initialOpacity = 0,
    initialScale = 0.5,
    finalOpacity = 1,
    finalScale = 1,
    duration = '1s',
    delay = '0s',
    easing = 'ease',
    ...props
}) => {
    const animatedRef = useScrollAnimation({
        threshold,
        initialOpacity,
        initialScale,
        finalOpacity,
        finalScale,
        duration,
        delay,
        easing
    });

    return (
        <div ref={animatedRef} className={className} {...props}>
            {children}
        </div>
    );
};

export default AnimatedElement;