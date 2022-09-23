// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password parameter
function as(){
  var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var arr2 = ['-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'];
var arr3 = ['a','b','c','d','e','f','g', 'h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var idvalue ='';
var n = $('#ss').val()-0;

// generated list
var sp=0;
var q=document.getElementsByTagName('input')[1]
var w=document.getElementsByTagName('input')[2]
var e=document.getElementsByTagName('input')[3]
var r=document.getElementsByTagName('input')[4]
if(q.checked){
 sp+=1;
}
if(w.checked){
 sp+=1;
}
if(e.checked){
 sp+=1;
}
if(r.checked){
 sp+=1;
}
if(sp==0){
 alert('false');
}
var ch=n%sp;
if(q.checked){
   for(var i=0;i<(n-ch)/sp;i++){
     idvalue+=arr[Math.floor(Math.random()*26)];
 }
}