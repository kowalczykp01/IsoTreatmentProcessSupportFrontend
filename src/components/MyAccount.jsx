import "../styles/myaccount.css";
import React, { useEffect, useState } from "react";

const AccountActivation = () => {   

    return (
        <div>
            <h1 className="myaccount-header">Moje konto</h1>
            <form className="myaccount-form">
                <label className="myaccount-label">Imię</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>
                <label className="myaccount-label">Nazwisko</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>
                <label className="myaccount-label">Email</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>
                <label className="myaccount-label">Waga</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>
                <label className="myaccount-label">Dawka kumulacyjna mg/kg m. c.</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>
                <label className="myaccount-label">Dzienna dawka leku w mg</label>
                <input className="myaccount-input" type="text" name="myaccount-name"/>                
            </form>
        </div>       
    );
};

export default AccountActivation;
