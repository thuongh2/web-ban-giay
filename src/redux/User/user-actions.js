import axios from "axios";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/authenticate`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.token);

        dispatch({
          type: "SIGN_IN",
          payload: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};


export const signOut = () => {
  return (dispatch) => {

    dispatch({
      type: "SIGN_OUT",
    });
  };
};

// export const loadUser = () => {
//   return (dispatch, getState) => {
//     const token = getState().auth.token;
//     if (token) {
//       dispatch({
//         type: "USER_LOADED",
//         token,
//       });
//     } else return null;
//   };
// };
