import "../styles/emailconfirmation.css";
import React from "react";

export default function EmailConfirmation() {
    return (
        <div>
            <h1 className="emailconfirmation-header">Dziękujemy za rejestrację!</h1>
            <p className="emailconfirmation-content">Na Twój adres e-mail została wysłana wiadomość z linkiem potwierdzającym. Prosimy sprawdzić swoją skrzynkę odbiorczą</p>
        </div>
    )
}