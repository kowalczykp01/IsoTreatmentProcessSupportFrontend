import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import "../styles/treatmentprocessinfo.css";

export const TreatmentProcessInfo = () => {
    const token = Cookies.get('token');
    var decodedToken = jwtDecode(token);
    var userId = decodedToken[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];

    const [totalTreatmentDays, setTotalTreatmentDays] = useState(null);
    const [treatmentDaysPassed, setTreatmentDaysPassed] = useState(null);
    const [remainingTreatmentDays, setRemainingTreatmentDays] = useState(null);

    const fetchTreatmentData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7242/api/treatment-process/` + userId,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                const { totalTreatmentDays, treatmentDaysPassed, remainingTreatmentDays} = await response.json();
                setTotalTreatmentDays(totalTreatmentDays);
                setTreatmentDaysPassed(treatmentDaysPassed);
                setRemainingTreatmentDays(remainingTreatmentDays);
            } else {
                console.error("Błąd podczas pobierania danych");
            }
        } catch (error) {
            console.error("Wystąpił błąd:", error);
        }
    };

    useEffect(() => {
        fetchTreatmentData();
    }, []);

    return (
        <div className="treatmentprocessinfo-wrapper">
            <ul>
                <ol>Leczenie trwa {totalTreatmentDays} dni</ol>
                <ol>Za Tobą {treatmentDaysPassed} dni</ol>
                <ol>Pozostało {remainingTreatmentDays} dni</ol>
            </ul>
        </div>
    )
} 