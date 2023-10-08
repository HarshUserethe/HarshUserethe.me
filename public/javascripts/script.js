
let words = ["Harsh Userethe", "Front-end Developer", "Back-end Developer"];
let names = ["Front", "Back", "Harsh", "Graphics"];

gsap.to(".scroll-icon", {
    yoyo: true,
    y: 10,
    ease: "inOut",
    duration: .5,
    repeat: -1

})
gsap.to(".pos", {
    yoyo: true,
    x: 10,
    ease: "inOut",
    duration: .5,
    repeat: -1

})



let cursor = gsap.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1 
})

let tl = gsap.timeline();
let masterTl = gsap.timeline({repeat: -1});

words.forEach(function(word){
    let text = document.querySelector(".text");
    let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay: 1});
    tl.to('.text', {
        duration: 1,
        text: word,
    })

    masterTl.add(tl);
})



let introTl = gsap.timeline();

introTl.from('.first', {
    opacity: 0,
    duration: 1,
    x: -50,
})

var flag = 0;
document.addEventListener("DOMContentLoaded", function () {
    // Select your text elements
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const text3 = document.getElementById("text3");
  
    // Create a timeline
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });
  
    // Add animations to the timeline
    tl.to(text1, { opacity: 1, y: 0 })
      .to(text1, { opacity: 0, y: -20 })
      .to(text2, { opacity: 1, y: 0 }, "-=0.5")
      .to(text2, { opacity: 0, y: -20 })
      .to(text3, { opacity: 1, y: 0 }, "-=0.5")
      .to(text3, { opacity: 0, y: -20 }, "-=0.2")
      .to(".overlay", { y: "-100%"}, "-=1")
      .to(".animate", { y: "-100%", ease: "power4.inout", duration: .8}, "-=.9");
  
    // Play the timeline
    tl.play();
    flag = 1;
  });



  gsap.from(".display>i", {
    yoyo: true,
    x: -10,
    ease: "inOut",
    duration: .5,
    repeat: -1
  })

  gsap.to(".desc", {
    yoyo: true,
    y: -20,
    ease: "power2.inOut",
    duration: .5,
    repeat: -1
  })

  

//Scrolltrigger =====>
gsap.from(".nav-bar",{
  opacity:1,
  y: -70,
  duration: 1,
  delay: 4,
})

gsap.from(".my-photo>img",{
  opacity:1,
  y: 70,
  duration: 1,
  delay: 4,
})

gsap.from("#typewriter",{
  opacity:1,
  y: 70,
  duration: 1,
  delay: 4,
})


gsap.from(".sub-text",{
  opacity:0,
  duration: 2,
  delay:4
})

window.onload = function(){
  gsap.from(".inner-bar",{
    width: "0%",
    duration: 2,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".skill-chart",
      toggleActions: "restart none none none",
    }
  })

  gsap.from(".card",{
    y:70,
    duration: .5,
    stagger: .2,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".prj-cards",
      toggleActions: "restart none none none",
    }
  })
  gsap.from(".certificate-card",{
    y:70,
    duration: .5,
    stagger: .2,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".certify",
      toggleActions: "restart none none none",
    }
  })
  gsap.from(".content-area>a",{
    y:70,
    duration: .5,
    stagger: .2,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".content-area",
      toggleActions: "restart none none none",
    }
  })
  gsap.from(".mainText",{
    x:-70,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".mainText",
      toggleActions: "restart none none none",
    }
  })
  gsap.from(".mainButtons",{
    y: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
      scroller: ".main",
      trigger: ".mainButtons",
      toggleActions: "restart none none none",
    }
  })
  // document.querySelector(".main").style.display = "block";

  document.querySelector(".skill-close").addEventListener("click", function(){
    document.querySelector(".skill-overlay").style.display = "none";
  })
  
  document.querySelector(".openMore").addEventListener("click", function(){
    document.querySelector(".skill-overlay").style.display = "flex";
    console.log("harsh")
  })
}



var btnOne = document.querySelector("#btn-1");
var linkOne = "mailto:useretheharsh@gmail.com";

btnOne.addEventListener("click", ()=>{
  window.location.href = linkOne;
})


 // Get the modal and buttons
 var modal = document.getElementById("myModal");
 var openModalBtn = document.getElementById("openModalBtn");
 var closeModalBtn = document.getElementById("closeModalBtn");

 // Open the modal
 openModalBtn.onclick = function() {
     modal.style.display = "block";
 }

 // Close the modal
 closeModalBtn.onclick = function() {
     modal.style.display = "none";
 }

 // Close the modal if the user clicks outside of it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }


// const textarea = document.getElementById("textAreaPrj");
// const charCount = document.getElementById("charCount");

// textarea.addEventListener("input", function () {
//   const maxLength = parseInt(textarea.getAttribute("maxlength"));
//   const currentLength = textarea.value.length;
  
//   charCount.textContent = currentLength;

//   if (currentLength >= maxLength) {
//     // textarea.value = textarea.value.substring(0, maxLength); // Truncate the input
//     // charCount.textContent = maxLength;
//     alert("Word limit exceeded! The text has been truncated.");
//   }
// });


document.getElementById("menuTag").addEventListener("click", function(){
  document.querySelector(".nav-bar").style.display = "flex";
  document.querySelector(".main").style.display = "none";
  document.querySelector(".nav-bar").style.left = "0%";
})

document.getElementById("closeTag").addEventListener("click", function(){
  document.querySelector(".main").style.display = "block";
  document.querySelector(".nav-bar").style.left = "100%";
  document.querySelector(".nav-bar").style.display = "none";
  document.querySelector(".nav-bar").style.left = "100%";
})

document.querySelector(".li").addEventListener("click", function(){
  document.querySelector(".main").style.display = "block";
  document.querySelector(".nav-bar").style.left = "100%";
})


//Form Data -------------->

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4V6HMFkswCKOsv0vmJQ5AHIjdOgkhpEfrnJz97wKg5fPIip0KGVczPOYnQ2MqDbpg4g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(function(response){
    console.log("Form Successfully!");
  })
  // .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



document.querySelector("#popButton").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".pop-over").style.display = "none";
})

document.querySelector("#submit").addEventListener("click", function(){
modal.style.display = "none";
document.querySelector(".popup").style.display = "flex";
document.querySelector(".pop-over").style.display = "flex";
})


//Form Validation code ---->
var firstName =  document.querySelector("#yourname");
var email =  document.querySelector("#youremail");
var prj =  document.querySelector("#yourprj");
var allFields = document.querySelectorAll(".allinput");


 firstName.addEventListener("input", function(){
    var inputValue = firstName.value.length;

     if(inputValue === 0){
       document.querySelector("#submit").setAttribute('disabled', 'disabled');
     }
     else{
       document.querySelector("#submit").removeAttribute('disabled');
     }
  
  })



  //scroll animation ----->

   $("#portfolio").click(function() {
     $('html,body').animate({
         scrollTop: $("#page-3").offset().top},
         'slow');
         
 });

$("#aboutMe").click(function() {
  $('html,body').animate({
      scrollTop: $("#page-2").offset().top},
      'slow');
      
});

$("#contactMe").click(function() {
  $('html,body').animate({
      scrollTop: $(".targetContact").offset().top},
      'slow');
});





//Meida Query (Only performs in mobile devices);

var x = window.matchMedia("(max-width: 600px)");

function mediaQuery(){
  if(x.matches){
    document.querySelector("#portfolio").addEventListener("click", function(){
      document.querySelector(".main").style.display = "block";
      document.querySelector(".nav-bar").style.left = "100%";
      document.querySelector(".nav-bar").style.display = "none";
      document.querySelector(".nav-bar").style.left = "100%";
      
    })
    
    document.querySelector("#contactMe").addEventListener("click", function(){
      document.querySelector(".main").style.display = "block";
      document.querySelector(".nav-bar").style.left = "100%";
      document.querySelector(".nav-bar").style.display = "none";
      document.querySelector(".nav-bar").style.left = "100%";
    })
    
    document.querySelector("#bloggg").addEventListener("click", function(){
      document.querySelector(".main").style.display = "block";
      document.querySelector(".nav-bar").style.left = "100%";
      document.querySelector(".nav-bar").style.display = "none";
      document.querySelector(".nav-bar").style.left = "100%";
    })


  }
}


mediaQuery();




// var allElements = document.getElementsByTagName('*');

// for (var i = 0; i < allElements.length; i++) {
//   var element = allElements[i];
//   var computedStyle = window.getComputedStyle(element);
//   var col = computedStyle.color;
 

//   // Check if the color is red
//   if (col === 'rgb(255, 0, 106)') {
//     element.style.color = 'yellow';
//   }
 
// }


// //on window load function
// window.onload = function(){
//   document.querySelectorAll(".inner-bar").forEach(function(i){
//     i.style.backgroundColor = "yellow";
//   })

//   document.querySelectorAll('button').forEach(function(btn){
//     btn.style.color = "yellow"
//     btn.style.border = "1px solid yellow";
//     btn.addEventListener("mouseenter", function(elem){
//       btn.style.backgroundColor = "yellow";
//       btn.style.color = "#fff";
//       btn.style.border = "1px solid #dfdfdf";
//     })
  
//     btn.addEventListener("mouseleave", function(elem){
//       btn.style.backgroundColor = "transparent";
//       btn.style.color = "yellow";
//       btn.style.border = "1px solid yellow";
//     })
//   })
  
  
//   document.querySelectorAll(".social-icons-new>a").forEach(function(icon){
//     icon.addEventListener("mouseover", function(){
//       icon.style.color = "yellow";
//     })
  
//     icon.addEventListener("mouseleave", function(){
//       icon.style.color = "#fff";
//     })
//   })
  
  
//   document.getElementById("blobpath").style.fill = "yellow";
//   document.querySelectorAll(".nl").forEach(function(nl){
//     nl.addEventListener("mouseover", function(){
//       nl.style.color = "yellow";
//     })
  
//     nl.addEventListener("mouseleave", function(){
//       nl.style.color = "#fff";
//     })
//   })
  
//   var actBtn = document.querySelector(".action-btn1>button");
  
//   actBtn.style.backgroundColor = "yellow";
//   actBtn.style.color = "#fff"
//   actBtn.addEventListener("mouseenter", function(){
//     actBtn.style.backgroundColor = "transparent";
//     actBtn.style.border = "1px solid yellow";
//   })
//   actBtn.addEventListener("mouseleave", function(){
//     actBtn.style.backgroundColor = "yellow";
//     actBtn.style.border = "";
//     actBtn.style.color = "#fff"
//   })

//   // document.querySelectorAll(".certificate-card").forEach(function(card){
//   //   var ctitle = document.querySelectorAll(".certificate-card");
//   //   ctitle.forEach(function(title, index){
//   //     card.addEventListener("mouseenter", function(){
//   //       title[1].style.color="yellow";
//   //     })
//   //     card.addEventListener("mouseleave", function(){
//   //       title[1].style.color="#fff";
//   //     })
//   //   })
   
//   // })


// }


function clickAlert(){
  alert("Link is not active yet, Please try again after some time.")
}

