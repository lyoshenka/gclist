type Group = {
  name: string;
  description: string;
  image: string;
  inviteLink: string;
  requiredNFT: string | null;
};

export const groups: Group[] = [
  {
    name: "FarCon '24 Summit",
    description: "FarCon 2024 Summit Day (thursday) ticketholders",
    image: "https://raw.seadn.io/files/39345793c7da0d41bba2f86bf57fb46f.webp",
    inviteLink: "https://warpcast.com/~/group/2wSFJwP2POel0vY6Ex4dCw",
    requiredNFT: "https://opensea.io/collection/farcon-summit-pass",
  },
  {
    name: "FarCon OGs",
    description: "Attendees of the first FarCon in Boston",
    image: "https://raw.seadn.io/files/b42b3c7020db7abd0ece388f9b6c55bb.jpg",
    inviteLink: "https://warpcast.com/~/group/PgRIHNiyrBUPNom1dqWOag",
    requiredNFT: "https://opensea.io/collection/farcon-2023-tickets",
  },
  {
    name: "Cabin Citizens",
    description: "Citizens of cabin.city",
    image: "https://raw.seadn.io/files/13007d5982c17aa1b7256337221dec17.png",
    inviteLink: "https://warpcast.com/~/group/3SQdOvlnuqQzny0PAhelQA",
    requiredNFT: "https://opensea.io/collection/cabin-citizenship",
  },
  {
    name: "the haberdashery",
    description: "degendao gc",
    image: "https://i.imgur.com/jDU5tsS.jpg",
    inviteLink: "https://warpcast.com/purp",
    requiredNFT: "https://opensea.io/collection/degen-haberdashers",
  },
  {
    name: "Farcaster OGs",
    description: "Farcaster OG NFT holders",
    image: "https://i.seadn.io/s/raw/files/05a900040633a89c5b1396155cad3b8b.png?auto=format&dpr=1&w=1000",
    inviteLink: "https://warpcast.com/~/group/7adDG4bTm20Wndl1AO4Ftw",
    requiredNFT: "https://opensea.io/collection/farcaster-og-1",
  }
];
