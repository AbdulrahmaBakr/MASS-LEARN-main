var login = document.getElementById('login');
login.onclick = (e) => {
  e.preventDefault();

  var usernameAddress = document.getElementById('username').value;
  var passwordAddress = document.getElementById('password').value;

  var getUser = localStorage.getItem('Username');
  var getPass = localStorage.getItem('Password');

  if (usernameAddress == '' && passwordAddress == '') {
    alert('Input field has no value');
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      alert(`Login successfull, hi ${usernameAddress}`);
      window.location.href = './index.html';
    } else {
      alert('Something is wrong');
    }
  }
};

// change course details btn
if (localStorage.length == 0) {
  // function isLoggedin() {
  // change btn learn html
  var learnBtn = document.getElementById('startCourse');
  learnBtn.style.backgroundColor = '#5fcf80';
  learnBtn.innerHTML = 'Enroll Now';
  learnBtn.addEventListener('click', function () {
    window.location.href = 'forms/login.html';
  });
} else {
  // hide btn login
  var b_button = document.getElementById('login');
  var b_button = document.createElement('button');
  b_button.innerHTML = 'Logout';
  b_button.setAttribute('type', 'button');
  b_button.setAttribute('class', 'btn btn-primary');
  b_button.setAttribute('style', 'display: block;');

  // logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem();
    window.location.href('index.html');
  });
}
