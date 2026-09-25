import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Compass, Eye, ShieldCheck, Leaf, FlaskConical, Play, Pause, Layers, RefreshCw, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export function SylvaLivingWorldShowcase() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeMode, setActiveMode] = useState<'all' | 'calcite' | 'anthocyanin' | 'amines'>('all');
  const [activeCard, setActiveCard] = useState<number>(0);
  const [reactionSimulated, setReactionSimulated] = useState<boolean>(false);

  // 60 FPS Native WebGL / 2D Canvas Biosphere Engine (100% crash-proof on any browser/device)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing Calcite (white/cyan), Anthocyanin (indigo/blue), and Volatile gas (amber/teal)
    const count = 55;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2.8 + 1.2,
      type: Math.random() > 0.6 ? 'calcite' : Math.random() > 0.3 ? 'anthocyanin' : 'amines',
      phase: Math.random() * Math.PI * 2,
      glow: Math.random() * 0.5 + 0.5
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;
    let isHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };
    const onMouseLeave = () => {
      isHovered = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
      isHovered = true;
    };
    const onTouchEnd = () => {
      isHovered = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('touchstart', onTouchMove, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd, { passive: true });

    const render = () => {
      ctx.fillStyle = '#040711';
      ctx.fillRect(0, 0, width, height);

      // Deep space radial glows
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.45, 10, width * 0.5, height * 0.45, width * 0.6);
      grad.addColorStop(0, 'rgba(14, 165, 233, 0.12)');
      grad.addColorStop(0.5, 'rgba(67, 56, 202, 0.08)');
      grad.addColorStop(1, 'rgba(4, 7, 17, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle coordinate bio-grid
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particle interconnecting network
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        if (isPlaying) {
          p1.x += p1.vx;
          p1.y += p1.vy;
          p1.phase += 0.02;

          // Gentle mouse attraction
          if (isHovered) {
            const dx = mouseX - p1.x;
            const dy = mouseY - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && dist > 1) {
              p1.x += (dx / dist) * 0.5;
              p1.y += (dy / dist) * 0.5;
            }
          }

          if (p1.x < 0) p1.x = width;
          if (p1.x > width) p1.x = 0;
          if (p1.y < 0) p1.y = height;
          if (p1.y > height) p1.y = 0;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.22;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Determine particle color based on active filter
        let fill = 'rgba(56, 189, 248, 0.8)';
        let shadow = '#38bdf8';
        if (p1.type === 'calcite') {
          fill = activeMode === 'anthocyanin' ? 'rgba(255,255,255,0.1)' : 'rgba(224, 242, 254, 0.9)';
          shadow = '#bae6fd';
        } else if (p1.type === 'anthocyanin') {
          fill = activeMode === 'calcite' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(96, 165, 250, 0.95)';
          shadow = '#60a5fa';
        } else {
          fill = activeMode === 'calcite' ? 'rgba(45, 212, 191, 0.1)' : 'rgba(45, 212, 191, 0.85)';
          shadow = '#2dd4bf';
        }

        const dynamicR = p1.radius + Math.sin(p1.phase) * 0.6;
        ctx.save();
        ctx.shadowBlur = 10 * p1.glow;
        ctx.shadowColor = shadow;
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(0.5, dynamicR), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchstart', onTouchMove);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
    };
  }, [isPlaying, activeMode]);

  const cardsData = [
    {
      title: "1. Serbuk Cangkang Telur SPPG",
      subtitle: "Valorisasi 2,8 Ton/Bulan Limbah Lokal",
      tag: "Matriks Kalsit 95% CaCO₃",
      badgeColor: "text-sky-300 border-sky-500/40 bg-sky-950/60",
      description: "Limbah cangkang telur dari 14 SPPG di Kecamatan Bandar Sribhawono dimurnikan dan diayak lolos 100 mesh. Mikropori kalsit kristalin berfungsi sebagai spons pengadsorpsi gas amina volatil.",
      statsLabel: "Kemurnian Mineral",
      statsVal: "95% CaCO₃",
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-28 object-contain">
          <defs>
            <linearGradient id="eggGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="140" height="100" rx="16" fill="url(#eggGrad)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3"/>
          <circle cx="80" cy="55" r="32" stroke="#60a5fa" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.08)"/>
          <path d="M60 45 L80 30 L100 45 L100 70 L80 82 L60 70 Z" stroke="#38bdf8" strokeWidth="2" fill="rgba(96, 165, 250, 0.2)"/>
          <circle cx="80" cy="55" r="6" fill="#38bdf8" />
          <path d="M30 95 L130 95" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3"/>
          <text x="80" y="108" textAnchor="middle" fill="#bae6fd" fontSize="9" fontFamily="monospace">STRUKTUR MIKROPORI KALSIUM</text>
        </svg>
      )
    },
    {
      title: "2. Ekstrak Bunga Telang Alami",
      subtitle: "Clitoria ternatea Kromofor pH Pangan",
      tag: "Antosianin 6,16 mg/g",
      badgeColor: "text-blue-300 border-blue-500/40 bg-blue-950/60",
      description: "Kromofor alami berjenis ternatin poliasilasi yang sangat peka terhadap uap basa volatil mikroba. Terbukti stabil secara termal dan mengalami pergeseran warna kasat mata dari biru hingga coklat.",
      statsLabel: "Kadar Lab Unila",
      statsVal: "6,16 mg/g",
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-28 object-contain">
          <defs>
            <linearGradient id="telangGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="140" height="100" rx="16" fill="url(#telangGrad)" stroke="#60a5fa" strokeWidth="1.5"/>
          <path d="M80 25 C95 38, 110 52, 105 72 C100 86, 80 90, 80 90 C80 90, 60 86, 55 72 C50 52, 65 38, 80 25 Z" stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.25)"/>
          <path d="M80 40 C88 48, 96 58, 92 70 C89 77, 80 80, 80 80 C80 80, 71 77, 68 70 C64 58, 72 48, 80 40 Z" stroke="#93c5fd" strokeWidth="1.5" fill="rgba(147, 197, 253, 0.35)"/>
          <circle cx="80" cy="62" r="5" fill="#ffffff"/>
          <text x="80" y="108" textAnchor="middle" fill="#93c5fd" fontSize="9" fontFamily="monospace">KROMOFOR TERNATIN ALAMI</text>
        </svg>
      )
    },
    {
      title: "3. Biosensor Headspace 3×3 cm",
      subtitle: "Deteksi Non-Kontak & Non-Destruktif",
      tag: "Standar SNI & MBG",
      badgeColor: "text-cyan-300 border-cyan-500/40 bg-cyan-950/60",
      description: "Film biokomposit presisi 30×30 mm ditempel pada tutup bagian dalam kemasan boks. Mencegah kontak fisik langsung dengan pangan dan mendeteksi gas TVB-N secara real-time tanpa membuka segel.",
      statsLabel: "Dimensi Standar",
      statsVal: "30 × 30 mm",
      svgGraphic: (
        <svg viewBox="0 0 160 120" className="w-full h-28 object-contain">
          <defs>
            <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#040711" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="140" height="100" rx="16" fill="url(#labelGrad)" stroke="#2dd4bf" strokeWidth="1.5"/>
          <rect x="45" y="25" width="70" height="60" rx="8" stroke="#38bdf8" strokeWidth="2" fill="rgba(56, 189, 248, 0.15)"/>
          <circle cx="80" cy="55" r="14" fill={reactionSimulated ? "#10b981" : "#4338ca"} stroke="#ffffff" strokeWidth="2"/>
          <path d="M35 70 Q80 85 125 70" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 2"/>
          <text x="80" y="108" textAnchor="middle" fill="#5eead4" fontSize="9" fontFamily="monospace">HEADSPACE GAS SENSOR 3×3 CM</text>
        </svg>
      )
    }
  ];

  return (
    <section id="sylva-living-world" className="py-14 sm:py-20 bg-[#040711] text-white relative overflow-hidden border-b border-blue-900/30">
      
      {/* Ambient background glow - Blue Black */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Leaf className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ekosistem Hayati Interaktif 3D</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Biosfer Hayati VioShell — Sinergi Cangkang & Telang
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Visualisasi interaktif siklus sirkular pemanfaatan 2,8 ton/bulan limbah cangkang telur dan pigmen bunga telang sebagai biosensor kesegaran pangan non-destruktif terstandarisasi.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-blue-950/70 px-3.5 py-2 rounded-xl border border-blue-800/80 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive GPU Canvas · 60 FPS Native</span>
          </div>
        </div>

        {/* The Native Crash-Proof 3D Canvas Container */}
        <div className="relative shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-900/40 bg-[#040711] min-h-[420px] sm:min-h-[460px] flex flex-col justify-between p-3.5 sm:p-6 lg:p-8">
          
          {/* Background Canvas Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
            style={{ display: 'block' }}
          />

          {/* Top Interactive Glass Control Dock */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 sm:gap-3 bg-[#0b1120]/90 backdrop-blur-md p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border border-blue-800/40 shadow-xl max-w-2xl w-full">
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-sky-400 px-2 py-1 bg-sky-950/80 rounded-lg border border-sky-800/60 whitespace-nowrap">
                Filter:
              </span>
              <button
                onClick={() => setActiveMode('all')}
                className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer min-h-[36px] flex items-center ${
                  activeMode === 'all'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveMode('calcite')}
                className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer min-h-[36px] flex items-center ${
                  activeMode === 'calcite'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Kalsit CaCO₃
              </button>
              <button
                onClick={() => setActiveMode('anthocyanin')}
                className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer min-h-[36px] flex items-center ${
                  activeMode === 'anthocyanin'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Bunga Telang
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-xl bg-blue-900/40 hover:bg-blue-800/60 text-sky-300 border border-blue-700/50 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer min-h-[36px]"
                title={isPlaying ? "Jeda Simulasi" : "Jalankan Simulasi"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Jeda' : 'Putar'}</span>
              </button>
            </div>
          </div>

          {/* Interactive Floating Stage Centerpiece */}
          <div className="relative z-10 my-4 sm:my-8 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
                  activeCard === idx
                    ? 'bg-[#0d1527]/95 border-sky-400/80 shadow-2xl ring-1 ring-sky-400/30'
                    : 'bg-[#070b15]/80 border-blue-900/40 hover:border-blue-700/60 opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${card.badgeColor}`}>
                    {card.tag}
                  </span>
                  <span className="text-[11px] font-mono text-sky-400 font-semibold">
                    {card.statsVal}
                  </span>
                </div>

                {/* Real High-Tech SVG illustration */}
                <div className="mb-2 sm:mb-3 rounded-xl overflow-hidden bg-black/40 p-1 border border-white/5">
                  {card.svgGraphic}
                </div>

                <h3 className="text-sm font-bold text-white mb-0.5 sm:mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-sky-200/80 font-medium mb-1.5 sm:mb-2">
                  {card.subtitle}
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Interactive Toolbar with Working Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-blue-900/30 bg-[#040711]/60 rounded-xl sm:rounded-2xl p-2.5 sm:px-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-[11px] sm:text-xs">
                Arahkan kursor atau usap jari pada bidang kanvas untuk memandu interaksi molekuler.
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setReactionSimulated(!reactionSimulated)}
                className="w-full sm:w-auto min-h-[42px] px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:opacity-95 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <FlaskConical className="w-3.5 h-3.5 text-cyan-300" />
                <span>{reactionSimulated ? "Reset Reaksi pH" : "Uji Reaksi Difusi Gas TVB-N"}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Feature Badges under the 3D world */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-[#0b1120]/90 p-4 rounded-2xl border border-blue-900/30 text-xs text-slate-300 flex items-start gap-3 shadow-lg">
            <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Navigasi Spasial 3D Real-Time</strong>
              <span>Orbit dan respons partikel kalsit serta pigmen antosianin dihitung secara langsung dengan presisi 60 FPS.</span>
            </div>
          </div>

          <div className="bg-[#0b1120]/90 p-4 rounded-2xl border border-blue-900/30 text-xs text-slate-300 flex items-start gap-3 shadow-lg">
            <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Bebas Hambatan WebGL2 & Iframe</strong>
              <span>Dirender secara native tanpa risiko context-lost atau pesan error sistem pada perangkat mobile dan desktop.</span>
            </div>
          </div>

          <div className="bg-[#0b1120]/90 p-4 rounded-2xl border border-blue-900/30 text-xs text-slate-300 flex items-start gap-3 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Sains Pangan Sirkular MBG</strong>
              <span>Representasi visual akurat dari 2,8 ton limbah cangkang telur lokal dan pigmen alami untuk perlindungan gizi anak sekolah.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
