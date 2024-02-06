import "../styles/emailconfirmation.css";
import React, { useEffect, useState } from "react";

const AccountActivation = () => {
    const searchParams = new URLSearchParams(document.location.search);
    const token = searchParams.get('token');

    const [activationStatus, setActivationStatus] = useState(null);

    useEffect(() => {
        const activateAccount = async () => {
            try {
                const response = await fetch(`https://localhost:7242/api/user/confirmEmail?emailConfirmationToken=${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    console.log('Email został potwierdzony');
                    setActivationStatus('success');
                } else {
                    if (response.text() === 'Email has already been confirmed')
                    console.error('Email został już wcześniej potwierdzony');
                    setActivationStatus('alreadyConfirmed');
                }
            } catch (error) {
                console.error('Wystąpił błąd: ', error);
                setActivationStatus('error');
            }
        };

        activateAccount();
    }, [token]);

    return (
        <div>
            <h1 className="emailconfirmation-header">
                {activationStatus === 'success'
                    ? 'Email został potwierdzony'
                    : 'Wystąpił błąd.'}
            </h1>
            {activationStatus === 'success' && (
                <p className="emailconfirmation-content">
                    Twoje konto zostało aktywowane. Możesz się teraz zalogować
                </p>
            )}
            {activationStatus === 'alreadyConfirmed' && (
                <p className="emailconfirmation-content">
                    Email został już wcześniej potwierdzony.
                </p>
            )}
            {activationStatus === 'error' && (
                <p className="emailconfirmation-content">
                    Spróbuj ponownie lub skontaktuj się z supportem.
                </p>
            )}
        </div>
    );
};

export default AccountActivation;
