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
                    console.error('Błąd podczas aktywacji konta.');
                    setActivationStatus('error');
                }
            } catch (error) {
                console.error('Wystąpił błąd: ', error);
                setActivationStatus('error');
            }
        };

        activateAccount();
    }, [token]);

    return (
        <div className="email-confirmation-mainwrapper">
            <h1 className="thanks-for-your-registration">
                {activationStatus === 'success'
                    ? 'Email został potwierdzony'
                    : 'Wystąpił błąd podczas aktywacji konta.'}
            </h1>
            {activationStatus === 'success' && (
                <p className="email-confirmation-content">
                    Twoje konto zostało aktywowane. Możesz się teraz zalogować
                </p>
            )}
            {activationStatus === 'error' && (
                <p className="email-confirmation-content">
                    Spróbuj ponownie lub skontaktuj się z supportem.
                </p>
            )}
        </div>
    );
};

export default AccountActivation;
