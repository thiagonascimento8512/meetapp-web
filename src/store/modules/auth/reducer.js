import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  token: null,
  signed: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.user = null;
        draft.signed = null;
        break;
      }
      case '@auth/TOGGLE_LOADING': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
