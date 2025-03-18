import React from "react";

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <article className="bg-white rounded-[24px] overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
      <img src={image} alt={title} className="w-full" />
      <div className="p-8">
        <time className="text-[#0066CC] text-[14px] font-medium mb-2 block">
          {date}
        </time>
        <h3 className="text-[24px] font-bold text-[#1D1D1F] mb-2">{title}</h3>
        <p className="text-[16px] text-[#86868B] mb-6">{description}</p>
        <div className="flex items-center text-[#0066CC]">
          <span className="text-[14px] font-medium">Meer informatie</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
