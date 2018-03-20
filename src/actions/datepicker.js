import { DATEPICKER_CLOSE, DATEPICKER_OPEN } from "../constants/datepicker";

export const datepicker_open = () => dispatch => {
  dispatch({
    type: DATEPICKER_OPEN
  })
};

export const datepicker_close = () => dispatch => {
  dispatch({
    type: DATEPICKER_CLOSE
  })
};
