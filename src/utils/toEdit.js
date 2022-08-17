import React from 'react';

const createHeader = (line, index) => {
    if (/^####/.test(line)) {
        return (
            <h4 className={`header line-${index}`} key={index}>
                {line.replace(/####(\s*)/, '')}
            </h4>
        );
    } else if (/^###/.test(line)) {
        return (
            <h3 className={`header line-${index}`} key={index}>
                {line.replace(/###(\s*)/, '')}
            </h3>
        );
    } else if (/^##/.test(line)) {
        return (
            <h2 className={`header line-${index}`} key={index}>
                {line.replace(/##(\s*)/, '')}
            </h2>
        );
    } else if (/^#/.test(line)) {
        return (
            <h1 className={`header line-${index}`} key={index}>
                {line.replace(/#(\s*)/, '')}
            </h1>
        );
    }
};

const createParagraph = (line, index) => {
    return (
        <p className={`paragraph line-${index}`} key={index}>
            {line.replace(/-(\s*)/, '')}
        </p>
    );
};

export { createHeader, createParagraph };
