import React from 'react'
import styled, { css } from 'styled-components'
import Sharer from './Sharer'

const imports = css`
  @font-face {
    font-family: 'Acta Display';
    src: url('https://especiales.latercera.com/11sept-assets/ActaDisplay-ExtraBold.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaDisplay-ExtraBold.woff')
        format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url('https://especiales.latercera.com/11sept-assets/Acta-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/Acta-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url('https://especiales.latercera.com/11sept-assets/Acta-Bold.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/Acta-Bold.woff')
        format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url('https://especiales.latercera.com/11sept-assets/ActaAgate-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaAgate-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Sans';
    src: url('https://especiales.latercera.com/11sept-assets/ActaAgate-Bold.woff')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaAgate-Bold.woff')
        format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url('https://especiales.latercera.com/11sept-assets/ActaHeadline-Book.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaHeadline-Book.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url('https://especiales.latercera.com/11sept-assets/ActaHeadline-BookItalic.woff2')
        format('woff2'),
      url('https://especiales.latercera.com/11sept-assets/ActaHeadline-BookItalic.woff')
        format('woff');
    font-weight: normal;
    font-style: italic;
  }
`

const munoz =
  'https://www.latercera.com/resizer/vIY5UX-YKwxsnG-iVZPLoh1Ljoo=/arc-anglerfish-arc2-prod-copesa/public/O2P6QGYRRJCI5HJHFFUSUB5EOU.jpg'

const lagosweber =
  'https://www.latercera.com/resizer/BNcaUBQxIxQgnCUechR87DxtAcg=/arc-anglerfish-arc2-prod-copesa/public/2IGEE7J3TVHEPLR7PYR7VDLZLM.jpg'

const lagos =
  'https://www.latercera.com/resizer/I8cIfadQEmFYLQOWXe2IBc33Ik0=/arc-anglerfish-arc2-prod-copesa/public/P4CCRY4F4ZAXFDLDUJZUB4YVNM.jpg'

const barros =
  'https://www.latercera.com/resizer/hQ-qx3zGsaB2Jc48i6flRTp4psU=/arc-anglerfish-arc2-prod-copesa/public/ACFLJB7Z4BEI5JOHP6QUTHWXPE.jpg'

const alvear =
  'https://www.latercera.com/resizer/20c9mI6cl0qMkiu8vwII0Vrj5FU=/arc-anglerfish-arc2-prod-copesa/public/YKOWVWUZ6JFY7OO6DYW4YXBB6U.jpg'

const valdes =
  'https://www.latercera.com/resizer/yQBoy72FBj59xs0sZT1PQvQ3QVs=/arc-anglerfish-arc2-prod-copesa/public/R4RARPTB2JEXHK2QUXIRH2L3R4.jpg'

const reyes =
  'https://www.latercera.com/resizer/pLaZpZZtZ7CrblG3iqR77KvUJ9E=/arc-anglerfish-arc2-prod-copesa/public/TVDXMZA26RAC5K6EVOB7MJGJHQ.jpg'

const gaspar =
  'https://www.latercera.com/resizer/wXvx7LWV4WLsFLt9qc0cHJTP5hU=/arc-anglerfish-arc2-prod-copesa/public/DXKFXM2AEJAN3JYVGY6VOHS2YU.jpg'

const insulza =
  'https://www.latercera.com/resizer/xtE7q-boxwFUvyHJ0DrndFAoEYE=/arc-anglerfish-arc2-prod-copesa/public/SFADHFBC7VHQZO3Z33BBQDR77Q.jpg'

const Article = styled.article`
  font-family: 'Acta Book', 'Times New Roman', Times, serif;
  padding: 6rem 1rem;
  > div {
    /* border: 1px solid #0f0; */
  }

  figure {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    figcaption {
      padding: 6px 1px;
      font-family: 'Acta Sans', sans-serif;
      text-transform: uppercase;
      border-bottom: 1px solid #666;
      strong {
        font-weight: bold;
      }
      @media (orientation: portrait) {
        font-size: 0.9rem;
      }
      &:before {
        content: '▲';
        display: inline-block;
        margin-right: 4px;
        margin-left: 4px;
      }
    }
    img {
      width: 100%;
      display: block;
    }
  }

  h1 {
    font-family: 'Acta Headline', 'Times New Roman', Times, serif;
    font-size: 4rem;
    font-weight: normal;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    @media (orientation: portrait) {
      font-size: 2.8rem;
    }
    strong {
      font-size: 6rem;
      line-height: 0.8;
      display: block;
      font-family: 'Acta Display', 'Times New Roman', Times, serif;
      position: relative;
      padding-bottom: 1rem;
      font-weight: bold;
      @media (orientation: portrait) {
        font-size: 4rem;
      }
      &:after {
        content: '';
        position: absolute;
        left: 30%;
        right: 30%;
        bottom: 0.3rem;
        border-bottom: 2px solid black;
      }
    }
    line-height: 1;
    text-align: center;
  }
`

const Excerpt = styled.p`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  text-align: justify;
  @media (orientation: portrait) {
    text-align: center;
  }
`

const Authors = styled.p`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 3px 1px;
  border-top: 1px solid black;
  font-family: 'Acta Sans', sans-serif;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  strong {
    font-weight: bold;
  }
`

const Content = styled.div`
  padding: 1rem 0;
`

const Testimony = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: flex-start;
  transform: translate3d(0px, 0px, 0px);
  grid-gap: 2rem;
  padding-bottom: 10rem;
  padding-top: 10rem;
  @media (orientation: portrait) {
    grid-template-columns: 70px 1fr;
    grid-gap: 1rem;
  }

  .testimony--header {
    position: sticky;
    display: flex;
    top: 30vh;
    align-items: flex-end;
    flex-direction: column;
    h2 {
      font-family: 'Acta Headline', 'Times New Roman', Times, serif;
      font-size: 1.1rem;
      font-weight: normal;
      line-height: 1;
      padding-top: 0.5rem;
      width: 100%;
      text-align: center;
      small {
        color: #999;
        display: block;
        font-size: 0.9rem;
        display: block;
        margin-top: 4px;
      }
      strong {
        font-weight: bold;
      }
    }
  }
  .testimony--body {
    p {
      font-size: 1.6rem;
      @media (orientation: portrait) {
        font-size: 1.2rem;
      }
      strong {
        font-weight: bold;
      }
      margin-bottom: 1rem;
    }
    i {
      font-style: italic;
    }
    padding-top: 30vh;
    @media (orientation: portrait) {
      font-size: 20rem;
    }
    blockquote {
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 0;
      margin-right: 0;
      background-color: transparent;
      font-size: 2rem;
      line-height: 1.3;
      padding: 0;
      @media (orientation: portrait) {
        font-size: 1.7rem;
      }
      &.bigblockquote {
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        line-height: 1.3;
        @media (orientation: portrait) {
          font-size: 2.1rem;
          line-height: 1.2;
        }
      }
      strong {
        font-weight: bold;
      }
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
    }
  }
`

const Separator = styled.h2`
  font-size: 3rem;
  text-align: center;
`

const StAvatar = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 6px 3px rgba(204, 204, 204, 0.5);
  padding: 0;
  @media (orientation: portrait) {
    width: 70px;
    height: 70px;
  }

  img {
    border-radius: 50%;
    border: 2px solid white;
    display: block;
  }
`

const Avatar = ({ personurl, name }) => {
  return (
    <StAvatar>
      <img src={personurl} alt="" />
    </StAvatar>
  )
}

const Custom = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: imports }}></style>
      <Article>
        <h1>
          <strong>
            Atentados a <br />
            Nueva York:
          </strong>{' '}
          Historia oral del 11/S en Chile
        </h1>
        <Excerpt>
          Ocho voces protagonistas de la jornada reconstruyen, en primera
          persona, sus pensamientos y decisiones a dos décadas del ataque
          terrorista a Estados Unidos.
        </Excerpt>
        <Authors>
          Por: <strong>S. Rivas, J.A. Quezada y A. Tapia</strong>
        </Authors>
        <Sharer
          url="https://www.latercera.com/atentados-a-nueva-york-historia-oral-del-11s-en-chile/"
          description={``}
          hashtags="11s"
        />
        <Content>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos" />
              <h2>
                <strong>Ricardo Lagos Escobar</strong>
                <small>Presidente de la República</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Era una gira de una semana. Prácticamente un día por capital.
                Esa visita comenzaba el domingo con un almuerzo privado con el{' '}
                <strong>Presidente de Portugal</strong>, el día lunes con una
                reunión con el primer ministro y el Presidente, y ese día martes
                terminaba la visita con un almuerzo en Lisboa que daba el primer
                ministro{' '}
                <strong>
                  Antonio Guterres, actual secretario general de Naciones Unidas
                </strong>{' '}
                . Luego, debía irme al aeropuerto a tomar un vuelo para{' '}
                <strong>Inglaterra</strong>.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>José Miguel Insulza</strong>
                <small>Vice presidente de la República</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Yo estaba de Vicepresidente de la República. Salí de mi casa
                relativamente temprano, fundamentalmente porque{' '}
                <strong>
                  el 11 de septiembre para nosotros era una fecha muy especial
                </strong>
                , y todos los años había una{' '}
                <strong>
                  misa en La Moneda en recuerdo de Salvador Allende
                </strong>{' '}
                y de las víctimas.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Ricardo Lagos Weber</strong>
                <small>
                  Jefe negociador de la Direcon en el TLC con Estados Unidos:
                </small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Estaba en Washington D.C. junto a la delegación que estaba{' '}
                <strong>negociando el acuerdo con Estados Unidos</strong>.
                Éramos alrededor de 45, 50 profesionales. Esto fue muy temprano
                en la mañana, entre las 8 y las 9 de la mañana. Junto a Osvaldo
                Rosales y un par de colegas más tuvimos una reunión en la
                embajada de Chile -estaba el embajador Andrés Bianchi, me
                recuerdo- con unos abogados norteamericanos por el tema del
                tratado.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />

              <h2>
                <strong>Juan Gabriel Valdés, </strong>
                <small>Embajador de Chile en la ONU</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Nosotros estábamos ese día en una reunión de{' '}
                <strong>embajadores del Grulac</strong> (Grupo Latinoamericano y
                del Caribe), que se reunía en la embajada de Chile a las 8, 8 y
                cuarto.
              </p>

              <blockquote>
                El ambiente era muy agradable, como siempre que nos encontramos
                los latinoamericanos: lleno de simpatía, y de abrazos, y de
                galletas, y de café.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={alvear} name="Soledad Alvear" />

              <h2>
                <strong>Soledad Alvear</strong>
                <small>Canciller chilena:</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Esa mañana me encontraba en <strong>Lima</strong>, junto a todos
                mis pares, en una{' '}
                <strong>
                  asamblea de la Organización de Estados Americanos
                </strong>
                , para aprobar la Carta Democrática Interamericana.
              </p>
            </div>
          </Testimony>
          <Separator>***</Separator>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />
              <h2>
                <strong>Fernando Reyes Matta </strong>
                <small>Asesor internacional de Ricardo Lagos</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Alguien de la policía de Guterres se acerca un poco callado,
                algo murmurando, y le dice: “Hay una{' '}
                <strong>avioneta que chocó en un edificio en Nueva York</strong>
                ”. Bueno, un edificio en Nueva York, una avioneta… sí, está
                bien, es una curiosidad. Ahí, Heraldo Muñoz escuchó esto y me
                fue a ver a mí, y me pidió averiguar qué pasaba.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Heraldo Muñoz </strong>
                <small>vicecanciller de Chile </small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Estábamos en el postre y de repente entra un asesor del primer
                ministro y le pasa un papel. Guterres lo lee en voz alta: “Se
                informa que un avión se acaba de estrellar en las torres gemelas
                de Nueva York”.{' '}
              </p>
              <blockquote>
                Y nuestro comentario fue “qué lástima”, “que pena”, “un
                accidente así”... <strong>Y no comentamos más que eso</strong>.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Cristián Barros</strong>
                <small>Embajador chileno en el Reino Unido</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Estábamos ya en la oficina, esperando salir al aeropuerto para
                recibir a Ricardo Lagos, cuando me avisa la secretaria: “Oiga,
                embajador, mire lo que está sucediendo en Nueva York”. Y
                prendimos la televisión: en ese momento{' '}
                <strong>habían impactado el primer edificio.</strong>
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={gaspar} name="Gabriel Gaspar" />

              <h2>
                <strong>Gabriel Gaspar </strong>
                <small>Sub secretario de Guerra</small>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                En ese momento el Ministerio de Defensa estaba en el{' '}
                <strong>edificio Diego Portales</strong>. En algún momento entra
                mi ayudante y me dice: “Hay una noticia”. Y me cuenta lo de la
                avioneta en Nueva York, la primera. Yo estaba en la gestión de
                primera hora, firmando papeles, respondiendo correos. Me quedó
                dando vuelta, porque el espacio aéreo norteamericano está bien
                protegido.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                Me llamó mi señora y me contó{' '}
                <strong>
                  que había chocado un avión contra las Torres Gemelas
                </strong>
                , lo primero que pasó.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />

              <h2>
                <strong>Valdés:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                De pronto entra un <strong>funcionario de Guyana</strong>, me
                acuerdo muy bien, a la sala, y le dice a su embajador que por
                favor salga.{' '}
                <strong>El embajador salió y volvió con una pregunta</strong>{' '}
                insólita para todos nosotros.
              </p>
              <blockquote className="bigblockquote">
                Dijo: "
                <strong>
                  Perdone que interrumpa, pero ¿hay una televisión aquí?
                </strong>
              </blockquote>
              <blockquote>
                "Entonces... bueno, había una televisión. Se prendió la
                televisión y él dijo: "
                <strong>
                  Algo pasa en Wall Street, algo está sucediendo en Wall Street,
                  no se sabe bien qué
                </strong>
                ".
              </blockquote>{' '}
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />

              <h2>
                <strong>Reyes Matta: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Había una especie de caseta chica donde estaba la gente de
                seguridad portuguesa. Y en eso, están todos mirando un
                televisor. Ése es el momento en que{' '}
                <strong>yo veo que hay una torre que está echando humo,</strong>{' '}
                inundada de humo, una de las Torres. Pregunto y en ese momento
                están las primeras versiones: que chocó un avión o una avioneta,
                una cosa así, contra las Torres hace pocos minutos.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />
              <h2>
                <strong>Valdés: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Ya el primer ataque había ocurrido, pero los periodistas{' '}
                <strong>especulaban en ese momento que era un accidente</strong>
                ; o sea, básicamente lo que se pensaba era que un avión había
                chocado con las Torres.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                Eso (un accidente) había <strong>ocurrido alguna vez</strong>{' '}
                con el <strong>Empire State Building</strong>, muchos años
                atrás.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Terminada la reunión con los abogados, nos enteramos que un
                avión había chocado contra las Torres Gemelas. Pero todo era
                accidente todavía; estaban{' '}
                <strong>transmitiendo en vivo.</strong>
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>Me bajé del auto y puse la televisión, y le dije:</p>
              <blockquote className="bigblockquote">
                "Oye, <strong>aquí estoy viendo cómo chocó</strong>, es
                impresionante, <strong>lo filmaron</strong>".
              </blockquote>
              <p>"No", me dijo ella.</p>
              <blockquote className="bigblockquote">
                "Éste es otro avión. <strong>Es el segundo</strong>".
              </blockquote>
            </div>
          </Testimony>
          <Separator>***</Separator>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />

              <h2>
                <strong>Valdés: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                <strong>
                  Unos minutos más tarde vimos el avión que se estrellaba ya
                  directamente contra la otra torre.
                </strong>
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Antes de dirigirnos a la reunión de negociación, que era en la{' '}
                <strong>Universidad George Mason</strong>, en Washington, en
                directo vimos cómo fue el segundo impacto.
              </p>
              <blockquote>
                Y ahí ya quedó claro que esto era un atentado.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={gaspar} name="Gabriel Gaspar" />

              <h2>
                <strong>Gaspar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Estábamos justo instalados frente a la tele con el jefe del
                Estado Mayor de la Defensa de entonces, que estaba en el mismo
                edificio, el general Ricardo Gutiérrez, que era de la Fuerza
                Aérea. A estas alturas yo había suspendido lo que estaba
                haciendo. Y vemos en vivo el segundo impacto.
              </p>
              <blockquote>
                Ahí me sirvió mucho estar con un oficial de la Fuerza Aérea,
                porque me dijo de inmediato:{' '}
                <strong>
                  “Gabriel, eso no es una avioneta, es un avión comercial”
                </strong>
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />
              <h2>
                <strong>Reyes Matta:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                Yo lo vi,{' '}
                <strong>el segundo avión que le pega a la otra torre</strong>.
              </blockquote>
              <p>
                En ese momento, con mi estupor, vuelvo a la sala, que ya están
                tomando un café, y les digo: “Ha habido un choque y todo indica
                que esto tiene características de un atentado”. A su vez, viene
                alguien que le dice a Guterres:
              </p>
              <blockquote className="bigblockquote">
                “Las dos torres <strong>están ardiendo</strong>”.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos" />

              <h2>
                <strong>Lagos Escobar:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                Alguien entra y me dicen ‘un segundo avión chocó contra la otra
                torre y <strong>ahora se están derrumbando las torres</strong>’.
                Bueno, ahí entonces... <i>qué quiere que le diga</i>.
              </blockquote>
            </div>
          </Testimony>

          <figure>
            <img
              src="https://www.latercera.com/resizer/fcyPZdKxpZ1M9HcshG3OZc-M1ws=/arc-anglerfish-arc2-prod-copesa/public/JXTROWIFVNB63EOFG6S6C45WBE.jpg"
              alt="Portada de La Tercera del día 12 de Septiembre de 2001"
            />
            <figcaption>
              Portada de La Tercera del día 12 de Septiembre de 2001
            </figcaption>
          </figure>

          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />
              <h2>
                <strong>Valdés: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                <strong>
                  Los embajadores salieron disparados a sus oficinas
                </strong>
                , a tratar de comunicarse con sus gobiernos. El único que se
                quedó, me acuerdo muy bien, era el de Paraguay, que dijo que
                tenía mala la televisión en su oficina, así que le permitíamos
                quedarse ahí.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />
              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Concurrimos al lugar de negociación, donde la delegación
                americana -eran más puntuales que los chilenos- estaban sentados
                en la sala de reuniones.
              </p>
              <blockquote>
                No había ni Whatsapp, ni Twitter, nada. Entonces, ellos estaban
                "desconectados" en ese minuto:{' '}
                <strong>
                  lo que más habían alcanzado a saber era que había pasado un
                  accidente en Nueva York
                </strong>
                , el avión.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Me acuerdo de manera muy clara que Guterres nos dijo al pararnos
                de la mesa:
              </p>
              <blockquote>
                {' '}
                “Nos vamos a recordar para siempre de este almuerzo hoy martes
                11 septiembre, porque{' '}
                <strong>probablemente esto tenga un trasfondo muy serio</strong>
                ”.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Terminamos rápidamente el café y me paré para irme. Debía irme
                al aeropuerto a tomar un vuelo a Inglaterra. Cuando nos vamos
                hacia el auto (Guterres) me dice, ‘
                <strong>nos vemos entonces el viernes en Estocolmo</strong>’, a
                propósito del día y el lugar donde terminaba la gira, tras una{' '}
                <strong>reunión con líderes progresistas</strong>.
              </p>
              <blockquote>
                “<strong>No creo</strong>”, le dije.{' '}
              </blockquote>
              <p>
                “Para el viernes falta mucho tiempo y creo que se va a
                suspender”. Y de hecho fue así.
              </p>
            </div>
          </Testimony>
          <Separator>***</Separator>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />
              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Decidimos inmediatamente que la misa (en conmemoración de
                Allende y las víctimas del 11 de septiembre de 1973) se hacía
                igual, <strong>con un carácter especial</strong> por esta
                tremenda tragedia que estaba ocurriendo. Y yo me comuniqué de
                inmediato con el encargado de negocios de Estados Unidos, no
                había embajador en esa época, el señor Phillip Goldberg, que
                luego sería embajador en otros países.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Cuando llegamos al lugar de la negociación, la Universidad
                George Mason, les contamos a los americanos. Y ahí, obviamente{' '}
                <strong>
                  se paralizó la negociación hasta el día siguiente
                </strong>
                . Pero fue un impacto fuerte.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={alvear} name="Soledad Alvear" />

              <h2>
                <strong>Alvear: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Salí corriendo al salón principal y me encontré con el
                secretario de Estado de EE.UU. <strong>Colin Powell</strong>,
                sentado tranquilo en su lugar, esperando partir la sesión.{' '}
                <strong>Recuerdo muy bien el abrazo que nos dimos</strong>, y
                luego sus palabras al abrir la reunión.
              </p>
              <blockquote>
                {' '}
                Dijo que en estos duros momentos lo más importante era cuidar
                nuestras democracias, y que la carta iba en esa dirección, por
                lo cual él permanecería en Lima hasta su total aprobación y
                luego partiría a su país.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />
              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Por lo que yo he sabido, la Carta se iba a ratificar ese día,
                pero había algunos países que todavía querían hacerle algunos
                alcances. Y sin embargo,{' '}
                <strong>
                  cuando se supo esto, la aprobaron de inmediato y la firmaron
                  por unanimidad
                </strong>
                , para que Colin Powell, que era el secretario de Estado de
                Estados Unidos, pudiera volverse de inmediato desde Lima en su
                avión a Estados Unidos.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Había dos o tres personas que venían de Chile aterrizando en ese
                minuto, en el aeropuerto (Reagan) National. Venían aterrizando
                en el minuto en que fue el atentado al Pentágono, que está a
                escasos metros, o millas, si usted quiere en términos de
                aviación: está al lado del aeropuerto. Y esas tres personas,
                literalmente,{' '}
                <strong>
                  cuando el avión tocaba la pista, hubo la explosión en el
                  Pentágono
                </strong>
                . Fueron evacuados del aeropuerto y{' '}
                <strong>
                  anduvieron como dos o tres horas en taxi por Washington,
                  porque estaba la tendalada
                </strong>
                .
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />
              <h2>
                <strong> Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                La reacción de <strong>Isabel Allende</strong> en La Moneda fue
                muy impresionante. Porque{' '}
                <strong>íbamos a hacer la misa y la misa se hizo</strong>. Como
                todos los años, iba a ser una misa de recuerdo del 11 de
                septiembre de 1973. Sin embargo, ella puso un mayor énfasis en{' '}
                <strong>condenar lo que estaba ocurriendo</strong>, y lo hizo
                muy bien, muy vehemente. Le dio el sentido que tenía que tener:
                estaba ocurriendo algo muy grave ese 11 de septiembre.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />
              <h2>
                <strong>Valdés: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Nosotros fuimos adentro e hicimos algo que hasta el día de hoy
                lo recuerdo con una sensación doble, porque fue muy{' '}
                <strong>ingenuo</strong>:
              </p>
              <blockquote>
                {' '}
                Hicimos una{' '}
                <strong>resolución de condena al ataque terrorista</strong> a
                las Torres Gemelas y al Estado norteamericano.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                La única decisión fue <strong>cerrar el espacio aéreo</strong>.
                No decretamos estado de sitio, estado de emergencia ni ninguna
                cosa de ese tipo. Lo que hicimos fue recomendar a la gente que
                se quedara en sus casas, que no saliera, y decretar una veda de
                vuelos, por un día por lo menos.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                Vi las imágenes cuando llego al aeropuerto.{' '}
              </blockquote>
              <p>
                Antes no vi ninguna imagen porque cuando terminó el almuerzo,
                nos subimos con mi mujer al auto, conversamos en el auto y le
                digo: “Yo voy a seguir la gira, porque tomé la decisión de
                continuar la gira, porque el{' '}
                <strong>terrorismo no nos va a derrotar</strong> ni hacer
                interrumpir lo que hay que hacer”.
              </p>
            </div>
          </Testimony>
          <figure>
            <img
              src="https://www.latercera.com/resizer/ySyCYppuYBucVmEZoVwvMzNCP-0=/arc-anglerfish-arc2-prod-copesa/public/KPHM45I5BZGQVMD3ZLPFRI2WUA.jpg"
              alt="Página 5 de La Tercera del día 12 de Septiembre de 2001"
            />
            <figcaption>
              Página 5 de La Tercera del día 12 de Septiembre de 2001
            </figcaption>
          </figure>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                <strong>Los teléfonos estaban copados</strong>. Uno trataba de
                hablar con alguien y no te podías conectar.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                <strong>No era fácil</strong>. No era lo de hoy día. Fue difícil
                comunicarse con Insulza y también con Soledad (Alvear), que
                estaba en Lima. Pero al final logramos tener un contacto.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />

              <h2>
                <strong>Reyes Matta: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Ahí, Alvear le cuenta a Lagos que Colin Powell ya está por irse
                al aeropuerto para regresar a Estados Unidos y que se acaba de
                tomar la decisión de aprobar la Carta Democrática, que era el
                tema de discusión en Lima. Y Lagos le plantea que los
                cancilleres de América, que están todos reunidos,{' '}
                <strong>tendrían que hacer una declaración de rechazo</strong> a
                todo esto que ha ocurrido,{' '}
                <strong>antes de que termine la reunión especial</strong>.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                <strong>
                  Todas las instalaciones de la Embajada de Estados Unidos en
                  Chile quedaron resguardadas
                </strong>
                . Incluso yo me acuerdo que con el encargado de negocios yo me
                encontré en esa época en lo que era la sede del Instituto
                Chileno Norteamericano de Cultura, ahí en la calle Moneda.
              </p>
              <blockquote>
                No había posibilidad en otra parte: la embajada y la residencia
                del embajador estaban protegidas.
              </blockquote>
            </div>
          </Testimony>
          <Separator>***</Separator>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagosweber} name="Ricardo Lagos Weber" />

              <h2>
                <strong>Lagos Weber: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Los americanos cerraron el espacio aéreo completo y{' '}
                <strong>bajaron todos los aviones. ¡Todos los aviones!</strong>.
                Y ahí comenzaron dificultades humanas para miembros de la
                delegación chilena: estoy hablando de 45 a 50 personas, todos
                tienen realidades distintas. ¿Y qué ocurrió? Desde Chile había
                preocupación de qué es lo que estaba pasando, porque{' '}
                <strong>
                  no era que estuviéramos en una ciudad perdida norteamericana
                </strong>
                :
              </p>
              <blockquote>
                <strong>Estábamos en Washington D.C.</strong>, donde había sido
                el atentado al Pentágono, donde un cuarto avión había caído.
                Había mucho susto.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Estaba preocupado. El presidente venía en camino, porque sabía
                yo que había salido de Portugal. Para poder conseguir la
                información de que él había despegado fue una odisea, porque en
                ese momento{' '}
                <strong>
                  las comunicaciones en Londres estaban con una dificultad
                  enorme
                </strong>
                . Decidí partir al aeropuerto con la gente que me tenía que
                acompañar a recibir al Presidente.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                El trayecto de Lisboa a Londres fue uno de los hechos más
                memorables, porque el viaje dura una hora y media más o menos y{' '}
                <strong>duro el doble</strong>.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />

              <h2>
                <strong>Reyes Matta: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Despegamos con destino a Londres y, cuando estamos en la mitad
                del vuelo -un vuelo relativamente corto-, viene el comandante
                para decirnos que{' '}
                <strong>
                  en Londres los aviones están sin autorización de aterrizaje
                </strong>
                .
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                Una vez en el avión, el piloto se me acerca y me dice ‘tenemos
                prohibido acercarnos a territorio inglés, por lo tanto vamos a
                tener que dar vueltas hasta que nos autoricen el aterrizaje’.{' '}
                <strong>Estuvimos una hora dando vueltas</strong>.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Llegamos al aeropuerto y, claro, ahí nos estaba esperando el
                jefe de la base, con otras personas. Y me dicen: “
                <strong>
                  Mire, embajador, usted sabe que tenemos un problema
                </strong>
                ” (Risas). “<strong>Tenemos un problema mayor</strong>”, le dije
                yo, “pero cuénteme cómo sigue esto”. Y él me dijo: “
                <strong>Vamos a hacer esperar el avión presidencial</strong>”.
              </p>
              <p>
                {' '}
                Y en eso, el avión avisa que{' '}
                <strong>ya está sobre Londres</strong>.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={reyes} name="Fernando Reyes Matta" />

              <h2>
                <strong>Reyes Matta: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Cuando llegamos a una zona de aproximación a Londres{' '}
                <strong>
                  comenzamos a volar en círculos, y veíamos a los otros aviones
                  por las ventanillas volando en círculos
                </strong>
                . Yo te diría que estuvimos una hora, un poco más, dando vuelta
                arriba, sobre el mar, fuera de territorio inglés.
              </p>
              <p>
                Tanto, que yo me acuerdo que en un minuto{' '}
                <strong>Lagos preguntó</strong>:{' '}
              </p>
              <blockquote className="bigblockquote">
                “<strong>¿Y tenemos combustible?</strong>” (Risas).
              </blockquote>
              <p>
                Y le dijeron: “Nooo, cargamos en Portugal”. Porque de verdad
                podríamos no haber cargado tanto, si íbamos a un viaje corto.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Empieza a dar vueltas en círculos, o lo que sea, y pasaron más o
                menos dos horas. Yo tenía al Presidente en el aire. Imagínate:{' '}
                <strong>
                  era una cosa muy tensa, porque además todo el mundo estaba
                  preocupado de lo otro
                </strong>
                . Mientras pasaba eso, yo mandé un funcionario al{' '}
                <i>Foreign Office</i> para que contactara a las que eran
                nuestras contrapartes para decirles que nosotros estábamos
                totalmente disponibles para seguir con la agenda, y que ellos
                nos indicaran qué se podía hacer y qué es lo que no se podía
                hacer.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Yo fui a hablar con los pilotos de la FACh y les pregunté: “
                <strong>
                  ¿Para volar un avión de pasajeros y estrellarlo contra un
                  edificio se requiere, me imagino, de entrenamiento?
                </strong>
                ” Me respondieron:{' '}
              </p>
              <blockquote>
                ‘Mire, no es complicado volar un avión, pero sí se requiere de
                entrenamiento para volar ese tipo de avión de pasajeros y...{' '}
                <strong>
                  quienes volaron esos aviones se tienen que haber preparado
                </strong>
                ’.
              </blockquote>
              <p>
                Lo que confirmaba más nuestras sospechas que eran actos
                terroristas”.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                En un momento, el comandante de la base se acerca y me dice:
              </p>
              <blockquote>
                “Mire, embajador,{' '}
                <strong>
                  vamos a abrir un espacio aéreo para que el avión pueda
                  aterrizar. Y lo vamos a escoltar con aviones militares
                </strong>
                ”.
              </blockquote>
              <p>
                “Bueno, <i>estupendo</i>”, le dije yo.
              </p>
              <p>
                Esta llegada del avión presidencial, escoltado con aviones
                militares, el caos que había por el asunto de las Torres
                Gemelas, porque había mucho movimiento, fue una excepción para
                que el Presidente pudiera aterrizar.
              </p>
            </div>
          </Testimony>
          <Separator>***</Separator>
          <figure>
            <img
              src="https://www.latercera.com/resizer/BTgN_bQPoY8taRJ8e1VmCoAgOyk=/arc-anglerfish-arc2-prod-copesa/public/QEDEYD3D7FHKFMB2FSYQEZD7ZU.jpg"
              alt="Ricardo Lagos llegando a Londres"
            />
            <figcaption>Ricardo Lagos llegando a Londres</figcaption>
          </figure>

          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Yo le dije a Lagos,{' '}
                <i>
                  seguramente tú vas ser el primer presidente en aterrizar en
                  Londres
                </i>{' '}
                desde los atentados y{' '}
                <strong>seguramente habrá mucha prensa</strong>. ‘Bueno, me
                dijo, prepárame algunas ideas’. Y yo empecé a escribir...
                primero condena a estos atentados; segundo, condolencias y
                solidaridad con el pueblo de Estados Unido, con las víctimas y
                sus familiares, y tercero, que el presidente va a convocar a sus
                pares del <strong>Grupo de Río</strong> (Lagos era el
                coordinador del Grupo de Río) para que se coordinen en acciones
                multilaterales conjunta y coordinada con EE.UU.
              </p>
              <blockquote>
                Y Lagos, como <i>no siempre lo hacía</i>, siguió{' '}
                <strong>
                  al pie de la letra el papel, ante un enjambre de periodistas
                </strong>
                .
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote>
                Yo había hecho una declaración al bajarme del avión en Londres,
                y en esa declaración, muy meditada,{' '}
                <strong>expresé mi apoyo incondicional</strong> al drama que
                había pasado en Estados Unidos.
              </blockquote>
              <blockquote className="bigblockquote">
                “Hoy el mundo cambió,{' '}
                <strong>
                  nunca había llegado la guerra física a territorio americano
                </strong>
                , salvo para la guerra de independencia”
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />

              <h2>
                <strong>Valdés: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Salí a mi casa a las 2 de la tarde. Despachamos a toda la gente
                a sus casas, porque nos cortaron los ascensores: en Estados
                Unidos{' '}
                <strong>
                  se cortan los ascensores porque los bomberos tienen que
                  encargarse de los ascensores, y estaban todos en las Torres
                </strong>
                .
              </p>
              <blockquote>
                Nosotros estábamos en el piso 17. El personal bajó a pie y se
                fueron a sus casas: no había transporte público, por lo tanto
                tenían que caminar.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                El avión aterriza y yo subo a buscar al Presidente. Por supuesto
                que conversamos ahí del asunto que estaba pasado. Y
                acompañándolo ya hacia la sala de recepción del aeropuerto, él
                me dice: “Bueno, embajador, Cristián, ¿qué piensas que podemos
                hacer?” Yo le dije:{' '}
              </p>
              <blockquote>
                “Mire, presidente, yo creo que hay que seguir,{' '}
                <i>business as usual</i>”.
              </blockquote>
              <p>
                <strong>
                  Era importante para nosotros demostrar normalidad en este
                  momento que estaba todo caótico
                </strong>
                . Y, efectivamente, el <i>Foreign Office</i> me dijo lo mismo. Y
                por supuesto que el Presidente no solamente estaba de acuerdo, a
                él se le había ocurrido al principio: sigamos con esto.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Recuerdo que Lagos nos convocó un grupo mucho chico a su suite.
                Y ahí estaba, me recuerdo, <strong>Nicolás Eyzaguirre</strong>,
                que era ministro de Hacienda y que se unió en Londres a la gira,
                el embajador Barros… Empezó un debate si continuar o no la
                agenda que teníamos. Y Nicolás Eyzaguirre con la seguridad que
                lo acostumbra, dice: ‘Presidente,{' '}
                <strong>hay que volverse a Santiago</strong>. Estas son
                circunstancias extraordinarias y no tiene sentido seguir con
                este viaje… en estas circunstancias seguramente el primer
                ministro Blair no nos va poder recibir mañana. La prioridad no
                va a ser Chile, va a ser estos atentados. Presidente tenemos que
                regresar…’. Entonces yo ahí discrepé fuertemente, me recuerdo y
                dije: ‘Presidente, no tiene sentido volver a Chile. Esta es una
                gira de extraordinaria importancia para atraer inversiones y{' '}
                <strong>destrabar la negociación Chile-Unión Europea</strong>.
                Segundo, que volvamos a Chile no tiene ningún impacto en
                términos de la situación que se está enfrentando y vamos a dar
                una señal de desorden y de caos”.{' '}
                <strong>Lagos me apoyó</strong>. Dijo “Vamos a hacer lo que
                sugiere Heraldo”.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Había gente de la delegación que quería volverse. Decían “
                <strong>esto es muy grave, no podemos seguir</strong>”.{' '}
                <strong>El Presidente siguió</strong>, y eso habla de un{' '}
                <strong>profesionalismo británico enorme</strong>.
              </p>
            </div>
          </Testimony>

          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <blockquote className="bigblockquote">
                <strong>Eso era darle la razón a los terroristas</strong>.
                Entonces dije “no, no, no. El programa se hace”.
              </blockquote>
            </div>
          </Testimony>
          <figure>
            <img
              src="https://www.latercera.com/resizer/Sbr6Q7iaDkV1HjnYlfpvqWiUXPs=/arc-anglerfish-arc2-prod-copesa/public/PKS2J6227FAUXLPX6MHJ5BNIVI.jpeg"
              alt="Ricardo Lagos junto a Tony Blair"
            />
            <figcaption>Ricardo Lagos junto a Tony Blair</figcaption>
          </figure>
          <Separator>***</Separator>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Lagos llegó como a las cinco, seis de la tarde. Entonces,
                estuvimos ya en el hotel. Se tomó contacto con{' '}
                <strong>Juan Gabriel (Valdés), que estaba en la ONU</strong>, y
                probablemente con{' '}
                <strong>
                  (Andrés) Bianchi, el embajador en Estados Unidos
                </strong>
                . Estábamos en esa pieza grande que le entregan a los
                presidentes como para hacer reuniones, y estaba prácticamente
                media delegación ahí.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={munoz} name="Heraldo Muñoz" />

              <h2>
                <strong>Muñoz: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Lagos me dijo: “Hay que tratar de contactar a alguien en el
                gobierno de Estados Unidos para para darle condolencias”. Yo lo
                intenté y por fortuna entró una llamada telefónica al{' '}
                <strong>
                  director de Seguridad Nacional en América Latina y el Caribe
                  en la Casa Blanca
                </strong>
                , en momentos que evacuaban la Casa Blanca.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Ahí<strong> Lagos le manda a Bush una carta</strong>, con
                condolencias.
              </p>
              <blockquote className="bigblockquote">
                Y esa carta se la manda <strong>por fax</strong>. Estamos
                hablando del año 2001. <strong>Y no entraba</strong>, no
                entraba... se pasó horas.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Lo primero que teníamos que hacer al llegar a Londres era una{' '}
                <strong>
                  cena con un grupo de 10 a 12 empresarios prominentes
                </strong>{' '}
                de Londres. A esa cena llegamos con un poco de retraso, pero
                nada grave.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Hicimos una cena con los empresarios, y llegaron todos.{' '}
                <strong>Claro, se habló más del problema de Nueva York</strong>:
                para qué te voy a decir una cosa por otra.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={insulza} name="José Miguel Insulza" />

              <h2>
                <strong>Insulza:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Yo, por cierto, hablé con la gente de Defensa, y la verdad es
                que todos, primero, fueron inmediatamente partidarios de cerrar
                el espacio aéreo de Chile, por si acaso. Pero al mismo tiempo,
                había una sensación de que era{' '}
                <strong>
                  difícil que ese día ocurriera algún atentado en otro país
                </strong>
                . Estábamos preocupados por manifestaciones espontáneas, pero no
                por un atentado. No hubo movilización de Fuerzas Armadas ni nada
                por el estilo: sólo mucho más vigilancia en las calles, en caso
                de que fuera necesario.
              </p>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={valdes} name="Juan Gabriel Valdés" />

              <h2>
                <strong>Valdés:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>Broadway a oscuras fue una sensación absolutamente única.</p>
              <blockquote>
                <strong>
                  Ver a Broadway completamente apagado, en la noche
                </strong>
                , a las 9 y media de la noche, es una sensación que espero{' '}
                <i>nunca más volver a tener</i>.
              </blockquote>
            </div>
          </Testimony>
          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={lagos} name="Ricardo Lagos Escobar" />

              <h2>
                <strong>Lagos Escobar:</strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                En la parte formal, al ser una visita de Estado, esa visita
                terminaba en Portugal. Y en ese minuto hablamos con Luisa
                (Durán, su esposa) y{' '}
                <strong>ella dijo ‘yo tomo mi avión de vuelta’</strong>. Ella
                tenía un vuelo comercial de Lan de Lisboa a Madrid y luego a
                Santiago. Después me contó que cuando estaban en el Atlántico
                camino a Chile,{' '}
                <strong>se le acercó el piloto y le dijo:</strong>
              </p>
              <blockquote className="bigblockquote">
                “Señora Luisa, le debo decir que somos{' '}
                <strong>el único vuelo en el Atlántico</strong> en estos
                momentos”.
              </blockquote>
            </div>
          </Testimony>
          <figure>
            <img
              src="https://www.latercera.com/resizer/eaqu3B8XLKhmqQSLsT7youdy3Sg=/arc-anglerfish-arc2-prod-copesa/public/7UG2FLRNUZEHDLOEGS465DZQLM.jpg"
              alt="The Times: When war come to America"
            />
            <figcaption> The Times: When war come to America</figcaption>
          </figure>

          <Testimony>
            <div className="testimony--header">
              <Avatar personurl={barros} name="Cristián Barros" />

              <h2>
                <strong>Barros: </strong>
              </h2>
            </div>
            <div className="testimony--body">
              <p>
                Al día siguiente, el <strong>Times de Londres</strong> saca un
                tremendo titular, que dice “
                <strong>La guerra ha llegado a América</strong>”. Y el
                presidente lo toma y dice:
              </p>

              <blockquote className="bigblockquote">
                “Miren, esto es lo que está pasando, esto es lo importante,{' '}
                <strong>esto es lo grave</strong>. Esto significa un cambio
                inmenso en lo que va a pasar en la política exterior en los
                próximos meses y años”.
              </blockquote>
            </div>
          </Testimony>
        </Content>
        <Sharer
          url="https://www.latercera.com/atentados-a-nueva-york-historia-oral-del-11s-en-chile/"
          description={``}
          hashtags="11s"
        />
      </Article>
    </>
  )
}

export default Custom
