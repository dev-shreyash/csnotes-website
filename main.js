const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});


// Get the navbar element
const navbar = document.querySelector('.header');
const disco = document.querySelector('.disco');

// Add an event listener to the window object that listens for the scroll event
window.addEventListener('scroll', function() {
// Get the current scroll position
let scrollPos;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
scrollPos = document.documentElement.scrollTop;
} else {
scrollPos = document.documentElement.scrollTop;
}

// Check if the scroll position is greater than 0
if (scrollPos > 2) {
// If it is, add the scrolled class to the navbar with a fade in effect
navbar.classList.add('scrolled');
disco.classList.add('scrolled-disco');
navbar.style.transition = "all 0.2s ease-in-out";
disco.style.transition = "all 0s ease-in-out";
} else {
// If not, remove the scrolled class from the navbar with a fade out effect
navbar.classList.remove('scrolled');
disco.classList.remove('scrolled-disco');
navbar.style.transition = "all 0.5s ease-in-out";
disco.style.transition = "all 1s ease-in-out";
}
});



const header = document.querySelector('.header');
const disco2 = document.querySelector('.disco');

const body = document.querySelector('body');
let lastScroll = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > header.offsetHeight *1/2) {
    header.style.top = "-80px";
    disco2.style.top = "-80px";
    header.style.transition = "all 0.5s ease-in-out";
    disco2.style.transition = "all 0.5s ease-in-out";
    
  } else {
    header.style.top = "0";
    disco2.style.top = "0";
    header.style.transition = "all 0.5s ease-in-out";
    disco2.style.transition = "all 1s ease-in-out";

  }
  lastScroll = currentScroll;
});



 // Define an array of sensitive words to hide
 var sensitiveWords = ["shreyash", "bhosale", "prathmesh", "mayur","Ashwin","Kumar","Soham","ayush","shyam","DEEPAK","CHAURASIYA","KAUSHIK","MOURYA","EKLAKH","ANSARI","KEDAR","PRATHAMEESH","PRATHAMESH","RITESH","SHARMA"];

 // Define a function to hide sensitive words in a given string
 function hideSensitiveWords(str) {
   // Iterate over the sensitive words array
   for (var i = 0; i < sensitiveWords.length; i++) {
     // Construct a regular expression pattern to match the sensitive word
     var pattern = new RegExp(sensitiveWords[i], "gi");
     // Replace all occurrences of the sensitive word with asterisks
     str = str.replace(pattern, "********");
   }
   // Return the modified string
   return str;
 }





//  function searchPrograms() {
//   const searchInputValue = document.getElementById("search-input").value;
//   const programs = document.getElementsByClassName("content");

//   // Array to store the matched programs
//   const matchedPrograms = [];

//   // Loop through all programs
//   for (let i = 0; i < programs.length; i++) {
//       const name = programs[i].getElementsByClassName("faq_question")[0].innerHTML;
//       const title = programs[i].getElementsByClassName("faq_panel")[0].innerHTML;
//       const language = programs[i].getElementsByClassName("faq_answer")[0].innerHTML;
//       const programText = `${name} ${title} ${language}`;

//       // Check if the program text contains the search phrase
//       if (programText.toUpperCase().includes(searchInputValue.toUpperCase())) {
//         // Count the number of matches
//         const matches = programText.toUpperCase().split(searchInputValue.toUpperCase()).length - 1;
//         matchedPrograms.push({ program: programs[i], matches });
//       }
//   }

//   // Sort the matched programs by the number of matches
//   matchedPrograms.sort((a, b) => {
//     if (b.matches !== a.matches) {
//         return a.matches - b.matches;
//     } else {
//         return a.program.innerHTML.localeCompare(b.program.innerHTML);
//     }
//   });

//   // Display the matched programs
//   for (let i = 0; i < matchedPrograms.length; i++) {
//       matchedPrograms[i].program.style.display = "block";
//   }

//   // Hide the non-matched programs
//   for (let i = 0; i < programs.length; i++) {
//       let isMatched = false;

//       // Check if the program is matched
//       for (let j = 0; j < matchedPrograms.length; j++) {
//           if (programs[i] === matchedPrograms[j].program) {
//               isMatched = true;
//               break;
//           }
//       }

//       // If the program is not matched, hide it
//       if (!isMatched) {
//         programs[i].style.display = "none";
//       }
//   }
// }
// // Add event listener to search input field
// const searchInput = document.getElementById("search-input");
// searchInput.addEventListener("input", searchPrograms);


/*
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
slides[currentSlide].className = 'slide';
currentSlide = (currentSlide+1)%slides.length;
slides[currentSlide].className = 'slide active';
}

const homepageDivs = document.querySelectorAll('.homepage');

homepageDivs.forEach(div => {
  div.addEventListener('click', () => {
    div.classList.toggle('folded');
  });
});


// search//
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value;

  // Redirect to the search results page with the query in the URL
  window.location.href = `/index-search-results.html?q=${query}`;

});*/
// window.onload = function() {
//   drawFlowchart();
// }

// function drawFlowchart() {
//   // Get the canvas element
//   var canvas = document.getElementById("flowchart");
//   var ctx = canvas.getContext("2d");

//   ctx.fillStyle = "white";
  
//   // Draw a rectangle for the preprocessor directives
//   ctx.fillRect(50, 50, 100, 50);
//   ctx.strokeRect(50, 50, 100, 50);
//   ctx.fillText("Preprocessor directives", 60, 75);

//   // Draw a rectangle for the main function
//   ctx.fillRect(200, 50, 100, 50);
//   ctx.strokeRect(200, 50, 100, 50);
//   ctx.fillText("Main function", 210, 75);

//   // Draw a rectangle for variable declarations
//   ctx.fillRect(350, 50, 100, 50);
//   ctx.strokeRect(350, 50, 100, 50);
//   ctx.fillText("Variable declarations", 360, 75);

//   // Draw a rectangle for the program logic
//   ctx.fillRect(200, 125, 100, 50);
//   ctx.strokeRect(200, 125, 100, 50);
//   ctx.fillText("Program logic", 210, 150);

//   // Draw a rectangle for the return statement
//   ctx.fillRect(350, 125, 100, 50);
//   ctx.strokeRect(350, 125, 100, 50);
//   ctx.fillText("Return statement", 360, 150);

//   // Draw a rectangle for other functions
//   ctx.fillRect(50, 200, 100, 50);
//   ctx.strokeRect(50, 200, 100, 50);
//   ctx.fillText("Other functions", 60, 225);

//   // Draw a rectangle for the closing curly brace
//   ctx.fillRect(200, 200, 100, 50);
//   ctx.strokeRect(200, 200, 100, 50);
//   ctx.fillText("Closing curly brace", 210, 225);
// }

// Add a comment to the comment container
// Add a comment to the comment container
// Initialize Firebase
let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  question.addEventListener("click", function () {
    question.classList.toggle("faq__question_active");
    const nextElement = question.nextElementSibling;
    nextElement.classList.toggle("faq__panel_active");
  });
});

let show_more = document.querySelectorAll(".show-more-q");
show_more.forEach((show_more) => {
  show_more.addEventListener("click", function () {
    show_more.classList.toggle("show-more-q_active");
    const nextElement = show_more.nextElementSibling;
    nextElement.classList.toggle("show-more-p_active");
  });
});


//indicator
const content = document.getElementById("body");
const indicator = document.getElementById("reading-position-indicator");

window.addEventListener("scroll", () => {
  const scrollPercentage = (content.getBoundingClientRect().top / content.offsetHeight) * 100;
  indicator.style.width = `${scrollPercentage}%`;
});

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCuRXTOaZgtNFv2L8HxDLTro54RyU7RZiU",
    authDomain: "csnotes-f969f.firebaseapp.com",
    projectId: "csnotes-f969f",
    storageBucket: "csnotes-f969f.appspot.com",
    messagingSenderId: "507895198415",
    appId: "1:507895198415:web:d3395afb6c8130c7d23dba"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database
  const database = firebase.database();

  // Get a reference to the comments node in the database
  const commentsRef = database.ref("comments");
  
  
  // Add a comment to the database and display it on the page
 // Add a comment to the database and display it on the page
function addComment() {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form elements
  var form = document.getElementById("comment-form");
  var name = form.elements.name.value;
  var comment = form.elements.comment.value;

    // Validate the form input
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("Name can only contain letters.");
      return;
    }    
    var name = document.getElementById("name").value;
    var nameArray = name.split(" ");
    if (nameArray.length < 2) {
      alert("Please enter both first name and last name");
      return;
    }
    if (comment === ""){
      alert("Please enter something in comment.");
      return;
    }

  // Get the current date and time
  // Get the current date and time
  var date = new Date();
  var dateString = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  var timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  // Get the comment container
  var commentContainer = document.getElementById("comment-container");

  // Create a new div element to hold the comment
  var commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  // Create a new span element to hold the comment name
  var nameSpan = document.createElement("span");
  nameSpan.classList.add("comment-name");
  nameSpan.textContent = name;

  // Create a new p element to hold the comment text
  var commentP = document.createElement("p");
  commentP.classList.add("comment-text");
  commentP.textContent = comment;
  

  var dateTimeSpan = document.createElement("span");
  dateTimeSpan.classList.add("comment-date");
  dateTimeSpan.textContent = `${comment.date} ${comment.time}`;

  // Add the name, comment, and date/time elements to the comment div
  commentDiv.appendChild(nameSpan);
  commentDiv.appendChild(commentP);
  commentDiv.appendChild(dateTimeSpan);

  // Add the comment to the database
  commentsRef.push({
    name: name,
    comment: comment,
    date: dateString,
    time: timeString
  });
  
  // // Show success message
  // var successMessage = document.getElementById("success-message");
  // successMessage.style.display = "block";
  
  // // Hide success message after 1.1 seconds
  // setTimeout(function() {
  // successMessage.style.display = "none";
  // }, 2100);
  // Reset the form
  form.reset();
}


  // Retrieve comments
  // Retrieve comments from the database and display them on the page
  commentsRef.on("value", function(snapshot) {
    // Get the comment container
    var commentContainer = document.getElementById("comment-container");

    // Clear the comment container
    commentContainer.innerHTML = "";
    // Get the loading icon
  var loadingIcon = document.querySelector(".loading-icon");

  // Hide the loading icon
  loadingIcon.style.display = "none";

    // Get the comments from the snapshot
    var comments = snapshot.val();

    // Iterate over the comments and add them to the page
    for (var key in comments) {
      // Get the current comment
      var comment = comments[key];

      // Create a new div element to hold the comment
      var commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

         // Create a new span element to hold the comment name
      var nameSpan = document.createElement("span");
      nameSpan.classList.add("comment-name");
      nameSpan.textContent = hideSensitiveWords(comment.name);

      // Create a new p element to hold the comment text
      var commentP = document.createElement("p");
      commentP.classList.add("comment-text");
      commentP.textContent = hideSensitiveWords(comment.comment);

     
      
     
      
        // Create a new span element to hold the date and time
    var dateTimeSpan = document.createElement("span");
    dateTimeSpan.classList.add("comment-date");
    dateTimeSpan.textContent = `${comment.date} ${comment.time}`;

      // Add the name and comment elements to the comment div
      commentDiv.appendChild(nameSpan);
      commentDiv.appendChild(commentP);
      commentDiv.appendChild(dateTimeSpan);

      // Add the comment div to the comment container
      commentContainer.insertBefore(commentDiv, commentContainer.firstChild);
    }
  });

  // Attach the addComment function to the form submit event
  document.getElementById("comment-form").addEventListener("submit", addComment);

  
  

