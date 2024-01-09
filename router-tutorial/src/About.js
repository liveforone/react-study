import React from 'react';
import { useSearchParams } from 'react-router-dom';

//쿼리 스트링은 userSearchParams를 사용한다.
//useState를 사용하듯 첫 변수에는 모든 쿼리스트링 객체가
//두번째에는 쿼리스트링이 set 함수가 들어간다.(생략가능)
//쿼리 스트링을 조회할 때는 get(key)로 조회한다.
const About = () => {
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>라우터 기초를 알아보는 프로젝트입니다.</p>
      {detail && <p>파라미터를 사용한 추가 정보!!</p>}
    </div>
  );
};

export default About;
