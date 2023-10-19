const registerForm = document.getElementById("form");
const firstNameTag = document.getElementsByName("firstName")[0];
const lastNameTag = document.getElementsByName("lastName")[0];
const emailTag = document.getElementsByName("email")[0];
const passwordTag = document.getElementsByName("password")[0];

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target.elements;
  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const email = form.email.value;
  const password = form.password.value;

  const result = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  console.log(result);

  if (firstName === "") {
    firstNameTag.style.border = "2px solid hsl(0, 100%, 74%)";
    firstNameTag.style.backgroundImage = "url('./images/icon-error.svg')";
    firstNameTag.style.backgroundRepeat = "no-repeat";
    firstNameTag.style.backgroundPosition = "center";
  } else {
    firstNameTag.style.border = "2px solid hsl(246, 25%, 77%)";
    firstNameTag.style.backgroundImage = "none";
  }

  if (lastName === "") {
    lastNameTag.style.border = "2px solid hsl(0, 100%, 74%)";
    lastNameTag.style.backgroundImage = "url('./images/icon-error.svg')";
    lastNameTag.style.backgroundRepeat = "no-repeat";
    lastNameTag.style.backgroundPosition = "center";
  } else {
    lastNameTag.style.border = "2px solid hsl(246, 25%, 77%)";
    lastNameTag.style.backgroundImage = "none";
  }
  if (email === "") {
    emailTag.style.border = "2px solid hsl(0, 100%, 74%)";
    emailTag.style.backgroundImage = "url('./images/icon-error.svg')";
    emailTag.style.backgroundRepeat = "no-repeat";
    emailTag.style.backgroundPosition = "center";
  } else {
    emailTag.style.border = "2px solid hsl(246, 25%, 77%)";
    emailTag.style.backgroundImage = "none";
  }
  if (password === "") {
    passwordTag.style.border = "2px solid hsl(0, 100%, 74%)";
    passwordTag.style.backgroundImage = "url('./images/icon-error.svg')";
    passwordTag.style.backgroundRepeat = "no-repeat";
    passwordTag.style.backgroundPosition = "center";
  } else {
    passwordTag.style.border = "2px solid hsl(246, 25%, 77%)";
    passwordTag.style.backgroundImage = "none";
  }
  if (firstName !== "" && lastName !== "" && email !== "" && password !== "") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    registerForm.reset();
  } else {
    Swal.fire({
      title: "Oops...",
      text: "You must fill out all the fields of the form",
      icon: "error",
      confirmButtonText: "Continue",
    });
  }
}

registerForm.addEventListener("submit", handleSubmit);
