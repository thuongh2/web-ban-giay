import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
  
      const user = jwtDecode(action.payload.token); 

      return {
        ...state,
        token: action.payload.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    // 
    case "REGISTER":
      if(action.payload.status === 201)
        return true;
      return false;

    default:
      console.log("no")
      return state;
  }
};

export default authReducer;