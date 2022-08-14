import React from 'react';
import { useEffect } from 'react';
import { parse } from './utils/parse.js';
import './css/test.css';

const Output = ({ input }) => {
    const inputArray = input.match(/(.*)\n/g);
    /* useEffect(() => {
        inputArray = ;
    }, [input]);*/
    const currentLine = <p>{input.match(/\n?(.*)$/g)}</p>;

    return (
        <div id='output'>
            {inputArray
                ? inputArray.map((line, index) => parse(line, index))
                : ''}

            {currentLine ? currentLine : ''}
        </div>
    );
};

export default Output;
