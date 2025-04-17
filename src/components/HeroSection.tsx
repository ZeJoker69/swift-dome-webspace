
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-swiftdome-black/80 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{ opacity: 0.6 }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif animate-fade-in">
            Premium Home Services <br />
            <span className="text-swiftdome-red">For Your Comfort</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl animate-fade-in animate-delay-200">
            Experience excellence with Nigeria's premier home service provider. From cleaning to decoration, 
            we bring luxury and convenience to your doorstep.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
            <a
              href="#services"
              className="bg-swiftdome-red text-white px-8 py-4 rounded-md font-medium inline-flex items-center group btn-hover-effect"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white border border-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm font-medium mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
