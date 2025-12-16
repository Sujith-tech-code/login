let NoofUsers=0;
let Users=[];
let TextAreas=[];
let PresentUserIndex;
let SignUpButton=document.querySelector("#signupbutton");
let LoginButton=document.querySelector("#loginbutton");
let LUserName=document.querySelector("#lusername");
let TestBox=document.querySelector("#textbox");
let TextSubmitButton=document.querySelector("#textsubmit");
let TextPath;

// SignUP button
let FirstSignUp=true;
SignUpButton.addEventListener("click",(event)=>{
 event.preventDefault();
 
 TextPath=false;
if(FirstSignUp==true){
  NoofUsers+=1;
   Users[NoofUsers] = {
   UserName: document.querySelector("#siusername").value,
   Password: document.querySelector("#sipassword").value,
 };
 FirstSignUp=false;
}
else{
  for(let i=1;i<=NoofUsers;i++){
    if(Users[i].UserName!=document.querySelector("#siusername").value){
      NoofUsers+=1;  
      Users[NoofUsers] = {
   UserName: document.querySelector("#siusername").value,
   Password: document.querySelector("#sipassword").value,
 };         break; 
    }
    else{
      alert(`Username ${document.querySelector("#siusername").value} already exists`);
    }
  }
}
});

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
  for(let i=1;i<=NoofUsers;i++){
    if(LUserName.value==Users[i].UserName){
      PresentUserIndex=i;
      TestBox.value=Users[i].TextAreaContent;
      break;
    }
  }
});
