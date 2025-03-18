import React from "react";
import EventCard from "./EventCard";

const EventsSection: React.FC = () => {
  const events = [
    {
      image: "https://placehold.co/400x200",
      date: "22 Juni 2024",
      title: "CFO Summit 2024",
      description:
        "Een exclusieve bijeenkomst voor finance leaders om de laatste trends te bespreken.",
    },
    {
      image: "https://placehold.co/400x200",
      date: "15 Juli 2024",
      title: "Digital Finance Workshop",
      description: "Praktische sessie over digitale transformatie in finance.",
    },
    {
      image: "https://placehold.co/400x200",
      date: "8 Augustus 2024",
      title: "ESG Reporting Seminar",
      description: "Diepgaande analyse van ESG rapportage vereisten.",
    },
  ];

  return (
    <section className="py-[120px] px-8 bg-[#F5F5F7]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[40px] max-sm:text-[32px] font-bold text-[#1D1D1F] text-center mb-[60px]">
          Aankomende Evenementen
        </h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[24px]">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
