document.getElementById('validationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous states
  clearStates();

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const birthDate = document.getElementById('birthDate');
  const gender = document.getElementById('gender');

  let hasErrors = false;

  // Validate full name
  if (fullName.value.trim() === '') {
    showError('fullName', 'Full name is required');
    hasErrors = true;
  } else {
    showSuccess('fullName');
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError('email', 'Enter a valid email address');
    hasErrors = true;
  } else {
    showSuccess('email');
  }

  // Validate password
  if (password.value.trim().length < 6) {
    showError('password', 'Password must be at least 6 characters');
    hasErrors = true;
  } else {
    showSuccess('password');
  }

  // Validate birth date
  if (birthDate.value === '') {
    showError('birthDate', 'Birth date is required');
    hasErrors = true;
  } else {
    showSuccess('birthDate');
  }

  // Validate gender
  if (gender.value === '') {
    showError('gender', 'Please select a gender');
    hasErrors = true;
  } else {
    showSuccess('gender');
  }

  if (!hasErrors) {
    alert('Form submitted successfully!');
    // Handle form submission logic here
  }
});

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorSpan = document.getElementById(fieldId + 'Error');
  field.classList.add('error-field');
  field.classList.remove('success-field');
  errorSpan.textContent = message;
}

function showSuccess(fieldId) {
  const field = document.getElementById(fieldId);
  const errorSpan = document.getElementById(fieldId + 'Error');
  field.classList.add('success-field');
  field.classList.remove('error-field');
  errorSpan.textContent = '';
}

function clearStates() {
  // Clear all error messages
  const errorSpans = document.querySelectorAll('.error');
  errorSpans.forEach(span => span.textContent = '');
  
  // Remove all success states from fields
  const fields = document.querySelectorAll('input, select');
  fields.forEach(field => {
    field.classList.remove('error-field', 'success-field');
  });
}
