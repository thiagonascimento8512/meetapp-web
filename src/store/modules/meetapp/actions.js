export function meetappCreateRequest(data) {
  return {
    type: '@meetapp/MEETAPP_CREATE_REQUEST',
    payload: { data },
  };
}

export function meetappCreateSuccess(meetup) {
  return {
    type: '@meetapp/MEETAPP_CREATE_SUCCESS',
    payload: { meetup },
  };
}

export function meetappView(id) {
  return {
    type: '@meetapp/MEETAPP_VIEW',
    payload: { id },
  };
}

export function meetappIndexRequest() {
  return {
    type: '@meetapp/MEETAPP_INDEX',
  };
}

export function meetappIndexSuccess(data) {
  return {
    type: '@meetapp/MEETAPP_INDEX_SUCCESS',
    payload: { data },
  };
}
