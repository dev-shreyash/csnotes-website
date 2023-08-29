// Function to set a cookie
function setCookie(cookieName, cookieValue, expiresInDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expiresInDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

            // Enable interactions for all buttons and anchor tags
   
// Function to enable all buttons and anchor tags
function enableButtonsAndAnchors() {
    const buttons = document.querySelectorAll("button");
    const anchors = document.querySelectorAll("a");

    buttons.forEach((button) => {
        button.style.pointerEvents = "auto";
    });

    anchors.forEach((anchor) => {
        anchor.style.pointerEvents = "auto";
    });
}

// Check if a passkey cookie exists
const passkeyCookie = getCookie("passkey");
if (passkeyCookie) {
    // The passkey cookie exists, you can proceed with your website content.
    const passkeyContainer = document.getElementById("passkey-container");
    passkeyContainer.style.display = "none"; // Hide the passkey container
} else {
    // The passkey cookie doesn't exist, show the passkey prompt.
    const passkeyContainer = document.getElementById("passkey-container");
    passkeyContainer.style.display = "block"; // Show the passkey container

    const passkeyInput = document.getElementById("passkey-input");
    const passkeySubmit = document.getElementById("passkey-submit");

    // Event listener for the submit button
    passkeySubmit.addEventListener("click", function () {
        const enteredPasskey = passkeyInput.value;
        
        // You should implement your own logic to validate the passkey.
        // For example, you can check if the entered passkey matches a predefined value.

        if (enteredPasskey === "______") {
            enableButtonsAndAnchors();
            // Store the passkey in a cookie that expires when the browser is closed.
            setCookie("passkey", enteredPasskey, 0);
            passkeyContainer.style.display = "none"; // Hide the passkey container

            // Remove the blur effect from the body
            document.body.style.filter = "none";
            document.body.style.overflow = "auto";
            document.elk.style.filter = "none";
// Remove the CSS rule that prevents text selection for the entire HTML document
document.documentElement.style.webkitUserSelect = 'auto';
document.documentElement.style.MozUserSelect = 'auto';
document.documentElement.style.msUserSelect = 'auto';
document.documentElement.style.userSelect = 'auto';




// Call the function to enable buttons and anchor tags when needed



        } else {
            alert("Invalid passkey. Please try again.");
        }
    });
}


window.onload = function () {
    const searchInput = document.getElementById("passkey-input");
    const searchBtn = document.getElementById("passkey-submit");

    // Focus on search input when the page loads
    // searchInput.focus();

    // Add event listener to search button to trigger search on click
    searchBtn.addEventListener("click", function () {
        // Your search button click logic here
    });

    // Add event listener to search input to trigger search on pressing Enter key
    searchInput.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            searchBtn.click();
        }
    });
};