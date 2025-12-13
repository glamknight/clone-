import React from 'react';
import '../styles/MovieRow.css';

function MovieRow({ title, movies, isLargeRow }) {
    return (
        <div className="row">
            {/* Category Title */}
            <h2>{title}</h2>

            {/* Horizontal Scroll Container */}
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        // Conditional class for larger posters (used in top row, e.g. Originals)
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        // Use banner (landscape) for large rows if needed, or stick to poster (portrait)
                        // Here we switch source based on row type for variety
                        src={isLargeRow ? movie.banner : movie.image}
                        alt={movie.title}
                        loading="lazy" // Performance optimization
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieRow;
