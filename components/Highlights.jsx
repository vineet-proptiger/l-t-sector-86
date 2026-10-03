'use client'
import React from 'react'

const highlights = [
  {
    title: 'Land Parcel: 20 Acres',
    description: 'Premium residential development spanning 20 acres backed by Larsen & Toubro.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: 'Total Towers: 7',
    description: 'An iconic low-density skyline master plan featuring only 7 premium high-rise towers.',
    icon: 'fa-solid fa-building'
  },
  {
    title: 'Total Floors: G+37',
    description: 'Majestic G+37 high-rise floors offering breathtaking panoramic vistas and fresh air.',
    icon: 'fa-solid fa-layer-group'
  },
  {
    title: '3 & 4 BHK Apartments',
    description: 'Thoughtfully designed luxury residences with sizes available on request.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: 'Only 4 Units Per Core',
    description: 'Low-density development with only 4 apartments per core ensuring maximum privacy.',
    icon: 'fa-solid fa-door-closed'
  },
  {
    title: '40+ Curated Amenities',
    description: 'Curated lifestyle amenities for wellness, sports, children play areas, and social gatherings.',
    icon: 'fa-solid fa-shapes'
  },
  {
    title: 'Total Units: 800–900',
    description: 'Planned with approximately 3.6 million sq. ft. development potential across 800 to 900 homes.',
    icon: 'fa-solid fa-users'
  },
  {
    title: 'Prime Sector 86 Address',
    description: 'Strategically located in Sector 86, Gurugram with swift access to Dwarka Expressway & NH-48.',
    icon: 'fa-solid fa-route'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#d49500] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Highlights of L&T Sector 86 Gurugram
          </h2>
        </div>

        {/* 8 Cards: 4 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#f5df98] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(245,184,0,0.18)] hover:border-[#f5b800]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#fef6d8] text-[#b87e00] group-hover:bg-[#f5b800] group-hover:text-[#111111] flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#222222] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#d49500] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#f5b800]/30 group-hover:bg-[#f5b800] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
