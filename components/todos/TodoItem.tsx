import useTodoList from '@/hooks/useTodolist'
import { Todo } from '@/types/todos'
import React from 'react'
import { styled } from 'styled-components'


interface Props {
    todo: Todo
}
interface StyledProps {
    completed: string
}
const StyledTodoItemContainer = styled.li<StyledProps>`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: ${({completed}) => completed === 'true' ? '#ccc' : '#fff'};
    gap: 1rem;
    height: 3rem;
    padding: 8px;
    min-width: 100%;
    p {
        color: inherit;
        text-decoration: none;
        font-size: 1rem;
        text-decoration: ${({completed}) => completed === 'true' ? 'line-through' : 'none'};
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
            text-decoration: none;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 0.75rem;
            height: 1.25rem;
            padding: 0.25rem;
            width: fit-content;
            font-weight: bold;
            cursor: pointer;
        }
        
        .delete-button {
        background: #ff0000;
        }
        .edit-button {
        background: ${({completed}) => completed === 'true' ?  '#ffaa00' : '#00ff00'}
        }
        
        button:hover {
            opacity: 0.8;
        }
    }
`
    
export default function TodoItem({todo}: Props) {
        const { onUpdate, onDelete } = useTodoList()

    return (
        <StyledTodoItemContainer key={todo.id} completed={todo.isCompleted.toString()}>
        <p className='todo-item'>{todo.title}</p>
        <div>
        <span>{todo.createdAt?.substring(0,10)}</span>
				<div className='button-group'>
					<button onClick={() => onUpdate!(todo.isCompleted,todo.id)} className='edit-button'>{todo.isCompleted ? 'Yet' : 'Done'}</button>
					<button onClick={() => onDelete!(todo.id)} className='delete-button'>삭제</button>
				</div>
        </div>
        </StyledTodoItemContainer>
    )
}
