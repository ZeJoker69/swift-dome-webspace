
import { 
  Bug, 
  Truck, 
  Paintbrush, 
  Calendar, 
  Sofa, 
  Wind, 
  Shirt,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Home Cleaning",
      description: "Professional cleaning services tailored to your home's needs with eco-friendly products and attention to detail.",
      icon: Wind,
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Laundry",
      description: "Expert laundry services with stain removal, ironing, and folding, returning your clothes in pristine condition.",
      icon: Shirt,
      color: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Fumigation",
      description: "Comprehensive pest control solutions to eliminate and prevent insects, rodents, and other pests from your home.",
      icon: Bug,
      color: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      id: 4,
      title: "Delivery",
      description: "Fast and reliable delivery services for all your needs, with real-time tracking and professional handling.",
      icon: Truck,
      color: "bg-amber-50",
      iconColor: "text-amber-500"
    },
    {
      id: 5,
      title: "Interior Decoration",
      description: "Transform your space with our expert interior design services, from concept to completion with premium materials.",
      icon: Sofa,
      color: "bg-pink-50",
      iconColor: "text-pink-500"
    },
    {
      id: 6,
      title: "Event Planning",
      description: "Comprehensive event planning services for any occasion, handling everything from venue selection to catering.",
      icon: Calendar,
      color: "bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      id: 7,
      title: "House Painting",
      description: "Professional painting services with premium paints, expert preparation, and flawless execution for any room.",
      icon: Paintbrush,
      color: "bg-orange-50",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-swiftdome-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">Our Services</h2>
          <h3 className="text-4xl font-bold font-serif">Premium Home Services</h3>
          <div className="w-24 h-1 bg-swiftdome-red mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            From basic home cleaning to complete interior makeovers, we provide a comprehensive range of services designed to make your home the perfect haven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 animate-fade-in stagger-${(index % 5) + 1}`}
            >
              <div className="p-8">
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#contact" className="inline-flex items-center text-swiftdome-red font-medium group">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="bg-swiftdome-red text-white px-8 py-4 rounded-md font-medium inline-flex items-center group btn-hover-effect"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
