import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function AppHeader() {
    return (
        <header className="app-header">
            <div className="header-left">
                <Link to="/">
                   
                </Link>
            </div>
            
            <div className="header-right">
                <div className="user-profile">
                    <FaUserCircle className="user-icon" />
                    <div className="user-dropdown">
                        <button className="user-button">
                            <span>John Doe</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}