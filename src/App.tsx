/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Leaf, Sparkles, Cpu, Layers } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroBooksShowcase } from './components/HeroBooksShowcase';
import { SylvaLivingWorldShowcase } from './components/SylvaLivingWorldShowcase';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ColorSimulation } from './components/ColorSimulation';
import { PureDataEngineSection } from './components/PureDataEngineSection';
import { ScrollytellingMockup } from './components/ScrollytellingMockup';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { LabValidationSection } from './components/LabValidationSection';
import { SdgsSection } from './components/SdgsSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { EntryGatewayModal } from './components/EntryGatewayModal';
import { UserAccount } from './types';

export default function App() {
  const [entryModalOpen, setEntryModalOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  const scrollToSimulate = () => {
    const elem = document.getElementById('simulasi');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolution = () => {
    const elem = document.getElementById('solusi');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPureData = () => {
    const elem = document.getElementById('pure-data-engine');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040711] text-white flex flex-col font-sans selection:bg-[#38bdf8]/30 selection:text-sky-200 relative">
      
      {/* 0. Smooth Entry Gateway Modal (Before Entering or Registering) */}
      <EntryGatewayModal
        isOpen={entryModalOpen}
        onClose={() => setEntryModalOpen(false)}
        onUserAuth={(user) => {
          setCurrentUser(user);
        }}
      />

      {/* Navigation Bar (Cohesive Dark Luxury Glass - No Lateral Drawer!) */}
      <Navbar
        onSimulateClick={scrollToSimulate}
        onPureDataClick={scrollToPureData}
        onAuthModalOpen={() => setEntryModalOpen(true)}
        currentUser={currentUser}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 lg:pb-0">
        
        {/* 1. Premier Hero Showcase: 3 Books (ThreeUI BestsellersBookShowcase) at the very start */}
        <HeroBooksShowcase
          onExploreClick={scrollToSolution}
          onSimulateClick={scrollToSimulate}
          onPureDataClick={scrollToPureData}
          onAuthModalOpen={() => setEntryModalOpen(true)}
        />

        {/* 2. Sylva Living World 3D (ThreeUI - Variant: living-green) */}
        <SylvaLivingWorldShowcase />

        {/* 3. Problem Section (Urgensi Nasional, Risiko KLB, & Limbah Cangkang) */}
        <ProblemSection />

        {/* 4. Solution Section (Versi 1: Biokomposit Cangkang Telur & Bunga Telang) */}
        <SolutionSection />

        {/* 5. Interactive Freshness Color Detector Simulation (0-36 Hours) */}
        <ColorSimulation />

        {/* 6. Pure Web-Data Freshness Intelligence Engine (Versi 2: 100% Tanpa Sensor Fisik) */}
        <PureDataEngineSection />

        {/* 7. Scroll-driven Frame Animation (Scrollytelling 3D Mockup) */}
        <ScrollytellingMockup />

        {/* 8. Target Audience & Distribution Supply Chain */}
        <TargetAudienceSection />

        {/* 9. Scientific Validation (FTIR & Spectrophotometry Lab Terpadu Unila) */}
        <LabValidationSection />

        {/* 10. SDGs & Impact (Good Health & Responsible Consumption) */}
        <SdgsSection />

        {/* 11. Research Team Profile */}
        <TeamSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Quick Action Thumb Navigation Dock (Hidden on Laptop & Desktop PC) */}
      <nav aria-label="Navigasi Cepat Mobile" className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#040711]/90 backdrop-blur-xl border-t border-blue-900/50 px-2 pt-1 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around shadow-2xl">
        <a
          href="#buku-showcase"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-slate-400 hover:text-sky-300 transition-colors min-h-[44px]"
        >
          <BookOpen className="w-4 h-4 text-sky-400" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">3 Buku</span>
        </a>
        <a
          href="#sylva-living-world"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-slate-400 hover:text-cyan-300 transition-colors min-h-[44px]"
        >
          <Leaf className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Biosfer 3D</span>
        </a>
        <button
          onClick={scrollToSimulate}
          className="flex flex-col items-center justify-center py-1 px-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-md shadow-blue-500/25 min-h-[42px] cursor-pointer active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-cyan-200" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Simulasi</span>
        </button>
        <button
          onClick={scrollToPureData}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-slate-400 hover:text-teal-300 transition-colors min-h-[44px] cursor-pointer"
        >
          <Cpu className="w-4 h-4 text-teal-400" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Web Data</span>
        </button>
        <a
          href="#solusi"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-slate-400 hover:text-indigo-300 transition-colors min-h-[44px]"
        >
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Solusi</span>
        </a>
      </nav>
    </div>
  );
}
