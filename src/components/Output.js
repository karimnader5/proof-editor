import React from 'react';
import { parse } from '../utils/parse.js';
import { preParse } from '../utils/preParse.js';

const Output = React.forwardRef(({ input }, ref) => {
    const inputArray = input.match(/(.*)\n/g);
    const currentLine = input ? input.match(/\n?(.*)$/g) : null;

    const placeholder = (
        <div id='placeholder'>
            <h1 className='header line-0'>This is a header</h1>
            <h4 className='header line-1'>This is a subheader</h4>
            <p className='paragraph line-2'>This is a paragraph</p>
            <div className='proof line line-1'>
                <div className='line-number'>1.</div>
                <div className='proof statement'>
                    <p className='proof main'>This is a multiline proof</p>
                </div>
                <div className='rule'> With citations</div>
            </div>
            <div className='proof line line-2'>
                <div className='line-number'>2.</div>
                <div className='proof statement'>
                    <p className='sub null'> I can start a subproof here</p>
                </div>
                <div className='rule'> A1</div>
            </div>
            <div className='proof line line-3'>
                <div className='line-number'>3.</div>
                <div className='proof statement'>
                    <p className='sub null'> Here's a second line</p>
                </div>
                <div className='rule'> A2</div>
            </div>
            <div className='proof line line-4'>
                <div className='line-number'>4.</div>
                <div className='proof statement'>
                    <div className='sub'>
                        <p className='sub null'> I can start a subsubproof</p>
                    </div>
                </div>
                <div className='rule'> A3</div>
            </div>
            <div className='proof line line-5'>
                <div className='line-number'>5.</div>
                <div className='proof statement'>
                    <div className='sub'>
                        <p className='sub proof-end'> And add a final line</p>
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
                    <p className='proof main'>And conclude the proof</p>
                </div>
                <div className='rule'></div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );

    const display = () => {
        if (inputArray) {
            if (currentLine) {
                return (
                    <div id='output'>
                        {preParse(inputArray).map((line, index) =>
                            parse(line, index)
                        )}{' '}
                        <p>{currentLine}</p>
                    </div>
                );
            } else {
                return <div id='output'>{currentLine}</div>;
            }
        } else {
            if (currentLine) {
                return <div id='output'>{currentLine}</div>;
            } else {
                return placeholder;
            }
        }
    };

    return (
        <div id='display' ref={ref} className='col-6'>
            <h4>You see...</h4>
            {display()}
        </div>
    );
});

export default Output;

/* {inputArray && currentLine != ['']
                ? preParse(inputArray).map((line, index) => parse(line, index))
                : placeholder}
            {currentLine ? <p>{currentLine}</p> : ''}
            {console.log(currentLine)} */
