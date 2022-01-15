import React from 'react'
import Card from './Card'
import Hero from './Hero'
import SideCard from './SideCard'
import styled from 'styled-components'

const content = {
  card: [
    {
      date: 'Enero 2021',
      title: 'Tu Match Constituyente',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/con-quien-compartes-tus-ideas-de-pais/',
    },

    {
      date: 'Enero 2021',
      title: 'Quiénes son los candidatos',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
    },
    {
      date: 'Enero 2021',
      title: 'Tu Match Constituyente: Candidatos Constituyentes',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
    },
    {
      date: 'Enero 2021',
      title: 'Así piensa la nueva Convención',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
    },
    {
      date: 'Enero 2021',
      title: 'Cómo piensan las listas de la Convención',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
    },
  ],
  side: [
    {
      date: 'November 2020',
      title:
        'Your Constituent Match. Who do you share your country ideas with?',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/con-quien-compartes-tus-ideas-de-pais/',
      description:
        'Our first match, our beta version. We start iterate this project asking public figures about key issues of the constitution so people could discover with whom they have more affinity.',
    },
    {
      date: 'Enero 2021',
      title: 'Who are the candidates for constituents in your district?',
      image: 'https://picsum.photos/300/200',
      url: 'https://interactivo.latercera.com/candidatos-constituyentes/',
      description:
        ' We built a dataset with detailed information of all the candidates to the Constitutional Convention, even before the Electoral Service published the official list. It has become an “alternative Wikipedia” for the constitutional conventionals.',
    },
    {
      date: 'March 2021',
      title: 'Your Constituent Match',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
      description: '',
    },
    {
      date: 'April 2021',
      title:
        'This is how the new Convention thinks: 10 keys about the positions of those chosen to write the Constitution',
      image: 'https://picsum.photos/300/200',
      url:
        'https://www.latercera.com/investigacion-y-datos/asi-piensa-la-nueva-convencion/',
      description: '',
    },

    {
      date: 'May 2021',
      title: 'How do the lists of the Constitutional Convention think?',
      image: 'https://picsum.photos/300/200',
      url:
        'https://www.latercera.com/investigacion-y-datos/noticia/como-piensan-las-listas-de-la-convencion-constitucional/2WKACYWFUNGXXLLYIE45RNI2NA/ ',
      description: '',
    },
    {
      date: 'July 2021',
      title:
        'Meet the 155 conventionalists who will draft the new Constitution',
      image: 'https://picsum.photos/300/200',
      url:
        'https://latercera.com/interactivo/zoom-a-los-elegidos-de-la-convencion-constitucional/',
      description: '',
    },
    {
      date: 'July 2021',
      title:
        'The chosen ones: Who are they and how does the Constitutional Convention think?',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente-los-elegidos/',
      description: '',
    },
    {
      date: 'July 2021',
      title: 'Your Presidential Match: Primary Edition',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/tu-match-presidencial-edicion-primarias/',
      description: '',
    },
    {
      date: 'November 2021',
      title: 'Your Electoral Match: Presidential elections and Congress',
      image: 'https://picsum.photos/300/200',
      url: 'https://interactivo.latercera.com/tu-match-electoral/',
      description: '',
    },
    {
      date: 'November 2021',
      title: 'The elected candidates',
      image: 'https://picsum.photos/300/200',
      url: 'https://interactivo.latercera.com/candidatos-electorales/electos/',
      description: '',
    },
    {
      date: 'December 2021',
      title: 'How does the new Congress think?',
      image: 'https://picsum.photos/300/200',
      url:
        'https://interactivo.latercera.com/como-piensa-el-nuevo-congreso-2021/',
      description: '',
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
        text="<p>
        We begin our project with one question: how we could help our audiences to understand the constitutional process and get to know the candidates that aspired to be part of the organ that would write the new Chilean constitution (and their positions on key topics).</p> <p> After a year, several iterations and products, we created an interactive, intuitive, easy, and entertaining tool to help people to be involved and participate in such an important election process we had during 2021. At the same time, we built datasets with information that no other media have and that let us publish relevant and interesting analyses about the elected bodies and the possible political outcomes of these elections in the future of our country.</p>">
        <Columns>
          {content.card.map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </Columns>
      </Hero>

      <Wrap>
        <span className="featured-title">All Features</span>

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
    </Overall>
  )
}

export default CustomTheMatchProject
