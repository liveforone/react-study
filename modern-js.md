# 모던 자바스크립트
 
## ===
* 값과 유형까지 동일한지 판단

## truthy & falsy
* `undefined`, `null`, `0`, `''`, `NaN` 등은 falsy한 값이다.
* undefined, null을 모두 체크해야하는 상황에서는 아래와 같이 작성할 수도 있다.
* `if (val === undefined || val === null)`
* 그러나 이 둘은 falsy한 값이기 때문에 아래와 같이 작성하면 된다.
* `if (!val)`. `!`는 부정(falsy)의 의미이므로 이 코드는 작동한다.
* 반대로 `if(val)`와 같이 작성하면 truthy로 표현된다.
* 또한 truthy 하다면 true, 아니라면 false로 표현하는 삼항연산자는 다음과 같다.
* `value ? true : false;`

## 클래스
* 기존에는 object나 함수를 활용해서 객체를 만들었다.
* 또한 프로토타입으로 아래 코드와 같이 메서드를 추가하여 상속을 구현했다.
```javascript
function pastClass (myName) {
    this.myName = myName;
    this.pastClass = 'pastClass';
} //객체 선언
pastClass.prototype.getInfo = function() {
    return this.pastClass + ' ' + this.myName;
};  //getInfo 함수 추가

const newObject = new pastClass('kim react');
```
* 그러나 es6에서는 class를 통해서 객체를 만들 수 있다.
```javascript
class pastClass {
    constructor(myName) {
        this.myName = myName;
        this.pastClass = 'pastClass';
    }
    
    getInfo() {
        return this.pastClass + ' ' + this.myName;
    }
}
const newObject = new pastClass('kim react');
```
* class의 내부에서는 선언이 불가능하다.
* 아래와 같은 코드는 에러가 발생한다.
```javascript
class pastClass {
    myName = '';
    pastClass = '';
    constructor(myName) {
        this.myName = myName;
        this.pastClass = 'pastClass';
    }
}
```
* 그러나 cra 보일러플레이트는 최신 js 문법을 지원하므로, es7의 문법인 클래스 내부 선언을 가능케 한다.
```javascript
class NewClass {
    helloNewProperty = '12345';
    
    constructor() {}
}
```

## 상속
* extends 키워드를 통해 상속한다.
* 자식클래스의 생성자에서는 반드시 super() 메서드를 활용해 부모의 생성자를 호출해야한다.
* 이때 부모클래스를 재 선언하게되면 덮어씌워진다.

## this
* `a`라는 객체에 `name`이라는 필드가 있다고 가정한다.
* 이때 내부에 `this.a`를 리턴하는 함수가 있다고 하자.
* 이 함수를 `callName`이라는 새로운 변수에 담아서 호출할때 name은 리턴되지 않는다.
* this는 누가 실행하는 지에 따라 다르기 때문이다. 새 변수는 객체 a와 아무런 상관이 없다.
* 따라서 이 경우 `bind()` 라는 함수를 통해서 변수내에서 사용된 this가 a에 속한 this임을 고정할 수 있다.
```javascript
class testClass {
  constructor() {
    this.a = '12345';
  }

  consoleA() {
    console.log(this.a);
  }
}

const testClassInstance = new testClass();
testClassInstance.consoleA(); //일반적인 방식

const globalConsoleA = testClassInstance.consoleA.bind(testClassInstance);
globalConsoleA(); //고정을 사용한 방식
```

## arrow function
* 화살표 함수를 사용시 인라인 함수일경우 `return`을 생략 할 수 있다.
* 객체를 리턴할경우 소괄호`()`로 감싸서 리턴하면된다.
```javascript
const newFunction = () => {
    return '나는 새로운 함수입니다'
};
const newFunction = () => '나는 새로운 함수입니다';
const newFunction = () => ({ a: '나는객체요소' });
```

## map
* 배열을 쉽게 다룰 수 있는 함수형 표현인 `map`이 있다.
* `map`의 인자로는 배열의 값과 인덱스가 들어간다.
* map이 끝나고 나면 새로운 배열을 리턴한다. 따라서 return문을 사용하여야한다.
```javascript
const a = [1, 2, 3, 4, 5];

const unit = a.map((unit, idx) => {
    console.log(idx);
    return unit - 1;
});
```

## && 연산자
* truthy 인 경우만 판단할때 유용하다.
* 삼항 연산자를 쓸때, false일 경우 null, undefined 등을 리턴하고 싶은 경우가 있다.
* 이때에는 삼항 연산자보다는 &&를 쓰는 것이 좋다.
```javascript
//삼항 연산자 사용
isSepcial ? <b>*</b> : null

//&& 사용
isSpecial && <b>*</b>
const name = animal && animal.name;
```

## || 연산자
* falsy인 경우만 판단할 경우 유용하다.
```javascript
//이 코드를 ||로 바꾼다.
if (!name) {
    return '이름이 없는 동물입니다';
}
return name;

// || 사용
return name || '이름이 없는 동물입니다.';
```

## promise : 비동기
* param1으로 resolve를 받는다. resolve는 성공할 때 호출한다.
* param2로 reject를 받는다. 실패할 경우 reject를 호출하면된다.
* 또한 성공시 무언가 일을 하려면 `.then()`을 호출하여 사용하고
* 실패시 에러를 핸들링 하려면 `.catch()`를 사용하면된다.
```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);  //실패시 호출
        return;
      }
      console.log(value);
      resolve(value);  //성공시 호출
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)  //성공할경우 또 함수를 매개변수로 넣어 호출한다.
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {  //실패할 경우 에러를 핸들링 한다.
    console.error(e);
});
```

## async/await : 비동기
* 함수 선언시 함수 앞에 `async`를 붙인다.
* 그리고 promise 함수를 호출할때 앞에 await을 붙인다.
* 그러면 promise 함수가 끝날때 까지 기다렸다가 다음 작업을 수행한다.
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process().then(() => {
  console.log('작업이 끝났어요!');
});
```
### promise.all
* 동시에 작업을 실행시키고, 모든 값을 가져온다.
* 배열 매개변수를 사용하며, 여기에 함수를 넣으면 된다.
* 리턴값은 구조분해할당으로 가져온다.
* 하나라도 실패하면 다 실패한다.
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};
//getRabbit(), getTurtle도 있다고 하다.

async function process() {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
console.log(dog);
console.log(rabbit);
console.log(turtle);
}

process();
```
### promise.race
* 여러개의 프라미스를 등록해서 가장 빨리 끝난 것 하나만 가져온다.
* 다른 Promise 가 먼저 성공하기 전에 가장 먼저 끝난 Promise 가 실패하면 이를 실패로 간주한다. 즉 가장 빠른 함수의 실패만 찾아낸다.
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍이';
};
//getRabbit(), getTurtle도 있다고 하다.

async function process() {
  const first = await Promise.race([
    getDog(),
    getRabbit(),
    getTurtle()
  ]);
  console.log(first);
}

process();
```