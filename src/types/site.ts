export interface SocialLink {
    label: string;
    url: string;
}

export interface BusinessContact {
    phone?: string;
    email?: string;
    whatsapp?: string;
    address?: string;
    mapsUrl?: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    language: string;
    logo?: string;
    contact: BusinessContact;
    socials: SocialLink[];
}

export interface NavigationLink {
    label: string;
    href: string;
    external?: boolean;
}