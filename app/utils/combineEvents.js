export default function combineEvents(reducers, initialState) {
  return (state = initialState, action) => {
    if (Reflect.has(reducers, action.type)) {
      return reducers[action.type](state, action);
    } else if (Reflect.has(reducers, 'default')) {
      return reducers.default(state, action);
    }
    return state;
  };
}
