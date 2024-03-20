const request = document.getElementById("request");
const inputDiv = document.getElementById("input-div");

document.addEventListener("DOMContentLoaded", () => {
  request.addEventListener("click", () => {
    imprimirerror();
  });
});

function imprimirerror() {
  if (inputDiv.querySelector(".error")) {
    inputDiv.querySelector(".error").remove();
  }

  const error = document.createElement("p");
  error.textContent = "Oops! Please check your email";
  error.classList.add("error");

  inputDiv.appendChild(error);
}
