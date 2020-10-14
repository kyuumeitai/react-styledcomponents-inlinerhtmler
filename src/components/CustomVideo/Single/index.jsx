import React from "react";
import { Wrap } from "../style.css";

import Player from "../Player";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";

const VideoHome = () => {
  const desktop =
    "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-header-desk-comp.mp4";
  const mobile =
    "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-header-mob-comp-v2.mp4";
  const image =
    "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/PXFHWN22FNFULOA73ZFXCGEU7E.jpg";

  const metadata = {
    logo:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/T53YS2YBCRFMPADZOCYHVNWDTU.png",
    title: "Legendarios",
    supplemental: "Nuevos, capítulo 2 y 3",
    synopsis:
      "Legendarios: chilenos que dejan marca, un proyecto de La Tercera y su Laboratorio de Contenidos de Marca para Casillero del Diablo.",
    mainlink: "https://www.latercera.com/legendarios/02-gabriel-osorio/",
    secondarylink:
      "https://www.latercera.com/culto/2020/10/08/legendarios-la-nueva-webserie-de-la-tercera-que-celebra-a-personajes-chilenos/",
  };

  const data = [
    {
      url: "https://www.latercera.com/legendarios/01-barbara-hernandez/",
      img:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/OMJ7JCUYMVEBFFCYJLC67M6OVA.jpg",
      status: ["available"],
      pretitle: "Capítulo 01",
      name: "Bárbara Hernández",
      title: "Nadadora de aguas gélidas",
      preview:
        "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-01-comp.mp4",
      label: "Disponible",
      description:
        "A Bárbara Hernández le dicen Sirena de Hielo. Se ganó ese apodo la primera vez que nadó entre glaciares patagónicos, una ruta que soñó desde los siete años. Hoy, es reconocida internacionalmente por haber cruzado las aguas más gélidas del mundo y bracear distancias maratónicas. En este primer capítulo de Legendarios, repasamos su carrera y la acompañamos en uno de sus últimos grandes logros: nadar 47 kilómetros alrededor de Manhattan.",
      iframe: "https://rudo.video/vod/bK0pJS",
    },
    {
      url: "https://www.latercera.com/legendarios/02-gabriel-osorio/",
      img:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/4TBOOILXMRCYXN3Z5VVVBPQGYQ.jpg",
      status: ["new", "available"],
      pretitle: "Capítulo 02",
      name: "Gabriel Osorio",
      title: "Director “Historia de un Oso”",
      preview:
        "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-02-cut.mp4",
      label: "Nuevo",
      description:
        "El director Gabriel Osorio y su equipo en Punkrobot lograron lo que nadie vio venir: el primer Oscar para Chile. <br />Historia de un Oso nació como una historia personal que se tornó universal. Una metáfora llena de simbolismos que nos da una lección, no sólo en su significado sino en lo que se puede lograr a nivel de producción local. Y de eso, Gabriel Osorio está convencido. <br />¿Qué tiene entonces Historia de un Oso que cautivó al mundo y a la Academia? Descúbrelo en este segundo capítulo de Legendarios: chilenos que dejan marca.",
      iframe: "https://rudo.video/vod/bK25kQ",
    },
    {
      url: "https://www.latercera.com/legendarios/03-pola-thomson/",
      img:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/BYD36MMPQBDDNFUBG456Z6QRSE.jpg",
      status: ["new", "available"],
      pretitle: "Capítulo 03",
      name: "Pola Thomson",
      title: "Diseñadora de vestuario",
      preview:
        "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-03-cut.mp4",
      label: "Nuevo",
      description:
        "La diseñadora Pola Thomson internacionalizó su carrera a sus tardíos 20 años y ha visto sus creaciones desfilar por numerosas pasarelas alrededor del mundo. Pero aún estando afuera sus diseños se ven permeados de referencias a Chile. “Creo que lo único valioso que uno puede mostrar es aquello que es auténtico”, declara. <br /> En este tercer y último capítulo de Legendarios, descubre cómo ha pesado esa herencia en su carrera y en el hito que la consolidó: la participación de la Semana de la Moda de Nueva York.",
      iframe: "https://rudo.video/vod/bK2KOf",
    },
  ];

  const chapter = data[2];

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
