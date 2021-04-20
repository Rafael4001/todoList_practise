import React from 'react';
import {ITask} from './TodoList'

interface ITodoItem {
  task: ITask,
  index: number,
  completeTodo: any, // TODO
  removeTodo: any // TODO
}

const TodoItem = ({task, index, completeTodo, removeTodo}: ITodoItem) => (
  <div
    className="todo"
    style={{textDecoration: task.isCompleted ? 'line-through' : ''}}
  >
    {task.text}
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => removeTodo(index)}>X</button>
  </div>
)

export default TodoItem