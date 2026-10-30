
import type { SiteConfig } from "@/types/site.ts";

const siteUrl = import.meta.env.SITE_URL?.trim();

const indexable =
    import.meta.env.SITE_INDEXABLE === 'true';

export const siteConfig: SiteConfig = {
    name: "Local Business",
    description: "A modern website for local businesses.",
    url: siteUrl || "https://example.com",
    indexable: indexable && Boolean(siteUrl),
    language: "en",
    logo: "/logo.svg",

    contact: {
        email: "hello@example.com",
    },

    socials: [],
};
