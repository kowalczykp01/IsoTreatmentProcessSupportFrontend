import "../styles/auth.css"
import { useState } from "react";
import { SignInModal } from "./SignInModal.jsx"
import { SignUpModal } from "./SignUpModal.jsx"

export default function Auth() {
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

    const handleSignInCloseButtonClick = () => {
        setSignInModalOpen(false);
    };

    const handleSignUpCloseButtonClick = () => {
        setSignUpModalOpen(false);
    };

    const openSignUpModal = (e) => {
        e.preventDefault();
        setSignUpModalOpen(true)
    };

    const openSignInModal = (e) => {
        e.preventDefault();
        setSignInModalOpen(true)
    };  

    return (
        <div>
            <h1 className="auth-title">IsoSupport</h1>
            <form className="auth-form">
                <button className="auth-signupButton" onClick={openSignUpModal}><span className="auth-span">Utwórz konto</span></button>
                <p className="auth-alreadyHaveAnAccountLabel">Masz już konto?</p>
                <button className="auth-signinButton" onClick={openSignInModal}><span className="auth-span">Zaloguj się</span></button>                
            </form>
            <p className="auth-footerText">Celem IsoSupport jest jedynie ułatwienie procesu leczenia izotretynoiną. Decyzje dotyczącą podjęcia leczenia i jego przebiegu podejmuje lekarz. Dzienna dawka leku, jak i sumaryczna dawka w mg/kg m. c. wprowadzane do aplikacjii powinny być ustalone przez lekarza prowadzącego.</p>
            {signInModalOpen && (
                <SignInModal onClose={handleSignInCloseButtonClick} />
            )}
            {signUpModalOpen && (
                <SignUpModal onClose={handleSignUpCloseButtonClick} />
            )}
        </div>
    )
}