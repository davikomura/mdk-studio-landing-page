import logo from '../../assets/image.png';
import { FiArrowLeft } from 'react-icons/fi';

const PrivacyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="py-4 px-4 sm:px-10 glass-effect transition-all duration-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" aria-label="Voltar para a home">
              <img className="h-12 w-auto" src={logo} alt="Logo MDK Studio" />
            </a>

            {/* Back link */}
            <a
              href="/"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              <FiArrowLeft className="w-4 h-4" />
              Voltar ao site
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PrivacyHeader;
