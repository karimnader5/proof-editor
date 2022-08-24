import React from 'react';

const Buttons = ({
    showInstructions,
    setShowInstructions,
    handlePrint,
    darkMode,
    setDarkMode,
}) => {
    return (
        <div id='buttons'>
            <h1 id='header'>Symbolic Logic Proof Editor</h1>
            {darkMode ? (
                <div id='lightMode'>
                    <button
                        id='lightMode'
                        onClick={() => setDarkMode(false)}
                        type='button'
                        className='btn btn-light'>
                        ☼
                    </button>
                </div>
            ) : (
                <div id='darkMode'>
                    <button
                        className='btn btn-dark'
                        id='darkMode'
                        onClick={() => setDarkMode(true)}>
                        ☾
                    </button>
                </div>
            )}
            {showInstructions ? (
                <div id='hide'>
                    <button
                        id='closeInstructions'
                        onClick={() => setShowInstructions(false)}
                        type='button'
                        className='btn btn-danger'>
                        &#x2715;
                    </button>
                    <span>Hide Instructions</span>
                </div>
            ) : (
                <div id='show'>
                    <button
                        className='btn btn-success'
                        id='showInstructions'
                        onClick={() => setShowInstructions(true)}>
                        ?
                    </button>
                    <span>Show Instructions</span>
                </div>
            )}

            <div id='pdf'>
                <button
                    id='printPDF'
                    onClick={handlePrint}
                    type='button'
                    className='btn btn-primary'>
                    🗋
                </button>
                <span>Save as PDF</span>
            </div>
        </div>
    );
};

export default Buttons;
