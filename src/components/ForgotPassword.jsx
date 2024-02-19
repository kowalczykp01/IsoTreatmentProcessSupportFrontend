import { useState } from "react";
import "../styles/forgotpassword.css";
import { Link } from 'react-router-dom';
import { ErrorModal } from "./ErrorModal.jsx"
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const handleErrorModalClick = () => {
        setErrorModalOpen(false);
    };

    const [error, setError] = useState(null);
    let email;

    const handleChange = (e) => {
        email = e.target.value;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://localhost:7242/api/user/forgot-password?email=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                console.log('Email został wysłany');
                navigate('/success-screen', { state: { header: "Link do zmiany hasła wysłany", content: "Sprawdź skrzynkę mailową" } });
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
    };

    return (
        <div>
            {errorModalOpen && setErrorModalOpen && (
                <ErrorModal onClose={handleErrorModalClick} errorMessage={error} />
            )}
            <h1 className="forgot-password-header">Zapomniałem hasła</h1>
            <div className="forgot-password-top-bar">
                <Link to="/auth">
                    <p className="forgot-password-back">Powrót</p>
                </Link>
            </div>
            <form className="forgot-password-form">
                <label className="forgot-password-label">Podaj adres email</label>
                <input className="forgot-password-input" onChange={handleChange} />
                <button className="forgot-password-button" onClick={handleSubmit}>
                    <span className="forgot-password-button-span">Potwierdź</span>
                </button>
            </form>
        </div>
    )
}