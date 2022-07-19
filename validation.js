function validation() {
  const password = document.getElementById("password").value;
  const passConfirm = document.getElementById("password_confirm").value;
  const validation = document.getElementById("validation");
  let ok = true;
  if (password != passConfirm) {
    document.getElementById("password").style.borderColor = "#E34234";
    document.getElementById("password_confirm").style.borderColor = "#E34234";
    validation.innerHTML = "* Passwords do not match";
    return false;
  }
  return ok;
}
