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

export function meetappCancelRequest(meetup) {
  return {
    type: '@meetapp/MEETAPP_CANCEL_REQUEST',
    payload: { meetup },
  };
}

export function meetappCancelSuccess(id) {
  return {
    type: '@meetapp/MEETAPP_CANCEL_SUCCESS',
    payload: { id },
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

export function meetappUpdateRequest(data) {
  return {
    type: '@meetapp/MEETAPP_UPDATE_REQUEST',
    payload: { data },
  };
}

export function meetappEditRequest(data) {
  return {
    type: '@meetapp/MEETAPP_EDIT_REQUEST',
    payload: { data },
  };
}

export function meetappEditSuccess(data) {
  return {
    type: '@meetapp/MEETAPP_EDIT_SUCCESS',
    payload: { data },
  };
}
