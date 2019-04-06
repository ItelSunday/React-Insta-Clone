import React from 'react';
import './SearchBar.css';

// Icons
import igLogo from '../../images/igLogo.png';
import igName from '../../images/igName.png';
import compass from '../../images/compass-icon.png';
import heart from '../../images/heart-icon.png';
import person from '../../images/person-icon.png';






function SearchBar (props) {
    return (
        <div className="searchbar-container">
            <div className="logo-section">
                <img src={igLogo} aria-label="Instagram" className="ig-logo" height='30'/>
                <img src={igName} aria-label="Instagram" className="ig-name" height='30'/>
            </div>

            <div className="placeholder">
                <input type="text" placeholder="search"/>
            </div>

            <div className="social-section">
                <img src={compass} aria-label="Find People" height='30'/>
                <img src={heart} aria-label="Activity Feed" height='30'/>
                <img src={person} aria-label="Profile" height='30'/>    
            </div>
        </div>
    )}

export default SearchBar;