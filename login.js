let NoofUsers=0;
let Users=[];
let TextAreas=[];
let PresentUserIndex;
let SignUpButton=document.querySelector("#signupbutton");
let LoginButton=document.querySelector("#loginbutton");
let LUserName=document.querySelector("#lusername");
let LPassword=document.querySelector("#lpassword");
let TestBox=document.querySelector("#textbox");
let TextSubmitButton=document.querySelector("#textsubmit");
let TextPath;// true if text box is edited after login else false with signup
let signsctnbtn=document.querySelector("#signsection");
let logsctnbtn=document.querySelector("#logsection");
let container1=document.querySelector("#container1");
let container2=document.querySelector("#container2");
let textcontainer=document.querySelector("#textboxcontainer");

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
 container2.style.display="none";
container1.style.display="none";
textcontainer.style.display="block";
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
 container2.style.display="none";
container1.style.display="none";
textcontainer.style.display="block";
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
       if(LPassword.value==Users[PresentUserIndex].Password){
            TestBox.value=Users[i].TextAreaContent;
    container2.style.display = "none";
    container1.style.display = "none";
    textcontainer.style.display = "block";
            break;
       }else{
        alert("Incorrect  Password");
       }
    }
    else{
      alert(`Username ${LUserName.value} doesn't exist`);
    }
  }
});
//animations

signsctnbtn.addEventListener("click",()=>{
container1.style.display="block";
container2.style.display="none";
textcontainer.style.display="none";
});
logsctnbtn.addEventListener("click",()=>{
    
    container2.style.display = "block";
    container1.style.display = "none";
    textcontainer.style.display = "none";
});
