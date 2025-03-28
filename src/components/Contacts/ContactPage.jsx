import { useEffect } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const ContactPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-900 min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default ContactPage;