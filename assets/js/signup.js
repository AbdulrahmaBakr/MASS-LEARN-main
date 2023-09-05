const formy = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

formy.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validateInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  // set Items to localstorage
   

  if(usernameValue != ''&&emailValue != ''&&passwordValue != ''&&password2Value != ''&&isValidEmail(emailValue)&&passwordValue.length >= 8 && password2Value === passwordValue){
    localStorage.setItem('username', usernameValue);
    localStorage.setItem('emailValue', emailValue);
    localStorage.setItem('passwordValue', passwordValue);
    localStorage.setItem('password2Value', password2Value);
    window.location.href = '../course-details.html';
  }
 
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length <= 8) {
    setError(password, 'Password must be at least 8 character.');
  } else {
    setSuccess(password);
  }

  if (password2Value === '') {
    setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
   
  }
}

// let form = document.getElementById('signupForm');
// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let password = document.getElementById('password');
// let psw = document.getElementById('psw');
// let btn = document.getElementById('btn');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   validation();
// });
// const setError = (ele, msg) => {
//   let box = ele.parentElement;
//   let error = box.querySelector('.error');

//   error.innerText = msg;
//   box.classList.add('error');
//   box.classList.remove('success');
// };
// const setSuccess = (ele) => {
//   let box = ele.parentElement;
//   let error = box.querySelector('.error');

//   error.innerText = '';
//   box.classList.add('success');
//   box.classList.remove('error');
// };
// const mailFormat = (e) => {
//   const re = /\w+@\w+.\w+/;
//   return re.test(String(e).toLowerCase());
// };
// const passFormat = (p) => {
//   const re =
//     /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
//   return re.test(p);
// };
// const userFormat = (u) => {
//   const re = /[^0-9]/;
//   return re.test(u);
// };
// // btn.addEventListener("click", () => {
// //   let localItems = JSON.parse(localStorage.getItem("localItem"));
// //   if (localItems === null) {
// //     itemsList = [];
// //   } else {
// //     itemsList = localItems;
// //   }
// //   itemsList.push(username.value);
// //   itemsList.push(email.value);
// //   itemsList.push(password.value);
// //   itemsList.push(psw.value);
// //   localStorage.setItem("localItem", JSON.stringify(itemsList));
// // });
// function validation() {
//   let user = username.value.trim();
//   let mail = email.value.trim();
//   let pass1 = password.value.trim();
//   let pass2 = psw.value.trim();

//   localStorage.setItem('Username', user);
//   localStorage.setItem('Email', mail);
//   localStorage.setItem('Password', pass1);
//   localStorage.setItem('Cpassword', pass2);

//   if (user === '') {
//     setError(username, 'Username is required');
//   } else if (!userFormat(user)) {
//     setError(username, 'Digital are not allowed');
//   } else {
//     setSuccess(username);
//   }
//   if (mail === '') {
//     setError(email, 'Email is required');
//   } else if (!mailFormat(mail)) {
//     setError(email, 'Please enter a valid email');
//   } else {
//     setSuccess(email);
//   }
//   if (pass1 === '') {
//     setError(password, 'Password is required');
//   } else if (!passFormat(pass1)) {
//     setError(
//       password,
//       'Password must be a minimum of 8 characters including number, Upper, Lower And one special character'
//     );
//   } else {
//     setSuccess(password);
//   }
//   if (pass2 === '') {
//     setError(psw, 'Please confirm your password');
//   } else if (pass2 != pass1) {
//     setError(psw, "Passwords does't match");
//   } else {
//     setSuccess(psw);
//     // alert('Account Created !');
//     window.location.href = '../course-details.html';
//   }
// }
