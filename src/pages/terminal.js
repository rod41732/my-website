import React, {useState, useEffect} from 'react';
import './terminal.css';

export default () => {
    // constants 
    const prompt = "rod@doge ~$ ";
    // states
    const [command, setCommand] = useState("echo hello world ...");
    const [inputs, setInputs] = useState(["echo Hello Road!"]); // input lines
    const [outputs, setOutputs] = useState(["Hello Road!"]); // output lines

    // const [command, setCommand] = useState("echo hello world ..."); // errors
    const submitCommand = () => {
        const lastCommand = command;
        setCommand("");
        setInputs([...inputs, lastCommand])
        setOutputs([...outputs, "you typed" + lastCommand])
    }


    useEffect(() => {
        // define listener
        let listener = (e) => {
            if (e.key == "Enter") {
                submitCommand();
            }
        }

        // attach listener
        document.getElementById('input').addEventListener('keyup', listener)

        // return function that remove listener
        return () => {
            document.getElementById('input').removeEventListener('keyup', listener)
        }

    })


      

    return <div id="terminal">
        <div className="term-window">
            {/* actually term line = 1 block (not necessary 1 line) */}
            {
                (() => {
                    console.log(inputs.length)
                    return inputs.map((inp, idx) => {
                        return (<>
                            <div className="term-line">
                                <span className="term-prompt">{prompt}</span>
                                <span className="term-text">{inp}</span>
                            </div> 
                            <div className="line">
                                <span className="term-stdout">{outputs[idx]}</span>
                            </div>
                        </>)
                    })
                })()
            }
            <div className="term-line term-active"> 
                <span className="term-prompt">rod@doge ~ $</span>    
                <input type="text" value={command} id="input" onChange={(e) => {
                    setCommand(e.target.value);
                }}/>
            </div>
        </div>
    </div> 
}