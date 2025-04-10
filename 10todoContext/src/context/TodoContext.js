import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo mssg",
        checkBox: "false",
    }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    togglecomplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider