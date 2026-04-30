import { Search, Settings, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-neon-blue" />,
      title: 'Executive Search',
      description: 'Executive search and retained placements are command on deep networking, metrics, and executive search relationships for evaluating talent.',
    },
    {
      icon: <Settings className="w-8 h-8 text-neon-purple" />,
      title: 'Technical Recruitment',
      description: 'Technical recruitment requires specialized workflows, and deep knowledge to evaluate candidates against exacting technical recruitment standards.',
    },
    {
      icon: <Building2 className="w-8 h-8 text-neon-pink" />,
      title: 'Placement Services',
      description: 'Embracing core values and commitments to orchestrate partnerships with businesses to fulfill vital placement services.',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
       <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="w-12 h-12 mx-auto mb-6 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)]">
             <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Recruitment Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Boutique headhunting. Elite matchmaking. Rapid results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800/50 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:border-neon-purple/50 dark:hover:border-neon-purple/50 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/5 to-neon-pink/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700 group-hover:border-neon-purple/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-shadow">
             Schedule a consultation
           </a>
        </div>
      </div>
    </section>
  );
}
