import React from 'react';
import { Beaker, CheckCircle2, FileText, Microscope, Award, FileCheck, ShieldCheck } from 'lucide-react';
import { UNILA_COA_DATA } from '../data/mockData';

export const LabValidationSection: React.FC = () => {
  return (
    <section id="validasi" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Beaker className="w-3.5 h-3.5" />
            <span>Verifikasi Ilmiah Independen (Eksternal)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Hasil Uji Laboratorium Terpadu Universitas Lampung
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Data empiris pengujian spektroskopi FTIR dan spektrofotometri UV-Vis yang membuktikan keberhasilan imobilisasi antosianin pada serbuk cangkang telur dengan Certificate of Analysis resmi.
          </p>
        </div>

        {/* 2 Analytical Instrument Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* 1. Spektrofotometri UV-Vis (COA No. 104) */}
          <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
                  Spektrofotometri UV-Vis (pH-Diferensial)
                </span>
                <span className="text-xs text-sky-400 font-mono bg-blue-950/70 px-2.5 py-0.5 rounded border border-blue-800/50">
                  COA: {UNILA_COA_DATA.uvVis.noCertificate}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Kuantifikasi Konsentrasi Pigmen Antosianin Bunga Telang
              </h3>

              <div className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl my-4 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Kadar Antosianin (Bobot Kering):
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">Valid</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-teal-300 mt-1">
                  {UNILA_COA_DATA.uvVis.concentrationSample}
                </div>
                <div className="text-xs text-slate-400 mt-2 font-mono flex items-center justify-between pt-2 border-t border-white/5">
                  <span>Konsentrasi Larutan: <strong className="text-white">{UNILA_COA_DATA.uvVis.concentrationSolution}</strong></span>
                  <span>Setara Sianidin-3-Glukosida</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">Validitas Metode:</strong> Terkonfirmasi melalui rasio absorbansi pada pH 1,0 (0,842) yang jauh lebih tinggi dibandingkan pH 4,5 (0,104).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">Kontras Visual Tinggi:</strong> Konsentrasi 6,16 mg/g menghasilkan perubahan kromatik tajam yang kasat mata saat mendeteksi uap gas amina basi.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Selesai: {UNILA_COA_DATA.uvVis.completedDate}</span>
              <span className="text-teal-300">Disahkan: {UNILA_COA_DATA.uvVis.technicalManager}</span>
            </div>
          </div>

          {/* 2. FTIR Spectrosopy (COA No. 105) */}
          <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-white/10 shadow-xl flex flex-col justify-between hover:border-teal-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/60">
                  FTIR (Pelet KBr / Potassium Bromide)
                </span>
                <span className="text-xs text-sky-400 font-mono bg-blue-950/70 px-2.5 py-0.5 rounded border border-blue-800/50">
                  COA: {UNILA_COA_DATA.ftir.noCertificate}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Analisis Spektrum FTIR & Pembuktian Imobilisasi Molekuler
              </h3>

              <div className="bg-[#090B0E] p-3 sm:p-4 rounded-2xl my-4 border border-white/10 shadow-inner overflow-x-auto">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Tabel Pergeseran Puncak Serapan Antarbahan (Lampiran Hal. 19):
                </span>
                <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 text-[10px]">
                      <th className="pb-1.5">Pita (cm⁻¹)</th>
                      <th className="pb-1.5">Cangkang</th>
                      <th className="pb-1.5">Telang</th>
                      <th className="pb-1.5 text-cyan-300">VioShell</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {UNILA_COA_DATA.ftir.tablePeaks.map((peak, pI) => (
                      <tr key={pI}>
                        <td className="py-1.5 text-slate-400">{peak.waveRange.split(' ')[0]}</td>
                        <td className="py-1.5">{peak.cangkang}</td>
                        <td className="py-1.5">{peak.telang}</td>
                        <td className="py-1.5 font-bold text-teal-300">{peak.vioshell}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">Ikatan Hidrogen Terbentuk:</strong> Pita hidroksil bergeser dari 3410/3385 cm⁻¹ menjadi <span className="text-cyan-300 font-mono font-bold">3320 cm⁻¹</span>, membuktikan antosianin terikat kuat pada CaCO₃ dan tidak mudah luntur (leaching).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white font-semibold">Karakteristik Komposit:</strong> Munculnya serentak pita karbonat (1422 cm⁻¹) dan pita aromatik (1620 cm⁻¹) memastikan kedua bahan bersatu padu dalam satu film.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Selesai: {UNILA_COA_DATA.ftir.completedDate}</span>
              <span className="text-indigo-300">Disahkan: {UNILA_COA_DATA.ftir.technicalManager}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
