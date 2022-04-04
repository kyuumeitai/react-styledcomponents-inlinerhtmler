import React from 'react'
import Sharer from '../Sharer'
import styled, { css } from 'styled-components'
import Comision from '../Comision'
import data from '../DataArticulos'
import LogoLibro from '../LogoLibro'
import IconFlecha from '../IconFlecha'
import dataComisiones from '../DataComisiones'

const serif = css`
  font-family: Georgia, 'Libre Baskerville', Cambria, Cochin, Times,
    'Times New Roman', serif;
`

const Excerpt = styled.p`
  max-width: 700px;
  /* margin-right: auto; */
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  @media (orientation: portrait) {
    text-align: center;
    font-size: 1.3rem;
  }
`

const Sep = styled.hr`
  border-top: 1px dashed black;
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
    font-size: 60px;
    margin-bottom: 15px;
    .amano {
      line-height: 1.3;
      display: block;
      font-size: 30px;
    }
    @media (max-width: 768px) {
      font-size: 35px;
      .amano {
        font-size: 24px;
      }
    }
  }
  .aprobados {
    font-size: 24px;
    line-height: 1.2;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  strong {
    font-weight: bold;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .claim {
    font-size: 18px;
    background-color: yellow;
    color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    a {
      font-weight: bold;
      color: black;
    }
  }
  .icon-flecha {
    max-width: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const Wrap = styled.div`
  padding: 0 30px;
  ${serif}
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;

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
  max-width: 260px;
  overflow: hidden;
  padding: 1px 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
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
        <span className="amano">
          ¿Cómo avanza <br />
          la redacción de la
        </span>
        <span>Nueva Constitución?</span>
      </h1>
      <p className="aprobados">
        Cuáles son los artículos <span className="amano">aprobados</span> para
        el texto final
      </p>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/como-avanza-la-nueva-constitucion-chilena/"
        description={`Cómo avanza la nueva constitución - La Tercera`}
        hashtags="constitucion,chile"
      />
      <Excerpt>
        El pasado 15 de febrero el pleno de la Convención Constituyente comenzó
        a votar los artículos que emanaron de sus distintas comisiones. <br />
        <br />A continuación les compartimos los artículos que ya fueron
        aprobados por dos tercios del pleno en votación general y particular, y
        que por ello conformarán el documento inicial -que deberá ser revisado
        por la comisión de armonización- para elaborar el texto definitivo de la
        propuesta de nueva Constitución que será aprobada o rechazada en el
        plebiscito de salida.
      </Excerpt>
      <Sep />

      <p className="claim">
        <strong>Importante</strong>: El detalle de las votaciones que se muestra
        en esta página corresponde a la votación en general. Además los
        artículos aprobados pueden sumar incisos adicionales en el marco de su
        tramitación. Para entender más del proceso de votación lee la siguiente
        nota:{' '}
        <a
          href="https://www.latercera.com/interactivo/noticia/como-funciona-la-convencion-constitucional/GN3SWTR4KBCGPHDG7YYP5C5Q5E/"
          target="_blank"
          rel="noopener noreferrer">
          ¿Cómo funciona la Convención Constitucional?
        </a>
      </p>

      <p className="mt-30">
        -
        <strong>
          Última votación en particular del pleno: 1 de abril de 2022
        </strong>
        -
      </p>
      <IconFlecha className="icon-flecha" />
    </HeaderWrap>
  )
}

const Body = () => {
  // group by comision
  console.log(dataComisiones)
  console.log(data)
  const comisiones = dataComisiones.reduce((acc, item) => {
    if (!acc[item.comision]) {
      acc[item.comision] = []
    }
    console.log('item', item)
    acc[item.comision].push(...data.filter(i => i.comision === item.comision))
    // acc[item.comision].push(item)
    return acc
  }, {})

  console.log('comisiones after', comisiones)

  //add dataComisiones to comisiones array
  //.Sistemas de Justicia, Órganos Autónomos de Control y Reforma Constitucional
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
