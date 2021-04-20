import React, {useState} from 'react';

interface ITodoForm {
  addTodo: (text: string) => void
}

const TodoForm = ({addTodo}: ITodoForm) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!value) return;


    addTodo(value)
    setValue('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Add todo"
      />
    </form>
  )
}

export default TodoForm