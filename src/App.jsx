import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth.jsx'
import EmailConfirmation from './components/EmailConfirmation.jsx';
import AccountActivation from './components/AccountActivation.jsx';
import Dashboard from './components/Dashboard.jsx';
import MyAccount from './components/MyAccount.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import { ErrorModal } from './components/ErrorModal.jsx';
import SuccessScreen from './components/SuccessScreen.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/email-confirmation" element={<EmailConfirmation />} />
                <Route path="/activateAccount" element={<AccountActivation />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/success-screen" element={<SuccessScreen />} />
            </Routes>
        </Router>
    )
}