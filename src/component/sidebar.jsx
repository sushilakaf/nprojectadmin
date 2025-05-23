import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import icons from react-icons
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai';
import { BsPeople, BsInfoCircle } from 'react-icons/bs';
import { MdOutlineEventNote } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { title: 'Dashboard', icon: <AiOutlineDashboard />, path: '/dashboard' },
        { title: 'Home', icon: <AiOutlineHome />, path: '/' },
        { title: 'About', icon: <BsInfoCircle />, path: '/about' },
        { title: 'Committee', icon: <BsPeople />, path: '/committee' },
        { title: 'Members', icon: <BsPeople />, path: '/members' },
        { title: 'Program', icon: <MdOutlineEventNote />, path: '/program' },
        { title: 'Blog', icon: <FaBlog />, path: '/blog' },
    ];

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <button 
                    className="toggle-button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <GiHamburgerMenu />
                </button>
            </div>
            
            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <Link 
                        to={item.path} 
                        key={index} 
                        className="nav-item"
                    >
                        <span className="nav-icon">{item.icon}</span>
                        {!isCollapsed && <span className="nav-title">{item.title}</span>}
                    </Link>
                ))}
            </nav>
        </div>
    );
}