import React from 'react';
import $ from 'jquery';

const Input = ({ input, handleChange }) => {
    const growers = document.querySelectorAll('.grow-wrap');

    growers.forEach((grower) => {
        const textarea = grower.querySelector('textarea');
        textarea.addEventListener('input', () => {
            grower.dataset.replicatedValue = textarea.value;
        });
    });
    return (
        <div id='input' className='col-6'>
            <h4>You type...</h4>
            <div className=' grow-wrap'>
                <textarea
                    name='input'
                    value={input}
                    placeholder={`# This is a header
#### This is a subheader
- This is a paragraph
\`\`\`
This is a multiline proof __ With citations
> I can start a subproof here __ A1
> Here's a second line __ A2
>> I can start a subsubproof __ A3
>> And add a final line --end __ A4
> Conclude the first subproof --end __ A5
And conclude the proof
\`\`\`
`}
                    onChange={handleChange}></textarea>
            </div>
        </div>
    );
};

export default Input;
