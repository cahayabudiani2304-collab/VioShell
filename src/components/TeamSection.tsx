import React from 'react';
import { Users, GraduationCap, Award, School, Calendar, Building, Landmark, FlaskConical, CheckCircle } from 'lucide-react';
import { TEAM_MEMBERS, MENTOR_AND_STAKEHOLDERS, RESEARCH_TIMELINE } from '../data/mockData';

export const TeamSection: React.FC = () => {
  return (
    <section id="tim" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-red-400" />
            <span>Karya Tulis Ilmiah AHM Best Student 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Profil Tim Peneliti & Stakeholder Terlibat
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Inovasi VioShell dikembangkan secara kolaboratif oleh siswi SMAN 1 Bandar Sribhawono (Kelas XI.MIPA), Lampung Timur, dengan bimbingan guru dan validasi independen Laboratorium Terpadu Universitas Lampung.
          </p>
        </div>

        {/* 4 Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-400/40 transition-all text-center"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2A246B] via-[#4338CA] to-[#0D9488] p-0.5 mx-auto mb-4 shadow-lg shadow-indigo-600/20">
                  <div className="w-full h-full bg-[#090B0E] rounded-[14px] flex items-center justify-center">
                    <span className="font-extrabold text-teal-300 font-mono text-xl">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                    </span>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-950/70 border border-sky-800/50 text-sky-300 mb-2">
                  Peneliti #{idx + 1}
                </div>

                <h3 className="text-base font-bold text-white leading-snug">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold text-teal-300 mt-1 mb-2">
                  {member.role}
                </p>

                <p className="text-[11px] text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10 leading-relaxed text-left mb-3">
                  {member.specialty}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between font-mono">
                <span>{member.classGrade}</span>
                <span className="text-sky-400">SMAN 1</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guru Pembimbing & 4 Stakeholders Terlibat (Halaman 9 Paper) */}
        <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 shadow-xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">
                Kolaborasi Pihak Terlibat (Stakeholder Eksternal & Internal)
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
                Sinergi Sekolah, Dapur SPPG, dan Universitas Lampung
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Bagian 2.B Makalah AHM
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MENTOR_AND_STAKEHOLDERS.map((st, sIdx) => (
              <div key={sIdx} className="bg-[#090B0E] p-4 sm:p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950/70 px-2.5 py-0.5 rounded border border-teal-800/50">
                      {st.role}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {st.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mb-2">
                    {st.institution}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.contributions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jadwal Waktu Pelaksanaan Riset (Mei – Agustus 2026) */}
        <div className="bg-[#11141A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tabel Waktu Pelaksanaan Riset AHM Best Student 2026
            </h3>
          </div>
          <div className="overflow-x-auto -mx-1 sm:mx-0">
            <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-xs uppercase">
                  <th className="py-2.5 px-3">No.</th>
                  <th className="py-2.5 px-3">Tahap Kegiatan</th>
                  <th className="py-2.5 px-3 text-right">Waktu Pelaksanaan (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                {RESEARCH_TIMELINE.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-white/5">
                    <td className="py-2.5 px-3 text-slate-400">{tIdx + 1}</td>
                    <td className="py-2.5 px-3 text-slate-200 font-sans font-medium">{item.task}</td>
                    <td className="py-2.5 px-3 text-right text-cyan-300 font-bold">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
