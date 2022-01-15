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
      title: 'Quiénes son los candidatos ',
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
      title: 'lorem',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
    },
    {
      date: 'Enero 2021',
      title: 'lorem',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
    },
  ],
  side: [
    {
      date: 'Enero 2021',
      title: 'lorem',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      date: 'Enero 2021',
      title: 'lorem',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      date: 'Enero 2021',
      title: 'lorem',
      image: 'https://picsum.photos/300/200',
      url: 'https://www.google.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
`
const CustomTheMatchProject = () => {
  return (
    <Overall>
      <Hero text="<p>Lorem Ipsum dolor sit amet</p>">
        <Columns>
          {content.card.map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </Columns>
      </Hero>

      <Wrap>
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
