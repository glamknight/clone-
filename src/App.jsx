import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import Footer from './components/Footer'
import movies from './data/movies'
import './styles/App.css'

function App() {
    // Data Slicing: Simulating different API endpoints by slicing the mock data array
    // In a real app, these would be separate API calls (e.g. /trending, /top-rated)
    const trending = movies.slice(0, 5);
    const topRated = movies.slice(5, 10);
    // Reverse the array for 'Action' just to show different order
    const actionMovies = movies.slice(0, 6).reverse();

    return (
        <div className="app">
            {/* Fixed Navigation Header */}
            <Header />

            {/* Featured Hero Banner: Using the first movie as the feature */}
            <Hero movie={movies[0]} />

            {/* Scrollable Movie Rows */}
            <div className="rows-container">
                <MovieRow title="Trending Now" movies={trending} />
                <MovieRow title="Top Rated" movies={topRated} />
                <MovieRow title="Action Thrillers" movies={actionMovies} />
            </div>

            {/* Page Footer */}
            <Footer />
        </div>
    )
}

export default App
