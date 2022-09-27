import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className="logo">
                <h3>MealDb</h3>
            </div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/">Meal</a>
                <a href="/">Contact</a>
                <a href="/">About</a>
            </div>
        </nav>
    );
};

export default Header;