import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const handleClick = () => {
        props.setDarkMode(!props.darkMode);
    }
    const headingStyle={
        color: props.darkMode ? 'white' : 'black'
    }
    const modeStyling ={
        border: '2px solid cyan',
        color: props.darkMode ? 'white' : 'black',
        width: 'fit-content',
        padding: '10px',
        marginRight: '10px'
    }
    return (
        <>
            <div style={{display: 'flex',justifyContent: 'right', cursor: 'pointer'}}>
                <p style={modeStyling} onClick={handleClick}>{props.darkMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
            <h1 style={headingStyle}>Simple Calculator</h1>
        </>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}
export default Header;
