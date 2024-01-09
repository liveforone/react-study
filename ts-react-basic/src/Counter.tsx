import React, { useState } from "react";

function Counter() {
  //useState에 제네릭을 사용하지 않아도 타입을 추론한다.
  //null일 수도 있고 아닐 수도 있을때 제네릭을 사용하면 좋다.
  //useState<Information | null>(null);
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(() => count + 1);
  const onDecrease = () => setCount(() => count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}
export default Counter;
