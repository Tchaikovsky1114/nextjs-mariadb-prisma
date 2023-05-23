import { Todo } from '@/types/todos'
import React from 'react'
import { styled } from 'styled-components'


interface Props {
    todo: Todo
}
interface StyledProps {
    completed: boolean
}
const StyledTodoItem = styled.li<StyledProps>`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #fff;
    gap: 1rem;
    height: 3rem;
    padding: 8px;
    text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};
    p {
        color: inherit;
        text-decoration: none;
        font-size: 1rem;
    }
    span {
        display: block;
        text-align: center;
        color: #ccc;
        font-size: 0.65rem;
    }
    div.button-group {
        display:flex;
        gap: 0.25rem; 
        button {
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 0.75rem;
            height: 1.25rem;
            padding: 0.25rem;
            width: 2rem;
            font-weight: bold;
            cursor: pointer;
        }
        
        .delete-button {
        background: #ff0000;
        }
        .edit-button {
        background: ${({completed}) => completed ? '#00ff00' : '#ffaa00'}
        }
        
        button:hover {
            opacity: 0.8;
        }
    }
`
    
export default function TodoItem({todo}: Props) {
  return (
    <StyledTodoItem key={todo.id} completed={todo.isCompleted}>
    <p className='todoitem'>{todo.title}</p>
    <div>
        <span>{todo.createdAt.substr(0,10)}</span>
        <div className='button-group'>
            <button className='edit-button'>{todo.isCompleted ? 'Done' : 'Yet'}</button>
            <button className='delete-button'>삭제</button>
        </div>
    </div>
    </StyledTodoItem>
  )
}
