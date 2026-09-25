import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Activity, 
  Thermometer, 
  Droplets, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  QrCode, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  RefreshCw,
  Sliders
} from 'lucide-react';
import { FOOD_CATEGORY_PROFILES, calculateWebDataFreshness } from '../data/mockData';

export const PureDataEngineSection: React.FC = () => {
  const [selectedFoodId, setSelectedFoodId] = useState<string>('ayam_balado');
  const [storageHours, setStorageHours] = useState<number>(8);
  const [ambientTemp, setAmbientTemp] = useState<number>(28);
  const [humidity, setHumidity] = useState<number>(75);
  const [batchCode, setBatchCode] = useState<string>('SPPG-MBG-SRB-04A');
  const [copiedBatch, setCopiedBatch] = useState<boolean>(false);

  const selectedProfile =
    FOOD_CATEGORY_PROFILES.find((p) => p.id === selectedFoodId) || FOOD_CATEGORY_PROFILES[0];

  const simulation = calculateWebDataFreshness(
    selectedProfile,
    storageHours,
    ambientTemp,
    humidity
  );

  const handleCopyVerification = () => {
    setCopiedBatch(true);
    setTimeout(() => setCopiedBatch(false), 2000);
  };

  return (
    <section id="pure-data-engine" className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background radial glowing ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>Versi 2: Pure Web-Data Freshness Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
            Monitoring Kesegaran Murni Berbasis Data Web
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong className="text-teal-300 font-semibold">100% Tanpa Ketergantungan Hardware Sensor Fisik.</strong> Mengkalkulasi peruraian asam amino, laju gas volatil TVB-N, dan kinetika mikrobiologis melalui algoritma termodinamika web yang akurat untuk dapur SPPG & MBG.
          </p>
        </div>

        {/* Dashboard Grid: Controls on Left, Live Telemetry & QR on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Parameter Control Console */}
          <div className="lg:col-span-6 bg-slate-950/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl space-y-5 sm:space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-slate-200">
                  Konsol Parameter Komoditas Pangan
                </span>
              </div>
              <span className="text-[11px] font-mono text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
                Web Kinetic Engine v2.0
              </span>
            </div>

            {/* 1. Food Commodity Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Pilih Jenis Lauk / Komoditas Pangan MBG:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOOD_CATEGORY_PROFILES.map((food) => {
                  const isSelected = food.id === selectedFoodId;
                  return (
                    <button
                      key={food.id}
                      type="button"
                      onClick={() => setSelectedFoodId(food.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-950/80 border-teal-400 text-white shadow-md ring-1 ring-teal-400/40'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{food.name}</span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {food.baseTvbnRatePerHour}x
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {food.typicalDish}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Storage Duration Slider (0 - 36 Jam) */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  Durasi Penyimpanan Makanan:
                </span>
                <span className="text-base font-extrabold font-mono text-teal-400">
                  {storageHours} Jam
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="36"
                step="1"
                value={storageHours}
                onChange={(e) => setStorageHours(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                <span>0j (Baru Matang)</span>
                <span>12j (Kritis)</span>
                <span>24j</span>
                <span>36j (Basi)</span>
              </div>
            </div>

            {/* 3. Ambient Temperature & Humidity Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Temperature */}
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                    Suhu Ruang:
                  </span>
                  <span className="text-sm font-bold font-mono text-amber-300">
                    {ambientTemp}°C
                  </span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="38"
                  step="1"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  {ambientTemp <= 22 ? 'Suhu Ruang Ber-AC' : ambientTemp <= 30 ? 'Suhu Tropis Standar' : 'Suhu Terik Siang Hari'}
                </span>
              </div>

              {/* Relative Humidity */}
              <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-indigo-400" />
                    Kelembapan (RH):
                  </span>
                  <span className="text-sm font-bold font-mono text-indigo-300">
                    {humidity}%
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="90"
                  step="5"
                  value={humidity}
                  onChange={(e) => setHumidity(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
                <span className="text-[10px] text-slate-500 mt-1 block">
                  {humidity < 60 ? 'Kering / Terjaga' : 'Lembap Khas Dapur Katering'}
                </span>
              </div>

            </div>

            {/* Scientific Kinetic Formula Reference Note */}
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Model Kinetika Arrhenius Terintegrasi:</strong> Menghitung laju difusi gas volatil tanpa perlu membeli chip atau baterai sensor fisik.
              </p>
            </div>

          </div>

          {/* Right Column: Pure Web Data Telemetry & Batch QR Verification */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Status Card with Dynamic Color Glow */}
            <div
              className="relative rounded-3xl p-6 sm:p-8 border transition-all duration-700 overflow-hidden"
              style={{
                backgroundColor: '#0F172A',
                borderColor: simulation.status === 'optimal' ? '#4338CA' : simulation.status === 'warning' ? '#0D9488' : simulation.status === 'critical' ? '#16A34A' : '#B45309',
                boxShadow: `0 20px 40px -10px ${simulation.predictedColor}33`
              }}
            >
              {/* Dynamic Aura */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: simulation.predictedColor }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono font-bold text-slate-400">
                  Hasil Estimasi Kinetika Web Data
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold border font-mono"
                  style={{
                    backgroundColor: `${simulation.predictedColor}20`,
                    color: simulation.status === 'optimal' ? '#818CF8' : simulation.status === 'warning' ? '#2DD4BF' : simulation.status === 'critical' ? '#4ADE80' : '#FBBF24',
                    borderColor: `${simulation.predictedColor}60`
                  }}
                >
                  {simulation.verdictTitle}
                </span>
              </div>

              {/* Freshness Score & Simulated Biosensor Tint */}
              <div className="flex flex-col sm:flex-row items-center gap-6 my-6">
                
                {/* Visual Bio-Tint Simulator */}
                <div className="text-center flex-shrink-0">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex flex-col items-center justify-center p-2 shadow-inner border-2 transition-all duration-700"
                    style={{
                      backgroundColor: simulation.predictedColor,
                      borderColor: '#FFFFFF30'
                    }}
                  >
                    <span className="text-[9px] font-mono uppercase text-white/80">WEB COLOR</span>
                    <span className="text-xs font-bold text-white mt-1 text-center line-clamp-2">
                      {simulation.status === 'optimal' ? 'Indigo Violet' : simulation.status === 'warning' ? 'Cyan Teal' : simulation.status === 'critical' ? 'Leaf Green' : 'Brownish Yellow'}
                    </span>
                    <span className="text-[9px] font-mono text-white/80 mt-1">pH {simulation.estimatedPh}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Representasi Warna</span>
                </div>

                {/* Score & Verdict Text */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                      {simulation.freshnessScore}%
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Indeks Kesegaran
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {simulation.verdictAction}
                  </p>
                </div>

              </div>

              {/* Telemetry Metrics Bar (TVB-N, pH, Log CFU) */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-800">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">TVB-N Web</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-teal-300">
                    {simulation.estimatedTvbn} <span className="text-[10px]">mg N</span>
                  </span>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">pH Headspace</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-indigo-300">
                    {simulation.estimatedPh}
                  </span>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Bakteri CFU</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-amber-300">
                    {simulation.bacterialLogCfu} <span className="text-[10px]">log</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Batch QR Token & Digital Inspection Badge (Zero Sensor Hardware) */}
            <div className="bg-slate-950/70 backdrop-blur-md rounded-3xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 justify-between">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                  <QrCode className="w-12 h-12 text-slate-900" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-teal-400 font-bold block">
                    Token Verifikasi Digital Batch MBG
                  </span>
                  <span className="text-sm font-mono font-bold text-white">
                    {batchCode}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Komoditas: {selectedProfile.name} ({storageHours} Jam Simpan)
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyVerification}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                {copiedBatch ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Token Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 text-teal-400" />
                    <span>Salin URL Verifikasi Web</span>
                  </>
                )}
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
