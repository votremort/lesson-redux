import './App.css';
import { Counter } from './components/Counter';
import { Users } from './components/Users';
import { Posts } from './components/Posts';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('counter');

  return (
    <div className="App">
      <nav>
        <button onClick={() => setPage('counter')}>Счетчик</button>
        <button onClick={() => setPage('users')}>Пользователи</button>
        <button onClick={() => setPage('posts')}>Посты</button>
      </nav>
      {page === 'counter' && <Counter />}
      {page === 'users' && <Users />}
      {page === 'posts' && <Posts />}
    </div>
  );
}

export default App;
