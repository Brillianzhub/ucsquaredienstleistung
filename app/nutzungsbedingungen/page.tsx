'use client';

import { useState } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import Link from 'next/link';

export default function NutzungsbedingungenPage() {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <Link href="/" className="logo">{t('companyName')}</Link>
          <button className="language-toggle" onClick={toggleLanguage}>
            <span className="flag">{language === 'de' ? '🇩🇪' : '🇺🇸'}</span>
            <span>{language === 'de' ? 'DE' : 'EN'}</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="legal-page">
        <div className="container">
          <h1>{language === 'de' ? 'Nutzungsbedingungen' : 'Terms of Use'}</h1>
          
          <div className="legal-content">
            <section>
              <h2>{language === 'de' ? '1. Geltungsbereich' : '1. Scope of Application'}</h2>
              <p>
                {language === 'de'
                  ? 'Diese Nutzungsbedingungen gelten für die Nutzung der Website von Ucsquare Clean Dienstleistung. Mit der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden.'
                  : 'These terms of use apply to the use of the Ucsquare Clean Dienstleistung website. By using this website, you agree to these terms.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '2. Nutzung der Website' : '2. Use of the Website'}</h2>
              <p>
                {language === 'de'
                  ? 'Die Nutzung dieser Website ist nur für rechtmäßige Zwecke gestattet. Sie verpflichten sich, die Website nicht für rechtswidrige oder unerlaubte Zwecke zu nutzen.'
                  : 'The use of this website is only permitted for lawful purposes. You agree not to use the website for illegal or unauthorized purposes.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '3. Geistiges Eigentum' : '3. Intellectual Property'}</h2>
              <p>
                {language === 'de'
                  ? 'Alle Inhalte dieser Website, einschließlich Texte, Bilder, Grafiken und Design, sind urheberrechtlich geschützt und Eigentum von Ucsquare Clean Dienstleistung oder deren Lizenzgebern.'
                  : 'All content on this website, including text, images, graphics and design, is protected by copyright and is the property of Ucsquare Clean Dienstleistung or its licensors.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '4. Haftungsausschluss' : '4. Disclaimer'}</h2>
              <p>
                {language === 'de'
                  ? 'Die Informationen auf dieser Website werden nach bestem Wissen und Gewissen bereitgestellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der Inhalte.'
                  : 'The information on this website is provided to the best of our knowledge and belief. However, we do not guarantee the accuracy, completeness or timeliness of the content.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '5. Haftungsbeschränkung' : '5. Limitation of Liability'}</h2>
              <p>
                {language === 'de'
                  ? 'Ucsquare Clean Dienstleistung haftet nicht für Schäden, die durch die Nutzung oder Nichtnutzung der auf dieser Website bereitgestellten Informationen entstehen, es sei denn, diese beruhen auf Vorsatz oder grober Fahrlässigkeit.'
                  : 'Ucsquare Clean Dienstleistung is not liable for damages arising from the use or non-use of the information provided on this website, unless such damages are based on intent or gross negligence.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '6. Externe Links' : '6. External Links'}</h2>
              <p>
                {language === 'de'
                  ? 'Diese Website kann Links zu externen Websites enthalten. Wir haben keinen Einfluss auf den Inhalt dieser Websites und übernehmen keine Verantwortung für deren Inhalte.'
                  : 'This website may contain links to external websites. We have no influence on the content of these websites and assume no responsibility for their content.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '7. Änderungen der Nutzungsbedingungen' : '7. Changes to Terms of Use'}</h2>
              <p>
                {language === 'de'
                  ? 'Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Die aktuellen Bedingungen sind auf dieser Website verfügbar.'
                  : 'We reserve the right to change these terms of use at any time. The current terms are available on this website.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '8. Anwendbares Recht' : '8. Applicable Law'}</h2>
              <p>
                {language === 'de'
                  ? 'Für diese Nutzungsbedingungen und alle Rechtsbeziehungen zwischen Ihnen und Ucsquare Clean Dienstleistung gilt deutsches Recht.'
                  : 'German law applies to these terms of use and all legal relationships between you and Ucsquare Clean Dienstleistung.'
                }
              </p>
            </section>
          </div>

          <div className="back-to-home">
            <Link href="/" className="back-button">
              {language === 'de' ? '← Zurück zur Startseite' : '← Back to Home'}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}