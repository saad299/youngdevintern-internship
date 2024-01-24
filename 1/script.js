let form = document.querySelector('form');
let usernameInput = document.querySelector('#user-box');
let passwordInput = document.querySelector('#pass-box');
let signBtn = document.querySelector('#sign-btn');


form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  if (usernameInput.value === '' || passwordInput.value === '') {
    
    alert('One or more details are incorrect/missing.');
  } else {

    form.submit();
    alert('The form has been successfully submitted!');

    setTimeout(() => {
        form.reset();
      }, 5);
    }
});