import React from 'react';
import { useParams } from 'react-router-dom';

const profileData = {
  velopert: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공',
  },
};

//userParams 를 사용하여 해당 파라미터를 가져올 수 있다.
const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];

  return (
    <>
      <hr />
      {username && profile && (
        <div>
          <h3>
            {username}({profile.name})
          </h3>
          <p>{profile.description}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
