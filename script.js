function toggleVideo() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");
    
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
  function changeText() {
    var element = document.getElementById("demo");
    element.innerHTML = "Text has been changed!";
  }
  function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var email = document.forms["myForm"]["email"].value;
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var isValid = true;
  
    if (firstName === "") {
      document.getElementById("firstName").placeholder = "First Name is required";
      document.getElementById("firstName").classList.add("error-field");
      document.getElementById("firstNameError").textContent = "First Name is required";
      document.getElementById("firstNameError").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("firstName").classList.remove("error-field");
      document.getElementById("firstNameError").textContent = "";
    }
  
    if (lastName === "") {
      document.getElementById("lastName").placeholder = "Last Name is required";
      document.getElementById("lastName").classList.add("error-field");
      document.getElementById("lastNameError").textContent = "Last Name is required";
      document.getElementById("lastNameError").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("lastName").classList.remove("error-field");
      document.getElementById("lastNameError").textContent = "";
    }
  
    if (email === "") {
      document.getElementById("email").placeholder = "Email is required";
      document.getElementById("email").classList.add("error-field");
      document.getElementById("emailError").textContent = "Email is required";
      document.getElementById("emailError").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("error-field");
      document.getElementById("emailError").textContent = "";
    }
  
    if (username === "") {
      document.getElementById("username").placeholder = "Username is required";
      document.getElementById("username").classList.add("error-field");
      document.getElementById("usernameError").textContent = "Username is required";
      document.getElementById("usernameError").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("username").classList.remove("error-field");
      document.getElementById("usernameError").textContent = "";
    }
  
    if (password === "") {
      document.getElementById("password").placeholder = "Password is required";
      document.getElementById("password").classList.add("error-field");
      document.getElementById("passwordError").textContent = "Password is required";
      document.getElementById("passwordError").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("password").classList.remove("error-field");
      document.getElementById("passwordError").textContent = "";
    }
  
    if (!isValid) {
      document.querySelector(".error-field").focus();
    }
  
    return isValid;
  }
  