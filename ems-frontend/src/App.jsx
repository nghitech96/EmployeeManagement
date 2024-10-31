import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import LoginComponent from './components/LoginComponent'; // Fixed import
import RegisterComponent from './components/RegisterComponent'; // Ensure you have this import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

    return (
        <BrowserRouter>
            <HeaderComponent />

            <Routes>
                <Route path="/" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<RegisterComponent setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={isLoggedIn ? <ListEmployeeComponent /> : <Navigate to="/" />} />
                <Route path="/employees" element={isLoggedIn ? <ListEmployeeComponent /> : <Navigate to="/" />} />
                <Route path="/add-employee" element={isLoggedIn ? <EmployeeComponent /> : <Navigate to="/" />} />
                <Route path="/edit-employee/:id" element={isLoggedIn ? <EmployeeComponent /> : <Navigate to="/" />} />
            </Routes>

            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;
