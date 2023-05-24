import { Container } from "@/components/style/Container";
import Link from "next/link";
import { styled } from "styled-components";

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

const StyledLNB = styled.div`
    align-self: flex-start;
    flex:0.2;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    &:hover {
        color: #007bff;
    }
`
const StyledRNB = styled.div`
    align-self: flex-start;
    flex:0.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    &:hover {
        color: #007bff;
    }
`
const CenterSliderBox = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
    align-items: center;
    flex: 0.6;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
    p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #000;
        text-decoration: none;
        &:hover {
            color: #007bff;
        }
    }
`
const Placeholder = styled.span`
  font-size: 0.8rem;
`


export default function Home() {

  return (
    <Container>
      <Center>
      <StyledLNB>
        <p>My Project</p>
        <Link href="/todos">TodoList</Link>
        <Link href="/board">Board</Link>
        <Link href="/image-uploader">Image-UpLoader</Link>
      </StyledLNB>
        <CenterSliderBox>
        <p>S3 Uploaded Image Carousel</p>
        
        </CenterSliderBox>
      <StyledRNB>
        <Placeholder>maybe it will place some post that has many favorite or read</Placeholder>
      </StyledRNB>
      </Center>
    
    </Container>
  )
}
