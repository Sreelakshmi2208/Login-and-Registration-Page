document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('registerPhone').value;
    const email = document.getElementById('registerEmail').value;
    
    const userError = document.getElementById('registerUserError');
    const passError = document.getElementById('registerPassError');
    const confirmError = document.getElementById('confirmPassError');
    const phoneError = document.getElementById('registerPhoneError');
    const emailError = document.getElementById('registerEmailError');
    const registerSuccess = document.getElementById('registerSuccess');
    
    // Reset all error messages
    userError.textContent = '';
    passError.textContent = '';
    confirmError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    registerSuccess.textContent = '';
    
    let isValid = true;

    // Username validation (6-10 alphabets)
    if (!/^[a-zA-Z]{6,10}$/.test(username)) {
        userError.textContent = 'Username must be 6-10 alphabets only';
        isValid = false;
    }
    
    // Password validation (8-10 chars, one uppercase, one special char, one digit)
    if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/.test(password)) {
        passError.textContent = 'Password must be 8-10 characters with at least one uppercase letter, one special character, and one digit';
        isValid = false;
    }
    
    // Confirm password validation
    if (password !== confirmPass) {
        confirmError.textContent = 'Passwords do not match';
        isValid = false;
    }
    
    // Phone number validation (10 digits, no special characters)
    if (!/^[6-9]\d{9}$/.test(phone)) {
        phoneError.textContent = 'Phone number must be exactly 10 digits and start with 6-9';
        isValid = false;
    }
    // Email validation (must end with .com and contain @)
    if (!/^[^\s@]+@[^\s@]+\.com$/.test(email)) {
        emailError.textContent = 'Email must contain @ and end with .com';
        isValid = false;
    }
    
    if (isValid) {
        registerSuccess.textContent = 'Registration successful!';
        // Add your registration logic here
    }
});
