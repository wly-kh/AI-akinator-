// adding this function so dark / light mode is carried over when the user navigates to a different page
function applySavedTheme() {
    // checking if darkmode was toggled on
    var savedTheme = localStorage.getItem("theme");
    
    // checking the value of the saved theme and applying it if it was enabled
    if (savedTheme === "enabled") {
        document.body.classList.add("dark-theme");
        
    }
}


function toggleDarkMode() {
    // storing the element which we want to change the theme
    var element = document.body;
    // toggling the class "dark-theme" on the element
    element.classList.toggle("dark-theme");

    // Logic to save the preference 
    if (element.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "enabled");
    } else {
        localStorage.setItem("theme", "disabled");
    }
}

//calling the function to apply the saved theme when the page loads
document.getElementById("signup").addEventListener("submit", function(event) {
    var p1 = document.getElementById("pwd01").value;
    var p2 = document.getElementById("pwd02").value;

    if (p1 !== p2) {
        event.preventDefault(); 
        alert("password do not match");
    }
});

function validateform() {
    var  x = document.forms["signin"]["email"].value;
    if(x == ""){
        window.alert("email must be filled");
    }
}