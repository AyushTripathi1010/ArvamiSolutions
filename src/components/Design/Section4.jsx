import project1 from '../../assets/DesignPage/Design_img14.png';
import project2 from '../../assets/DesignPage/Design_img15.png';
import project3 from '../../assets/DesignPage/Design_img16.png';
import bgImage from '../../assets/DesignPage/Design_img7.png';
import RozgarVideo from '../../assets/DesignPage/Rozgar_video.mp4';
import GpayVideo from '../../assets/DesignPage/Gpay_video.mp4';
import { ArrowRight } from 'lucide-react';

const Section4 = () => {
  const imageProjects = [
    {
      id: 3,
      name: "HairGrow",
      image: project1,
      category: "Web Development",
      description: "Hair transplant service website with modern design.",
      link: "https://arvami.framer.website/hairgrow"
    },
    {
      id: 4,
      name: "Saavariya",
      image: project2,
      category: "UI/UX Design",
      description: "Jewelry e-commerce landing page with premium feel.",
      link: "https://arvami.framer.website/sa"
    },
    {
      id: 5,
      name: "Gehna",
      image: project3,
      category: "E-commerce",
      description: "Traditional and modern fashion blend for online shopping.",
      link: "https://arvami.framer.website/gehna"
    }
  ];

  return (
    <div className="py-20 relative portfolio-section" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 portfolio-heading">Portfolio</h2>
        </div>

        {/* First row with video projects - explicit containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 auto-rows-fr">
          {/* Rozgar Video Container */}
          <div className="bg-navy-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
            <div className="video-container h-96 relative">
              <div className="video-wrapper absolute inset-0 flex items-center justify-center">
                <video
                  src={RozgarVideo}
                  className="video-element"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-4xl font-bold text-white mb-2 project-title">Rozgar</h3>
              <div className="flex justify-between items-center">
                <a
                  href="https://arvami.framer.website/case-studies/transforming-recruitment-with-ai-powered-job-matching-tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  View Case study
                </a>
              </div>
            </div>
          </div>

          {/* Gpay Video Container */}
          <div className="bg-navy-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
            <div className="video-container h-96 relative">
              <div className="video-wrapper absolute inset-0 flex items-center justify-center">
                <video
                  src={GpayVideo}
                  className="video-element-gpay"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-4xl font-bold text-white mb-2 project-title">Gpay</h3>
              <div className="flex justify-between items-center">
                <a
                  href="https://arvami.framer.website/case-studies/new-brand-look-and-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  View Case study
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second row with image projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 auto-rows-fr">
          {imageProjects.map((project) => (
            <div key={project.id} className="bg-navy-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
              <div className="h-96 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-2 text-white transform -rotate-45 hover:scale-125 transition-transform ease-in-out"
                >
                  <ArrowRight size={20} />
                </a>
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-4xl font-bold text-white mb-2 project-title">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio button */}
        <div className="flex justify-center ">
          <a
            href="https://arvami.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-blue-500 text-navy-900 font-semibold hover:text-white py-3 px-10 border border-white hover:border-transparent rounded-full transition duration-500 inline-block"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        .video-container {
          position: relative;
          overflow: hidden;
          background-color: #000;
        }
        
        .video-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .video-element {
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transform: scale(1); /* Scale up video to make it bigger */
        }
        
        .video-element-gpay{
           min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transform: scale(0.3); /* Scale up video to make it bigger */
        }
        
        /* Ensure videos maintain aspect ratio while filling container */
        @media (min-width: 768px) {
          .video-container {
            height: 380px;
          }
        }
        
        /* For smaller mobile screens */
        @media (max-width: 767px) {
          .video-container {
            height: 280px;
          }
          
          .project-title {
            font-size: 2.25rem;
          }
          
          .video-element {
            transform: scale(1.2); /* Slightly smaller scale for mobile */
          }
        }
        
        /* For smaller laptop screens (1024px) */
        @media (max-width: 1024px) {
          .container {
            padding-left: 4%;
            padding-right: 4%;
          }
        }
        
        /* For larger screens (2000px and above) */
        @media (min-width: 2000px) {
          .container {
            max-width: 80%;
            margin: 0 auto;
          }
          
          .portfolio-heading {
            font-size: 2.5rem;
          }
          
          .project-title {
            font-size: 2.25rem;
          }
          
          .video-container {
            height: 450px;
          }
          
          .video-element {
            transform: scale(1.4); /* Larger scale for bigger screens */
          }
        }
        
        /* For extra-large screens (3000px and above) */
        @media (min-width: 3000px) {
          .container {
            max-width: 70%;
          }
          
          .portfolio-heading {
            font-size: 3rem;
          }
          
          .project-title {
            font-size: 2.5rem;
          }
          
          .video-container {
            height: 550px;
          }
          
          .video-element {
            transform: scale(1.5); /* Even larger scale for extra large screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Section4;