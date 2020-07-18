let note ="Welcome To Chennai"
/* let words = note.split(" ")
let rev_words =words.reverse()
let revnote =rev_words.toString()
let a =revnote.replace(","," ")
console.log(a.replace(","," ")) */

let words = note.split(" ")

console.log(words.length-1)
for (let index = words.length-1; index >=0; index--) {
    //writing in console with modified format
    process.stdout.write(words[index]+" ")
    
}