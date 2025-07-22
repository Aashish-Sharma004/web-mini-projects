document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  // Simple email pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email || !password) {
    errorMsg.textContent = 'Both fields are required.';
  } else if (!emailPattern.test(email)) {
    errorMsg.textContent = 'Please enter a valid email.';
  } else {
    errorMsg.textContent = '';
    alert('Login successful!'); // You can replace this with actual login logic
  }
});
