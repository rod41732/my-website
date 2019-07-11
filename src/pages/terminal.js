import React, {useState, useEffect} from 'react';
import {ls, get} from '../lib/commands';
import './terminal.css';

export default () => {
    // constants 
    const prompt = "rod@doge ~$ ";
    // states
    const [command, setCommand] = useState("echo hello world ...");
    const [workDir, setWorkDir] = useState("/");
    const [inputs, setInputs] = useState(["echo Hello Road!"]); // input lines
    const [outputs, setOutputs] = useState(["Hello Road!"]); // output lines

    // const [command, setCommand] = useState("echo hello world ..."); // errors
    const submitCommand = async () => {
        const lastCommand = command;
        setCommand("");
        const tokens = lastCommand.trim().split(" ");
        console.log(tokens)
        let result;
        try { // TODO: spaghetti
            switch (tokens[0]) {
                case "echo":
                    result = tokens.slice(1).join(" ")
                    break
                case "date":
                    result = new Date().toUTCString()
                    break
                case "ls":
                    result = await ls({
                        path: tokens[1] || ".",
                         workdir: workDir
                    })
                    result = result.join("\n");
                    break;
                default:
                    result = (await get({
                        path: tokens[0],
                        workdir: workDir,
                    }))
                    result = {...result, children: undefined}
                    result = JSON.stringify(result)

            }
        } catch (err) {
            result = "Command error" + err
        }
        setInputs([...inputs, lastCommand])
        setOutputs([...outputs, ">>" + result])
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
                        console.log(outputs)
                        return (<>
                            <div key={idx} className="term-line">
                                <span className="term-prompt">{prompt}</span>
                                <span className="term-text">{inp}</span>
                            </div> 
                            <div className="line">
                                <TermOutput out={outputs[idx]}/>
                            </div>
                        </>)
                    })
                })()
            }
            <div className="term-line term-active">  {/* active line, prompting for command*/}
                <span className="term-prompt">rod@doge ~ $</span>    
                <input type="text" value={command} id="input" onChange={(e) => {
                    setCommand(e.target.value);
                }}/>
            </div>
            <div className="spacing" style={{
                height: "40vh",
            }}>
            </div>
        </div>
    </div> 
}


const TermOutput = ({out}) => {
    if (!out) {
        return <></>
    }
    console.log(out)
    const lines = out.split("\n");
    return lines.map((text, idx) =>(
        <div key={idx} className="term-stdout">{text}</div>
    ))
}