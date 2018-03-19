import { TAGS_DESELECT, TAGS_SELECT } from "../constants/tags";

const initialState=[
  {id: 1, active: false, name: 'New York'},
  {id: 2, active: false, name: 'Moscow'},
  {id: 3, active: false, name: 'Kiev'},
  {id: 4, active: false, name: 'Prague'},
  {id: 5, active: false, name: 'Riga'},
  {id: 6, active: false, name: 'Cologne'},
  {id: 7, active: false, name: 'Berlin'},
];

export default function(state = initialState, action = {}) {
  const { type, tag: chosen_tag } = action;

  switch (type) {
    case TAGS_SELECT:
      return state.map(tag =>
        tag.id === chosen_tag.id ?
          { ...tag, active: true } :
          tag
      );
    case TAGS_DESELECT:
      return state.map(tag =>
        tag.id === chosen_tag.id ?
          { ...tag, active: false } :
          tag
      );
    default:
      return state
  }
}