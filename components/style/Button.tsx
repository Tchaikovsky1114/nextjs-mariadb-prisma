import { MouseEvent } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    height:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #007bff, #00bfff);
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 12px 6px 10px 6px;
  &:hover {
    background: linear-gradient(45deg, #0069d9, #00a3cc);
  }
`

interface Props {
    children: React.ReactNode
    onClick: (e:MouseEvent<HTMLButtonElement>) => Promise<boolean>
}

export default function Button({onClick,children}:Props) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
}