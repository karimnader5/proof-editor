import React from 'react';
import { createSubproof, createStructure } from './toLogic.js';

const outputArray = [];

const parse = (line, index) => {
    if (/^(```)/.test(line)) {
        console.log('proof start');
    } else if (line[0] === '`') {
        return createStructure(createSubproof(line, index), line, index);
    } else {
        return 'test';
    }
};

export { parse };
