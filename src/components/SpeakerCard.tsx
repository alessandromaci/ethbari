import type { Speaker } from "../interfaces/speakers.interface";

interface SpeakerCardProps {
    speaker: Speaker;
    index: number;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
    return (
        <div className="flex flex-col gap-2">
            <div key={`speaker-${index}-${speaker.Nome}-${speaker.Cognome}`} className="rounded-xl border-2 border-red-500 overflow-hidden h-96 bg-gray-100">
                <img
                    src={speaker.Photourl}
                    alt={`${speaker.Nome} ${speaker.Cognome}` || `Speaker ${index + 1}`}
                    className="object-cover w-full h-full filter grayscale transition-all duration-300 hover:filter-none hover:scale-105"
                />
            </div>

            {/* md section */}
            <div className="sm:hidden flex flex-col gap-2 items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold">{speaker.Nome} {speaker.Cognome}</h3>
                    <p className="text-sm text-gray-500">{speaker.Mansione}</p>
                </div>
                {/* social links */}
                <div className="flex flex-row gap-2">
                    {
                        speaker?.Socials_links?.map((social, index) => (
                            <img
                                onClick={() => window.open(social?.url, '_blank')}
                                style={{ width: '25px', height: '25px', cursor: 'pointer' }}
                                src={`/icons/${social.type}.svg`}
                                alt={social.type}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard;