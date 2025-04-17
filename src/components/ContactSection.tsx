import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 807 933 5648, +234 704 236 9597",
      link: "tel:+2348079335648"
    },
    {
      icon: Mail,
      title: "Email",
      content: "swiftdome@gmail.com",
      link: "mailto:swiftdome@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Shop Co7, No 9 Lospino Lodge, J.C. Nwaobodo Street, Onuiyi, Nsukka, Enugu, Nigeria",
      link: "https://maps.google.com/?q=Shop+Co7,+No+9+Lospino+Lodge,+J.C.+Nwaobodo+Street,+Onuiyi,+Nsukka,+Enugu,+Nigeria"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">Contact Us</h2>
          <h3 className="text-4xl font-bold font-serif">Get in Touch</h3>
          <div className="w-24 h-1 bg-swiftdome-red mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience premium home services? Reach out to us for a free quote or to discuss your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <a 
              href={item.link} 
              key={index}
              className="bg-swiftdome-light-gray p-8 rounded-xl text-center group hover:bg-swiftdome-red hover:text-white transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-swiftdome-red/10 rounded-full text-swiftdome-red mb-5 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 group-hover:text-white/90 transition-all duration-300">{item.content}</p>
            </a>
          ))}
        </div>
        
        <div className="bg-swiftdome-light-gray rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map or Image */}
            <div className="h-64 lg:h-auto bg-gray-300 relative">
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624" 
                alt="SWIFTDOME Office Location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-swiftdome-black/30"></div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Your message has been sent successfully!</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Home Cleaning">Home Cleaning</option>
                      <option value="Laundry">Laundry</option>
                      <option value="Fumigation">Fumigation</option>
                      <option value="Delivery">Delivery</option>
                      <option value="Interior Decoration">Interior Decoration</option>
                      <option value="Event Planning">Event Planning</option>
                      <option value="House Painting">House Painting</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent"
                    placeholder="Tell us about your needs"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-swiftdome-red text-white px-6 py-3 rounded-md font-medium hover:bg-swiftdome-red/90 transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
