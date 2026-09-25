import React, { useState } from 'react';
import { BestsellersBookShowcase } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { Sparkles, ArrowRight, FlaskConical, Cpu, BookOpen, Award, CheckCircle, ChevronRight, Eye } from 'lucide-react';
import { VIOSHELL_RESEARCH_VOLUMES, TEAM_MEMBERS } from '../data/mockData';
import { ParticleGlowCanvas } from './ParticleGlowCanvas';

interface HeroBooksShowcaseProps {
  onExploreClick: () => void;
  onSimulateClick: () => void;
  onPureDataClick: () => void;
  onAuthModalOpen: () => void;
}

export const HeroBooksShowcase: React.FC<HeroBooksShowcaseProps> = ({
  onExploreClick,
  onSimulateClick,
  onPureDataClick,
  onAuthModalOpen
}) => {
  const [selectedMobileBook, setSelectedMobileBook] = useState<number>(0);
  const [showMobile3D, setShowMobile3D] = useState<boolean>(false);

  return (
    <section id="buku-showcase" className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 bg-[#040711] text-white border-b border-blue-900/30">
      
      {/* 60 FPS Interactive Particle Glow Canvas in background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <ParticleGlowCanvas particleCount={35} interactive={false} />
      </div>

      {/* Ambient Blue-Black Luminous Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden -z-10 opacity-70">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Official Header: AHM Best Student 2026 Badge & School Credential */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 pb-4 border-b border-blue-900/30">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-red-400" />
              <span>AHM Best Student 2026</span>
            </span>
            <span className="text-xs text-slate-300 font-medium">
              PT Astra Honda Motor • Sinergi Bagi Negeri
            </span>
          </div>
          <div className="text-xs text-sky-300/80 font-mono bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/40 text-center">
            SMAN 1 Bandar Sribhawono • Kelas XI.MIPA
          </div>
        </div>

        {/* Top Badges & Unified Dual-Function Indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-4 justify-center lg:justify-start">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[11px] sm:text-xs font-semibold">
            <FlaskConical className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
            <span>Biokomposit Cangkang Telur & Bunga Telang</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[11px] sm:text-xs font-semibold">
            <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
            <span>Kinetika Data Web TVB-N</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 text-[11px] sm:text-xs font-semibold">
            <span>14 Dapur SPPG & MBG</span>
          </div>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="max-w-4xl text-center lg:text-left space-y-3 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              VioShell:
            </span>{' '}
            Inovasi Smart Packaging Berbasis Limbah Cangkang Telur dan Ekstrak Bunga Telang sebagai Indikator Kesegaran Pangan
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-3xl">
            Inovasi indikator berukuran <strong className="text-white font-semibold">3×3 cm</strong> dari limbah cangkang telur (94–95% CaCO₃) dan ekstrak bunga telang (<em className="text-sky-300">Clitoria ternatea</em>), merespons uap basa volatil untuk melindungi kesegaran pangan di 14 dapur SPPG & program Makan Bergizi Gratis (MBG).
          </p>

          {/* Research Authors Mini-strip */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center lg:justify-start pt-1 text-[11px] text-slate-400 font-mono">
            <span className="text-slate-500">Tim Peneliti:</span>
            <span className="text-sky-300 font-semibold">Felicia Hanza H. (Ketua)</span>
            <span className="text-slate-600">•</span>
            <span>Alifya Putri G.</span>
            <span className="text-slate-600">•</span>
            <span>Cahaya Budiani</span>
            <span className="text-slate-600">•</span>
            <span>Keyla Ivana P.</span>
            <span className="text-slate-600">|</span>
            <span className="text-teal-300">Pembimbing: Diana Ruswandari, S.Sos</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 justify-center lg:justify-start flex-wrap">
            <button
              onClick={onSimulateClick}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 shrink-0" />
              <span>Simulasi Warna Biosensor (0–36 Jam)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>

            <button
              onClick={onPureDataClick}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-500/40 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Data Engine TVB-N</span>
            </button>

            <button
              onClick={onAuthModalOpen}
              className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-300 bg-[#0e1424] hover:bg-[#162038] border border-blue-900/40 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Akses Portal SPPG</span>
            </button>
          </div>
        </div>

        {/* 3 BUKU MONOGRAF RISET VIOSHELL */}
        <div className="mt-6 pt-5 border-t border-blue-900/30">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span className="text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-sky-200">
                3 Buku Monograf Riset AHM Best Student 2026
              </span>
            </div>
            <span className="text-[11px] text-sky-400/80 font-mono">
              Dokumentasi Lengkap Hasil Penelitian & Validasi Lab
            </span>
          </div>

          {/* MOBILE VIEW (< 640px): Touch-friendly Interactive Book Deck without scroll-hijacking */}
          <div className="sm:hidden space-y-3">
            {/* Mobile Tab Selector for 3 Books */}
            <div className="grid grid-cols-3 gap-1.5 bg-[#0b1120] p-1 rounded-xl border border-blue-900/40">
              {VIOSHELL_RESEARCH_VOLUMES.map((vol, idx) => (
                <button
                  key={vol.id}
                  onClick={() => setSelectedMobileBook(idx)}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedMobileBook === idx
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-80">{vol.volumeNumber}</div>
                  <div className="truncate text-[11px]">{idx === 0 ? 'Deteksi Pangan' : idx === 1 ? 'Bahan Alami' : 'Tujuan SDGs'}</div>
                </button>
              ))}
            </div>

            {/* Active Book Detail Card for Mobile */}
            {(() => {
              const activeBook = VIOSHELL_RESEARCH_VOLUMES[selectedMobileBook];
              return (
                <div className="bg-[#0b1120]/95 p-4 rounded-2xl border border-sky-500/40 shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800/60">
                      {activeBook.volumeNumber}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                      {activeBook.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {activeBook.title}
                    </h3>
                    <p className="text-xs text-sky-300/90 font-medium mt-0.5">
                      {activeBook.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-[#070b15] p-3 rounded-xl border border-white/5">
                    {activeBook.summary}
                  </p>

                  <div className="text-[11px] text-teal-300 bg-teal-950/40 p-2.5 rounded-xl border border-teal-800/40 flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{activeBook.coreHighlight}</span>
                  </div>

                  <div className="pt-2 border-t border-blue-900/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Penulis: {activeBook.authors}</span>
                    <span className="text-cyan-400 font-semibold">SMAN 1 × Unila</span>
                  </div>
                </div>
              );
            })()}

            {/* Optional 3D View Toggle for Mobile (No Accidental Touch Hijack!) */}
            <div className="pt-1">
              <button
                onClick={() => setShowMobile3D(!showMobile3D)}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#0e1628] hover:bg-[#15203a] border border-blue-800/50 text-sky-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>{showMobile3D ? 'Sembunyikan Model 3D WebGL' : 'Buka Model 3D WebGL Interaktif'}</span>
              </button>

              {showMobile3D && (
                <div className="mt-3 shader-frame shadow-2xl rounded-2xl overflow-hidden border border-blue-900/40 bg-[#040711]">
                  <BestsellersBookShowcase
                    headingFont="iowan-old-style"
                    bodyFont="iowan-old-style"
                    headingWeight="500"
                    bodyWeight="400"
                    primaryColor="#38bdf8"
                    headingSize={280}
                    bodySize={16}
                    headingLetterSpacing={-0.085}
                  />
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP & LAPTOP VIEW (>= 640px): Full 3D Interactive WebGL Book Showcase */}
          <div className="hidden sm:block">
            <div className="shader-frame shadow-2xl rounded-3xl overflow-hidden border border-blue-900/40 bg-[#040711]">
              <BestsellersBookShowcase
                headingFont="iowan-old-style"
                bodyFont="iowan-old-style"
                headingWeight="500"
                bodyWeight="400"
                primaryColor="#38bdf8"
                headingSize={325}
                bodySize={17}
                headingLetterSpacing={-0.085}
              />
            </div>

            {/* 3 Volumes Summary Cards directly underneath the 3 books */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {VIOSHELL_RESEARCH_VOLUMES.map((vol) => (
                <div
                  key={vol.id}
                  className="bg-[#0b1120]/90 p-5 rounded-2xl border border-blue-900/30 hover:border-sky-400/50 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-sky-400">
                        {vol.volumeNumber}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                        {vol.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {vol.title}
                    </h4>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {vol.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-blue-900/30 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Penulis: {vol.authors.split('&')[0]}</span>
                    <span className="text-cyan-400">SMAN 1 × Unila</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
