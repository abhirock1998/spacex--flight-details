export const InitialState = {};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_YEAR":
      return { ...state, year: action.year };
    case "SET_LAUNCH":
      return { ...state, launch: action.value };
    case "SET_LANDING":
      return { ...state, land: action.value };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
