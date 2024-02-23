type Group = {
  name: string;
  description: string;
  image: string;
  inviteLink: string;
  requiredNFT: string | null;
};

export const groups: Group[] = [
  {
    name: "Footy watch along at ETH Denver",
    description: "Footy watch along at ETH Denver, open group organizing watch party Sunday March 2nd",
    image: "https://i.imgur.com/3SAYi17.jpg",
    inviteLink: "https://warpcast.com/~/group/HmGeOIknfY9t2yRvA3dGeA",
    requiredNFT: null,
  },
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
  },
  {
    name: "i am sitting in a smart contract Hypersub membership",
    description: "i am sitting in a smart contract gc",
    image: "https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg,w_144/https%3A%2F%2Fi.imgur.com%2Fibl43A2.jpg",
    inviteLink: "https://warpcast.com/~/group/BCDE_qTe_n-fosjF3G0_qQ",
    requiredNFT: null,
  },
  {
    name: "Open Finance",
    description: "/openfinance gc",
    image: "https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg,w_144/https%3A%2F%2Fi.imgur.com%2FKJEWUsu.jpg",
    inviteLink: "https://warpcast.com/~/group/mrSTegwMeGJzYId_YcTWpQ",
    requiredNFT: "https://opensea.io/collection/lilcaster",
  },
  {
    name: "Visioncasts",
    description: "Visioncasts holders gc",
    image: "https://res.cloudinary.com/merkle-manufactory/image/fetch/c_fill,f_jpg/https%3A%2F%2Fi.imgur.com%2FCF09P4d.jpg",
    inviteLink: "https://warpcast.com/~/group/vLROAzkUNx3xG7HnpVDM5w",
    requiredNFT: "https://opensea.io/collection/visioncasts",
  },
];
