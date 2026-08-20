function firstChar(text) {
  // your code here
  let ans=text.trim().charAt(0);
	if(ans==' '){
		ans="";
	}
  return ans;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
