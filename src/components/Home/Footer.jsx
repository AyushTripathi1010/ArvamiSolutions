import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bgImage from '../../assets/HomePage/Home_img5.png';
import ScrollAnimation from '../hooks/ScrollAnimation.jsx';

const Footer = () => {
  return (
    <footer className="site-footer text-white py-12 relative">
      <div className="footer-bg-wrapper absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}>
      </div>

      <div className="footer-container container mx-auto px-6 relative z-10">
        <div className="footer-header text-center mb-16">
          {/* <div className="footer-logo-wrapper flex justify-center mb-4">
            <img src={logo} alt="Arvami Logo" className="footer-logo h-12" />
          </div> */}
          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <h2 className="footer-title text-[20px] font-bold mb-2">ARVAMI</h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <p className="footer-description max-w-2xl mx-auto text-gray-400">
              For more than three decades, we've been applying the right teams,
              strategies, and technology to help our clients stay aligned
              with the evolving world of online learning.
            </p>
          </ScrollAnimation>

        </div>

        <div className="footer-social-links flex justify-center space-x-6 mb-8">
          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <a href="https://www.linkedin.com/in/arvami-solutionz-bb86ba355" target="_blank" rel="noopener noreferrer" className="social-link linkedin hover:text-primary-400 transition">
              <svg className="social-icon h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <a href="https://x.com/ArvamiSolutionz" target="_blank" rel="noopener noreferrer" className="social-link twitter hover:text-primary-400 transition">
              <svg className="social-icon h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </ScrollAnimation>

          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <a href="https://www.instagram.com/arvamisolutionz/" target="_blank" rel="noopener noreferrer" className="social-link instagram hover:text-primary-400 transition">
              <svg className="social-icon h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </ScrollAnimation>
        </div>


        <div className="footer-copyright text-center text-gray-500 text-sm">
          <ScrollAnimation direction="up" distance="50px" duration={1200} delay={200} threshold={0.2}>
            <p className="copyright-text">© 2025 Arvami Solutions. All rights reserved.</p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Background design elements */}
      <div className="footer-pattern-wrapper absolute inset-0 pointer-events-none z-0">
        <div className="footer-pattern-container w-full h-full opacity-5">
          <div className="footer-pattern-right absolute bottom-0 right-0 bg-network-pattern w-1/3 h-1/3 bg-no-repeat bg-right-bottom"></div>
          <div className="footer-pattern-left absolute top-0 left-0 bg-network-pattern w-1/3 h-1/3 bg-no-repeat bg-left-top transform rotate-180"></div>
        </div>
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        /* For mobile devices (up to 639px) */
        @media (max-width: 639px) {
          .site-footer {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .footer-header {
            margin-bottom: 1.5rem;
          }
          
          .footer-title {
            font-size: 2rem !important;
            margin-bottom: 0.5rem;
          }
          
          .footer-description {
            font-size: 0.875rem !important;
            max-width: 100%;
          }
          
          .footer-social-links {
            margin-bottom: 1rem;
          }
          
          .social-icon {
            height: 1.25rem;
            width: 1.25rem;
          }
          
          .copyright-text {
            font-size: 0.75rem !important;
          }
        }
        
        /* For medium mobile devices (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .site-footer {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          
          .footer-header {
            margin-bottom: 2rem;
          }
          
          .footer-title {
            font-size: 2.5rem !important;
          }
          
          .footer-description {
            font-size: 0.9375rem !important;
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .social-icon {
            height: 1.5rem;
            width: 1.5rem;
          }
        }
        
        /* For tablets (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .site-footer {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          
          .footer-header {
            margin-bottom: 2.5rem;
          }
          
          .footer-title {
            font-size: 3rem !important;
          }
          
          .footer-description {
            font-size: 1rem !important;
            max-width: 85%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .footer-social-links {
            margin-bottom: 1.5rem;
          }
          
          .social-icon {
            height: 1.75rem;
            width: 1.75rem;
          }
          
          .copyright-text {
            font-size: 0.875rem !important;
          }
        }
        
        /* For smaller laptops (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .site-footer {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          
          .footer-header {
            margin-bottom: 3rem;
          }
          
          .footer-title {
            font-size: 1.5rem ;
          }
          
          .footer-description {
            font-size: 1.125rem !important;
            max-width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .social-icon {
            height: 1.75rem;
            width: 1.75rem;
          }
        }
        
        /* For medium laptops (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .footer-container {
            max-width: 90%;
          }
          
          .footer-title {
            font-size: 2rem;
          }
          
          .footer-description {
            font-size: 1.1rem ;
            max-width: 75%;
          }
          
          .footer-social-links {
            margin-bottom: 1.5rem;
          }
          
          .social-icon {
            height: 2rem;
            width: 2rem;
          }
          
          .copyright-text {
            font-size: 0.9375rem !important;
          }
        }
        
        /* For desktop screens (1536px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .site-footer {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          .footer-container {
            max-width: 85%;
          }
          
          .footer-header {
            margin-bottom: 3.5rem;
          }
          
          .footer-title {
            font-size: 3rem !important;
            margin-bottom: 1rem;
          }
          
          .footer-description {
            font-size: 1.375rem !important;
            max-width: 70%;
          }
          
          .social-icon {
            height: 2.25rem;
            width: 2.25rem;
          }
          
          .copyright-text {
            font-size: 1rem !important;
          }
        }
        
        /* For large screens (1920px - 2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .site-footer {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          
          .footer-container {
            max-width: 80%;
          }
          
          .footer-header {
            margin-bottom: 4rem;
          }
          
          .footer-title {
            font-size: 4.5rem !important;
            margin-bottom: 1.25rem;
          }
          
          .footer-description {
            font-size: 1.5rem !important;
            max-width: 65%;
            line-height: 1.6;
          }
          
          .footer-social-links {
            margin-bottom: 2.5rem;
            gap: 2rem;
          }
          
          .social-icon {
            height: 2.5rem;
            width: 2.5rem;
          }
          
          .copyright-text {
            font-size: 1.125rem !important;
          }
        }
        
        /* For extra large screens (2560px - 3839px) */
        @media (min-width: 2560px) and (max-width: 3839px) {
          .site-footer {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          
          .footer-container {
            max-width: 75%;
          }
          
          .footer-header {
            margin-bottom: 5rem;
          }
          
          .footer-title {
            font-size: 5.5rem !important;
            margin-bottom: 1.5rem;
          }
          
          .footer-description {
            font-size: 1.75rem !important;
            max-width: 60%;
            line-height: 1.7;
          }
          
          .footer-social-links {
            margin-bottom: 3rem;
            gap: 2.5rem;
          }
          
          .social-icon {
            height: 3rem;
            width: 3rem;
          }
          
          .copyright-text {
            font-size: 1.25rem !important;
          }
        }
        
        /* For ultra-wide screens (3840px and above) */
        @media (min-width: 3840px) {
          .site-footer {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          
          .footer-container {
            max-width: 70%;
          }
          
          .footer-header {
            margin-bottom: 6rem;
          }
          
          .footer-title {
            font-size: 7rem !important;
            margin-bottom: 2rem;
          }
          
          .footer-description {
            font-size: 2.25rem !important;
            max-width: 55%;
            line-height: 1.8;
          }
          
          .footer-social-links {
            margin-bottom: 4rem;
            gap: 3rem;
          }
          
          .social-icon {
            height: 4rem;
            width: 4rem;
          }
          
          .copyright-text {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;