import "../styles/successscreen.css";
import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SuccessScreen() {
    const location = useLocation();
    const header = location.state.header;
    const content = location.state.content;

    return (
        <div>
            <div className="forgot-password-top-bar">
                <Link to="/auth">
                    <p className="forgot-password-back">Strona główna</p>
                </Link>
            </div>
            <h1 className="success-screen-header">{header}</h1>
            <p className="success-screen-content">{content}</p>
        </div>
    )
}