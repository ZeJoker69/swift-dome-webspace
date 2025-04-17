
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Funke Akindele",
      role: "Lagos",
      quote: "SWIFTDOME transformed my home with their exceptional cleaning service. The team was professional, thorough, and paid attention to every detail. I've recommended them to all my friends!",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Emeka Okafor",
      role: "Abuja",
      quote: "I hired SWIFTDOME for interior decoration and was blown away by their creativity and execution. They turned my vision into reality and completed the project on time and within budget.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Amina Ibrahim",
      role: "Kano",
      quote: "The fumigation service was top-notch! They eliminated our pest problem completely and used safe products around our children and pets. Very professional and reliable service.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Port Harcourt",
      quote: "SWIFTDOME's event planning team made my daughter's wedding seamless and beautiful. From decor to coordination, everything was handled professionally. Best decision ever!",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-swiftdome-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold font-serif">What Our Clients Say</h3>
          <div className="w-24 h-1 bg-swiftdome-red mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow-lg focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-swiftdome-black" />
            </button>
          </div>
          
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 text-lg italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 z-10 flex items-center">
            <button 
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow-lg focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-swiftdome-black" />
            </button>
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? "bg-swiftdome-red" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
