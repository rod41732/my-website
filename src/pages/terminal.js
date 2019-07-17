import React, { useState, useEffect } from "react"
import { get, cd, ls } from "../lib/commands"
import { resolve } from "path"
import "./terminal.css"

export default () => {
  // constants
  // states
  const [command, setCommand] = useState("echo hello world ...")
  const [workDir, setWorkDir] = useState("/")
  const [lastWorkDirs, setLastWorkDirs] = useState("/")
  const [inputs, setInputs] = useState(["echo Hello Road!"]) // input lines
  const [outputs, setOutputs] = useState(["Hello Road!"]) // output lines

  // for up/down key
  const [cmdIdx, setCmdIdx] = useState(0)
  const [tabIdx, setTabIdx] = useState(0)
  const [justTabbed, setJustTabbed] = useState(false)
  const [tabFilter, setTabFilter] = useState("")

  // const [command, setCommand] = useState("echo hello world ..."); // errors
  const submitCommand = async () => {
    const lastCommand = command
    const oldWorkDir = workDir
    setCommand("")
    const tokens = lastCommand.trim().split(" ")
    console.log("bash: ", tokens)
    console.log("bash: workdir", workDir)
    let result
    try {
      // TODO: spaghetti
      switch (tokens[0]) {
        case "help":
          switch (tokens[1]) {
            case undefined:
              result = `This is fake terminal.
                        It tries to emulate terminal like command.
                        It's intended to use as a way to call API in file-like way(coming soon).
                        Commands name mimics linux's. But their functionality doesn't.

                        commands: ls, help, date, echo, cd;
                        type: help <command> for help about that command.
                        `
              break
            case "ls":
              result = `Help for ls.
                        ls : list possible sub-API of this (working directory) endpoint.
                        ls <dir>: list possible sub-API of \`dir\` endpoint, it can be relative or absolute.
                        `
              break
            default:
              result = `No help found for ${tokens[1]}
                        `
          }
          break
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
          result = result.join("\n")
          break
        case "cd":
          result = await cd({
            relativePath: tokens[1] || "/", // home = root lol
            workDir,
          })
          setWorkDir(result)
          break
        default:
          result = await get({
            relativePath: tokens[0],
            workDir,
          })
          if (!result)
            throw new Error(
              `${tokens[0]} is not a file, directory or build-in command`
            )
          result = { ...result, children: undefined }
          result = JSON.stringify(result)
      }
    } catch (err) {
      console.log(err)
      result = err.toString()
    }
    setInputs([...inputs, lastCommand])
    setOutputs([...outputs, ">>" + result])
    setLastWorkDirs([...lastWorkDirs, oldWorkDir])
    setCmdIdx(0)
    setJustTabbed(false)
    setTabFilter("")
  }

  useEffect(() => {
    // define listener
    let newCmdIdx = cmdIdx

    let listener = async function(e) {
      let newJustTabbed = false

      console.log(e.key)
      switch (e.key.toLowerCase()) {
        case "enter":
          submitCommand()
          break
        case "arrowup":
          newCmdIdx -= 2
        // intended fall through !
        case "arrowdown":
          newCmdIdx += 1
          if (newCmdIdx > -1) newCmdIdx = -1
          // TODO: remember currently typed command to
          else if (-newCmdIdx > inputs.length) newCmdIdx = -inputs.length

          const newCommand = inputs[inputs.length + newCmdIdx]
          setCmdIdx(newCmdIdx)
          setCommand(newCommand)
          const input = document.querySelector("#input")
          // console.log(newCommand)
          // console.log(newCmdIdx)
          // console.log(inputs.length)
          input.selectionEnd = input.selectionStart = newCommand.length - 1
          // console.log(inputs)
          break
        case "tab":
          e.preventDefault()
          newJustTabbed = true
          // e.preventDefault()
          // console.log("Tab --> ",)

          /*
                        tablogic 
                            - if nothing => tab = ls current dir
                            - if something-typed => tab = ls current dir + filter
                                - need to keep last state before tabbed (the filter)
                                - state before tab is set when press non-tab key
                                -  
                    
                        * 
                        */
          try {
            console.log(tabFilter)
            // TODO: implement tab filter
            const tokens = command.split(" ")

            const choices = await ls({
              relativePath: ".",
              workDir: workDir,
            })
            if (!choices) return
            const newTabIdx = (tabIdx + 1) % choices.length
            tokens[tokens.length - 1] = choices[newTabIdx]
            setCommand(tokens.join(" "))
            setTabIdx(newTabIdx)
          } catch (err) {
            // pass
          }
      }
      if (!newJustTabbed) {
        const tokens = command.split(" ")
        setTabFilter(tokens[tokens.length - 1])
      }
      setJustTabbed(newJustTabbed)
    }

    // attach listener
    document.getElementById("input").addEventListener("keydown", listener)

    // return function that remove listener
    return () => {
      document.getElementById("input").removeEventListener("keydown", listener)
    }
  })

  return (
    <div id="terminal">
      <div className="term-window">
        {/* actually term line = 1 block (not necessary 1 line) */}
        {(() => {
          return inputs.map((inp, idx) => {
            return (
              <div key={idx}>
                <div className="term-line">
                  <span className="term-prompt">
                    road@doge {lastWorkDirs[idx]} $
                  </span>
                  <span className="term-text">{inp}</span>
                </div>
                <div className="line">
                  <TermOutput out={outputs[idx]} />
                </div>
              </div>
            )
          })
        })()}
        <div className="term-line term-active">
          {" "}
          {/* active line, prompting for command*/}
          <span className="term-prompt">road@doge {workDir} $</span>
          <input
            type="text"
            autoComplete="off"
            value={command}
            id="input"
            onChange={e => {
              setCommand(e.target.value)
            }}
          />
        </div>
        <div
          className="spacing"
          style={{
            height: "40vh",
          }}
        ></div>
      </div>
    </div>
  )
}

const TermOutput = ({ out }) => {
  if (!out) {
    return <></>
  }
  const lines = out.split("\n")
  return lines.map((text, idx) => (
    <div key={idx} className="term-stdout">
      {text}
    </div>
  ))
}
