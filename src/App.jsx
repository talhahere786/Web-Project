import React from "react";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
// import Signup from "./components/Signup/signup";
// import PredictionForm from "./components/PredictionForm/PredictionForm";
// import ContactUsForm from"./components/Contact Us/Contact";
import { Route,Routes } from "react-router-dom";
// import Form from "./components/Verification Form/Form"
// import AboutUs from "./components/About US/AboutUs"
// import HomePage from "./pages/HomePage";
import Payment from "./components/payment"
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/contact" element={<ContactUsForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/predict" element={<PredictionForm />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<AboutUs />} />
         */}
      </Routes>
    </div>
  );
}

export default App;
