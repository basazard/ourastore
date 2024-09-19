import ffMax from "../assets/popular-games/ff-max.webp";
import ff from "../assets/popular-games/ff.webp";
import hok from "../assets/popular-games/hok.webp";
import mlPaket from "../assets/popular-games/ml-paket-irit.webp";
import ml from "../assets/popular-games/ml.webp";
import pubg from "../assets/popular-games/pubg.webp";
import codm from "../assets/service-image/codm.webp";
import ep from "../assets/service-image/ep.webp";
import lolWr from "../assets/service-image/lol-wr.webp";
import ms from "../assets/service-image/ms.webp";
import pb from "../assets/service-image/pb.webp";
import valo from "../assets/service-image/valo.webp";
import jokiRankEcer from "../assets/popular-games/joki-rank-ecer.webp";
import jokiRankPaket from "../assets/popular-games/joki-rank-paket.webp";
import jokiGendong from "../assets/service-image/joki-gendong.webp";
import jokiClassic from "../assets/service-image/joki-cl.webp";
import jokiMc from "../assets/service-image/joki-mc.webp";
import popular1 from "../assets/popular-games/ml.webp";
import popular2 from "../assets/popular-games/ml-paket-irit.webp";
import popular3 from "../assets/popular-games/pubg.webp";
import popular4 from "../assets/popular-games/ff.webp";
import popular5 from "../assets/popular-games/ff-max.webp";
import popular6 from "../assets/popular-games/hok.webp";
import popular7 from "../assets/popular-games/joki-rank-ecer.webp";
import popular8 from "../assets/popular-games/joki-rank-paket.webp";
import mlbbDiamondPass from "../assets/items-icon/mlbb/diamond-pass.webp";
import twilightPass from "../assets/items-icon/mlbb/twilight-pass.webp";

const customLink = (name) => {
  const lowerCase = name.toLowerCase();
  const link = lowerCase.split(" ").join("-");
  return link;
};

const checkGame = (game, listCategory) => {
  return listCategory.find((category) => category.name === game);
};

const listImagePopular = [
  {
    image: popular1,
    name: "Mobile Legends",
    owner: "Moonton",
  },
  {
    image: popular2,
    name: "Mobile Legends Paket Irit",
    owner: "Moonton",
  },
  {
    image: popular3,
    name: "PUBG Mobile",
    owner: "Tencent Games",
  },
  {
    image: popular4,
    name: "Free Fire",
    owner: "Garena",
  },
  {
    image: popular5,
    name: "Free Fire Max",
    owner: "Garena",
  },
  {
    image: popular6,
    name: "Honor of Kings",
    owner: "Tencent Games",
  },
  {
    image: popular7,
    name: "Joki Rank Eceran",
    owner: "Oura Store",
  },
  {
    image: popular8,
    name: "Joki Rank Paketan",
    owner: "Oura Store",
  },
].map((game) => ({
  ...game,
  link: customLink(game.name),
}));

const listTopUpGames = [
  {
    image: ml,
    name: "Mobile Legends",
    owner: "Moonton",
  },
  {
    image: ff,
    name: "Free Fire",
    owner: "Tencent Games",
  },
  {
    image: ffMax,
    name: "Free Fire MAX",
    owner: "Tencent Games",
  },
  {
    image: hok,
    name: "Honor of Kings",
    owner: "Tencent Games",
  },
  {
    image: mlPaket,
    name: "Mobile Legends Paket Irit",
    owner: "Moonton",
  },
  {
    image: pubg,
    name: "PUBG Mobile",
    owner: "Tencent Games",
  },
  {
    image: codm,
    name: "Call of Duty Mobile",
    owner: "Garena",
  },
  {
    image: ep,
    name: "EGGY PARTY",
    owner: "NetEase Games",
  },
  {
    image: lolWr,
    name: "League of Legends : Wild Rift",
    owner: "Riot Games",
  },
  {
    image: ms,
    name: "Metal Slug : Awakening",
    owner: "VNGGAMES",
  },
  {
    image: pb,
    name: "Point Blank",
    owner: "Zepetto",
  },
  {
    image: valo,
    name: "Valorant",
    owner: "Riot Games",
  },
].map((game) => ({
  ...game,
  link: customLink(game.name),
}));

const listJokiMLBB = [
  {
    image: jokiRankEcer,
    name: "Joki Rank Eceran",
    owner: "Oura Store",
  },
  {
    image: jokiRankPaket,
    name: "Joki Rank Paketan",
    owner: "Oura Store",
  },
  {
    image: jokiGendong,
    name: "Joki Gendong",
    owner: "Oura Store",
  },
  {
    image: jokiClassic,
    name: "Joki Classic",
    owner: "Oura Store",
  },
  {
    image: jokiMc,
    name: "Joki Magic Chess",
    owner: "Oura Store",
  },
].map((jokiMl) => ({
  ...jokiMl,
  link: customLink(jokiMl.name),
}));

const listCategory = [
  {
    name: "Top Up Games",
    listImage: listTopUpGames,
  },
  {
    name: "Joki MLBB",
    listImage: listJokiMLBB,
  },
  {
    name: "Joki HOK",
    listImage: [],
  },
  {
    name: "Pulsa & Data",
    listImage: [],
  },
  {
    name: "Voucher",
    listImage: [],
  },
  {
    name: "Tagihan",
    listImage: [],
  },
];

const transactionStep = [
  "Masukkan ID & server",
  "Pilih Nominal",
  "Masukkan jumlah",
  "Pilih Pembayaran",
  "Tulis Kode Promo (jika ada)",
  "Masukkan No WhatsApp",
  "Klik Order Now & lakukan Pembayaran",
  "Diamonds otomatis masuk ke akun game",
];

const mlbbSpecialItems = [
  {
    name: "Weekly Diamond Pass",
    price: "Rp 27.763",
    image: mlbbDiamondPass,
  },
  {
    name: "2x Weekly Diamond Pass",
    price: "Rp 55.526",
    image: mlbbDiamondPass,
  },
  {
    name: "3x Weekly Diamond Pass",
    price: "Rp 83.288",
    image: mlbbDiamondPass,
  },
  {
    name: "4x Weekly Diamond Pass",
    price: "Rp 111.051",
    image: mlbbDiamondPass,
  },
  {
    name: "5x Weekly Diamond Pass",
    price: "Rp 138.814",
    image: mlbbDiamondPass,
  },
  {
    name: "Twilight Pass",
    price: "Rp 149.234",
    image: twilightPass,
  },
];

const mlbbTopUpList = [
  {
    name: "",
    price: "",
  },
];

export {
  listCategory,
  listImagePopular,
  checkGame,
  transactionStep,
  mlbbSpecialItems,
};
