import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { DisplayFormikState } from './helper'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol } from './style.css'

// import Header from '../Header'

const HeaderForm = ({onAddHeader, header}) => {
  console.log('header en form:', header)
  const{ title, presentedby, url, pixel, img } = header
  const addHeader = (Header) => {

    onAddHeader({
      ...Header
    })
  }

  return (
    <Formik
      initialValues={{
        title: title || '',
        presentedby: presentedby || '',
        url: url || '',
        pixel: pixel || '',
        img: img || '',
      }}

      onSubmit={(values, {setSubmitting, resetForm}) => {
        addHeader(values)
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
          <StTitle>Agregar Header</StTitle>
          <StCols cols="2">
            <StCol>
              <StLabel htmlFor="title">
                Marca
              {errors.title && touched.title && (
                  <StError>{errors.title}</StError>
                )}
              </StLabel>
              <StInput
                id="title"
                type="text"
                placeholder="Marca"
                value={values.title}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.title && touched.title && '1px solid tomato'
                }
              />

              <StLabel htmlFor="url">
                URL de destino
              {errors.url && touched.url && (
                  <StError>{errors.url}</StError>
                )}
              </StLabel>
              <StInput
                id="url"
                type="text"
                placeholder="https://www.placecage.com/"
                value={values.url}
                name="url"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.url && touched.url && '1px solid tomato'
                }
              />

              <StLabel htmlFor="presentedby">
                Presentado por
              {errors.presentedby && touched.presentedby && (
                  <StError>{errors.presentedby}</StError>
                )}
              </StLabel>
              <StInput
                id="presentedby"
                type="text"
                placeholder="Presentado por"
                value={values.presentedby}
                name="presentedby"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.presentedby && touched.presentedby && '1px solid tomato'
                }
              />

              <StLabel htmlFor="pixel">
                Pixel
              {errors.pixel && touched.pixel && (
                  <div className="input-feedback">  {errors.pixel}</div>
                )}
              </StLabel>
              <StTextarea
                id="pixel"
                placeholder="Pixel de trackeo (formato img, no JS)"
                name="pixel"
                value={values.pixel}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.pixel && touched.pixel && '1px solid tomato'
                }
              >
              </StTextarea>

              <StLabel htmlFor="title">
                URL de Logo
              {errors.img && touched.img && (
                  <StError>{errors.img}</StError>
                )}
              </StLabel>
              <StInput
                id="img"
                placeholder="URL Logo"
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
                Agregar Header
              </StButton>
            </StCol>
            {/* <StCol>
              <h4>Previsualización</h4>
              <StHeaderWrap>
                <Header title={values.title} url={values.url} tag={values.tag} pixel={values.pixel} img={values.img}  />
              </StHeaderWrap> */}
              {/* <DisplayFormikState {...{ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }} /> */}
            {/* </StCol> */}
          </StCols>
        </StForm>
      )}
    </Formik>
  )
}

export default HeaderForm