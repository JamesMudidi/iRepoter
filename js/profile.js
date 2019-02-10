const baseUrl = 'https://irepoter-v3.herokuapp.com/';
const token = localStorage.getItem('user_token');


// Profile Data
const populateProfile = () => {
    const user= JSON.parse(localStorage.getItem('user'));

    document.getElementById("username").innerHTML = user.username;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("phonenumber").innerHTML = user.phoneNumber;
}

window.onload( populateProfile());