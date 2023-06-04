import useInput from "@/hooks/useInput";

import { styled } from "styled-components";


const StyledInput = styled.input`
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #333;
  font-size: 1rem;
  height: 3rem;
  padding: 8px;
  width: 33%;
  background: linear-gradient(to right, #ffaa0020, #b24c2f20, #ff00ff20, rgba(255, 0, 255, 0.3));
  
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #0077cc;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 119, 204, 0.3);
  }
  &::placeholder { 
    background: linear-gradient(to right, #ffaa00, #f86942, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
  }
`

interface Props {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  required?: boolean
  
}

export default function Input({type = 'text',placeholder,value,onChange,onKeyDown,required = false}: Props) {
       
  return (
    <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} onKeyDown={onKeyDown} required={required} />
  )
}
