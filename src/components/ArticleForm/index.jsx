import React, {useEffect, useState} from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
// import { DisplayFormikState } from './helper'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol, StArticleWrap } from './style.css'
import uuidv4 from '../../helpers/uuidv4'
import Article from '../Article'

const ArticleForm = ({onAddArticle, onEditArticle, initialArticle = {}}) => {

  const [formMode, setFormMode] = useState('add')

  useEffect(() => {
    if (Object.entries(initialArticle).length > 0) {
      setFormMode('edit')
    } else {
      setFormMode('add')
    }
  }, [initialArticle])

  const addArticle = (article) => {
    onAddArticle({
      ...article,
      articleid: uuidv4()
    })
  }

  const editArticle = (article) => {
    onEditArticle({
      ...article
    })
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: initialArticle.title || '',
      tag: initialArticle.tag || '',
      url: initialArticle.url || '',
      excerpt: initialArticle.excerpt || '',
      img: initialArticle.img || '',
      icon: initialArticle.icon || '',
      type: initialArticle.type || '',
      iframe: initialArticle.iframe || '',
      cssclass: initialArticle.cssclass || '',
      articleid: initialArticle.articleid || ''
    },
    onSubmit: ( values, { setSubmitting, resetForm }) => {
      formMode === 'edit' ? editArticle(values) : addArticle(values)
      setTimeout(() => {
        setSubmitting(false)
        resetForm()
      }, 200)
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Requerido'),
      url: Yup.string().required('Requerida'),
      img: Yup.string().required('Requerida')
    })
  })

  return (
    <StForm onSubmit={formik.handleSubmit}>
      {
        formMode === 'edit' && (
          <StTitle>Editar artículo</StTitle>
        )
      }

      {
        formMode === 'add' && (
          <StTitle>Agregar artículo</StTitle>
        )
      }

      <StCols cols="2">
        <StCol>
          <StLabel htmlFor="url">
            URL del artículo
            {formik.errors.url && formik.touched.url && (
              <StError>{formik.errors.url}</StError>
            )}
          </StLabel>
          <StInput
            id="url"
            type="text"
            placeholder="https://www.latercera.com/noticia/nicolas-cage-meme-hilarious/"
            value={formik.values.url}
            name="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.url && formik.touched.url && '1px solid tomato'
            }
          />

          <StLabel htmlFor="title">
            Título
          {formik.errors.title && formik.touched.title && (
              <StError>{formik.errors.title}</StError>
            )}
          </StLabel>
          <StInput
            id="title"
            type="text"
            placeholder="Título"
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.title && formik.touched.title && '1px solid tomato'
            }
          />

          <StLabel htmlFor="tag">
            Etiqueta/Categoría
          {formik.errors.tag && formik.touched.tag && (
              <StError>{formik.errors.tag}</StError>
            )}
          </StLabel>
          <StInput
            id="tag"
            type="text"
            placeholder="Etiqueta"
            value={formik.values.tag}
            name="tag"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.tag && formik.touched.tag && '1px solid tomato'
            }
          />

          <StLabel htmlFor="excerpt">
            Bajada
          {formik.errors.excerpt && formik.touched.excerpt && (
              <div className="input-feedback">  {formik.errors.excerpt}</div>
            )}
          </StLabel>
          <StTextarea
            id="excerpt"
            placeholder="Bajada"
            name="excerpt"
            value={formik.values.excerpt}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.excerpt && formik.touched.excerpt && '1px solid tomato'
            }
          >
          </StTextarea>

          <StLabel htmlFor="img">
            URL de imagen
          {formik.errors.img && formik.touched.img && (
              <StError>{formik.errors.img}</StError>
            )}
          </StLabel>
          <StInput
            id="img"
            placeholder="URL Imagen"
            type="text"
            name="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.img && formik.touched.img && '1px solid tomato'
            }
          />

          <StLabel htmlFor="icon">
            URL del ícono
          {formik.errors.icon && formik.touched.icon && (
              <StError>{formik.errors.icon}</StError>
            )}
          </StLabel>
          <StInput
            id="icon"
            placeholder="https://latercera.com/img/elicono.png"
            type="text"
            name="icon"
            value={formik.values.icon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.icon && formik.touched.icon && '1px solid tomato'
            }
          />

          <StLabel htmlFor="type">
            Tipo de Post (video, crónica)
          {formik.errors.type && formik.touched.type && (
              <StError>{formik.errors.type}</StError>
            )}
          </StLabel>
          <StInput
            id="type"
            placeholder="Artículo"
            type="text"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.type && formik.touched.type && '1px solid tomato'
            }
          />

          <StLabel htmlFor="cssclass">
            Clase CSS
          {formik.errors.cssclass && formik.touched.cssclass && (
              <StError>{formik.errors.cssclass}</StError>
            )}
          </StLabel>
          <StInput
            id="cssclass"
            placeholder="un-articulo"
            cssclass="text"
            name="cssclass"
            value={formik.values.cssclass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.cssclass && formik.touched.cssclass && '1px solid tomato'
            }
          />

          <StLabel htmlFor="iframe">
            IFrame <small> Al setear esto se reemplaza el contenido por la ruta de este iframe</small>
          {formik.errors.cssclass && formik.touched.cssclass && (
              <StError>{formik.errors.cssclass}</StError>
            )}
          </StLabel>

          <StTextarea
            id="iframe"
            placeholder="Iframe"
            name="iframe"
            value={formik.values.iframe}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            border={
              formik.errors.iframe && formik.touched.iframe && '1px solid tomato'
            }
          >
          </StTextarea>

          <StButton type="submit" disabled={formik.isSubmitting}>
            {
              formMode === 'edit' && (
                <>Guardar artículo</>
              )
            }

            {
              formMode === 'add' && (
                <>Agregar artículo</>
              )
            }
          </StButton>
        </StCol>
        <StCol>
          <h4>Previsualización</h4>
          <StArticleWrap>
            <Article title={formik.values.title} url={formik.values.url} tag={formik.values.tag} excerpt={formik.values.excerpt} img={formik.values.img}  />
          </StArticleWrap>
          {/* <DisplayFormikState {...{ values, formik.touched, formik.errors, dirty, isSubmitting, formik.handleChange, formik.handleBlur, handleSubmit, handleReset }} /> */}
        </StCol>
      </StCols>
    </StForm>
  )
}

export default ArticleForm