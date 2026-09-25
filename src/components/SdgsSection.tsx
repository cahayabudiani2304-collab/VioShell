import React from 'react';
import { Globe, HeartPulse, Recycle, Check, ArrowRight, ShieldCheck, Leaf } from 'lucide-react';
import { SDGS_DATA } from '../data/mockData';

export const SdgsSection: React.FC = () => {
  return (
    <section id="sdgs" className="py-14 sm:py-20 lg:py-24 bg-[#090B0E] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Keberlanjutan & SDGs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Kontribusi Nyata terhadap Tujuan Pembangunan Berkelanjutan (SDGs)
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Inovasi VioShell mengintegrasikan ketahanan kesehatan masyarakat dengan valorisasi limbah organik lokal dalam kerangka ekonomi sirkular berkelanjutan.
          </p>
        </div>

        {/* 2 SDG Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* SDG 3: Good Health and Well-being */}
          <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-[#4C9F38]/40 flex flex-col justify-between shadow-xl">
            <div>
              {/* SDG Badge */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#4C9F38] text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-[#4C9F38]/25 shrink-0">
                  <span className="text-xl sm:text-2xl font-mono leading-none">3</span>
                  <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4C9F38] font-mono">
                    Tujuan PBB Poin 3
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Good Health and Well-being
                  </h3>
                  <p className="text-xs font-semibold text-slate-400">
                    Kehidupan Sehat dan Sejahtera
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 sm:mb-6 font-medium">
                Mencegah keracunan pangan massal dan melindungi generasi muda dari risiko kontaminasi toksin bakteri pembusuk melalui sistem deteksi non-kontak yang akurat.
              </p>

              <div className="space-y-3">
                {SDGS_DATA[0].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3 bg-[#090B0E] p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/10">
                    <Check className="w-4 h-4 text-[#4C9F38] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Fokus: Keamanan Pangan Anak & Siswa</span>
              <span className="font-mono text-[#4C9F38] font-bold">Target 3.9</span>
            </div>
          </div>

          {/* SDG 12: Responsible Consumption and Production */}
          <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-[#BF8B2E]/40 flex flex-col justify-between shadow-xl">
            <div>
              {/* SDG Badge */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#BF8B2E] text-white flex flex-col items-center justify-center font-bold shadow-lg shadow-[#BF8B2E]/25 shrink-0">
                  <span className="text-xl sm:text-2xl font-mono leading-none">12</span>
                  <Recycle className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#BF8B2E] font-mono">
                    Tujuan PBB Poin 12
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Responsible Consumption and Production
                  </h3>
                  <p className="text-xs font-semibold text-slate-400">
                    Konsumsi dan Produksi yang Bertanggung Jawab
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 sm:mb-6 font-medium">
                Mengubah 2,8 ton per bulan limbah cangkang telur dari 14 SPPG lokal menjadi produk bernilai teknologi tinggi dan mengurangi pemborosan makanan (food waste).
              </p>

              <div className="space-y-3">
                {SDGS_DATA[1].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 sm:gap-3 bg-[#090B0E] p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/10">
                    <Check className="w-4 h-4 text-[#BF8B2E] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Fokus: Valorisasi Limbah & Sirkular</span>
              <span className="font-mono text-[#BF8B2E] font-bold">Target 12.5</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
