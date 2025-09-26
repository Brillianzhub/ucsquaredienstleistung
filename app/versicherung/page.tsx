'use client';

import { useState } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import Link from 'next/link';

export default function VersicherungPage() {
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
          <h1>{language === 'de' ? 'Versicherungsinformationen' : 'Insurance Information'}</h1>
          
          <div className="legal-content">
            <section>
              <h2>{language === 'de' ? 'Betriebshaftpflichtversicherung' : 'Professional Liability Insurance'}</h2>
              <p>
                {language === 'de'
                  ? 'Ucsquare Clean Dienstleistung verfügt über eine umfassende Betriebshaftpflichtversicherung, die alle unsere Reinigungsdienstleistungen abdeckt.'
                  : 'Ucsquare Clean Dienstleistung has comprehensive professional liability insurance that covers all our cleaning services.'
                }
              </p>
              
              <div className="insurance-details">
                <h3>{language === 'de' ? 'Versicherungsdetails:' : 'Insurance Details:'}</h3>
                <ul>
                  <li><strong>{language === 'de' ? 'Versicherungsgesellschaft:' : 'Insurance Company:'}</strong> [Name der Versicherungsgesellschaft]</li>
                  <li><strong>{language === 'de' ? 'Policennummer:' : 'Policy Number:'}</strong> [Policennummer]</li>
                  <li><strong>{language === 'de' ? 'Deckungssumme:' : 'Coverage Amount:'}</strong> [Deckungssumme] €</li>
                  <li><strong>{language === 'de' ? 'Gültigkeitsdauer:' : 'Validity Period:'}</strong> [Gültigkeitsdauer]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>{language === 'de' ? 'Abgedeckte Bereiche' : 'Covered Areas'}</h2>
              <p>
                {language === 'de'
                  ? 'Unsere Versicherung deckt folgende Bereiche ab:'
                  : 'Our insurance covers the following areas:'
                }
              </p>
              <ul>
                <li>{language === 'de' ? 'Sachschäden an Kundeneigentum' : 'Property damage to customer property'}</li>
                <li>{language === 'de' ? 'Personenschäden während der Dienstleistung' : 'Personal injury during service'}</li>
                <li>{language === 'de' ? 'Vermögensschäden' : 'Financial losses'}</li>
                <li>{language === 'de' ? 'Schlüsselverlust oder -beschädigung' : 'Key loss or damage'}</li>
                <li>{language === 'de' ? 'Diebstahl durch Mitarbeiter' : 'Theft by employees'}</li>
              </ul>
            </section>

            <section>
              <h2>{language === 'de' ? 'Mitarbeiterversicherung' : 'Employee Insurance'}</h2>
              <p>
                {language === 'de'
                  ? 'Alle unsere Mitarbeiter sind über die gesetzliche Unfallversicherung und zusätzliche betriebliche Versicherungen abgesichert.'
                  : 'All our employees are covered by statutory accident insurance and additional company insurance.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? 'Schadensmeldung' : 'Damage Reporting'}</h2>
              <p>
                {language === 'de'
                  ? 'Im unwahrscheinlichen Fall eines Schadens kontaktieren Sie uns bitte umgehend:'
                  : 'In the unlikely event of damage, please contact us immediately:'
                }
              </p>
              <div className="contact-info">
                <p><strong>{language === 'de' ? 'Notfall-Hotline:' : 'Emergency Hotline:'}</strong> [Notfallnummer]</p>
                <p><strong>Email:</strong> [E-Mail für Schadensmeldungen]</p>
                <p>
                  {language === 'de'
                    ? 'Wir werden den Schaden umgehend prüfen und in Zusammenarbeit mit unserer Versicherung eine schnelle Lösung finden.'
                    : 'We will immediately assess the damage and work with our insurance company to find a quick solution.'
                  }
                </p>
              </div>
            </section>

            <section>
              <h2>{language === 'de' ? 'Zusätzliche Sicherheitsmaßnahmen' : 'Additional Security Measures'}</h2>
              <ul>
                <li>{language === 'de' ? 'Regelmäßige Mitarbeiterschulungen' : 'Regular employee training'}</li>
                <li>{language === 'de' ? 'Qualitätskontrolle vor Ort' : 'On-site quality control'}</li>
                <li>{language === 'de' ? 'Verwendung professioneller Reinigungsgeräte' : 'Use of professional cleaning equipment'}</li>
                <li>{language === 'de' ? 'Sicherheitsprotokolle für alle Arbeitsabläufe' : 'Safety protocols for all work processes'}</li>
              </ul>
            </section>

            <section>
              <h2>{language === 'de' ? 'Versicherungsnachweis' : 'Insurance Certificate'}</h2>
              <p>
                {language === 'de'
                  ? 'Auf Anfrage stellen wir Ihnen gerne eine Kopie unseres Versicherungsnachweises zur Verfügung. Kontaktieren Sie uns einfach über unser Kontaktformular oder telefonisch.'
                  : 'Upon request, we will be happy to provide you with a copy of our insurance certificate. Simply contact us via our contact form or by phone.'
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