interface SocialLink {
    type: string;
    url: string;
}

interface Speaker {
    Nome: string;
    Cognome: string;
    Socials_links: SocialLink[];
    Mansione: string;
    Photourl: string;
}

export type { Speaker, SocialLink };