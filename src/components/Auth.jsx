import "../styles/auth.css"
import { useState } from "react";
import { SignInModal } from "./SignInModal.jsx"
import { SignUpModal } from "./SignUpModal.jsx"

export default function Auth() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);

    const handleCloseButtonClick = () => {
        setModalOpen(false);
    };

    const handleCloseButtonClick1 = () => {
        setModalOpen1(false);
    };

    return (
        <div className="mainwrapper">
            <h1 className="title">IsoSupport</h1>
            <button className="signupButton" onClick={() => setModalOpen1(true)}>Utwórz konto</button>
            <p className="alreadyHaveAnAccountLabel">Masz już konto?</p>
            <button className="signinButton" onClick={() => setModalOpen(true)}>Zaloguj się</button>
            <p className="footerText">Celem IsoSupport jest jedynie ułatwienie procesu leczenia izotretynoiną. Decyzje dotyczącą podjęcia leczenia i jego przebiegu podejmuje lekarz. Dzienna dawka leku, jak i sumaryczna dawka w mg/kg m. c. wprowadzane do aplikacjii powinny być ustalone przez lekarza prowadzącego.</p>
            {modalOpen && (
                <SignInModal onClose={handleCloseButtonClick} />
            )}
            {modalOpen1 && (
                <SignUpModal onClose={handleCloseButtonClick1} />
            )}
        </div>
    )
}