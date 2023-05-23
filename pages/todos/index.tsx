import Button from '@/components/style/Button';
import { Container } from '@/components/style/Container'
import Input from '@/components/style/Input';

import Todolist from '@/components/todos/Todolist';
import useInput from '@/hooks/useInput';
import useTodoList from '@/hooks/useTodolist';
import React from 'react'
import { styled } from 'styled-components'
import useSWR from 'swr';

const TodoContainer = styled(Container)`
  
  align-items: center;
`


const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function TodolistPage() {
  const { data,error, onSubmit, onChange, onKeyDown, value } = useTodoList()

  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>
  return (
    <TodoContainer>
      <p>TodoList</p>
      <Input placeholder='오늘의 Must To Do! 입력해주세요' value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <Button onClick={onSubmit!}><span>투두 작성하기</span></Button>
      <Todolist data={data} />
    </TodoContainer>
  )
}
