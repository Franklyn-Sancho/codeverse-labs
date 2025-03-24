import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const CreatorProfile = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titulo similar ao componente Projects */}
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Criador</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Conheça o desenvolvedor por trás do projeto</p>
          <div className="mt-2 w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Imagem do criador */}
            <div className="md:shrink-0 bg-gradient-to-br from-indigo-900 to-purple-900 p-4 md:p-8">
              <img
                src="https://avatars.githubusercontent.com/u/69439514?v=4"
                alt="Criador da aplicação"
                className="h-48 w-48 rounded-full border-4 border-indigo-500 shadow-lg mx-auto"
              />
            </div>
            {/* Informações do criador */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  <span className="block text-indigo-400 text-sm mb-1">Desenvolvedor</span>
                  Franklyn Sancho
                </h2>
                <div className="flex space-x-3">
                  <a href="https://github.com/Franklyn-Sancho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/franklyn-sancho/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Desenvolvedor fullstack apaixonado por criar soluções educacionais que transformam
                a maneira como as pessoas aprendem programação. Especialista em React, Node.js e
                experiências de aprendizado interativas.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs font-medium">React</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-xs font-medium">Node.js</span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-medium">TailwindCSS</span>
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-xs font-medium">UI/UX</span>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
            <p className="text-center text-gray-400 text-sm">
              "Acredito que a educação em tecnologia deve ser acessível, engajante e transformadora."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfile;