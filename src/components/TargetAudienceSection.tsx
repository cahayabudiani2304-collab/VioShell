import React from 'react';
import { Building2, UtensilsCrossed, Store, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/mockData';

export const TargetAudienceSection: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Penyelenggara Pangan Skala Besar':
        return <Building2 className="w-6 h-6 text-indigo-400" />;
      case 'Jasa Katering & Resepsi':
        return <UtensilsCrossed className="w-6 h-6 text-teal-400" />;
      case 'UMKM Pangan Olahan & Frozen Food':
        return <Store className="w-6 h-6 text-amber-400" />;
      default:
        return <Home className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="target" className="py-14 sm:py-20 lg:py-24 bg-[#090B0E] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Target Pengguna & Rantai Distribusi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Penerapan Strategis VioShell dalam Ekosistem Pangan
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Dirancang secara adaptif untuk memenuhi standar keamanan rantai pasok masif nasional, produksi UMKM olahan, hingga kebutuhan perlindungan pangan rumah tangga.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TARGET_AUDIENCES.map((audience, idx) => (
            <div
              key={idx}
              className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-400/40 transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
                  {getIcon(audience.title)}
                </div>

                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                  Sektor #{idx + 1}
                </span>

                <h3 className="text-lg font-bold text-white leading-snug mb-1">
                  {audience.title}
                </h3>

                <p className="text-xs font-semibold text-teal-300 mb-3">
                  {audience.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {audience.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="flex items-start gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="font-medium">{audience.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
