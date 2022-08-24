import React from 'react';

const createSubproof = (line, index) => {
    line = line
        .replace(/<->/, '↔')
        .replace(/->/g, '→')
        .replace(/~/g, '¬')
        .replace(/&/g, '∧')
        .replace(/\?/g, '∨')
        .replace(/\/a\//, '∀')
        .replace(/\/e\//, '∃');
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
                let proofEnd = line.match(/--end/);
                console.log(line);
                myReturn = (
                    <p className={`sub ${proofEnd ? 'proof-end' : null}`}>
                        {line.replace(/--end/, '')}
                    </p>
                );
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
    return (
        <div key={index} className={`proof line line-${index + 1}`}>
            {jsx}
            <div className='rule'>{citation ? citation[1] : ''}</div>
        </div>
    );
};

const createMultiStructure = (jsx, line, index) => {
    let citation = line.match(/__(.*)/);
    return (
        <div key={index} className={`proof line line-${index + 1}`}>
            <div className='line-number'>{index + 1}.</div>
            {jsx}
            <div className='rule'>
                {citation
                    ? citation[1]
                          .replace(/<->/, '↔')
                          .replace(/->/g, '→')
                          .replace(/~/g, '¬')
                          .replace(/&/g, '∧')
                          .replace(/\?/g, '∨')
                          .replace(/\/a\//, '∀')
                          .replace(/\/e\//, '∃')
                    : ''}
            </div>
        </div>
    );
};

export { createSubproof, createStructure, createMultiStructure };
