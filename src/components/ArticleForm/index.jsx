import React, {useEffect, useState} from 'react'
import { Form, useFormikContext, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
// import { DisplayFormikState } from './helper'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol, StArticleWrap } from './style.css'
import uuidv4 from '../../helpers/uuidv4'
import Article from '../Article'
import get from 'lodash/get'


const FieldPopulator = () => {
  const { values } = useFormikContext()
  const [actualUrl, setActualUrl] = useState(values.url)


  useEffect(() => {
    const requestBody = {
      url: values.url
    }

    if(actualUrl !== values.url){
      setActualUrl(values.url)
      const openfaasGateway = 'http://localhost:8080/function/opengraphscraper'

      axios.post(openfaasGateway, requestBody).then(response => {
        const title = get(response, 'data.data.ogTitle')
        const description = get(response, 'data.data.ogDescription')
        const twitterDescription = get(response, 'data.data.twitterDescription')
        const image = get(response, 'data.data.ogImage.url')

        if (title) {
          values.title = title
        }

        if (description && description !== '.') {
          values.excerpt = description
        } else
          if (twitterDescription && twitterDescription !== '.') {
            values.excerpt = twitterDescription
          }
        if (image) {
          values.img = image
        }
      }).catch(err => {
        console.log('>>>>err:', err)
      })
    }
  }, [actualUrl, values.excerpt, values.img, values.title, values.url])
  return null
}

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

  return (
    <StForm>
    <Formik
      enableReinitialize={true}
      initialValues={{
        title: initialArticle.title || '',
        tag: initialArticle.tag || '',
        url: initialArticle.url || '',
        excerpt: initialArticle.excerpt || '',
        img: initialArticle.img || '',
        icon: initialArticle.icon || '',
        type: initialArticle.type || '',
        iframe: initialArticle.iframe || '',
        articleid: initialArticle.articleid || ''
      }}
      onSubmit ={ (values, { setSubmitting, resetForm }) => {
        formMode === 'edit' ? editArticle(values) : addArticle(values)
        setTimeout(() => {
          setSubmitting(false)
          resetForm()
        }, 200)
      }}
      validationSchema = {Yup.object().shape({
        title: Yup.string().required('Requerido'),
        url: Yup.string().required('Requerida'),
        img: Yup.string().required('Requerida')
      })}
    >
    {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
      <Form onSubmit={handleSubmit}>
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
              onChange={(e) => {
                handleChange(e)
              }}
              onBlur={(e) => {
                handleBlur(e)
              }}
              border={
                errors.url && touched.url && '1px solid tomato'
              }
            />

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

            <StLabel htmlFor="img">
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
                errors.img && touched.img && '1px solid tomato'
              }
            />

            <StLabel htmlFor="icon">
              URL del ícono
            {errors.icon && touched.icon && (
                <StError>{errors.icon}</StError>
              )}
            </StLabel>
            <StInput
              id="icon"
              placeholder="https://latercera.com/img/elicono.png"
              type="text"
              name="icon"
              value={values.icon}
              onChange={handleChange}
              onBlur={handleBlur}
              border={
                errors.icon && touched.icon && '1px solid tomato'
              }
            />

            <StLabel htmlFor="type">
              Tipo de Post (video, crónica)
            {errors.type && touched.type && (
                <StError>{errors.type}</StError>
              )}
            </StLabel>
            <StInput
              id="type"
              placeholder="Artículo"
              type="text"
              name="type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              border={
                errors.type && touched.type && '1px solid tomato'
              }
            />

            <StLabel htmlFor="iframe">
              IFrame <small> Al setear esto se reemplaza el contenido por la ruta de este iframe</small>
            {errors.cssclass && touched.cssclass && (
                <StError>{errors.cssclass}</StError>
              )}
            </StLabel>

            <StTextarea
              id="iframe"
              placeholder="Iframe"
              name="iframe"
              value={values.iframe}
              onChange={handleChange}
              onBlur={handleBlur}
              border={
                errors.iframe && touched.iframe && '1px solid tomato'
              }
            >
            </StTextarea>

            <StButton type="submit" disabled={isSubmitting}>
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
              <Article title={values.title} url={values.url} tag={values.tag} excerpt={values.excerpt} img={values.img}  />
            </StArticleWrap>
            <FieldPopulator/>
          </StCol>
        </StCols>
      </Form>
        )}
    </Formik>
    </StForm>
  )
}

export default ArticleForm