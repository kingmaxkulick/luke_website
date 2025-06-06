import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import teamPhoto from '@/assets/pexels-ron-lach-10477281.jpg';
import teamVideo from '@/assets/pub talk.mp4'; // Assuming this is the correct path
import aventusLogo from '@/assets/aventus_cutout.svg'; // Assuming this is your logo path
import QuoteCard from './components/QuoteCard'; // Corrected path

const TeamStoryPage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const quotes = [
    {
      quote: "Working with AVENTUS transformed our brand's narrative. Their creativity is unparalleled.",
      author: "Satisfied Client A"
    },
    {
      quote: "The attention to detail and the passion they bring to every project is simply inspiring.",
      author: "Collaborator B"
    },
    {
      quote: "AVENTUS delivered results that exceeded all our expectations. True professionals.",
      author: "Happy Partner C"
    },
    {
      quote: "Their innovative approach to media is refreshing and highly effective.",
      author: "Industry Expert D"
    }
  ];

  const noteText = [
    "At AVENTUS, we believe in the power of story. We're a collective of passionate creators, visionary directors, and technical wizards united by a single purpose: to craft compelling narratives that captivate, inspire, and resonate.",
    "From breathtaking visuals to groundbreaking campaigns, we blend artistic innovation with strategic insight. We don't just create content; we build experiences that connect brands with their audiences on a deeper level, driving engagement and leaving a lasting impact.",
    "Our journey is one of constant evolution, embracing new technologies and creative frontiers. We partner with ambitious brands and artists, transforming ideas into iconic media that defines the now and shapes the future.",
    "We're not just a media company; we're your creative allies. Let's tell your story."
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-32 pb-16 px-4 md:px-8 font-serif relative">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-background text-foreground flex items-center justify-start px-4 md:px-8 z-50">
        <Link to="/" className="flex items-center">
          <img src={aventusLogo} alt="AVENTUS Logo" className="h-8 md:h-10" /> 
          {/* <span className=\"text-xl font-semibold\">AVENTUS</span> */}
        </Link>
        {/* "Back to Home" link removed, logo serves this purpose */}
      </header>

      {/* Optional: Add a subtle back button or link to home if not using a global nav bar for subpages */}
      
      <div className="max-w-3xl w-full space-y-16 md:space-y-24">
        {/* Team Image Section - No animation */}
        <section className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground/90 mb-8 md:mb-12 text-center">
            A World Class Team
          </h2>
          {/* Optional: Title like 'Sam & Jony introduce io' from example */}
          {/* <h2 className=\"text-2xl md:text-3xl text-center mb-8 text-muted-foreground\">Aventus Team Introduction</h2> */}
          <img 
            src={teamPhoto} 
            alt="AVENTUS Team" 
            className="w-full max-w-xl md:max-w-2xl rounded-lg shadow-2xl object-contain"
          />
        </section>

        {/* Note from the Team Section */}
        <motion.section 
          className="text-center space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {noteText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="italic mt-8 text-foreground/80">- The AVENTUS Team</p> {/* Changed signature */}
        </motion.section>

        {/* Video Section */}
        <motion.section 
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="w-full max-w-xl md:max-w-2xl rounded-lg shadow-2xl overflow-hidden aspect-video">
            <video
              key={teamVideo} // Add key to re-mount if src changes, good practice
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={teamVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.section>

        {/* Quote Cards Section */}
        <motion.section 
          className="w-full space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <h3 className="text-3xl font-semibold text-primary mb-12 text-center">Words from Our Collaborators</h3>
          <div className="grid grid-cols-1 gap-8 md:gap-12 max-w-xl mx-auto">
            {quotes.map((q, index) => (
              <QuoteCard key={index} quote={q.quote} author={q.author} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TeamStoryPage;
