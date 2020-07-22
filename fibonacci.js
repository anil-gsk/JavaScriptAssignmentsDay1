
function fibonacci_of_given_number(number) {

    let n1=0
    let n2=1
    let n3=0

    console.log(n1);
    console.log(n2);

    for(let i=2;i<number;i++){

        n3 = n1+n2;
        console.log(n3);
        n1=n2
        n2=n3
       
    }  
}

fibonacci_of_given_number(-1)