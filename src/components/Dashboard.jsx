import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import { EntryListWrapper } from "./EntryListWrapper";
import { ReminderListWrapper } from "./ReminderListWrapper";
import { TreatmentProcessInfo } from "./TreatmentProcessInfo";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {

    /*const token = Cookies.get('token');
    var decodedToken = jwtDecode(token);
    var userName = decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
    ];*/

    const logout = async() => {
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

    return (
        <div className="dashboard-mainwrapper">
            <div className="dashboard-header">
                <p className="dashboard-myaccount">Moje konto</p>
                <Link to="/auth">
                    <p className="dashboard-logout" onClick={logout}>Wyloguj się</p>
                </Link>
            </div>
            <div className="dashboard-main-content">
                <div className="dashboard-main-content-element">
                    <EntryListWrapper></EntryListWrapper>
                </div>
                <div className="dashboard-main-content-element"> 
                    <ReminderListWrapper></ReminderListWrapper>
                </div>
                <div className="dashboard-main-content-element">
                    <TreatmentProcessInfo></TreatmentProcessInfo>
                </div>               
            </div>              
        </div>
    );
};

export default Dashboard;