
import { useState } from 'react';
import { Overview } from './components/Overview';
import { Story } from './components/Story';
import { Sprout, Sparkles } from 'lucide-react';

function App() {
  const [tab, setTab] = useState<'overview' | 'story'>('overview');

  return (
    <div className="min-h-screen text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center md:text-left animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-mono font-bold tracking-widest uppercase">
            Gemini 3 Pro Edition
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-green-300">
            Pohjois-Karjala
          </h1>
          <p className="text-xl text-emerald-100/60 font-light max-w-2xl">
            Tulevaisuuden tilannekuva ja kehitysnäkymät vuodelle 2025.
            Analysoitu tekoälyllä, visualisoitu tunteella.
          </p>
        </header>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setTab('overview')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${tab === 'overview'
              ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            <Sprout className="w-5 h-5" />
            Yleiskuva
          </button>
          <button
            onClick={() => setTab('story')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${tab === 'story'
              ? 'bg-secondary text-white shadow-lg shadow-secondary/25 scale-105'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
          >
            <Sparkles className="w-5 h-5" />
            Projektin tarina
          </button>
        </nav>

        {/* Content Area */}
        <main className="min-h-[500px]">
          {tab === 'overview' ? <Overview /> : <Story />}
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 font-mono text-xs">
          <p>LÄHDE: POHJOIS-KARJALAN TILANNE- JA KEHITYSKUVA (JOULUKUU 2024)</p>
          <p className="mt-2">OPTIMOITU VERCEL EDGE -VERKKOON</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
