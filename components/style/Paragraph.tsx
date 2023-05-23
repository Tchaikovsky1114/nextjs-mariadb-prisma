import { styled } from "styled-components";

export const StyledParagraph = styled.p`
  &.alert {
    margin-top: 2rem;
    color: ${({theme}) => theme.colors.text};
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
  }
`