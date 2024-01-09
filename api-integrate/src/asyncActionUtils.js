// 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아옵니다.
export default function createAsyncDispatcher(type, promiseFunc) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  //나머지 파라미터를 ...rest 로 가져온다.
  async function actionHandler(dispatch, ...rest) {
    dispatch({ type });
    try {
      const data = await promiseFunc(...rest);
      dispatch({
        type: SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: e,
      });
    }
  }

  return actionHandler;
}
