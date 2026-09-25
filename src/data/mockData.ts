import { FreshnessStage, ProblemStat, MaterialComponent, LabValidationData, FoodCategoryProfile } from '../types';

export const FRESHNESS_STAGES: FreshnessStage[] = [
  {
    id: 'fresh',
    timeRange: '0 – 6 Jam',
    hoursMin: 0,
    hoursMax: 6,
    title: 'Sangat Segar',
    colorName: 'Biru Tua Keunguan (Deep Indigo Violet)',
    hexCode: '#2B2677',
    gradient: 'from-[#1E1B4B] via-[#312E81] to-[#3730A3]',
    borderHex: '#4338CA',
    textColor: 'text-indigo-200',
    statusBadge: 'Aman & Sangat Segar',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
    phRange: 'pH 6.0 – 6.4 (Netral / Asam Lemah)',
    tvbnRange: '< 10 mg N/100g (Normal)',
    description: 'Pangan dalam mutu organoleptik dan nutrisi tertinggi. Belum terdeteksi pelepasan senyawa basa volatil hasil degradasi protein oleh mikroorganisme.',
    recommendation: 'Sangat optimal untuk langsung dikonsumsi atau didistribusikan dalam program katering / Makan Bergizi Gratis (MBG).',
    foodCondition: 'Tekstur padat kenyal, aroma alami segar khas makanan baru matang, aman bagi semua kelompok konsumen.'
  },
  {
    id: 'initial_change',
    timeRange: '12 – 18 Jam',
    hoursMin: 12,
    hoursMax: 18,
    title: 'Perubahan Mutu Awal',
    colorName: 'Biru Kehijauan (Cyan Teal)',
    hexCode: '#0D9488',
    gradient: 'from-[#115E59] via-[#0D9488] to-[#14B8A6]',
    borderHex: '#0F766E',
    textColor: 'text-teal-200',
    statusBadge: 'Perhatian: Segera Konsumsi',
    badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-400/40',
    phRange: 'pH 6.5 – 7.0 (Mendekati Netral-Alkali Lemah)',
    tvbnRange: '10 – 15 mg N/100g (Pelepasan Awal)',
    description: 'Bakteri pembusuk mulai aktif memecah asam amino, melepaskan uap gas amonia dan amina primer yang sedikit menaikkan pH headspace kemasan.',
    recommendation: 'Segera konsumsi dalam waktu 1-2 jam ke depan atau simpan segera di suhu dingin (chiller). Jangan biarkan di suhu ruang.',
    foodCondition: 'Penurunan kualitas tekstur minor mulai terjadi, aroma belum terasa menyengat bagi indera penciuman manusia namun biosensor sudah mendeteksi.'
  },
  {
    id: 'deterioration',
    timeRange: '24 Jam',
    hoursMin: 24,
    hoursMax: 24,
    title: 'Penurunan Mutu / Kritis',
    colorName: 'Hijau (Leaf Green)',
    hexCode: '#16A34A',
    gradient: 'from-[#14532D] via-[#16A34A] to-[#22C55E]',
    borderHex: '#15803D',
    textColor: 'text-green-200',
    statusBadge: 'Peringatan: Penurunan Mutu',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
    phRange: 'pH 7.1 – 7.8 (Kondisi Basa)',
    tvbnRange: '15 – 25 mg N/100g (Mendekati Ambang Batas)',
    description: 'Struktur antosianin bertransformasi membentuk basa kuinoidal tidak terprotonasi akibat akumulasi senyawa TVB-N di ruang tertutup kemasan.',
    recommendation: 'Periksa secara sangat ketat sebelum disajikan. Sangat tidak dianjurkan untuk dikonsumsi oleh anak-anak, lansia, atau individu rentan.',
    foodCondition: 'Lendir mikroba mulai tampak di permukaan bahan protein, elastisitas pangan menurun drastis.'
  },
  {
    id: 'spoiled',
    timeRange: '36 Jam',
    hoursMin: 36,
    hoursMax: 36,
    title: 'Basi / Mutu Rusak Lanjut',
    colorName: 'Kuning Kecoklatan (Brownish Yellow)',
    hexCode: '#B45309',
    gradient: 'from-[#78350F] via-[#B45309] to-[#D97706]',
    borderHex: '#92400E',
    textColor: 'text-amber-200',
    statusBadge: 'BAHAYA: Basi & Tidak Layak',
    badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
    phRange: 'pH > 8.0 (Alkali Kuat)',
    tvbnRange: '> 30 mg N/100g (Di Atas Ambang Aman BPOM/SNI)',
    description: 'Cincin heterosiklik antosianin mengalami pembukaan cincin menjadi senyawa kalkon terdegradasi. Pangan telah mengalami pembusukan mikrobiologis tingkat lanjut.',
    recommendation: 'TIDAK LAYAK KONSUMSI! Buang makanan ini untuk mencegah Kejadian Luar Biasa (KLB) keracunan pangan.',
    foodCondition: 'Bau busuk menyengat (amonia/trimetilamina tajam), berlendir tebal, warna makanan pudar dan berisiko tinggi toksin bakteri patogen.'
  }
];

export const PROBLEM_STATS: ProblemStat[] = [
  {
    id: 'food-poisoning',
    badge: 'Kedaruratan Kesehatan & Ekonomi',
    title: 'Risiko Keracunan Pangan Massal',
    statValue: '72 KLB / Rp2,9 T',
    statLabel: 'Kasus KLB 2022 & Kerugian Ekonomi Nasional',
    description: 'BPOM mencatat 72 kasus Kejadian Luar Biasa (KLB) keracunan pangan di Indonesia pada 2022 dengan estimasi kerugian ekonomi mencapai Rp2,9 Triliun. Risiko ini berlipat ganda pada distribusi berskala masif seperti katering dan program Makan Bergizi Gratis (MBG).',
    source: 'Laporan Tahunan BPOM RI (2022)',
    impactIcon: 'ShieldAlert'
  },
  {
    id: 'organoleptic-flaw',
    badge: 'Kelemahan Metode Konvensional',
    title: 'Uji Organoleptik Terlambat & Subjektif',
    statValue: 'Subjektif & Terlambat',
    statLabel: 'Deteksi Hanya Saat Makanan Sudah Bau Busuk',
    description: 'Pengecekan kesegaran dengan indera penciuman manusia bersifat sangat subjektif, tidak terstandar, dan sering terlambat mendeteksi fase awal pembusukan (pelepasan awal TVB-N). Membuka tutup kotak makanan juga merusak sterilitas dan memicu kontaminasi silang.',
    source: 'Analisis Riset Komparatif VioShell (2026)',
    impactIcon: 'ClockAlert'
  },
  {
    id: 'eggshell-waste',
    badge: 'Potensi Krisis Ekologis Lokal',
    title: 'Akumulasi Limbah Cangkang Telur',
    statValue: '2,8 Ton / Bulan',
    statLabel: 'Limbah dari 14 SPPG di Bandar Sribhawono',
    description: '14 Satuan Pelayanan Pangan Gizi (SPPG) di Kecamatan Bandar Sribhawono menghasilkan sekitar 700 kg limbah cangkang telur per minggu (2,8 ton per bulan). Jika tidak dimanfaatkan, limbah menumpuk, memicu bau busuk, dan mencemari ekosistem lingkungan.',
    source: 'Survei Lapangan SPPG Kec. Bandar Sribhawono',
    impactIcon: 'Recycle'
  }
];

export const MATERIALS_INFO: MaterialComponent[] = [
  {
    name: 'Serbuk Cangkang Telur',
    role: 'Matriks Pembawa & Adsorben Mikropori Alami',
    percentageOrSpec: '94 – 95% Kalsium Karbonat (CaCO₃)',
    scientificExplanation: 'Struktur kristal kalsit mikropori cangkang telur memberikan luas permukaan adsorpsi tinggi untuk mengimobilisasi pigmen antosianin secara stabil, mencegah peluluhan dan memaksimalkan kontak difusi gas TVB-N.',
    badge: 'Limbah Lokal Valorisasi'
  },
  {
    name: 'Ekstrak Bunga Telang (Clitoria ternatea)',
    role: 'Kromofor Alami Biosensor pH',
    percentageOrSpec: 'Kadar Antosianin 6,16 mg/g (Spektrofotometri)',
    scientificExplanation: 'Mengandung poliasilasi antosianin jenis ternatin yang sangat stabil dan peka terhadap perubahan pH akibat uap basa volatil mikroba, menghasilkan transisi kromatis yang kasat mata dari biru-ungu hingga coklat kekuningan.',
    badge: 'Pewarna Bio-Indikator'
  },
  {
    name: 'Pati Jagung (Cornstarch Matrix)',
    role: 'Biopolimer Film Biodegradable',
    percentageOrSpec: 'Polimer Alami Ramah Lingkungan',
    scientificExplanation: 'Membentuk kerangka jaringan rantai polimer gelatinisasi yang elastis, transparan, dan dapat terurai secara hayati (biodegradable) tanpa mencemari lingkungan.',
    badge: 'Biopolimer Hijau'
  },
  {
    name: 'Gliserin Teknis / Food-grade',
    role: 'Plasticizer (Pemlastis)',
    percentageOrSpec: 'Plasticizing Agent Elastisitas Tinggi',
    scientificExplanation: 'Menurunkan gaya antarmolekul rantai amilosa-amilopektin pati jagung sehingga lembaran film biosensor berukuran 3×3 cm lentur, kuat, dan tidak rapuh saat ditempel pada tutup wadah kemasan.',
    badge: 'Pelentur Komposit'
  }
];

export const LAB_VALIDATIONS: LabValidationData[] = [
  {
    title: 'Uji Kuantitatif Spektrofotometri UV-Vis',
    parameter: 'Konsentrasi Pigmen Antosianin Terlarut',
    result: '6,16 mg / gram ekstrak bunga telang',
    significance: 'Memastikan konsentrasi molekul kromofor cukup pekat untuk menghasilkan spektrum kontras visual yang mudah dibedakan oleh mata awam tanpa alat bantu optik.',
    labName: 'Laboratorium Terpadu Universitas Lampung'
  },
  {
    title: 'Analisis FTIR (Fourier Transform Infrared)',
    parameter: 'Konfirmasi Ikatan & Gugus Fungsi Biokomposit',
    result: 'Serapan puncak O-H fenolik, C=C aromatik, & pita Ca-O / CO₃²⁻',
    significance: 'Membuktikan bahwa pigmen bunga telang berhasil teradsorpsi dan terikat kuat secara fisikokimiawi di dalam pori cangkang telur tanpa merusak reaktivitas biosensor.',
    labName: 'Laboratorium Terpadu Universitas Lampung'
  }
];

export const TARGET_AUDIENCES = [
  {
    title: 'Penyelenggara Pangan Skala Besar',
    subtitle: 'Dapur Umum SPPG & Program Makan Bergizi Gratis (MBG)',
    icon: 'Building2',
    description: 'Memastikan ribuan porsi makanan yang didistribusikan kepada para siswa dan penerima manfaat tetap aman dan higienis secara visual dan serempak sebelum dikonsumsi.',
    benefit: 'Verifikasi instan ribuan boks makanan dalam hitungan detik tanpa membuka segel.'
  },
  {
    title: 'Jasa Katering & Resepsi',
    subtitle: 'Katering Industri, Acara Pernikahan, & Event Massal',
    icon: 'UtensilsCrossed',
    description: 'Menjaga reputasi profesional katering dari insiden keracunan pangan saat makanan harus bertahan di holding area sebelum waktu penyajian.',
    benefit: 'Jaminan kontrol mutu transparan yang meningkatkan kepercayaan klien.'
  },
  {
    title: 'UMKM Pangan Olahan & Frozen Food',
    subtitle: 'Produsen Makanan Siap Saji & Daging/Ikan Olahan',
    icon: 'Store',
    description: 'Solusi smart label berbiaya sangat terjangkau (ekonomis) yang dapat bersaing dengan teknologi smart packaging impor berbiaya tinggi.',
    benefit: 'Nilai jual premium pada kemasan produk dengan biaya bahan baku sangat murah.'
  },
  {
    title: 'Rumah Tangga & Masyarakat Luas',
    subtitle: 'Konsumen Cerdas & Ibu Rumah Tangga',
    icon: 'Home',
    description: 'Menghilangkan keraguan saat memeriksa sisa makanan di lemari es atau bekal anak sekolah tanpa harus mencicipi makanan yang berisiko beracun.',
    benefit: 'Perlindungan kesehatan keluarga dengan edukasi visual yang mudah dipahami.'
  }
];

export const SDGS_DATA = [
  {
    goalNumber: '3',
    title: 'Good Health and Well-being',
    indonesianTitle: 'Kehidupan Sehat dan Sejahtera',
    badgeColor: 'bg-[#4C9F38] text-white',
    ringColor: 'ring-[#4C9F38]',
    borderAccent: 'border-[#4C9F38]',
    points: [
      'Mencegah Kejadian Luar Biasa (KLB) keracunan pangan massal akibat mikroorganisme patogen pembusuk.',
      'Melindungi anak-anak sekolah penerima Program Makan Bergizi Gratis (MBG) dari risiko asupan pangan terdegradasi.',
      'Menyediakan sistem deteksi non-kontak dan non-destruktif sehingga higienitas makanan 100% terjaga.'
    ]
  },
  {
    goalNumber: '12',
    title: 'Responsible Consumption and Production',
    indonesianTitle: 'Konsumsi dan Produksi yang Bertanggung Jawab',
    badgeColor: 'bg-[#BF8B2E] text-white',
    ringColor: 'ring-[#BF8B2E]',
    borderAccent: 'border-[#BF8B2E]',
    points: [
      'Valorisasi ekonomi sirkular: mengolah 2,8 ton/bulan limbah cangkang telur dari 14 SPPG menjadi biosensor bernilai guna.',
      'Mengurangi pemborosan pangan (food waste) dengan menghindari pembuangan makanan prematur yang sebenarnya masih layak konsumsi.',
      'Bahan biokomposit 100% organik (pati jagung, limbah cangkang, bunga telang) yang terurai secara alami (biodegradable).'
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Felicia Hanza Hisanamira',
    role: 'Ketua Tim Peneliti',
    school: 'SMAN 1 Bandar Sribhawono',
    classGrade: 'Kelas XI.MIPA',
    specialty: 'Manajemen Proyek, Anggaran, Koordinasi Uji Mandiri & Penulisan Laporan Akhir'
  },
  {
    name: 'Alifya Putri Ghaisani',
    role: 'Peneliti / Aplikasi Pangan',
    school: 'SMAN 1 Bandar Sribhawono',
    classGrade: 'Kelas XI.MIPA',
    specialty: 'Aplikasi VioShell pada Sampel Pangan (Daging & Ikan), Pengamatan Warna & Analisis Sensitivitas'
  },
  {
    name: 'Cahaya Budiani',
    role: 'Peneliti / Preparasi & Sintesis',
    school: 'SMAN 1 Bandar Sribhawono',
    classGrade: 'Kelas XI.MIPA',
    specialty: 'Ekstraksi Antosianin Bunga Telang, Pengolahan Limbah Cangkang Telur & Sintesis Biokomposit'
  },
  {
    name: 'Keyla Ivana Putri',
    role: 'Peneliti / Desain & Dokumentasi',
    school: 'SMAN 1 Bandar Sribhawono',
    classGrade: 'Kelas XI.MIPA',
    specialty: 'Desain Visual VioShell, Infografis Panduan Kesegaran, Dokumentasi Uji Coba & Administrasi'
  }
];

export const MENTOR_AND_STAKEHOLDERS = [
  {
    name: 'Diana Ruswandari, S.Sos',
    role: 'Guru Pembimbing Karya Tulis Ilmiah',
    institution: 'SMAN 1 Bandar Sribhawono',
    contributions: 'Memberikan arahan sistematika penulisan KTI, masukan reaksi kimia perubahan zat warna antosianin akibat keasaman/pH, serta supervisi draf karya.'
  },
  {
    name: 'Dapur SPPG Bandar Sribhawono',
    role: 'Mitra Penyedia Bahan Baku & Lokasi Uji',
    institution: '14 Satuan Pelayanan Pengolahan Gizi (SPPG)',
    contributions: 'Pemasok stabil limbah cangkang telur (700 kg/minggu atau 2,8 ton/bulan) dan percontohan awal aplikasi kemasan cerdas pada pengolahan pangan massal.'
  },
  {
    name: 'Laboratorium Kimia Sekolah',
    role: 'Fasilitas Eksperimen Mandiri',
    institution: 'SMAN 1 Bandar Sribhawono',
    contributions: 'Penyedia peralatan praktikum kimia (gelas beker, timbangan digital, mortar & alu, pembakar spirtus, cawan petri) untuk sintesis mandiri.'
  },
  {
    name: 'Laboratorium Terpadu Universitas Lampung',
    role: 'Validasi Ilmiah Independen (Eksternal)',
    institution: 'Universitas Lampung (Unila)',
    contributions: 'Pelaksana uji kuantitatif spektrofotometri UV-Vis kadar antosianin (COA No. 104/07/UL.15.13.17/COA/2026) dan analisis FTIR (COA No. 105/07/UL.15.13.17/COA/2026).'
  }
];

// Tabel Rencana Anggaran Biaya (RAB) Pengembangan VioShell (per 25 Lembar 3x3 cm)
export const RAB_ITEMS = [
  { component: 'Pati jagung', qty: '7 gram', cost: 420, note: 'Bahan polimer matriks bioplastik' },
  { component: 'Gliserin', qty: '7 gram', cost: 700, note: 'Plasticizer (pemlastis film lentur)' },
  { component: 'Ekstrak bunga telang', qty: '30 ml', cost: 0, note: 'Modal non-tunai (diperoleh gratis dari lingkungan sekitar)' },
  { component: 'Serbuk cangkang telur', qty: '2 gram', cost: 0, note: 'Modal non-tunai (diperoleh gratis dari 14 SPPG)' },
  { component: 'Cuka dapur (asam asetat)', qty: '5 ml', cost: 250, note: 'Katalis gelatinisasi pati' },
];

export const TOTAL_RAB_COST = 1400; // Rp 1.400 per 25 lembar = Rp 56 / lembar

// Alat & Bahan Pembuatan VioShell
export const TOOLS_LIST = [
  'Timbangan digital',
  'Gelas beker',
  'Gelas ukur',
  'Pipet',
  'Pengaduk kaca',
  'Spatula logam',
  'Kaki tiga & pembakar spirtus',
  'Kasa kawat dengan pelapis keramik',
  'Mortar dan alu',
  'Cawan Petri',
  'Saringan & cetakan 3×3 cm'
];

export const MATERIALS_LIST = [
  'Bunga telang segar (Clitoria ternatea)',
  'Limbah cangkang telur ayam (94–95% CaCO₃)',
  'Pati jagung (cornstarch)',
  'Cuka dapur (asam asetat 5%)',
  'Gliserin teknis / food grade'
];

// 5 Tahapan Proses Kerja (Metodologi)
export const IMPLEMENTATION_STEPS = [
  {
    stepNumber: '01',
    title: 'Preparasi Bahan Baku',
    detail: 'Bunga telang dan limbah cangkang telur dibersihkan dari kotoran dan material sisa agar tidak mengganggu reaksi biosensor.',
    duration: '22–28 Juni 2026'
  },
  {
    stepNumber: '02',
    title: 'Ekstraksi Antosianin',
    detail: '5 gram bunga telang dicuci bersih, dimasukkan ke gelas beker + 100 mL air panas selama 15–20 menit hingga larutan biru tua, diaduk dan disaring.',
    duration: '22–28 Juni 2026'
  },
  {
    stepNumber: '03',
    title: 'Pembuatan Serbuk Cangkang Telur',
    detail: 'Cangkang telur dicuci dari membran, di-oven 100°C untuk pengeringan & sanitasi awal, dihaluskan dengan mortar-alu, dan disaring seragam.',
    duration: '22–28 Juni 2026'
  },
  {
    stepNumber: '04',
    title: 'Formulasi & Pencetakan Lembar 3×3 cm',
    detail: '7 g pati jagung, 7 g gliserin, 40 mL air, 5 mL cuka dapur dipanaskan hingga gelatinisasi. Ditambahkan 2 g serbuk cangkang dan 30 mL ekstrak telang. Diaduk homogen, dituang ke cetakan, dikeringkan pada suhu 100°C hingga membentuk lembaran lentur berukuran 3×3 cm.',
    duration: '12 Juli 2026'
  },
  {
    stepNumber: '05',
    title: 'Uji Aplikasi Sampel & Validasi Lab',
    detail: 'Ditempelkan di tutup kemasan makanan tanpa menyentuh bahan pangan. Diamati respons warna pada 0–6, 12–18, 24, dan 36 jam serta dikirim ke Lab Terpadu Unila untuk uji kuantitatif UV-Vis & FTIR.',
    duration: '15 Juli – 8 Agustus 2026'
  }
];

// Tabel Uji Laboratorium Terpadu Universitas Lampung
export const UNILA_COA_DATA = {
  uvVis: {
    noCertificate: '104/07/UL.15.13.17/COA/2026',
    receivedDate: '19 Juni 2026',
    completedDate: '4 Juli 2026',
    technicalManager: 'Rahmat Hidayat, S.P.',
    sampleType: 'Ekstrak Bunga Telang (Uji Antosianin)',
    concentrationSolution: '61,62 mg/L',
    concentrationSample: '6,16 mg/g (setara 0,616% berat kering)',
    referenceStandard: 'Kesetaraan Sianidin-3-Glukosida',
    validationMethod: 'pH-Diferensial (Spektrofotometri UV-Vis)',
    validationStatus: 'Valid (A520–A700 pada pH 1,0 bernilai 0,842 >> pH 4,5 bernilai 0,104)'
  },
  ftir: {
    noCertificate: '105/07/UL.15.13.17/COA/2026',
    receivedDate: '26 Juni 2026',
    completedDate: '12 Juli 2026',
    technicalManager: 'Rahmat Hidayat, S.P.',
    sampleType: 'Cangkang Telur, Ekstrak Telang, & VioShell (Uji FTIR)',
    method: 'Pelet KBr (Potassium Bromide Pellet Method)',
    tablePeaks: [
      {
        waveRange: '3200 – 3600 cm⁻¹',
        cangkang: '3410 cm⁻¹',
        telang: '3385 cm⁻¹',
        vioshell: '3320 cm⁻¹',
        significance: 'Pita hidroksil (-OH) bergeser ke 3320 cm⁻¹ menandakan pembentukan ikatan hidrogen antarmolekul antara antosianin dan CaCO₃ cangkang telur'
      },
      {
        waveRange: '1600 – 1650 cm⁻¹',
        cangkang: '-',
        telang: '1632 cm⁻¹',
        vioshell: '1620 cm⁻¹',
        significance: 'Pita cincin aromatik dan ikatan C=C antosianin terdeteksi stabil dalam matriks'
      },
      {
        waveRange: '1400 – 1450 cm⁻¹',
        cangkang: '1415 cm⁻¹',
        telang: '-',
        vioshell: '1422 cm⁻¹',
        significance: 'Pita getaran karbonat (CO₃²⁻) matriks kalsium karbonat cangkang telur terbukti ada'
      },
      {
        waveRange: '1000 – 1100 cm⁻¹',
        cangkang: '-',
        telang: '1050 cm⁻¹',
        vioshell: '1072 cm⁻¹',
        significance: 'Pita gugus glikosidik antosianin membuktikan pigmen terimobilisasi kuat dan tidak leaching'
      }
    ]
  }
};

// Analisis SWOT Resmi Paper AHM Best Student 2026
export const SWOT_DATA = [
  {
    category: 'Strengths (Kekuatan)',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    points: [
      'Bahan baku murah dan mudah didapat (limbah cangkang telur dan bunga telang lokal).',
      'Karakteristik non-toksik dan biodegradable berbasis bahan alami alami.',
      'Respons perubahan warna visual kasat mata cepat terhadap uap basa volatil.',
      'Mendukung prinsip ekonomi sirkular dan pengelolaan limbah pangan berkelanjutan.'
    ]
  },
  {
    category: 'Weaknesses (Kelemahan)',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    points: [
      'Stabilitas warna antosianin rentan terhadap paparan sinar matahari langsung jangka panjang.',
      'Produksi massal membutuhkan standarisasi ukuran partikel mikropori serbuk cangkang.',
      'Karakterisasi fisik-mekanik film (kuat tarik & ketahanan air) serta uji shelf-life lanjutan masih dalam proses riset.'
    ]
  },
  {
    category: 'Opportunities (Peluang)',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    points: [
      'Skala penyelenggaraan pangan massal luas di Indonesia (program Makan Bergizi Gratis / MBG, katering, dapur umum).',
      'Peluang kemitraan dengan Badan Gizi Nasional, Dinas Kesehatan, dan produsen kemasan lokal.',
      'Membuka unit usaha ekonomi sirkular baru di tingkat sekolah dan UMKM lokal.'
    ]
  },
  {
    category: 'Threats (Ancaman)',
    badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    points: [
      'Potensi kompetisi dengan teknologi indikator kesegaran sintetis komersial impor.',
      'Tantangan edukasi kepada masyarakat penerima manfaat agar dapat membaca panduan warna indikator dengan tepat.'
    ]
  }
];

// Jadwal Pelaksanaan Riset AHM Best Student 2026
export const RESEARCH_TIMELINE = [
  { task: 'Identifikasi masalah dan penemuan ide', time: '25 – 31 Mei 2026' },
  { task: 'Studi literatur dan perancangan inovasi', time: '1 – 14 Juni 2026' },
  { task: 'Persiapan dan pengumpulan bahan', time: '15 – 21 Juni 2026' },
  { task: 'Preparasi cangkang telur dan bunga telang', time: '22 – 28 Juni 2026' },
  { task: 'Formulasi dan pembuatan lembar indikator 3×3 cm', time: '12 Juli 2026' },
  { task: 'Pengujian trayek pH, response time, dan aplikasi pangan riil', time: '15 – 20 Juli 2026' },
  { task: 'Uji kuantitatif kadar antosianin (Lab Terpadu Unila)', time: '20 Juli 2026' },
  { task: 'Uji FTIR cangkang telur, telang, dan VioShell (Lab Terpadu Unila)', time: '26 Juli – 8 Agustus 2026' },
  { task: 'Uji keawetan suhu ruang / suhu dingin', time: '9 Agustus 2026' },
  { task: 'Evaluasi hasil dan penyempurnaan prototipe', time: '10 – 14 Agustus 2026' },
  { task: 'Analisis data dan penyusunan laporan akhir', time: '17 – 23 Agustus 2026' }
];

// ==========================================
// VERSI 2: PURE WEB DATA FRESHNESS MODELS
// (Murni Algoritma Web & Data Kinetika Pangan - Tanpa Hardware Sensor Fisik)
// ==========================================
export const FOOD_CATEGORY_PROFILES: FoodCategoryProfile[] = [
  {
    id: 'ayam_balado',
    name: 'Ayam Balado / Goreng MBG',
    category: 'unggas',
    baseTvbnRatePerHour: 0.65,
    optimalTemp: 22,
    dangerHourThreshold: 16,
    description: 'Protein daging ayam broiler dengan kadar air moderat dan bumbu tumis cabai.',
    typicalDish: 'Menu reguler MBG siswa SD/SMP'
  },
  {
    id: 'telur_balado_sppg',
    name: 'Telur Balado SPPG Sribhawono',
    category: 'komposit_mbg',
    baseTvbnRatePerHour: 0.52,
    optimalTemp: 24,
    dangerHourThreshold: 20,
    description: 'Telur rebus bumbu balado dengan kandungan albumin tinggi, rentan pelepasan amina bebas.',
    typicalDish: 'Menu standar pasokan SPPG lokal'
  },
  {
    id: 'ikan_tongkol',
    name: 'Ikan Tongkol Suwir Balado',
    category: 'seafood',
    baseTvbnRatePerHour: 1.15,
    optimalTemp: 20,
    dangerHourThreshold: 11,
    description: 'Kandungan trimetilamina oksida (TMAO) tinggi yang cepat terurai menjadi gas trimetilamina (TMA).',
    typicalDish: 'Lauk protein tinggi pesisir Lampung'
  },
  {
    id: 'rendang_sapi',
    name: 'Rendang Daging Sapi Katering',
    category: 'daging',
    baseTvbnRatePerHour: 0.42,
    optimalTemp: 25,
    dangerHourThreshold: 26,
    description: 'Kadar rempah dan proses karamelisasi santan memberikan ketahanan antimikroba alami lebih lama.',
    typicalDish: 'Menu prasmanan & katering pesta'
  },
  {
    id: 'tahu_tempe_bacem',
    name: 'Tahu & Tempe Bacem',
    category: 'nabati',
    baseTvbnRatePerHour: 0.58,
    optimalTemp: 23,
    dangerHourThreshold: 18,
    description: 'Protein nabati fermentasi dengan kadar gula kelapa, rentan fermentasi asam-alkali lanjutan.',
    typicalDish: 'Lauk pendamping gizi seimbang MBG'
  }
];

// Helper calculation for Pure Web Data Freshness Simulation (Arrhenius & TVB-N Model)
export const calculateWebDataFreshness = (
  profile: FoodCategoryProfile,
  hoursElapsed: number,
  tempCelsius: number,
  humidity: number
) => {
  // Temperature acceleration factor (Q10 rule: 2.0x per 10°C elevation from baseline 25°C)
  const tempFactor = Math.pow(2.0, (tempCelsius - 25) / 10);
  
  // Humidity acceleration factor (higher RH above 60% accelerates bacterial surface kinetics)
  const humidityFactor = 1.0 + Math.max(0, (humidity - 60) / 100) * 0.4;
  
  // Combined degradation kinetic rate
  const effectiveRate = profile.baseTvbnRatePerHour * tempFactor * humidityFactor;
  
  // Initial TVB-N baseline (approx 4.5 mg N/100g for fresh cooked food)
  const baseTvbn = 4.5;
  const estimatedTvbn = Math.min(50, +(baseTvbn + (effectiveRate * hoursElapsed)).toFixed(1));
  
  // pH calculation: starts at ~6.2 and shifts to 8.4+ as basic amines accumulate
  const estimatedPh = Math.min(8.6, +(6.15 + (estimatedTvbn / 50) * 2.35).toFixed(2));
  
  // Microbial population log CFU/g: starts at 2.5 log CFU/g, spoilage threshold is 7.0 log CFU/g
  const bacterialLogCfu = Math.min(9.0, +(2.5 + (hoursElapsed * (effectiveRate / profile.baseTvbnRatePerHour) * 0.18)).toFixed(2));
  
  // Freshness Score (100% down to 0%)
  const rawScore = Math.max(0, 100 - (estimatedTvbn / 32) * 100);
  const freshnessScore = Math.round(rawScore);

  let status: 'optimal' | 'warning' | 'critical' | 'spoiled' = 'optimal';
  let predictedColor = '#2B2677';
  let verdictTitle = 'Aman & Segar';
  let verdictAction = 'Layak saji 100% untuk siswa & konsumen.';

  if (estimatedTvbn < 12) {
    status = 'optimal';
    predictedColor = '#2B2677';
    verdictTitle = 'Sangat Segar (Grade A)';
    verdictAction = 'Kualitas prima. Distribusi segera atau konsumsi aman.';
  } else if (estimatedTvbn < 18) {
    status = 'warning';
    predictedColor = '#0D9488';
    verdictTitle = 'Penurunan Mutu Awal (Grade B)';
    verdictAction = 'Disarankan dikonsumsi maksimal dalam 2 jam ke depan atau simpan suhu dingin.';
  } else if (estimatedTvbn < 28) {
    status = 'critical';
    predictedColor = '#16A34A';
    verdictTitle = 'Mendekati Ambang Kritis (Grade C)';
    verdictAction = 'Peringatan: Verifikasi organoleptik wajib, tidak dianjurkan bagi anak-anak.';
  } else {
    status = 'spoiled';
    predictedColor = '#B45309';
    verdictTitle = 'Basi / Tidak Layak Konsumsi (Grade D)';
    verdictAction = 'BAHAYA KERACUNAN! Segera musnahkan porsi ini dari distribusi MBG.';
  }

  return {
    hoursElapsed,
    ambientTemp: tempCelsius,
    relativeHumidity: humidity,
    foodProfile: profile,
    estimatedTvbn,
    estimatedPh,
    bacterialLogCfu,
    freshnessScore,
    status,
    predictedColor,
    verdictTitle,
    verdictAction
  };
};

// ==========================================
// 3 BUKU MONOGRAF RISET VIOSHELL (FIELD MANUALS)
// ==========================================
export interface ResearchVolume {
  id: string;
  volumeNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  coreHighlight: string;
  authors: string;
}

export const VIOSHELL_RESEARCH_VOLUMES: ResearchVolume[] = [
  {
    id: 'vol-1',
    volumeNumber: 'Buku 1',
    title: 'Deteksi Kesegaran Pangan',
    subtitle: 'Sistem Deteksi Non-Destruktif & Monitoring TVB-N Real-Time',
    badge: 'Indikator Pangan Real-time',
    summary: 'Studi mekanisme deteksi dini penurunan kesegaran pangan secara real-time menggunakan indikator perubahan warna dan pemantauan data web cerdas.',
    coreHighlight: 'Skrining visual massal < 3 detik per boks katering tanpa membuka segel kemasan.',
    authors: 'Felicia Hanza H. & Cahaya Budiani'
  },
  {
    id: 'vol-2',
    volumeNumber: 'Buku 2',
    title: 'Bunga Telang dan Cangkang Telur',
    subtitle: 'Sinergi Biokomposit Kalsit 95% CaCO₃ & Ekstrak Antosianin 6,16 mg/g',
    badge: 'Formulasi & Validasi Lab',
    summary: 'Formulasi indikator dari cangkang telur 14 dapur SPPG lokal dengan ekstrak bunga telang (Clitoria ternatea), terverifikasi UV-Vis & FTIR.',
    coreHighlight: 'Valorisasi 2,8 ton limbah cangkang/bulan menjadi matriks adsorben gas volatil alami.',
    authors: 'Alifya Putri G. & Felicia Hanza H.'
  },
  {
    id: 'vol-3',
    volumeNumber: 'Buku 3',
    title: 'Penjelasan SDGs (Tujuan Berkelanjutan)',
    subtitle: 'Kontribusi Nyata terhadap SDG 3 (Kesehatan) & SDG 12 (Sirkular)',
    badge: 'Keberlanjutan & SDGs',
    summary: 'Analisis dampak strategis VioShell dalam mendukung Tujuan Pembangunan Berkelanjutan, mencakup pencegahan  penurunan kesegaran pangan yang berujung pada keracunan pangan dan valorisasi limbah organik zero-waste.',
    coreHighlight: 'Mendukung target SDG 3.9 kesehatan generasi muda dan SDG 12.5 ekonomi sirkular.',
    authors: 'Keyla Ivana Putri & Tim Riset SMAN 1'
  }
];
