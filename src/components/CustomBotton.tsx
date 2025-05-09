interface CustomButtonProps {
    icon?: string;
    iconPosition?: 'left' | 'right';
    text: string;
    onClick: () => void;
    backgroundClasses?: string;
    iconWidth?: number;
    iconHeight?: number;
    roundSide?: 'left' | 'right' | 'both';
}

const CustomButton = ({ icon, text, onClick, iconPosition = 'left', backgroundClasses, iconWidth = 16, iconHeight = 16, roundSide = 'right' }: CustomButtonProps) => {
    const defaultBg = "bg-[#FF0012] hover:bg-[#E00010]";
    const currentBg = backgroundClasses || defaultBg;

    const baseStyling = `text-white py-4 font-semibold 
    ${roundSide === 'left' ? 'rounded-l-[15px]' : 'rounded-r-[15px]'} 
    ${roundSide === 'right' ? 'rounded-r-[15px]' : ''} 
    ${roundSide === 'both' ? 'rounded-l-[3px] rounded-r-[15px]' : ''} 
    px-6 text-sm uppercase 
    tracking-wider 
    transition-colors 
    duration-200 
    hover:shadow-sm`;

    return (
        <button
            className={`${currentBg} ${baseStyling}`}
            onClick={onClick}
        >
            <div className={`flex gap-2 flex-row items-center justify-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
              {icon && <img src={icon} alt="Icon" style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }} />}
              <p className="text-center font-geist">{text}</p>
            </div>
        </button>
    )
}

export default CustomButton;