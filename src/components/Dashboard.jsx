import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
    return (
        <div className="dashboard-mainwrapper">
            <div className="dashboard-header">
                <p className="dashboard-myaccount">Moje konto</p>
                <p className="dashboard-logout">Wyloguj się</p>
            </div>
        </div>
    );
};

export default Dashboard;