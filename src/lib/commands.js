import { resolve } from 'path'
import data from '../data/mock'
const API = 'https://example.com/api'

export async function ls({ workDir, relativePath }) {
  // at ${API}/${fullpath} must implement `GET` for `ls` to work
  const fullpath = resolve(workDir, relativePath)
  return get({
    relativePath: relativePath,
    workDir: workDir,
  }).then(res => {
    // parse the response
    console.log(`"file" ${fullpath} = ${res}`)
    if (!res) {
      // TODO: fix this so falsy value isn't considered as error
      throw new Error('Not found')
    }
    if (!res.children) {
      throw new Error('Not a directory')
    }
    console.log(`LS result = ${JSON.stringify(res)}`)
    let children = res.children
    let result = []
    let keys = Object.keys(children)
    for (let idx in keys) {
      let key = keys[idx]
      result.push(key + (children[key] && children[key]['children'] ? '/' : ''))
    }
    return result
  })
}

export async function cd({ relativePath, workDir }) {
  console.log('cd arguments', workDir, relativePath)
  const fullPath = resolve(workDir, relativePath)
  const fileOrDir = await get({
    relativePath,
    workDir,
  })
  if (!fileOrDir) {
    throw new Error('Path not found')
  } else if (!fileOrDir.children) {
    throw new Error('Not a directory')
  }
  return fullPath
}
// export const

export async function get({ workDir, relativePath }) {
  const fullpath = resolve(workDir, relativePath)
  const parts = fullpath.slice(1).split('/') //ignore 1st
  console.log(parts)
  let result = data
  if (fullpath != '/') {
    for (let idx in parts) {
      const dir = parts[idx]
      console.log(`traverse path [${dir}`)
      result = result['children'] && result['children'][dir]
      console.log(`it's [${JSON.stringify(result)}]`)
      if (
        result === undefined ||
        result === null ||
        typeof result != 'object'
      ) {
        //
        return result
      }
    }
  }
  console.log(`result = [${JSON.stringify(result)}`)
  return result
}
