import React from 'react'
import Card from './Card'
import Hero from './Hero'
import SideCard from './SideCard'
import Credits from './Credits'
import styled from 'styled-components'

const content = {
  card: [
    {
      date: 'Marzo 2021',
      title: 'Tu Match Constituyente',
      image:
        'https://interactivo.latercera.com/match-project-assets/03-tu-match-constituyente-.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
      description: '',
    },
    {
      date: 'Abril 2021',
      title:
        'Así piensa la nueva constitución: 10 claves sobre las posturas de los elegidos para escribir la Constitución',
      image:
        'https://interactivo.latercera.com/match-project-assets/04-asi-piensa-la-nueva-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/asi-piensa-la-nueva-convencion/',
      description: '',
    },
    {
      date: 'Noviembre 2021',
      title: 'Tu Match Electoral: elecciones presidenciales y Congreso',
      image:
        'https://interactivo.latercera.com/match-project-assets/09-tu-match-electoral.png',
      url: 'https://interactivo.latercera.com/tu-match-electoral/',
      description: '',
    },
    {
      date: 'Diciembre 2021',
      title: '¿Cómo piensa el nuevo congreso?',
      image:
        'https://interactivo.latercera.com/match-project-assets/11-como-piensa-el-congreso.png',
      url:
        'https://interactivo.latercera.com/como-piensa-el-nuevo-congreso-2021/',
      description: '',
    },
    {
      date: 'Enero 2021',
      title:
        '¿Quiénes son los candidatos y candidatas a constituyentes de tu distrito?',
      image:
        'https://interactivo.latercera.com/match-project-assets/02-quienes-son-los-candidatos-y-candidatas-a-constituyentes-de-tu-distrito.png',
      url: 'https://interactivo.latercera.com/candidatos-constituyentes/',
      description:
        ' Construimos un dataset con información detallada de todos los candidatos a la Convención Constituyente, incluso antes de que el Servicio Electoral publicara la lista oficial. Se ha convertido en una “Wikipedia alternativa” a los convencionales constitucionales.',
    },
  ],
  side: [
    {
      date: 'Noviembre 2020',
      title: 'Tu Match Constituyente. ¿Con quién compartes tus ideas de país?',
      image:
        'https://interactivo.latercera.com/match-project-assets/01-tu-match-constituyente.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/con-quien-compartes-tus-ideas-de-pais/',
      description:
        'Nuestro primer match, nuestro beta. Comenzamos a iterar este proyecto preguntándole a figuras públicas sobre temas clave de la constitución para que la gente pudiera descubrir con quién tenían más afinidad.',
    },
    {
      date: 'Enero 2021',
      title:
        '¿Quiénes son los candidatos y candidatas a constituyentes de tu distrito?',
      image:
        'https://interactivo.latercera.com/match-project-assets/02-quienes-son-los-candidatos-y-candidatas-a-constituyentes-de-tu-distrito.png',
      url: 'https://interactivo.latercera.com/candidatos-constituyentes/',
      description:
        'Construimos un conjunto de datos con información detallada de los 1400 candidatos a la Convención Constitucional, incluso antes de que el Servicio Electoral publicara la lista oficial. Se ha convertido en una “Wikipedia alternativa” a los convencionales constitucionales.',
    },
    {
      date: 'Marzo 2021',
      title: 'Tu Match Constituyente',
      image:
        'https://interactivo.latercera.com/match-project-assets/03-tu-match-constituyente-.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
      description:
        'Quisimos jugar con el concepto de "hacer Match" -como en las aplicaciones de citas tipo Tinder- con el candidato que tenía más en común con cada persona, cruzando las respuestas que cada candidato respondió en nuestra encuesta con las respuestas de los usuarios.',
    },
    {
      date: 'Abril 2021',
      title:
        'Así piensa la nueva Convención: 10 claves sobre las posturas de los elegidos para escribir la Constitución',
      image:
        'https://interactivo.latercera.com/match-project-assets/04-asi-piensa-la-nueva-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/asi-piensa-la-nueva-convencion/',
      description:
        'Esta fue la primera presentación del análisis que hicimos con las respuestas a nuestra encuesta. Pudimos perfilar las posiciones de la convención constitucional en temas clave.',
    },

    {
      date: 'Mayo 2021',
      title: '¿Cómo piensan las listas de la Convención Constitucional?',
      image:
        'https://interactivo.latercera.com/match-project-assets/05-como-piensan-las-listas-de-la-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/noticia/como-piensan-las-listas-de-la-convencion-constitucional/2WKACYWFUNGXXLLYIE45RNI2NA/ ',
      description:
        'Hicimos un análisis detallado, tomando como referencia las listas electorales y partidos de los convencionales constituyentes.',
    },
    {
      date: 'Julio 2021',
      title:
        'Conoce a los 155 convencionales que redactarán la nueva Constitución',
      image:
        'https://interactivo.latercera.com/match-project-assets/06-conoce-a-los-155-convencionales.png',
      url:
        'https://latercera.com/interactivo/zoom-a-los-elegidos-de-la-convencion-constitucional/',
      description:
        'Para ayudar a nuestras audiencias a conocer a los convencionales constituyentes, el día que se inauguró la Convención Constitucional lanzamos este landing con la lista completa, vinculada a los perfiles que habíamos construido anteriormente.',
    },
    {
      date: 'Julio 2021',
      title:
        'Los Elegidos: ¿Quiénes son y cómo piensa la Convención Constitucional?',
      image:
        'https://interactivo.latercera.com/match-project-assets/07-los-elegidos.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente-los-elegidos/',
      description:
        'Utilizando D3 hicimos una visualización de datos donde mostramos toda la data e hicimos un cruce entre las respuestas de los convencionales y distintas características en detalle.',
    },
    {
      date: 'Julio 2021',
      title: 'Tu Match Presidencial: Edición Primarias',
      image:
        'https://interactivo.latercera.com/match-project-assets/08-tu-match-presidencial-primarias.png',
      url:
        'https://interactivo.latercera.com/tu-match-presidencial-edicion-primarias/',
      description:
        'Con la experiencia de nuestro Match Constituyente, hicimos una versión con la misma interfaz, esta vez para las primarias presidenciales.',
    },
    {
      date: 'Noviembre 2021',
      title: 'Tu Match Electoral: Edición presidencial y Congreso',
      image:
        'https://interactivo.latercera.com/match-project-assets/09-tu-match-electoral.png',
      url: 'https://interactivo.latercera.com/tu-match-electoral/',
      description:
        'Para estas elecciones presidenciales, senatoriales y de diputados hicimos una versión nueva de nuestro match. Mantuvimos nuestro resultado tradicional pero, además, con la ayuda del científico de datos Jorge Fábrega, desarrollamos un “mapa ideológico”, usando el método denominado Nominate Score, haciendo gráficos de un eje para el Congreso, y dos ejes -como la clásica Brújula Política- para presidente.',
    },
    {
      date: 'Noviembre 2021',
      title: 'Los candidatos electos',
      image:
        'https://interactivo.latercera.com/match-project-assets/10-los-candidatos-electos.png',
      url: 'https://interactivo.latercera.com/candidatos-electorales/electos/',
      description:
        'Al día siguiente de la elección publicamos una página sencilla y limpia para mostrar todos los resultados con los respectivos diputados y senadores electos.',
    },
    {
      date: 'Diciembre 2021',
      title: '¿Cómo piensa el nuevo congreso? Edición 2021',
      image:
        'https://interactivo.latercera.com/match-project-assets/11-como-piensa-el-congreso.png',
      url:
        'https://interactivo.latercera.com/como-piensa-el-nuevo-congreso-2021/',
      description:
        'Mejoramos el trabajo de visualización que hicimos en Los Elegidos con los datos del Congreso electo.',
    },
  ],
}

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 1 / -1;
  grid-gap: 16px;
  > div {
    grid-column: span 1;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Overall = styled.div`
  background-color: #efefef;
`

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  .featured-title {
    text-align: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-family: franklin-gothic-urw, helvetica, arial, verdana, sans-serif;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    display: block;
  }
`
const CustomTheMatchProject = () => {
  return (
    <Overall>
      <Hero
        text="<p><br />Comenzamos nuestro proyecto con una pregunta: ¿Cómo podríamos ayudar a nuestras audiencias a comprender el proceso constituyente y conocer a los candidatos que aspiraban a ser parte del órgano que redactaría la nueva constitución chilena? (y sus posiciones sobre temas clave).</p>
      
      <p>Después de un año, varias iteraciones y productos, creamos una herramienta interactiva, intuitiva, fácil y entretenida para ayudar a las personas a involucrarse y participar en un proceso electoral tan importante que tuvimos durante 2021. 
      
      Al mismo tiempo, construimos un conjunto de datos con información que ningún otro medio tenía y que nos permitió publicar análisis relevantes sobre los resultados y las posibles proyecciones políticas de estas elecciones en el futuro de nuestro país.</p>">
        <Columns>
          {content.card.map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </Columns>
      </Hero>

      <Wrap>
        <span className="featured-title">Todos los Productos</span>

        {content.side.map((item, index) => {
          return (
            <SideCard
              {...item}
              side={index % 2 === 0 ? 'left' : 'right'}
              key={index}
            />
          )
        })}
      </Wrap>
      {/* <Credits /> */}
    </Overall>
  )
}

export default CustomTheMatchProject
