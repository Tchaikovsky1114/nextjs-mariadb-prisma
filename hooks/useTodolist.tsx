import { MouseEvent, useCallback, useState } from 'react';
import useSWR, { mutate } from 'swr';
import useInput from './useInput';
import { fetcher } from '@/util/api';
import { httpRequest, todoRequest } from '@/lib/httpRequest';
import { httpMethod } from '@/types/httpMethod';

export default function useTodoList() {

  const { data, error } = useSWR('/api/todos', fetcher, {revalidateOnFocus:false} );
  const { value, onChange,removeInputHandler } = useInput()

  const onSubmit = useCallback( () => {
    if(!value) return false;
    try {
      todoRequest(httpMethod.POST,JSON.stringify({title: value, content: 'text'}))('투두 작성에 실패하였습니다.')()
      removeInputHandler()  
    } catch (error) {
      alert(error)
    } 
  },[value,removeInputHandler]);

  const onUpdate = useCallback((isCompleted: boolean,id: number) => {
    try {
      todoRequest(httpMethod.PUT,JSON.stringify({isCompleted:!isCompleted,id}))('투두 업데이트에 실패하였습니다.')()  
    } catch (error) {
      alert(error);
    }
  },[]);
  
  // onDelete와 같은 경우에는 httpRequest이후 mutate 메서드가 실행되어야 하기 때문에 부모 함수에도 async/await을 사용한다.
  const onDelete = useCallback(async (id: number) => {
    try {
      await httpRequest('/api/todos?id=' + id)(httpMethod.DELETE)('투두 삭제에 실패하였습니다.')()
      mutate('/api/todos')   
    } catch (error) {
      alert(error);
    }
    }, [])

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



  // currying을 사용하는 이유 : 유지보수 용이 / 코드 재사용 / 가독성
  // currying은 실행 전 필요한 모든 인자를 얻었는지 확인하고, 동일 변수를 재전달 하는 것을 피하는데 도움이 된다.
  // 또한 다수의 인자를 받는 함수를 단일 인자를 받는 함수로 분리하여 사용할 수 있다.
  // post까지 currying으로 처리할 수 있다.
  // const postTodoRequest = todoRequest(httpMethod.POST,{title: value, content: 'text'})
  // 다만 useCallback을 사용하면 하나의 함수 호출연산자가 추가로 늘어나고, 코드량이 증가한다.
  // 중첩된 함수의 수와 호출문의 개수가 달라지며 추후 유지보수 및 호출문이 복잡해지는 문제가 발생한다.
  // 따라서 useCallback을 사용하지 않고, 함수를 호출하는 시점에 currying을 적용하는 것이 좋다.