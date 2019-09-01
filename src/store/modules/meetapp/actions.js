export function meetappCreateRequest(data) {
  return {
    type: '@meetapp/MEETAPP_CREATE_REQUEST',
    payload: { data },
  };
}
