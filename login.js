
let NoofUsers=0;


let Users=[];
let TextAreas=[];
// SignUP button
let SignUpButton=document.querySelector("#signupbutton");
SignUpButton.addEventListener("click",(event)=>{
 event.preventDefault();
 NoofUsers+=1;
 Users[NoofUsers] = {
   UserName: document.querySelector("#siusername").value,
   Password: document.querySelector("#sipassword").value,
 };
});
// text box area
let TestBox=document.querySelector("#textbox");
let TextSubmitButton=document.querySelector("#textsubmit");
TextSubmitButton.addEventListener("click",(event)=>{
  event.preventDefault();
 if (NoofUsers >= 1) {
    Users[NoofUsers].TextAreaContent = TestBox.value;
  }
});
//1st attempt to test the saved text area content
// let testing =document.querySelector("#test");
// testing.addEventListener("click",()=>{
//   let testb=document.querySelector("#textbox");
//   testb.value=Users[NoofUsers].TextAreaContent;
// });

//Login Button
let LoginButton=document.querySelector("#loginbutton");
let LUserName=document.querySelector("#lusername");
LoginButton.addEventListener("click",(event)=>{
event.preventDefault();
  for(let i=1;i<=NoofUsers;i++){
    if(LUserName.value==Users[i].UserName){
      TestBox.value=Users[i].TextAreaContent;
      break;
    }
  }
});

