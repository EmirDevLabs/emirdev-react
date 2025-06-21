import React from 'react';

const highlights = [
  {
    title: 'New Project: Portfolio v2',
    description: 'Developed the new version of my personal portfolio site from scratch using React and Tailwind. Added modern animations and dark mode support.',
    tag: 'Frontend',
  },
  {
    title: 'Open Source Contribution',
    description: 'Contributed a new theme and several accessibility improvements to a popular open source UI library.',
    tag: 'OSS',
  },
  {
    title: 'Recently Learned: Zustand',
    description: 'Started using Zustand for global state management instead of Redux. Much simpler and faster!',
    tag: 'Learning',
  },
];

const Highlights = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Highlights</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A selection of my recent projects, open source contributions, and things I&apos;ve learned.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-2 border border-dark-4 rounded-xl p-7 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold tracking-wide group-hover:bg-primary/20 transition-colors duration-200">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h3>
              <p className="text-gray-400 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights; 