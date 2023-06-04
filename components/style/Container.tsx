import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  min-height: 100vh;
  padding-top: 2.4rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(aliceblue,teal);
  color: ${({theme}) => theme.colors.primary};
  p{
    color: inherit;
    /* color: ${({theme}) => theme.colors.accent}; */
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
  }
  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
      text-decoration: underline;
      text-underline-offset: 0.4rem;
    }
  }
`;