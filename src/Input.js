import React from 'react';

const Input = ({ input, handleChange }) => {
    return (
        <div id='input'>
            <textarea
                cols='50'
                rows='20'
                value={input}
                onChange={handleChange}></textarea>
        </div>
    );
};

export default Input;
