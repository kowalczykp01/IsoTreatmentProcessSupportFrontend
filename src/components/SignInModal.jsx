import "../styles/signinmodal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export const SignInModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "Email": "",
        "Password": ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7242/api/user/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Logowanie powiodło się!');
                /*const token = await response.text();
                Cookies.set("token", token, { secure: true });*/
                onClose();
                navigate('/dashboard');
            } else {
                console.error('Błąd podczas logowania');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    };

    return (
        <div className="login-modal">
            <p className="login-close" onClick={() => onClose()}>&times;</p>
                <h1 className="login-modal-title">Logowanie</h1>
                <form className="login-form">
                    <label className="login-label">Email</label>
                    <input className="login-input" type="text"  name="Email" onChange={handleChange} />
                    <label className="login-label">Hasło</label>
                    <input className="login-input" type="password"  name="Password" onChange={handleChange} />
                    <Link to="/forgot-password"><label className="login-forgot-password-label">Zapomniałeś hasła?</label></Link>
                    <button className="login-button" onClick={handleSignIn}><span className="login-button-span">Zaloguj się</span></button>
                </form>               
        </div>
    );
};