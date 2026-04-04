import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-brand-charcoal text-brand-sand pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Logo & Brand Statement */}
          <div className="flex flex-col items-start">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-brand-yellow mb-6 inline-block">
              RE:BA
            </Link>
            <p className="text-brand-sand/80 text-sm leading-relaxed max-w-xs">
              {t.footer.brandStatement}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">{t.footer.explore}</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/about" className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.nav.impact}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/partnership" className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.nav.partner}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">{t.footer.contact}</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-brand-sand/70 text-sm">
                {t.contact.info.address}
              </li>
              <li>
                <a href={`mailto:${t.contact.info.email}`} className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.contact.info.email}
                </a>
              </li>
              <li>
                <a href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`} className="text-brand-sand/70 hover:text-brand-yellow transition-colors text-sm">
                  {t.contact.info.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Language */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">{t.footer.connect}</h4>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-sand hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-sand hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-sand hover:bg-brand-yellow hover:text-brand-charcoal transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-brand-sand/50" />
              <div className="flex items-center bg-white/5 rounded-full p-1">
                <button
                  onClick={() => setLanguage('vi')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    language === 'vi' ? 'bg-white/20 text-white' : 'text-brand-sand/50 hover:text-brand-sand'
                  }`}
                >
                  VI
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    language === 'en' ? 'bg-white/20 text-white' : 'text-brand-sand/50 hover:text-brand-sand'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-sand/50 text-xs">
            {t.footer.rights}
          </p>
          <p className="text-brand-sand/50 text-xs">
            {t.footer.sustainability}
          </p>
        </div>
      </div>
    </footer>
  );
}
