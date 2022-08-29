import React, { useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import Input from './components/Input.js';
import Output from './components/Output.js';
import Instructions from './components/Instructions.js';
import Buttons from './components/Buttons.js';
import { useState } from 'react';
import { reactToPrint } from 'react-to-print';
import './css/test.css';

export default function App() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [input, setInput] = useState(localStorage.getItem('input') ? localStorage.getItem('input') : "");
    const [showInstructions, setShowInstructions] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') ? (localStorage.getItem('darkmode') === "true" ? true : false) : false);

    React.useEffect(() => {
        localStorage.setItem('input', input);
      }, [input]);

      React.useEffect(() => {
        localStorage.setItem('darkmode', JSON.stringify(darkMode));
      }, [darkMode]);

    function handleChange(event) {
        setInput(event.target.value);
    }

    useEffect(() => {
        darkMode ? document.querySelector("html").style.backgroundColor = "black" : document.querySelector("html").style.backgroundColor = "white";
        darkMode ? document.querySelector("div").classList.add("dark") : document.querySelector("div").classList.remove("dark") ;
        darkMode ? document.querySelector("textarea").classList.add("dark") : document.querySelector("textarea").classList.remove("dark") ;

    }, [darkMode])


    return (
        <div id='main' className={`row`}>
            <Buttons
                showInstructions={showInstructions}
                setShowInstructions={setShowInstructions}
                reactToPrint={reactToPrint}
                handlePrint={handlePrint}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            {showInstructions ? <Instructions /> : ''}
            <Input input={input} handleChange={handleChange} />
            <Output input={input} ref={componentRef} />
        </div>
    );
}
