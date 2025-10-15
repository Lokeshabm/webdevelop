    document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();

    // Get error elements
    let usernameError = document.getElementById('usernameError');
    let passwordError = document.getElementById('passwordError');

    // Reset previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username is required!';
        isValid = false;
    } else if (username.length < 8) {
        usernameError.textContent = 'Username must be at least 8 characters!';
        isValid = false;
    }


    // Validate password
    if (password === '') {

        passwordError.textContent = 'Password is required!';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters!';
        isValid = false;
    }

    // If validation passes, redirect to output page
    if (isValid) {
        // For demonstration, let’s use a fixed login credential
        if (username === "loginpage" && password === "admin123") {
           // window.location.href = "welcome.html"; // Redirect to output page
           alert("Login Successful!");
        } else {
            alert("Invalid username or password!");
        }
    }
    });
     