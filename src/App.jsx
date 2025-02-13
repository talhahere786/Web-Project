import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Payment from "./components/payment";
import Donation from "./components/Donation";
import Success from "./components/Success";
// import PredictionForm from "./components/PredictionForm/PredictionForm";
// import ContactUsForm from "./components/Contact Us/Contact";
// import Form from "./components/Verification Form/Form";
// import AboutUs from "./components/About US/AboutUs";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DonationPage from "./pages/DonationPage"
import Dashboard from "./components/Dashboard";
import DonarDashboardPage from "./pages/DonarDashboardPage";
import AboutUs from "./components/AboutUs";
import AboutUsPage from "./pages/AboutUsPage";
import VerificationPage from "./pages/VerificationPage";

function App() {
  return (
    <>
     
    <Router>
    
      {/* <Header /> */}
      {/* <Footer/> */}
      {/* <DonarDashboardPage/> */}
      {/* <AboutUsPage/> */}
      <VerificationPage/>
      
      <div className="App">
        <Routes>
         
          
          {/* <Route path="/" element={<HomePage />} /> */}
          
          {/* <Route path="/" element={<DonationPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} /> */}



          {/* <Route path="/contact" element={<ContactUsForm />} />
          <Route path="/predict" element={<PredictionForm />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<AboutUs />} /> */}
        </Routes>
      </div>
    
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
