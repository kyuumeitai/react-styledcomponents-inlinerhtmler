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
      <h1>Conoce el Gabinete del presidente Gabriel Boric</h1>
      <Sharer
        className="sharer"
        url="https://www.latercera.com/el-gabinete-de-gabriel-boric/"
        description={`El gabinete de Gabriel Boric - La Tercera`}
        hashtags="Gabinete2023,GabineteBoricLT"
      />
      <Excerpt>
        Luego de la crisis política desatada por las "desprolijidades" que
        rodearon a los indultos presidenciales entregados a 13 condenados, el
        Presidente Gabriel Boric se vio obligado a tener que sacar a la
        exministra de Justicia, Marcela Ríos, para contener los cuestionamientos
        hacia el gobierno y blindarla ad portas de una acusación constitucional
        en su contra. Así fue como llegó a ese cupo del gabinete el abogado
        administrativista Luis Cordero. Este ajuste se sumó al que meses atrás
        hizo el Mandatario luego de la dura derrota que sufrió el Apruebo en el
        plebiscito de salida.
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
