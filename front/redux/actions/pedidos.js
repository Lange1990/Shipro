import axios from "axios";

export const fetchPedidos = (userId, token) => (dispatch) => {
  return axios

    .get(`https://shipro.pro/api/ar/envios/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      // console.log("pedidos Axios",data.data)
      dispatch({
        type: "FETCH_PEDIDOS",
        pedidos: data.data,
      });
    })
    .catch((err) => console.log(err));
};
