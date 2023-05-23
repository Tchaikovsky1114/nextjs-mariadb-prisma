import React from 'react'
import { StyledParagraph } from '../style/Paragraph'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todos'
import { styled } from 'styled-components'



const StyledTodoList = styled.ul`
  display:flex;
  flex-direction:column;
  gap: 0.25rem;
`
interface Props {
  data: Todo[]
}

export default function Todolist({data}: Props) {

  return (
    <StyledTodoList>
    {
    data.length > 0
    ?  data.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))
    : <StyledParagraph className='alert'>할 일을 작성해주세요.</StyledParagraph>
    }
  </StyledTodoList>
  )
}
