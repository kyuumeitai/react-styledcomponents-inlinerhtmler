import React from 'react'
import { Formik } from 'formik'
import Select from 'react-select'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError, StCols, StCol } from './style.css'

const HeaderForm = ({onAddHeader, header}) => {
  const { title, presentedby, url, urlesp, img, imgesp, source, medium, theme, bajada, brand, layout} = header
  const addHeader = (Header) => {

    onAddHeader({
      ...Header
    })
  }

  const availableLayout = [
    {
      value: 'default',
      label: 'Por Defecto'
    },
    {
      value: 'featured',
      label: 'Primero Destacado'
    }
  ]

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
      value: 'culto',
      label: 'Culto'
    },
    {
      value: 'degradado',
      label: 'Degradado negro, imagen de fondo'
    },
    {
      value: 'uno',
      label: 'Un artículo con degradado y logo interior'
    },
    {
      value: 'videowithiframe',
      label: 'Video e Iframe juntos degradado'
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
        img: img || '',
        imgesp: imgesp || '',
        source: source || '',
        medium: medium || '',
        theme: theme || '',
        layout: layout || '',
      }}

      onSubmit={(values, {setSubmitting, resetForm}) => {

        addHeader(values)
        setTimeout(() => {
          setSubmitting(false)
          // resetForm()
        }, 200)
      }}

    >
      {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <StForm onSubmit={handleSubmit}>
          <StTitle>Configurar Header</StTitle>
          <StCols cols="1">
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
              <StLabel htmlFor="layout">
                Layout
              {errors.layout && touched.layout && (
                  <StError>{errors.layout}</StError>
                )}
              </StLabel>
              <Select
                id="layout"
                name="layout"
                type="select"
                value={availableLayout.filter(layout => layout.value === values.layout)}
                onChange={selectedOption => {
                  handleChange('layout')(selectedOption.value)
                }}
                onBlur={handleBlur}
                options={availableLayout}
              />

              <StButton type="submit" disabled={isSubmitting}>
                Guardar Header
              </StButton>
            </StCol>
          </StCols>
        </StForm>
      )}
    </Formik>
  )
}

export default HeaderForm