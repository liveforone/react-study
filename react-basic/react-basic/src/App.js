import React, {useState, useRef, useMemo, useCallback} from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name] : value
    }));
  }, [inputs]);

  const [users, setUsers] = useState([
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
    ]);

  //배열을 다룰때 사용되는 ref
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));
    //setUsers([...users, user]); 도 가능하다.

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users => 
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);
  
  //isSpecial={true}와 isSpecial 은 동일한 의미이다.
  return (
    <>
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper>
    <br />
    <hr />
    <Counter />
    <br />
    <hr />
    <InputSample/>
    <br />
    <hr />
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <br />
    <hr />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <br />
    <hr />
    <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
