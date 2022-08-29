const preParse = (array) => {
    let preParsed = [];
    for (let i = 0; i <= array.length; ) {
        if (array[i] !== '```\n') {
            preParsed.push(array[i]);
            i++;
        } else {
            let start = array.indexOf('```\n', i);
            console.log(start);
            let end = array.indexOf('```\n', start + 1);
            if (start >= 0 && end > 0) {
                let multiProof = array.slice(start + 1, end);
                preParsed.push([...multiProof]);
                i = end + 1;
            } else {
                i++;
            }
        }
    }
    console.log(array);
    console.log(preParsed);
    return preParsed;
};

export { preParse };
