import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import HomePage from './components/Home/HomePage';
import DesignPage from './components/Design/DesignPage';
import Footer from './components/Home/Footer';
import ContactPage from './components/Contacts/ContactPage';
import AstrologyPage from './components/Astrology/AstrologyPage';
import AboutPage from './components/About/AboutPage';
import BusinessLegalPage from './components/BL/BusinessLegalPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/astrology" element={<AstrologyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/business-registrations-legal" element={<BusinessLegalPage />} />
            {/* Other routes will be added in future */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;