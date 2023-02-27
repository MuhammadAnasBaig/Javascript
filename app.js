/////  Chapter 12 & 13  ////

        // Q)1

//  let char = prompt("Enter something here");
//    if(char>="A" && char<="Z"){
//     alert(`${char} is an Uppercase letter`)
//    }
//    else if(char>="a" && char<="z"){
//       alert(`${char} is an smallcase letter`)
//    }
//    else{
//          alert(`${char} is not an alphabetic letter`)
//    }



    //     Q)2

// let input1 = prompt("Enter firt number");
// let input2 = prompt("Enter second number");
// if(input1 == input2){
//    document.write(input1 + "is equal to" + input2)
// }
// else if(input1 > input2 ){
//     document.write(input1 + " is greater than " + input2);
// }
// else{
//       document.write(`${input1} is less than ${input2}`)
// }

   //    Q)3

//    let num = prompt("Write Number");
//    if(num>0){
//       alert("Positive number")
//    }
//    else if(num == 0){
//      alert(" this is zero")
//    }
//    else{
//      alert("Negative number")
//    }

  ///    Q)4

//    let alphabet = prompt("Write a Character");
//    if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u"){
//        alert("true")
//    }
//    else{
//       alert("false")
//    }
    
////     Q)5

let currentPassword = "12345";
let userEnterPassword = prompt("Enter a Password");
if(!userEnterPassword){
    alert("Please Enter Correct Password")
}
else if(userEnterPassword == currentPassword){
   alert("Correct!! The password you entered matches the original password")
}
else{
    alert("Incorrect Password")
}

////      Q)6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = alert("Good day");
}
else{
greeting = alert("Good evening");
}




