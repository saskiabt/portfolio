import flowers2 from "../../img/artpage/flowers2.jpg";
import flowers2ZO from "../../img/artpage/flowers2-zoomout.png";
import flowers from "../../img/artpage/flowers1.png";
import ianLG from "../../img/artpage/ian-lg.jpg";
import ianZoom from "../../img/artpage/ian-zoom.png";
import yellowRainCoat from "../../img/artpage/yellowraincoat.png";
import yellowRainCoat2 from "../../img/artpage/yellowraincoat-2.png";
import talia from "../../img/artpage/talia.png";
import fernando from "../../img/artpage/fernando.jpg";
import binta from "../../img/artpage/binta.jpeg";
import magenta from "../../img/artpage/magenta.jpeg";
import orange from "../../img/artpage/orange2.png";
import blueKimono from "../../img/artpage/blueKimono.jpg";
import colorBlock from "../../img/artpage/colorblock.png";

const artworksList = {
  flowers,
  flowers2ZO,
  flowers2,
  ianLG,
  ianZoom,
  yellowRainCoat,
  yellowRainCoat2,
  talia,
  fernando,
  binta,
  magenta,
  orange,
  blueKimono,
  colorBlock,
};

const artworks = {
  flowers2: {
    coverIMG: artworksList.flowers2,
    altIMG: [artworksList.flowers2ZO],
    title: "Untitled",
    length: 18,
    width: 24,
    year: "2022",
    material: "Acrylic on Canvas",
  },
  flowers: {
    coverIMG: artworksList.flowers,
    altIMG: [],
    title: "Lilies in the Morning Light",
    length: 16,
    width: 20,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  ianLG: {
    coverIMG: artworksList.ianLG,
    altIMG: [artworksList.ianZoom],
    title: "Tutu's Kimono",
    length: 60,
    width: 26,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  yellowRainCoat: {
    coverIMG: artworksList.yellowRainCoat,
    altIMG: [artworksList.yellowRainCoat2],
    title: "Yellow Poncho",
    length: 24,
    width: 18,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  talia: {
    coverIMG: artworksList.talia,
    altIMG: [],
    title: "Talia",
    length: 60,
    width: 36,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  fernando: {
    coverIMG: artworksList.fernando,
    altIMG: [],
    title: "Fernando",
    length: 40,
    width: 30,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  binta: {
    coverIMG: artworksList.binta,
    altIMG: [],
    title: "Binta",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  magenta: {
    coverIMG: artworksList.magenta,
    altIMG: [],
    title: "Untitled - Pink",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  orange: {
    coverIMG: artworksList.orange,
    altIMG: [],
    title: "Untitled - Orange",
    length: 36,
    width: 48,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  blueKimono: {
    coverIMG: artworksList.blueKimono,
    altIMG: [],
    title: "Tutu's Kimono II ",
    length: 60,
    width: 36,
    year: "2021",
    material: "Oil and Acrylic on Canvas",
  },
  colorBlock: {
    coverIMG: artworksList.colorBlock,
    altIMG: [],
    title: "Lara | Colorblock",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
};

export default artworks;
