// FORM VALIDATION
function validateForm() {
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let number = document.getElementById('number').value


  // check if email and password values are empty, throw an error, else, continue
  if (!email || !password) {
    alert('All fields are required')
    return;
  }

  // check if password lenghth is less than 8 or if it is greater than 10
  if (password.length < 8) {
    alert('Password characters must not be less than 8')
    return;
  } else if (password.length > 10) {
    alert('Password characters must not exceed 10')
    return;
  }

  // check if num value is less than 100 or greater than 200
  if (number < 100) {
    alert('The minimum value you can input is 100')
    return;
  } else if (number > 200) {
    alert('The maximum value you can input is 200')
    return;
  } else {
    alert('You are on track!')
    return;
  }
}
// handle form submission and prevent javascript default action 
function submitForm(event) {
  event.preventDefault();
  alert('Form submitted successfully.')
  // redirect to a new page
  window.location.replace('about.html')
}
