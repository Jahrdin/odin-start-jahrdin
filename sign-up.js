const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const message = document.createElement("p");
confirm.insertAdjacentElement("afterend", message);
const form = document.querySelector("form");

function checkPassword(){
    if(password.value.length > 0 && confirm.value.length > 0){
    if (password.value !== confirm.value) {
  confirm.classList.add("error");
  confirm.classList.remove("success");
  message.textContent = "❌ Les mots de passe ne correspondent pas";
  message.className = "error-message"; 
} else {
  confirm.classList.add("success");
  confirm.classList.remove("error");
  message.textContent = "✅ Les mots de passe correspondent";
  message.className = "success-message";
}
} 
}

password.addEventListener("input", checkPassword);
confirm.addEventListener("input", checkPassword);

form.addEventListener("submit", (event) => {
    checkPassword();
    if(password.value !== confirm.value){
        event.preventDefault();
    }
});

