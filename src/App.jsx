import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth.jsx'
import EmailConfirmation from './components/EmailConfirmation.jsx';
import AccountActivation from './components/AccountActivation.jsx';
import Dashboard from './components/Dashboard.jsx';
import MyAccount from './components/MyAccount.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/email-confirmation" element={<EmailConfirmation />} />
                <Route path="/activateAccount" element={<AccountActivation />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myaccount" element={<MyAccount />}></Route>
            </Routes>
        </Router>
    )
}