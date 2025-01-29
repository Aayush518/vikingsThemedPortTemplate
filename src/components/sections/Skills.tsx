import React from 'react';
import { Axe, Shield, Compass, Sword, Anchor, Map, Scroll, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillCard } from '../ui/SkillCard';

export const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Axe className="w-12 h-12" />,
      title: "Frontend Warfare",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      description: "Crafting interfaces with the precision of a master blacksmith",
      color: "from-red-500 to-orange-500",
      proficiency: 95
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Backend Defense",
      skills: ["Node.js", "Python", "Database Design"],
      description: "Building fortified systems that withstand the test of time",
      color: "from-blue-500 to-cyan-500",
      proficiency: 90
    },
    {
      icon: <Sword className="w-12 h-12" />,
      title: "Battle Testing",
      skills: ["Jest", "Cypress", "Testing Library"],
      description: "Ensuring victory through rigorous combat training",
      color: "from-purple-500 to-pink-500",
      proficiency: 85
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Strategic Tools",
      skills: ["Git", "Docker", "AWS"],
      description: "Navigating the digital seas with battle-tested tools",
      color: "from-green-500 to-emerald-500",
      proficiency: 88
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "DevOps Mastery",
      skills: ["CI/CD", "Kubernetes", "Terraform"],
      description: "Anchoring deployments with unwavering stability",
      color: "from-yellow-500 to-amber-500",
      proficiency: 92
    },
    {
      icon: <Map className="w-12 h-12" />,
      title: "Project Leadership",
      skills: ["Agile", "Team Building", "Strategy"],
      description: "Charting the course to digital victory",
      color: "from-indigo-500 to-violet-500",
      proficiency: 94
    },
    {
      icon: <Scroll className="w-12 h-12" />,
      title: "Ancient Knowledge",
      skills: ["Algorithms", "Data Structures", "System Design"],
      description: "Wielding the wisdom of the code ancestors",
      color: "from-rose-500 to-pink-500",
      proficiency: 87
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Tool Crafting",
      skills: ["Webpack", "Vite", "Babel"],
      description: "Forging the weapons of modern development",
      color: "from-teal-500 to-emerald-500",
      proficiency: 89
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/norse.png')] opacity-5"
             style={{ backgroundBlendMode: 'overlay', mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle className="justify-center">
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">
              Battle Skills
            </span>
          </SectionTitle>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Forged in the fires of countless battles, these skills have been honed to perfection
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Raiding Expertise",
              items: ["Frontend Development", "UI/UX Design", "Mobile Apps"],
              icon: <Axe className="w-8 h-8" />
            },
            {
              title: "Defense Tactics",
              items: ["Security", "Performance", "Testing"],
              icon: <Shield className="w-8 h-8" />
            },
            {
              title: "Battle Strategy",
              items: ["Architecture", "Planning", "Leadership"],
              icon: <Sword className="w-8 h-8" />
            }
          ].map((category, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-gray-800 p-6 rounded-lg border border-yellow-600/20">
                <div className="text-yellow-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-norse">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-center space-x-2"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};