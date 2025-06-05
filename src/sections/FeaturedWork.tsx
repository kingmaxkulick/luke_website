import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard, { type Project } from '@/components/ProjectCard'; // Assuming ProjectCard is in src/components


// Sample project data (replace with actual data and image paths)
const sampleProjects: Project[] = [
  {
    id: "1",
    thumbnailUrl: "https://picsum.photos/seed/project1/800/450",
    bgColorClass: "bg-card-var-1",
    overlayTitle: "BRAND FILM",
    projectName: "Nova Corp - Future Vision",
    description: "A dynamic brand film showcasing forward-thinking.",
  },
  {
    id: "2",
    thumbnailUrl: "https://picsum.photos/seed/project2/800/450",
    bgColorClass: "bg-card-var-2",
    overlayTitle: "MUSIC VIDEO",
    projectName: "Echoes - Celestial Dreams",
    description: "Visual storytelling for an ethereal music track.",
  },
  {
    id: "3",
    thumbnailUrl: "https://picsum.photos/seed/project3/800/450",
    bgColorClass: "bg-card-var-3",
    overlayTitle: "COMMERCIAL",
    projectName: "Apex Gear - Adventure Awaits",
    description: "High-energy commercial for an outdoor adventure brand.",
  },
  {
    id: "4",
    thumbnailUrl: "https://picsum.photos/seed/project4/800/450",
    bgColorClass: "bg-card-var-4",
    overlayTitle: "SHORT FILM",
    projectName: "Cybernetic Dawn",
    description: "A glimpse into a neon-lit dystopian future.",
  },
];

const FeaturedWork: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, 
    align: 'start', 
    containScroll: 'trimSnaps' 
  });

  return (
    <motion.section 
      id="featured-work" 
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 px-8 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible, animate once
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl w-full text-center mb-12 md:mb-16"> {/* Changed to text-left and added padding for consistency if needed */} 
        <div className="relative mb-6 md:mb-8 inline-block">
          <h3 className="text-2xl md:text-3xl font-light text-muted-foreground absolute -top-6 left-0 transform -translate-y-1/2 italic">
            Our
          </h3>
          <h2 className="text-8xl md:text-9xl lg:text-[160px] font-extrabold uppercase text-primary leading-none">
            WORK
          </h2>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Dive into a selection of our creative projects that captivate and inspire.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4"> {/* Adjust negative margin based on new padding */} 
            {sampleProjects.map((project) => (
              <div key={project.id} className="flex-[0_0_90%] sm:basis-2/3 md:flex-[0_0_40%] lg:flex-[0_0_40%] pl-4"> {/* Card width: xs ~1.1, sm ~1.5, md/lg ~2.5 */} 
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default FeaturedWork;
