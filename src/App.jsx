import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Payment from "./components/payment";
import Donation from "./components/Donation";
import Success from "./components/Success";
import FileUpload from "./components/fileUpload";
import ViewFiles from "./components/DisplayFiles";
import DonationPage from "./pages/DonationPage";
import Failure from "./components/Failure";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/file" element={<FileUpload />} />
        <Route path="/fileview" element={<ViewFiles />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failure />} />
      </Routes>
    </div>
  );
}

export default App;
