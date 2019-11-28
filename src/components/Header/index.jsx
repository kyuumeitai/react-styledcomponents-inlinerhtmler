import React from 'react'
import { StHeader } from './style.css'

const Header = ({children}) => {
  return (
    <StHeader>
      {children}
    </StHeader>
  )
}

export default Header