import React from 'react'
import Input from '../style/Input'
import useInput from '@/hooks/useInput'
import { Container } from '../style/Container';
import { styled } from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 100%;
  }
`

export default function AuthForm() {
  const { onChange : onEmailChange, value: emailValue } = useInput();
  const { onChange : onNameChange, value: nameValue } = useInput();
  const { onChange: onPasswordChange, value: passwordValue } = useInput();
  const { onChange: onPasswordConfirmChange, value: passwordConfirmValue } = useInput();
  return (
    <Container>
      <StyledForm>
      <Input type="email" value={emailValue} onChange={onEmailChange}  placeholder='이메일' />
      <Input type="text" value={nameValue} onChange={onNameChange} placeholder='닉네임' />
      <Input type="password" value={passwordValue} onChange={onPasswordChange}  placeholder='비밀번호' />
      <Input type="password" value={passwordConfirmValue} onChange={onPasswordConfirmChange}  placeholder='비밀번호확인' />
      </StyledForm>
    </Container>
  )
}
