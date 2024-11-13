import { createContext, useContext, useReducer } from "react";
import signUpReducer from "../reducer/signUpReducer";

const SignupContext = createContext(null);
const SignupDispatchContext = createContext(null);

const SignupProvider = ({ children }) => {
  const [signupView, dispatch] = useReducer(signUpReducer, false);
  return (
    <SignupContext.Provider value={signupView}>
      <SignupDispatchContext.Provider value={dispatch}>
        {children}
      </SignupDispatchContext.Provider>
    </SignupContext.Provider>
  );
};

export const useSignupView = () => {
  return useContext(SignupContext);
};

export const useSignupViewDispatch = () => {
  return useContext(SignupDispatchContext);
};

export default SignupProvider;
