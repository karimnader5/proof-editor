import React from 'react';

const Instructions = () => {
    return (
        <div id='instructions'>
            <h1>Instructions</h1>
            <p>
                You can write proofs in the textbox that will be rendered below.
            </p>
            <h2>Keyboard shortcuts:</h2>
            <p>~ write not</p>
            <p>& writes and</p>
            <p>? writes or</p>
            <p>-&#62; writes if/then</p>
            <p>&#60;-&#62; writes iff</p>
            <p>&#62; makes an indentation for a subproof</p>
            <p>__ indicates a rule</p>
            <h2>Example</h2>
        </div>
    );
};

export default Instructions;
