import React from 'react'

const Articulo = ({
  abstencion,
  afavor,
  aprobado,
  comision,
  conceptos,
  encontra,
  estado,
  fecha,
  indAbstencion,
  indAfavor,
  indEncontra,
  indFecha,
  indicacion,
  numero,
  quesignifica,
  texto,
  textodefinitivo,
  titulo,
}) => {
  // abstencion: "14"
  // afavor: "125"
  // aprobado: "Aprobada"
  // comision: "Comisión de forma/General"
  // conceptos: ""
  // encontra: "15"
  // estado: "Aprobado en general"
  // fecha: "16/02/2022"
  // indAbstencion: ""
  // indAfavor: ""
  // indEncontra: ""
  // indFecha: "30/12/1899"
  // indicacion: ""
  // numero: "Artículo 15"
  // quesignifica: ""
  // texto: "Libertad de circulación entre entidades territoriales. Ninguna entidad  territorial  o  autoridad  podrá  adoptar  medidas  que  directa  o  indirectamente impidan  el  ejercicio  de  la  libertad  de  movimiento,  la  libre  circulación  de  bienes  y  de residencia de las personas al interior de ellas, así como en todo el territorio del Estado, sin perjuicio de las limitaciones contempladas en esta Constitución y la ley."
  // textodefinitivo: ""
  // titulo: "Libertad de circulación entre entidades territoriales"

  return (
    <div>
      <h2>
        <small>{numero}:</small>
        {titulo}
      </h2>
      {textodefinitivo && textodefinitivo.length > 0 && (
        <p>{textodefinitivo}</p>
      )}
      {fecha && fecha.length > 0 && (
        <Votacion
          afavor={afavor}
          encontra={encontra}
          abstencion={abstencion}
          fecha={fecha}
        />
      )}
    </div>
  )
}

const Votacion = ({ afavor, abstencion, encontra, fecha }) => {
  return (
    <div>
      <h2>Votación</h2>
      <p>
        <strong>Fecha:</strong> {fecha}
      </p>
      <p>
        <strong>A favor:</strong> {afavor}
      </p>
      <p>
        <strong>En contra:</strong> {encontra}
      </p>
      <p>
        <strong>Abstenciones:</strong> {abstencion}
      </p>
    </div>
  )
}

export default Articulo
