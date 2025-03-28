import { useContext } from 'react';
import missionImg from '../../assets/HomePage/Home_img1.png';
import wallpaper from '../../assets/HomePage/Wallpaper.png';
import { ModalContext } from './HomePage';

const MissionSection = () => {
  // Get openModal function from context  
  const { openModal } = useContext(ModalContext);

  return (
    <div className="py-20 bg-navy-900 relative z-10">
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={missionImg}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                At Arvami Sol, we believe in harnessing the potential of technology and mysticism
                to empower individuals and businesses.
              </p>
              <p>
                Our team is passionate about delivering high-quality services that make a
                difference.
              </p>
              <p className="mb-8">
                Ready to transform your business or personal life? Contact us today to explore how Arvami Sol
                can help you achieve your goals.
              </p>
              <button
                onClick={openModal}
                className="inline-block bg-white hover:bg-[#2196F3] hover:text-white text-navy-900 font-semibold py-3 px-8 rounded-full transition duration-500 "
                style={{ marginTop: '55px' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background wave pattern - using the wallpaper rotated */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-1 pointer-events-none z-[-10]">
        <div className="w-full h-full bg-no-repeat bg-left-bottom bg-cover"
          style={{
            backgroundImage: `url(${wallpaper})`,
            transform: 'rotate(180deg)'
          }}>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;