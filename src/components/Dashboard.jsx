import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import { EntryListWrapper } from "./EntryListWrapper";
import { ReminderListWrapper } from "./ReminderListWrapper";
import { TreatmentProcessInfo } from "./TreatmentProcessInfo";
import { Link } from 'react-router-dom';

const Dashboard = () => {

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
                <Link to="/myaccount">
                    <p className="dashboard-myaccount">Moje konto</p>
                </Link>               
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