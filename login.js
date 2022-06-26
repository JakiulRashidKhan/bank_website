document.getElementById('log-in').addEventListener('click',function(){
    //user email
    const userEmail= document.getElementById('user-email');
     const userEmails =userEmail.value;
    //user password
    const userPassword= document.getElementById('user-password');
    const userPassWords =userPassword.value;

    if(userEmails == 'abc@gmail.com' && userPassWords == '123'){
      window.location.href ='banking.html' 
    }
});