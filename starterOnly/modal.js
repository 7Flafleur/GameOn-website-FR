function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements////////////

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector(".reserve");
const formData = document.querySelectorAll(".formData");

//concerns closing modal
const cross = document.getElementById("cross");
const cross2=document.getElementById("cross2");
const abientot = document.getElementById("abientot");

//concerns switching modals
const hi =document.querySelector(".hi");
const bye =document.querySelector(".bye");
const cparti = document.getElementById("cparti");

////////////OTHER VQRIQBLES//////////////////////

var enterpressed=false;


/////////////EVENTLISTENERS////////////

cross.addEventListener("click",closeModal);
cross2.addEventListener("click",closeModal);
abientot.addEventListener("click",closeModal);



/////////////////////////////FUNCTIONS///////////////////////




// launch modal event  
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));




// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  hi.style.display = "block";
  bye.style.display ="none";
  console.log("test");
}

// close modal 

function closeModal() {
  modalbg.style.display = "none";
  console.log("exit");

}

//switch modal hi to bye

// function switchmodal(){
//   if (validfirst()){
//   console.log(validfirst());
//   hi.style.display="none";
//   bye.style.display="flex";
//   ;
//   console.log("Merci pour votre inscription!");
//   }

// }


//Form validation functions


// function validfirst() {
//   if (first.value.length<2){
//     document.getElementById("prenom").style.display="inline";
//     console.log("invalid first name!")
//     return false;
//   }
//   else{
//     document.getElementById("prenom").style.display="none";
//     console.log("valid first name");
//     return true;
//   }

// }


function validLast(){
  if (last.value.length<2){
    document.getElementById("nom").style.display="inline";
    console.log("invalid last name!")
    return false;
  }
  else{
    document.getElementById("nom").style.display="none";
    console.log("valid last name");
    return true;
  }


}




//chekc for enter pressed

// first.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     console.log('Enter key pressed!');
//     enterpressed=true;
//   }
// });

// last.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     console.log('Enter key pressed!');
//     enterpressed=true;
//   }
// });


////CODE////

// if (enterpressed){
//   validfirst();
// }










// switch modal form to bye

// function closeModal(e) {
//   console.log(e)
//   e.target.parentElement.parentElement.style.display = "none";
//   console.log("exit modal")
// }

