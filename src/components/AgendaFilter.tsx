import React from 'react';
import CustomButton from './CustomBotton';

interface AgendaFilterProps {
  activeFilter: 'AM' | 'PM' | null;
  onFilterChange: (filter: 'AM' | 'PM' | null) => void;
}

const AgendaFilter: React.FC<AgendaFilterProps> = ({ activeFilter, onFilterChange }) => {
  const handleFilterClick = (filter: 'AM' | 'PM') => {
    if (activeFilter === filter) {
      onFilterChange(null); // Deseleziona se si clicca sullo stesso filtro
    } else {
      onFilterChange(filter);
    }
  };

  // Stile base comune (esclusi colori di sfondo e testo che sono condizionali)
  const commonButtonStyling = "py-2 px-6 text-sm uppercase tracking-wider transition-colors duration-200 hover:shadow-sm rounded-md font-semibold flex-1 lg:flex-initial";

  // Classi per lo stato ATTIVO (verde)
  const activeBg = "bg-[#8DFFA8]"; // Un verde brillante per lo stato attivo
  const activeText = "text-black";

  // Classi per lo stato INATTIVO (celeste)
  const inactiveBg = "bg-[#00C9E3] hover:bg-[#00A8BF]"; // Celeste, con hover più scuro
  const inactiveText = "text-white";

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <CustomButton
        text="AM"
        onClick={() => handleFilterClick('AM')}
        backgroundClasses={`
          ${activeFilter === 'AM' ? activeBg : inactiveBg}
          ${commonButtonStyling}
        `}
        textClasses={activeFilter === 'AM' ? activeText : inactiveText}
      />
      <CustomButton
        text="PM"
        roundSide="left"
        onClick={() => handleFilterClick('PM')}
        backgroundClasses={`
          ${activeFilter === 'PM' ? activeBg : inactiveBg}
          ${commonButtonStyling}
        `}
        textClasses={activeFilter === 'PM' ? activeText : inactiveText}
      />
    </div>
  );
};

export default AgendaFilter; 