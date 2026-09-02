import flowers2 from "../../img/artpage/flowers2.jpg";
import flowers2Thumb from "../../img/artpage/thumbs/flowers2.jpg";
import flowers2ZO from "../../img/artpage/flowers2-zoomout.jpg";
import flowers2ZOThumb from "../../img/artpage/thumbs/flowers2-zoomout.jpg";
import flowers from "../../img/artpage/flowers1.jpg";
import flowersThumb from "../../img/artpage/thumbs/flowers1.jpg";
import ianLG from "../../img/artpage/ian-lg.jpg";
import ianLGThumb from "../../img/artpage/thumbs/ian-lg.jpg";
import ianZoom from "../../img/artpage/ian-zoom.jpg";
import ianZoomThumb from "../../img/artpage/thumbs/ian-zoom.jpg";
import yellowRainCoat from "../../img/artpage/yellowraincoat.jpg";
import yellowRainCoatThumb from "../../img/artpage/thumbs/yellowraincoat.jpg";
import yellowRainCoat2 from "../../img/artpage/yellowraincoat-2.jpg";
import yellowRainCoat2Thumb from "../../img/artpage/thumbs/yellowraincoat-2.jpg";
import talia from "../../img/artpage/talia.jpg";
import taliaThumb from "../../img/artpage/thumbs/talia.jpg";
import fernando from "../../img/artpage/fernando.jpg";
import fernandoThumb from "../../img/artpage/thumbs/fernando.jpg";
import binta from "../../img/artpage/binta.jpeg";
import bintaThumb from "../../img/artpage/thumbs/binta.jpg";
import magenta from "../../img/artpage/magenta.jpeg";
import magentaThumb from "../../img/artpage/thumbs/magenta.jpg";
import orange from "../../img/artpage/orange2.jpg";
import orangeThumb from "../../img/artpage/thumbs/orange2.jpg";
import blueKimono from "../../img/artpage/blueKimono.jpg";
import blueKimonoThumb from "../../img/artpage/thumbs/blueKimono.jpg";
import colorBlock from "../../img/artpage/colorblock.jpg";
import colorBlockThumb from "../../img/artpage/thumbs/colorblock.jpg";
import colorBlock2 from "../../img/artpage/colorblock2.jpg";
import colorBlock2Thumb from "../../img/artpage/thumbs/colorblock2.jpg";
import fern2 from "../../img/artpage/fern2.jpg";
import fern2Thumb from "../../img/artpage/thumbs/fern2.jpg";
import fern3 from "../../img/artpage/fern3.jpg";
import fern3Thumb from "../../img/artpage/thumbs/fern3.jpg";
import talia2 from "../../img/artpage/talia2.jpg";
import talia2Thumb from "../../img/artpage/thumbs/talia2.jpg";
import talia3 from "../../img/artpage/talia3.jpg";
import talia3Thumb from "../../img/artpage/thumbs/talia3.jpg";

const artworksList = {
  flowers,
  flowersThumb,
  flowers2ZO,
  flowers2ZOThumb,
  flowers2,
  flowers2Thumb,
  ianLG,
  ianLGThumb,
  ianZoom,
  ianZoomThumb,
  yellowRainCoat,
  yellowRainCoatThumb,
  yellowRainCoat2,
  yellowRainCoat2Thumb,
  talia,
  taliaThumb,
  talia2,
  talia2Thumb,
  talia3,
  talia3Thumb,
  fernando,
  fernandoThumb,
  fern2,
  fern2Thumb,
  fern3,
  fern3Thumb,
  binta,
  bintaThumb,
  magenta,
  magentaThumb,
  orange,
  orangeThumb,
  blueKimono,
  blueKimonoThumb,
  colorBlock,
  colorBlockThumb,
  colorBlock2,
  colorBlock2Thumb,
};

const artworks = {
  flowers2: {
    image: artworksList.flowers2,
    thumb: artworksList.flowers2Thumb,
    altIMG: [artworksList.flowers2ZO],
    altThumb: [artworksList.flowers2ZOThumb],
    title: "Untitled",
    length: 18,
    width: 24,
    year: "2022",
    material: "Acrylic on Canvas",
  },
  flowers: {
    image: artworksList.flowers,
    thumb: artworksList.flowersThumb,
    altIMG: [],
    altThumb: [],
    title: "Lilies in the Morning Light",
    length: 16,
    width: 20,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  ianLG: {
    image: artworksList.ianLG,
    thumb: artworksList.ianLGThumb,
    altIMG: [artworksList.ianZoom],
    altThumb: [artworksList.ianZoomThumb],
    title: "Tutu's Kimono",
    length: 60,
    width: 26,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  yellowRainCoat: {
    image: artworksList.yellowRainCoat,
    thumb: artworksList.yellowRainCoatThumb,
    altIMG: [artworksList.yellowRainCoat2],
    altThumb: [artworksList.yellowRainCoat2Thumb],
    title: "Yellow Poncho",
    length: 24,
    width: 18,
    year: "2021",
    material: "Acrylic and Oil on Canvas",
  },
  talia: {
    image: artworksList.talia,
    thumb: artworksList.taliaThumb,
    altIMG: [talia2, talia3],
    altThumb: [talia2Thumb, talia3Thumb],
    title: "Talia",
    length: 60,
    width: 36,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  fernando: {
    image: artworksList.fernando,
    thumb: artworksList.fernandoThumb,
    altIMG: [fern2, fern3],
    altThumb: [fern2Thumb, fern3Thumb],
    title: "Fernando",
    length: 40,
    width: 30,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  binta: {
    image: artworksList.binta,
    thumb: artworksList.bintaThumb,
    altIMG: [],
    altThumb: [],
    title: "Binta",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  magenta: {
    image: artworksList.magenta,
    thumb: artworksList.magentaThumb,
    altIMG: [],
    altThumb: [],
    title: "Untitled - Pink",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
  orange: {
    image: artworksList.orange,
    thumb: artworksList.orangeThumb,
    altIMG: [],
    altThumb: [],
    title: "Untitled - Orange",
    length: 36,
    width: 48,
    year: "2021",
    material: "Acrylic on Canvas",
  },
  blueKimono: {
    image: artworksList.blueKimono,
    thumb: artworksList.blueKimonoThumb,
    altIMG: [],
    altThumb: [],
    title: "Tutu's Kimono II ",
    length: 60,
    width: 36,
    year: "2021",
    material: "Oil and Acrylic on Canvas",
  },
  colorBlock: {
    image: artworksList.colorBlock,
    thumb: artworksList.colorBlockThumb,
    altIMG: [colorBlock2],
    altThumb: [colorBlock2Thumb],
    title: "Lara | Colorblock",
    length: 30,
    width: 24,
    year: "2020",
    material: "Acrylic on Canvas",
  },
};

export default artworks;
