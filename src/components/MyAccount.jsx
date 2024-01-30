import "../styles/myaccount.css";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MyAccount = () => {

    const [formData, setFormData] = useState({
        "FirstName": "",
        "LastName": "",
        "Email": "",
        "Weight": "",
        "ClimaxDoseInMiligramsPerKilogramOfBodyWeight": "",
        "DailyDose": ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const fetchUserData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7242/api/user/info`,
                {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setFormData({
                    "FirstName": data.firstName,
                    "LastName": data.lastName,
                    "Email": data.email,
                    "Weight": data.weight,
                    "ClimaxDoseInMiligramsPerKilogramOfBodyWeight": data.climaxDoseInMiligramsPerKilogramOfBodyWeight,
                    "DailyDose": data.dailyDose
                });
            } else {
                console.error("Błąd podczas pobierania danych");
            }
        } catch (error) {
            console.error("Wystąpił błąd:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch('https://localhost:7242/api/user/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                console.log('Wylogowano pomyślnie');
            } else {
                console.error('Nie można wylogować');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7242/api/user/info/update', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Dane zostały zaktualizowane');
            } else {
                console.error('Błąd podczas aktualizacji danych');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    };

    return (
        <div>

            <h1 className="myaccount-header">Moje konto</h1>
            <div className="myaccount-top-bar">
                <Link to="/dashboard">
                    <p className="myaccount-homepage">Strona<br />główna</p>
                </Link>
                <Link to="/auth">
                    <h1 className="myaccount-logout" onClick={logout}>Wyloguj<br />się</h1>
                </Link>
            </div>

            <form className="myaccount-form">
                <label className="myaccount-label">Imię</label>
                <input className="myaccount-input" type="text" name="FirstName" value={formData.FirstName} onChange={handleInputChange}/>
                <label className="myaccount-label">Nazwisko</label>
                <input className="myaccount-input" type="text" name="LastName" value={formData.LastName} onChange={handleInputChange}/>
                <label className="myaccount-label">Email</label>
                <input className="myaccount-input" type="text" name="Email" value={formData.Email} onChange={handleInputChange}/>
                <label className="myaccount-label">Waga</label>
                <input className="myaccount-input" type="text" name="Weight" value={formData.Weight} onChange={handleInputChange}/>
                <label className="myaccount-label">Dawka kumulacyjna mg/kg m. c.</label>
                <input className="myaccount-input" type="text" name="ClimaxDoseInMiligramsPerKilogramOfBodyWeight" value={formData.ClimaxDoseInMiligramsPerKilogramOfBodyWeight} readOnly/>
                <label className="myaccount-label">Dzienna dawka leku w mg</label>
                <input className="myaccount-input" type="text" name="DailyDose" value={formData.DailyDose} readOnly/>
                <button className="myaccount-button" onClick={handleFormSubmit}><span className="myaccount-button-span">Aktualizuj</span></button>
            </form>
        </div>
    );
};

export default MyAccount;
