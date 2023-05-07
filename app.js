const hidingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle('show', entry.isIntersecting);
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(((element, i) => {
	element.style.transitionDelay = i * 200 + "ms";
	hidingObserver.observe(element);
}));


/*projects*/
document.addEventListener("DOMContentLoaded",function(){
  
	var body=document.body;
	 setInterval(createStar,100);
	 function createStar(){
	   var right=Math.random()*500;
	   var top=Math.random()*screen.height;
	   var star=document.createElement("div");
	star.classList.add("star")
	 body.appendChild(star);
	 setInterval(runStar,10);
	   star.style.top=top+"px";
	 function runStar(){
	   if(right>=screen.width){
		 star.remove();
	   }
	   right+=3;
	   star.style.right=right+"px";
	 }
	 } 
   })

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDXNDkXESeBQS8CY5RNLeaZH88NyTe-NBs",
	authDomain: "code-space-81c09.firebaseapp.com",
	// databaseURL: "https://code-space-81c09-default-rtdb.firebaseio.com",
	projectId: "code-space-81c09",
	storageBucket: "code-space-81c09.appspot.com",
	messagingSenderId: "63525844455",
	appId: "1:63525844455:web:035cbfcbad9c4240527942",
	// measurementId: "G-CKCBB75JLL"
};
// firebase.initializeApp(config);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  // Get a reference to the database
const database = firebase.database();

  // Get a reference to the comments node in the database
const commentsRef = database.ref("CODE SPACE");

  // Add a comment to the database and display it on the page
 // Add a comment to the database and display it on the page
function addCode() {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form elements
  var form = document.getElementById("program-form");
  var yourName = form.elements.yourName.value;
  var programName = form.elements.programName.value;
  var programLanguage = form.elements.programLanguage.value;
  var programCODE = form.elements.programCODE.value;

    // Validate the form input
    if (yourName === "") {
      alert("Please enter your name.");
      return;
    }
    if (programName === ""){
      alert("Please enter program name.");
      return;
    }
	if (program-language === ""){
		alert("Please programming language.");
		return;
	}
	if (programCODE === ""){
		alert("Please program code.");
		return;
	}

  // Get the current date and time
  var date = new Date();
  var dateString = date.toLocaleDateString();
  var timeString = date.toLocaleTimeString();

  // Get the comment container
  var commentContainer = document.getElementById("program-container");

  // Create a new div element to hold the comment
  var commentDiv = document.createElement("div");
  commentDiv.classList.add("dis-code-space");

  // Create a new span element to hold the comment name
  var nameSpan = document.createElement("span");
  nameSpan.classList.add("dis-your-name");
  nameSpan.textContent = yourName;

  // Create a new p element to hold the comment text
  var programNameP = document.createElement("p");
  commentP.classList.add("dis-program-name");
  commentP.textContent = programName ;

  var programLanguageP = document.createElement("p");
  commentP.classList.add("dis-program-language");
  commentP.textContent = programingLanguage;

  var programCODE = document.createElement("code");
  commentP.classList.add("dis-program-code");
  commentP.textContent = programcode;

  // Create a new span element to hold the date and time
  var dateTimeSpan = document.createElement("span");
  dateTimeSpan.classList.add("comment-date");
  dateTimeSpan.textContent = `${dateString} ${timeString}`;

  // Add the name, comment, and date/time elements to the comment div
  commentDiv.appendChild(nameSpan);
  commentDiv.appendChild(programNameP);
  commentDiv.appendChild(programLanguageP);
  commentDiv.appendChild(programpCODE);
  commentDiv.appendChild(dateTimeSpan);

  // Add the comment to the database
  commentsRef.push({
    name: name,
    programName: programName,
	  programLanguage: programLanguage,
	  programCODE:programCODE,
    date: dateString,
    time: timeString
  });

  // Reset the form
  form.reset();
}


  // Retrieve comments
  // Retrieve comments from the database and display them on the page
  commentsRef.on("value", function(snapshot) {
    // Get the comment container
    var commentContainer = document.getElementById("program-container");

    // Clear the comment container
    commentContainer.innerHTML = "";
    // Get the loading icon
  var loadingIcon = document.querySelector(".loading-icon");

  // Hide the loading icon
  loadingIcon.style.display = "none";

    // Get the comments from the snapshot
    var comments = snapshot.val();

    // Iterate over the comments and add them to the page
    for (var key in programName) {
      // Get the current comment
      var comment = programName[key];

      // Create a new div element to hold the comment
      var commentDiv = document.createElement("div");
      commentDiv.classList.add("dis-code-space");

      // Create a new span element to hold the comment name
      var nameSpan = document.createElement("span");
      nameSpan.classList.add("dis-your-name");
      nameSpan.textContent = your.name;

      // Create a new p element to hold the comment text
      var programNameP = document.createElement("p");
      commentP.classList.add("dis-program-name");
      commentP.textContent = program.name;

	  var programLanguageP = document.createElement("p");
      commentP.classList.add("dis-program-language");
      commentP.textContent = program.language;

	  var programCODE= document.createElement("code");
      commentP.classList.add("dis-program-code");
      commentP.textContent = program.code;
        // Create a new span element to hold the date and time
    var dateTimeSpan = document.createElement("span");
    dateTimeSpan.classList.add("comment-date");
    dateTimeSpan.textContent = `${comment.date} ${comment.time}`;

      // Add the name and comment elements to the comment div
      commentDiv.appendChild(nameSpan);
      commentDiv.appendChild(programNameP);
	    commentDiv.appendChild(programLanguageP);
	    commentDiv.appendChild(programCODE);
      commentDiv.appendChild(dateTimeSpan);

      // Add the comment div to the comment container
      commentContainer.insertBefore(commentDiv, commentContainer.firstChild);
    }
  });

  // Attach the addComment function to the form submit event
  document.getElementById("program-form").addEventListener("submit", addCode);

  
  

// // Get a reference to the database service
// var database = firebase.database();

// // Get form elements
// var code = document.getElementById("code-container")
// var form = document.getElementById("program-form");
// var yourName = document.getElementById("your-name");
// var programName = document.getElementById("program-name");
// var programLanguage = document.getElementById("program-language");
// var programCode = document.getElementById("program-code");

// // Add submit event listener to form
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // Check if all fields are filled
//     if (!yourName.value || !programName.value || !programLanguage.value || !programCode.value) {
//         alert("Please fill in all fields!");
//     } elif(programCode.value = null){
// 		alert("Please select the langauge !");
// 	}
// 	else {
//         // Get current time and date
//         var currentTime = new Date();
//         var timestamp = currentTime.toLocaleString();
//         // Create data object to send to Firebase
//         var data = {
//             yourName: yourName.value,
//             programName: programName.value,
//             programLanguage: programLanguage.value,
//             programCode: programCode.value,
//             timestamp: timestamp
//         };
//         // Send data to Firebase
//         database.ref().push(data);
//         // Show success message
//         alert("Program submitted successfully!");
//     }
// });

// // Get a reference to the database service
// var database = firebase.database();

// // Get a reference to the data
// var ref = database.ref();

// // Get data from Firebase
// ref.on("value", function(snapshot) {
//     var data = snapshot.val();
//     console.log(data);
// 	  // Clear the previous data
// 	  var displayData = document.getElementById("display-data");
// 	  displayData.innerHTML = "";
// 	  // Loop through the data and display it
// 	  for (var key in data) {
// 		  var program = data[key];
// 		  displayData.innerHTML += "<div><h3>Program Name: " + program.programName + "</h3>" +
// 								  "<p>Submitted by: " + program.yourName + "</p>" +
// 								  "<p>Programming Language: " + program.programLanguage + "</p>" +
// 								  "<pre>" + program.programCode + "</pre>" +
// 								  "<p>Submitted on: " + program.timestamp + "</p></div>";
// 	  }
// }, function(error) {
//     console.log("Error: " + error.code);
// });
