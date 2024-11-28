import { createContext, useContext, useState } from "react";

const LoginModalContext = createContext(null);

const LoginModalProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <LoginModalContext.Provider value={{ loginModal, setLoginModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModal = () => useContext(LoginModalContext);

export default LoginModalProvider;
