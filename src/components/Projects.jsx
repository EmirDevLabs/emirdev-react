import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projectData = [
  {
    title: 'A technology without borders',
    description: 'Empowering ideas to transcend geography, language, and limitations — crafting digital experiences that connect people, not just devices.',
    link: '#'
  },

];

const matrixText = `> Booting main system...\n> Kernel loaded successfully.\n> Initializing network stack...\n> IPv6 address assigned.\n> Establishing connection to server_ZION...\n> Connection secured. Encryption: AES-256\n> Authenticating user: N3O...\n> ACCESS GRANTED\n\n> Running project_showcase.exe...\n\n// Designing the future of education\n// Platform for better online courseware\n\n[00:01.337] - Compiling modules...\n[00:01.998] - Rendering UI components...\n[00:02.541] - Fetching data from mainframe...\n[00:03.112] - All systems operational.\n> Ready.`;

const Projects = () => {
  const currentProject = projectData[0];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-primary"></div>
              <div className="w-8 h-8 border-2 border-primary rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-lg mx-auto lg:mx-0">
              {currentProject.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
              {currentProject.description}
            </p>
            <a href="#details">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-dark font-semibold rounded-md"
              >
                View project
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20}/>
              </motion.button>
            </a>
          </motion.div>

          {/* Right Column: Matrix Code Block */}
          <motion.div 
            className="flex justify-center items-center h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div style={{
              color: '#0f0',
              background: 'black',
              fontFamily: 'monospace',
              padding: '24px',
              fontSize: '16px',
              borderRadius: '10px',
              boxShadow: '0 4px 32px #000a',
              minWidth: 340,
              maxWidth: 420,
              minHeight: 220,
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
              border: '2px solid #0f0',
            }}>
              <pre style={{ margin: 0 }}>{matrixText}</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

 