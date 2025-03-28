import project1 from '../../assets/DesignPage/Design_img14.png';
import project2 from '../../assets/DesignPage/Design_img15.png';
import project3 from '../../assets/DesignPage/Design_img16.png';
import bgImage from '../../assets/DesignPage/Design_img7.png';
import RozgarVideo from '../../assets/DesignPage/Rozgar_video.mp4';
import { ArrowRight } from 'lucide-react';

const Section4 = () => {
  const videoProjects = [
    {
      id: 1,
      name: "Rozgar",
      video: RozgarVideo,
      category: "Web Development",
      description: "Job portal with advanced filtering and application tracking.",
      link: "https://arvami.framer.website/case-studies/transforming-recruitment-with-ai-powered-job-matching-tracking"
    },
    {
      id: 2,
      name: "Gpay",
      video: RozgarVideo, // Using the same video for now as specified
      category: "UI/UX Design",
      description: "Payment platform with intuitive user interface.",
      link: "https://arvami.framer.website/case-studies/new-brand-look-and-website"
    }
  ];

  const imageProjects = [
    {
      id: 3,
      name: "Hairpro",
      image: project1,
      category: "Web Development",
      description: "Hair transplant service website with modern design.",
      link: "https://arvami.framer.website/hairgrow"
    },
    {
      id: 4,
      name: "Jeweler",
      image: project2,
      category: "UI/UX Design",
      description: "Jewelry e-commerce landing page with premium feel.",
      link: "https://arvami.framer.website/sa"
    },
    {
      id: 5,
      name: "Fashion",
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

        {/* First row with video projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 auto-rows-fr">
          {videoProjects.map((project) => (
            <div key={project.id} className="bg-navy-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-800 flex flex-col">
              <div className="h-80 relative">
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-4xl font-bold text-white mb-2 project-title">{project.name}</h3>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    View Case study
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                  className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-2 text-white transform -rotate-45"
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
            href="/portfolio"
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
        }
      `}</style>
    </div>
  );
};

export default Section4;