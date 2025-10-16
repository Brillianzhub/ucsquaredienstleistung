'use client';

import { useState } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import Link from 'next/link';

export default function ImpressumPage() {
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
          <h1>{language === 'de' ? 'Impressum' : 'Legal Notice'}</h1>
          
          <div className="legal-content">
            <section>
              <h2>{language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}</h2>
              <p><strong>{language === 'de' ? 'Firmenname:' : 'Company Name:'}</strong> UCSquare Clean Dienstleistung</p>
              <p><strong>{language === 'de' ? 'Geschäftsführer:' : 'Managing Director:'}</strong> [Name des Geschäftsführers]</p>
            </section>

            <section>
              <h2>{language === 'de' ? 'Kontakt' : 'Contact'}</h2>
              <p><strong>{language === 'de' ? 'Adresse:' : 'Address:'}</strong><br />
                Bordighera Allee 13<br />
                74172 Neckarsulm<br />
                Deutschland
              </p>
              <p><strong>{language === 'de' ? 'Telefon:' : 'Phone:'}</strong><br />
                015212560674<br />
                017683057106
              </p>
              <p><strong>{language === 'de' ? 'E-Mail:' : 'Email:'}</strong> contact@ucsquaredienstleistung.de</p>
            </section>

           

            <section>
              <h2>{language === 'de' ? 'Handelsregister' : 'Commercial Register'}</h2>
              <p><strong>{language === 'de' ? 'Registergericht:' : 'Register Court:'}</strong> Stadt Neckarsulm</p>
              <p><strong>{language === 'de' ? 'Registernummer:' : 'Register Number:'}</strong> [HRB-Nummer falls vorhanden]</p>
            </section>

            <section>
              <h2>{language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 para. 2 RStV'}</h2>
              <p>[Name des Verantwortlichen]<br />
                [Adresse]
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}</h2>
              <h3>{language === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}</h3>
              <p>
                {language === 'de' 
                  ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.'
                  : 'As a service provider, we are responsible for our own content on these pages according to general laws in accordance with § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, we as service providers are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.'
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