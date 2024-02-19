import "../styles/errormodal.css";
import React, { useState } from "react";

export const ErrorModal = ({ onClose, errorMessage }) => {

    return (
        <div className="error-modal">
            <p className="error-close" onClick={() => onClose()}>&times;</p>
                <h1 className="error-modal-title">Błąd</h1>
                <p className="error-content">{errorMessage}</p>        
        </div>
    );
};