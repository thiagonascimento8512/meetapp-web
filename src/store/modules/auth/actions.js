export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function toggleLoading() {
  return {
    type: '@auth/TOGGLE_LOADING',
  };
}
