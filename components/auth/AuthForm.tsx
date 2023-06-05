import React from 'react';
import Input from '../style/Input';
import useInput from '@/hooks/useInput';
import { Container } from '../style/Container';
import { styled } from 'styled-components';
import Label from '../style/Label';

const StyledVideo = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  opacity: 0.88;
  z-index: -1;
`;

const StyledForm = styled.form`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 10;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  h3 {
    font-size: 18px;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }
  input {
    outline: none;
    caret-color: #fff;
    width: 100%;
  }
  padding: 2rem;
  border: 3px solid #1411423f;
  box-shadow: 0px 4px 4px #1411423f;
  border-radius: 10px;
  background: rgba(0,0,0,0.3);
  button {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    height: 48px;
    background-color: inherit;
    &:hover {
      background-color: #2d63e27c;
    }
  }
  
`;

export default function AuthForm() {
  const { onChange: onEmailChange, value: emailValue } = useInput();
  const { onChange: onNameChange, value: nameValue } = useInput();
  const { onChange: onPasswordChange, value: passwordValue } = useInput();
  const { onChange: onPasswordConfirmChange, value: passwordConfirmValue } =
    useInput();
  return (
    <>
      <StyledVideo
        autoPlay={true}
        loop={true}
        muted
        src={require('../../public/assets/ocean-video.mp4')}
      />
      <StyledForm>
        <h3>회원가입</h3>
        <Label inputId="email" text="이메일" color="#fff" />
        <Input
          type="email"
          value={emailValue}
          onChange={onEmailChange}
          placeholder="이메일"
          required
        />
        <Label inputId="name" text="닉네임" color="#fff" />
        <Input
          type="text"
          value={nameValue}
          onChange={onNameChange}
          placeholder="닉네임"
          required
        />
        <Label inputId="password" text="비밀번호" color="#fff" />
        <Input
          type="passwordConfirm"
          value={passwordValue}
          onChange={onPasswordChange}
          placeholder="비밀번호"
          required
        />
        <Label inputId="email" text="비밀번호확인" color="#fff" />
        <Input
          type="password"
          value={passwordConfirmValue}
          onChange={onPasswordConfirmChange}
          placeholder="비밀번호확인"
          required
        />
        <button>가입하기</button>
      </StyledForm>
    </>
  );
}
