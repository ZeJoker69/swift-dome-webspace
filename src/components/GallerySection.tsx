import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/lovable-uploads/1ad34c08-7e04-49e7-81dd-4c4d67ceb373.png", alt: "Fumigation service in action" },
    { src: "/lovable-uploads/0a0391f4-ec88-409b-95de-561cadd28360.png", alt: "Event lighting and decoration" },
    { src: "/lovable-uploads/67e7f757-6cae-4e9c-b01e-95ed96592362.png", alt: "Modern bedroom with LED lighting" },
    { src: "/lovable-uploads/b25cce65-d1b7-4c56-9e03-9aa4994ba58a.png", alt: "Bedroom renovation project" },
    { src: "/lovable-uploads/b721e13f-09c0-4e51-a9e2-ca9887e1e65c.png", alt: "Kitchen cabinet installation" },
    { src: "/lovable-uploads/14a03a97-3fef-4d79-ac9f-19ebde1beae8.png", alt: "Furniture cleaning service" },
    { src: "/lovable-uploads/31ab12cb-561a-4bed-a25b-43cdd89b81ee.png", alt: "Delivery service" },
    { src: "/lovable-uploads/2dedfc7b-d05d-4aed-9ef7-0f43f240f99b.png", alt: "Event decoration with lighting" },
    { src: "/lovable-uploads/b2406406-600a-461a-9e5c-2eb5be517905.png", alt: "Professional event setup" },
    { src: "/lovable-uploads/c6070227-d6f2-4306-b160-81ca81ce0ea6.png", alt: "Delivery rider" },
    { src: "/lovable-uploads/6bfca1db-0ee9-42a7-89db-5cfe00445398.png", alt: "Event lighting setup" },
    { src: "/lovable-uploads/23d72fc7-c5eb-44b0-bad2-4917d34d98a3.png", alt: "Event venue decoration" }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-swiftdome-red uppercase tracking-wider mb-3">Our Gallery</h2>
          <h3 className="text-4xl font-bold font-serif">Our Work Speaks for Itself</h3>
          <div className="w-24 h-1 bg-swiftdome-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-gray-300"
              >
                <ArrowLeft className="h-8 w-8" />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300"
              >
                <ArrowRight className="h-8 w-8" />
              </button>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
