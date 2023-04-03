import './App.css';
import Todos from './components/Todos';
import Todo from './components/models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
