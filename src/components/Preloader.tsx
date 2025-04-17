
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-swiftdome-black">
      <div className="relative">
        <div className="text-4xl font-bold font-serif text-white mb-8 text-center">
          <span className="text-white">SWIFT</span>
          <span className="text-swiftdome-red">DOME</span>
        </div>
        <div className="w-32 h-1 bg-swiftdome-red/30 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-swiftdome-red rounded-full animate-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
