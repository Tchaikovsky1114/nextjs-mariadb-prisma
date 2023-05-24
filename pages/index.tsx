import { Container } from "@/components/style/Container";
import Link from "next/link";
import { styled } from "styled-components";




export default function Home() {

  return (
    <Container>
      <p>My Project</p>
    <Link href="/todos">TodoList</Link>
    <Link href="/board">Board</Link>
    <Link href="/image-uploader">Image-UpLoader</Link>
    </Container>
  )
}
