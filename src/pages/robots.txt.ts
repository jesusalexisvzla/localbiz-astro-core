
import type { APIRoute } from 'astro';

import { siteConfig } from '@config/site';

export const GET: APIRoute = ({ site }) => {
    const isIndexable =
        siteConfig.indexable && Boolean(site);

    const lines = [
        'User-agent: *',
        'Allow: /'
    ];

    if (isIndexable && site) {
        lines.push('');
        lines.push(
            `Sitemap: ${new URL('sitemap-index.xml', site).href}`
        );
    }

    return new Response(lines.join('\n') + '\n', {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
};
