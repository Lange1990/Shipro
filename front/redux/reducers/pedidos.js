const initalState = {
    pedidos: [],
  };
  export default (state = initalState, action) => {
    switch (action.type) {
      case "FETCH_PEDIDOS":
        return { ...state, pedidos: action.pedidos };
      default:
        return state;
    }
  };