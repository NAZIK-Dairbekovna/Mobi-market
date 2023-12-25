import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
    );
}

export default App;
