import { createContext, useContext, useReducer } from "react";
import loginReducer from "../reducer/loginReducer";

const LoginContext = createContext(null);
const LoginDispatchContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [loginView, dispatch] = useReducer(loginReducer, false);
  return (
    <LoginContext.Provider value={loginView}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

export const useLoginView = () => {
  return useContext(LoginContext);
};

export const useLoginViewDispatch = () => {
  return useContext(LoginDispatchContext);
};

export default LoginProvider;
