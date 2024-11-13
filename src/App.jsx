import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import SignupProvider, { useSignupView } from "./context/SignUpContext";
import LoginProvider, { useLoginView } from "./context/loginContext";
import SignUpModal from "./components/SignUpModal";
import LoginModel from "./components/LoginModel";
import router from "./router/router";

function App() {
  const signupView = useSignupView();
  const loginView = useLoginView();
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
