import {
    createSubproof,
    createStructure,
    createMultiStructure,
} from './toLogic.js';
import { createHeader, createParagraph } from './toEdit.js';
import React from 'react';

const parse = (line, index) => {
    if (line === undefined) {
        return '';
    } else if (Array.isArray(line)) {
        return line.map((line, index) =>
            createMultiStructure(createSubproof(line, index), line, index)
        );
    } else if (line[0] === `#`) {
        return createHeader(line, index);
    } else if (line[0] === `-`) {
        return createParagraph(line, index);
    } else if (line[0] === '`') {
        return createStructure(createSubproof(line, index), line, index);
    } else {
        return <p key={index}>{line}</p>;
    }
};

export { parse };
