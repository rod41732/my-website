import {resolve} from 'path'
import data from '../data/mock'

const API = 'https://example.com/api'

export async function ls({path, workdir})  { // at ${API}/${fullpath} must implement `GET` for `ls` to work
    const fullpath = resolve(path, workdir)
    return get({
        path: path,
        workdir: workdir,
    }).then((res) => { // parse the response
        console.log(`"file" ${fullpath} = ${res}`)
        if (!res) { // TODO: fix this so falsy value isn't considered as error
            throw new Error("Not found")
        }
        if (!res.children){
            throw new Error("Not a directory")
        }
        return Object.keys(res.children)
    })

}

// export const

export async function get({path, workdir}) {
    const fullpath = resolve(workdir, path)
    const parts = fullpath.slice(1).split("/") //ignore 1st
    console.log(parts)
    let result = data
    if (fullpath != "/") {
        for (let idx in parts) {
            const dir = parts[idx]
            console.log(`traverse path [${dir}`)
            result = result["children"] && result["children"][dir]
            console.log(`it's [${JSON.stringify(result)}]`)
            if  (result === undefined || result === null || typeof(result) != "object") { //
                return result
            }
        }
    }
    console.log(`result = [${JSON.stringify(result)}`)
    return result;
}