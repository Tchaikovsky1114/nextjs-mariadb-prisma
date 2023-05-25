import { MouseEvent, useCallback, useState } from 'react';
import useSWR, { mutate } from 'swr';
import useInput from './useInput';
import { fetcher } from '@/util/api';
import { httpRequest, todoRequest } from '@/lib/httpRequest';
import { httpMethod } from '@/types/httpMethod';

export default function useTodoList() {

  const { data, error } = useSWR('/api/todos', fetcher, {revalidateOnFocus:false} );
  const { value, onChange,removeInputHandler } = useInput()

  // post까지 currying으로 처리할 수 있다.
  // const postTodoRequest = todoRequest(httpMethod.POST,{title: value, content: 'text'})
  // 다만 useCallback을 사용하면 하나의 함수 호출연산자가 추가로 늘어나고, 코드량이 증가한다.
  // 중첩된 함수의 수와 호출문의 개수가 달라지며 추후 유지보수 및 호출문이 복잡해지는 문제가 발생한다.
  // 따라서 useCallback을 사용하지 않고, 함수를 호출하는 시점에 currying을 적용하는 것이 좋다.
  const onSubmit = useCallback(() => {
    if(!value) return false;
    todoRequest(httpMethod.POST,{title: value, content: 'text'})('투두 작성에 실패하였습니다.')()
    removeInputHandler()
  },[value,removeInputHandler]);

  const onUpdate = useCallback( async(isCompleted: boolean,id: number) =>
      await todoRequest(httpMethod.PUT,{isCompleted:!isCompleted,id})('투두 업데이트에 실패하였습니다.')()
    ,[]);

  const onDelete = useCallback(async (id: number) => {
    await httpRequest('/api/todos?id=' + id)(httpMethod.DELETE,`/api/todos?id=${id}`)('투두 삭제에 실패하였습니다.')()
    mutate('/api/todos') 
    }
  ,[])

  const onKeyDown = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
    if(!value) return;
    
    if(e.keyCode === 13) {
        e.preventDefault()
        onSubmit()
        mutate('/api/todos');
    }
    
  },[value,onSubmit])

  if (error) return { todos: [], error: 'failed to load' };
  if (!data) return { todos: [], error: null };

  return { data, value, onChange, onSubmit, onKeyDown, onUpdate, onDelete, error: null };
}