const fs=require('fs')

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON=JSON.stringify(book)

//fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)

const buffer=fs.readFileSync('1-json.json')
const dataJSON=buffer.toString()
const data=JSON.parse(dataJSON)
data.name='Shreya'
data.age=22
datanow=JSON.stringify(data)
fs.writeFileSync('1-json.json',datanow)
const dataBuffer=fs.readFileSync('1-json.json')
const dataok=dataBuffer.toString()
console.log(dataok)