import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { DisplayFormikState } from './helper'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol, StArticleWrap } from './style.css'
import uuidv4 from '../../helpers/uuidv4'
import Article from '../Article'

const ArticleForm = ({onAddArticle}) => {

  const addArticle = (article) => {

    onAddArticle({
      ...article,
      articleid: uuidv4()
    })
  }

  return (
    <Formik
      initialValues={{
        title: '',
        tag: '',
        url: '',
        excerpt: '',
        img: '',
      }}

      onSubmit={(values, {setSubmitting, resetForm}) => {
        addArticle(values)
        setTimeout(() => {
          setSubmitting(false)
          resetForm()
        }, 200)
      }}

      validationSchema={Yup.object().shape({
        title: Yup.string().required('Requerido'),
        url: Yup.string().required('Requerida'),
        img: Yup.string().required('Requerida')
      })}
    >
      {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <StForm onSubmit={handleSubmit}>
          <StTitle>Agregar artículo</StTitle>
          <StCols cols="2">
            <StCol>
              <StLabel htmlFor="title">
                Título
              {errors.title && touched.title && (
                  <StError>{errors.title}</StError>
                )}
              </StLabel>
              <StInput
                id="title"
                type="text"
                placeholder="Título"
                value={values.title}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.title && touched.title && '1px solid tomato'
                }
              />

              <StLabel htmlFor="url">
                URL del artículo
              {errors.url && touched.url && (
                  <StError>{errors.url}</StError>
                )}
              </StLabel>
              <StInput
                id="url"
                type="text"
                placeholder="https://www.latercera.com/noticia/nicolas-cage-meme-hilarious/"
                value={values.url}
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.url && touched.url && '1px solid tomato'
                }
              />

              <StLabel htmlFor="tag">
                Etiqueta/Categoría
              {errors.tag && touched.tag && (
                  <StError>{errors.tag}</StError>
                )}
              </StLabel>
              <StInput
                id="tag"
                type="text"
                placeholder="Etiqueta"
                value={values.tag}
                name="tag"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.tag && touched.tag && '1px solid tomato'
                }
              />

              <StLabel htmlFor="excerpt">
                Bajada
              {errors.excerpt && touched.excerpt && (
                  <div className="input-feedback">  {errors.excerpt}</div>
                )}
              </StLabel>
              <StTextarea
                id="excerpt"
                placeholder="Bajada"
                name="excerpt"
                value={values.excerpt}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.excerpt && touched.excerpt && '1px solid tomato'
                }
              >
              </StTextarea>

              <StLabel htmlFor="title">
                URL de imagen
              {errors.img && touched.img && (
                  <StError>{errors.img}</StError>
                )}
              </StLabel>
              <StInput
                id="img"
                placeholder="URL Imagen"
                type="text"
                name="img"
                value={values.img}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.title && touched.title && '1px solid tomato'
                }
              />

              <StButton type="submit" disabled={isSubmitting}>
                Agregar artículo
              </StButton>
            </StCol>
            <StCol>
              <h4>Previsualización</h4>
              <StArticleWrap>
                <Article title={values.title} url={values.url} tag={values.tag} excerpt={values.excerpt} img={values.img}  />
              </StArticleWrap>
              {/* <DisplayFormikState {...{ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }} /> */}
            </StCol>
          </StCols>
        </StForm>
      )}
    </Formik>
  )
}

export default ArticleForm