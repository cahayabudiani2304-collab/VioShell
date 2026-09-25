import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, X, Lock, Mail, Building, User, Activity } from 'lucide-react';
import { UserAccount } from '../types';

interface EntryGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserAuth: (user: UserAccount) => void;
}

export const EntryGatewayModal: React.FC<EntryGatewayModalProps> = ({
  isOpen,
  onClose,
  onUserAuth
}) => {
  const [activeTab, setActiveTab] = useState<'guest' | 'login' | 'register'>('guest');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('SPPG Kecamatan Bandar Sribhawono');
  const [role, setRole] = useState<'Pengawas MBG' | 'Pengelola Dapur SPPG' | 'Analis Mutu' | 'Tamu Riset'>('Pengawas MBG');
  const [formSuccess, setFormSuccess] = useState('');

  const handleGuestEntry = () => {
    onUserAuth({
      name: 'Pengunjung Riset / Dapur Umum',
      role: 'Tamu Riset',
      organization: 'Akses Publik Eksplorasi VioShell',
      email: 'tamu@vioshell.id',
      isLoggedIn: true
    });
    onClose();
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess('Autentikasi Berhasil! Mengarahkan ke Dashboard Web Data...');
    setTimeout(() => {
      onUserAuth({
        name: email.split('@')[0] || 'Petugas Pengawas MBG',
        role: role,
        organization: organization || 'SPPG Bandar Sribhawono',
        email: email || 'pengawas@vioshell.id',
        isLoggedIn: true
      });
      setFormSuccess('');
      onClose();
    }, 600);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess('Pendaftaran Dapur SPPG / Pengawas Berhasil Diaktifkan!');
    setTimeout(() => {
      onUserAuth({
        name: fullName || 'Penanggung Jawab MBG',
        role: role,
        organization: organization || 'SPPG Sribhawono',
        email: email || 'registrasi@vioshell.id',
        isLoggedIn: true
      });
      setFormSuccess('');
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Container with Spring Physics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="relative w-full max-w-xl max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
          >
            {/* Top Luminous Ambient Glow Bar */}
            <div className="h-2 bg-gradient-to-r from-[#2A246B] via-[#4338CA] to-[#0D9488] shrink-0" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-20 cursor-pointer flex items-center justify-center"
              aria-label="Tutup gerbang masuk"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-5 sm:p-7 lg:p-8 overflow-y-auto">
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/70">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Gerbang Akses Terpadu</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Versi 1 (Biokomposit) + Versi 2 (Pure Web Data)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
                Selamat Datang di Portal VioShell
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Pilih metode akses Anda untuk menguji riset sensor pewarna alami cangkang telur atau memonitor kesegaran pangan berbasis <strong className="text-indigo-900 font-semibold">100% data web murni (tanpa sensor fisik)</strong>.
              </p>

              {/* Segmented Mode Selector */}
              <div className="flex items-center p-1 bg-slate-100 rounded-xl mt-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('guest')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'guest'
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Eksplorasi Tamu
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'login'
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Masuk Petugas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'register'
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Daftar Dapur SPPG
                </button>
              </div>

              {/* Tab 1: Guest Access */}
              {activeTab === 'guest' && (
                <motion.div
                  key="guest-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 space-y-4"
                >
                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          Akses Terbuka Dua Mode Terintegrasi:
                        </h4>
                        <ul className="text-xs text-slate-600 mt-1 space-y-1">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <strong>Versi 1:</strong> Simulasi transisi warna 0–36 jam (CaCO₃ & Antosianin).
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            <strong>Versi 2:</strong> Kalkulator & monitor mutu murni data web tanpa alat fisik.
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <strong>Animasi Menonjol:</strong> Scrollytelling 3D, Luminous Halo, Fluid Expansion.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleGuestEntry}
                    className="w-full py-3.5 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#2A246B] via-[#4338CA] to-[#0D9488] text-white hover:opacity-95 shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Mulai Eksplorasi Mulus Sekarang</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Tab 2: Login Petugas */}
              {activeTab === 'login' && (
                <motion.form
                  key="login-tab"
                  onSubmit={handleLoginSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email / ID Petugas Pengawas
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="contoh: pengawas.mbg@unila.ac.id"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Peran Operasional
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white text-slate-800"
                    >
                      <option value="Pengawas MBG">Pengawas Program MBG (Kecamatan)</option>
                      <option value="Pengelola Dapur SPPG">Pengelola Dapur SPPG (Produksi Porsi)</option>
                      <option value="Analis Mutu">Analis Mutu Laboratorium Pangan</option>
                    </select>
                  </div>

                  {formSuccess && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{formSuccess}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-[#2A246B] hover:bg-[#201b54] text-white transition-all shadow-md shadow-indigo-900/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Masuk Dashboard Pengawas</span>
                  </button>
                </motion.form>
              )}

              {/* Tab 3: Register Dapur SPPG */}
              {activeTab === 'register' && (
                <motion.form
                  key="register-tab"
                  onSubmit={handleRegisterSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Penanggung Jawab
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Nama lengkap"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Unit SPPG / Katering
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder="SPPG 04 Sribhawono"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Resmi Registrasi
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="dapur.sppg@mbg-sribhawono.id"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-800"
                      />
                    </div>
                  </div>

                  {formSuccess && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{formSuccess}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:opacity-95 text-white transition-all shadow-md shadow-teal-700/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Daftarkan Unit Dapur SPPG</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              )}

              {/* Bottom Trust Line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Data tersimpan aman di peramban lokal</span>
                <span className="font-mono">SMAN 1 Bandar Sribhawono × Unila</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
