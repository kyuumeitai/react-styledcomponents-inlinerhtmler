import React from 'react'
import Quote from './Quote'
import Sharer from './Sharer'

const Cuna = () => {
  return (
    <div>
      <Quote
        text="Quiero decirles que pueden contar conmigo. Que me la voy a jugar firmemente por reecontrarnos como país; por lograr los acuerdos que necesitamos para avanzar de una manera más justa; por trabajar para que ustedes puedan tener una vida mejor en nuestra patria, y para eso se requiere estabilidad y la estabilidad se logra con justicia social. Chile no puede avanzar si es un país quebrado socialmente, Chile no puede avanzar si es un país que está permanentemente dividido"
        author="13 de diciembre. Debate Anatel.</strong>"
        size="smaller">
        <Sharer
          url="https://www.latercera.com/gabriel-boric-presidente-chile/"
          description={`"Quiero decirles que pueden contar conmigo. Que me la voy a jugar firmemente por reecontrarnos como país; por lograr los acuerdos que necesitamos para avanzar de una manera más justa; por trabajar para que ustedes puedan tener una vida mejor en nuestra patria, y para eso se requiere estabilidad y la estabilidad se logra con justicia social. Chile no puede avanzar si es un país quebrado socialmente, Chile no puede avanzar si es un país que está permanentemente dividido"
  
Gabriel Boric Font - Presidente Electo de Chile - La Tercera`}
          hashtags="PresidenteBoric"
          comparte="Comparte esta cita:"
        />
      </Quote>
      {/* <Quote
        text="He visto que en la política chilena hay mucha hipocresía, nadie dice lo que piensa. Nosotros queremos decir lo que pensamos, de manera respetuosa, pero clara. No vamos a andar con medias tintas ni laberintos para tratar de quedar bien. Cuando uno hace política no puede quedar bien con todos, pero queremos ser lo más convocantes posible"
        author="Diciembre de 2011. Entrevista en La Tercera después de haber <strong>ganado la elección de la FECH.</strong>"
        size="small">
        {' '}
        <Sharer
          url="https://www.latercera.com/gabriel-boric-presidente-chile/"
          description={`"He visto que en la política chilena hay mucha hipocresía, nadie dice lo que piensa. Nosotros queremos decir lo que pensamos, de manera respetuosa, pero clara. No vamos a andar con medias tintas ni laberintos para tratar de quedar bien. Cuando uno hace política no puede quedar bien con todos, pero queremos ser lo más convocantes posible".
      
Gabriel Boric Font - Presidente Electo de Chile - La Tercera`}
          hashtags="PresidenteBoric"
          comparte="Comparte esta cita:"
        />
      </Quote> */}

      {/* <Quote
        text="Hay momentos en que el capital político tiene que ponerse a disposición de avanzar en el bien común, aunque eso genere costos personales"
        author="16 de noviembre, luego de haber firmado el  <strong> Acuerdo por la Paz Social y la Nueva Constitución.</strong>"
        size="big">
        <Sharer
          url="https://www.latercera.com/gabriel-boric-presidente-chile/"
          description={`"Hay momentos en que el capital político tiene que ponerse a disposición de avanzar en el bien común, aunque eso genere costos personales".
          
Gabriel Boric Font - Presidente Electo de Chile - La Tercera`}
          hashtags="PresidenteBoric"
          comparte="Comparte esta cita:"
        />
      </Quote> */}
    </div>
  )
}

export default Cuna
