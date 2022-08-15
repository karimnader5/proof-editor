import React from 'react';

const Instructions = ({ setShowInstructions, showInstructions }) => {
    return (
        <div id='buttons-instructions'>
            <div id='buttons'>
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
            </div>
            {showInstructions ? (
                <div id='instructions' className='bg-light text-dark'>
                    <h4>Instructions</h4>
                    <p>
                        This markdown-based editor is an intuitive way to write
                        fitch-style proofs in symbolic logic. You can type in
                        the left textbox and see what you type being rendered to
                        the right in real time.
                    </p>
                    <div id='general-editing'>
                        <h5>General editing:</h5>
                        <table className='table table-hover table-sm'>
                            <thead class='table-light'>
                                <tr>
                                    <th>You type...</th>
                                    <th>You see...</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td># Header 1</td>
                                    <td>
                                        <h1>Header 1</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td>## Header 2</td>
                                    <td>
                                        <h2>Header 2</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>### Header 3</td>
                                    <td>
                                        <h3>Header 3</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#### Header 4</td>
                                    <td>
                                        <h4>Header 4</h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='table table-hover table-sm'>
                            <thead className='table-light'>
                                <tr>
                                    <th>You type...</th>
                                    <th>You see...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>- This is a paragraph</td>
                                    <td>
                                        <p>This is a paragraph</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ` P-&#62;&#40;Q&R&#41; <br></br>` This
                                        is a single-line logical expression
                                    </td>
                                    <td>
                                        <p>
                                            P→Q∧R<br></br>This is a single-line
                                            logical expression
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ```<br></br>
                                        This is a multiline logical expression
                                        <br></br>```
                                    </td>
                                    <td>
                                        <p>
                                            This is a multiline logical
                                            expression
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id='logic-shortcuts'>
                        <h5>Logic shortcuts:</h5>
                        <p>~ write not</p>
                        <p>& writes and</p>
                        <p>? writes or</p>
                        <p>-&#62; writes if/then</p>
                        <p>&#60;-&#62; writes iff</p>
                        <p>&#62; makes an indentation for a subproof</p>
                        <p>__ indicates a rule</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Instructions;
