import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
  
      const user = jwtDecode(action.token); 
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    // case "SIGN_OUT":
    //   localStorage.removeItem("token");
    //   return {
    //     token: null,
    //     name: null,
    //     email: null,
    //     _id: null,
    //   };
    default:
      return state;
  }
};

export default authReducer;