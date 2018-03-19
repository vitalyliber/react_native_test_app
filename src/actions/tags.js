import { TAGS_DESELECT, TAGS_SELECT } from "../constants/tags";

export const tags_select = (tag) => dispatch => {
  dispatch({
    type: TAGS_SELECT,
    tag: tag
  })
};

export const tags_deselect = (tag) => dispatch => {
  dispatch({
    type: TAGS_DESELECT,
    tag: tag
  })
};
