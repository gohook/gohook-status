export const SET_PATH = 'SET_PATH';

const initialState = {
  path: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case SET_PATH:
    return {
      ...state,
      path: action.path,
    };
  default:
    return state;
  }
}
export function setPath(path) {
  return {
    type: SET_PATH,
    path,
  };
}
