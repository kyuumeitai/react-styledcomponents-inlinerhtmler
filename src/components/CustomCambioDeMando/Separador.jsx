import * as React from 'react'
import styled from 'styled-components'

const SeparadorWrapper = styled.div``

function SvgSeparador(props) {
  return (
    <SeparadorWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.43 8" {...props}>
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path fill="#07aa96" d="M462 0h27.43v8H462z" />
            <path fill="#7248bb" d="M410.67 0H462v8h-51.33z" />
            <path fill="#259137" d="M359.33 0h51.33v8h-51.33z" />
            <path fill="#f9c435" d="M308 0h51.33v8H308z" />
            <path fill="#2e74e5" d="M169.4 0H308v8H169.4z" />
            <path fill="#ef2700" d="M0 0h169.4v8H0z" />
          </g>
        </g>
      </svg>
    </SeparadorWrapper>
  )
}

export default SvgSeparador
