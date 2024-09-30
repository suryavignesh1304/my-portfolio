import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 max-sm:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center max-sm:text-2xl">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center max-sm:flex-col">
          <motion.img
            src="/about.webp?height=300&width=300"
            alt="Surya Vignesh Kapuganti"
            className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-12 max-sm:w-40 max-sm:h-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="max-w-lg max-sm:text-sm max-sm:px-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4 max-sm:mb-2 max-sm:text-base">
              Hello! I'm a passionate Computer Science student at JNTUH-UCEM, with a keen interest in web development and artificial intelligence. I love tackling complex problems and turning ideas into reality through code.
            </p>
            <p className="text-lg mb-4 max-sm:mb-2 max-sm:text-base">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            <p className="text-lg max-sm:text-base">
              I'm always eager to learn and grow, both as a developer and as a person. I believe in the power of technology to make a positive impact on the world, and I'm excited to be part of that journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
