import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.div`
  padding-top: 4rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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


export default function Home() {

  return (
    <Container>
      <p>My Project</p>
    <Link href="/todos">TodoList</Link>
    <Link href="/board">Board</Link>
    </Container>
  )
}
