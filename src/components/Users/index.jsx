import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../../slices/users/usersSlice";

export const Users = () => {
  const dispatch = useDispatch();
   
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);

  const [name, setName] = useState('');

  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleAddUser = () => {
    if (name.trim() !== '') {
      const newUser = {
        id: Date.now(),
        name,
      };
      dispatch(addUser(newUser));
      setName('');
    }
  };

  return (
    <div>
      <h2>Пользователи</h2>
      <div>
        <input 
          type="text"
          placeholder="Введите имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser}>Добавить пользователя</button> 
      </div>
      {status === 'loading' && <p>Загрузка</p>}
      {status === 'failed' && <p>Ошибка загрузки данных</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}