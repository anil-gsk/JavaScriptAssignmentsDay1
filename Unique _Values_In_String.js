
let text = "paypal";

 
for(let i=0; i<=text.length-1;i++){

      console.log()

      for(let j=i+1;j<=text.length-1;j++){

        if(text.charAt(i)==text.charAt(j))

        console.log(text.charAt(i))
      }  
}