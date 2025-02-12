document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Sign Up');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const passwordStrength = document.getElementById('passwordStrength');
    const termsCheckbox = document.getElementById('terms');
  
    // Real-time validation for name
    nameInput.addEventListener('input', function () {
      if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
      } else {
        nameInput.classList.remove('is-invalid');
      }
    });
  
    // Real-time validation for email
    emailInput.addEventListener('input', function () {
      if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
      }
    });
  
    // Real-time validation for password
    passwordInput.addEventListener('input', function () {
      const password = passwordInput.value;
      if (password.length < 8) {
        passwordInput.classList.add('is-invalid');
        passwordStrength.textContent = 'Weak';
        passwordStrength.className = 'password-strength weak';
      } else if (password.length >= 8 && password.length < 12) {
        passwordInput.classList.remove('is-invalid');
        passwordStrength.textContent = 'Medium';
        passwordStrength.className = 'password-strength medium';
      } else {
        passwordInput.classList.remove('is-invalid');
        passwordStrength.textContent = 'Strong';
        passwordStrength.className = 'password-strength strong';
      }
    });
  
    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.querySelector('i').classList.toggle('bi-eye-slash');
    });
  
    // Form submission
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  
    // Email validation function
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });