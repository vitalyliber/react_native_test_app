const initialState=['New York', 'Moscow', 'Kiev', 'Prague', 'Riga', 'Cologne', 'Berlin'];

export default function(state = initialState, action) {
  const {type, data}=action;

  return state;
}