import { color, motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaGithub, FaPython, FaDatabase, FaJava, FaFigma } from 'react-icons/fa'
const skills = [
  { name: 'Python', icon: FaPython, color: 'text-green-400' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-red-500' },
  { name: 'CSS3', icon: FaCss3, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-black' },
  { name: 'Flask', icon: FaPython, color: 'text-green-800' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500' }, 
  { name: 'Databases', icon: FaDatabase, color: 'text-purple-500' },
  { name: 'Django', icon: FaPython, color: 'text-green-700' },
  {name:'Figma', icon:FaFigma}
];

export default function Skills() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.div
            className="flex space-x-16"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex flex-col items-center w-32">
                <skill.icon className={`text-6xl mb-4 max-sm:max-h-10 ${skill.color}`} />
                <span className="text-lg text-gray-900 text-center max-sm:text-sm">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
