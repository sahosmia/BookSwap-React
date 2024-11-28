import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { AuthProvider } from "./context/AuthContext";
import LoginModalProvider from "./context/LoginModalContext";
import RegisterModalProvider from "./context/RegisterModalContext";

function App() {
  return (
    <AuthProvider>
      <RegisterModalProvider>
        <LoginModalProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            newestOnTop
            theme="dark"
          />
        </LoginModalProvider>
      </RegisterModalProvider>
    </AuthProvider>
  );
}

export default App;
