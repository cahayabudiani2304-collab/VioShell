export type FreshnessStageId = 'fresh' | 'initial_change' | 'deterioration' | 'spoiled';

export interface FreshnessStage {
  id: FreshnessStageId;
  timeRange: string;
  hoursMin: number;
  hoursMax: number;
  title: string;
  colorName: string;
  hexCode: string;
  gradient: string;
  borderHex: string;
  textColor: string;
  statusBadge: string;
  badgeBg: string;
  phRange: string;
  tvbnRange: string;
  description: string;
  recommendation: string;
  foodCondition: string;
}

export interface ProblemStat {
  id: string;
  badge: string;
  title: string;
  statValue: string;
  statLabel: string;
  description: string;
  source: string;
  impactIcon: string;
}

export interface MaterialComponent {
  name: string;
  role: string;
  percentageOrSpec: string;
  scientificExplanation: string;
  badge: string;
}

export interface LabValidationData {
  title: string;
  parameter: string;
  result: string;
  significance: string;
  labName: string;
}

// Pure Web Data Freshness Models (No Physical Sensor Required)
export interface FoodCategoryProfile {
  id: string;
  name: string;
  category: 'unggas' | 'daging' | 'seafood' | 'nabati' | 'komposit_mbg';
  baseTvbnRatePerHour: number; // mg N/100g per hour at 25C
  optimalTemp: number; // C
  dangerHourThreshold: number;
  description: string;
  typicalDish: string;
}

export interface WebDataSimulationResult {
  hoursElapsed: number;
  ambientTemp: number;
  relativeHumidity: number;
  foodProfile: FoodCategoryProfile;
  estimatedTvbn: number;
  estimatedPh: number;
  bacterialLogCfu: number;
  freshnessScore: number; // 0 - 100%
  status: 'optimal' | 'warning' | 'critical' | 'spoiled';
  predictedColor: string;
  verdictTitle: string;
  verdictAction: string;
}

export interface AnimationTechniqueItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  badge: string;
  codeSnippet: string;
  tips: string[];
  specs: { label: string; value: string }[];
}

export interface UserAccount {
  name: string;
  role: 'Pengawas MBG' | 'Pengelola Dapur SPPG' | 'Analis Mutu' | 'Tamu Riset';
  organization: string;
  email: string;
  isLoggedIn: boolean;
}
