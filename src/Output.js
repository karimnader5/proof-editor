import React from 'react';
import './css/test.scss';

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
                    myReturn = <p className='sub'>{line}</p>;
                } else if (j > 0) {
                    myReturn = <div className='sub'>{myReturn}</div>;
                }
            }
            return (
                <div key={index} className='proof statement'>
                    {myReturn}
                </div>
            );
        } else {
            return (
                <div key={index} className='proof statement'>
                    <p className='proof main'>{line}</p>
                </div>
            );
        }
    };

    const createStructure = (jsx, line, index) => {
        let citation = line.match(/__(.*)/);
        console.log(citation);
        return (
            <div key={index} className={`proof line line-${index + 1}`}>
                {jsx}
                <div className='rule'>{citation ? citation[1] : ''}</div>
            </div>
        );
    };

    return (
        <div id='output'>
            {test
                ? test.map((line, index) =>
                      createStructure(
                          createSubproof(line.replace(/__(.*)/, ''), index),
                          line,
                          index
                      )
                  )
                : ''}
            {currentLine ? currentLine : ''}
        </div>
    );
};

export default Output;
