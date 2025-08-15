import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../../slices/users/usersSlice";

export const Users = () => {
  const dispatch = useDispatch();
   
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  const [name, setName] = useState('');
  const [showUsers, setShowUsers] = useState(false);

  const handleLoadUsers = () => {
    dispatch(fetchUsers());
    setShowUsers(true);
  }

  const handleAddUser = (e) => {
    e.preventDefault();
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
      <button onClick={handleLoadUsers}>Показать пользователей</button>
      <div>
        <input 
          type="text"
          placeholder="Введите имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser}>Добавить пользователя</button> 
      </div>
      {showUsers && status === 'loading' && <p>Загрузка</p>}
      {showUsers && status === 'failed' && <p>Ошибка загрузки данных</p>}
      {users.length > 0 ?  (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ): (
        <p>Список пользователей пуст</p>
      )}
    </div>
  )
}
