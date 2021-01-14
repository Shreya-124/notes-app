const fs = require('fs')
const chalk = require('chalk')


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes!'))

    notes.forEach((note) => {
        console.log('Title :' + note.title)
        console.log('Body :' + note.body)
    })

}
const removeNote = (title) => {
    const notes =loadNotes()

    const neededNote = notes.filter((note) => note.title !== title)

        if(notes.length>neededNote.length){
            console.log(chalk.green.inverse('Note removed'))
            saveNotes(neededNote)
        }
        else {
            console.log(chalk.red.inverse('Note doesn\'t exist'))
        }

    }


const addNote = (title,body) => {
     const notes =loadNotes()

     const duplicateNotes = notes.filter((note) => note.title===title)
     const duplicateNote = notes.find((note) => note.title===title)

     if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))

     }else{
         console.log(chalk.red.inverse('Note title taken'))
     }

     
}

const saveNotes = (notes) => {
const dataJSON=JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
  const dataBuffer = fs.readFileSync('notes.json')
  const dataJSON = dataBuffer.toString()
  return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
}

const readNote = (title) => {
  const notes = loadNotes()
  const needed = notes.find((note) => note.title === title)
  if(needed) {
      console.log(chalk.green.inverse('Title : '+ needed.title))
      console.log('Body : '+ needed.body)
  }else {
      console.log(chalk.red.inverse('note not found!'))
  }
}

module.exports={
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote

}