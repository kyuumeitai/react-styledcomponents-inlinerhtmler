import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Select from 'react-select'
// import { DisplayFormikState } from './helper'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol } from './style.css'

// import Header from '../Header'

const HeaderForm = ({onAddHeader, header}) => {
  const { title, presentedby, url, urlesp, pixel, img, imgesp, source, medium, cssclass, theme, bajada, brand} = header
  const addHeader = (Header) => {

    onAddHeader({
      ...Header
    })
  }

  const availableThemes = [
    {
      value: 'default',
      label: 'Por Defecto'
    },
    {
      value: 'piensadigital',
      label: 'Piensa Digital'
    },
    {
      value: 'minvu',
      label: 'Minvu'
    },
    {
      value: 'culto',
      label: 'Culto'
    },
    {
      value: 'cinco',
      label: 'Cinco artículos'
    },
    {
      value: 'tresytres',
      label: 'Tres y tres, primero grande'
    },
    {
      value: 'dos',
      label: 'Dos artículos degradado'
    },
    {
      value: 'tres',
      label: 'Tres artículos degradado'
    },
    {
      value: 'uno',
      label: 'Un artículo con degradado y logo interior'
    },
    {
      value: 'tresconstyle',
      label: 'Tres con estilo'
    },
    {
      value: 'titleandiframe',
      label: 'Título, bajada e iframe (Culto)'
    }
  ]

  return (
    <Formik
      initialValues={{
        title: title || '',
        bajada: bajada || '',
        brand: brand || '',
        presentedby: presentedby || '',
        url: url || '',
        urlesp: urlesp || '',
        pixel: pixel || '',
        img: img || '',
        imgesp: imgesp || '',
        source: source || '',
        medium: medium || '',
        cssclass: cssclass || '',
        theme: theme || '',
      }}

      onSubmit={(values, {setSubmitting, resetForm}) => {

        addHeader(values)
        setTimeout(() => {
          setSubmitting(false)
          // resetForm()
        }, 200)
      }}

      validationSchema={Yup.object().shape({
        // title: Yup.string().required('Requerido'),
        // img: Yup.string().required('Requerida')
      })}
    >
      {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <StForm onSubmit={handleSubmit}>
          <StTitle>Agregar Header</StTitle>
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

              <StLabel htmlFor="brand">
                Marca / Auspiciador
              {errors.brand && touched.brand && (
                  <StError>{errors.brand}</StError>
                )}
              </StLabel>
              <StInput
                id="brand"
                placeholder="El título en texto"
                type="text"
                name="brand"
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.brand && touched.brand && '1px solid tomato'
                }
              />

              <StLabel htmlFor="img-header">
                URL de imagen logo auspiciador
              {errors.img && touched.img && (
                  <StError>{errors.img}</StError>
                )}
              </StLabel>
              <StInput
                id="img-header"
                placeholder="https://latercera.com/imagenes/logoempresabacan.jpg"
                type="text"
                name="img"
                value={values.img}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.img && touched.img && '1px solid tomato'
                }
              />

              <StLabel htmlFor="url-header-sponsor">
                URL de destino auspiciador
              {errors.url && touched.url && (
                  <StError>{errors.url}</StError>
                )}
              </StLabel>
              <StInput
                id="url-header-sponsor"
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

              <StLabel htmlFor="bajada">
                Bajada
              {errors.bajada && touched.bajada && (
                  <div className="input-feedback">  {errors.bajada}</div>
                )}
              </StLabel>
              <StTextarea
                id="bajada"
                placeholder="Bajada"
                name="bajada"
                value={values.bajada}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.bajada && touched.bajada && '1px solid tomato'
                }
              >
              </StTextarea>

              <StLabel htmlFor="presentedby">
                Texto "Presentado por"
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

              <StLabel htmlFor="urlesp">
                URL de destino Especial
              {errors.urlesp && touched.urlesp && (
                  <StError>{errors.urlesp}</StError>
                )}
              </StLabel>
              <StInput
                id="urlesp"
                type="text"
                placeholder="https://www.placecage.com/"
                value={values.urlesp}
                name="urlesp"
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.urlesp && touched.urlesp && '1px solid tomato'
                }
              />

              <StLabel htmlFor="imgesp">
                URL de imagen Logo del Especial
              {errors.imgesp && touched.imgesp && (
                  <StError>{errors.imgesp}</StError>
                )}
              </StLabel>
              <StInput
                id="imgesp"
                placeholder="https://latercera.com/imagenes/logobacandelespecial.jpg"
                type="text"
                name="imgesp"
                value={values.imgesp}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.imgesp && touched.imgesp && '1px solid tomato'
                }
              />

              <StLabel htmlFor="source">
                UTM Source
              {errors.source && touched.source && (
                  <StError>{errors.source}</StError>
                )}
              </StLabel>
              <StInput
                id="source"
                placeholder="widget"
                type="text"
                name="source"
                value={values.source}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.source && touched.source && '1px solid tomato'
                }
              />

              <StLabel htmlFor="medium">
                UTM Medium
              {errors.medium && touched.medium && (
                  <StError>{errors.medium}</StError>
                )}
              </StLabel>

              <StInput
                id="medium"
                placeholder="latercera"
                type="text"
                name="medium"
                value={values.medium}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.medium && touched.medium && '1px solid tomato'
                }
              />

              <StLabel htmlFor="cssclass">
                Clase CSS
              {errors.cssclass && touched.cssclass && (
                  <StError>{errors.cssclass}</StError>
                )}
              </StLabel>
              <StInput
                id="cssclass"
                placeholder="latercera"
                type="text"
                name="cssclass"
                value={values.cssclass}
                onChange={handleChange}
                onBlur={handleBlur}
                border={
                  errors.cssclass && touched.cssclass && '1px solid tomato'
                }
              />

              <StLabel htmlFor="theme">
                Estilo de Widget
              {errors.theme && touched.theme && (
                  <StError>{errors.theme}</StError>
                )}
              </StLabel>

              <Select
                id="theme"
                name="theme"
                type="select"
                value={availableThemes.filter(theme => theme.value === values.theme)}
                onChange={selectedOption => {
                  handleChange('theme')(selectedOption.value)
                }}
                onBlur={handleBlur}
                options={availableThemes}
              />
              {/* <h3>{values.theme}</h3> */}

              <StButton type="submit" disabled={isSubmitting}>
                Guardar Header
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