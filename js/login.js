document.getElementById('login-submit').addEventListener('click', function (){
    // get user email
    const mailField=document.getElementById('user-email');
    const userEmail = mailField.value;
    // get user password
    const passField = document.getElementById('user-pass');
    const userPassword = passField.value;
    // check email or password
    if (userEmail == 'me@gmail.com' && userPassword == 'done'){
        window.location.href = ('banking.html')
    }else{
        document.write(alert("Please Enter Valid Email or Password")); 
     }
})