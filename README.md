# React study

## 1. 문서 네비게이션

- [리액트 기초 & 코어]()
- [리액트 스타일]()
- [모던 자바스크립트]()
- [타입스크립트]()

## 2. install

#### node 설치

- 설치 후 npm 위치 변경
- `npm config set prefix "C:\Program Files\nodejs"`

#### csr : react-router-dom

- client side rendering을 원할경우 아래를 설치한다.
- `npm i react-router-dom`

#### 리액트 생성 및 시작

- `npx create-react-app 프로젝트명 --template typescript`
- `npm run start``

#### scss 설치

- `npm i sass`

#### scss 동적 삽입 : classnames

- `npm i classnames`

#### styled-components 설치

- `npm i styled-components`

#### 리액트 icon

- `npm i react-icons`

#### axios

- `npm i axios`

## 3. prettier 설정

- `.prettierrc` 파일을 만든 후
- 아래의 설정을 넣는다. 후에 `ctrl + ,`를 하고 `format on save`를 체크한다.
- 그리고 default formatter를 prettier로 변경한다.
- 후에 파일들에 `ctrl + s` 누르면 끝난다.

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```
