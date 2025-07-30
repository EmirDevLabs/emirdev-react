import React, { useState } from 'react';
import { Mail, Instagram, Github, X, Copy } from 'lucide-react';

const socials = [
  {
    icon: <Instagram size={28} />, label: 'Instagram', href: 'https://instagram.com/emirdevlabs', color: '#E1306C',
  },
  {
    icon: <Github size={28} />, label: 'GitHub', href: 'https://github.com/EmirDevLabs', color: '#fff',
  },
  {
    icon: <X size={28} />, label: 'X', href: 'https://x.com/EmirDevLabs', color: '#fff',
  },
];

const email = 'Not Available';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center gap-10">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out via email or connect with me on social media!
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              style={{ color: s.color }}
            >
              <span className="bg-dark-2 p-4 rounded-full border border-dark-4 shadow-lg group-hover:scale-110 transition-transform duration-200">
                {s.icon}
              </span>
              <span className="mt-2 text-sm text-gray-300 group-hover:text-primary transition-colors duration-200">{s.label}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-dark-2 border border-dark-4 rounded-lg px-5 py-3 shadow-md">
          <Mail size={22} className="text-primary" />
          <span className="font-mono text-gray-200 select-all text-base">{email}</span>
          <button
            onClick={handleCopy}
            className="ml-2 p-1 rounded hover:bg-dark-4 transition-colors"
            title="Copy email"
          >
            <Copy size={18} />
          </button>
          {copied && <span className="ml-2 text-primary text-sm">Copied!</span>}
        </div>
      </div>
    </section>
  );
};

export default Contact; 