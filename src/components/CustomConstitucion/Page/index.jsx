import React from 'react'
import Sharer from '../Sharer'
import styled, { css } from 'styled-components'
import Comision from '../Comision'
import data from '../Data'
import LogoLibro from '../LogoLibro'
import IconFlecha from '../IconFlecha'

const serif = css`
  font-family: Georgia, 'Libre Baskerville', Cambria, Cochin, Times,
    'Times New Roman', serif;
`

const Excerpt = styled.p`
  max-width: 700px;
  /* margin-right: auto; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  @media (orientation: portrait) {
    text-align: center;
    font-size: 1.3rem;
  }
`

const HeaderWrap = styled.div`
  margin: 2rem auto;
  max-width: 700px;
  text-align: center;
  ${serif}
  .amano {
    font-family: 'Homemade Apple', cursive;
  }
  .sharer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  h1 {
    line-height: 1.1;
    ${serif}
  }
`

const Wrap = styled.div`
  padding: 0 30px;
  ${serif}
  h2 {
    ${serif}
    line-height: 1.1;
  }
  .amano {
    font-family: 'Homemade Apple', cursive;
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const StLogo = styled.div`
  max-width: 100%;
  overflow: hidden;
  padding: 1px 10px;
  svg {
    max-width: 100%;
  }
`

const Header = () => {
  return (
    <HeaderWrap>
      <StLogo>
        <LogoLibro />
      </StLogo>
      <h1>
        <span className="amano">¿Cómo avanza la</span>
        <br /> <span>Nueva Constitución?</span>
      </h1>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/como-avanza-la-nueva-constitucion-chilena/"
        description={`Cómo avanza la nueva constitución - La Tercera`}
        hashtags="constitucion,chile"
      />
      <Excerpt>
        El pasado 15 de febrero el plano de la Convención Constituyente comenzó
        a votar los artículos que emanaron de sus distintas comisiones. <br />
        <br />A continuación les compartimos los artículos que ya fueron
        aprobados por dos tercios del pleno en votación general y particular, y
        que por ello conformarán el documento inicial -que deberá ser revisado
        por la comisión de armonización- para elaborar el texto definitivo de la
        propuesta de nueva Constitución que será aprobada o rechazada en el
        plebiscito de salida.
      </Excerpt>
      <p>
        <strong>Actualizado al 18 de febrero de 2022</strong>
      </p>
      <IconFlecha />
    </HeaderWrap>
  )
}

const Body = () => {
  // group by comision
  const comisiones = data.reduce((acc, item) => {
    if (!acc[item.comision]) {
      acc[item.comision] = []
    }
    acc[item.comision].push(item)
    return acc
  }, {})

  return (
    <Wrap>
      {Object.keys(comisiones).map((comision, index) => {
        return (
          <Comision
            key={index}
            title={comision}
            items={comisiones[comision]}
            index={index + 1}
          />
        )
      })}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
      </style>
    </Wrap>
  )
}

const Page = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default Page
