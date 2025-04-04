import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  const dropdownRef = useRef(null);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleRouteChange = (path) => {
    setActiveRoute(path);
  };

  // Design dropdown items
  const designItems = [
    { name: 'UI/UX Design', path: '/design/' },
    { name: 'Website Design', path: '/design/' },
    { name: 'Logo design', path: '/design/' },
    { name: 'Brochure Design', path: '/design/' },
    { name: 'App Design', path: '/design/' },
  ];

  // Business & Legal dropdown items
  const businessItems = [
    { name: 'GST Registration', path: '/business-registrations-legal/' },
    { name: 'TDS Return Filing', path: '/business-registrations-legal/' },
    { name: 'Project Report Preparation', path: '/business-registrations-legal/' },
    { name: 'Aadhar Card Address Change', path: '/business-registrations-legal/' },
    { name: 'PAN Card Application', path: '/business-registrations-legal/' },
    { name: 'FSSAI Food License', path: '/business-registrations-legal/' },
    { name: 'Udyam Aadhaar Registration', path: '/business-registrations-legal/' },
  ];

  // Astrology dropdown items
  const astrologyItems = [
    { name: 'Numerology Consultation', path: '/astrology/' },
    { name: 'Graphology', path: '/astrology/' },
    { name: 'Vedic Switch Words', path: '/astrology/' },
    { name: 'Vastu Consultation', path: '/astrology/' },
  ];

  return (
    <nav className="navbar fixed w-full z-50 px-10 md:px-16 py-4 transition-all duration-300 
        shadow-lg" style={{ backgroundColor: "#010008" }}
    >
      <div className="navbar-container container mx-auto flex items-center justify-between">
        <Link to="/" className="navbar-logo flex items-center" onClick={() => handleRouteChange('/')}>
          <ScrollAnimation direction="up" distance="40px" duration={1200} delay={200} threshold={0.2}>
            <img src={logo} alt="Arvami Logo" className="logo-image h-12" />
          </ScrollAnimation>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu hidden md:flex space-x-8" ref={dropdownRef}>
          {/* Design Dropdown */}
          <div className="navbar-item relative group">
            <Link
              to="/design"
              className={`navbar-link ${activeRoute.startsWith('/design') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 transition duration-300 flex items-center`}
              onClick={() => handleRouteChange('/design')}
            >
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <span className="navbar-link-text">Design</span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <svg className="navbar-dropdown-icon w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollAnimation>
            </Link>
            <div className="navbar-dropdown absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="navbar-dropdown-items py-1">
                {designItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="navbar-dropdown-item block px-4 py-3 text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                    onClick={() => handleRouteChange(item.path)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Business & Legal Dropdown */}
          <div className="navbar-item relative group">
            <Link
              to="/business-registrations-legal"
              className={`navbar-link ${activeRoute.startsWith('/business-registrations-legal') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 transition duration-300 flex items-center`}
              onClick={() => handleRouteChange('/business-registrations-legal')}
            >
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <span className="navbar-link-text">Business Registrations & Legal</span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <svg className="navbar-dropdown-icon w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollAnimation>
            </Link>
            <div className="navbar-dropdown absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="navbar-dropdown-items py-1">
                {businessItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="navbar-dropdown-item block px-4 py-3 text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                    onClick={() => handleRouteChange(item.path)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Astrology Dropdown */}
          <div className="navbar-item relative group">
            <Link
              to="/astrology"
              className={`navbar-link ${activeRoute.startsWith('/astrology') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 transition duration-300 flex items-center`}
              onClick={() => handleRouteChange('/astrology')}
            >
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <span className="navbar-link-text">Astrology</span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
                <svg className="navbar-dropdown-icon w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollAnimation>
            </Link>
            <div className="navbar-dropdown absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="navbar-dropdown-items py-1">
                {astrologyItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="navbar-dropdown-item block px-4 py-3 text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
                    onClick={() => handleRouteChange(item.path)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className={`navbar-link ${activeRoute === '/about' ? 'text-blue-300' : 'text-white'} hover:text-blue-300 transition duration-300`}
            onClick={() => handleRouteChange('/about')}
          >
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <span className="navbar-link-text">About</span>
            </ScrollAnimation>
          </Link>
          <Link
            to="/contact-us"
            className={`navbar-link ${activeRoute === '/contact-us' ? 'text-blue-300' : 'text-white'} hover:text-blue-300 transition duration-300`}
            onClick={() => handleRouteChange('/contact-us')}
          >
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <span className="navbar-link-text">Contact Us</span>
            </ScrollAnimation>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-toggle md:hidden">
          <button
            onClick={toggleMenu}
            className="mobile-menu-button text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
              <svg
                className="mobile-menu-icon w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </ScrollAnimation>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu-container md:hidden mt-4 bg-blue-900/95 rounded-lg p-4 animate-fadeIn mx-4">
          <div className="mobile-menu-items flex flex-col space-y-2">
            {/* Design Mobile Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => toggleDropdown('design-mobile')}
                className="mobile-dropdown-button w-full text-left py-2 transition duration-300 flex items-center justify-between"
              >
                <Link
                  to="/design"
                  className={`mobile-link ${activeRoute.startsWith('/design') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 flex-1`}
                  onClick={() => {
                    setIsOpen(false);
                    handleRouteChange('/design');
                  }}
                >
                  <span className="mobile-link-text">Design</span>
                </Link>
                <svg
                  className={`mobile-dropdown-icon w-4 h-4 ${activeRoute.startsWith('/design') ? 'text-blue-300' : 'text-white'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('design-mobile');
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={activeDropdown === 'design-mobile' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {activeDropdown === 'design-mobile' && (
                <div className="mobile-dropdown-items pl-4 pt-2 pb-1 space-y-2">
                  {designItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-dropdown-item block py-2 text-gray-300 hover:text-blue-300 transition duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                        handleRouteChange(item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Business Mobile Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => toggleDropdown('business-mobile')}
                className="mobile-dropdown-button w-full text-left py-2 transition duration-300 flex items-center justify-between"
              >
                <Link
                  to="/business-registrations-legal"
                  className={`mobile-link ${activeRoute.startsWith('/business-registrations-legal') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 flex-1`}
                  onClick={() => {
                    setIsOpen(false);
                    handleRouteChange('/business-registrations-legal');
                  }}
                >
                  <span className="mobile-link-text">Business Registrations & Legal</span>
                </Link>
                <svg
                  className={`mobile-dropdown-icon w-4 h-4 ${activeRoute.startsWith('/business-registrations-legal') ? 'text-blue-300' : 'text-white'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('business-mobile');
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={activeDropdown === 'business-mobile' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {activeDropdown === 'business-mobile' && (
                <div className="mobile-dropdown-items pl-4 pt-2 pb-1 space-y-2">
                  {businessItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-dropdown-item block py-2 text-gray-300 hover:text-blue-300 transition duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                        handleRouteChange(item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Astrology Mobile Dropdown */}
            <div className="mobile-menu-item">
              <button
                onClick={() => toggleDropdown('astrology-mobile')}
                className="mobile-dropdown-button w-full text-left py-2 transition duration-300 flex items-center justify-between"
              >
                <Link
                  to="/astrology"
                  className={`mobile-link ${activeRoute.startsWith('/astrology') ? 'text-blue-300' : 'text-white'} hover:text-blue-300 flex-1`}
                  onClick={() => {
                    setIsOpen(false);
                    handleRouteChange('/astrology');
                  }}
                >
                  <span className="mobile-link-text">Astrology</span>
                </Link>
                <svg
                  className={`mobile-dropdown-icon w-4 h-4 ${activeRoute.startsWith('/astrology') ? 'text-blue-300' : 'text-white'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('astrology-mobile');
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={activeDropdown === 'astrology-mobile' ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>
              {activeDropdown === 'astrology-mobile' && (
                <div className="mobile-dropdown-items pl-4 pt-2 pb-1 space-y-2">
                  {astrologyItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-dropdown-item block py-2 text-gray-300 hover:text-blue-300 transition duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                        handleRouteChange(item.path);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`mobile-link ${activeRoute === '/about' ? 'text-blue-300' : 'text-white'} hover:text-blue-300 py-2 transition duration-300`}
              onClick={() => {
                setIsOpen(false);
                handleRouteChange('/about');
              }}
            >
              <span className="mobile-link-text">About</span>
            </Link>
            <Link
              to="/contact-us"
              className={`mobile-link ${activeRoute === '/contact-us' ? 'text-blue-300' : 'text-white'} hover:text-blue-300 py-2 transition duration-300`}
              onClick={() => {
                setIsOpen(false);
                handleRouteChange('/contact-us');
              }}
            >
              <span className="mobile-link-text">Contact Us</span>
            </Link>
          </div>
        </div>
      )}

      {/* Add responsive styling */}
      <style jsx>{`
        /* For small mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .navbar {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .logo-image {
            height: 2.5rem;
          }
          
          .mobile-menu-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .mobile-link-text {
            font-size: 14px;
          }
          
          .mobile-dropdown-item {
            font-size: 13px;
          }
          
          .mobile-dropdown-icon {
            width: 1rem;
            height: 1rem;
          }
          
          .mobile-menu-container {
            margin-top: 0.5rem;
            padding: 0.75rem;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .navbar {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .logo-image {
            height: 2.75rem;
          }
          
          .mobile-link-text {
            font-size: 15px;
          }
          
          .mobile-dropdown-item {
            font-size: 14px;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .navbar-link-text {
            font-size: 14px;
          }
          
          .navbar-dropdown-icon {
            width: 0.875rem;
            height: 0.875rem;
          }
          
          .navbar-dropdown-item {
            font-size: 13px;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          
          .navbar-dropdown {
            width: 14rem;
          }
          
          .navbar-menu {
            gap: 1rem;
          }
          
          .logo-image {
            height: 2.75rem;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .navbar-link-text {
            font-size: 15px;
          }
          
          .navbar-dropdown-item {
            font-size: 14px;
          }
          
          .logo-image {
            height: 3rem;
          }
          
          .navbar-menu {
            gap: 1.5rem;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
        .navbar {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 0rem;
            padding-right: 0rem;
          }
          
          .navbar-container {
            max-width: 90%;
            display: flex;
            justify-content: space-between;
          }

          .navbar-link-text {
            font-size: 16px;
          }
          
          .navbar-dropdown-item {
            font-size: 15px;
          }
        }
        
        /* For larger laptops and desktops (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
         
          .navbar {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 0rem;
            padding-right: 0rem;
          }
          
          .navbar-container {
            max-width: 90%;
            display: flex;
            justify-content: space-between;
          }

          .navbar-link-text {
            font-size: 17px;
          }
          
         

          .navbar-dropdown-icon {
            width: 1.125rem;
            height: 1.125rem;
          }
          
          .navbar-dropdown-item {
            font-size: 16px;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          
          .navbar-dropdown {
            width: 18rem;
          }
          
          .logo-image {
            height: 3.25rem;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .navbar {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            padding-left: 0rem;
            padding-right: 0rem;
          }
          
          .navbar-container {
            max-width: 90%;
            display: flex;
            justify-content: space-between;
          }
          
          .navbar-link-text {
            font-size: 18px;
          }
          
          .navbar-dropdown-icon {
            width: 1.25rem;
            height: 1.25rem;
          }
          
          .navbar-dropdown-item {
            font-size: 16px;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          
          .navbar-dropdown {
            width: 20rem;
          }
          
          .logo-image {
            height: 3.5rem;
          }
          
          .navbar-menu {
            gap: 2.5rem;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .navbar {
            padding-top: 1.75rem;
            padding-bottom: 1.75rem;
            padding-left: 0rem;
            padding-right: 0rem;
          }
          
          .navbar-container {
            max-width: 95%;
            margin: 0 auto;
          }
          
          .navbar-link-text {
            font-size: 22px;
          }
          
          .navbar-dropdown-icon {
            width: 1.5rem;
            height: 1.5rem;
            margin-left: 0.5rem;
          }
          
          .navbar-dropdown-item {
            font-size: a20px;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          
          .navbar-dropdown {
            width: 24rem;
            margin-top: 1rem;
          }
          
          .logo-image {
            height: 4rem;
          }
          
          .navbar-menu {
            gap: 3rem;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .navbar {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
            padding-left: 8rem;
            padding-right: 8rem;
          }
          
          .navbar-container {
            max-width: 75%;
            margin: 0 auto;
          }
          
          .navbar-link-text {
            font-size: 28px;
          }
          
          .navbar-dropdown-icon {
            width: 2rem;
            height: 2rem;
            margin-left: 0.75rem;
          }
          
          .navbar-dropdown-item {
            font-size: 24px;
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
          
          .navbar-dropdown {
            width: 30rem;
            margin-top: 1.5rem;
          }
          
          .logo-image {
            height: 5rem;
          }
          
          .navbar-menu {
            gap: 4rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;