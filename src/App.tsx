import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    );
}

export default App;
