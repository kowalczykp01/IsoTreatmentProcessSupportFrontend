import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import { ListWrapper } from "./ListWrapper";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const logout = (e) => {
        Cookies.remove('token');               
   }

    return (
        <div className="dashboard-mainwrapper">
            <div className="dashboard-header">
                <p className="dashboard-myaccount">Moje konto</p>
                <Link to="/auth">
                    <p className="dashboard-logout" onClick={logout}>Wyloguj się</p>
                </Link>                
            </div>
            <ListWrapper></ListWrapper>
        </div>
    );
};

export default Dashboard;