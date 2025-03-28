import { useState } from 'react';

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How does Numerology work?",
      answer: "Numerology is the study of numbers and their influence on human life. We analyze your birth date and name to discover insights about your personality, strengths, weaknesses, and life path."
    },
    {
      id: 2,
      question: "Can Vastu really change my life?",
      answer: "Vastu Shastra is an ancient Indian science of architecture and design that aims to create harmony between humans and their living spaces. Proper Vastu alignment can improve energy flow, potentially leading to better health, wealth, and happiness."
    },
    {
      id: 3,
      question: "What are Vedic Switch Words & how do they work?",
      answer: "Vedic Switch Words are powerful words that can 'switch on' specific energies in your subconscious mind. When used correctly, they can help overcome blocks, manifest desires, and transform various aspects of life."
    },
    {
      id: 4,
      question: "Can Numerology help me choose a lucky name for my business or baby?",
      answer: "Yes, numerological analysis can help determine names with vibrations that align with favorable planetary positions and life paths, potentially bringing more positive energy and success."
    },
    {
      id: 5,
      question: "What details do I need to provide for a Numerology report?",
      answer: "For a comprehensive numerology report, we need your full birth name (as on your birth certificate), current name (if different), and complete date of birth including day, month, and year."
    },
    {
      id: 6,
      question: "What is Vastu Shastra, and how does it work?",
      answer: "Vastu Shastra is a traditional Indian system of architecture that incorporates principles of design, layout, space arrangement, and geometry to harmonize energy flow. It works by balancing the five elements (earth, water, fire, air, and space) within your living or working space."
    },
    {
      id: 7,
      question: "How long does it take to see results from Vastu changes?",
      answer: "Results may vary depending on the extent of the changes and individual circumstances. Some people notice improvements within days, while more significant changes may take 3-6 months to fully manifest."
    },
    {
      id: 8,
      question: "Do I need to chant Switch Words daily?",
      answer: "For optimal results, consistent practice is recommended. Chanting switch words daily (ideally 28, 54, or 108 times) helps program your subconscious mind more effectively, though even irregular use can provide benefits."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20  relative" style={{ backgroundColor: "#000322" }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">FAQs (Common Questions & Answers)</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4">
              <button
                className="flex items-center justify-between w-full text-left p-4 bg-navy-800 rounded-lg text-white hover:bg-navy-700 transition"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-3 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span>{faq.question}</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-2 p-4 bg-navy-800 bg-opacity-50 rounded-lg text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;