import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Smartphone, Sparkles, Layers, Shield, Eye, ArrowDown, ChevronRight, Activity } from 'lucide-react';
import { FRESHNESS_STAGES } from '../data/mockData';

export const ScrollytellingMockup: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001
  });

  // Dynamic transforms tied to scroll progress
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [18, 0, -14]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-15, 0, 12]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 1.03, 0.95]);
  const lidSeparation = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, -32, 0]);
  const tagGlowOpacity = useTransform(smoothProgress, [0.3, 0.6, 0.9], [0.3, 0.85, 0.4]);

  const steps = [
    {
      id: 0,
      title: 'Fase 1: Kemasan Tertutup Rapat',
      time: '0 – 6 Jam (Suhu Ruang)',
      desc: 'Tutup kemasan kedap udara menjaga headspace setinggi 1,5 cm di atas makanan berprotein. Sensor VioShell 3×3 cm menempel di sisi dalam tutup tanpa kontak fisik dengan pangan.',
      status: 'Aman & Sangat Segar',
      hex: '#2B2677',
      ph: 'pH 6.2'
    },
    {
      id: 1,
      title: 'Fase 2: Difusi Awal Gas TVB-N',
      time: '12 – 18 Jam',
      desc: 'Bakteri pembusuk melepaskan senyawa volatil basa amina (TVB-N). Gas menguap ke headspace dan diserap oleh pori Kalsium Karbonat (CaCO₃) cangkang telur.',
      status: 'Pelepasan Volatil Awal',
      hex: '#0D9488',
      ph: 'pH 6.8'
    },
    {
      id: 2,
      title: 'Fase 3: Transformasi Basa Kuinoidal',
      time: '24 Jam',
      desc: 'Molekul antosianin bunga telang bereaksi dengan ion OH⁻ uap basa, mengubah struktur kimia menjadi basa kuinoidal hijau kasat mata.',
      status: 'Peringatan Penurunan Mutu',
      hex: '#16A34A',
      ph: 'pH 7.4'
    },
    {
      id: 3,
      title: 'Fase 4: Degradasi Total & Pembusukan',
      time: '36 Jam',
      desc: 'Cincin antosianin membuka menjadi bentuk kalkon terdegradasi berwarna coklat kekuningan. Pangan terbukti tidak layak dan berbahaya dikonsumsi.',
      status: 'BAHAYA: Basi Total',
      hex: '#B45309',
      ph: 'pH > 8.0'
    }
  ];

  return (
    <section
      ref={containerRef}
      id="scrollytelling"
      className="py-14 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Background dynamic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Scroll-driven Frame Animation (Scrollytelling)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
            Transisi Lapisan Visual Terikat Langsung Progres Scroll
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Gulir halaman atau klik langkah untuk melihat dekonstruksi mekanika difusi gas TVB-N pada lapisan tutup kemasan pintar VioShell secara 3D dengan inersia spring physics.
          </p>
        </div>

        {/* Scrollytelling Interactive Canvas & Narrative Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: 3D Floating Packaging & Smartphone Inspection Screen */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* 3D Perspective Box */}
            <div className="w-full max-w-sm sm:max-w-md perspective-[1200px] py-4 sm:py-6">
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  scale,
                  transformStyle: 'preserve-3d'
                }}
                className="relative bg-slate-900/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-800 shadow-2xl backdrop-blur-md will-change-transform"
              >
                
                {/* Visual Packaging Lid Layer with Dynamic Separation */}
                <motion.div
                  style={{ y: lidSeparation }}
                  className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-lg relative mb-4 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono mb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                      Tutup Wadah Transparan (PET / PP)
                    </span>
                    <span className="bg-slate-700 text-[10px] px-2 py-0.5 rounded">
                      Non-Kontak 1,5 cm
                    </span>
                  </div>

                  {/* VioShell 3x3 cm Sensor Sticker with Dynamic Glow */}
                  <div className="flex justify-center my-4">
                    <div className="relative">
                      {/* Aura */}
                      <motion.div
                        style={{
                          opacity: tagGlowOpacity,
                          backgroundColor: steps[activeStep].hex
                        }}
                        className="absolute -inset-3 rounded-2xl blur-lg transition-colors duration-500"
                      />
                      {/* Film 3x3 cm badge */}
                      <div
                        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl p-3 flex flex-col items-center justify-between border-2 shadow-2xl transition-all duration-500"
                        style={{
                          backgroundColor: steps[activeStep].hex,
                          borderColor: '#FFFFFF40',
                          color: '#FFFFFF'
                        }}
                      >
                        <div className="w-full flex justify-between text-[9px] font-mono uppercase opacity-90">
                          <span>VIOSHELL</span>
                          <span>3×3 CM</span>
                        </div>
                        <div className="text-center my-auto">
                          <span className="text-xs sm:text-sm font-extrabold block">
                            {steps[activeStep].ph}
                          </span>
                          <span className="text-[10px] opacity-90 font-mono">
                            {steps[activeStep].time.split(' ')[0]} {steps[activeStep].time.split(' ')[1]}
                          </span>
                        </div>
                        <div className="w-full text-center text-[8px] bg-black/40 rounded py-0.5 font-mono">
                          CaCO₃ + TELANG
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 font-mono">
                    Lapisan Sensor Kolorimetrik Menghadap Headspace
                  </p>
                </motion.div>

                {/* Headspace Gas Diffusion Layer Representation */}
                <div className="h-6 rounded-lg bg-indigo-950/40 border border-indigo-800/40 flex items-center justify-center text-[10px] font-mono text-indigo-300 gap-1.5 my-2">
                  <Activity className="w-3 h-3 text-teal-400" />
                  <span>Ruang Difusi Uap Gas Basa Volatil (Headspace 1,5 cm)</span>
                </div>

                {/* Food Matrix Tray Layer below */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      Matriks Pangan MBG
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      Lauk Protein Hewani (Ayam / Ikan / Telur)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Status Mutu</span>
                    <span
                      className="text-xs font-bold font-mono"
                      style={{ color: steps[activeStep].hex }}
                    >
                      {steps[activeStep].status}
                    </span>
                  </div>
                </div>

                {/* Perspective angle watermark */}
                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Inersia Sumbu Rotasi 3D Aktif</span>
                  <span>GPU translate3d & will-change</span>
                </div>

              </motion.div>
            </div>

          </div>

          {/* Right Column: Step-by-Step Interactive Scrollytelling Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold font-mono text-indigo-400 uppercase tracking-wider">
                Alur Progres Scroll Interaktif
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Langkah {activeStep + 1} dari {steps.length}
              </span>
            </div>

            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500 shadow-xl shadow-indigo-900/20 ring-1 ring-indigo-500/50'
                      : 'bg-slate-950/50 border-slate-800/90 text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {step.time}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-800/60 text-[11px] font-mono">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: step.hex }}
                      />
                      <span className="text-slate-300">{step.status}</span>
                      <span className="text-slate-500">·</span>
                      <span className="text-teal-400">{step.ph}</span>
                    </div>
                  </div>
                </button>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};
