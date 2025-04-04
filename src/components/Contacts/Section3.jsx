import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';
const Section3 = () => {
  const mapRef = useRef(null);

  const contactInfo = {
    address: "164/2A, Appasaheb Batalit Rd, Adarsh Colony,",
    addressLine2: "Tingre Nagar, Pune, Maharashtra 411032",
    email: "aarvamisolution@gmail.com",
    phone: "83901 25535"
  };

  const resetMap = () => {
    if (mapRef.current) {
      mapRef.current.src = mapRef.current.src;
    }
  };

  useEffect(() => {
    // Initialize map reference once component mounts
    mapRef.current = document.getElementById('locationMap');
  }, []);

  return (
    <div className="py-16 px-14" style={{ backgroundColor: "#000422" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.0377261904244!2d73.89384635836431!3d18.575996151359865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c172e8023713%3A0xac6562f7b98be5e6!2sGaurav%20Heritage!5e0!3m2!1sen!2sin!4v1710191498184!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="shadow-lg"
                id="locationMap"
                ref={mapRef}
              ></iframe>
            </div>
          </ScrollAnimation>

          <div>
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            </ScrollAnimation>

            <div className="space-y-6">
              <div className="flex items-start">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <div
                    className="mr-4 text-primary-400 cursor-pointer hover:text-primary-300 transition duration-300"
                    onClick={resetMap}
                    title="Reset map to exact location"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </ScrollAnimation>
                <div>
                  <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                    <p className="text-white">{contactInfo.address}</p>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                    <p className="text-white">{contactInfo.addressLine2}</p>
                  </ScrollAnimation>
                </div>
              </div>

              <div>
                <Link
                  to="https://www.google.com/maps/place/Gaurav+Heritage/@18.5758964,73.8935029,18.28z/data=!4m6!3m5!1s0x3bc2c172e8023713:0xac6562f7b98be5e6!8m2!3d18.5759962!4d73.8940695!16s%2Fg%2F11ght9hr62?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-400 hover:text-primary-300 transition duration-300"
                >
                  <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                    <div className="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                    <span>Open in Google Maps</span>
                  </ScrollAnimation>
                </Link>
              </div>


              <div className="flex items-start">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <div className="mr-4 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-primary-400 transition duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </ScrollAnimation>
              </div>

              <div className="flex items-start">
                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <div className="mr-4 text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-primary-400 transition duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </div>
  );
};

export default Section3;