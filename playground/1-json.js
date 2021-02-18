const fs = require("fs")

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Maya"
data.age = 31

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)