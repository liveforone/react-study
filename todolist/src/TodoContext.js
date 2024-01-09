import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function todoValidator(context, errorMessage) {
  if (!context) {
    throw new Error(errorMessage);
  }
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  todoValidator(context, 'Cannot find TodoProvider');
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  todoValidator(context, 'Cannot find TodoProvider');
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  todoValidator(context, 'Cannot find TodoProvider');
  return context;
}

/*
해당 훅을 사용하려면 사용하려는 컴포넌트를 TodoProvider로 감싸주어야한다.
위의 커스텀 context를 커스텀 훅으로 만들어 두었다. 
이렇게 하면 아래와 같이 사용하면 된다.

import React from 'react';
import { useTodoState, useTodoDispatch } from '../TodoContext';

function Sample() {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  return <div>Sample</div>;
}
*/
