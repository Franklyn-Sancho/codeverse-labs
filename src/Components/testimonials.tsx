// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "O CodeQuest transformou minha forma de aprender programação. Os desafios são divertidos e ao mesmo tempo desafiadores.",
      author: "Mariana Santos",
      role: "Estudante de Ciência da Computação"
    },
    {
      content: "Como professor, o CodeWithThings me ajudou a tornar minhas aulas mais práticas e envolventes. Os alunos adoram ver o código ganhar vida em dispositivos reais.",
      author: "Carlos Oliveira",
      role: "Professor de Tecnologia"
    },
    {
      content: "Depois de participar dos projetos da Codeverse Labs, consegui meu primeiro emprego como desenvolvedor. As habilidades práticas fizeram toda a diferença.",
      author: "Lucas Mendes",
      role: "Desenvolvedor Jr."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Depoimentos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            O que dizem sobre nós
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-500"
            >
              <div className="relative">
                <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-indigo-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-300 italic mt-4">{testimonial.content}</p>
              </div>
              <div className="mt-6">
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-sm text-indigo-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;