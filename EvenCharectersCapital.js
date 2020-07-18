let text = "chennai"

let splitedtext = text.split("");

for (let index = 0; index <= splitedtext.length-1; index++) {
    
        if(index%2==0){

            splitedtext[index] =splitedtext[index].toUpperCase();
        }    
}
console.log(splitedtext.join(""))