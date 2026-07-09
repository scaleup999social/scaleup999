import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, FaBars, FaTimes, FaArrowRight, FaPhoneAlt, 
  FaRocket, FaAward, FaHeart, FaPercent, FaLaptopCode, 
  FaShareAlt, FaSearch, FaGoogle, FaFacebook, 
  FaMapMarkerAlt, FaPenNib, FaEnvelope, FaPen, FaYoutube, 
  FaMapPin, FaBullseye, FaEye, 
  FaCheckCircle, FaDollarSign, FaUsers, FaClock, FaHeadphones, 
  FaSlidersH, FaChartLine, FaQrcode, 
  FaShoppingCart, FaWrench, FaCogs, FaPalette, FaFilter, FaBrain,
  FaStar, FaChevronDown, FaQuestionCircle, FaPaperPlane,
  FaChevronUp, FaTwitter, FaInstagram, FaLinkedin, FaChevronRight 
} from 'react-icons/fa';

/* ==========================================
   1. NAVBAR COMPONENT
   ========================================== */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#posters' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#081B33]/90 backdrop-blur-md border-b border-sky-500/20 py-3 shadow-lg shadow-sky-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="./scaleup_logo.png" 
              alt="ScaleUP999 Logo" 
              className="w-10 h-10 rounded-xl border border-sky-500/20 object-cover transition-transform duration-300 group-hover:scale-110" 
              loading="eager"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-xl tracking-wider text-white group-hover:text-sky-400 transition-colors">
                ScaleUP<span className="text-orange-500">999</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-sky-400 font-bold -mt-1">
                Digital Marketing Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-sm text-gray-300 hover:text-sky-400 transition-colors py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919884499730?text=Hi%20ScaleUP999,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="https://wa.me/919884499730"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg transition-colors"
              aria-label="WhatsApp Us"
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-[#081B33] border-l border-sky-500/10 z-50 p-6 transition-transform duration-300 ease-in-out shadow-2xl lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-display font-black text-lg tracking-wider text-white">
            ScaleUP<span className="text-orange-500">999</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-white"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="flex flex-col gap-5 text-left">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-sky-400 font-medium text-base py-1 border-b border-sky-950"
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="https://wa.me/919884499730?text=Hi%20ScaleUP999,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        ></div>
      )}
    </nav>
  );
}

/* ==========================================
   2. HERO COMPONENT
   ========================================== */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Highlight Circles */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full orange-glow animate-pulse-slow pointer-events-none"></div>
      
      {/* Mesh/Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Launch Offer Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-xs tracking-wider uppercase mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Digital Marketing Agency
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-display leading-[1.1]"
            >
              Scale Your Brand. <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">Drive Conversions. Grow.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              ScaleUP999 provides premium digital marketing services including custom web development, search engine optimization (SEO), Meta & Google Ads campaigns, and business automation to accelerate your online growth.
            </motion.p>

            {/* Program Highlights Banner Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl w-full max-w-lg mb-8 relative overflow-hidden"
            >
              {/* Highlight line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 via-orange-500 to-sky-500"></div>
              
              <div className="flex justify-between items-center text-left">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Results & Performance Marketing</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">ScaleUP999 Agency</span>
                  </div>
                </div>
                <div className="bg-orange-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-lg shadow-lg shadow-orange-500/20 transform rotate-1">
                  100% ROI Focused
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-sky-950 flex flex-wrap gap-x-4 gap-y-1 text-xs text-sky-300 font-medium">
                <span>✓ Custom Web Design</span>
                <span>✓ High-Converting Paid Ads</span>
                <span>✓ Strategic Local SEO</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 w-full"
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-sky-500/20 w-full sm:w-auto"
              >
                <span>Get Free Consultation</span>
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="https://wa.me/919884499730?text=Hi%20ScaleUP999,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 w-full sm:w-auto"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-500/30 text-sky-300 font-bold transition-all duration-300 w-full sm:w-auto"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Contact Us</span>
              </a>
            </motion.div>
          </div>
          
          {/* Banner Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative group max-w-md w-full">
              {/* Decorative backglow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-35 transition-all duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative glass-card p-3 rounded-2xl overflow-hidden shadow-2xl shadow-sky-950/50">
                <img 
                   src="./digital_marketing_banner.jpeg" 
                   alt="ScaleUP999 Digital Marketing Services Banner" 
                   className="w-full h-auto rounded-xl object-cover transform transition-all duration-500 group-hover:scale-[1.02]" 
                   loading="eager" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ==========================================
   3. STATS COMPONENT WITH COUNTER
   ========================================== */
function Counter({ targetValue, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = targetValue;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue, duration]);

  return <span ref={elementRef}>{count}</span>;
}

function Stats() {
  const statsData = [
    { label: 'Marketing Services', value: 19, icon: FaRocket, suffix: '+' },
    { label: 'Happy Clients', value: 450, icon: FaHeart, suffix: '+' },
    { label: 'Campaigns Delivered', value: 120, icon: FaAward, suffix: '+' },
    { label: 'ROI Improvement', value: 95, icon: FaPercent, suffix: '%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="p-3 bg-sky-500/10 rounded-xl mb-3 text-sky-400 border border-sky-500/20">
                <Icon className="text-xl md:text-2xl" />
              </div>
              <div className="font-display font-black text-2xl md:text-4xl text-white">
                <Counter targetValue={stat.value} />
                <span className="text-orange-500">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ==========================================
   4. ABOUT US COMPONENT
   ========================================== */
function About() {
  const highlights = [
    "Website Design & Development",
    "Landing Page Design",
    "Social Media Marketing (SMM)",
    "Social Media Management",
    "Meta Ads (FB & Instagram)",
    "Google Search & Display Ads",
    "SEO & Local Map Optimization",
    "Branding & Logo Designs",
    "WhatsApp & Email Marketing"
  ];

  return (
    <section id="about" className="py-20 relative bg-[#081B33]">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full orange-glow animate-pulse-slow pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text and Content */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">About Us</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Result-Driven Digital Marketing to Scale Your Business
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              At <strong>ScaleUP999</strong>, we are a premier digital marketing agency. We specialize in executing high-impact, conversion-focused digital solutions to scale client brands and optimize online revenue.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              We bridge the gap between traffic and conversions. Our team works directly on your campaigns, ensuring we deliver target strategies in search rankings, paid ads, responsive landing pages, and daily branding designs.
            </p>
            
            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0 text-base" />
                  <span className="text-sm text-gray-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mission & Vision Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border-t-2 border-t-sky-500"
            >
              <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl w-fit mb-4">
                <FaBullseye className="text-2xl" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Our Mission</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                To deliver high-impact digital marketing solutions, driving tangible business growth and maximizing ROI for startups, local shops, and enterprises.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border-t-2 border-t-orange-500"
            >
              <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl w-fit mb-4">
                <FaEye className="text-2xl" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-2">Our Vision</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                To be the leading digital growth partner in India, empowering 5000+ businesses to establish online authority, generate leads, and scale their operations.
              </p>
            </motion.div>

            {/* Core Values Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl sm:col-span-2 border-t-2 border-t-emerald-500"
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
                  <FaAward className="text-2xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-lg text-white mb-1">Our Commitment</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    We deliver transparent, result-driven marketing services. No hidden setup fees, no locked long-term contracts—just raw growth metrics, customized campaigns, and professional execution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}



/* ==========================================
   6. SERVICES COMPONENT (8 TARGET SOLUTION CARDS)
   ========================================== */
function Services() {
  const services = [
    {
      title: "Website Design & Development",
      desc: "Custom, fast, and fully responsive websites built around your brand identity to engage visitors.",
      icon: FaLaptopCode,
      color: "from-blue-500 to-sky-500"
    },
    {
      title: "Landing Page Design",
      desc: "High-converting single-page layouts optimized for marketing campaigns and direct lead capture.",
      icon: FaBullseye,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Social Media Management",
      desc: "Complete oversight of your profiles, ensuring daily activity, posts scheduling, and community engagement.",
      icon: FaSlidersH,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Social Media Marketing",
      desc: "Organic growth campaigns, hashtag strategies, and interactive posts to boost platform reach.",
      icon: FaShareAlt,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Meta Ads",
      desc: "Laser-targeted Facebook & Instagram advertising targeting precise buyer demographics to scale sales.",
      icon: FaFacebook,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Google Ads",
      desc: "Optimized Search, Display, and Performance Max campaigns targeting high-intent buyer keywords.",
      icon: FaGoogle,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "SEO (Search Engine Optimization)",
      desc: "Comprehensive on-page, off-page, and technical optimization to rank high on Google search.",
      icon: FaSearch,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Google Business Profile Optimization",
      desc: "Local SEO citations and map optimization to dominate local search queries and map packs.",
      icon: FaMapMarkerAlt,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Branding & Logo Design",
      desc: "Vector logo assets, color systems, and brand guidelines to establish authority.",
      icon: FaPenNib,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "WhatsApp Marketing",
      desc: "Direct broadcast setups, automated customer communication paths, and chatbot integrations.",
      icon: FaWhatsapp,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Email Marketing",
      desc: "Custom newsletters, automation workflows, and drip sequences to build customer loyalty.",
      icon: FaEnvelope,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Content Creation",
      desc: "Professional copywriting for blogs, social posts, ad creatives, and newsletter distributions.",
      icon: FaPen,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Graphic Design",
      desc: "High-quality brand visuals, marketing brochures, ads assets, and digital flyers.",
      icon: FaPalette,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Video Editing",
      desc: "Professional reels editing, corporate promos, and engaging shorts optimized for algorithms.",
      icon: FaYoutube,
      color: "from-red-600 to-rose-600"
    },
    {
      title: "E-commerce Website Development",
      desc: "Feature-rich online stores with secure gateways, inventory panels, and high checkout flow.",
      icon: FaShoppingCart,
      color: "from-sky-500 to-indigo-500"
    },
    {
      title: "Website Maintenance",
      desc: "Regular security updates, bug fixes, speed tuning, and server configuration audits.",
      icon: FaWrench,
      color: "from-gray-500 to-slate-500"
    },
    {
      title: "Lead Generation",
      desc: "Performance campaigns and multi-channel lead funnels to fill your CRM pipeline with hot buyers.",
      icon: FaFilter,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Business Automation",
      desc: "Integrating CRM triggers, email alerts, scheduling tools, and workflow systems.",
      icon: FaCogs,
      color: "from-slate-600 to-cyan-700"
    },
    {
      title: "AI Marketing Solutions",
      desc: "Intelligent analytics, AI predictive targeting, and smart content generation models.",
      icon: FaBrain,
      color: "from-purple-600 to-indigo-700"
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-[#040d1a] to-[#081B33]">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full orange-glow animate-pulse-slow pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">Our Services</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Result-Driven Service Offerings
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We provide premium services to help startups, enterprises, and local shops expand their digital footprints.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-start text-left relative overflow-hidden"
              >
                {/* Glowing border highlight */}
                <div className={`absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b ${service.color}`}></div>
                
                {/* Icon Container */}
                <div className="p-3 bg-sky-500/10 rounded-xl mb-4 text-sky-400 border border-sky-500/20">
                  <Icon className="text-2xl" />
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-base text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

/* ==========================================
   7. POSTERS COMPONENT (NEW INTERACTIVE GALLERY)
   ========================================== */
function Posters() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const clientPosters = [
    { src: "./digital_marketing_banner.jpeg", title: "A to Z Digital Marketing Services", category: "Full-Scale Campaigns" },
    { src: "./poster1.jpg", title: "Lead Generation & Business Growth Ad Designs", category: "Paid Advertising" },
    { src: "./poster2.jpg", title: "Search Engine Optimization & Google Maps Setup", category: "Local SEO" },
    { src: "./poster3.jpg", title: "Social Media Creative & Branding Designs", category: "Graphic Design" },
    { src: "./poster4.jpg", title: "Landing Page & High-Converting Web Layouts", category: "Web Development" }
  ];

  return (
    <section id="posters" className="py-20 relative bg-[#081B33]">
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">Our Portfolio</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Posters Gallery
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Browse our latest client ad visuals, design assets, and marketing graphics. Click any image to view it in full screen.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientPosters.map((poster, index) => (
            <motion.div
              key={index}
              layoutId={`poster-container-${index}`}
              onClick={() => setSelectedPoster({ ...poster, index })}
              className="glass-card p-3 rounded-2xl border border-sky-500/10 cursor-pointer overflow-hidden group relative shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/90 via-[#040d1a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-1">{poster.category}</span>
                  <h4 className="text-sm font-bold text-white leading-snug">{poster.title}</h4>
                </div>
              </div>
              
              <div className="mt-3 text-left px-1">
                <h4 className="text-sm font-bold text-white truncate">{poster.title}</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">{poster.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedPoster(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-2xl w-full glass-card p-3 rounded-3xl border border-sky-500/20 z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#081B33]/80 hover:bg-orange-500 text-white transition-colors border border-sky-500/20"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-square bg-[#040d1a]">
                <img
                  src={selectedPoster.src}
                  alt={selectedPoster.title}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Text footer */}
              <div className="p-4 text-left">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{selectedPoster.category}</span>
                <h3 className="font-display font-black text-xl text-white mt-1 leading-snug">{selectedPoster.title}</h3>
                
                <div className="mt-4 flex gap-3">
                  <a
                    href={`https://wa.me/919884499730?text=Hi%20ScaleUP999,%20I%20am%20interested%20in%20your%20services%20related%20to%20${encodeURIComponent(selectedPoster.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    <FaWhatsapp className="text-sm" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ==========================================
   8. WHY CHOOSE US COMPONENT
   ========================================== */
function WhyChoose() {
  const reasons = [
    {
      title: "Affordable Marketing Services",
      desc: "Result-driven digital solutions and client operations setups starting at just ₹999.",
      icon: FaDollarSign,
      color: "from-sky-500 to-cyan-500"
    },
    {
      title: "Professional Team",
      desc: "Our campaigns and marketing strategies are managed by certified SEO specialists and Google/Meta ad architects.",
      icon: FaUsers,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Fast Delivery",
      desc: "Speed drives market capture. We launch your web development assets, ads campaigns, and listing rank optimizations quickly.",
      icon: FaClock,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "24×7 Support",
      desc: "Always available to our clients. Connect with our dedicated campaign managers directly over WhatsApp and voice.",
      icon: FaHeadphones,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Customized Solutions",
      desc: "We build growth strategies tailored to your local business vertical. No generic ideas, no cookie-cutter ad budgets.",
      icon: FaSlidersH,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Growth Focus",
      desc: "Our main KPI is to scale customer traffic, generate leads, optimize clicks spend, and maximize ROI.",
      icon: FaChartLine,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#081B33] to-[#040d1a]">
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">Why Us</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose ScaleUP999
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We prioritize budget efficiency, transparent communication, and clear conversion metrics to help you scale.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:border-sky-500/30 group"
              >
                {/* Icon Circle */}
                <div className={`p-4 bg-gradient-to-br ${item.color} text-white rounded-2xl mb-4 shadow-lg shadow-sky-950/40 transform transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="text-xl" />
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



/* ==========================================
   10. TESTIMONIALS COMPONENT
   ========================================== */
/* ==========================================
   10. CUSTOMER REVIEWS COMPONENT (REPLACED TESTIMONIALS)
   ========================================== */
function CustomerReviews() {
  const defaultReviews = [
    {
      id: 1,
      name: "Ramesh Kumar",
      company: "Founder, RK Retail Stores",
      rating: 5,
      message: "ScaleUP999 revolutionized our local search presence. Our Google Business Profile views jumped by 300% in just 30 days! Their expert campaign team handled our page setup excellently.",
      date: "2026-06-15"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Creative Director, Glow Salon",
      rating: 5,
      message: "The daily business posters they design are stunning! They keep our Instagram and Facebook channels active and fresh without any effort. Their branding team is worth every rupee.",
      date: "2026-06-20"
    },
    {
      id: 3,
      name: "David Miller",
      company: "CEO, TechVantage Solutions",
      rating: 4,
      message: "We hired ScaleUP999 for landing page design and Meta Ads. Within weeks, we saw a massive drop in our cost-per-lead and a steady rise in high-intent buyer inquiries.",
      date: "2026-06-25"
    },
    {
      id: 4,
      name: "Anita Patel",
      company: "Owner, Organic Eats Cafe",
      rating: 5,
      message: "Excellent support! The campaign coordinators are always active on WhatsApp to answer questions. The business marketing setup was completed in just one afternoon.",
      date: "2026-06-28"
    }
  ];

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('scaleup999_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse reviews from Local Storage:", e);
      }
    }
    return defaultReviews;
  });

  useEffect(() => {
    localStorage.setItem('scaleup999_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);
  const [showForm, setShowForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const totalReviews = reviews.length;
  
  // Calculate average rating
  const averageRating = totalReviews > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";

  // Calculate distribution (1 star up to 5 stars)
  const ratingCounts = [0, 0, 0, 0, 0]; // index 0 = 1 star, 4 = 5 star
  reviews.forEach(r => {
    const idx = Math.max(1, Math.min(5, r.rating)) - 1;
    ratingCounts[idx]++;
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please enter your review message.');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      company: company.trim() || undefined,
      rating: rating,
      message: message.trim(),
      date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setCompany('');
    setRating(5);
    setMessage('');
    setErrorMsg('');
    setSuccessMsg('Thank you! Your review has been submitted successfully.');
    
    setTimeout(() => {
      setSuccessMsg('');
      setShowForm(false);
    }, 3000);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section id="reviews" className="py-20 relative bg-gradient-to-b from-[#081B33] to-[#040d1a] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full orange-glow animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">Customer Reviews</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Success Stories
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            See how startups and local business partners scale up their operations with our digital marketing expertise.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl mb-12 border border-sky-500/20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Avg score */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center md:border-r border-sky-950/60 pb-6 md:pb-0">
              <span className="text-5xl sm:text-6xl font-black text-white font-display">{averageRating}</span>
              <div className="flex gap-1 text-orange-500 my-2 text-xl justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={star <= Math.round(parseFloat(averageRating)) ? "text-orange-500" : "text-gray-700"}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-400 font-semibold uppercase tracking-wider">
                Average Rating ({totalReviews} Reviews)
              </span>
            </div>

            {/* Middle: Bars distribution */}
            <div className="md:col-span-5 space-y-2.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = ratingCounts[star - 1];
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-3 text-xs sm:text-sm text-left">
                    <span className="w-8 font-bold text-gray-300 flex items-center justify-end gap-1">
                      {star}<span className="text-orange-500">★</span>
                    </span>
                    <div className="flex-1 h-2 bg-[#040d1a] rounded-full overflow-hidden border border-sky-950">
                      <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right font-medium text-gray-500">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Right side: Action CTAs */}
            <div className="md:col-span-3 flex flex-col items-center justify-center gap-3">
              <p className="text-xs text-gray-400 text-center max-w-[200px]">
                Have you worked with us? Share your digital marketing experience!
              </p>
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
              >
                {showForm ? "Cancel Review" : "Write a Review"}
              </button>
            </div>
            
          </div>
        </div>

        {/* Interactive Form Component (Animates) */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-2xl mx-auto mb-12 overflow-hidden"
            >
              <form onSubmit={handleReviewSubmit} className="glass-card p-6 sm:p-8 rounded-3xl border border-orange-500/20 text-left space-y-4">
                <h3 className="font-display font-bold text-lg text-white mb-2">Write Your Review</h3>
                
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}
                {successMsg && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    {successMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Company / Role (Optional)</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. CEO, Startup Corp"
                      className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Rating Input */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Your Rating *</label>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1.5 py-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="text-2xl transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                          aria-label={`Rate ${star} Stars`}
                        >
                          <FaStar 
                            className={
                              star <= (hoverRating || rating) 
                                ? "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" 
                                : "text-gray-700"
                            } 
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-semibold ml-2">({rating} out of 5 stars)</span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Review Message *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project experience, results generated, or service feedback..."
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-xs sm:text-sm transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.slice(0, visibleCount).map((review) => (
            <motion.div
              key={review.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left border border-sky-500/10 hover:border-sky-500/25 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-orange-500 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar 
                        key={star} 
                        className={star <= review.rating ? "text-orange-500" : "text-gray-700"}
                      />
                    ))}
                  </div>
                  {/* Date */}
                  <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                    {review.date ? new Date(review.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    }) : ""}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.message}"
                </p>
              </div>

              {/* Profile Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-sky-950">
                {/* Initials circle */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-500/20 text-sky-400 flex items-center justify-center font-display font-bold text-sm tracking-wider uppercase">
                  {review.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white">{review.name}</h4>
                  {review.company && (
                    <p className="text-[10px] text-gray-500 mt-0.5">{review.company}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < totalReviews && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full bg-[#0d284a] hover:bg-sky-500 hover:text-[#040d1a] border border-sky-500/20 text-sky-400 font-bold text-xs sm:text-sm transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Load More Reviews
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

/* ==========================================
   11. FAQ COMPONENT
   ========================================== */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is ScaleUP999?",
      answer: "ScaleUP999 is a professional digital marketing agency offering Website Design & Development, Search Engine Optimization (SEO), Social Media Marketing & Management, Paid Search & Social Ads (Google & Meta), Branding, WhatsApp/Email Marketing, and Business Automation."
    },
    {
      question: "How does ScaleUP999 help my business grow online?",
      answer: "We design high-converting landing pages, optimize your Google Business Profile to capture local search map views, manage your social channels to maintain organic engagement, and target high-intent buyers using optimized Google and Meta Ads campaigns."
    },
    {
      question: "What is your pricing model for marketing services?",
      answer: "Our pricing varies based on your business requirements, campaign budget, and scope of work. We offer flexible project-based pricing and monthly retainers without long-term locked contracts, ensuring you get maximum ROI for your spend."
    },
    {
      question: "How do we get started on a project?",
      answer: "You can send us an inquiry through our contact form, book a meeting, or message us directly on WhatsApp. We will evaluate your digital presence and provide a customized growth plan and quote within 24 hours."
    },
    {
      question: "Do you offer website maintenance and support after launch?",
      answer: "Yes, we provide ongoing website maintenance, speed optimization, security updates, and regular content adjustments to ensure your online platforms run smoothly and continue to generate leads."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-[#081B33]">
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">FAQ</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions & Answers
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Find immediate answers regarding our marketing services, campaign setups, project pricing, and launch processes.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-12">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="glass-card rounded-2xl mb-4 overflow-hidden border border-sky-500/10 transition-colors duration-300 hover:border-sky-500/25">
      <button
        onClick={onClick}
        className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex gap-4 items-center pr-4">
          <FaQuestionCircle className="text-sky-400 text-lg flex-shrink-0" />
          <span className="font-display font-semibold text-white text-sm sm:text-base tracking-wide">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 text-sm flex-shrink-0"
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-sky-950">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ==========================================
   12. CONTACT COMPONENT WITH MAP AND QR CODE
   ========================================== */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ScaleUP999 Inquiry Submitted: ", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', businessName: '', message: '' });
    }, 5000);
  };

  const getWhatsAppLink = () => {
    const baseText = `Hi ScaleUP999, I would like to inquire about your digital marketing services.\n\n` +
      `*Name:* ${formData.name || 'Not Provided'}\n` +
      `*Phone:* ${formData.phone || 'Not Provided'}\n` +
      `*Email:* ${formData.email || 'Not Provided'}\n` +
      `*Business Name:* ${formData.businessName || 'Not Provided'}\n` +
      `*Message:* ${formData.message || 'Not Provided'}`;
    
    return `https://wa.me/919884499730?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-[#040d1a] to-[#081B33]">
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full cyan-glow animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2">Get In Touch</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact ScaleUP999
          </p>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Ready to scale your brand? Send us an inquiry, call us, or message our team over WhatsApp.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Contact Details & QR Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            
            {/* Information Card */}
            <div className="glass-card p-8 rounded-3xl border-sky-500/10">
              <h3 className="font-display font-bold text-xl text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Call or Message</h4>
                    <p className="text-sm sm:text-base font-bold text-white mt-1">+91 98844 99730</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email Us</h4>
                    <p className="text-sm sm:text-base font-bold text-white mt-1">scaleupdmchennai@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Registered Office</h4>
                    <p className="text-sm sm:text-base font-bold text-white mt-1">Kolathur, Chennai, Tamil Nadu, India - 600099</p>
                  </div>
                </div>
              </div>

              {/* QR Code Container */}
              <div className="mt-8 pt-6 border-t border-sky-950 flex flex-col sm:flex-row items-center gap-4">
                <div className="glass-card p-2 rounded-xl bg-white border-sky-500/20 max-w-[120px]">
                  <img
                    src="./contact_qr.jpg"
                    alt="Scan to Contact Us QR"
                    className="w-full h-auto block rounded-lg select-none"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <FaQrcode className="text-sky-400 text-xs" />
                    <span>Scan to Contact Us</span>
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">Scan this QR code using your mobile camera or scanner app to save our contact card immediately.</p>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="glass-card p-3 rounded-3xl border-sky-500/10 overflow-hidden shadow-xl flex flex-col justify-between bg-[#081B33]/40">
              <div className="h-44 rounded-2xl overflow-hidden relative">
                <iframe
                  title="ScaleUP999 Office Location"
                  src="https://maps.google.com/maps?q=13.1090360,80.2452090&z=15&output=embed"
                  className="w-full h-full border-0 opacity-75 grayscale hover:grayscale-0 transition-all duration-300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-3 text-left">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Business Location</p>
                <p className="text-xs text-gray-300 font-semibold mt-0.5">Kolathur, Chennai - 600099</p>
                <a
                  href="https://maps.google.com/?daddr=13.1090360,80.2452090&saddr=12.9461650,80.1559010&dirflg=r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#0d284a] hover:bg-sky-500 hover:text-[#040d1a] border border-sky-500/20 text-sky-400 text-xs font-bold transition-all duration-300"
                >
                  <FaMapPin className="text-[10px]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-3xl border-sky-500/10 text-left h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Send an Inquiry</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-8">Fill in your details below and our team will contact you within 24 hours.</p>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <FaCheckCircle className="text-5xl text-emerald-400 mb-4 animate-bounce" />
                    <h4 className="font-display font-bold text-lg text-white">Thank You for Reaching Out!</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm">Your message has been logged successfully. Our team will call or email you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-sm transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-sm transition-colors"
                          placeholder="+91 98844 99730"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-sm transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      {/* Business Name */}
                      <div>
                        <label htmlFor="businessName" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Business Name</label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-sm transition-colors"
                          placeholder="My Retail Co. / Brand Name"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-[#040d1a]/60 border border-sky-950 focus:border-sky-500 focus:outline-none text-white text-sm transition-colors resize-none"
                        placeholder="Tell us about your digital marketing goals or business requirements..."
                      ></textarea>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold transition-all duration-300 shadow-lg shadow-sky-500/20"
                      >
                        <FaPaperPlane className="text-xs" />
                        <span>Send Inquiry</span>
                      </button>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 border border-emerald-400/20 text-white font-bold transition-all duration-300 shadow-lg shadow-emerald-500/10"
                      >
                        <FaWhatsapp className="text-lg" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ==========================================
   13. FOOTER COMPONENT
   ========================================== */
function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#posters" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const servicesLinks = [
    { name: "Website Development", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Social Media Marketing", href: "#services" },
    { name: "Google & Meta Ads", href: "#services" },
    { name: "Branding", href: "#services" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-[#040d1a] border-t border-sky-500/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full cyan-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Logo and Brand Summary */}
          <div className="col-span-2 md:col-span-4 text-left">
            <a href="#home" className="flex items-center gap-3 group mb-4">
              <img 
                src="./scaleup_logo.png" 
                alt="ScaleUP999 Logo" 
                className="w-10 h-10 rounded-xl border border-sky-500/10 object-cover" 
              />
              <span className="font-display font-black text-xl tracking-wider text-white">
                ScaleUP<span className="text-orange-500">999</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional Digital Marketing Agency. We help brands scale operations and grow their digital presence through tailored marketing services at scaleup999.com.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-[#040d1a] border border-sky-500/20 text-sky-400 flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-2 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-sky-400 text-sm flex items-center gap-1.5 transition-colors">
                    <FaChevronRight className="text-[8px] text-orange-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-2 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-sky-400 text-sm flex items-center gap-1.5 transition-colors">
                    <FaChevronRight className="text-[8px] text-orange-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy Column */}
          <div className="col-span-2 md:col-span-4 text-left">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6">Legal Disclosures</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              All service agreements are hosted securely under scaleup999.com terms and refund policies.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-sky-400 text-xs flex items-center gap-1.5 transition-colors">
                    <FaChevronRight className="text-[8px] text-sky-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-px bg-sky-500/10 w-full mb-8"></div>

        {/* Bottom copyright area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-center md:text-left">
            &copy; {currentYear} ScaleUP999. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-center md:text-right">
            <span>Designed for</span>
            <FaHeart className="text-orange-500 mx-0.5" />
            <span>scaleup999.com digital ecosystems.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ==========================================
   14. FLOATING UTILITIES (WHATSAPP, BACK TO TOP)
   ========================================== */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919884499730?text=Hi%20ScaleUP999,%20I%20have%20a%20question%20about%20your%20digital%20marketing%20services.%20Please%20help."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Alert ping */}
      <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-20 pointer-events-none"></span>
      
      <FaWhatsapp className="text-3xl" />
      
      {/* Tooltip */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#081B33] border border-sky-500/20 text-sky-300 font-bold text-xs py-2 px-3.5 rounded-xl shadow-xl transition-all duration-300 origin-right whitespace-nowrap">
        Chat with Us
      </span>
    </a>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 bg-sky-500/90 hover:bg-sky-500 border border-sky-400/20 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FaChevronUp className="text-base" />
    </button>
  );
}

/* ==========================================
   MAIN APP SHELL
   ========================================== */
export default function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full bg-orange-500/3 blur-[140px] pointer-events-none z-0"></div>
      
      {/* Sticky Header Nav */}
      <Navbar />
      
      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <CustomerReviews />
        <About />
        <Posters />
        <WhyChoose />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer Details */}
      <Footer />
      
      {/* Floating Utilities */}
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
