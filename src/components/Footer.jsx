import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>Questions? Call 1-844-505-2993</p>

            {/* 4-Column Grid Layout for Links */}
            <div className="footer__links">
                {/* Column 1 */}
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Netflix Originals</li>
                </ul>
                {/* Column 2 */}
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
                {/* Column 3 */}
                <ul>
                    <li>Account</li>
                    <li>Redeem Gift Cards</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                {/* Column 4 */}
                <ul>
                    <li>Media Center</li>
                    <li>Buy Gift Cards</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
            </div>

            <p className="copyright">Netflix Clone © 2024</p>
        </div>
    );
}

export default Footer;
