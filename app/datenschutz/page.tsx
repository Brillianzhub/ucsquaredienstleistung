'use client';

import { useState } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import Link from 'next/link';

export default function DatenschutzPage() {
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
          <h1>{language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
          
          <div className="legal-content">
            <section>
              <h2>{language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Data Protection at a Glance'}</h2>
              <h3>{language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}</h3>
              <p>
                {language === 'de'
                  ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                  : 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '2. Datenerfassung auf dieser Website' : '2. Data Collection on this Website'}</h2>
              <h3>{language === 'de' ? 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?' : 'Who is responsible for data collection on this website?'}</h3>
              <p>
                {language === 'de'
                  ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
                  : 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.'
                }
              </p>

              <h3>{language === 'de' ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}</h3>
              <p>
                {language === 'de'
                  ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.'
                  : 'Your data is collected when you provide it to us. This could be data that you enter into a contact form, for example.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '3. Kontaktformular' : '3. Contact Form'}</h2>
              <p>
                {language === 'de'
                  ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                  : 'If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '4. Cookies' : '4. Cookies'}</h2>
              <p>
                {language === 'de'
                  ? 'Diese Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.'
                  : 'This website uses cookies. These are small text files that your web browser stores on your device. Cookies help us make our offer more user-friendly, effective and secure.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '5. Ihre Rechte' : '5. Your Rights'}</h2>
              <p>
                {language === 'de'
                  ? 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.'
                  : 'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking or deletion of this data.'
                }
              </p>
            </section>

            <section>
              <h2>{language === 'de' ? '6. SSL-Verschlüsselung' : '6. SSL Encryption'}</h2>
              <p>
                {language === 'de'
                  ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.'
                  : 'For security reasons and to protect the transmission of confidential content, this site uses SSL encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://".'
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