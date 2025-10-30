// // var typed = new Typed(".text", {
// //     strings:["Frontend Developer","Youtuber","Web Developer"],
// //     typedSpeed: 100,
// //     backspeed: 100,
// //     backDelay: 1000,
// //     loop: true
// // } );



// var typed = new Typed(".text", {
//     strings: ["Frontend Developer", "Youtuber", "Web Developer"],
//     typeSpeed: 100,      // typing speed (correct spelling)
//     backSpeed: 100,      // backspacing speed (correct spelling)
//     backDelay: 1000,     // delay before backspacing starts
//     loop: true           // enables infinite looping
// });



// main.js

// Ensure this file is loaded AFTER typed.js (see HTML above)
document.addEventListener("DOMContentLoaded", function () {
  // check the element exists (helps debugging)
  var target = document.querySelector(".text");
  if (!target) {
    console.error("Typed.js target element not found: .text");
    return;
  }

  // Initialize Typed.js
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,   // CORRECT spelling & case
    backSpeed: 100,   // CORRECT spelling & case
    backDelay: 1000,
    loop: true
  });
});
