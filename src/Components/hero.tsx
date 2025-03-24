import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transformando a</span>{' '}
                <span className="block text-indigo-500">educação com código</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Descubra projetos educacionais inovadores que unem tecnologia e aprendizado.
                Explore o ecossistema da Codeverse Labs e revolucione sua forma de aprender programação.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#projects"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explorar Projetos
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    Saiba Mais
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 opacity-75">
          <div className="w-full h-full">
            <div className="absolute lg:top-1/3 lg:right-1/4 w-24 h-24 bg-indigo-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute lg:top-1/2 lg:right-1/3 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute lg:top-1/4 lg:right-1/2 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-100 text-opacity-20 font-mono text-xl md:text-3xl font-bold">
                {"<CodeverseLabs />"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;