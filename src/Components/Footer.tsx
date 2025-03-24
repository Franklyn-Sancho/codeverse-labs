import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-lg font-bold text-indigo-500 mb-4">Codeverse Labs</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando a educação por meio da tecnologia e inovação. 
              Construindo um futuro onde o aprendizado de programação seja 
              acessível e inspirador para todos.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h3 className="text-lg font-bold text-indigo-500 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm flex items-center">
                  <span className="bg-gray-800 rounded-full h-1 w-1 mr-2"></span>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm flex items-center">
                  <span className="bg-gray-800 rounded-full h-1 w-1 mr-2"></span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm flex items-center">
                  <span className="bg-gray-800 rounded-full h-1 w-1 mr-2"></span>
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm flex items-center">
                  <span className="bg-gray-800 rounded-full h-1 w-1 mr-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-indigo-400 text-sm flex items-center">
                  <span className="bg-gray-800 rounded-full h-1 w-1 mr-2"></span>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-bold text-indigo-500 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rio de Janeiro, RJ
                </span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">soon</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-indigo-500 mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Inscreva-se para receber novidades sobre nossos projetos e eventos.
            </p>
            <form className="mt-2">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm font-medium transition-colors duration-300"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Codeverse Labs. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">
                  Termos
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">
                  Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 text-sm">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;