import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import { ListWrapper } from "./ListWrapper";

const Dashboard = () => {
    return (
        <div className="dashboard-mainwrapper">
            <div className="dashboard-header">
                <p className="dashboard-myaccount">Moje konto</p>
                <p className="dashboard-logout">Wyloguj się</p>
            </div>
            <ListWrapper></ListWrapper>
        </div>
    );
};

export default Dashboard;