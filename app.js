
// JAVASCRIPT LOGIN FORM 
document.getElementById('loginForm').addEventListener('submit',function(event){
  event.preventDefault();

  const username= document.getElementById('username') .value.trim();
  const password= document.getElementById('password') .value.trim();
  const errorMessage=document.getElementById('error-message');

  if(username==='admin' && password==='password123'){
    errorMessage.style.display = 'none';
    alert('Login Successfull');
  }
else{
  errorMessage.textContent='Invalid username or password';
  errorMessage.style.display = 'block';
}
});


// JAVASCRIPT SIGNUP FORM
document.getElementById('signupForm').addEventListener('submit',function(event){
  event.preventDefault();

const name=document.getElementById('name').value.trim();

const email=document.getElementById('email').value.trim();


const password=document.getElementById('password').value;

const confirmPassword=document.getElementById('confirm-password').value;

const errorMessage=document.getElementById('error-message');

const passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
if(!passwordRegex.test(password)){
  errorMessage.textContent='Password must be at least 8 characters long, include a number and a special character.';
  errorMessage.style.display='block';
  return;
}


if (password !== confirmPassword) {
  errorMessage.textContent = 'Passwords do not match.';
  errorMessage.style.display = 'block';
  return;
}



errorMessage.style.display='none';
alert(`Welcome, ${name}! Your account has been created successfully.`);


});









