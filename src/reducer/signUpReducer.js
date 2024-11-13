const signUpReducer = (state, action) => {
  switch (action.type) {
    case "sign_up_true": {
      return true;
    }

    case "sign_up_false": {
      return false;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default signUpReducer;
