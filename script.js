function firstChar(text) {
  // your code here
  let ans="";
  for(let i=0;i<text.length-1;i++){
      if(text.charAt(i+1)!=' '){
          ans+=text.charAt(i+1);
          break;
      }
  }
  return ans;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
