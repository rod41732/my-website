import React, {useState, useEffect} from 'react';
import {ls, get, cd} from '../lib/commands';
import './terminal.css';

export default () => {
    // constants 
    // states
    const [command, setCommand] = useState("echo hello world ...");
    const [workDir, setWorkDir] = useState("/");
    const [lastWorkDirs, setLastWorkDirs] = useState("/");
    const [inputs, setInputs] = useState(["echo Hello Road!"]); // input lines
    const [outputs, setOutputs] = useState(["Hello Road!"]); // output lines

    // const [command, setCommand] = useState("echo hello world ..."); // errors
    const submitCommand = async () => {
        const lastCommand = command;
        const oldWorkDir = workDir;
        setCommand("");
        const tokens = lastCommand.trim().split(" ");
        console.log("bash: ", tokens)
        console.log("bash: workdir", workDir)
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
                        relativePath: tokens[1] || ".",
                        workDir,
                    })
                    result = result.join("\n");
                    break;
                case "cd":
                    result = await cd({
                        relativePath: tokens[1] || "/", // home = root lol
                        workDir
                    })
                    setWorkDir(result)
                default:
                    result = (await get({
                        relativePath: tokens[0],
                        workDir,
                    }))
                    result = {...result, children: undefined}
                    result = JSON.stringify(result)

            }
        } catch (err) {
            result = "Command error" + err
        }
        setInputs([...inputs, lastCommand])
        setOutputs([...outputs, ">>" + result])
        setLastWorkDirs([...lastWorkDirs, oldWorkDir])
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
                    return inputs.map((inp, idx) => {
                        return (<div key={idx}>
                            <div className="term-line">
                                <span className="term-prompt">road@doge {lastWorkDirs[idx]} $</span>
                                <span className="term-text">{inp}</span>
                            </div> 
                            <div className="line">
                                <TermOutput out={outputs[idx]}/>
                            </div>
                        </div>)
                    })
                })()
            }
            <div className="term-line term-active">  {/* active line, prompting for command*/}
                <span className="term-prompt">road@doge {workDir} $</span>    
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
    const lines = out.split("\n");
    return lines.map((text, idx) =>(
        <div key={idx} className="term-stdout">{text}</div>
    ))
}