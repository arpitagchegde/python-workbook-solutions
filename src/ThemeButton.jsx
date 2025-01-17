import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';


function ThemedButton() {
    const theme = useContext(ThemeContext);


    return (
        <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
        </button>
    );
}


export default ThemedButton;