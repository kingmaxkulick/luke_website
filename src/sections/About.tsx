import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import teamPhoto from '@/assets/pexels-ron-lach-10477281.jpg';
import aboutVideo from '@/assets/4994039-uhd_3840_2160_25fps.mp4';
import { ArrowRight } from 'lucide-react'; // For the "Read More" icon
import { Link } from 'react-router-dom'; // Import Link

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section // Change to motion.section
      id="about"
      className="min-h-screen w-full flex flex-col md:flex-row items-center md:items-start justify-center bg-background text-foreground pt-24 px-6 pb-12 md:pt-16 md:px-16 md:pb-16" // Added overflow-hidden
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is visible, animate once
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="md:sticky md:top-32 flex flex-col justify-center text-center items-center md:text-left md:items-start">
            <div className="relative mb-6 md:mb-8 self-center md:self-start">
              <h3 className="text-2xl md:text-3xl font-light text-muted-foreground absolute -top-6 left-0 transform -translate-y-1/2 italic">
                Who we
              </h3>
              <h2 className="text-8xl md:text-9xl lg:text-[160px] font-extrabold uppercase text-primary leading-none">
                ARE
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
              The creative behind your content.
              <br />
              The power behind your <span className="text-primary font-medium">presence.</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Think full-service production company meets creative marketing agency. 
              We understand social and know how to make content for fans. 
              Headquartered in NYC but operating on a global scale, we have the skills 
              and infrastructure that modern brands need to support successful social platforms.
            </p>
            <Link
              to="/team-story"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-lg group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Image, Text, Video Placeholder */}
          <div className="hidden md:flex flex-col md:pt-0"> {/* Main container for right column. md:pt-0 ensures no extra top padding from grid gap on desktop if items-start causes it. */} 
            {/* Team Photo Wrapper */}
            <div className="w-full md:h-[75vh] flex items-center justify-center mb-8 md:mb-16 py-8 md:py-0">
              {/* Inner wrapper to define the image's square size */}
              <div className="w-full max-w-lg aspect-square">
                <img
                  src={teamPhoto}
                  alt="AVENTUS Team"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Video Section */}
            <div className="w-full md:h-[75vh] flex items-center justify-center py-8 md:py-0">
              {/* Inner wrapper for the video for sizing control */}
              <div className="w-full max-w-2xl">
                <video
                  key={aboutVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain rounded-lg shadow-xl aspect-video"
                >
                  <source src={aboutVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
