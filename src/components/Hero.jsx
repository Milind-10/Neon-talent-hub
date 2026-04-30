export default function Hero() {
  const partners = ['SaaS', 'Product Companies', 'Startups', 'Enterprise', 'Fintech', 'Healthtech'];

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-neon-pink/20 dark:bg-neon-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Elevating Executive Placement in the <span className="gradient-text">New Era of Work.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Boutique Headhunting. Expert Matchmaking. Rapid Results.
        </p>
        
        <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all transform hover:-translate-y-1">
          Schedule a consultation
        </a>

        <div id="companies" className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800 w-full scroll-mt-24">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest font-semibold text-center">
            Trusted By Industry Leaders in IT Recruiting
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 max-w-6xl mx-auto px-4">
            {partners.map((partner) => (
              <div key={partner} className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-300 flex items-center justify-center text-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
