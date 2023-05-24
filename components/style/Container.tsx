import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 2.4rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  p{
    color: ${({theme}) => theme.colors.accent};
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
  }
`;