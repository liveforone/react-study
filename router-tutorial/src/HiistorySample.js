import React from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample() {
  const naviagate = useNavigate();

  const goBack = () => {
    const question = window.confirm('정말 떠나시겠어요?');
    if (question) {
      //이전 페이지로 이동한다.
      naviagate(-1);
    }
  };

  const goHome = () => {
    //해당 url로 이동한다.
    naviagate('/');
  };

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
