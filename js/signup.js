const url = 'https://irepoter-v3.herokuapp.com/api/v2/auth/signup';
// const url = 'https://localhost:5000/api/v2/auth/signup';


// Sign Up
const signUp = document.getElementById('signup').addEventListener('click', async(event) => {
    event.preventDefault();
    username = document.getElementById("username").value
    firstname = document.getElementById("firstname").value
    lastname = document.getElementById("lastname").value
    othernames = document.getElementById("othernames").value
    password = document.getElementById("password").value
    email = document.getElementById("email").value
    phonenumber = document.getElementById("phonenumber").value

    formData = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        othernames: othernames,
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        phoneNumber: phonenumber
    }

    fetch(url, {
      method: 'POST',
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(formData)
    })
    .then(response => response.json()
	.then(res => ({status_code: response.status, body:res}))
    .then(data => {
       if(data.status_code == 201){
        window.localStorage.setItem('user_token', data.body.token);
        window.localStorage.setItem('user', JSON.stringify(data.body.user));
        window.location = 'home.html';
       }
       else{
           alert(data.body.message);
       }
    })
    .catch(err => {
        console.warn(`Fetch Error: ${err}`);
      });
});
