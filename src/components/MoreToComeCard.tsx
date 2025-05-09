const MoreToComeCard = () => {
    
    return (
        <div className="flex flex-col gap-2">
            {/* Contenitore principale per immagine e overlay hover */}
            <div
                className="cursor-pointer relative rounded-xl border-2 border-red-500 overflow-hidden h-96 bg-[#FF0012] flex flex-col justify-end items-start px-8 pb-8"
                onClick={() => {
                    window.location.href = '#';
                }}
            >
                <div className="flex flex-col items-start justify-left">
                    <p className="text-2xl text-white font-bold text-left">More</p>
                    <p className="text-2xl text-white font-bold text-left">to come...</p>
                    <p className="text-lg mt-4 text-white text-left">Apply as speaker</p>
                </div>
                <img src="/Blur.svg" alt="Arrow right" className="w-10 h-10 text-white" />
            </div>
        </div>
    )
}

export default MoreToComeCard;