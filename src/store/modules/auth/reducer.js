import produce from 'immer';

const INITIAL_STATE = {
  user: null,
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
      case '@auth/TOGGLE_LOADING': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
