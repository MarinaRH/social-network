$(document).ready(function() {
  // obtener elementos 
  var $nameBusiness = $('#name_business');
  var $DescripcionBusiness = $('#Descripcion_business');
  var $DireccionBusiness = $('#Direccion_business');
  var $email = $('#email');
  var $password = $('#password');
  var $btnBussiness = $('#btn_bussiness');


  var $EmaiLUser = $('#Email-user');
  var $passwordUser = $('#password_user');
  var $btnUser = $('#btn_user');
  var $nameuser = $('#name_user');
  var $lastName = $('#last_name');

  var nameBusiness = false;
  var descriptionBusiness = false;
  var placeBusiness = false;
  var email = false;
  var password = false;
  var btnBussiness = false;


  var emaiLUser = false;
  var passwordUser = false;
  var btnUser = false;
  var nameUser = false;
  var lastName = false;

  var regexName = /^[a-zA-Z]*$/;
  var regexEmail = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);


  $nameBusiness.on('input', verifyName);
  $DescripcionBusiness.on('input', verifyDescription);
  $DireccionBusiness.on('input', verifyPlace);
  $email.on('input', verifyEmail);
  $password.on('input', verifyPassword);
  $btnBussiness.on('click', openLogin);

  $EmaiLUser.on('input', verifyEmailUser);
  $passwordUser.on('input', verifyPasswordUser);
  $nameuser.on('input', verifyNameUser);
  $lastName.on('input', verifyLastname);
  $btnUser.on('click', openLoginUser);

  function openLogin(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'login.html';
  }

  function openLoginUser(event) {
    event.preventDefault();
    localStorage.email = $EmaiLUser.val();
    localStorage.password = $passwordUser.val();
    window.location.href = 'login.html';
  }

  function verifyName() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('firstname valid');
      nameBusiness = true;
      allInputsValid($btnBussiness);
    } else {
      nameBusiness = false;
      desactiveButton($btnBussiness);
    }
  }

  function verifyNameUser() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('validado nombre');
      nameUser = true;
      inputsValid($btnUser);
    } else {
      nameUser = false;
      desactiveButton($btnUser);
    }
  }

  function verifyDescription() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('Descripcion valid');
      descriptionBusiness = true;
      allInputsValid($btnBussiness);
    } else {
      descriptionBusiness = false;
      desactiveButton($btnBussiness);
    }
  }

  function verifyLastname() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('last name validado');
      lastLame = true;
      inputsValid($btnUser);
    } else {
      lastlame = false;
      desactiveButton($btnUser);
    }
  }

  function verifyPlace() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('Ddireccion valid');
      placeBusiness = true;
      allInputsValid($btnBussiness);
    } else {
      placeBusiness = false;
      desactiveButton($btnBussiness);
    }
  }

  function verifyEmail() {
    if (regexEmail.test($($email).val())) {
      console.log('funciona email');
      email = true;
      allInputsValid($btnBussiness);
    } else {
      email = false;
      desactiveButton($btnBussiness);
    }
  };

  function verifyEmailUser() {
    if (regexEmail.test($($EmaiLUser).val())) {
      console.log('funciona email');
      emaiLUser = true;
      inputsValid($btnUser);
    } else {
      emaiLUser = false;
      desactiveButton($btnUser);
    }
  };

  function verifyPassword() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('funciona password');
      password = true;
      allInputsValid($btnBussiness);
    } else {
      password = false;
      desactiveButton($btnBussiness);
    }
  };

  function verifyPasswordUser() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('funciona password');
      passwordUser = true;
      inputsValid($btnUser);
    } else {
      passwordUser = false;
      desactiveButton($btnUser);
    }
  };

  function allInputsValid() {
    debugger;    
    if (password && email && placeBusiness && descriptionBusiness && nameBusiness) {
      activeButton($btnBussiness);
    }
  };

  function inputsValid() {
    if (passwordUser && emaiLUser && lastName && nameUser) {
      activeButton(btn_user);
    }
  }
});