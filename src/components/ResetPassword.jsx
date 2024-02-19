import "../styles/resetpassword.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorModal } from "./ErrorModal.jsx"

export default function ResetPassword() {
    const navigate = useNavigate();

    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const handleErrorModalClick = () => {
        setErrorModalOpen(false);
    };

    const [error, setError] = useState(null);

    const searchParams = new URLSearchParams(document.location.search);
    const token = searchParams.get('token');

    const [formData, setFormData] = useState({
        "NewPassword": "",
        "ConfirmNewPassword": ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://localhost:7242/api/user/reset-password?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Hasło zostało zmienione');
                navigate('/success-screen', {state: { header: "Hasło zostało zmienione", content: "Możesz się ponownie zalogować"}});
            } else {
                const text = await response.text();
                console.error(text);
                setError(text);
                setErrorModalOpen(true);
            }
        }
        catch (error) {
            console.log('Wystąpił błąd podczas łączenia z serwerem');
            setError('Wystąpił błąd podczas łączenia z serwerem');
            setErrorModalOpen(true);
        }
    }

    return (
        <div>
            {errorModalOpen && setErrorModalOpen && (
                <ErrorModal onClose={handleErrorModalClick} errorMessage={error} />
            )}
            <h1 className="reset-password-header">Zmiana hasła</h1>
            <div className="reset-password-top-bar">
            </div>
            <form className="reset-password-form">
                <label className="reset-password-label">Podaj nowe hasło</label>
                <input className="reset-password-input" type="password" name="NewPassword" onChange={handleChange} />
                <label className="reset-password-label">Potwierdź nowe hasło</label>
                <input className="reset-password-input" type="password" name="ConfirmNewPassword" onChange={handleChange} />
                <button className="reset-password-button" onClick={handleChangePassword}>
                    <span className="reset-password-button-span">Zmień hasło</span>
                </button>
            </form>
        </div>
    )
}