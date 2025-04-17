
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/lovable-uploads/4f58505f-8ceb-483e-88c7-18914fcb6613.png", alt: "Event lighting setup with fairy lights" },
    { src: "/lovable-uploads/3aec37a4-ad05-4221-8dce-e19c92e934e2.png", alt: "Wedding reception setup" },
    { src: "/lovable-uploads/8bd6def0-b17f-4db8-a793-fbf98edb6a59.png", alt: "Luxury event venue with lighting" },
    { src: "/lovable-uploads/b9914b5c-1525-4f31-85e8-249a542792b9.png", alt: "Modern bedroom interior" },
    { src: "/lovable-uploads/b06bb4d4-d0df-46e1-a927-90e8127490e0.png", alt: "Bedroom with wardrobe" },
    { src: "/lovable-uploads/7ced293b-6349-4084-9cef-f4553aaebe00.png", alt: "Contemporary living room" },
    { src: "/lovable-uploads/c2587c74-3c44-43ff-b90b-c53f3013d974.png", alt: "Modern living room design" },
    { src: "/lovable-uploads/50c723f7-1ab8-4a82-85a5-e221e5644734.png", alt: "Event walkway with lighting" }
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
