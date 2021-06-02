import React from 'react'

import { Title as TitleStyle } from './style'

const Title = ({ children }) => {
  return (
    <TitleStyle type="SemiBold">{children}</TitleStyle>
  )
}

export default Title