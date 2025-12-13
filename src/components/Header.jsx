import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Runs once on mount to attach the scroll listener
    useEffect(() => {
        const handleScroll = () => {
            // Toggle the 'isScrolled' state when the user scrolls down 100px
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // Conditional class name: 'header--black' is added only when scrolled
        <div className={`header ${isScrolled ? "header--black" : ""}`}>
            <div className="header__contents">

                {/* Logo */}
                <h1 className="header__logo">NETFLIX</h1>

                {/* Navigation Menu */}
                <ul className="header__nav">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>

                {/* User Actions (Search, Notification, Profile) */}
                <div className="header__actions">
                    <span className="icon">🔍</span>
                    <span className="icon">🔔</span>
                    <img
                        className="header__avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="User Avatar"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
