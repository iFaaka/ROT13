function rot13(str) {
    str.toUpperCase()
    let newArray = str.split("")
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let mayusAlphabet = alphabet.toUpperCase()
    let finalArray = []
   
   
   for(let i = 0; i < str.length;i++){
   
     if(mayusAlphabet.includes(str[i])){
   
       let temp = mayusAlphabet.indexOf(str[i])
       temp += 13
   
       if(temp >= 26) {
         temp -= 26
       }
   
       finalArray.push(mayusAlphabet[temp])
     }
       else {
         finalArray.push(str[i])
       }
   
   }
    
    
    
     return finalArray.join("");
   }
   


  //  rot13("SERR PBQR PNZC");

  
  function normalText(str) {
    str.toUpperCase()
    let newArray = str.split("")
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split("").reverse()
    alphabet = alphabet.join("")
   
   
    let mayusAlphabet = alphabet.toUpperCase()
    let finalArray = []
   
   
   for(let i = 0; i < str.length;i++){
   
     if(mayusAlphabet.includes(str[i])){
   
      let temp = mayusAlphabet.indexOf(str[i])
      temp += 13
  
      if(temp >= 26) {
        temp -= 26
      }
   
       finalArray.push(mayusAlphabet[temp])
     }
       else {
         finalArray.push(str[i])
       }
   
   }
    
    
    
     return finalArray.join("");
   }
   console.log(rot13("SERR PBQR PNZC"))
   console.log(normalText("FREE CODE CAMP"))

  