import "../styles/signupmodal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SignUpModal = ({ onClose }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    "FirstName": "",
    "LastName": "",
    "Email": "",
    "Password": "",
    "ConfirmPassword": "",
    "Weight": "",
    "ClimaxDoseInMiligramsPerKilogramOfBodyWeight": "",
    "DailyDose": "",
    "MedicationStartDate": ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://localhost:7242/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Rejestracja powiodła się!');
        onClose(); // Zamknięcie modala po udanej rejestracji       
        navigate('/email-confirmation');
      } else {
        console.error('Błąd podczas rejestracji');
      }
    } catch (error) {
      console.error('Wystąpił błąd:', error);
    }
  };

  return (
    <div className="register-modal">
      <div className="register-modal-header">
        <p className="register-close" onClick={() => onClose()}>&times;</p>
        <h1 className="register-modal-title">Rejestracja</h1>
      </div>
      <div className="register-modal-content">
        <input className="register-firstname-input" type="text" placeholder="Imię" name="FirstName" onChange={handleChange} />
        <input className="register-lastname-input" type="text" placeholder="Nazwisko" name="LastName" onChange={handleChange} />
        <input className="register-email-input" type="text" placeholder="Email" name="Email" onChange={handleChange} />
        <input className="register-password-input" type="password" placeholder="Hasło" name="Password" onChange={handleChange} />
        <input className="register-confirm-password-input" type="password" placeholder="Powtórz hasło" name="ConfirmPassword" onChange={handleChange} />
        <input className="register-weight-input" type="text" placeholder="Waga" name="Weight" onChange={handleChange} />
        <input className="register-climax-dose-input" type="text" placeholder="Dawka kumulacyjna mg/kg m. c." name="ClimaxDoseInMiligramsPerKilogramOfBodyWeight" onChange={handleChange} />
        <input className="register-daily-dose-input" type="text" placeholder="Dzienna dawka leku w mg" name="DailyDose" onChange={handleChange} />
        <input className="register-mediaction-start-date-input" type="text" placeholder="Data rozpoczęcia kuracji"
          onFocus={(e) => (e.target.type = "date")} name="MedicationStartDate" onChange={handleChange} />
        <button className="register-signup-btn" onClick={handleSignUp}>Zarejestruj się</button>
      </div>
    </div>
  );
};