import React from 'react';
import aventusLogo from '@/assets/aventus_cutout.svg';
import { Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import heroVideo from '/src/assets/stockedit.mp4'; // Import the video

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for iOS Safari
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" /> {/* Use imported video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-primary">
          <img src={aventusLogo} alt="AVENTUS Logo" className="h-32 md:h-44 lg:h-48 inline-block" />
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-foreground">
          Creative Media That Captivates
        </p>

        {/* Social Icons - Mobile Only */}
        <div className="mt-8 flex justify-center space-x-6 md:hidden z-20">
          <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
            <Instagram sx={{ fontSize: 24 }} />
          </a>
          <a href="#" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
            <YouTube sx={{ fontSize: 24 }} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
            <LinkedIn sx={{ fontSize: 24 }} />
          </a>
        </div>
      </div>  {/* End of main content centering div */}

      {/* Social Icons - Desktop Only (original position) */}
      <div className="hidden md:flex absolute bottom-6 left-0 right-0 z-20 justify-center space-x-6 md:space-x-8">
        <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
          <Instagram sx={{ fontSize: 24 }} />
        </a>
        <a href="#" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
          <YouTube sx={{ fontSize: 24 }} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
          <LinkedIn sx={{ fontSize: 24 }} />
        </a>
      </div> {/* End of Desktop social icons div */}
    </section>
  );
};

export default Hero;
