// components/Features.jsx
import React from 'react';
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      name: 'Aprendizado Interativo',
      description: 'Nossos projetos focam em aprendizado prático e interativo, onde os estudantes aprendem fazendo.',
      icon: <AcademicCapIcon className="h-6 w-6" />
    },
    {
      name: 'Gamificação',
      description: 'Utilizamos elementos de jogos para tornar o aprendizado mais envolvente e motivador.',
      icon: <PuzzlePieceIcon className="h-6 w-6" />
    },
    {
      name: 'Comunidade',
      description: 'Uma comunidade ativa de aprendizes e mentores para suporte contínuo e networking.',
      icon: <UserGroupIcon className="h-6 w-6" />
    },
    {
      name: 'Projetos Reais',
      description: 'Desenvolva habilidades trabalhando em projetos do mundo real com aplicação prática.',
      icon: <RocketLaunchIcon className="h-6 w-6" />
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Recursos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Por que escolher a Codeverse Labs?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Nossa abordagem educacional é projetada para maximizar o engajamento e o aprendizado.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 bg-indigo-600 rounded-lg p-3 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mt-8 text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;