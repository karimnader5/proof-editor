import React from 'react';

const Instructions = () => {
    return (
        <div id='instructions' className='bg-light text-dark'>
            <h4>Instructions</h4>
            <p>
                This markdown-based editor is an intuitive way to write
                fitch-style proofs in symbolic logic. You can type in the left
                textbox and see what you type being rendered to the right in
                real time.
            </p>
            <div id='general-editing'>
                <h5>General editing:</h5>
                <table className='table table-hover table-sm'>
                    <thead className='table-light'>
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
                                <strong>Single line logical expression</strong>{' '}
                                <br></br>` P-&#62;&#40;Q&R&#41; <br></br>
                            </td>
                            <td>
                                <p>
                                    <br></br>
                                    P→Q∧R
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Multi line logical expression</strong>
                                <br></br>
                                ```<br></br>
                                This is a proof
                                <br></br>```
                            </td>
                            <td>
                                <p>
                                    <br></br>
                                    <br></br>
                                    1. This is a proof
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div id='logic-shortcuts'>
                <h5>Logic shortcuts:</h5>
                <table className='table table-hover table-sm'>
                    <thead className='table-light'>
                        <tr>
                            <th>You type...</th>
                            <th>You see...</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>~P</td>
                            <td>¬P</td>
                        </tr>
                        <tr>
                            <td>P&Q</td>
                            <td>P∧Q</td>
                        </tr>
                        <tr>
                            <td>P?Q</td>
                            <td>P∨Q</td>
                        </tr>
                        <tr>
                            <td>P-&#62;Q</td>
                            <td>P→Q</td>
                        </tr>
                        <tr>
                            <td>P&#60;-&#62;Q</td>
                            <td>P↔Q</td>
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
                            <td>~P</td>
                            <td>¬P</td>
                        </tr>
                        <tr>
                            <td>P&Q</td>
                            <td>P∧Q</td>
                        </tr>
                        <tr>
                            <td>P?Q</td>
                            <td>P∨Q</td>
                        </tr>
                        <tr>
                            <td>P-&#62;Q</td>
                            <td>P→Q</td>
                        </tr>
                        <tr>
                            <td>P&#60;-&#62;Q</td>
                            <td>P↔Q</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='multiline'>
                <h5>Example of a complex proofs:</h5>
                <table className='table table-hover table-sm'>
                    <thead className='table-light'>
                        <tr>
                            <th>You type...</th>
                            <th>You see...</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                ```
                                <br></br>This is a multiline proof __ With
                                citations<br></br>&#62; I can start a subproof
                                here __ A1<br></br>&#62; Here's a second line __
                                A2<br></br>
                                &#62;&#62; I can start a subsubproof __ A3
                                <br></br>
                                &#62;&#62; And add a final line --end __ A4
                                <br></br>&#62; Conclude the first subproof --end
                                __ A5<br></br>
                                And conclude the proof<br></br>
                                ```<br></br>
                            </td>
                            <td>
                                <br></br>
                                <div className='proof line line-1'>
                                    <div className='proof statement'>
                                        <p className='proof main'></p>
                                    </div>
                                    <div className='rule'></div>
                                </div>
                                <div className='proof line line-1'>
                                    <div className='line-number'>1.</div>
                                    <div className='proof statement'>
                                        <p className='proof main'>
                                            This is a multiline proof
                                        </p>
                                    </div>
                                    <div className='rule'> With citations</div>
                                </div>
                                <div className='proof line line-2'>
                                    <div className='line-number'>2.</div>
                                    <div className='proof statement'>
                                        <p className='sub null'>
                                            {' '}
                                            I can start a subproof here
                                        </p>
                                    </div>
                                    <div className='rule'> A1</div>
                                </div>
                                <div className='proof line line-3'>
                                    <div className='line-number'>3.</div>
                                    <div className='proof statement'>
                                        <p className='sub null'>
                                            {' '}
                                            Here's a second line
                                        </p>
                                    </div>
                                    <div className='rule'> A2</div>
                                </div>
                                <div className='proof line line-4'>
                                    <div className='line-number'>4.</div>
                                    <div className='proof statement'>
                                        <div className='sub'>
                                            <p className='sub null'>
                                                {' '}
                                                I can start a subsubproof
                                            </p>
                                        </div>
                                    </div>
                                    <div className='rule'> A3</div>
                                </div>
                                <div className='proof line line-5'>
                                    <div className='line-number'>5.</div>
                                    <div className='proof statement'>
                                        <div className='sub'>
                                            <p className='sub proof-end'>
                                                {' '}
                                                And add a final line
                                            </p>
                                        </div>
                                    </div>
                                    <div className='rule'> A4</div>
                                </div>
                                <div className='proof line line-6'>
                                    <div className='line-number'>6.</div>
                                    <div className='proof statement'>
                                        <p className='sub proof-end'>
                                            {' '}
                                            Conclude the first subproof
                                        </p>
                                    </div>
                                    <div className='rule'> A5</div>
                                </div>
                                <div className='proof line line-7'>
                                    <div className='line-number'>7.</div>
                                    <div className='proof statement'>
                                        <p className='proof main'>
                                            And conclude the proof
                                        </p>
                                    </div>
                                    <div className='rule'></div>
                                </div>
                                <div className='proof line line-3'>
                                    <div className='proof statement'>
                                        <p className='proof main'></p>
                                    </div>
                                    <div className='rule'></div>
                                </div>
                                <div className='proof line line-4'>
                                    <div className='proof statement'>
                                        <p className='proof main'></p>
                                    </div>
                                    <div className='rule'></div>
                                </div>
                                <p></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructions;
