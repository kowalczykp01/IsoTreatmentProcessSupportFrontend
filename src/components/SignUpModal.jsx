import "../styles/signupmodal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  RegisterValidation  from "../validators/RegisterValidation.jsx"


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

  const [errors, setErrors] = useState({});


  const handleSignUp = async (e) => {
    e.preventDefault();
    const errors = RegisterValidation(formData);
    setErrors(errors);
    console.log(errors);
    if (Object.keys(errors).length === 0){
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
    }
  };

  return (
    <div className="register-modal">
      <p className="register-close" onClick={() => onClose()}>&times;</p>
                <h1 className="register-modal-title">Rejestracja</h1>
                <form className="register-form">
                    <label className="register-label">Imię</label>
                    <input className="register-input" type="text"  name="FirstName" onChange={handleChange} />
                    {errors.FirstName && <p className="register-invalid-field">{errors.FirstName}</p>}
                    <label className="register-label">Nazwisko</label>
                    <input className="register-input" type="text"  name="LastName" onChange={handleChange} />
                    {errors.LastName && <p className="register-invalid-field">{errors.LastName}</p>}
                    <label className="register-label">Email</label>
                    <input className="register-input" type="text"  name="Email" onChange={handleChange} />
                    {errors.Email && <p className="register-invalid-field">{errors.Email}</p>}
                    <label className="register-label">Hasło</label>
                    <input className="register-input" type="password"  name="Password" onChange={handleChange} />
                    {errors.Password && <p className="register-invalid-field">{errors.Password}</p>}
                    <label className="register-label">Potwierdź hasło</label>
                    <input className="register-input" type="password"  name="ConfirmPassword" onChange={handleChange} />
                    {errors.ConfirmPassword && <p className="register-invalid-field">{errors.ConfirmPassword}</p>}
                    <label className="register-label">Waga</label>
                    <input className="register-input" type="text"  name="Weight" onChange={handleChange} />
                    {errors.Weight && <p className="register-invalid-field">{errors.Weight}</p>}
                    <label className="register-label">Dawka kumulacyjna mg/kg m. c.</label>
                    <input className="register-input" type="text"  name="ClimaxDoseInMiligramsPerKilogramOfBodyWeight" onChange={handleChange} />
                    {errors.ClimaxDoseInMiligramsPerKilogramOfBodyWeight && <p className="register-invalid-field">{errors.ClimaxDoseInMiligramsPerKilogramOfBodyWeight}</p>}
                    <label className="register-label">Dzienna dawka leku w mg</label>
                    <input className="register-input" type="text"  name="DailyDose" onChange={handleChange} />
                    {errors.DailyDose && <p className="register-invalid-field">{errors.DailyDose}</p>}
                    <label className="register-label">Data rozpoczęcia kuracji</label>
                    <input className="register-input" type="text"  name="MedicationStartDate" onChange={handleChange} onFocus={(e) => (e.target.type = "date")}/>
                    <button className="register-button" onClick={handleSignUp}><span className="register-button-span">Zarejestruj się</span></button>
                </form>
    </div>
  );
};