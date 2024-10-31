import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return (
        <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.javaguides.net">Management System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Đăng nhập</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Đăng ký</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default HeaderComponent