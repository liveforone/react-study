# 타입스크립트

- `npm install typescript`
- `npm install ts-node`

### 타입

- 타입 추론이 가능하다. 코틀린 처럼 명시/추론 가능
- 함수에서는 매개변수와 리턴타입을 표시한다.
- 기본적으로 boolean, number, string 등이 있다.
- 배열은 `타입[]` 으로 표현한다.

### 특수 타입

- 객체의 경우 다음과 같이 객체 타입을 지정한다. `pt: { x: number; y: number }`
- 타입 검사를 하고싶지 않다면 `any` 타입을 사용한다.
- 옵셔널 `?`을 사용하여 값이 존재하거나/존재하지 않는 경우에 대해 사용가능하다.
- 타입스크립트는 null인 경우 undefined를 리턴하는데, `!`로 undefined가 아님을 표현할 수 있다.

```typescript
function printName(obj: { first: string; last?: string }) {
  // ...
}
// 둘 다 OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

### 유니언 타입

- 유니언 타입을 사용하면 두개 이상의 타입을 갖을 수 있다. `number | string`
- 다만 유니언의 경우 두 타입에 유효한 메서드등을 사용해야한다.
- 두 타입에 맞추어서 적용할 때에는 `if`문과 `typeof`를 사용해 타입을 판별하고 유효한 메서드들을 적용하면 된다.
- 배열의 경우 `Array.isArray()` 메서드를 사용해도 된다.

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // 이 분기에서 id는 'string' 타입을 가집니다

    console.log(id.toUpperCase()); //만약 타입을 체크하지않고 사용하면 에러가 난다.
  } else {
    // 여기에서 id는 'number' 타입을 가집니다
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log("Hello, " + x.join(" and "));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log("Welcome lone traveler " + x);
  }
}
```

### 타입 만들기

- 타입을 만들어 이름을 붙일 수 있다.

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = number | string;

// 앞서 사용한 예제와 동일한 코드입니다
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

### 인터페이스

- 인터페이스를 활용하면 객체타입을 만드는 또 다른 방법이다.
- type과 interface의 차이점은 type은 확장이 불가하고(값 추가 불가), 인터페이스는 확장이 가능하다.

```typescript
//위의 Point와 동일하다.
interface Point {
  x: number;
  y: number;
}
```

### 클래스

- 접근지정자는 기본적으로`public`이다. `private`과 `protected`도 지원한다.
- `readonly` 접근지정자도 있다. 이는 오로지 읽기만 지원하며, 선언 혹은 생성자에서 초기화해야한다.
- getter/setter도 코틀린과 동일하게 사용하며, 정적팩토리 메서드도 구현가능하다.
- 아래 예제는 정적팩토리메서드를 사용하며, 유의미한 이름을 가진 함수를 만들어서 필드를 수정하는 클래스 예제이다.

```typescript
class Employee {
  private _fullName: string;

  private constructor(fullName: string) {
    this._fullName = fullName;
  }

  static createEmployee(fullName: string) {
    return new Employee(fullName);
  }

  get fullName(): string {
    return this._fullName;
  }

  changeName(newName: string) {
    if (newName && newName.length > 80) {
      throw new Error("fullName has a max length of " + 88);
    }

    this._fullName = newName;
  }
}
```

### enum

- enum은 값을 초기화 할 수 있다.
- 값을 초기화 하게 되면 뒤에 있는 값들도 초기화 해주어야한다.
- 다만 숫자의 경우 앞에서 `1`을 초기화해주면 뒤에 값들은 순서대로 `2, 3, 4`등의 값을 가진다.
- 값이 초기화 되지 않은 enum의 경우 const로 선언이 가능하다. 이 경우 컴파일 과정에서 제거된다.
