let form = document.querySelector('form');
let firstnameInput = document.querySelector('#first-box');
let lastnameInput = document.querySelector('#last-box');
let usernameInput = document.querySelector('#user-box');
let passwordInput = document.querySelector('#pass-box');
let cnfrm_passwordInput = document.querySelector('#confrm-box');
let signBtn = document.querySelector('#regis-btn');


form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  if (firstnameInput.value === '' || passwordInput.value === '' || cnfrm_passwordInput.value === '') {
    
    alert('Please enter all the details!');
  } else if (passwordInput.value !== cnfrm_passwordInput.value) {

    alert('Your passwords do not match!');
  } else {

    form.submit();
    alert('The registration has been successful!');

    setTimeout(() => {
        form.reset();
      }, 5);
    }
});

// Additional event listener for input change in confirm password field
cnfrm_passwordInput.addEventListener('input', () => {
  if (passwordInput.value !== cnfrm_passwordInput.value) {
    cnfrm_passwordInput.setCustomValidity('Passwords do not match');
  } else {
    cnfrm_passwordInput.setCustomValidity('');
  }
});