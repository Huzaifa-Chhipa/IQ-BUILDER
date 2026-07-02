import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  /** Override the default organization schema */
  pageSchema?: object;
}

/**
 * Adds JSON-LD structured data to every page via Helmet.
 * Base organization schema is always included.
 */
export default function SchemaMarkup({ pageSchema }: SchemaMarkupProps) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateDeveloper',
    name: 'IQ Builders & Developers',
    alternateName: 'IQ Builders',
    description:
      "Karachi's premier real estate developer and construction company since 2000. Specializing in luxury apartments, commercial plazas, and premium residential projects.",
    url: 'https://iqbuildersdevelopers.com',
    telephone: '+92-21-32776004',
    email: 'hasnainqadriiqbuilders@gmail.com',
    foundingDate: '2000',
    areaServed: ['Karachi', 'Sindh', 'Pakistan'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 5046, Central Plaza Shopping Mall, Marstan Road',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
    },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'sales', telephone: '+92-314-1115203', name: 'Hasnain' },
      { '@type': 'ContactPoint', contactType: 'sales', telephone: '+92-309-2071135', name: 'Ammar' },
    ],
    sameAs: [
      'https://www.facebook.com/share/1EU93KPe9x/',
      'https://www.instagram.com/iq_group_of_companies_offical',
    ],
  };

  const schemas = pageSchema ? [orgSchema, pageSchema] : [orgSchema];

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
