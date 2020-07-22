import { put, call, takeEvery } from "redux-saga/effects";
import * as userAPI from "../Api/User";
import { handleAction, actionSaga } from "../lib/utils";

// 액션 타입선언
const GET_USERS = "user/GET_USERS";
const GET_USERS_SUCCESS = "user/GET_USERS_SUCCESS";
const GET_USERS_ERROR = "user/GET_USERS_ERROR";

const GET_USER_DETAIL = "user/GET_USER_DETAIL";
const GET_USER_DETAIL_SUCCESS = "user/GET_USER_DETAIL_SUCCESS";
const GET_USER_DETAIL_ERROR = "user/GET_USER_DETAIL_ERROR";

// 액션생성함수 선언.
// 실제 호출은 getUsers 만 하고 success, error 은 getUsersSaga 함수에서 호출함.
export const getUsers = () => ({ type: GET_USERS });

export function* userSaga() {
  yield takeEvery(
    GET_USERS,
    actionSaga(userAPI.getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR)
  );
  // yield takeEvery(
  //   GET_USER_DETAIL,
  //   actionSaga(
  //     userAPI.getUserDetail,
  //     GET_USER_DETAIL_SUCCESS,
  //     GET_USER_DETAIL_ERROR
  //   )
  // );
}

// saga 함수 생성
function* getUsersSaga() {
  try {
    const users = yield call(userAPI.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      data: users,
    });
  } catch (err) {
    yield put({
      type: GET_USERS_ERROR,
      error: true,
      data: err,
    });
  }
}

// saga 함수 생성
function* getUserDetailSaga(action) {
  const id = action.data;

  try {
    // yield call 로 api 호출시 파라미터는 두번째 인자로 넘겨주면 된다.
    const user = yield call(userAPI.getUserDetail, id);
    yield put({
      type: GET_USER_DETAIL_SUCCESS,
      data: user,
      meta: id,
    });
  } catch (err) {
    yield put({
      type: GET_USER_DETAIL_ERROR,
      error: true,
      data: err,
      meta: id,
    });
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USER_DETAIL, getUserDetailSaga);
  yield takeEvery("ADD_USER", AddSaga);
  yield takeEvery("DEL_USER", AddSaga);
  yield takeEvery("UP_USER", AddSaga);
}

function* AddSaga() {
  try {
    // yield call 로 api 호출시 파라미터는 두번째 인자로 넘겨주면 된다.
    const user = yield call(userAPI.getUsers);
    yield put({
      type: "ADD_USER_SUCCESS",
      data: user,
    });
  } catch (err) {}
}

// 초기상태 선언
const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {},
};

// 리듀서 생성
const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleAction(GET_USERS, "users")(state, action);
    case GET_USER_DETAIL:
      return {
        ...state,
        user: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_USER_DETAIL_ERROR:
      return {
        ...state,
        user: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case "ADD_USER":
      userAPI.getAdd(action.name, action.nick, action.desc);
      return state;
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        users: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case "DEL_USER":
      userAPI.getDel(action.id);
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: null,
        },
      };
    case "UP_USER":
      userAPI.getUp(action.id, action.name, action.nickName, action.desc);
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: null,
        },
      };
    default:
      return state;
  }
};

// 액션생성함수 선언.
export const getUserDetail = (id) => ({ type: GET_USER_DETAIL, data: id });

export default user;
