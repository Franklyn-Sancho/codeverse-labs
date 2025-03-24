import React from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'CodeQuest',
      description: 'Uma plataforma gamificada que ensina programação através de missões e desafios, transformando o aprendizado em uma jornada divertida e envolvente.',
      icon: <CodeBracketIcon className="h-12 w-12 text-indigo-500" />,
      bgClass: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    {
      title: 'CodeWithThings',
      description: 'Já imaginou aprender programação orientada a objetos por meio do xadrez? Ponteiro e referência por meio de livros? A codewiththings ensina tecnologia por meio de objetos do dia a dia.',
      icon: <DevicePhoneMobileIcon className="h-12 w-12 text-purple-500" />,
      bgClass: 'bg-gradient-to-br from-gray-800 to-gray-900'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Projetos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Nosso Ecossistema Educacional
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Conheça os projetos da Codeverse Labs que estão transformando a educação tecnológica.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgClass} rounded-lg shadow-lg p-6 border border-gray-800 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-gray-800 mx-auto mb-4">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{project.title}</h3>
              <p className="text-gray-300 text-center">{project.description}</p>
              <div className="mt-6 text-center">
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
                  Saiba mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;