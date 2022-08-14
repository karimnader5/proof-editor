import { createSubproof, createStructure } from './toLogic.js';
import { createHeader, createParagraph } from './toEdit.js';

const parse = (line, index) => {
    if (/```/.test(line)) {
        return '';
    } else if (line[0] === `#`) {
        return createHeader(line, index);
    } else if (line[0] === `-`) {
        return createParagraph(line, index);
    } else if (line[0] === '`') {
        return createStructure(createSubproof(line, index), line, index);
    } else {
        return createStructure(createSubproof(line, index), line, index);
    }
};

export { parse };
