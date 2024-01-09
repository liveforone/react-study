# react-study

## 프로젝트 조회 순서

1. react-basic
2. error-catch
3. styling-with-sass
4. useful-tools
5. todolist : 커스텀 context & 커스텀 훅
6. api-integrate : axios
7. router-tutorial : react-router-dom

## 타입스크립트 리액트 예제 : ts-react-basic

- Greeting : props를 ts 스타일로 주고 받는 것을 볼 수 있다.
- Counter : useState를 사용하는 것을 볼 수 있다.
- MyForm : form, input, onChange, onSubmit을 다룬다.
- SampleContext & ReducerSample : 커스텀 리듀서 훅을 만들어서 사용하는 예제를 다룬다.

## 최적화 : 많은 props의 업데이트, 잦은 렌더링

1. 함수형 업데이트(setXx들을 함수형 업데이트)
2. useCallback(함수들을 useCallback으로 묶음)
3. React.memo(컴포넌트를 메모로 묶음)

## install 주의 사항

- `-g`옵션을 사용해서 글로벌로 설치하는 것은 좋지 않음.
- 또한 create-react app같은 보일러 플레이트를 사용할때는 npm보다 npx를 사용하는 것이 좋다.
- 그래야 최신 버전을 활용할 수 있기 때문이다.

## import 문법의 가능이유

- nodejs에서는 commonjs만 지원한다.
- 따라서 모듈을 import할때 다음과 같이 한다.

```javascript
const react = require("react");
```

- 그러나 리액트는 그렇지 않다. 이는 babel때문이다.
- babel은 최신 js 문법을 지원하며, 최신 문법을 이전 문법에서만 동작하는 브라우저나 서버에서 동작하도록 변환시키는 문법 통일 시스템이다.
- 따라서 babel 덕분에 아래와 같이 표현할 수 있다.

```javascript
import react from "react";
```

### 어디서 import 해올까?

- `require()`든 `import`든 어디서 가져올까?
- 경로를 명시하지 않은채 이름만 작성할경우 node_modules 에서 가져온다.

## export

- export는 `export default`방식과 `export` 방식이 있다.
- `export default`로 export 할 때에는 import 시에 원하는 이름을 명명하게 되면 해당 이름으로 default export 값을 가져온다.

```javascript
//export.js
const exportValues = {
    message: '안녕하세요';
}
const codingAppleReact = 'good';

export default exportValues;

//import.js
import IAmDefault from './export';
```

- 그러나 그냥 export하게 되면, import시 export한 값들을 가져와야한다.

```javascript
//export.js
export { exportValues, codingAppleReact };

//import.js
import { exportValues, codingAppleReact } from "./export";
```

## 리액트 core

- 리액트는 dom기반의 라이브러리이다.
- 리액트는 데이터를 담는 `모델`과 화면을 보여주는 `뷰`가 있다.
- 변경된 `뷰`만 보여주다가 `모델`이 바뀌면 dom을 새로 교체한다.
- 그러나 dom을 바꾸는 것은 자원소모가 크므로 virtual dom을 활용한다.
- index.js에서 렌더링을 하며, 이 렌더링은 public/index.html의 id=root 태그로 렌더링을 진행한다.

## 컴포넌트

- class 컴포넌트와 함수 컴포넌트로 구성할 수 있다.
- 수직적으로 컴포넌트를 하나의 파일에 구성할 경우, 아래있는 컴포넌트가 자식 컴포넌트, 위에가 부모 컴포넌트가 된다.

## jsx

- html안에서 자바스크립트 코드를 사용할땐 중괄호 `{}`를 이용하여 jsx를 사용한다.

### jsx 닫는 태그

- JSX에서는 홀로 기능을 하는 태그라고 할 지라도 닫는 태그를 닫아주어야한다.
- `< />`처럼 말이다

### jsx fragment

- jsx는 하나의 태그안에 다른 태그들이 있어야한다.
- return문에 여러개의 태그가 있으면 안되고 하나의 태그가 여러 태그를 감싸야한다.
- 이때 `<> </>`라는 fragment를 사용하면 하나의 컴포넌트에 여러 태그를 사용할 수 있다.

```javascript
<>
  <div></div>
  <div></div>
  <div></div>
</>
```

### jsx 클래스 이름

- jsx에서는 클래스 이름을 쓸때 js와의 충돌을 막기위해 `class=""` 대신 `className=""`을 씁니다.

### jsx 스타일링

- `<div style="color:red"></div>`와 같은 방식은 jsx에서 사용할 수 없다.
- 스타일링 시에는 객체를 활용해야한다.
- `<div style={ {color:'red'} }></div>` 처럼 말이다

### jsx 이벤트

- 버튼태그의 `onclick`, `onsubmit`등을 사용하는 방식은 똑같다.
- 다만 카멜케이스를 사용해야한다. `onClick`처럼 말이다.
- 또한 arrow function을 사용하지 않는다면 this bind를 사용해야 정상적으로 동작한다.

```javascript
//arrow function
testEvent = () => {
  console.log("event!!");
};

<button onClick={this.testEvent} />;

//normal function
function testEvent() {
  console.log("event!!");
}

<button onClick={this.bind.testEvent} />;
```

## state

- state는 컴포넌트에서 생성/변경 할 수 있는 데이터이다.
- state는 반드시 객체 형태로 생성한다.
- 훅을 이용할 땐 `useState()`로 사용하면된다.
- `useState()`를 사용할땐 `[state, set함수]`를 넣어주면된다.

```javascript
//class component 방식
state = {
  helloMsg: "hello",
};

//훅 방식
const [helloMsg, setHelloMsg] = useState("hello");
```

- 수정시에는 `setState({})`를 사용한다.
- setState 함수를 사용하지 않고 값을 변경하면 html에 반영되지 않는다.
- 훅을 사용할땐 정의한 set함수를 사용한다.

```javascript
//class component 방식
this.setState({
  helloMsg: "Change",
});

//훅 방식
setHelloMsg("Change");
```

- 또한 최적화를 위해 함수형 업데이트를 사용할 수도 있다.

```javascript
const [number, setNumber] = useState(0);

const onIncrease = () => {
  setNumber((prevNumber) => prevNumber + 1);
};
```

- 아래는 이벤트를 활용한 state 변경예제이다.

```javascript
const [helloMsg, setHelloMsg] = useState("hello");

const changeState = () => {
  setHelloMsg("change state");
};
```

## props

- 받은 데이터 혹은 생성된 데이터이다. 즉 내가 만들어낸 데이터가 아니다
- 여러개의 props를 받을때 `.`을 이용하여 구분하는 것이 싫다면 매개변수로 구조분해 할당을 사용해도 된다. `function Test({val1, val2})`
- 아래는 props를 사용하는 예제이다.

```javascript
function App() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <PropsTest count={count} />
      <button onClick={upCount}>Up</button>
      <button onClick={downCount}>Down</button>
    </div>
  );
}

function PropsTest(props) {
  //props를 받을때 this키워드는 안쓴다
  return (
    <div>
      <div>
        <span>hello i'm props test</span>
      </div>
      <div>받은 데이터는 {props.count}</div>
    </div>
  );
}
```

## default props

- props를 지정안했을때 기본적 사용할 값을 만들 수 있다.
- 이걸 활용하면 값이 안넘어왔을때를 예상하고 값을 넣어서 유연하게 처리가 가능하다.

```javascript
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: "이름없음",
};
```

## props children - wrapper

- wrapper같은 경우 감싼 태그가 화면에 나타나지 않을 수 있다.
- 이때에는 props children을 활용하면 된다. 반드시 props 이름이 `children`이어야한다.

```javascript
//wrapper.js
//wrapper는 hello 컴포넌트를 받는다.
function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
}

//app.js
//wrapper가 hello를 감싸고 있다.
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}
```

## 객체/배열 상태 변경

- state에 객체/배열을 넣은 경우 객체의 상태를 변경할때에는 새객체를 만들어서 변경해야한다.
- 즉 spread 문법으로 복사를 하고, 값을 변경해야한다.
- 객체에서 특정 키를 `[]`로 찾고 그 값을 변경한다.
- 불변성을 지켜주어야 객체의 상태를 정상적으로 변경 가능하다.
- 배열 또한 마찬가지이다.

```javascript
const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
});
//event를 파라미터로 받음
//e.target으로 dom을 가져오고, value로 dom의 값을 가져옴
const onChange = (e) => {
      //각 name의 value를 가져올 수 있음 -> name, nickname을 모두 가져올 수 있음
      //즉 onChange 함수 재활용 가능
      const {value, name}  = e.target;
      setInputs({
        ...inputs, //기존 inputs 객체 복사
        [name] : value //name 키값을 value로 변경
      });
};

//배열의 경우
const input = {
  name : 'kim',
  nickname : 'chan
};
setInputs([...inputs, input]);  //복사 후 추가
setInputs(inputs.concat(input));  //배열을 연결한 새 배열
```

## useRef

- heap에 저장되고 같은 메모리 주소를 가지기에 `===` 연산을 하면 true를 반환, 또한 값이 바뀌어도 리렌더링이 되지 않아서
- 변수의 경우 리렌더링되면 값이 초기화 되는데에 반해 ref는 그렇지 않다.
- 특정 dom을 건드린다.
- 원하는 태그에 `ref={이름}`을 부여하고
- `const 이름 = useRef();`로 ref를 생성한다.
- `nameInput.current`를 이용하면 ref를 부여한 dom을 건드릴 수 있다.
- 일례로 .focus해주면 포커스가 된다.
- useRef에 기본값을 넣으면 그것이 current의 기본값이 된다.
- 따라서 수정등을 할때 current의 값을 수정하면되고, 조회할때 current의 값을 조회하면 된다.

## deps 배열

- 함수 안에서 사용하는 상태/props
- 보통 deps 배열은 deps 배열안의 특정값이 업데이트 되는 등의 일이 일어났을때 해당 훅을 실행시키려고 넣는 경우가 많다.
- deps 배열을 비워두면 useEffect의 경우 마운트에만 실행된다.

## useMemo

- 연산의 값을 저장하여 재활용 할수 있게 도와준다.
- 첫번째 매개변수에는 연산 함수를 넣고, 두번째 매개변수에는 deps 배열을 넣는다.

## useCallback

- 함수를 재사용할 때 사용된다.
- 정의한 함수들은 리렌더링 될때 새로 만들어진다. 이것을 막아준다.
- 따라서 최적화할 때 도움을 준다. 첫 매개변수로 함수를 넣고, 두번째 매개변수로 deps 배열을 넣는다.

## 배열 렌더링

- 배열을 렌터링 할때에는 key라는 props를 설정해야한다.
- 이 key는 고유한 값으로 설정해야하는데, 만약 고유한 값이 없다면
- map의 콜백함수에서 index를 가져오면 된다.

```javascript
//고유값이 있을때
users.map((user) => <User user={user} key={user.id} />);

//고유값이 없을때
users.map((user, idx) => <User user={user} key={idx} />);
```

## React.memo

- props가 변경되지 않았다면 리렌더링을 하지 않게 최적화해준다.

## useReducer

- state의 상태를 변경하는 종료가 많을 때에는 reducer을 사용하면된다.
- useState와 사실상 하는 일은 동일하나, 여러개일 때 관리가 편해진다.

```javascript
function numberReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

//관리할 상태, 변경할 함수, reducer 함수, 기본값
const [number, dispatch] = useReducer(numberReducer, 0);
const increase = () => {
  dispatch({ type: "INCREMENT" });
};

const decrease = () => {
  dispatch({ type: "DECREASE" });
};
```

## immer

- 복잡한 형태의 객체의 경우 불변을 유지하면서 값을 변경하기가 어렵다. 이때 사용함
- 첫번째 매개변수로 상태를 넣고, 두번째 매개변수로 불변을 신경쓰지 않는 함수를 넣어주면 알아서 처리해준다.
- `npm i immer`
- `import produce from 'immer';`

## 혹시모를 에러 대비 : componentDidCatch

- 개발자가 놓친 에러를 처리해주는 것에 `componentDidCatch`가 있다.
- 클래스 컴포넌트 식으로 만들고, 다른 컴포넌트를 감싸는 wrapper 처럼 쓰면 된다.

```javascript
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    //state를 정의한다.
    error: false,
  };

  //param1 : 에러 내용, param2 : 에러 위치
  componentDidCatch(error, info) {
    console.log("에러가 발생했습니다.");
    console.log({
      error,
      info,
    });
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    //문제가 없다면 childern을 넘긴다.
    return this.props.children;
  }
}

export default ErrorBoundary;
```

## jsx 라이프 사이클

- 1. constructor : 생성
- 2. render : 이때 실제 html 반영
  - \*주의\* : render는 props와 state가 업데이트 될 때도 실행된다.
  - 따라서 render안에서 props나 state를 변경하지말아라. 무한루프에 빠진다.
- 3. componentDidMount : render의 모든 부분이 화면에 반영되면 호출, 단 한번만 호출된다. 업데이트시에 호출되지 않음
- 4. Updating : state나 props의 변경 유무로 동작, 데이터가 변경되면 render가 동작

## axios

- `axios.get('url')`
- `axios.post('url', 서버에 전달할 json)`
- 비동기 함수로 구현해야하며, 값을 가져올땐 `변수.data`로 가져와야한다.

## redux

- `npm i redux`
- `npm install react-redux`

### action

- 상태에 변화가 필요할때 발생
- 반드시 type 값을 포함해야하며 그 이외값은 개발자 자유
- action은 액션 함수를 만들어서 사용한다. 액션함수는 액션 객체 형태를 만들어서 리턴하면 된다.

```javascript
{
  type: "TOGGLE_VALUE";
}

//액션 함수
export function addToDo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}
```

### reducer

- 변화를 일으키다. context api의 reducer와 똑같다.
- 그렇기에 state와 action을 받아서 상태를 업데이트 한다.
- 다만 일반 reducer와 달리 default부분에 에러를 발생시키지 않고 state를 리턴한다.

```javascript
function counter(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state; //에러를 발생시키지 않는다.
  }
}
```

### store

- 한 app당 하나의 스토어를 만든다. 안에는 상태, 리듀서가 들어있다.

### dispatch

- 스토어의 내장함수로 액션을 발생시킨다. `dispatch(action)`
