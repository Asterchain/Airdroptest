export interface User {
    astBalance: number;
    tasks: Record<string, boolean>;
    planets: string[];
    moons: string[];
    specialCards: string[];
    tonWallet: string | null;
  }
  
  export const TASKS = [
    "Follow Twitter",
    "Join Telegram Group",
    "Subscribe to YouTube",
    "Follow Medium",
    "Create TON Wallet",
    "Create Metamask Wallet"
  ];
  
  export const PLANETS = Array.from({length: 25}, (_, i) => `Planet-${i+1}`);
  export const MOONS = Array.from({length: 25}, (_, i) => `Moon-${i+1}`);
  
  export const SPECIAL_CARDS = [
    "Double Mining Speed",
    "Triple AST Rewards",
    "Instant Moon Exploration",
    "Rare Artifact Discovery",
    "Galactic Boost",
    "Time Warp",
    "Resource Multiplier",
    "Energy Surge",
    "Cosmic Shield",
    "Wormhole Generator"
  ];