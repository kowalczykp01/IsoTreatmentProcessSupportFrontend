import "../styles/signinmodal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const SignInModal = ({ onClose }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "Email": "",
        "Password": ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async () => {
        try {
            const response = await fetch('https://localhost:7242/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Logowanie powiodło się!');
                const token = await response.text();
                Cookies.set("token", token, { secure: true });
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
            <div className="login-modal-content">
                <h1 className="login-modal-title">Logowanie</h1>
                <input className="login-email-input" type="text" placeholder="Email" name="Email" onChange={handleChange} />
                <input className="login-password-input" type="password" placeholder="Hasło" name="Password" onChange={handleChange} />
                <button className="login-signin-btn" onClick={handleSignIn}>Zaloguj się</button>
            </div>
        </div>
    );
};