import React from 'react';

export const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://apixbuild.com/#organization",
                "name": "Apix Build",
                "url": "https://apixbuild.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://apixbuild.com/logo-icon.png",
                    "width": 112,
                    "height": 112
                },
                "sameAs": [
                    "https://twitter.com/apixbuild",
                    "https://instagram.com/apixbuild",
                    "https://linkedin.com/company/apixbuild"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "apixbuild@gmail.com",
                    "contactType": "customer service"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://apixbuild.com/#website",
                "url": "https://apixbuild.com",
                "name": "Apix Build",
                "description": "Premium digital agency specialized in UI/UX design, web development, and brand strategy.",
                "publisher": {
                    "@id": "https://apixbuild.com/#organization"
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://apixbuild.com/#service",
                "name": "Apix Build",
                "description": "Full-service digital agency offering web development, UI/UX design, and social media management.",
                "url": "https://apixbuild.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                },
                "priceRange": "$$"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
