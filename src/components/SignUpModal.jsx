import "../styles/signupmodal.css";
import React from "react";

export const SignUpModal = ({onClose}) => {
    return (
        <div className="register-modal">
            <div className="register-modal-header">
                <p className="register-close" onClick={() => onClose()}>&times;</p>
                <h1 className="register-modal-title">Rejestracja</h1>
            </div>                           
            <div className="register-modal-content">
                <input className="register-firstname-input" type="text" placeholder="Imię"/>
                <input className="register-lastname-input" type="text" placeholder="Nazwisko"/>
                <input className="register-email-input" type="text" placeholder="Email"/>
                <input className="register-password-input"type="password" placeholder="Hasło"/>
                <input className="register-confirm-password-input"type="password" placeholder="Powtórz hasło"/>
                <input className="register-weight-input" type="text" placeholder="Waga"/>
                <input className="register-climax-dose-input" type="text" placeholder="Dawka kumulacyjna mg/kg m. c."/>
                <input className="register-daily-dose-input" type="text" placeholder="Dzienna dawka leku w mg"/>
                <input className="register-mediaction-start-date-input"type="text" placeholder="Data rozpoczęcia kuracji"
                onFocus={(e) => (e.target.type = "date")}/>
                <button className="register-signup-btn">Zarejestruj się</button>
            </div>               
        </div>               
    );
};