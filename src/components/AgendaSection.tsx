import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import agendaEventsData from '../data/agenda.json';
import AgendaFilter from './AgendaFilter';
import CustomButton from './CustomBotton';

// Interfaccia per la struttura dati (opzionale ma buona pratica con TS)
interface AgendaEvent {
  title: string;
  speaker: string;
  time: string;
  duration: string;
  tags: string[];
}

// Funzione per determinare il colore del tag (placeholder)
const getTagColor = (tag: string) => {
  const lowerTag = tag.toLowerCase();
  if (['speaker', 'keynote', 'panel', 'closing'].includes(lowerTag)) {
    return 'bg-cyan-100 text-cyan-700';
  }
  if (['dev', 'workshop', 'l2', 'smart contracts', 'security'].includes(lowerTag)) {
    return 'bg-gray-100 text-gray-600'; // Grigio per tech/dev come da mockup
  }
  if (lowerTag === 'break') {
    return 'bg-green-100 text-green-700';
  }
  // Colore default per altri tag come AI, Blockchain, NFT, Metaverse, DeFi
  return 'bg-purple-100 text-purple-700'; // Viola come esempio, o altro colore
};

// Componente per una riga dell'agenda
const AgendaItem: React.FC<{ event: AgendaEvent }> = ({ event }) => {
  return (
    <div className="py-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-12 md:items-center gap-4 md:gap-6">
      {/* Info Evento (occupa più spazio) */}
      <div className="md:col-span-5">
        <h3 className="text-black font-bold text-xl mb-1">{event.title}</h3>
        {event.speaker && <p className="text-gray-600 text-sm">{event.speaker}</p>}
      </div>
      {/* Orario e Durata */}
      <div className="md:col-span-3 text-left md:text-right">
        <p className="text-black font-semibold text-lg">{event.time}</p>
        {event.duration && <p className="text-gray-500 text-sm">{event.duration}</p>}
      </div>
      {/* Tags */}
      <div className="md:col-span-4 flex flex-wrap gap-2 justify-start md:justify-end">
        {event.tags.map((tag, index) => (
          <span key={index} className={`px-4 py-1.5 rounded-full text-sm font-medium ${getTagColor(tag)}`}>
            {tag}
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
          {/* Titolo e Sottotitolo a sinistra su lg, sopra e centrato su mobile */}
          <div className="text-center lg:text-left w-full lg:w-auto order-2 lg:order-1">
            <h2 className="text-black font-black text-5xl md:text-6xl lg:text-7xl tracking-wider mb-2">
              {t('agenda.title', 'AGENDA')}
            </h2>
            <p className="hidden lg:block text-gray-600 text-sm md:text-base">
              {t('agenda.subtitle.date', 'September 25, 2025')} | {t('agenda.subtitle.city', 'Bari')}<br />
              {t('agenda.subtitle.location', 'Location Name')}
            </p>
          </div>
          {/* Icona a destra su lg, sotto e centrata su mobile */}
          <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
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
            <AgendaItem key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection; 