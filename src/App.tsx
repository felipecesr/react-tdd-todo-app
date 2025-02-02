import { useState } from 'react'
import './App.css'
import Button from './Button';
import ListItem from './ListItem';

type Todo = {
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([{ text: input, completed: false }, ...todos]);
      setInput("");
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className='wrapper'>
      <h1 className='heading'>Tasks</h1>
      <input
        className='input'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={clearCompleted}>Clear Completed</Button>
      <ul className='list'>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            isCompleted={todo.completed}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

export default App
