	function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
	const url = 'https://irepoter-v3.herokuapp.com/api/v2/users';
	//const url = 'http://127.0.0.1:5000/api/v2/users';
	
	let session = window.localStorage.getItem("access_token")
	fetch(url, {
	mode: 'cors',
    headers: {
      "content-Type": "application/json", "Authorization": session
    }
    })
    .then((response) => response.json())
    .then(response => {
    console.log(response)
    })
	