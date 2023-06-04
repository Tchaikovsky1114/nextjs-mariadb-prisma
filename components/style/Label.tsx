import React from 'react'
import { styled } from 'styled-components'


const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  // 글씨에 밑줄
  text-shadow: 2px 2px 2px #1faaeb, 2px 2px 2px #f36e21, 2px 2px 2px #ccc, 2px 2px 2px #fdfa24;
  text-underline-offset: 0.25rem;
  text-decoration: underline;
  color: ${({color}) => color ? color : '#222'};
`

interface Props {
  text: string
  inputId: string;
  color?: string;
}

export default function Label({text,inputId,color}: Props) {
  return (
    <StyledLabel color={color} htmlFor={inputId} >{text}</StyledLabel>
  )
}
