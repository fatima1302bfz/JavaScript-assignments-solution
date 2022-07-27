let name = document.getElementById("input-name");
let email = document.getElementById("input-email");
let field = document.getElementById("input-field");
let skill = document.getElementById("skills");
let btn = document.getElementById("btn");

//save name
name.addEventListener("input", function (e) {
    window.sessionStorage.setItem("name", e.currentTarget.value);
  });
  // onload page we get the name value from sessionstorage and added to input text
  if (window.sessionStorage.getItem("name")) {
    name.value = window.sessionStorage.getItem("name");
  }

//save email
email.addEventListener("input", function (e) {
        window.sessionStorage.setItem("email", e.currentTarget.value);
      });
      // onload page we get the email value from sessionstorage and added to input text
      if (window.sessionStorage.getItem("email")) {
        email.value = window.sessionStorage.getItem("email");
      }
//save field
field.addEventListener("input", function (e) {
        window.sessionStorage.setItem("field", e.currentTarget.value);
      });
      
      if (window.sessionStorage.getItem("field")) {
        field.value = window.sessionStorage.getItem("field");
      }

//save skills
skill.addEventListener("change", function (e) {
        window.sessionStorage.setItem("skill", e.currentTarget.value);
      });
      
      if (window.sessionStorage.getItem("skill")) {
        skill.value = window.sessionStorage.getItem("skill");
      }
