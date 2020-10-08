import React from "react";
import { Wrap } from "../style.css";
import Hero from "../Hero";
import Chapters from "../Chapters";

const VideoHome = () => {
  const desktop = "https://ads-lt.digitalproserver.com/ads/lab/desk-comp.mp4";
  const mobile = "https://ads-lt.digitalproserver.com/ads/lab/mob-comp.mp4";
  const image =
    "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/YJR5544SLZDLBNJPFVA4TJJVTU.jpg";

  const metadata = {
    logo:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/6MQEQEQXWBGPDNYSOR77H2V5X4.png",
    title: "Legendarios",
    supplemental: "Estreno: Capítulo 1",
    synopsis:
      "Desentrañamos la mente de siete personajes para entender cómo las ideas se convierten en creación.<br /> Dirigida por Fernando Lavanderos.",
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
        "https://ads-lt.digitalproserver.com/ads/lab/preview-01-comp.mp4",
      label: "Disponible",
      description:
        "A Bárbara Hernández le dicen Sirena de Hielo. Se ganó ese apodo la primera vez que nadó entre glaciares patagónicos, una ruta que soñó desde los siete años. Hoy, es reconocida internacionalmente por haber cruzado las aguas más gélidas del mundo y bracear distancias maratónicas. En este primer capítulo de Legendarios, repasamos su carrera y la acompañamos en uno de sus últimos grandes logros: nadar 47 kilómetros alrededor de Manhattan.",
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
    },
  ];
  return (
    <Wrap>
      <Hero
        desktop={desktop}
        mobile={mobile}
        image={image}
        metadata={metadata}
      />
      <Chapters chapters={data} />
    </Wrap>
  );
};

export default VideoHome;
