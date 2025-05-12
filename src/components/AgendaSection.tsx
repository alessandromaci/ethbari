import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import agendaEventsData from '../data/agenda.json';
import AgendaFilter from './AgendaFilter';;

// Interfaccia per la struttura dati (opzionale ma buona pratica con TS)
interface AgendaEvent {
  title: string;
  speaker: string;
  time: string;
  duration: string;
  days: string;
  topic: string[];
  track: string[];
  border: boolean;
  location: string;
}

// Funzione per determinare il colore del tag (placeholder)
const getTagColor = (tag: string) => {
  console.log(tag)
  if (tag === "topic") {
    return 'bg-[#00C9E3] text-black font-geist font-semibold';
  }
  // Colore default per altri tag come AI, Blockchain, NFT, Metaverse, DeFi
  return 'bg-white text-black font-geist font-semibold border-2 border-black'; // Viola come esempio, o altro colore
};

// Componente per una riga dell'agenda
const AgendaItem: React.FC<{ event: AgendaEvent, border: boolean }> = ({ event, border = true }) => {
  return (
    <div className={`py-8 ${border ? 'border-b border-black' : ''} grid grid-cols-1 md:grid-cols-12 md:items-start gap-4 md:gap-6`}>
      {/* Info Evento (occupa più spazio) */}
      <div className="md:col-span-5">
        <h3 className="text-black font-bold text-xl mb-1 font-geist">{event.title}</h3>
        {event.speaker && <p className="hidden font-bold md:block text-gray-600 text-sm font-geist">{event.speaker}</p>}
      </div>


      {/* Orario e Durata Desktop */}
      <div className="md:col-span-3 text-left hidden md:block">
        <p className="text-black font-semibold text-lg font-geist">{event.time}</p>
        <p className="text-black font-semibold text-sm font-geist">{event.days}</p>
        {event.duration && <p className="text-black font-semibold text-sm font-geist">{event.duration}</p>}
      </div>

      {/* Orario e Durata Mobile */}
      <div className="md:hidden flex flex-row justify-between">
        <div className="flex flex-col">
        {event.speaker && <p className="text-black font-normaltext-lg font-geist">{event.speaker}</p>}
        {/* {event.location && <p className="text-[#FF0012] text-sm font-geist">{event.location}</p>} */}
        </div>
        <div className="flex flex-col">
          <p className="text-black font-normal text-lg font-geist">{event.time}</p>
          <p className="text-black font-semibold text-sm font-geist">{event.days}</p>
          {/* {event.duration && <p className="text-gray-500 text-sm font-geist">{event.duration}</p>} */}
          {/* {event.location && <p className="text-[#FF0012] text-sm font-geist">{event.location}</p>} */}
        </div>
      </div>



      {/* Topic && Track */}
      <div className="hidden md:flex md:col-span-4 flex flex-wrap gap-2 items-center justify-center md:justify-center">
        {event.topic?.map((topic, index) => (
          <span key={index} className={`px-4 py-1 rounded-md text-sm font-semibold font-geist ${getTagColor("topic")}`}>
            {topic}
          </span>
        ))}
        {event.track?.map((track, index) => (
          <span key={index} className={`px-4 py-1 rounded-md text-sm font-semibold font-geist ${getTagColor(track)}`}>
            {track}
          </span>
        ))}
      </div>
    </div>
  );
};

// Componente Sezione Agenda
const AgendaSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<'AM' | 'PM' | null>(null);

  const filteredEvents = (agendaEventsData as AgendaEvent[]).filter(event => {
    if (!activeFilter) return true; // Mostra tutto se nessun filtro è attivo

    const timeString = event.time.split(':')[0];
    if (!timeString) return false; // Gestione di orari non validi
    const hour = parseInt(timeString, 10);
    if (isNaN(hour)) return false; // Gestione di orari non validi

    if (activeFilter === 'AM') {
      return hour < 12;
    }
    if (activeFilter === 'PM') {
      return hour >= 12;
    }
    return true;
  });

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-9xl mx-auto px-6">
        {/* Intestazione aggiornata */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-16 gap-8 lg:gap-4">
          {/* Titolo e Sottotitolo a destra su lg, sopra e centrato su mobile */}
          <div className="text-left lg:text-right w-full lg:w-auto order-2 lg:order-2">
            <h2 className="text-black font-koho font-medium text-5xl md:text-6xl lg:text-7xl tracking-wider mb-2">
              {t('agenda.title', 'AGENDA')}
            </h2>
            <p className="hidden lg:block text-black text-sm md:text-base font-geist font-semibold">
              {t('agenda.subtitle.date', 'September 25, 2025')} | {t('agenda.subtitle.city', 'Bari')}<br />
              {t('agenda.subtitle.location', 'Location Name')}
            </p>
          </div>

          {/* Icona a sinistra su lg, sotto e centrata su mobile */}
          <div className="flex-shrink-0 order-1 lg:order-1 mx-auto lg:mx-0">
            <img src="/Agenda.svg" alt="Agenda Icon"
              className="w-32 h-auto sm:w-40 lg:w-48" // Dimensioni reattive per l'immagine
            />
          </div>
        </div>
        {/* Filtro AM/PM */}
        <AgendaFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        {/* Lista Eventi */}
        <div>
          {filteredEvents.map((event, index) => (
            <AgendaItem key={index} event={event} border={index !== filteredEvents.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection; 