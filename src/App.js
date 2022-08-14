import React from 'react';
import Input from './Input.js';
import Output from './Output.js';
import Instructions from './Instructions.js';
import { useState } from 'react';

export default function App() {
    const [input, setInput] = useState('');
    function handleChange(event) {
        setInput(event.target.value);
    }
    return (
        <div id='main'>
            <Instructions />
            <Input input={input} handleChange={handleChange} />
            <Output input={input} />
        </div>
    );
}
