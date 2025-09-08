import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Ticket from "./components/pages/Ticket";
import HistoryTicket from "./components/pages/HistoryTicket";
import JoinNow from "./components/pages/JoinNow";
import SignUp from "./components/pages/SignUp";
import JoinNow2 from "./components/pages/JoinNow2";
import Cinemas from "./layouts/Cinemas";
import Offers from "./layouts/Offers";
import FoodAndBeverage from "./layouts/FoodAndBeverage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NewsActivity from "./components/pages/NewsActivity";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ComingPage from "./components/pages/ComingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/history" element={<HistoryTicket />} />
        <Route path="/joinnow" element={<JoinNow />} />
        <Route path="joinnow2" element={<JoinNow2 />} />
        <Route path="cinemas" element={<Cinemas />} />
        <Route path="offers" element={<Offers />} />
        <Route path="food&Beverage" element={<FoodAndBeverage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="news-activity" element={<NewsActivity />} />
        <Route path="terms-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/coming" element={<ComingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
