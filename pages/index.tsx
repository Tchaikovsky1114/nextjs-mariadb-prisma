import { Container } from "@/components/style/Container";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
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
    padding-top: 4rem;
    p {
        top:16px;
        position: absolute;
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

interface Image {
  url: string;
  id: string;
}
interface Props {
  images: Image[];
}

export default function Home({images} : Props) {
  console.log(images)
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
          {images.map((image) => (
            <Image key={image.id} width={160} height={160} src={image.url} alt="" />
          ))}
        </CenterSliderBox>
      <StyledRNB>
        <Placeholder>maybe it will place some post that has many favorite or read</Placeholder>
      </StyledRNB>
      </Center>
    </Container>
  )
}

export const getStaticProps = async (context:GetStaticPropsContext) => {
  const response = await fetch('http://localhost:3000/api/imagedb');
  const data = await response.json();
  console.log('data',data);
  return {
    props: {
      images: data
    }
  } ;
}
