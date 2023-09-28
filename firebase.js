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
hljs.initHighlightingOnLoad();


//program searchbar
window.onload = function() {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  // Focus on search input when the page loads
  // searchInput.focus();

  // Add event listener to search button to trigger search on click
  searchBtn.addEventListener("click", searchPrograms);

  // Add event listener to search input to trigger search on pressing Enter key
  searchInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
  }
  });
}


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
// // Function to search programs
// function searchPrograms() {
//   const searchInputValue = document.getElementById("search-input").value;
//   const searchWords = searchInputValue.split(" ");
//   const programs = document.getElementsByClassName("dis-code-space");

//   // Array to store the matched programs
//   const matchedPrograms = [];

//   // Loop through all programs
//   for (let i = 0; i < programs.length; i++) {
//       const name = programs[i].getElementsByClassName("dis-your-name")[0].innerHTML;
//       const title = programs[i].getElementsByClassName("dis-program-name")[0].innerHTML;
//       const language = programs[i].getElementsByClassName("dis-program-language")[0].innerHTML;
//       let matches = 0;

//       // Loop through all search words
//       for (let j = 0; j < searchWords.length; j++) {
//           // Increment matches if search word is found in title, name or language of a program
//           if (title.toUpperCase().includes(searchWords[j].toUpperCase())) {
//               matches++;
//           }
//           if (name.toUpperCase().includes(searchWords[j].toUpperCase())) {
//               matches++;
//           }
//           if (language.toUpperCase().includes(searchWords[j].toUpperCase())) {
//               matches++;
//           }
//       }

//       // If there are any matches, push the program and the number of matches to the array
//       if (matches > 0) {
//           matchedPrograms.push({ program: programs[i], matches });
//       }
//   }

//   // Sort the matched programs by the number of matches
//   // Sort the matched programs by the number of matches
// matchedPrograms.sort((a, b) => {
//   if (b.matches !== a.matches) {
//       return a.matches - b.matches;
//   } else {
//       return a.program.innerHTML.localeCompare(b.program.innerHTML);
//   }
// });

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
//         }
//  }
// }

function searchPrograms() {
  const searchInputValue = document.getElementById("search-input").value;
  const programs = document.getElementsByClassName("dis-code-space");

  // Array to store the matched programs
  const matchedPrograms = [];

  // Loop through all programs
  for (let i = 0; i < programs.length; i++) {
      const name = programs[i].getElementsByClassName("dis-your-name")[0].innerHTML;
      const title = programs[i].getElementsByClassName("dis-program-name")[0].innerHTML;
      const language = programs[i].getElementsByClassName("dis-program-language")[0].innerHTML;
      const programText = `${name} ${title} ${language}`;

      // Check if the program text contains the search phrase
      if (programText.toUpperCase().includes(searchInputValue.toUpperCase())) {
        // Count the number of matches
        const matches = programText.toUpperCase().split(searchInputValue.toUpperCase()).length - 1;
        matchedPrograms.push({ program: programs[i], matches });
      }
  }

  // Sort the matched programs by the number of matches
  matchedPrograms.sort((a, b) => {
    if (b.matches !== a.matches) {
        return a.matches - b.matches;
    } else {
        return a.program.innerHTML.localeCompare(b.program.innerHTML);
    }
  });

  // Display the matched programs
  for (let i = 0; i < matchedPrograms.length; i++) {
      matchedPrograms[i].program.style.display = "block";
  }

  // Hide the non-matched programs
  for (let i = 0; i < programs.length; i++) {
      let isMatched = false;

      // Check if the program is matched
      for (let j = 0; j < matchedPrograms.length; j++) {
          if (programs[i] === matchedPrograms[j].program) {
              isMatched = true;
              break;
          }
      }

      // If the program is not matched, hide it
      if (!isMatched) {
        programs[i].style.display = "none";
      }
  }
}
// Add event listener to search input field
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchPrograms);


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
navbar.style.transition = "all 0.5s ease-in-out";
disco.style.transition = "all 0s ease-in-out";
} else {
// If not, remove the scrolled class from the navbar with a fade out effect
navbar.classList.remove('scrolled');
disco.classList.remove('scrolled-disco');
navbar.style.transition = "all 0.5s ease-in-out";
disco.style.transition = "all 0.5s ease-in-out";
}
});



const header = document.querySelector('.header');
const disco2 = document.querySelector('.disco');
const text = document.querySelector('.text');
const body = document.querySelector('body');
let lastScroll = 0;

window.addEventListener('scroll', function() {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > body.offsetHeight / 2) {
    header.style.top = "-80px";
    disco2.style.top = "-80px";
    header.style.transition = "all 0.5s ease-in-out";
    disco2.style.transition = "all 0.5s ease-in-out";
    text.innerHTML = "Scrolling Down";
  } else {
    header.style.top = "0";
    disco2.style.top = "0";
    header.style.transition = "all 0.5s ease-in-out";
    disco2.style.transition = "all 0.5s ease-in-out";
    text.innerHTML = "Scrolling Up";
  }
  lastScroll = currentScroll;
});
 // Initialize Firebase
 var config = {
 	apiKey: "AIzaSyDXNDkXESeBQS8CY5RNLeaZH88NyTe-NBs",
 	authDomain: "code-space-81c09.firebaseapp.com",
 	databaseURL: "https://code-space-81c09-default-rtdb.firebaseio.com",
 	projectId: "code-space-81c09",
 	storageBucket: "code-space-81c09.appspot.com",
 	messagingSenderId: "63525844455",
 	appId: "1:63525844455:web:035cbfcbad9c4240527942",
 	measurementId: "G-CKCBB75JLL"
 };
 
   // Initialize Firebase
   firebase.initializeApp(config);
 
   // Get a reference to the database
 const database = firebase.database();
 
   // Get a reference to the comments node in the database
 const programRef = database.ref("CODE SPACE");

  // Add a comment to the database and display it on the page
 // Add a comment to the database and display it on the page
function addCode() {
  // Prevent the form from submitting
  event.preventDefault();

// Get the form elements
var form = document.getElementById("program-form");
var yourName = document.getElementById("yourName").value;
var programName = document.getElementById("programName").value;
var programLanguage = document.getElementById("programLanguage").value;
var programCODE = document.getElementById("programCODE").value;

// Validate the form input
if (yourName === "") {
  alert("Name cannot be blank");
  return;
}
var name = document.getElementById("yourName").value;
var nameArray = name.split(" ");
if (nameArray.length < 2) {
  alert("Please enter both first name and last name");
  return;
}
if (!/^[a-zA-Z ]+$/.test(yourName)) {
  alert("Name can only contain letters.");
  return;
}
// if (yourName === "Fuck","fuck","fuck you","Madarchod","madarchod","Bsdk","Fuck you") {
//   alert("Don't be an ash0le");
//   return;
// }
var programname = document.getElementById("programName").value;
var programnameArray = programname.split(" ");
if (programnameArray.length < 2) {
  alert("Enter a title with more than one word");
  return;
}
if (programName === ""){
  alert("Program name cannot be blank");
  return;
}
// if (programName === "Fuck","fuck","fuck you","Madarchod","madarchod","Bsdk","Fuck you") {
//   alert("Don't be an ash0le");
//   return;
// }
if (programLanguage ==="Select"){
  alert("Please select programming language");
  return;
}
if (programCODE === ""){
  alert("Please paste program code");
  return;
}

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

// Create a new program object
var newProgram = {
  name: yourName,
  programName: programName,
  programLanguage: programLanguage,
  programCODE: programCODE,
  date: dateString,
  time: timeString
};

// Get a new key for the program
var newProgramKey = programRef.push().key;

// Write the new program's data simultaneously in the program list
var updates = {};
updates[newProgramKey] = newProgram;
programRef.update(updates);

// Show success message
var successMessage = document.getElementById("success-message");
successMessage.style.display = "block";


// Hide success message after 1.1 seconds
setTimeout(function() {
successMessage.style.display = "none";
}, 2100);

var codeSpace = document.querySelector('.code-space');
  codeSpace.style.display = 'none';
  setTimeout(function(){
      codeSpace.style.display = 'block';
  }, 30000); 

  // Clear the form
  form.reset();

 
 
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

 
 
// Get a reference to the program list, ordered by the time property in descending order
// Get a reference to the program list, ordered by the time property in descending order
var orderedProgramRef = programRef.orderByChild("date + time");

// Listen for changes to the orderedProgramRef
orderedProgramRef.on("value", function(snapshot) {
  // Get the program data from the snapshot
  var programs = snapshot.val();
  // Get the comment container
  var commentContainer = document.getElementById("program-container");

  // Clear the comment container
  commentContainer.innerHTML = "";
  
  var loadingIcon = document.querySelector(".loading-icon");

  // Hide the loading icon
  loadingIcon.style.display = "none";

  // Iterate over the program data in reverse order
  var programArr = [];
  snapshot.forEach(function(childSnapshot) {
    programArr.push(childSnapshot.val());
  });
  programArr.reverse().forEach(function(program) {
    // Create a new div element to hold the comment
    var commentDiv = document.createElement("div");
    commentDiv.classList.add("dis-code-space");

    // Create a new span element to hold the comment name
    var yourNamespan = document.createElement("span");
    yourNamespan.classList.add("dis-your-name");
    yourNamespan.textContent = hideSensitiveWords(program.name.toUpperCase());

    // Create a new p element to hold the comment text
    var programNameP = document.createElement("p");
    programNameP.classList.add("dis-program-name");
    programNameP.textContent = "Program Title :  " + program.programName;

    var programLanguageP = document.createElement("p");
    programLanguageP.classList.add("dis-program-language");
    programLanguageP.textContent = "Programming language :  " + program.programLanguage;

    var programCodeLabelP = document.createElement("P");
    programCodeLabelP.classList.add("dis-program-code-name");
    programCodeLabelP.textContent =  program.programLanguage.toUpperCase() +" CODE : ";
    
     // Create a new button element for the copy button
     var copyButton = document.createElement("div");
     copyButton.classList.add("copy-button")
     // copyButton.classList.add("fa", "fa-copy");
     copyButton.innerHTML = '<button class="copy"><i class="fa fa-copy"></i> Copy code</button>';
   
    // Add the click event listener to the copy button
    copyButton.querySelector("button").addEventListener("click", function()  {
      // Create a new textarea element to hold the code
      var textArea = document.createElement("textarea");
      textArea.value = program.programCODE;
      // Append the textarea to the body
      document.body.appendChild(textArea);
      // Select the text in the textarea
      textArea.select();
      // Execute the copy command
      document.execCommand("copy");
      // Remove the textarea from the body
      textArea.remove();
      // Show an alert that the code was copied
      copyButton.innerHTML = '<button class="copy"><i class="fa fa-check"></i> Code copied</button>';
      setTimeout(function() {
        copyButton.innerHTML = '<button class="copy"><i class="fa fa-copy"></i> Copy code</button>';
      }, 8000);
      // alert("Code copied to clipboard!");
    });
    
    var programCodePre = document.createElement("pre");
    programCodePre.classList.add("dis-program-code");
    programCodePre.textContent = program.programCODE;
    programCodePre.classList.add("language-"+program.programLanguage);
    hljs.highlightBlock(programCodePre);

    // Create a new span element to hold the date and time
    var dateTimeSpan = document.createElement("span");
    dateTimeSpan.classList.add("program-date");
    dateTimeSpan.textContent = `${program.date} on ${program.time}`;
    
    // Add the name, comment, and date/time elements to the comment div
    commentDiv.appendChild(yourNamespan);
    commentDiv.appendChild(programNameP);
    commentDiv.appendChild(programLanguageP);
    commentDiv.appendChild(programCodeLabelP)
     // Add the copy button to the comment div
    commentDiv.appendChild(copyButton)
    commentDiv.appendChild(programCodePre);
    commentDiv.appendChild(dateTimeSpan);
    

    // Add the comment div to the comment container
    commentContainer.appendChild(commentDiv);
  });
});



  // // Attach the addComment function to the form submit event
  // document.getElementById("program-form").addEventListener("submit", addCode);

  

  // // Iterate over the program data in reverse order
  // var programArr = [];
  // snapshot.forEach(function(childSnapshot) {
  //   programArr.push(childSnapshot.val());
  // });
  // programArr.reverse().forEach(function(program) {
  //   // Create a new div element to hold the program
  //   var programDiv = document.createElement("div");
  //   programDiv.classList.add("program");

  //   // Create new elements to hold the program name, language, and code
  //   var programNameSpan = document.createElement("span");
  //   programNameSpan.classList.add("program-name");
  //   programNameSpan.textContent = program.programName;
  //   var programLanguageSpan = document.createElement("span");
  //   programLanguageSpan.classList.add("program-language");
  //   programLanguageSpan.textContent = program.programLanguage;
  //   var programCodePre = document.createElement("pre");
  //   programCodePre.classList.add("dis-program-code");
  //   programCodePre.textContent = program.programCODE;
  //   programCodePre.classList.add("language-"+program.programLanguage);
  //   hljs.highlightBlock(programCodePre);

  //   // Add the program name, language, and code elements to the program div
  //   programDiv.appendChild(programNameSpan);
  //   programDiv.appendChild(programLanguageSpan);
  //   programDiv.appendChild(programCodePre);

  //   // Add the program to the container
  //   programContainer.appendChild(programDiv);
  // });


// Highlight the code




var form = document.getElementById("program-form");
form.addEventListener("submit", addCode);



  // Attach the addComment function to the form submit event
  document.getElementById("program-form").addEventListener("submit", addCode);
  document.getElementById("your_parent_element").appendChild(programCODEpre);

  

//comment page
