import React from 'react';
import { ShieldAlert, Clock, Recycle, AlertTriangle, ArrowRight, Ban, EyeOff, FileText } from 'lucide-react';
import { PROBLEM_STATS } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="masalah" className="py-14 sm:py-20 lg:py-24 bg-[#090B0E] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Problem Statement & Urgensi Nasional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
            Tiga Tantangan Kritis: Keamanan Pangan, Uji Konvensional, dan Krisis Limbah
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Distribusi pangan skala masif seperti program katering dan Makan Bergizi Gratis (MBG) menghadapi dilema ganda antara risiko mikrobiologis yang tidak kasat mata dan penumpukan limbah organik lokal.
          </p>
        </div>

        {/* 3 Main Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Keracunan Pangan BPOM */}
          <div className="bg-[#11141A] hover:bg-[#151922] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between transition-all hover:border-rose-500/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-md uppercase tracking-wider border border-rose-800/60">
                  Data BPOM RI (2022)
                </span>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>

              <div className="my-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  72 <span className="text-xl text-rose-400 font-bold font-sans">KLB</span>
                </div>
                <div className="text-xl font-bold text-rose-400 font-mono mt-0.5">
                  Rp2,9 Triliun
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">
                  Estimasi Kerugian Ekonomi Nasional
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-4 mb-2">
                Risiko Keracunan Pangan Skala Masif
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Penurunan mutu kesegaran protein hewani pada rantai distribusi berskala besar (jasa katering, dapur SPPG, dan MBG) berisiko menimbulkan Kejadian Luar Biasa (KLB). Bakteri patogen melepaskan racun sebelum gejala fisik terlihat.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span className="font-medium text-rose-300">Dampak: Krisis Kesehatan</span>
              <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-slate-300">SNI / BPOM</span>
            </div>
          </div>

          {/* Card 2: Kelemahan Uji Organoleptik */}
          <div className="bg-[#11141A] hover:bg-[#151922] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between transition-all hover:border-amber-500/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md uppercase tracking-wider border border-amber-800/60">
                  Metode Konvensional
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="my-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Subjektif & Terlambat
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">
                  Uji Penciuman & Penglihatan Manusia
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-4 mb-2">
                Kelemahan Verifikasi Organoleptik
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Penciuman manusia tidak mampu mendeteksi konsentrasi rendah gas volatil amina (<em className="italic font-medium text-amber-300">TVB-N</em>) pada awal fase penurunan mutu (jam ke-12 hingga ke-18). Saat bau busuk tercium, makanan sudah terlanjur basi dan berbahaya jika dikonsumsi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span className="font-medium text-amber-300">Kelemahan: Destruktif & Bias</span>
              <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-slate-300">Indera Manusia</span>
            </div>
          </div>

          {/* Card 3: Limbah Cangkang Telur Lokal */}
          <div className="bg-[#11141A] hover:bg-[#151922] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between transition-all hover:border-emerald-500/40 md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-800/60">
                  Kec. Bandar Sribhawono
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Recycle className="w-5 h-5" />
                </div>
              </div>

              <div className="my-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  2,8 <span className="text-xl text-emerald-400 font-bold font-sans">Ton / Bulan</span>
                </div>
                <div className="text-base font-semibold text-emerald-400 font-mono mt-0.5">
                  700 kg / minggu dari 14 SPPG
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">
                  Potensi Pencemaran Lingkungan
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mt-4 mb-2">
                Akumulasi Limbah Cangkang Telur
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tingginya konsumsi telur pada 14 Satuan Pelayanan Pangan Gizi (SPPG) menghasilkan timbulan cangkang masif. Tanpa pengolahan, timbunan ini memicu gas metana, bau tak sedap, dan sarang vektor penyakit. Padahal mengandung 94–95% Kalsium Karbonat berharga.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
              <span className="font-medium text-emerald-300">Solusi: Valorisasi Biosensor</span>
              <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-slate-300">14 SPPG Lokal</span>
            </div>
          </div>

        </div>

        {/* Comparative Table: Konvensional vs VioShell */}
        <div className="mt-10 sm:mt-12 bg-[#11141A] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 border-b border-white/10 pb-4 sm:pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">Matriks Komparasi Ilmiah</span>
              <h3 className="text-lg sm:text-2xl font-bold mt-0.5 sm:mt-1">Mengapa Metode Konvensional Harus Digantikan?</h3>
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              Perbandingan parameter mutu antara verifikasi manual organoleptik vs biosensor VioShell.
            </div>
          </div>

          <div className="sm:hidden text-[11px] font-mono text-cyan-300/80 mb-2 flex items-center gap-1.5">
            <span>← Geser tabel ke samping untuk membaca data lengkap →</span>
          </div>

          <div className="overflow-x-auto -mx-1 sm:mx-0">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-xs uppercase tracking-wider font-mono">
                  <th className="py-3 px-3">Parameter Uji</th>
                  <th className="py-3 px-3 text-rose-300">Uji Organoleptik Konvensional</th>
                  <th className="py-3 px-3 text-teal-300">Biosensor Pintar VioShell</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3 px-3 font-medium text-white">Sifat Verifikasi</td>
                  <td className="py-3 px-3 text-rose-300/90">Destruktif (kemasan wajib dibuka, merusak segel steril)</td>
                  <td className="py-3 px-3 text-teal-300 font-semibold">Non-Destruktif (terlihat jelas dari luar tanpa membuka tutup)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-white">Objektivitas Hasil</td>
                  <td className="py-3 px-3 text-rose-300/90">Sangat subjektif, rentan kelelahan sensorik pemeriksa</td>
                  <td className="py-3 px-3 text-teal-300 font-semibold">Objektif berbasis perubahan warna reaksi biokimia terukur</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-white">Waktu Deteksi Awal</td>
                  <td className="py-3 px-3 text-rose-300/90">Terlambat (&gt; 24 jam saat gas sudah berbau pekat)</td>
                  <td className="py-3 px-3 text-teal-300 font-semibold">Real-time sejak fase awal (jam ke-12 pelepasan TVB-N)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-white">Kecepatan Skrining MBG</td>
                  <td className="py-3 px-3 text-rose-300/90">Lambat (harus dicium satu per satu secara acak)</td>
                  <td className="py-3 px-3 text-teal-300 font-semibold">Instan (ribuan boks makanan diinspeksi serempak via warna)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-white">Dampak Ekologis</td>
                  <td className="py-3 px-3 text-slate-400">Netral (tidak menyelesaikan timbunan limbah dapur)</td>
                  <td className="py-3 px-3 text-teal-300 font-semibold">Sirkular (menyerap 2,8 ton/bln limbah cangkang telur lokal)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
