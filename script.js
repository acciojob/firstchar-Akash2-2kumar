function firstChar(text) {
  // your code here
  text = text.trim();

    if(text.length === 0){
        return "";
    }
  let ans=text.trim().charAt(0);
  return ans;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
