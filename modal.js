

// DOM Elements////////////

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//open topnav from hamburger icon

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",editNav)

const headerlogo = document.querySelector(".header-logo");

headerlogo.addEventListener("click",closeNav);



//concerns closing modal
const cross = document.getElementById("cross");
const cross2=document.getElementById("cross2");

//concerns switching modals
const hi =document.querySelector(".hi");
const bye =document.querySelector(".bye");
const cparti = document.getElementById("cparti");

//form data

const form = document.getElementById("reserve");   
const first = document.getElementById("first");
const last = document.getElementById("last");
const mail = document.getElementById("email");
const bdate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const terms = document.querySelector("#checkbox1");

//specific error messages if visible///
const firstnameerror=document.getElementById("firstnameerror")
const lastnameerror=document.getElementById("lastnameerror") ;
const emailerror=document.getElementById("emailerror");
const doberror=document.getElementById("doberror");
const historyerror=document.getElementById("historyerror");
const locationerror=document.getElementById("locationerror");
const termserror=document.getElementById("termserror")

//regex

let twocaracters=new RegExp("//")
let regexmel=new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
let tournamentsnb=new RegExp("^[0123456789]+")




// launch modal event  
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//event listeners///
cross.addEventListener("click",closeModal);
cross2.addEventListener("click",closeModal);
abientot.addEventListener("click",closeModal);

//check validity on change

first.addEventListener("blur", firstnamenonvalid);  
last.addEventListener("blur",lastnamenonvalid);
mail.addEventListener("blur",melnonvalid);
bdate.addEventListener("blur",dobnonvalid);
tournaments.addEventListener("blur",historynonvalid);
terms.addEventListener("blur",termsunchecked);

//reinit validitycheck on focus










/////////////////////////////FUNCTIONS///////////////////////
function editNav() {
  let x = document.getElementById("myTopnav");
 
  if (x.className === "topnav") {
    x.className += " responsive";
    // document.querySelector(".icon").style.opacity="0";
    
  } else {
    x.className = "topnav";
  }
}

function closeNav() {
  let x = document.getElementById("myTopnav");
  let h = document.querySelector(".fa")
 
  if (x.className == "responsive") {
    x.className -= "responsive";
    h.style.color="fff";
    
  } else {
    x.className = "topnav ";
  }
}



// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  hi.style.display = "block";
  console.log("test");
}

// close modal 

function closeModal() {
  modalbg.style.display = "none";
  bye.style.display="none";
  console.log("exit");
  form.reset();
  console.log("Form cleared");
  location.reload();
}


//switch modal hi to bye

function switchmodal(){
  hi.style.display="none";
  bye.style.display="flex";
  ;
  console.log("Merci pour votre inscription!");

}




function firstnamenonvalid(){
  if (first.value.length<2){
    firstnameerror.setAttribute("data-error-visible","true")
    return true;
  }
  else{
    firstnameerror.setAttribute("data-error-visible","false")
    return false;
  }
};

function lastnamenonvalid(){
  if (last.value.length<2){
lastnameerror.setAttribute("data-error-visible","true")
return true;
  }
  else{
    lastnameerror.setAttribute("data-error-visible","false")
    return false;
  }
};

function melnonvalid(){
  if(!regexmel.test(mail.value)){
emailerror.setAttribute("data-error-visible","true");
return true;
  }
  else{
    emailerror.setAttribute("data-error-visible","false")
    return false;
  }
};

function dobnonvalid(){
  if (bdate.value=="" ){
doberror.setAttribute("data-error-visible","true");
return true;
  }
  else{
    doberror.setAttribute("data-error-visible","false")
    return false;
  }

};

function historynonvalid(){
  if (!tournamentsnb.test(tournaments.value)){
historyerror.setAttribute("data-error-visible","true");
return true;
  }
  else{
    historyerror.setAttribute("data-error-visible","false")
    return false;
  }
};



//check if one location chosen
function onechecked(){
  for (var i=0;i<locations.length;i++){             
    if(locations[i].checked){
      return true;
    }

  }
}

function nolocationchecked(){
  if (!onechecked())  {
locationerror.setAttribute("data-error-visible","true");
return true;
  }
  else{
    locationerror.setAttribute("data-error-visible","false")
    return false;
  }
}

function termsunchecked(){
  if(!terms.checked){
termserror.setAttribute("data-error-visible","true");
return true;
  }
  else{
    termserror.setAttribute("data-error-visible","false")
    return false;
  }
};

// function iserrorfree(nodelist, attributeName) {
//   for (const node of nodelist) {
    
//     if (node.hasAttribute(attributeName) && node.getAttribute(attributeName) === 'false') {
//       return true; // field is filled out without errors
//     }
//   }
//   return false; // no field is error-free, all fields are empty
// }

function isformcomplete(){
  if ( firstnamenonvalid() || lastnamenonvalid() || melnonvalid() || dobnonvalid() || historynonvalid() || nolocationchecked() || termsunchecked() ){
    return false;
  }
  else{
    return true;
  }
}


///CODE////




form.addEventListener("submit", (event) => {
  
        event.preventDefault();

        firstnamenonvalid();
        lastnamenonvalid();
        melnonvalid();
        dobnonvalid();
        historynonvalid();
        nolocationchecked();
        termsunchecked();




        if(isformcomplete()){
          switchmodal()
        }
     
   
})



