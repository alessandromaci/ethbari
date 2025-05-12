interface CustomButtonProps {
    icon?: string;
    iconPosition?: 'left' | 'right';
    text: string;
    onClick: () => void;
    backgroundClasses?: string;
    iconWidth?: number;
    iconHeight?: number;
    roundSide?: 'left' | 'right' | 'both';
    textClasses?: string;
}

const CustomButton = ({ icon, text, onClick, iconPosition = 'left', backgroundClasses, iconWidth = 16, iconHeight = 16, roundSide = 'right', textClasses }: CustomButtonProps) => {
    const defaultBg = "bg-[#FF0012] hover:bg-[#E00010]";
    const currentBg = backgroundClasses || defaultBg;

    const baseStyling = `py-2
    ${roundSide === 'left' ? 'rounded-l-[10px]' : 'rounded-r-[10px]'} 
    ${roundSide === 'right' ? 'rounded-r-[10px]' : ''} 
    ${roundSide === 'both' ? 'rounded-l-[10px] rounded-r-[10px]' : ''} 
    px-6 text-lg
    font-geist 
    font-medium 
    tracking-wider 
    transition-colors 
    duration-200 
    hover:shadow-sm`;

    return (
        <button
            className={`${currentBg} ${baseStyling} cursor-pointer`}
            onClick={onClick}
        >
            <div className={`flex gap-2 flex-row items-center justify-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
              {icon && <img src={icon} alt="Icon" style={{ width: `${iconWidth}px`, height: `${iconHeight}px` }} />}
              <p className={`text-center ${textClasses || 'text-white'}`}>{text}</p>
            </div>
        </button>
    )
}

export default CustomButton;