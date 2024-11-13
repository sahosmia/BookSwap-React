import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../components/book/BookDetails";
import BookOwnerInfo from "../components/book/BookOwnerInfo";
import BookUploadForm from "../components/BookUploadForm";
import Messages from "../components/navbar/Messages";
import Notification from "../components/navbar/Notification";
import Profile from "../components/navbar/Profile";
import Layouts from "../layouts/Layouts";
import Contacts from "../Pages/Contacts";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse";
import Cart from "../components/navbar/Wishlists.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/wishlists",
        element: <Cart />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/profile",
        element: <BookOwnerInfo />,
      },

      {
        path: "/account",
        element: <h1>Account</h1>,
      },
      {
        path: "/dashBoard",
        element: <h1>DashBoard</h1>,
      },
      {
        path: "/logout",
        element: <h1>Logout</h1>,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/massage",
        element: <Messages />,
      },
      {
        path: "/bookuploadform",
        element: <BookUploadForm />,
      },

      // Add more routes here
    ],
  },
]);

export default router;
