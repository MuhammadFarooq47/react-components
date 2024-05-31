// eslint-disable-next-line no-unused-vars
import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home/index";
import LoginForm from "../screens/Login/index";
import SignupForm from "../screens/Signup/index";


const Navigation = () =>{
return(
    <Routes>
        <Route path="/" element= {
            <Suspense>
                <Home />
            </Suspense>
        } />

        <Route path="/login" element={
            <Suspense>
                <LoginForm />
            </Suspense>
        } />
        <Route path="signup" element={
            <Suspense>
                <SignupForm />
            </Suspense>
        } />
    </Routes>
)
};


export default Navigation;