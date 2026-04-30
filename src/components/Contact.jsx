import { Share2, MessageCircle, Camera, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full h-1.5 mb-16 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"></div>

        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Contact Us
            </h3>
            <div className="flex flex-col items-center space-y-6 text-lg">
               <a href="mailto:gauri.pandya@neontalenthub.com" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-neon-blue transition-colors">
                  <Mail className="w-6 h-6 text-neon-blue" />
                  <span>gauri.pandya@neontalenthub.com</span>
               </a>
               <a href="tel:+919574590810" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-neon-pink transition-colors">
                  <MessageCircle className="w-6 h-6 text-neon-pink" />
                  <span>+91 9574590810</span>
               </a>
               <a href="https://www.linkedin.com/company/neon-talent-hub/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-neon-purple transition-colors">
                  <Share2 className="w-6 h-6 text-neon-purple" />
                  <span>LinkedIn</span>
               </a>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Copyright © {new Date().getFullYear()}, Neon Talent Hub. Help
          </p>
        </div>
      </div>
    </footer>
  );
}
