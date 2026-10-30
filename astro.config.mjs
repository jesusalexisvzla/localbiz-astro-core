
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    const siteUrl = env.SITE_URL?.trim();
    const indexable = env.SITE_INDEXABLE === 'true';

    const validSiteUrl = (() => {
        if (!siteUrl) return false;

        try {
            const url = new URL(siteUrl);

            return (
                url.protocol === 'https:' &&
                url.hostname !== 'example.com' &&
                url.hostname !== 'www.example.com' &&
                !['localhost', '127.0.0.1'].includes(url.hostname)
            );
        } catch {
            return false;
        }
    })();

    if (indexable && !validSiteUrl) {
        throw new Error(
            'SITE_INDEXABLE requires a valid HTTPS SITE_URL.'
        );
    }

    const enableIndexing = indexable && validSiteUrl;

    return {
        site: validSiteUrl ? siteUrl : undefined,

        integrations: enableIndexing
            ? [sitemap()]
            : []
    };
});
