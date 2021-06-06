import React from "react";
import { Wrap } from "../style.css";
import Hero from "../Hero";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";

const SuperWidget = () => {
  const desktop =
    "https://rudo.video/redirector/1080/9018672d336a28ff136868e2255e405f.mp4";
  const mobile =
    "https://rudo.video/redirector/854/ed45588c9b86f54c7601dc8f36a86e0b.mp4";
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
      status: ["new", "available"],
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
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 02",
      name: "La era Salah",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "La era Salah",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 03",
      name: "La llegada de Mirko",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 04",
      name: "Hinchas",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 05",
      name: "Semifinal",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 06",
      name: "Final",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 07",
      name: "La celebración ",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "",
      img:
        "https://www.latercera.com/resizer/6Ur7k-rBYFGvw9Sfb6lbI1JrIsc=/arc-anglerfish-arc2-prod-copesa/public/GLHJFK2D6JHUVEF2MTYWR4KODQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 08",
      name: "Por qué no se repite la copa",
      title: "Tocar la copa",

      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
  ];
  return (
    <Wrap>
      <Header posmode="fixed" />

      <Hero
        desktop={desktop}
        mobile={mobile}
        image={image}
        metadata={metadata}
        className="wrap-home"
      />
      {/* <Chapters chapters={data} /> */}
      {/* <Footer /> */}
    </Wrap>
  );
};

export default SuperWidget;
