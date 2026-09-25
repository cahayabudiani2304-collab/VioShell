import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, AlertTriangle, ShieldCheck, Clock, Info, CheckCircle, Sparkles, Activity } from 'lucide-react';
import { FRESHNESS_STAGES } from '../data/mockData';
import { FreshnessStage } from '../types';

export const ColorSimulation: React.FC = () => {
  const [selectedHours, setSelectedHours] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Determine which stage fits the current hour
  const getStageByHour = (hour: number): FreshnessStage => {
    if (hour <= 6) return FRESHNESS_STAGES[0];
    if (hour <= 18) return FRESHNESS_STAGES[1];
    if (hour <= 26) return FRESHNESS_STAGES[2];
    return FRESHNESS_STAGES[3];
  };

  const currentStage = getStageByHour(selectedHours);

  // Auto-play timer for presentation demo
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setSelectedHours((prev) => {
          if (prev >= 36) return 0;
          return prev + 2;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Color calculation for smooth transition
  const getInterpolatedColor = (hour: number) => {
    if (hour <= 6) {
      // 0 - 6h: Deep Indigo Violet #2B2677
      return '#2B2677';
    } else if (hour <= 18) {
      // 6 - 18h: Transition to Teal #0D9488
      const ratio = (hour - 6) / 12;
      return ratio < 0.5 ? '#1E40AF' : '#0D9488';
    } else if (hour <= 26) {
      // 18 - 26h: Transition to Leaf Green #16A34A
      return '#16A34A';
    } else {
      // 26 - 36h: Transition to Brownish Yellow #B45309
      return '#B45309';
    }
  };

  const activeColorHex = getInterpolatedColor(selectedHours);

  return (
    <section id="simulasi" className="py-14 sm:py-20 lg:py-24 bg-[#090B0E] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Simulasi Interaktif Detektor Warna</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Uji Transisi Warna Indikator VioShell (0 – 36 Jam)
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Geser slider atau pilih interval waktu penyimpanan untuk melihat langsung respons biosensor terhadap pelepasan gas basa volatil (TVB-N) dari makanan yang disimpan di suhu ruang.
          </p>
        </div>

        {/* Main Interactive Board */}
        <div className="bg-[#11141A] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 shadow-2xl border border-white/10">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-800">
            
            {/* Quick Preset Buttons */}
            <div className="w-full lg:w-auto">
              <span className="text-xs uppercase font-mono font-bold text-slate-400 block mb-2 text-center lg:text-left">
                Pilih Preset Interval Riset:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FRESHNESS_STAGES.map((stage) => {
                  const isCurrent = currentStage.id === stage.id;
                  return (
                    <button
                      key={stage.id}
                      id={`sim-preset-${stage.id}`}
                      onClick={() => {
                        setIsPlaying(false);
                        setSelectedHours(stage.hoursMin);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer flex flex-col justify-between min-h-[46px] ${
                        isCurrent
                          ? 'bg-slate-800 border-teal-400 text-white ring-2 ring-teal-400/30'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-mono text-[11px]">{stage.timeRange}</span>
                        <div
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: stage.hexCode }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold truncate text-slate-200">
                        {stage.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Auto Play / Reset controls */}
            <div className="flex items-center gap-2.5 justify-center sm:justify-start">
              <button
                id="sim-autoplay-toggle"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                  isPlaying
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                    : 'bg-teal-500 hover:bg-teal-600 text-slate-950 shadow-md shadow-teal-500/20'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4 shrink-0" /> : <Play className="w-4 h-4 fill-current shrink-0" />}
                <span>{isPlaying ? 'Jeda Simulasi' : 'Putar Otomatis'}</span>
              </button>

              <button
                id="sim-reset-hours"
                onClick={() => {
                  setIsPlaying(false);
                  setSelectedHours(0);
                }}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Reset ke Jam 0"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Slider & Hour Display */}
          <div className="py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-bold text-slate-200">
                  Waktu Penyimpanan Makanan:
                </span>
                <span className="text-2xl font-extrabold font-mono text-teal-400">
                  {selectedHours} Jam
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Rentang Dinamis: 0 Jam (Baru Matang) s/d 36 Jam (Basi Total)
              </div>
            </div>

            {/* Range Slider */}
            <div className="relative pt-2 pb-4">
              <input
                id="freshness-hour-range-slider"
                type="range"
                min="0"
                max="36"
                step="1"
                value={selectedHours}
                onChange={(e) => {
                  setIsPlaying(false);
                  setSelectedHours(parseInt(e.target.value));
                }}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-hidden"
              />
              {/* Slider scale markers */}
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2 px-1">
                <span className={selectedHours <= 6 ? 'text-indigo-400 font-bold' : ''}>0j (Segar)</span>
                <span className={selectedHours >= 12 && selectedHours <= 18 ? 'text-teal-400 font-bold' : ''}>12j</span>
                <span className={selectedHours >= 18 && selectedHours <= 24 ? 'text-green-400 font-bold' : ''}>24j</span>
                <span className={selectedHours >= 30 ? 'text-amber-400 font-bold' : ''}>36j (Basi)</span>
              </div>
            </div>
          </div>

          {/* Visual Simulation Display Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Visual Box 1: The Biosensor Film Close-up (3x3 cm) */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col items-center justify-between text-center relative overflow-hidden">
              
              {/* Ambient Glow */}
              <div
                className="absolute inset-0 opacity-20 blur-3xl pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeColorHex }}
              />

              <div className="w-full flex justify-between items-center text-xs text-slate-400 font-mono mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  Film Biosensor 3×3 cm
                </span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">
                  Imobilisasi CaCO₃ & Telang
                </span>
              </div>

              {/* The 3x3 cm Film Model */}
              <div className="py-6">
                <div
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-4 flex flex-col justify-between shadow-2xl transition-all duration-700 border-4 mx-auto"
                  style={{
                    backgroundColor: activeColorHex,
                    borderColor: currentStage.borderHex,
                    color: '#FFFFFF'
                  }}
                >
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase opacity-80">
                    <span>VIOSHELL</span>
                    <span>30×30 MM</span>
                  </div>

                  <div className="my-auto">
                    <span className="text-[11px] uppercase tracking-wider block font-mono opacity-85">
                      Fase Pada Jam ke-{selectedHours}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-0.5 drop-shadow-md">
                      {currentStage.title}
                    </h4>
                    <p className="text-xs font-medium opacity-90 mt-1">
                      {currentStage.colorName.split('(')[0]}
                    </p>
                  </div>

                  <div className="text-[9px] font-mono bg-black/40 backdrop-blur-xs py-1 px-2 rounded-md flex justify-between items-center">
                    <span>TVB-N: {currentStage.tvbnRange.split(' ')[0]}</span>
                    <span>{currentStage.phRange.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Color name description */}
              <div className="w-full bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs text-slate-300 mt-2">
                <span className="text-slate-400 block font-mono text-[11px] mb-0.5">Nama Visual Pigmen:</span>
                <strong className="text-white text-sm font-semibold">{currentStage.colorName}</strong>
              </div>

            </div>

            {/* Visual Box 2: Real-time Biochemical Metrics & Recommendation */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Status Header Pill */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Status Mutu Mikrobiologis
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {currentStage.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      currentStage.id === 'fresh'
                        ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                        : currentStage.id === 'initial_change'
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                        : currentStage.id === 'deterioration'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                    }`}
                  >
                    {currentStage.statusBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              {/* Lab Parameters Measured */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>Kadar Gas TVB-N</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-teal-300">
                    {currentStage.tvbnRange.split(' ')[0]} {currentStage.tvbnRange.split(' ')[1]}
                  </div>
                  <span className="text-[10px] text-slate-500">Total Volatile Basic Nitrogen</span>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1">
                    <Activity className="w-3.5 h-3.5 text-indigo-400" />
                    <span>pH Headspace</span>
                  </div>
                  <div className="text-lg font-bold font-mono text-indigo-300">
                    {currentStage.phRange.split(' ')[0]} {currentStage.phRange.split(' ')[1]}
                  </div>
                  <span className="text-[10px] text-slate-500">Keasaman/Kebasaan Uap</span>
                </div>
              </div>

              {/* Action Recommendation Box */}
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 ${
                  currentStage.id === 'spoiled'
                    ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
                    : currentStage.id === 'deterioration'
                    ? 'bg-amber-950/40 border-amber-800/80 text-amber-200'
                    : 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                }`}
              >
                {currentStage.id === 'spoiled' || currentStage.id === 'deterioration' ? (
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                ) : (
                  <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                )}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Rekomendasi Petugas / Konsumen:
                  </h5>
                  <p className="text-xs mt-1 leading-relaxed">
                    {currentStage.recommendation}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Stage Summary Cards below simulation for visual reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {FRESHNESS_STAGES.map((stage) => (
            <div
              key={stage.id}
              className={`p-4 rounded-2xl border transition-all ${
                currentStage.id === stage.id
                  ? 'bg-[#181D26] border-indigo-400/60 shadow-lg ring-1 ring-indigo-400/30'
                  : 'bg-[#11141A] border-white/10 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-4 h-4 rounded-md shadow-xs flex-shrink-0"
                  style={{ backgroundColor: stage.hexCode }}
                />
                <span className="text-xs font-bold text-white font-mono">
                  {stage.timeRange}
                </span>
              </div>
              <h5 className="text-sm font-bold text-slate-200 mb-1">
                {stage.title}
              </h5>
              <p className="text-[11px] text-slate-400">
                {stage.colorName.split('(')[0]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
