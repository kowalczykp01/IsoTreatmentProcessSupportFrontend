import React, { useState, useEffect } from "react";
import "../styles/treatmentprocessinfo.css";

export const TreatmentProcessInfo = () => {


    const [totalTreatmentDays, setTotalTreatmentDays] = useState(null);
    const [treatmentDaysPassed, setTreatmentDaysPassed] = useState(null);
    const [remainingTreatmentDays, setRemainingTreatmentDays] = useState(null);

    const fetchTreatmentData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7242/api/treatment-process/`,
                {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
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
                <ol>
                    <progress value={treatmentDaysPassed/totalTreatmentDays}></progress>
                </ol>
                <ol>Leczenie trwa {totalTreatmentDays} dni</ol>
                <ol>Za Tobą {treatmentDaysPassed} dni</ol>
                <ol>Pozostało {remainingTreatmentDays} dni</ol>
            </ul>
        </div>
    )
} 