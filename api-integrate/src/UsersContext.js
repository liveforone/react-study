import React, { createContext, useReducer, useContext } from 'react';
import createAsyncDispatcher from './asyncActionUtils';
import * as api from './api';

//users api와 user/{id} api에 대응하기 위한 두개의 state
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

//성공 시의 상태를 만드는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

//커스텀 context provider
export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

//context로 wrapping 안했을때 에러발생
function usersContextValidator(context, errorMessage) {
  if (!context) {
    throw new Error(errorMessage);
  }
}

//커스텀 훅
export function useUsersState() {
  const state = useContext(UsersStateContext);
  usersContextValidator(state, 'Cannot find UsersProvider');
  return state;
}

//커스텀 훅
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  usersContextValidator(dispatch, 'Cannot find UsersProvider');
  return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
