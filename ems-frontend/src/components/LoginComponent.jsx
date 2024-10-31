import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login here
        if (email === 'nghi@gmail.com' && password === '1234') {
            alert('Đăng nhập thành công!');
            setIsLoggedIn(true); // Update logged-in state
            navigate('/home'); // Redirect to home
        } else {
            setError('Email hoặc mật khẩu không đúng.');
        }
    };

    return (
        <div className="container">
            <div className='form'>
                <div className='form-title'>
                 <h2>LOGIN FORM</h2>
                </div>
                <div className='form-content'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Email:</label>
                             <input
                              type="email"
                              value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                              />
                        </div>
                <        div className="form-group">
                              <label>Password:</label>
                              <input
                               type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required
                               />
                         </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">LOGIN</button>
                <label>Forgot password?</label>
                <div>Do not have account? <Link to="/register">Register now</Link></div>
            </form>
            </div>      
        </div>
    </div>
    );
};

export default LoginComponent;
