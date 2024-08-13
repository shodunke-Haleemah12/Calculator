function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.getElementById('toggle-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'eye-off-icon.png'; // Replace with the path to the 'hide' icon
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'eye-icon.png'; // Replace with the path to the 'show' icon
    }
}