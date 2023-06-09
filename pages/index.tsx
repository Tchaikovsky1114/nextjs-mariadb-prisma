

import Slider from "@/components/home/Slider";
import { Container } from "@/components/style/Container";
import { Image as IImage } from "@/types/image";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

const Center = styled.div`
    width: 100%;
    height: 100vh;
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
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #007bff;
    }
`
const CenterSliderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex: 0.6;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 1rem;
  gap: 1rem;
  padding-top: 4rem;
  p {
    top: 16px;
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #2d63e2;
    }
  }
`
const GradientBorder = styled.div`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  z-index: 0;
  border-radius: 10px;
  background: linear-gradient(to right, rgb(173, 101, 255), rgb(255, 0, 189), rgb(0, 255, 247));
  background-clip: padding-box;
  opacity: 0.5;
`;
const Placeholder = styled.span`
  font-size: 0.8rem;
`


interface Props {
  images: IImage[];
}
// https://busan-7beach.openapi.redtable.global/api/rstr?serviceKey=QortEntQF9x0RrVxVViYFIHX2DIWAPGcIplN9nWxPsMWRovcwxHz0JkvQ0caYtaW
export default function Home({ images }: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <Container>
      <Center>
      <StyledLNB>
        <p>My Project</p>
        <Link href="/todos">TodoList</Link>
        <Link href="/board">Board</Link>
        <Link href="/image-uploader">Image-UpLoader</Link>
        <Link href="/busan-7beach">Busan-7Beach</Link>
      </StyledLNB>
        <CenterSliderBox>
          <GradientBorder />
        <p>S3 Uploaded Image Carousel</p>    
          <Slider images={images} />
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
  
  return {
    props: {
      images: data,
    },
    revalidate: 10,
  } ;
}
