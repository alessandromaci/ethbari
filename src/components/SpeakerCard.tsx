import React, { useState } from "react";
import type { Speaker } from "../interfaces/speakers.interface";

interface SpeakerCardProps {
    speaker: Speaker;
    index: number;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            {/* Contenitore principale per immagine e overlay hover */}
            <div
                className="relative rounded-xl border-2 border-red-500 overflow-hidden h-96 bg-gray-100" // Rimosso aspect-ratio, ripristinato h-96
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Immagine */}
                <img
                    src={speaker.Photourl}
                    alt={`${speaker.Nome} ${speaker.Cognome}` || `Speaker ${index + 1}`}
                    className="object-cover w-full h-full filter grayscale transition-all duration-300" // Rimosso hover scale/filter
                />

                {/* Popup Overlay (visibile solo su sm+ on hover) */}
                <div
                    className={`absolute inset-0 bg-[#FF0012] py-8 rounded-[9px] border-2 border-[#FF0012] hidden sm:flex flex-col items-center justify-between text-center 
                               transition-opacity duration-300 ease-in-out 
                               ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}` // Controllo opacità e pointer-events
                    }
                >
                    <div>
                        <h3 className="text-lg font-bold text-white font-geist">{(speaker.Username) ? speaker.Username : speaker.Nome} {speaker.Cognome}</h3>
                        <p className="text-sm text-white px-2 mb-2 font-geist">{speaker?.MainHashtag}</p>
                    </div>

                    <p className="text-sm text-white px-2 mb-2 font-geist">{speaker?.Mansione}</p>

                    {/* Social Links nel Popup */}
                    <div className="flex flex-row gap-3 mt-1">
                        {speaker?.Socials_links?.map((social, i) => (
                            <a href={social.url} target="_blank" rel="noopener noreferrer" key={i} className="hover:opacity-75">
                                <img
                                    style={{ width: '26px', height: '26px', filter: 'brightness(0) invert(1)' }}
                                    src={`/icons/${social.type}.svg`}
                                    alt={social.type}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Info visibili solo su Mobile (sotto la card) */}
            <div className="sm:hidden flex flex-col gap-2 items-center justify-center mt-3 text-center">
                <h3 className="text-lg font-bold font-geist font-semibold">{speaker.Nome} {speaker.Cognome}</h3>
                <p className="text-sm text-gray-500 text-normal px-2 font-geist">{speaker?.MainHashtag}</p>
                <p className="text-sm text-gray-500 text-normal px-2 font-geist">{speaker.Mansione}</p>
                {/* Social Links Mobile */}
                <div className="flex flex-row gap-3 mt-1">
                    {speaker?.Socials_links?.map((social, i) => (
                        <a href={social.url} target="_blank" rel="noopener noreferrer" key={i} className="hover:opacity-75">
                            <img
                                style={{ width: '25px', height: '25px' }}
                                src={`/icons/${social.type}.svg`}
                                alt={social.type}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard;