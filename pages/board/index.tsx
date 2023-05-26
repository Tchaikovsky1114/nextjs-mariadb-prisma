import PostEditor from '@/components/board'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

export default function BoardPage() {
  
  return (
    <Container>
      <input type="text" placeholder='제목을 입력해주세요' />
      <PostEditor />
    </Container>
  )
}
