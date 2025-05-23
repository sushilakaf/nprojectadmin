import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import './Layout.css';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <AppHeader />
            <Sidebar />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
} 