import { legacy_createStore as createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수입니다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
store.subscribe(() => console.log(store.getState()));

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: 'wow' }));
