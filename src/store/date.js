import { DATE_SET } from "../constants/date";

const initialState = new Date();

export default function(state = initialState, action = {}) {
  const { type, date } = action;

  switch (type) {
    case DATE_SET:
      return date;
    default:
      return state
  }
}