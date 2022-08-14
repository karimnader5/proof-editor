import React from 'react';

/* const newInput = input
    .replace(/<->/, '↔')
    .replace(/->/g, '→')
    .replace(/~/g, '¬')
    .replace(/&/g, '∧')
    .replace(/\?/g, '∨'); */

const createSubproof = (line, index) => {
    line = line
        .replace(/<->/, '↔')
        .replace(/->/g, '→')
        .replace(/~/g, '¬')
        .replace(/&/g, '∧')
        .replace(/\?/g, '∨');
    line = line.replace(/`(\s*)/, '').replace(/__(.*)/, '');
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

export { createSubproof, createStructure };
