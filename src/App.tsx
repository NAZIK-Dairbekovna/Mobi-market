import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    );
}

export default App;
