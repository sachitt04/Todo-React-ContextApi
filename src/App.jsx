import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos((prev)=> [{id:Date.now(), ...todo},...prev])
  }

  const updateTodo = (todo,id) => {
    setTodos ((prev) => prev.map((eachTodo) => (prevTodo.id === id ? todo : prevTodo)))

  }

  const checkTodo = (id) => {

    setTodos((prev)=> prev.map((eachTodo)=> eachTodo.id === id ? {...eachTodo, completed:!eachTodo.completed} : eachTodo))

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo)=> eachTodo.id !== id ))

  }

  // get todos
  useEffect(()=> {
  const todos = JSON.parse(localStorage.getItem("todos")) 
  if(todos && todos.length > 0){
    setTodos(todos)
  }
  } ,[])


  // setTodos

  useEffect(()=> {
    localStorage.setItem("todos",JSON.stringify(todos))
  } ,[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,checkTodo,deleteTodo}}>
 <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
