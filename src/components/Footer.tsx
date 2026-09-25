import React from 'react';
import { ShieldCheck, Heart, ArrowUp, Leaf, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060709] text-slate-400 py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2A246B] via-[#4338CA] to-[#0D9488] p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center text-white font-mono font-bold text-xs">
                  VS
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Vio<span className="text-teal-400">Shell</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Inovasi Smart Packaging Berbasis Limbah Cangkang Telur dan Ekstrak Bunga Telang sebagai Indikator Kesegaran Pangan. Mengintegrasikan riset biokomposit alami dengan pemantauan murni data web tanpa ketergantungan sensor fisik.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Validasi Riset: Laboratorium Terpadu Universitas Lampung</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-300 font-mono mb-3">
              Modul Platform
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#buku-showcase" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#C3A47B]" />
                  <span>Monograf 3 Buku Riset</span>
                </a>
              </li>
              <li>
                <a href="#sylva-living-world" className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sylva Living Biosphere 3D</span>
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-teal-400 transition-colors">
                  Teknologi & Formulasi Biokomposit
                </a>
              </li>
              <li>
                <a href="#simulasi" className="hover:text-teal-400 transition-colors">
                  Simulasi Detektor Warna (0–36 Jam)
                </a>
              </li>
              <li>
                <a href="#pure-data-engine" className="hover:text-teal-400 transition-colors">
                  Monitor Murni Data Web (v2)
                </a>
              </li>
            </ul>
          </div>

          {/* Research & Compliance */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-slate-300 font-mono mb-3">
              Lembaga & Afiliasi
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Karya Tulis Ilmiah Siswa SMAN 1 Bandar Sribhawono, Lampung Timur, bekerjasama dengan 14 Dapur SPPG lokal dan Laboratorium Terpadu Unila.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} VioShell • AHM Best Student 2026 (PT Astra Honda Motor - Sinergi Bagi Negeri) • SMAN 1 Bandar Sribhawono × Lab Terpadu Unila.
          </p>
          <div className="flex items-center gap-1">
            <span>Didedikasikan untuk Ketahanan Pangan Anak Bangsa</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline-block ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
