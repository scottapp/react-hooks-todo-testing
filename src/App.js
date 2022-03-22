//import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import TodoForm from './ToDo/TodoForm';
import TodoList from './ToDo/TodoList';
import useTodoState from './ToDo/useTodoState';
import './styles.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">

      <Typography component="h1" variant="h2">
        Todos App
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
