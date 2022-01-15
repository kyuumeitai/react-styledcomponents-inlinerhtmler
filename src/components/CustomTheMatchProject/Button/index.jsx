import React from 'react'

const Button = ({ children, href, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

export default Button
