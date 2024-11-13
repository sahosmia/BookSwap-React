import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import SignupProvider from "./context/SignupContext";
import LoginProvider from "./context/loginContext";

function App() {
  return (
    <SignupProvider>
      <LoginProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          newestOnTop
          theme="dark"
        />
      </LoginProvider>
    </SignupProvider>
  );
}

export default App;
