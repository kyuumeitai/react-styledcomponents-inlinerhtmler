import React from 'react'
import styled, { css } from 'styled-components'
import SideCard from './SideCard'

import Sharer from './Sharer'

const imports = css``

const CustomBg = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #1e1e1e;
  .repeater {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
  }
`

const MaxWidth = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (orientation: portrait) {
    padding: 1rem;
  }
`

const list = [
  {
    id: 1,
    title: '22 días que sacudieron a Chile',
    description: `Hace diez años, para el aniversario 40 del Golpe de Estado, el suplemento El Semanal de La Tercera publicó una investigación de seis meses del periodista y escritor, Ascanio Cavallo- y un equipo de académicos de la Escuela de Comunicaciones y Periodismo de la UAI- sobre las tres semanas previas al golpe y cómo esos días marcaron el punto de no retorno desde las instituciones del Estado, los partidos políticos y la influencia de la esfera internacional. Este trabajo trasciende el paso del tiempo, por lo que en La Tercera decidimos crear este sitio que irá liberando un contenido diario desde el lunes 21 de agosto hasta llegar al 11 de septiembre. El día de los 50 años.`,
    url: 'https://especiales.latercera.com/22-dias-que-sacudieron-a-chile/',
    image:
      'https://www.latercera.com/resizer/9Qzk_gB3PkZFzs9_lYee4YLeQZw=/arc-anglerfish-arc2-prod-copesa/public/TXRAWN4KIRBBLCXBJNR47QAQ3U.jpg',
  },
  {
    id: 2,
    title: 'Ubicar y Detener',
    description: `Este es un documental sobre seis dirigentes de la UP y sobre cómo afrontaron esas horas inciertas, a medida que los caminos de sus laberintos se empezaban a cerrar. Cada una de sus historias, además, va en formato extendido versión texto, primera persona.`,
    url: 'https://especiales.latercera.com/ubicar-y-detener/',
    image:
      'https://www.latercera.com/resizer/PmFhIh_KGexyi-ktjPvJWNc9B7M=/arc-anglerfish-arc2-prod-copesa/public/DQD5A2U44ZDXZPE3KSUSOVOTLU.jpg',
  },
  {
    id: 3,
    title: 'Chile Visualizado',
    description: `A 50 años del golpe de Estado, Unholster, en su cruzada por acercar información compleja y tecnología a la ciudadanía, preparó esta cartografía sobre las víctimas en la dictadura. Este mapa de Chile georreferencia a las víctimas de violencia política entre 1973 y 1990.`,
    url: 'https://chilevisualizado.latercera.com/',
    image:
      'https://www.latercera.com/resizer/YbnFv72D9E00PFsbwkLsus-s1Xg=/arc-anglerfish-arc2-prod-copesa/public/74JUGDU77RANBP4MSASQFPQQ4I.jpg',
  },
]

const Custom = () => {
  return (
    <CustomBg>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <MaxWidth>
        <div className="repeater">
          {list.map(item => (
            <SideCard
              key={item.id}
              side={item.id % 2 === 0 ? 'left' : 'right'}
              {...item}
            />
          ))}
        </div>
      </MaxWidth>
    </CustomBg>
  )
}

export default Custom
