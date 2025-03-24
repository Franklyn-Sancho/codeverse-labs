import { CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-indigo-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <CodeBracketIcon className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Codeverse Labs
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="border-indigo-500 text-white px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#projects" className="border-transparent text-gray-300 hover:border-indigo-400 hover:text-white px-1 pt-1 border-b-2 text-sm font-medium">
                Projetos
              </a>
              <a href="#features" className="border-transparent text-gray-300 hover:border-indigo-400 hover:text-white px-1 pt-1 border-b-2 text-sm font-medium">
                Recursos
              </a>
              <a href="#testimonials" className="border-transparent text-gray-300 hover:border-indigo-400 hover:text-white px-1 pt-1 border-b-2 text-sm font-medium">
                Depoimentos
              </a>
              <a href="#contact" className="border-transparent text-gray-300 hover:border-indigo-400 hover:text-white px-1 pt-1 border-b-2 text-sm font-medium">
                Contato
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar Agora
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="bg-gray-900 block px-3 py-2 rounded-md text-base font-medium text-white">
              Home
            </a>
            <a href="#projects" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">
              Projetos
            </a>
            <a href="#features" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">
              Recursos
            </a>
            <a href="#testimonials" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">
              Depoimentos
            </a>
            <a href="#contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">
              Contato
            </a>
            <a
              href="#contact"
              className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Iniciar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;