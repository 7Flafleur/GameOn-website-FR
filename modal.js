

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

//regex

let regexmel=new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
let tournamentsnb=new RegExp("^[0123456789]+")




// launch modal event  
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//event listeners///
cross.addEventListener("click",closeModal);
cross2.addEventListener("click",closeModal);
abientot.addEventListener("click",closeModal);

//check validity on change

  
// last.addEventListener();
// mail.addEventListener();
// bdate.addEventListener();
// tournaments.addEventListener();
// locations.addEventListener();
// terms.addEventListener();

//reinit validitycheck on focus

first.addEventListener("change", firstname)

first.addEventListener("focus",firstname)






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




function firstname(){
  if (first.value.length<2){
    prenom.style.display="inline";
    error+=1;
  }
};

function lastname(){
  if (last.value.length<2){
    nom.style.display="inline";
    error+=1;
  }
};

function melcheck(){
  if(!regexmel.test(mail.value)){
    mel.style.display="inline";
    error+=1;
  }
};

function dob(){
  if (bdate.value=="" ){
    daten.style.display="inline";
    error+=1;
  }

};

function history(){
  if (!tournamentsnb.test(tournaments.value)){
    nombre.style.display="inline";
    error+=1;
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

function notchecked(){
  if (!onechecked())  {
    nolocation.style.display="inline";
    error+=1;
  };
}

function termsunchecked(){
  if(!terms.checked){
    noterms.style.display="inline";
    error+=1;
  }
};





///CODE////




form.addEventListener("submit", (event) => {
  
        event.preventDefault();

       

       if(isformcomplete()===true){
          switchmodal();
          }
        

        
        
})

let error=0;

function isformcomplete(){
  //start function///

  //first name
  if (firstname()){
    error+=1;
  }


  //last name
  if (lastname()){
    error+=1;
  }


  if(melcheck()){
    error+=1;
  }

  if (dob() ){
    error+=1;
  }


  if (history()){
    error+=1;
  }

  if (notchecked())  {
      error+=1;
    };


  if(termsunchecked){
    error+=1;
  }
  
  if (error !=0){
    return false;
  }
  return true;
  
 //end function/// 

}


