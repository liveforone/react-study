# style

> 리액트의 스타일에 대해 다룹니다.

## css 폰트

- css파일 최상단에 적용한다.

## css

- hover : 마우스 올릴때
- active : 클릭할때

## css 셀렉터

- 태그 선택자 : `태그 {css코드}`
- 클래스 선택자 : `.클래스 {css 코드}` 혹은 `태그.클래스 {css 코드}`
- id 선택자 : `#id {css 코드}` 혹은 `태그#id {css 코드}`

## sccss

- scss에서 `&`는 `this`를 의미한다. `& + &`문법은 둘이 붙어있을때를 의미한다.
- 반복되는 코드는 @mixin 을 이용하면된다.

```css
//선언
@mixin button-color($color) {
  background: $color;
  &:hover {
    background: lighten($color, 10%);
  }
  &:active {
    background: darken($color, 10%);
  }
}

//사용
@include button-color($blue);
```

## scss 동적 삽입 : classnames

- css에 동적으로 값을 넣고 싶다면 아래와 같이 한다.
- `className={['Button', size].join(' ')}`
- Button className이고, css에서는 `.Button`에 `size` 값을 동적으로 넣겠다라는 의미이다.
- 그러나 classnames 라이브러리를 쓰면 아래와 같이 할 수 있다.
- `className={classNames('Button', size)}`

```javascript
import classNames from "classnames";

function Button({ children, size }) {
  return <button className={classNames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
}; //버튼의 기본크기는 medium
```

- scss에는 아래와 같이 정의 되어있을때 size 매개변수에 따라 값만 바꾸어주면 된다. 일단은 small만 작성하였다.

```javascript
&.small {
  height: 1.75rem;
  font-size: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

## styled-components

- css를 js에서 쓸수있게 해줌
- 글로벌 스타일을 원할경우 `createGlobalStyle`을 사용하면 글로벌 스타일 컴포넌트를 만들어준다.

```javascript
styled.원하는태그`css값, js를 쓸땐 ${}`

styled.createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

## 리액트 icon

- 아이콘을 쉽게 쓸 수 있도록 해준다.
- `Font Awesome` 사이트에서 원하는 아이콘을 클릭하여 아이콘 이름을 복사한 후
- `import {아이콘이름} from 'react-icon/fa`를 import하고
- `<아이콘 이름/>` 같이 사용하면 된다.
- font awesome의 경우 `fa`를 붙이지만 가져올 아이콘에 따라서 `/`뒤에 오는 단어가 달라질 수 있다.
