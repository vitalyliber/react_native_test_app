import { DATEPICKER_OPEN } from "../constants/datepicker";
import { DATEPICKER_CLOSE } from "../constants/datepicker";

const initialState = false;

export default function(state = initialState, action = {}) {
  const { type} = action;

  switch (type) {
    case DATEPICKER_OPEN:
      return true;
    case DATEPICKER_CLOSE:
      return false;
    default:
      return state
  }
}