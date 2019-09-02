import { produce } from 'immer';

const INITIAL_STATE = {
  meetups: [],
  meetupPreview: null,
};

export default function meetapp(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetapp/MEETAPP_INDEX_SUCCESS': {
        draft.meetups = action.payload.data;
        break;
      }
      case '@meetapp/MEETAPP_CREATE_SUCCESS': {
        draft.meetups.push(action.payload.meetup);
        break;
      }
      case '@meetapp/MEETAPP_VIEW': {
        draft.meetups.map(m => {
          if (m.id === action.payload.id) {
            draft.meetupPreview = m;
          }
          return m;
        });
        break;
      }
      default:
    }
  });
}
