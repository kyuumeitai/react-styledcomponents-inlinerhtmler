import React from 'react'
import Card from './Card'
import Hero from './Hero'
import SideCard from './SideCard'
import Credits from './Credits'
import styled from 'styled-components'

const content = {
  card: [
    {
      date: 'March 2021',
      title: 'Your Constituent Match',
      image:
        'https://interactivo.latercera.com/match-project-assets/03-tu-match-constituyente-.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
      description: '',
    },
    {
      date: 'April 2021',
      title:
        'This is how the new Convention thinks: 10 keys about the positions of those chosen to write the Constitution',
      image:
        'https://interactivo.latercera.com/match-project-assets/04-asi-piensa-la-nueva-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/asi-piensa-la-nueva-convencion/',
      description: '',
    },
    {
      date: 'November 2021',
      title: 'Your Electoral Match: Presidential elections and Congress',
      image:
        'https://interactivo.latercera.com/match-project-assets/09-tu-match-electoral.png',
      url: 'https://interactivo.latercera.com/tu-match-electoral/',
      description: '',
    },
    {
      date: 'December 2021',
      title: 'How does the new Congress think?',
      image:
        'https://interactivo.latercera.com/match-project-assets/11-como-piensa-el-congreso.png',
      url:
        'https://interactivo.latercera.com/como-piensa-el-nuevo-congreso-2021/',
      description: '',
    },
    {
      date: 'January 2021',
      title: 'Who are the candidates for constituents in your district?',
      image:
        'https://interactivo.latercera.com/match-project-assets/02-quienes-son-los-candidatos-y-candidatas-a-constituyentes-de-tu-distrito.png',
      url: 'https://interactivo.latercera.com/candidatos-constituyentes/',
      description:
        ' We built a dataset with detailed information of all the candidates to the Constitutional Convention, even before the Electoral Service published the official list. It has become an “alternative Wikipedia” for the constitutional conventionals.',
    },
  ],
  side: [
    {
      date: 'November 2020',
      title:
        'Your Constituent Match. Who do you share your country ideas with?',
      image:
        'https://interactivo.latercera.com/match-project-assets/01-tu-match-constituyente.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/con-quien-compartes-tus-ideas-de-pais/',
      description:
        'Our first match, our beta version. We started to iterate this project asking public figures about key issues of the constitution so people could discover with whom they have more affinity.',
    },
    {
      date: 'January 2021',
      title: 'Who are the candidates for constituents in your district?',
      image:
        'https://interactivo.latercera.com/match-project-assets/02-quienes-son-los-candidatos-y-candidatas-a-constituyentes-de-tu-distrito.png',
      url: 'https://interactivo.latercera.com/candidatos-constituyentes/',
      description:
        'We built a dataset with detailed information of all the 1400 candidates to the Constitutional Convention, even before the Electoral Service published the official list. It has become an “alternative Wikipedia” for the constitutional conventionals.',
    },
    {
      date: 'March 2021',
      title: 'Your Constituent Match',
      image:
        'https://interactivo.latercera.com/match-project-assets/03-tu-match-constituyente-.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente/candidatos-constituyentes/',
      description:
        'We chose to play with the concept of "make a Match" -from dating apps like Tinder- with the candidate which had more in common with every person, crossing the answers that every candidate responded in our survey with the answers from the users.',
    },
    {
      date: 'April 2021',
      title:
        'This is how the new Convention thinks: 10 keys about the positions of those chosen to write the Constitution',
      image:
        'https://interactivo.latercera.com/match-project-assets/04-asi-piensa-la-nueva-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/asi-piensa-la-nueva-convencion/',
      description:
        'This was the first presentation of the analysis we made with the answers to our survey. We were able to profile the positions of the constitutional convention on key topics.',
    },

    {
      date: 'May 2021',
      title: 'How do the lists of the Constitutional Convention think?',
      image:
        'https://interactivo.latercera.com/match-project-assets/05-como-piensan-las-listas-de-la-convencion.png',
      url:
        'https://www.latercera.com/investigacion-y-datos/noticia/como-piensan-las-listas-de-la-convencion-constitucional/2WKACYWFUNGXXLLYIE45RNI2NA/ ',
      description:
        'We made a zoom to the analysis taking as reference the electoral lists and parties of the conventional constituents.',
    },
    {
      date: 'July 2021',
      title:
        'Meet the 155 conventionalists who will draft the new Constitution',
      image:
        'https://interactivo.latercera.com/match-project-assets/06-conoce-a-los-155-convencionales.png',
      url:
        'https://latercera.com/interactivo/zoom-a-los-elegidos-de-la-convencion-constitucional/',
      description:
        'To help our audiences to get to know the conventional constituents, the day the constitutional convention started we launched this landing with the full list, linked to the profiles we had built previously.',
    },
    {
      date: 'July 2021',
      title:
        'The chosen ones: Who are they and how does the Constitutional Convention think?',
      image:
        'https://interactivo.latercera.com/match-project-assets/07-los-elegidos.png',
      url:
        'https://interactivo.latercera.com/tu-match-constituyente-los-elegidos/',
      description:
        'Using D3 we launched a data visualization where we showed all our data and made a crossing between the answers of the conventionals and different characteristics in detail.',
    },
    {
      date: 'July 2021',
      title: 'Your Presidential Match: Primary Edition',
      image:
        'https://interactivo.latercera.com/match-project-assets/08-tu-match-presidencial-primarias.png',
      url:
        'https://interactivo.latercera.com/tu-match-presidencial-edicion-primarias/',
      description:
        'Taking the experience of our Constituent Match, we offered a version with the same interface for the presidential primaries.',
    },
    {
      date: 'November 2021',
      title: 'Your Electoral Match: Presidential elections and Congress',
      image:
        'https://interactivo.latercera.com/match-project-assets/09-tu-match-electoral.png',
      url: 'https://interactivo.latercera.com/tu-match-electoral/',
      description:
        'For the presidential, senatoria and deputies election we upgrade our game. We had our traditional match running, but also, with the help of the data scientist Jorge Fábrega, developed an “ideológical map”, using the scaling method NOMINATE, visualizing one ax graphic for the Congress, and two axes -like the classic Political Compass- for president.',
    },
    {
      date: 'November 2021',
      title: 'The elected candidates',
      image:
        'https://interactivo.latercera.com/match-project-assets/10-los-candidatos-electos.png',
      url: 'https://interactivo.latercera.com/candidatos-electorales/electos/',
      description:
        'The day after the election we published a simple and clean page to show all the results of the winning deputies and senators.',
    },
    {
      date: 'December 2021',
      title: 'How does the new Congress think?',
      image:
        'https://interactivo.latercera.com/match-project-assets/11-como-piensa-el-congreso.png',
      url:
        'https://interactivo.latercera.com/como-piensa-el-nuevo-congreso-2021/',
      description:
        'We improved the work of visualization we did in The Chosen Ones with the data of the elected Congress.',
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
      <Hero text="<p> We begin our project with one question: how we could help our audiences to understand the constitutional process and get to know the candidates that aspired to be part of the organ that would write the new Chilean constitution (and their positions on key topics).</p><p>After a year, several iterations and products, we created an interactive, intuitive, easy, and entertaining tool to help people to be involved and participate in such an important election process we had during 2021. At the same time, we built datasets with information that no other media had and that let us publish relevant and interesting analyses about the elected bodies and the possible political outcomes of these elections in the future of our country.</p>">
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
      {/* <Credits /> */}
    </Overall>
  )
}

export default CustomTheMatchProject
