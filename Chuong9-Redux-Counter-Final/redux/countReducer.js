// redux/countReducer.js
const initialState = {
  count: 0,
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECRESE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};