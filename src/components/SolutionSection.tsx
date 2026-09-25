import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, Beaker, Check, Cpu, Eye, Microscope, FileCheck, DollarSign, Wrench, ShieldAlert, ArrowRight } from 'lucide-react';
import { MATERIALS_INFO, RAB_ITEMS, TOTAL_RAB_COST, TOOLS_LIST, MATERIALS_LIST, IMPLEMENTATION_STEPS, SWOT_DATA } from '../data/mockData';

export const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'formula' | 'process' | 'mechanism' | 'swot'>('formula');

  return (
    <section id="solusi" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Versi 1: Inovasi Teknologi & Sains Biokomposit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            VioShell: Imobilisasi Antosianin Telang pada Matriks CaCO₃ Mikropori
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Kombinasi cerdas antara sifat adsorpsi mikropori Kalsium Karbonat cangkang telur dan kepekaan pH pigmen antosianin bunga telang (<em className="italic font-medium text-indigo-300">Clitoria ternatea</em>) menghasilkan biosensor cerdas non-toksik berukuran 3×3 cm.
          </p>
        </div>

        {/* Tab Navigation for Deep Exploration */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0">
          <div className="bg-[#11141A] p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-white/10 shadow-lg inline-flex gap-1 sm:gap-1.5 max-w-full">
            <button
              id="tab-formula-btn"
              onClick={() => setActiveTab('formula')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'formula'
                  ? 'bg-gradient-to-r from-[#2A246B] to-[#4338CA] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Formulasi & RAB Biaya
            </button>
            <button
              id="tab-process-btn"
              onClick={() => setActiveTab('process')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'process'
                  ? 'bg-gradient-to-r from-[#2A246B] to-[#4338CA] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              5 Tahapan Proses & Alat
            </button>
            <button
              id="tab-mechanism-btn"
              onClick={() => setActiveTab('mechanism')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'mechanism'
                  ? 'bg-gradient-to-r from-[#2A246B] to-[#4338CA] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Mekanisme Gas TVB-N
            </button>
            <button
              id="tab-swot-btn"
              onClick={() => setActiveTab('swot')}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                activeTab === 'swot'
                  ? 'bg-gradient-to-r from-[#2A246B] to-[#4338CA] text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Analisis SWOT & Improvement
            </button>
          </div>
        </div>

        {/* Tab 1: Formulasi Biokomposit & RAB Biaya */}
        {activeTab === 'formula' && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* 4 Materials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {MATERIALS_INFO.map((mat, idx) => (
                <div
                  key={idx}
                  className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-400/40 transition-all"
                >
                  <div>
                    <span className="text-[10px] font-bold text-indigo-300 bg-indigo-950/60 border border-indigo-700/60 px-2 py-0.5 rounded uppercase tracking-wider">
                      {mat.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mt-3 mb-1">
                      {mat.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-teal-300 mb-3">
                      {mat.percentageOrSpec}
                    </div>
                    <p className="text-xs font-medium text-slate-300 mb-2">
                      <strong className="text-white font-semibold">Peran:</strong> {mat.role}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {mat.scientificExplanation}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Komponen #{idx + 1}</span>
                    <span className="text-emerald-400 font-medium">Bahan Alami Lokal</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Official RAB Table from Paper AHM Best Student 2026 */}
            <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                      Tabel Rencana Anggaran Biaya (RAB) Resmi Makalah AHM
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    Estimasi Biaya Produksi per 25 Lembar Ukuran 3×3 cm
                  </h3>
                </div>
                <div className="bg-emerald-950/70 border border-emerald-500/40 px-3.5 py-1.5 rounded-xl text-center">
                  <span className="text-[10px] text-emerald-300 uppercase font-mono block">Biaya per Lembar</span>
                  <span className="text-lg font-mono font-extrabold text-white">Rp 56 <span className="text-xs font-normal text-slate-300">/ pcs</span></span>
                </div>
              </div>

              <div className="overflow-x-auto -mx-1 sm:mx-0">
                <table className="w-full min-w-[500px] text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 text-xs font-mono uppercase">
                      <th className="py-2.5 px-3">Komponen Biaya</th>
                      <th className="py-2.5 px-3">Kebutuhan per 25 Lembar (3×3 cm)</th>
                      <th className="py-2.5 px-3 text-right">Estimasi Biaya (Rp)</th>
                      <th className="py-2.5 px-3">Keterangan Sumber</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono text-xs">
                    {RAB_ITEMS.map((item, i) => (
                      <tr key={i} className="hover:bg-white/5">
                        <td className="py-2.5 px-3 text-white font-sans font-semibold">{item.component}</td>
                        <td className="py-2.5 px-3 text-cyan-300">{item.qty}</td>
                        <td className="py-2.5 px-3 text-right font-bold text-emerald-300">{item.cost > 0 ? `Rp ${item.cost.toLocaleString('id-ID')}` : 'Rp 0 (Gratis)'}</td>
                        <td className="py-2.5 px-3 text-slate-400 font-sans text-[11px]">{item.note}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-950/30 border-t-2 border-emerald-500/50 font-bold">
                      <td className="py-3 px-3 text-white font-sans">Total Biaya Produksi</td>
                      <td className="py-3 px-3 text-emerald-300">25 Lembar 3×3 cm</td>
                      <td className="py-3 px-3 text-right text-emerald-300 text-sm">Rp {TOTAL_RAB_COST.toLocaleString('id-ID')}</td>
                      <td className="py-3 px-3 text-emerald-400 font-sans text-xs">Ekonomis & Ramah Lingkungan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                * Ekstrak bunga telang dan limbah cangkang telur diperoleh secara gratis dari lingkungan sekitar dan 14 unit SPPG Bandar Sribhawono sehingga dicatat sebagai modal non-tunai yang menekan biaya secara signifikan.
              </p>
            </div>

            {/* Architecture callout: How it's placed */}
            <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-950/70 border border-indigo-800/60 px-2.5 py-1 rounded-md">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>Prinsip Keamanan & Non-Kontak</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Dimensi 3×3 cm: Ditempel Pada Bagian Dalam Tutup Kemasan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Lembaran indikator biokomposit VioShell dicetak dengan dimensi presisi <strong className="text-white font-semibold">3×3 cm</strong> dengan ketebalan optimal. Label ditempelkan pada bagian dalam tutup kemasan (headspace), sehingga <span className="text-teal-300 font-semibold">tidak bersentuhan langsung dengan makanan</span>.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">Bebas migrasi zat kimia sintesis ke makanan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">Dapat dilihat jelas oleh konsumen dari luar wadah transparan</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">Hanya Rp 56 per lembar (memanfaatkan limbah lokal)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 font-medium">Biodegradable dan ramah lingkungan</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#090B0E] text-white rounded-2xl p-5 border border-white/10 text-center shadow-inner">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#2A246B] via-[#4338CA] to-[#0D9488] p-0.5 shadow-lg mb-3">
                    <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center font-mono font-bold text-white text-lg">
                      3×3
                    </div>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block">
                    Spesifikasi Ukuran
                  </span>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    30 mm × 30 mm
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Luas permukaan ideal untuk laju difusi uap gas TVB-N dan keterbacaan mata manusia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Tahapan Proses & Alat Bahan */}
        {activeTab === 'process' && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* 5 Implementation Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {IMPLEMENTATION_STEPS.map((step, idx) => (
                <div key={idx} className="bg-[#11141A] rounded-2xl p-4 sm:p-5 border border-white/10 shadow-lg flex flex-col justify-between hover:border-indigo-400/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm shadow-md">
                        {step.stepNumber}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {step.duration.split(' ')[0]} {step.duration.split(' ')[1]}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-sky-400 font-mono">
                    Tahap {idx + 1} dari 5
                  </div>
                </div>
              ))}
            </div>

            {/* Daftar 11 Alat & 5 Bahan Praktikum */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#11141A] rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-sky-300 font-mono font-bold text-xs uppercase">
                  <Wrench className="w-4 h-4 text-sky-400" />
                  <span>Daftar 11 Alat Laboratorium Sekolah</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {TOOLS_LIST.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#090B0E] p-2 rounded-lg border border-white/5">
                      <span className="font-mono text-sky-400 text-[11px] font-bold w-5">{i + 1}.</span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#11141A] rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-teal-300 font-mono font-bold text-xs uppercase">
                  <Beaker className="w-4 h-4 text-teal-400" />
                  <span>Daftar 5 Bahan Baku Alami</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  {MATERIALS_LIST.map((mat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#090B0E] p-2.5 rounded-lg border border-white/5">
                      <Check className="w-4 h-4 text-teal-400 shrink-0" />
                      <span className="font-medium text-white">{mat}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                  Semua bahan alami bersifat nontoksik, biodegradable, dan diproduksi secara mandiri di laboratorium kimia SMAN 1 Bandar Sribhawono.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Mekanisme Gas TVB-N */}
        {activeTab === 'mechanism' && (
          <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 shadow-xl animate-in fade-in duration-300">
            <div className="max-w-3xl mb-6 sm:mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/60 border border-teal-800/60 px-2.5 py-1 rounded-md">
                Biosensor Kolorimetrik Real-Time
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                Bagaimana Gas TVB-N Mengubah Warna Antosianin Telang?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Total Volatile Basic Nitrogen (<strong className="text-white font-semibold">TVB-N</strong>) adalah indikator universal pembusukan protein pada daging, ikan, dan telur yang dihasilkan oleh aktivitas enzimatis mikroba (seperti <em>Pseudomonas</em>, <em>Enterobacteriaceae</em>).
              </p>
            </div>

            {/* 4 Step Mechanism Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-mono font-bold flex items-center justify-center text-sm mb-3">
                  01
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Pelepasan Gas Basa Volatil</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bakteri mendegradasi protein makanan menjadi amonia (NH₃), dimetilamina (DMA), dan trimetilamina (TMA).
                </p>
              </div>

              <div className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-mono font-bold flex items-center justify-center text-sm mb-3">
                  02
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Adsorpsi ke Pori CaCO₃</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Struktur mikropori serbuk cangkang telur mengadsorpsi gas uap yang terkumpul di headspace kemasan tertutup.
                </p>
              </div>

              <div className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-green-600 text-white font-mono font-bold flex items-center justify-center text-sm mb-3">
                  03
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Pergeseran pH Headspace</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Akumulasi basa amina menaikkan pH lingkungan mikro film biosensor dari asam lemah (pH 6.0) menjadi basa kuat (pH &gt; 8.0).
                </p>
              </div>

              <div className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-mono font-bold flex items-center justify-center text-sm mb-3">
                  04
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Transformasi Kuinoidal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Molekul antosianin ternatin terdeprotonasi menghasilkan perubahan warna kasat mata: Biru Violet → Biru Kehijauan → Hijau → Kuning Kecoklatan.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Analisis SWOT & Strategi Improvement */}
        {activeTab === 'swot' && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SWOT_DATA.map((item, idx) => (
                <div key={idx} className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl">
                  <div className="mb-3">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border ${item.badgeBg}`}>
                      {item.category}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mt-4">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Green Process & Usulan Improvement dari Makalah */}
            <div className="bg-[#11141A] rounded-2xl p-5 sm:p-7 border border-white/10 text-xs text-slate-300 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                <span>Strategi Improvement & Solusi Green Process (Kejujuran Ilmiah Paper)</span>
              </h4>
              <p className="leading-relaxed">
                1. <strong>Konservasi Energi:</strong> Mengoptimalkan durasi pengeringan oven 100°C dan mempertimbangkan energi surya untuk produksi skala UMKM.
              </p>
              <p className="leading-relaxed">
                2. <strong>Green Extraction:</strong> Ekstraksi menggunakan air panas murni tanpa pelarut organik beracun, aman bagi pekerja dan lingkungan.
              </p>
              <p className="leading-relaxed">
                3. <strong>Zero-Waste Kompos:</strong> Ampas bunga telang dan sisa membran cangkang telur diolah menjadi pupuk kompos organik.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
