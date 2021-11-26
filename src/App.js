import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import './index.css';
const todos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'cortar pan', completed: false },
  { text: 'cortar agua', completed: false },
];
function App() {
  return (
    <>
      {<TodoCounter />}
      {<TodoSearch />}
      <input placeholder='Cebolla' />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
