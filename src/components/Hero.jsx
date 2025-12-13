import React from 'react';
import '../styles/Hero.css';

function Hero({ movie }) {
    // Guard clause: ensure movie data exists before rendering
    if (!movie) return null;

    // Helper function to truncate long descriptions
    // Returns the string + "..." if it exceeds n characters
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="hero"
            style={{
                // Inline style used for dynamic background image from movie data
                backgroundSize: "cover",
                backgroundImage: `url("${movie.banner}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="hero__contents">
                {/* Movie Title */}
                <h1 className="hero__title">
                    {movie.title}
                </h1>

                {/* Action Buttons */}
                <div className="hero__buttons">
                    <button className="hero__button">Play</button>
                    <button className="hero__button">My List</button>
                </div>

                {/* Movie Description (Truncated) */}
                <h1 className="hero__description">
                    {truncate(movie.description, 150)}
                </h1>
            </div>

            {/* Gradient Fade for smooth transition at bottom */}
            <div className="hero--fadeBottom" />
        </header>
    );
}

export default Hero;
