import React, { ChangeEvent, useCallback, useState } from 'react'

export default function useInput() {
const [value,setValue] = useState('');

const changeInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  },[])

const removeInputHandler = useCallback(() => {
    setValue('')
  },[])

  return {
    value,
    onChange: changeInputHandler,
    removeInputHandler
  }
}
