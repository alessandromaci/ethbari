import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const Timer = () => {

    const { t } = useTranslation();
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isEventOver, setIsEventOver] = useState(false); // Stato per evento passato

    useEffect(() => {
        const eventDate = new Date('2025-09-25T08:00:00'); // Data hardcodata

        const calculateState = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                setIsEventOver(false);
                // Calcolo Mesi
                let months = (eventDate.getFullYear() - now.getFullYear()) * 12;
                months -= now.getMonth();
                months += eventDate.getMonth();
                if (eventDate.getDate() < now.getDate()) {
                    months--;
                }
                months = Math.max(0, months);

                // Calcolo Ore, Minuti, Secondi basati sulla differenza totale
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ months, hours, minutes, seconds });
            } else {
                setIsEventOver(true);
                setTimeLeft({ months: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateState(); // Calcola stato iniziale
        const timer = setInterval(calculateState, 1000); // Aggiorna stato ogni secondo

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="
                w-full
                rounded-2xl
                bg-[linear-gradient(90deg,_#00C9E3_0%,_#00C9E31A_100%)]
                backdrop-blur-sm text-white flex justify-around
                h-12
                 ">
            {isEventOver ? (
                <div className="absolute bottom-0 left-0 right-0 w-full bg-black/70 backdrop-blur-sm text-white flex justify-center items-center h-[88px] md:h-[96px] rounded-b-2xl">
                    <span className="text-lg md:text-xl font-semibold font-geist">
                        {t('countdown.eventStarted', 'Event Started')}
                    </span>
                </div>
            ) : (
                <>
                    <div className="flex flex-col items-center px-2 justify-center h-full">
                        <span className="text-lg font-geist md:text-xl text-black font-bold tabular-nums leading-none">{formatTime(timeLeft.months)}</span>
                        <span className="text-[10px] font-geist text-black uppercase tracking-wider leading-none">{t('countdown.months', 'Months')}</span>
                    </div>
                    <div className="flex flex-col items-center px-2 justify-center h-full">
                        <span className="text-lg font-geist md:text-xl text-black font-bold tabular-nums leading-none">{formatTime(timeLeft.hours)}</span>
                        <span className="text-[10px] font-geist text-black uppercase tracking-wider leading-none">{t('countdown.hours', 'Hours')}</span>
                    </div>
                    <div className="flex flex-col items-center px-2 justify-center h-full">
                        <span className="text-lg font-geist md:text-xl text-black font-bold tabular-nums leading-none">{formatTime(timeLeft.minutes)}</span>
                        <span className="text-[10px] font-geist text-black uppercase tracking-wider leading-none">{t('countdown.minutes', 'Minutes')}</span>
                    </div>
                    <div className="flex flex-col items-center px-2 justify-center h-full">
                        <span className="text-lg font-geist md:text-xl text-black font-bold tabular-nums leading-none">{formatTime(timeLeft.seconds)}</span>
                        <span className="text-[10px] font-geist text-black uppercase tracking-wider leading-none">{t('countdown.seconds', 'Seconds')}</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Timer;