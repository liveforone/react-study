import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

//서브 라우팅을 할때에는 라우팅 코드에서 감싸준 후에
//구현코드에서 아래처럼 서브 컴포넌트를 넣어주면 된다.
//라우팅에 관련된 작업은 라우팅 코드(app.js)에서 해주고
//부모 컴포넌트에서는 자식컴포넌트를 선언만 해주면 된다.
const Profiles = () => {
  return (
    <div>
      <h1>회원을 선택해주세요</h1>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>
      <Profile />
    </div>
  );
};

export default Profiles;
