import React from 'react';

const Input = ({ input, handleChange }) => {
    return (
        <div id='input' className='col-6'>
            <textarea
                rows='20'
                value={input}
                onChange={handleChange}></textarea>
        </div>
    );
};

export default Input;
