import React, {useState, useEffect} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import uuidv4 from '../../helpers/uuidv4'
import { StForm, StLabel, StInput, StTextarea, StButton, StTitle, StError } from './style.css'

const SitesForm = ({ onAddSite, onEditSite, initialSite = {}}) => {
  const [formMode, setFormMode] = useState('add')

  useEffect(() => {
    if (Object.entries(initialSite).length > 0) {
      setFormMode('edit')
    } else {
      setFormMode('add')
    }
  }, [initialSite])

  const addSite = (site) => {
    onAddSite({
      ...site,
      siteid: uuidv4()
    })
  }

  const editSite = (site) => {
    onEditSite({
      ...site
    })
  }

  return (
    <StForm>
      <Formik
        enableReinitialize={true}
        initialValues={{
          sitename:  initialSite.sitename || '',
          pixel: initialSite.pixel || '',
          source: initialSite.source || '',
          medium: initialSite.medium || '',
          siteid: initialSite.siteid || ''
        }}
        onSubmit={ (values, { setSubmitting, resetForm }) => {
          formMode === 'edit' ? editSite(values) : addSite(values)
          setTimeout(() => {
            setSubmitting(false)
            resetForm()
          }, 200)
        }}
        validationSchema = {
          Yup.object().shape({
            sitename: Yup.string().required('Requerido'),
            source: Yup.string().required('Requerido'),
            medium: Yup.string().required('Requerido')
          })
        }
      >
      {({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
        <Form onSubmit={handleSubmit}>
          {
            formMode === 'edit' && (
              <StTitle>Editar Sitio</StTitle>
            )
          }
          {
            formMode === 'add' && (
              <StTitle>Agregar Sitio</StTitle>
            )
          }

          <StLabel htmlFor="sitename">
            Nombre del sitio (La Tercera, Tendencias, Culto, Paula, etc.)
            {
              errors.sitename && touched.sitename && (
                <StError>{errors.sitename}</StError>
              )
            }
          </StLabel>
          <StInput
            id="sitename"
            type="text"
            placeholder="La Tercera"
            value={values.sitename}
            name="sitename"
            onChange={handleChange}
            onBlur={handleBlur}
            border={
              errors.sitename && touched.sitename && '1px solid tomato'
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

          <StButton type="submit" disabled={isSubmitting}>
              {
                formMode === 'edit' && (
                  <>Guardar sitio</>
                )
              }
              {
                formMode === 'add' && (
                  <>Agregar sitio</>
                )
              }
          </StButton>
        </Form>
      )}

      </Formik>
    </StForm>
  )
}

export default SitesForm