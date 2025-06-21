import React from 'react';

const Details = () => {
  const skills = [
    'React', 'JavaScript (ES6+)', 'Three.js', 'WebGL', 'GLSL', 
    'HTML5', 'CSS3 / SASS', 'Framer Motion', 'GSAP', 'Node.js', 
    'UI Design', 'UX Design', 'Linux', 'Python'
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - About Text */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-primary"></div>
            <div className="w-8 h-8 border-2 border-primary rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">About Me</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm Emir, currently living in Turkey, working as both a freelancer and a student. My work spans UX design, UI animations, and Cyber Security. Being comfortable with code enables me to rapidly prototype and validate ideas and experiences.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            In my spare time, I enjoy listening to music, playing video games, and creating mods. I'm always open to exploring new projects, so feel free to reach out if you'd like to connect.
          </p>
          <a href="#contact" className="group inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-light transition-colors duration-300">
            Send me a message
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold">Skills & Software</h3>
          <p className="text-gray-400 text-lg">
            I'm proficient in a wide range of design and development tools. Here are some of the key technologies I work with:
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map(skill => (
              <div
                key={skill}
                className="px-4 py-2 bg-dark-2 border border-primary/30 rounded-md text-primary font-medium cursor-default hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details; 