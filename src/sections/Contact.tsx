import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; // For the email icon

const Contact: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const email = 'hello@aventus.com'; // Replace with your actual email

  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-background text-foreground p-8 md:p-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Have a project in mind or just want to say hello? We'd love to hear from you.
        </p>
        
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors duration-300 text-lg group"
        >
          <Mail className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          {email}
        </a>

        {/* Optional: Add social links here later if desired */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center pt-12 pb-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AVENTUS. All Rights Reserved.
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
