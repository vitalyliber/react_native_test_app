import { DATE_SET } from "../constants/date";

export const date_set = (newDate) => dispatch => {
  dispatch({
    type: DATE_SET,
    date: newDate
  })
};
