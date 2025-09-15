import React from 'react'
import TodoList from '../components/TodoList'

function HomePage({theme}) {
  return (
    <>
    <TodoList theme={theme}/>
    </>
  )
}

export default HomePage