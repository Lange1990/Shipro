const initalState = {
  user: {},
};
export default (state = initalState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.user };
    case "HIDE_LOADER":
      return { ...state, loader: false };
    default:
      return state;
  }
};
