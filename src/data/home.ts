
export interface HomeContent {
    hero: {
        title: string;
        description: string;
        primaryAction: {
            label: string;
            href: string;
        };
        image?: {
            src: string;
            alt: string;
        };
    };
}

export const homeContent: HomeContent = {
    hero: {
        title: "Your business deserves a better website.",
        description:
            "A modern, fast, and responsive website designed to connect your business with more customers.",
        primaryAction: {
            label: "Get in touch",
            href: "/#contact"
        }
    }
};