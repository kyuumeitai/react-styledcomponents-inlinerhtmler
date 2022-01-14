import React from 'react'
import Card from './Card'
import Hero from './Hero'
import SideCard from './SideCard'

const content = {
  card: [
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

const CustomTheMatchProject = () => {
  return (
    <div>
      <Hero text="<p>Lorem Ipsum dolor sit amet</p>" />
      <div>
        {content.card.map((item, index) => {
          return <Card {...item} key={index} />
        })}
      </div>
      <div>
        {content.side.map((item, index) => {
          return (
            <SideCard
              {...item}
              side={index % 2 === 0 ? 'left' : 'right'}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default CustomTheMatchProject
