import { motion } from 'framer-motion';

const projects = [
  {
    title: 'UI Projects',
    description: 'A collection of user interface designs built using HTML, CSS, and JavaScript. This project demonstrates creativity and responsive design skills.',
    image: '/projectimages/UI.webp?height=200&width=200',
    link: 'https://github.com/suryavignesh1304/UI-projects',
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Python Projects',
    description: 'A showcase of Python projects including automation scripts,  and small applications, highlighting Python programming expertise.',
    image: '/projectimages/python.webp?height=200&width=200',
    link: 'https://github.com/suryavignesh1304/Python-Projects',
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Machine Learning Projects',
    description: 'A series of machine learning models and algorithms applied to real-world datasets, demonstrating knowledge in supervised and unsupervised learning.',
    image: '/projectimages/ML.webp?height=200&width=200',
    link: 'https://github.com/suryavignesh1304/MachineLearning',
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'NLP Projects',
    description: 'Projects focused on natural language processing techniques such as text classification and sentiment analysis',
    image: '/projectimages/NLP.webp?height=200&width=200',
    link: 'https://github.com/suryavignesh1304/NLP',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Currency Detection Projects',
    description: 'A machine learning model for detecting and recognizing Indian currency notes using image recognition techniques and deep learning.',
    image: '/projectimages/currency.webp?height=200&width=200',
    link: 'https://github.com/suryavignesh1304/indian-currency-detection',
    color: 'from-blue-400 to-cyan-500',
  },
];

export default function Projects() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-gray-900">My Projects</h2>
        <div className="relative">
          {/* Main timeline */}
          <div className="absolute left-1/2 w-1 bg-blue-400 h-full transform -translate-x-1/2 top-0 z-0" aria-hidden="true"></div>
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex flex-row md:flex-row items-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-full md:w-4/12 relative max-sm:w-[63%]  md:pl-12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:order-last'}`}>
                <h3 className={`text-xl md:text-2xl font-semibold mb-4 text-gray-900 ${index % 2 === 0 ? 'md:flex justify-center' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-600 mb-6 ${index % 2 === 0 ? 'text-start' : ''}`}>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className={`inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r ${project.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              
              {/* Connection to main timeline */}
              <div className="w-8 h-8 md:w-10 md:h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full border-4 border-indigo-900 z-10" aria-hidden="true"></div>
              
              <div className={`w-2/3 md:w-3/3 mb-6 md:mb-0 relative z-10 ${index % 2 === 0 ? 'md:pl-8 md:flex text-start' : 'md:pr-8 md:flex justify-end'}`}>
                <motion.div
                  className="relative overflow-hidden rounded-lg shadow-lg w-40 h-32"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
