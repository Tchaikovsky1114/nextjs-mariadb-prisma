import { MouseEvent, useCallback, useState } from 'react';
import useSWR, { mutate } from 'swr';
import useInput from './useInput';
import { fetcher } from '@/util/api';

export default function useTodoList() {

  const { data, error } = useSWR('/api/todos', fetcher, {revalidateOnFocus:false} );
  const { value, onChange,removeInputHandler } = useInput()

  const onSubmit = useCallback( async(e:MouseEvent) => {
    try {
        await fetch('/api/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: value, content: 'test'})
          });
          removeInputHandler()
          mutate('/api/todos');
          return true;
    } catch (error) {
        throw Error('투두를 저장하는데 실패했습니다.')
    }
  },[value, removeInputHandler]);

  const onUpdate = useCallback( async(isCompleted: boolean,id: number) => {
    try {
        await fetch('/api/todos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({ isCompleted: !isCompleted, id})
            });
            mutate('/api/todos');
            return true;
    } catch (error) {
        throw Error('투두를 업데이트하는데 실패했습니다.')
    }
    },[]);

  const onDelete = useCallback(async (id: number) => {
    console.log('id',id)
    try {
        await fetch('/api/todos?id=' + id, {
            method: 'DELETE',
        });
        mutate('/api/todos');
        return true;
    } catch (error) {
        throw Error('투두를 삭제하는데 실패하였습니다.')
    }
  },[])

  const onKeyDown = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
        onSubmit(e as unknown as MouseEvent)
    }
  },[onSubmit])



  if (error) return { todos: [], error: 'failed to load' };
  if (!data) return { todos: [], error: null };

  return { data, value, onChange, onSubmit, onKeyDown, onUpdate, onDelete, error: null };
}