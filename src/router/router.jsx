import { createBrowserRouter } from "react-router-dom";
import BookUploadForm from "../Pages/BookUploadForm";
import Messages from "../Pages/Messages";
import Notification from "../components/navbar/Notification";
import Profile from "../Pages/Profile";
import Layouts from "../layouts/Layouts";
import Contacts from "../Pages/Contacts";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse";
import ProtectedRoute from "../components/ProtectedRoute";
import Wishlists from "../Pages/Wishlists";
import BookDetails from "../Pages/BookDetails";
import BookUpdatePage from "../Pages/BookUpdatePage";
import Search from "../Pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/messages/:conversationId",
        element: <Messages />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/wishlists",
        element: <Wishlists />,
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
        path: "/book/:slug",
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
      {
        path: "/book/edit/:slug",
        element: <BookUpdatePage />,
      },

      // Add more routes here
    ],
  },
]);

export default router;
