import React, {useState} from 'react'

const RegisterComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [navigate] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng kí tại đây
        if (email === '123@gmail.com' && password === '123') {
            alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
            navigate('/'); 
        } else {
            setError('Email hoặc mật khẩu không đúng.');
        }
    };

    return (
        <div className='form'>
            <h2>REGISTER FORM</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" onClick='/home'>REGISTER</button>
            </form>
        </div>
    );
};


export default RegisterComponent;