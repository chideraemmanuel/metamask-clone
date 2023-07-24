import aave from "./assets/dapp-aave.webp";
import axie from "./assets/dapp-axieinfinity.webp";
import compound from "./assets/dapp-compound.webp";
import gitcoin from "./assets/dapp-gitcoin.webp";
import maker from "./assets/dapp-maker.webp";
import opensea from "./assets/dapp-opensea.webp";
import rarible from "./assets/dapp-rarible.webp";
import uniswap from "./assets/dapp-uniswap.webp";

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

export const applications = [
  {
    title: "aave",
    imageSrc: aave,
  },
  {
    title: "axie",
    imageSrc: axie,
  },
  {
    title: "compound",
    imageSrc: compound,
  },
  {
    title: "gitcoin",
    imageSrc: gitcoin,
  },
  {
    title: "maker",
    imageSrc: maker,
  },
  {
    title: "opensea",
    imageSrc: opensea,
  },
  {
    title: "rarible",
    imageSrc: rarible,
  },
  {
    title: "uniswap",
    imageSrc: uniswap,
  },
];

export interface FooterLinksTypes {
  header: string;
  links: string[];
}

export const footerLinks: FooterLinksTypes[] = [
  {
    header: "Learn More",
    links: [
      "About",
      "Developer Docs",
      "Download",
      "MetaMask Institutional",
      "News",
      "Security",
    ],
  },
  {
    header: "Get Involved",
    links: [
      "Github",
      "Gitcoin",
      "Open Positions",
      "Swag Shop",
      "Press & Partnerships",
    ],
  },
  {
    header: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Use",
      "Contributor License Agreement",
      "Site Map",
    ],
  },
];
