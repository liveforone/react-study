import React, { useState } from 'react';
import useAsync from './useAsync';
import User from './User';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  //users기 때문에 context에서 users를 가져온다.
  //만약 User을 다루는 컴포넌트 였으면 state.user 이 되었을 것이다.
  const { loading, data: users, error } = state.users;

  const fetchDate = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchDate}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchDate}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
