const loginReducer = (state, action) => {
  switch (action.type) {
    case "login_true": {
      return true;
    }

    case "login_false": {
      return false;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default loginReducer;
