import React from "react";
import { Wrap } from "../style.css";

import Player from "../Player";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";

const VideoHome = () => {
  const desktop =
    "https://rudo.video/redirector/720/e50e3cb78b6af3ac056e97fec0323844.mp4";
  const mobile =
    "https://rudo.video/redirector/854/f72a4e31abc9000bf47e48d2cba43e06.mp4";
  const image =
    "https://www.latercera.com/resizer/_d8oAyfF0vvPAdAStO6PHFLxQp8=/arc-anglerfish-arc2-prod-copesa/public/7B454T2XVRALJLJ2B3GNUNROOY.jpg";

  const sponsor =
    "https://www.latercera.com/resizer/CDuEaFeGx2OhhX7GeAzArfhueqQ=/arc-anglerfish-arc2-prod-copesa/public/U3223TJYFRAR7HNHDUQUZJBGUE.png";

  const logoproductor =
    "https://www.latercera.com/resizer/kXPp5UxoLulsiUCHx6GjdFCGC5s=/arc-anglerfish-arc2-prod-copesa/public/YE4IYFI4NNCD7JV4EMCR3OPPBI.png";

  const metadata = {
    logo:
      "https://www.latercera.com/resizer/go0FcTuU03fektSvJpdhRwHt_Tk=/arc-anglerfish-arc2-prod-copesa/public/SA34TUFLA5AJ5JODAIKHBULBII.png",
    title: "Tocar la Copa",
    supplemental: "Revisa el estreno acá",
    synopsis:
      "Ya son 30 años desde ese Colo Colo 91 y el logro sigue intacto. Una producción del Laboratorio de Contenidos de Marca de La Tercera, presentada por Adidas y en alianza con Eternos Campeones 91, la agrupación de ex jugadores del Cacique que reúne a los protagonistas de la hazaña.",
    mainlink:
      "https://www.latercera.com/tocar-la-copa/01-cuando-ganar-era-imposible/",
    secondarylink:
      "https://www.latercera.com/el-deportivo/noticia/tocar-la-copa-la-serie-que-pronto-revivira-el-camino-de-colo-colo-a-30-anos-de-la-unica-libertadores/E32FJ4EVLBDSHFPYVFTEOJOIZQ/",
  };

  const data = [
    {
      url:
        "https://www.latercera.com/tocar-la-copa/01-cuando-ganar-era-imposible/",
      img:
        "https://www.latercera.com/resizer/wNhyRXkdJEBpWIONmx8KAbaQfmI=/arc-anglerfish-arc2-prod-copesa/public/X6FUTEKA4BHF5FVUC4OY5BILAU.jpg",
      status: ["available"],
      pretitle: "Capítulo 01",
      name: "Cuando ganar era imposible",
      title: "Tocar la copa",
      preview:
        "https://rudo.video/redirector/480/9fcb138f4979a7fa930242f9d0c12f6e.mp4",
      label: "Disponible",
      description: "Cuando ganar era imposible.",
      iframe: "https://rudo.video/vod/bLP7La",
    },
    {
      url:
        "https://www.latercera.com/tocar-la-copa/02-el-camino-empieza-en-pedreros/",
      img:
        "https://www.latercera.com/resizer/11TqPg-5_bk55_PbrmYysV-0cA4=/arc-anglerfish-arc2-prod-copesa/public/KAQHPF7675EWJHARKM6SIFRILQ.jpg",
      status: ["new", "available"],
      pretitle: "Capítulo 02",
      name: "El camino empieza en Pedreros",
      title: "Tocar la copa",
      preview:
        "https://rudo.video/redirector/480/0323e6ecc013d12037463b733352231d.mp4",
      label: "Nuevo",
      description: "El camino empieza en Pedreros",
      iframe: "https://rudo.video/vod/bLTjeG",
    },
    {
      url: "https://www.latercera.com/tocar-la-copa/03-el-vertigo-de-mirko/",
      img:
        "https://www.latercera.com/resizer/g1SkvTUetWJ-lgtBF7Xl6oMX190=/arc-anglerfish-arc2-prod-copesa/public/EBRENTTTZRHWLGV7KHMZBQOLOQ.jpg",
      status: ["new", "available"],
      pretitle: "Capítulo 03",
      name: "El vértigo de Mirko",
      title: "Tocar la copa",
      preview:
        "https://rudo.video/redirector/1080/e50e3cb78b6af3ac056e97fec0323844.mp4",
      label: "Nuevo",
      description: "El vértigo de Mirko",
      iframe: "https://rudo.video/vod/bLVitM",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/zOEUC8YV-qQH6OfgyVduulNLmdo=/arc-anglerfish-arc2-prod-copesa/public/DMAEGTJ4BVGFDCADUQW7PSQPLU.jpg",
      status: ["soon"],
      pretitle: "Capítulo 04",
      name: "La final anticipada",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/_1rLScuVBnN9JFX28P_TZuY85KE=/arc-anglerfish-arc2-prod-copesa/public/KBEAQLMZYVHFLB6X6Z2NSWOKE4.jpg",
      status: ["soon"],
      pretitle: "Capítulo 05",
      name: "La vuelta olímpica",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/EEobNJVEYCZ1TT8muBIBDf8yR-M=/arc-anglerfish-arc2-prod-copesa/public/7KXMT5Z3UNF65OT4TNJHTRCPMU.jpg",
      status: ["soon"],
      pretitle: "Capítulo 06",
      name: "De Arica a Magallanes",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/yqPJKuljNHFWst1HjWDSewt25D8=/arc-anglerfish-arc2-prod-copesa/public/TF2GKGT4PZC4XNRHTGNOZZZBF4.jpg",
      status: ["soon"],
      pretitle: "Capítulo 07",
      name: "Una historia que no se repite",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/a6hPNLdeGycT_I48vA25wqG9n-I=/arc-anglerfish-arc2-prod-copesa/public/ABWXIAXPSBD7ZKRPUJCYEXDUXY.jpg",
      status: ["soon"],
      pretitle: "Capítulo 08",
      name: "La hinchada",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
  ];

  const chapter = data[0];

  return (
    <Wrap>
      <Header posmode="fixed" />

      <Player chapter={chapter} />
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  );
};

export default VideoHome;
