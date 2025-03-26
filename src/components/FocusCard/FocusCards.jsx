import React, { useState } from 'react';
import { cn } from '../../lib/utils';

export const Card = React.memo(({ card, index, hovered, setHovered, onClick }) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onClick(card.path)}
      className={cn(
        "relative rounded-xl overflow-hidden h-64 w-full",
        "transition-all duration-300 ease-out cursor-pointer",
        "shadow-lg border border-gray-700/20",
        hovered !== null && hovered !== index ? "blur-[1px] scale-[0.98]" : "hover:scale-[1.02]"
      )}
    >
      {/* Imagen principal - sin efectos de color */}
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay de contenido con transparencia */}
      <div className={cn(
        "absolute inset-0 flex flex-col justify-end p-6",
        "bg-gradient-to-t from-black/80 to-transparent",
        "transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-90"
      )}>
        <h3 className="text-xl font-bold text-white mb-1">
          {card.title}
        </h3>
        <p className="text-gray-200 text-sm">
          {card.description}
        </p>
      </div>

      {/* Efecto de color sutil en hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0",
          "transition-opacity duration-300",
          hovered === index && "opacity-30"
        )}
        style={{
          background: card.colorFrom && card.colorTo 
            ? `linear-gradient(135deg, ${card.colorFrom}, ${card.colorTo})`
            : 'none'
        }}
      />
    </div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards, onCardClick }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
      {cards.map((card, index) => (
        <Card
          key={`${card.path}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}