import React from "react";
import { Wrap } from "../style.css";
import Hero from "../Hero";
import Chapters from "../Chapters";
import Header from "../Header";
import Footer from "../Footer";

const VideoHome = () => {
  const desktop =
    "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-header-desk-comp.mp4";
  const mobile =
    "https://ads-lt.digitalproserver.com/ads/lab/legendarios/legendarios-header-mob-comp.mp4";
  const image =
    "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/PXFHWN22FNFULOA73ZFXCGEU7E.jpg";

  const metadata = {
    logo:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/Q6ZNBMYSRZDLZGB2UBZ2L73QZI.png",
    title: "Legendarios",
    supplemental: "Estreno: Capítulo 1",
    synopsis:
      "Legendarios: chilenos que dejan marca, un proyecto de La Tercera y su Laboratorio de Contenidos de Marca para Casillero del Diablo.",
    mainlink: "https://www.latercera.com/legendarios/01-barbara-hernandez/",
    secondarylink: "",
  };

  const data = [
    {
      url: "https://www.latercera.com/legendarios/01-barbara-hernandez/",
      img:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/OMJ7JCUYMVEBFFCYJLC67M6OVA.jpg",
      status: ["new", "available"],
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
      status: ["soon"],
      pretitle: "Capítulo 02",
      name: "Gabriel Osorio",
      title: "Director “Historia de un Oso”",
      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
    {
      url: "https://www.latercera.com/legendarios/03-pola-thompson/",
      img:
        "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/Z4U463GDI5AUTOY42CXNXMWQSQ.jpg",
      status: ["soon"],
      pretitle: "Capítulo 03",
      name: "Pola Thompson",
      title: "Diseñadora de vestuario",
      preview: "",
      label: "Pronto",
      description: "",
      iframe: "",
    },
  ];
  return (
    <Wrap>
      <Header />
      <Hero
        desktop={desktop}
        mobile={mobile}
        image={image}
        metadata={metadata}
      />
      <Chapters chapters={data} />
      <Footer />
    </Wrap>
  );
};

export default VideoHome;
