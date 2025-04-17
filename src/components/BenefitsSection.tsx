
import { Heart, Clock, CreditCard, Search, Smile, ThumbsUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Stress-Free Living",
      description: "Relax and enjoy your free time while we handle the tedious household tasks and maintenance."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reclaim hours of your week that would otherwise be spent on cleaning and home maintenance."
    },
    {
      icon: CreditCard,
      title: "Cost Effective",
      description: "Our professional services are competitively priced and save you from expensive DIY mistakes."
    },
    {
      icon: ThumbsUp,
      title: "Consistent Quality",
      description: "Experience the same high standard of service with every visit, guaranteed by our quality control."
    },
    {
      icon: Search,
      title: "Expert Solutions",
      description: "Benefit from our specialists' knowledge for even the most challenging home service problems."
    },
    {
      icon: Smile,
      title: "Peace of Mind",
      description: "Trust your home to our background-checked, insured, and trained professionals."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-swiftdome-black relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">Why Choose Us</h2>
          <h3 className="text-4xl font-bold font-serif text-white">Benefits of Our Services</h3>
          <div className="w-24 h-1 bg-swiftdome-red mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            When you choose SWIFTDOME, you're not just hiring a service provider, you're investing in your quality of life and home's value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-swiftdome-black/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center p-3 bg-swiftdome-red/20 rounded-xl text-swiftdome-red mb-5">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-swiftdome-red text-white px-8 py-4 rounded-md font-medium hover:bg-swiftdome-red/90 transition-colors duration-300"
          >
            Experience the Benefits
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
