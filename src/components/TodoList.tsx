import React, {useState} from 'react'
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export interface ITask {
  text: string,
  isCompleted: boolean,
}

const todoListDefaultState: ITask[] = [
  {
    text: 'kupić biurko',
    isCompleted: false
  },
  {
    text: 'wymienić klocki',
    isCompleted: false
  },
  {
    text: 'odebrać paczkę',
    isCompleted: false
  }
]


const TodoList = () => {
  const [todos, setTodos] = useState(todoListDefaultState)

  const addTodo = (text: string) => {
    const newTodos = [...todos, {text, isCompleted: false}];
    setTodos(newTodos)
  }
  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }


  return (
    <div className="todo-list">
      {todos.map((task, index) => (
        <TodoItem
          task={task}
          index={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoList