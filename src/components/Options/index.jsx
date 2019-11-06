import React, {useState} from 'react'
import ArticleForm from '../ArticleForm'
import { StOptions } from './style.css'

const Options = ({ onAddArticle}) => {
  const [dirty, setDirty] = useState(false)

  return (
    <StOptions>
      <div className="box">
          { dirty ? (
            <>
            <ArticleForm onAddArticle={onAddArticle} />
              <button onClick={() => setDirty(true)}>Nuevo artículo</button>
            </>
          ) : (
            <>
              <ArticleForm onAddArticle={onAddArticle} />
              <button onClick={() => setDirty(true)}>Nuevo artículo</button>
            </>
          )
          }
        {/* <h3>Fuente</h3>
        <ul>
          <li>Feed</li>
          <li>Manual</li>
        </ul> */}
        {/* <h3>Número de Posts</h3>
        <ul>
          <li>N</li>
          <li>3</li>
          <li>2</li>
          <li>1</li>
        </ul> */}

      </div>
      {/* <div className="box">
        <h2>Layout</h2>
        <h3>Header</h3>
        <ul>
          <li>Título (texto)</li>
          <li>Logo</li>
          <li>Título y Logo</li>
          <li>Título y Logo Presentado por</li>
        </ul>
        <h3>Body</h3>
        <ul>
          <li>Estándar, 4 notas</li>
          <li>Destacado, 3 notas, 1 destacado</li>
          <li>Publicitario, 3 notas, 1 gráfica</li>
          <li>Publicitario, 2 notas, 1 gráfica</li>
          <li>Publicitario, 1 gráfica y link</li>
          <li>Dinámico</li>
        </ul>
        <h3>Footer</h3>
        <h3>Medios</h3>
        <ul>
          <li>(Agregar medio)</li>
          <ul>
            <li>Nombre</li>
            <li>utm_source</li>
            <li>utm_medium</li>
            <li>Pixel tracking</li>
          </ul>
        </ul>
      </div> */}
    </StOptions>
  )
}

export default Options