interface SocialLink {
    type: string;
    url: string;
}

interface Speaker {
    Nome: string;
    Cognome: string;
    Username?: string;
    MainHashtag: string;
    Socials_links: SocialLink[];
    Mansione: {
        [key: string]: string;
        it: string;
        en: string;
    };
    Photourl: string;
}

export type { Speaker, SocialLink };