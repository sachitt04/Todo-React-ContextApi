import {createContext , useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo message",
            completed : false,
        
        }
    ],

    addTodo : (todo) => {} ,
    updateTodo : (todo,id) => {},
    checkTodo : (id) => {},
    deleteTodo : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider