import "../styles/signinmodal.css";
import React from "react";

export const SignInModal = ({onClose}) => {
    return (
        <div className="login-modal"> 
            <p className="login-close" onClick={() => onClose()}>&times;</p>               
            <div className="login-modal-content">
                <h1 className="login-modal-title">Logowanie</h1>
                <input className="login-email-input" type="text" placeholder="Email"/>
                <input className="login-password-input"type="password" placeholder="Hasło"/>
                <button className="login-signin-btn">Zaloguj się</button>
            </div>               
        </div>               
    );
};