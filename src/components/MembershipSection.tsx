import React from "react";

const MembershipSection: React.FC = () => {
  return (
    <section className="py-[120px] px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] items-center">
          <div className="max-lg:text-center">
            <h2 className="text-[40px] max-sm:text-[32px] font-bold text-[#1D1D1F] mb-6">
              Word Lid van het Netwerk
            </h2>
            <p className="text-[20px] text-[#86868B] mb-8">
              Krijg toegang tot exclusieve evenementen, deel kennis met
              vakgenoten en blijf voorop in de financiële sector.
            </p>
            <div className="flex max-lg:justify-center gap-[16px]">
              <a
                href="#"
                className="bg-[#0066CC] text-white px-8 py-3 rounded-full text-[16px] font-medium"
              >
                Word Lid
              </a>
              <a
                href="#"
                className="bg-[#F5F5F7] text-[#1D1D1F] px-8 py-3 rounded-full text-[16px] font-medium"
              >
                Meer Informatie
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
            <img
              src="https://placehold.co/800x600"
              alt="Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
