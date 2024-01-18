import "../styles/emailconfirmation.css";
import React from "react";

export default function EmailConfirmation (){
    return (
        <div className="email-confirmation-mainwrapper">
            <h1 className="thanks-for-your-registration">Dziękujemy za rejestrację!</h1>
            <p className="email-confirmation-content">Na Twój adres e-mail została wysłana wiadomość z linkiem potwierdzającym. Prosimy sprawdzić swoją skrzynkę odbiorczą</p>
        </div>
    )
}