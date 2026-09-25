import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Cpu, User, Leaf, BookOpen, Layers } from 'lucide-react';
import { UserAccount } from '../types';

interface NavbarProps {
  onSimulateClick: () => void;
  onPureDataClick: () => void;
  onAuthModalOpen: () => void;
  currentUser: UserAccount | null;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onSimulateClick, 
  onPureDataClick,
  onAuthModalOpen,
  currentUser
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#040711]/90 backdrop-blur-md border-b border-blue-900/30 transition-all text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Logo & Brand wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 p-0.5 shadow-md shadow-blue-500/25 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#040711] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-cyan-300 text-lg font-mono">VS</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  Vio<span className="text-sky-400">Shell</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-950/80 text-sky-300 border border-blue-800/80 hidden sm:inline-block">
                  v1 Biokomposit + v2 Web Data
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                SMAN 1 Bandar Sribhawono × Lab Terpadu Unila
              </p>
            </div>
          </a>

          {/* Zone 2: Navigation Links for Laptop (lg) and Desktop PC (xl) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            <a href="#buku-showcase" className="text-xs font-bold text-sky-300 hover:text-white transition-colors flex items-center gap-1.5 bg-blue-950/50 hover:bg-blue-900/50 px-2 py-1 xl:px-2.5 rounded-lg border border-blue-800/60 whitespace-nowrap">
              <BookOpen className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="hidden xl:inline">3 Buku Riset</span>
              <span className="xl:hidden">3 Buku</span>
            </a>
            <a href="#sylva-living-world" className="text-xs font-bold text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5 bg-cyan-950/50 hover:bg-cyan-900/50 px-2 py-1 xl:px-2.5 rounded-lg border border-cyan-800/60 whitespace-nowrap">
              <Leaf className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Biosfer 3D</span>
            </a>
            <a href="#masalah" className="text-xs font-medium text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap px-1">
              Urgensi KLB
            </a>
            <a href="#solusi" className="text-xs font-medium text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap px-1">
              Biokomposit
            </a>
            <a href="#simulasi" className="text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1 whitespace-nowrap px-1">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Simulasi</span>
            </a>
            <a href="#pure-data-engine" className="text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1 whitespace-nowrap px-1">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">Data Engine (v2)</span>
              <span className="xl:hidden">Data Engine</span>
            </a>
            <a href="#scrollytelling" className="text-xs font-medium text-slate-300 hover:text-sky-400 transition-colors whitespace-nowrap px-1">
              Lapisan 3D
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3">
            {currentUser && currentUser.isLoggedIn ? (
              <button
                onClick={onAuthModalOpen}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#0e1424] text-slate-200 hover:bg-[#162038] border border-blue-900/50 transition-all cursor-pointer min-h-[40px]"
              >
                <User className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate max-w-[100px] xl:max-w-[130px]">{currentUser.name}</span>
              </button>
            ) : (
              <button
                onClick={onAuthModalOpen}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-sky-300 border border-blue-900/40 hover:border-sky-500/40 transition-all cursor-pointer min-h-[40px] whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden md:inline">Masuk / Daftar</span>
                <span className="md:hidden">Akun</span>
              </button>
            )}

            <button
              id="nav-simulate-button"
              onClick={onSimulateClick}
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 text-white hover:opacity-95 shadow-md shadow-blue-600/30 transition-all cursor-pointer min-h-[40px] whitespace-nowrap"
            >
              <span>Uji Simulasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile menu toggle & quick action */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onSimulateClick}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg text-white shadow-sm flex items-center gap-1"
            >
              <span>Simulasi</span>
              <Sparkles className="w-3 h-3 text-cyan-200" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigasi menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile In-Place Accordion Dropdown (NOT A LATERAL SLIDE-OVER!) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-blue-900/30 py-4 px-2 space-y-1.5 bg-[#070b15]/95">
            <a
              href="#buku-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-300 bg-blue-950/60"
            >
              3 Buku Monograf Riset (ThreeUI Showcase)
            </a>
            <a
              href="#sylva-living-world"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-950/60"
            >
              Ekosistem Biosfer 3D (ThreeUI Living World)
            </a>
            <a
              href="#masalah"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5"
            >
              Urgensi KLB & Limbah Cangkang
            </a>
            <a
              href="#solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5"
            >
              Solusi Biokomposit Cangkang Telur (v1)
            </a>
            <a
              href="#simulasi"
              onClick={() => {
                setMobileMenuOpen(false);
                onSimulateClick();
              }}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-400 bg-blue-950/40"
            >
              Simulasi Perubahan Warna (0–36 Jam)
            </a>
            <a
              href="#pure-data-engine"
              onClick={() => {
                setMobileMenuOpen(false);
                onPureDataClick();
              }}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-950/40"
            >
              Monitor Murni Data Web (v2 - Tanpa Sensor)
            </a>
            <a
              href="#scrollytelling"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5"
            >
              Scrollytelling Lapisan Kemasan 3D
            </a>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onAuthModalOpen();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0e1424] text-slate-200 border border-blue-900/50"
              >
                <User className="w-4 h-4 text-sky-400" />
                <span>{currentUser && currentUser.isLoggedIn ? `Akun: ${currentUser.name}` : 'Masuk / Daftar Akun MBG'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
