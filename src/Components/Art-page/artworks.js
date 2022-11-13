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
import colorBlock2 from "../../img/artpage/colorblock2.jpg";
import fern2 from "../../img/artpage/fern2.jpg";
import fern3 from "../../img/artpage/fern3.jpg";
import talia2 from "../../img/artpage/talia2.jpg";
import talia3 from "../../img/artpage/talia3.jpg";

const artworksList = {
  flowers,
  flowers2ZO,
  flowers2,
  ianLG,
  ianZoom,
  yellowRainCoat,
  yellowRainCoat2,
  talia,
  talia2,
  talia3,
  fernando,
  fern2,
  fern3,
  binta,
  magenta,
  orange,
  blueKimono,
  colorBlock,
  colorBlock2,
};

const artworks = {
  flowers2: {
    image: artworksList.flowers2,
    altIMG: [artworksList.flowers2ZO],
    title: "Untitled",
    length: 18,
    width: 24,
    year: "2022",
    material: "Acrylic on Canvas",
  },
  flowers: {
    image: artworksList.flowers,
    altIMG: [],
    title: "Lilies in the Morning Light",
    length: 16,
    width: 20,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  ianLG: {
    image: artworksList.ianLG,
    altIMG: [artworksList.ianZoom],
    title: "Tutu's Kimono",
    length: 60,
    width: 26,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  yellowRainCoat: {
    image: artworksList.yellowRainCoat,
    altIMG: [artworksList.yellowRainCoat2],
    title: "Yellow Poncho",
    length: 24,
    width: 18,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  talia: {
    image: artworksList.talia,
    altIMG: [talia2, talia3],
    title: "Talia",
    length: 60,
    width: 36,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  fernando: {
    image: artworksList.fernando,
    altIMG: [fern2, fern3],
    title: "Fernando",
    length: 40,
    width: 30,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  binta: {
    image: artworksList.binta,
    altIMG: [],
    title: "Binta",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  magenta: {
    image: artworksList.magenta,
    altIMG: [],
    title: "Untitled - Pink",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  orange: {
    image: artworksList.orange,
    altIMG: [],
    title: "Untitled - Orange",
    length: 36,
    width: 48,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  blueKimono: {
    image: artworksList.blueKimono,
    altIMG: [],
    title: "Tutu's Kimono II ",
    length: 60,
    width: 36,
    year: "2021",
    material: "Oil and Acrylic on Canvas",
  },
  colorBlock: {
    image: artworksList.colorBlock,
    altIMG: [colorBlock2],
    title: "Lara | Colorblock",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
};

export default artworks;
