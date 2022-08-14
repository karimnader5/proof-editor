import React from 'react';
import './css/proof.css';

const Output = ({ input }) => {
    const newInput = input
        .replace(/<->/, '↔')
        .replace(/->/g, '→')
        .replace(/~/g, '¬')
        .replace(/&/g, '∧')
        .replace(/\?/g, '∨');
    const test = newInput.match(/(.*)\n/g);
    const currentLine = <p>{newInput.match(/\n?(.*)$/g)}</p>;

    const createSubproof = (line, index) => {
        if (line[0] === '>') {
            let i = 0;
            let myReturn = '';
            while (line[0] === '>') {
                line = line.replace(/\>/, '');
                i = i + 1;
            }
            for (let j = i; j > 0; j--) {
                if (j === i) {
                    myReturn = <div className='sub'>{line}</div>;
                } else if (j > 0) {
                    myReturn = <div className='sub'>{myReturn}</div>;
                }
            }
            return (
                <p key={index} className='proof statement'>
                    {myReturn}
                </p>
            );
        } else {
            return (
                <p key={index} className='proof statement'>
                    {line}
                </p>
            );
        }
    };

    const createStructure = (line, index) => {
        console.log(line);
        /* let citation = line.match(/__(.*)/); */
        return <div className={`proof line line-${index + 1}`}>{line}</div>;
    };

    return (
        <div id='output'>
            {test
                ? test.map((line, index) =>
                      createStructure(createSubproof(line, index), index)
                  )
                : ''}
            {currentLine ? currentLine : ''}
        </div>
    );
};

export default Output;
