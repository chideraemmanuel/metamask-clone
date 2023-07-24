export interface NavigationDropdownTypes {
  title: string;
  links: string[];
}

export const navigationDropdownConstants: NavigationDropdownTypes[] = [
  {
    title: "Features",
    links: ["MetaMask Portfolio", "Swaps", "Buy Crypto", "EIP-1559"],
  },
  {
    title: "Build",
    links: ["Developer Docs", "Institutions", "Snaps", "Flask", "SDK"],
  },
  {
    title: "Resources",
    links: ["Blog", "Support", "FAQs", "Community"],
  },
];
