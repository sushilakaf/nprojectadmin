import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

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