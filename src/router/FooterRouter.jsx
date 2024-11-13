import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../layouts/Footer";
import Contacts from "../pages/Contacts";
import Help from "../pages/Help";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";

const FooterRouter = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/help" element={<Help />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default FooterRouter;
