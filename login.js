let NoofUsers=0;
let Users=[];
let TextAreas=[];
let PresentUserIndex;
let SignUpButton=document.querySelector("#signupbutton");
let LoginButton=document.querySelector("#loginbutton");
let LUserName=document.querySelector("#lusername");
let LPassword=document.querySelector("lpassword");
let TestBox=document.querySelector("#textbox");
let TextSubmitButton=document.querySelector("#textsubmit");
let TextPath;// true if text box is edited after login else false with signup

// SignUP button
let FirstSignUp=true;
SignUpButton.addEventListener("click",(event)=>{
 event.preventDefault();
 TextPath=false;
if(FirstSignUp==true){
 if(document.querySelector("#sipassword").value==document.querySelector("#sicpassword").value){
   NoofUsers+=1;
   Users[NoofUsers] = {
   UserName: document.querySelector("#siusername").value,
   Password: document.querySelector("#sipassword").value,
 } 
 FirstSignUp=false;
 }
 else{
  alert("Passwords don't match");
 }
}
else{
  for(let i=1;i<=NoofUsers;i++){
    if(Users[i].UserName!=document.querySelector("#siusername").value){
      
         if(document.querySelector("#sipassword").value==document.querySelector("#sicpassword").value){
   NoofUsers+=1;
   Users[NoofUsers] = {
   UserName: document.querySelector("#siusername").value,
   Password: document.querySelector("#sipassword").value,
 }
      }
      else{
        alert("passwords don't match");
      }
      break; 
    }
    else{
      alert(`Username ${document.querySelector("#siusername").value} already exists`);}
    }
  }
}
);

// text box area
TextSubmitButton.addEventListener("click",(event)=>{
  event.preventDefault();
  if(TextPath==false){Users[NoofUsers].TextAreaContent = TestBox.value;}
    else{
      Users[PresentUserIndex].TextAreaContent=TestBox.value;
    }
});

//Login Button
LoginButton.addEventListener("click",(event)=>{
event.preventDefault();
TextPath=true;
  for(let i=1;i<=NoofUsers;i++){
    if(LUserName.value==Users[i].UserName){
      PresentUserIndex=i;
      TestBox.value=Users[i].TextAreaContent;
      break;
    }
    else{
      alert(`Username ${LUserName.value} doesn't exist`);
    }
  }
});
