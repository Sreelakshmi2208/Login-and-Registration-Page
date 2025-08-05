document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const userError = document.getElementById('loginUserError');
    const passError = document.getElementById('loginPassError');
    const loginSuccess = document.getElementById('loginSuccess');
    
    // Reset error messages
    userError.textContent = '';
    passError.textContent = '';
    loginSuccess.textContent = '';
    
    // Validate username length
    if (username.length < 6 || username.length > 10) {
        userError.textContent = 'Username must be between 6 and 10 characters';
        return;
    }
    
    // Validate password length
    if (password.length < 8 || password.length > 10) {
        passError.textContent = 'Password must be between 8 and 10 characters';
        return;
    }
    
    // If validation passes, show success message
    loginSuccess.textContent = 'Login successful!';
    // Add your login logic here
});
