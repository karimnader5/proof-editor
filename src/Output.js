import React from 'react';
import { parse } from './utils/parse.js';
import { preParse } from './utils/preParse.js';
import './css/test.css';

const Output = ({ input }) => {
    const inputArray = input.match(/(.*)\n/g);
    const currentLine = <p>{input.match(/\n?(.*)$/g)}</p>;

    return (
        <div id='output' className='col-6'>
            {inputArray
                ? preParse(inputArray).map((line, index) => parse(line, index))
                : ''}
            {currentLine ? currentLine : ''}
        </div>
    );
};

export default Output;
