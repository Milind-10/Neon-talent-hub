import { Lightbulb, Network, Settings2 } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-neon-blue" />,
      title: 'Expertise',
      description: 'We boast expert matchmakers with experience in all levels of the recruitment process, focusing on the intricate needs of businesses.',
    },
    {
      icon: <Network className="w-8 h-8 text-neon-purple" />,
      title: 'Network',
      description: 'Our network is unparalleled. We communicate proactively to either connect within our community and focus on talent that matches perfectly.',
    },
    {
      icon: <Settings2 className="w-8 h-8 text-neon-pink" />,
      title: 'Process',
      description: 'We document a structured and streamlined process to drive efficiency and optimize matching, ensuring rapid and impactful results.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
             <div className="w-8 h-8 bg-white dark:bg-slate-900 rounded-md"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Neon Talent Hub
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Why Neon Talent Hub: Expertise, expert matchmaking and process.
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-2 text-slate-400 dark:text-slate-600">
             <div className="h-px w-16 bg-slate-200 dark:bg-slate-800"></div>
             <Lightbulb className="w-5 h-5" />
             <Network className="w-5 h-5" />
             <Settings2 className="w-5 h-5" />
             <div className="h-px w-16 bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center mb-6 relative group overflow-hidden transition-transform hover:-translate-y-1">
                 <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
