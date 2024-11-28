import { createContext, useContext, useState } from "react";

const RegisterModalContext = createContext(null);

const RegisterModalProvider = ({ children }) => {
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <RegisterModalContext.Provider value={{ registerModal, setRegisterModal }}>
      {children}
    </RegisterModalContext.Provider>
  );
};

export const useRegisterModal = () => useContext(RegisterModalContext);

export default RegisterModalProvider;
