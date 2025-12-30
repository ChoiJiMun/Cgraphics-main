
import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import PortfolioChat from './components/PortfolioChat';
import Footer from './components/Footer';
import { PROJECTS, SKILLS } from './constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight, Download, Globe, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-medium tracking-tighter italic serif text-black">
                CRAFTING<br />
                DIGITAL<br />
                <span className="text-gray-300 not-italic font-normal">EXPERIENCE</span>
              </h1>
              <div className="max-w-xs mb-4">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Independent UI/UX Designer & Product Strategist. Focused on creating emotive digital journals and intuitive interfaces for forward-thinking brands.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for projects
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full aspect-[21/9] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
                alt="Studio setup" 
                className="w-full h-full object-cover grayscale brightness-110"
              />
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-6 border border-white/20 text-white rounded-lg hidden md:block">
                <p className="text-xs uppercase tracking-[0.2em] font-medium mb-1">Current Focus</p>
                <p className="text-xl italic serif">Immersive Visual Storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="works" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block">01 / Selection</span>
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter italic serif">Works.</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm uppercase tracking-widest leading-loose">
              A curated selection of projects spanning fintech, lifestyle, and branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
          
          <div className="mt-48 flex flex-col items-center">
            <button className="group relative flex items-center gap-4 text-2xl font-medium tracking-tight">
              View All Case Studies 
              <span className="p-3 bg-black text-white rounded-full transition-transform group-hover:translate-x-4">
                <ArrowRight size={24} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-32 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold mb-6 block">02 / Narrative</span>
              <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12 serif italic">
                Beyond the pixels, <br />
                <span className="text-gray-600 not-italic">lies the purpose.</span>
              </h2>
              <div className="space-y-8 text-lg font-light text-gray-400 leading-relaxed max-w-xl">
                <p>
                  Design is not just about aesthetic refinement; it's about translating complex problems into simple, human-centric solutions. With over 8 years of experience, I've helped startups and established brands define their digital identity.
                </p>
                <p>
                  My approach is rooted in deep user research and a meticulous attention to visual storytelling. I believe every interface should tell a story and every interaction should feel intentional.
                </p>
              </div>
              
              <div className="mt-16 flex flex-wrap gap-12">
                <div>
                  <h4 className="text-4xl font-bold mb-2 serif italic text-blue-500">8+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Years Exp.</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold mb-2 serif italic text-blue-500">50+</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Global Projects</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold mb-2 serif italic text-blue-500">12</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Design Awards</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-medium tracking-tight mb-8 flex items-center gap-3 italic serif">
                <Sparkles size={20} className="text-blue-500" /> Proficiency Index
              </h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SKILLS} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={120} 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9ca3af', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                    />
                    <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                      {SKILLS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 1 ? '#3b82f6' : '#333'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <button className="flex items-center justify-center gap-3 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-all">
                  <Download size={16} /> Get Resume
                </button>
                <button className="flex items-center justify-center gap-3 py-4 bg-transparent border border-gray-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all">
                  <Globe size={16} /> My Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services/Marquee */}
      <section className="py-24 border-y border-gray-100 overflow-hidden bg-white">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-12 px-12">
              <span className="text-8xl font-black tracking-tighter italic serif text-transparent stroke-text opacity-10">UI/UX STRATEGY</span>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <span className="text-8xl font-black tracking-tighter italic serif text-black">VISUAL IDENTITY</span>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <span className="text-8xl font-black tracking-tighter italic serif text-transparent stroke-text opacity-10">PRODUCT DESIGN</span>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <PortfolioChat />

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #000;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
