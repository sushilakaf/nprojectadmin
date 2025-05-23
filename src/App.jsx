import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './loginpage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './App.css';

export default function App() {
  
    const isAuthenticated = true; 

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                
                {/* Protected Routes */}
                <Route path="/*" element={
                    isAuthenticated ? (
                        <Layout>
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </Layout>
                    ) : (
                        <Navigate to="/login" replace />
                    )
                } />
            </Routes>
        </Router>
    );
}
