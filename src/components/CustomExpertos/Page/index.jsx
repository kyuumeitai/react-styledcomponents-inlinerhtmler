import React from 'react'
import Sharer from '../Sharer'
import styled from 'styled-components'
import Ficha from '../Ficha'
import data from '../Data'
import LogoGabineteChico from '../LogoGabineteChico'

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
  .sharer {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  h1 {
    line-height: 1.1;
  }
`

const Wrap = styled.div`
  display: grid;
  padding: 0 30px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  grid-column: span 1 !important;
  > article {
    grid-column: span 1 !important;
  }
  @media (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
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
        <LogoGabineteChico />
      </StLogo>
      <h1>Conoce el nuevo equipo que acompañará al presidente Gabriel Boric</h1>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/el-gabinete-de-gabriel-boric/"
        description={`El gabinete de Gabriel Boric - La Tercera`}
        hashtags="Gabinete,GabineteGabrielBoric,GabineteBoricLT"
      />
      <Excerpt>
        Tras la dura derrota que sufrió el Apruebo en el plebiscito de salida,
        el gobierno de Gabriel Boric se vio obligado a realizar un profundo
        ajuste en su gabinete. El cambio más relevante de todos probablemente
        fue la salida de Izkia Siches del Ministerio del Interior, cartera a la
        que ahora llega Carolina Tohá, una figura política de la ex
        Concertación. Los cambios incluyen nuevos ministros en Salud, Segpres,
        Energía y Ciencias.
      </Excerpt>
    </HeaderWrap>
  )
}

const Body = () => {
  return (
    <Wrap>
      {data.map((item, index) => {
        return (
          <Ficha
            key={index}
            nombre={item.nombre}
            cargo={item.cargo}
            edad={item.edad}
            partido={item.partido}
            profesion={item.profesion}
            nivelAcademico={item.nivelAcademico}
            colegio={item.colegio}
            universidad={item.universidad}
            biografia={item.biografia}
            foto={item.foto}
            url={item.url}
          />
        )
      })}
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
