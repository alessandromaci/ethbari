
interface SocialIconProps {
    href: string;
    iconName: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, iconName }) => (
    <a href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-400 transition-colors"
        >
        <img onClick={() => window.open(href, '_blank')} src={`/icons/${iconName}.svg`} alt={iconName} className="w-6 h-6 cursor-pointer filter brightness-0 invert" />
    </a>
);

export default SocialIcon;