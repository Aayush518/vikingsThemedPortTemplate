import React from 'react';
import { Ship, Sword, Axe, Shield, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { VikingShip } from '../artwork/VikingShip';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const achievements = [
    { number: '100+', label: 'Raids Completed' },
    { number: '50+', label: 'Kingdoms Conquered' },
    { number: '1M+', label: 'Lines of Code' },
    { number: '∞', label: 'Glory Achieved' },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Began the Journey',
      description: 'Like young Bjorn, started the path of a warrior',
      icon: <Ship className="w-6 h-6" />,
    },
    {
      year: '2020',
      title: 'First Conquest',
      description: 'Led the first successful raid into frontend territories',
      icon: <Sword className="w-6 h-6" />,
    },
    {
      year: '2021',
      title: 'Backend Mastery',
      description: 'Conquered the seas of server-side development',
      icon: <Axe className="w-6 h-6" />,
    },
    {
      year: '2022',
      title: 'Shield Wall Formation',
      description: 'Built impenetrable systems and architectures',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      year: '2023',
      title: 'New Horizons',
      description: 'Exploring uncharted territories in tech',
      icon: <Compass className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/viking-ship.png')] opacity-5"></div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Hero Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg text-center transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="text-4xl font-bold text-yellow-500 font-norse mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-400">{achievement.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <SectionTitle>The Saga Begins</SectionTitle>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Like Bjorn Ironside following in the footsteps of Ragnar
                Lothbrok, I forge my path in the digital realm. Each project is
                a raid into new territories, each line of code a battle won.
                With the wisdom of the gods and the strength of a warrior, I
                build digital kingdoms that stand the test of time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-600/20">
                  <Ship className="w-8 h-8 mb-4 text-yellow-500" />
                  <h3 className="font-bold mb-2 text-xl font-norse">
                    Explorer
                  </h3>
                  <p className="text-gray-400">
                    Venturing into unknown technological waters with the courage
                    of a true Viking
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-yellow-600/20">
                  <Sword className="w-8 h-8 mb-4 text-yellow-500" />
                  <h3 className="font-bold mb-2 text-xl font-norse">Warrior</h3>
                  <p className="text-gray-400">
                    Fighting through complex challenges with the strength of
                    Thor himself
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Updated Image Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 w-full bg-gray-900 p-8">
                  <VikingShip className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-6 rounded-lg shadow-xl border border-yellow-600/20">
                <p className="text-yellow-500 font-bold text-2xl font-norse">
                  5+ Years
                </p>
                <p className="text-gray-400">Digital Raiding</p>
              </div>
            </motion.div>
          </div>

          {/* Updated Timeline Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold mb-10 text-center font-norse">
              The Path of Glory
            </h3>
            <div className="relative">
              {/* Timeline Center Line with Gradient */}
              <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600 via-yellow-800 to-transparent hidden md:block"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full relative">
                      {/* Content */}
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? 'pr-12' : 'pl-12 ml-auto'
                        }`}
                      >
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
                          <div className="relative bg-gray-900 p-6 rounded-lg border border-yellow-600/20">
                            <span className="text-yellow-500 font-norse text-2xl block mb-2">
                              {event.year}
                            </span>
                            <h4 className="text-xl font-bold mb-2">
                              {event.title}
                            </h4>
                            <p className="text-gray-400">{event.description}</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          className="relative z-10"
                        >
                          <div className="w-16 h-16 rounded-full bg-gray-900 border-4 border-yellow-600 flex items-center justify-center text-yellow-500 shadow-lg shadow-yellow-600/20">
                            {event.icon}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
                        <div className="relative bg-gray-900 p-6 rounded-lg border border-yellow-600/20">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 border-4 border-yellow-600 flex items-center justify-center text-yellow-500">
                              {event.icon}
                            </div>
                            <span className="text-yellow-500 font-norse text-2xl">
                              {event.year}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold mb-2">
                            {event.title}
                          </h4>
                          <p className="text-gray-400">{event.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};
