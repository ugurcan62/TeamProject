import {options} from "../../Utilities/saved";
import {Event_ACTION_TYPE} from "./Type";

const INITIAL_STATE = {
  events: options,
};

const BookingApp = (state = INITIAL_STATE, action) => {
  if (action.type === Event_ACTION_TYPE.event) {
    let allEvents = action.payload.concat(state.events);
    return {
      ...state,
      events: allEvents,
    };
  }
  return state;
};

export default BookingApp;
