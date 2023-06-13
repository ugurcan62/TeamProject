import {Event_ACTION_TYPE} from "./Type";

const addEvent = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: Event_ACTION_TYPE.event,
      payload: [obj],
    });
  };
};

export const BookingApp = {
  addEvent,
};
