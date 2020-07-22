var str1 = "fried"
var str2 = "fired"

var str1_arr =str1.split("");
str1_arr.sort();

var str2_arr =str2.split("");
str2_arr.sort();

// console.log(str1_arr)
// console.log(str2_arr)

if(str1_arr.length!=str2_arr.length){

    console.log(str1+" - "+str2+" are not Anagram eachother");
}else{

            if(str1_arr.join("")==str2_arr.join(""))
            console.log(str1+" - "+str2+" are Anagram eachother")

}
