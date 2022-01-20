import React from 'react'

const Ficha = ({
  nombre,
  cargo,
  edad,
  partido,
  profesion,
  nivelAcademico,
  colegio,
  universidad,
  biografia,
}) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <h3>{edad}</h3>
      <h3>{partido}</h3>
      <h3>{profesion}</h3>
      <h3>{nivelAcademico}</h3>
      <h3>{colegio}</h3>
      <h3>{universidad}</h3>
      <p>{biografia}</p>
    </div>
  )
}

export default Ficha
