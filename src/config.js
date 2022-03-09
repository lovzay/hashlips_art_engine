const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Capybara";
const description = "The Capybara Collection!";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "0x04e8f3fd58Fd0e186e4dc228E4eed372Cf2ADBB7",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Headgears" },
      { name: "Mouth" },
      { name: "Ilong" },
    ],
  },

  {
    growEditionSizeTo: 25,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Headgears" },
      { name: "Mouth" },
    ],
  },

  {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Headgears" },
      { name: "Mouth" },
      { name: "Ilong" },
    ],
  },

  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Mouth" },
      { name: "Ilong" },
    ],
  },

  {
    growEditionSizeTo: 75,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Headgears" },
      { name: "Mouth" },
    ],
  },

  {
    growEditionSizeTo: 105,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Mouth" },
    ],
  },

  {
    growEditionSizeTo: 135,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Mouth" },
    ],
  },

  {
    growEditionSizeTo: 155,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Clothes" },
      { name: "Eyes" },
      { name: "Miscellaneous" },
      { name: "Mouth" },
    ],
  },

  {
    growEditionSizeTo: 185,
    layersOrder: [
      { name: "Background" },
      { name: "Base" },
      { name: "Eyes" },
      { name: "Headgears" },
      { name: "Mouth" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
