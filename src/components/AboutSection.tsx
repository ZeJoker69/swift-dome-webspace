
import { Check, Shield, Clock, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Unmatched Quality",
      description: "We deliver the highest standard of service with trained professionals and premium products."
    },
    {
      icon: Check,
      title: "Fully Insured",
      description: "Your property is protected with our comprehensive insurance coverage for all services."
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We respect your schedule with punctual arrivals and efficient completion of all tasks."
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Our team comprises certified professionals with extensive experience in their fields."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="SWIFTDOME Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-swiftdome-red text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-serif text-xl font-bold">5+ Years</p>
              <p className="mt-1">Delivering premium home services across Nigeria</p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">About Us</h2>
            <h3 className="text-4xl font-bold font-serif mb-6">We Make Homes Beautiful, Clean & Comfortable</h3>
            <p className="text-gray-600 mb-8">
              Founded in 2018, SWIFTDOME has become Nigeria's premier home service provider, 
              transforming houses into perfect homes through our comprehensive range of services.
              Our dedicated team of professionals is committed to bringing quality, reliability,
              and excellence to every project we undertake.
            </p>
            <p className="text-gray-600 mb-10">
              Whether you need a deep cleaning, complete interior makeover, or anything in between,
              we approach each task with precision, care, and dedication to exceeding your expectations.
              Our client-first approach has earned us the trust of thousands of homeowners across Nigeria.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-swiftdome-red/10 text-swiftdome-red">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{feature.title}</h4>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
