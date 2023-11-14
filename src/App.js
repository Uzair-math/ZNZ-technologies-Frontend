import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ImageComp from "./components/ImageComp";
import ButtonComp from "./components/ButtonComp";
import Signin from "./pages/Signin";
import Links from "./components/Links";
import TextInput from "./components/global_inputs/TextInput";
import Signup from "./pages/Signup";
import DashBoard from "./components/dashboard/DashBoard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
       <Routes>
        <Route path="/" element={<DashBoard/>} exact/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      
       {/* ahmad  */}
       </Routes>
    </React.Fragment>
  );
}

export default App;
