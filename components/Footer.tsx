
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8 italic serif">
              Have an idea?<br />
              <span className="text-gray-500">Let's build it.</span>
            </h2>
            <a href="mailto:hello@alexcarter.design" className="text-2xl md:text-3xl font-light hover:text-gray-400 transition-colors flex items-center gap-4">
              hello@alexcarter.design <ArrowRight size={32} />
            </a>
          </div>
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Navigation</h4>
                <ul className="flex flex-col gap-4">
                  <li><a href="#works" className="text-sm hover:text-gray-400 transition-colors">Selected Works</a></li>
                  <li><a href="#about" className="text-sm hover:text-gray-400 transition-colors">About Journal</a></li>
                  <li><a href="#" className="text-sm hover:text-gray-400 transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Socials</h4>
                <ul className="flex flex-col gap-4">
                  <li><a href="#" className="text-sm hover:text-gray-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-sm hover:text-gray-400 transition-colors">Dribbble</a></li>
                  <li><a href="#" className="text-sm hover:text-gray-400 transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
            © 2024 Alex Carter Design / All Rights Reserved
          </p>
          <div className="flex gap-8">
            <span className="text-gray-500 text-xs uppercase tracking-[0.2em]">Based in London / Tokyo</span>
            <span className="text-gray-500 text-xs uppercase tracking-[0.2em]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
