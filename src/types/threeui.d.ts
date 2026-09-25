import "@designcodeio/threeui";

declare module "@designcodeio/threeui" {
  export interface SylvaHeroProps {
    variant?: "living-green" | "sakura-sunset" | "maple-autumn" | "sequoia-mist" | string;
    headingFont?: string;
    bodyFont?: string;
    headingWeight?: string;
    bodyWeight?: string;
    primaryColor?: string;
    headingSize?: number;
    bodySize?: number;
    headingLetterSpacing?: number;
    className?: string;
    style?: React.CSSProperties;
  }

  export const SylvaHero: React.ComponentType<SylvaHeroProps>;
}
