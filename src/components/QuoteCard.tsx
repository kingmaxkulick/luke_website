import React from 'react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-card/80 dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg w-full text-center font-serif flex flex-col justify-center">
      <p className="text-lg md:text-xl italic text-foreground/90 mb-4 leading-relaxed">
        “{quote}”
      </p>
      <p className="text-base text-muted-foreground font-medium">
        - {author}
      </p>
    </div>
  );
};

export default QuoteCard;
