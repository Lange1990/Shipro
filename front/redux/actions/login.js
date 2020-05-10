import axios from "axios";

export const loginUser = (user, pass) => (dispatch) => {
  return axios
    .post("https://shipro.pro/oauth/token", {
      grant_type: "password",
      client_id: "5",
      client_secret: "963GYL9ByC0xvtVCZovAPGkfvidvJtzUlR12HW3q",
      username: user,
      password: pass,
    })
    .then((retUser) => {
      const obj = retUser.data;
      //console.log("Data User", obj.access_token);
      //obj.message es donde nos sale el error para poder mostrarlo
      if (obj) {
        //Yo aca devuelvo errores

        return axios.post("https://shipro.pro/api/ar/user", obj, {
          headers: {
            "Authorization": `Bearer ${obj.access_token}`
          }
        }).then((data) => {
          let infoUser = data.data
          infoUser.token = obj.access_token
          // console.log(infoUser, "INFO USER")
         dispatch({
            type: "LOGIN_USER",
            user: infoUser,
          });
        });
      }
    })
    .catch((err) => {
      let mess = ""
      console.log("ERR.MESSAGE",err)
      return err});
};
