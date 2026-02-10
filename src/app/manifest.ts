import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ApixBuild | Smart Digitals',
        short_name: 'ApixBuild',
        description: 'Premium digital agency specialized in UI/UX design, web development, and strategy.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/logo-icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo-icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/logo-icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
