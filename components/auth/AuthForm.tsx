import React from 'react'
import Input from '../style/Input'
import useInput from '@/hooks/useInput'
import { Container } from '../style/Container';
import { styled } from 'styled-components';
import Label from '../style/Label';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 100%;
  }
  padding: 2rem;
  border: 1px solid #141142;
  border-radius: 10px;
  background: linear-gradient(aliceblue,77%,teal);
`

export default function AuthForm() {
  const { onChange : onEmailChange, value: emailValue } = useInput();
  const { onChange : onNameChange, value: nameValue } = useInput();
  const { onChange: onPasswordChange, value: passwordValue } = useInput();
  const { onChange: onPasswordConfirmChange, value: passwordConfirmValue } = useInput();
  return (
    <Container>
      <StyledForm>
      <Label inputId='email' text='이메일' color="#141142" />
      <Input type="email" value={emailValue} onChange={onEmailChange}  placeholder='이메일' required />
      <Label inputId='name' text='닉네임' color="#141142" />
      <Input type="text" value={nameValue} onChange={onNameChange} placeholder='닉네임'  required/>
      <Label inputId='password' text='비밀번호' color="#141142" />
      <Input type="passwordConfirm" value={passwordValue} onChange={onPasswordChange}  placeholder='비밀번호' required />
      <Label inputId='email' text='비밀번호확인' color="#141142" />
      <Input type="password" value={passwordConfirmValue} onChange={onPasswordConfirmChange}  placeholder='비밀번호확인' required />
      </StyledForm>
    </Container>
  )
}
