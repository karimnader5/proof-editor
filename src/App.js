import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Input from './components/Input.js';
import Output from './components/Output.js';
import Instructions from './components/Instructions.js';
import Buttons from './components/Buttons.js';
import { useState } from 'react';
import { reactToPrint } from 'react-to-print';

export default function App() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [input, setInput] = useState('');
    const [showInstructions, setShowInstructions] = useState(false);
    function handleChange(event) {
        setInput(event.target.value);
    }
    return (
        <div id='main' className='row'>
            <Buttons
                showInstructions={showInstructions}
                setShowInstructions={setShowInstructions}
                reactToPrint={reactToPrint}
                handlePrint={handlePrint}
            />
            {showInstructions ? <Instructions /> : ''}
            <Input input={input} handleChange={handleChange} />
            <Output input={input} ref={componentRef} />
        </div>
    );
}
