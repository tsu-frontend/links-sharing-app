const loginForm = document.querySelector(".loginForm");

const email = document.querySelector(".email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".email-error");

const password = document.querySelector(".password");
const passwordLabel = document.querySelector(".password-label");
const passwordError = document.querySelector(".password-error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const isEmailValid = validateEmail(email, emailLabel, emailError);
  const isPasswordValid = validatePassword(
    password,
    passwordLabel,
    passwordError
  );

  if (isEmailValid && isPasswordValid) {
    window.location.href = "../pages/profile.html";
  }
});

email.addEventListener("input", () =>
  setSuccess(email, emailLabel, emailError)
);
password.addEventListener("input", () =>
  setSuccess(password, passwordLabel, passwordError)
);

function validateEmail(email, emailLabel, emailError) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.trim()) {
    return setError(email, emailLabel, emailError, "Can’t be empty");
  } else if (!emailRegex.test(email.value.trim())) {
    return setError(email, emailLabel, emailError, "Invalid email format");
  }

  return setSuccess(email, emailLabel, emailError);
}

function validatePassword(password, passwordLabel, passwordError) {
  const minLength = 6;
  const maxLength = 20;
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  if (!password.value.trim()) {
    return setError(password, passwordLabel, passwordError, "Can’t be empty");
  } else if (password.value.length < minLength) {
    return setError(
      password,
      passwordLabel,
      passwordError,
      `Password must be at least ${minLength} characters`
    );
  } else if (password.value.length > maxLength) {
    return setError(
      password,
      passwordLabel,
      passwordError,
      `Password must be no more than ${maxLength} characters`
    );
  } else if (!strongPasswordRegex.test(password.value)) {
    return setError(
      password,
      passwordLabel,
      passwordError,
      "Must include uppercase, lowercase, number & symbol."
    );
  }

  return setSuccess(password, passwordLabel, passwordError);
}

function setError(input, label, errorElement, message) {
  input.parentElement.style.border = "1px solid red";
  label.style.color = "red";
  errorElement.classList.remove("hidden");
  errorElement.textContent = message;
  return false;
}

function setSuccess(input, label, errorElement) {
  input.parentElement.style.border = "1px solid black";
  label.style.color = "black";
  errorElement.classList.add("hidden");
  return true;
}
