$('#registerSubmit').click(function(){
	var newUser = {
		email: $('#regEmail').val(),
		username: $('#regUsername').val(),
		password: $('#regPass').val(),
		dob: $('regDob').val(),
		hometown: $('#regHome').val()
	}

	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/user/register',
		data: newUser,
		success: function(response){
			window.location = "http://localhost:3000/bar/search";
		}
	})
});

$('#loginSubmit').click(function(){
	var userInfo = {
		username: $('#loginUser').val(),
		password: $('#loginPass').val()
	}
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/user/login',
		data: userInfo,
		success: function(response){
			window.location = "http://localhost:3000/bar/search"
		}
	})
})

$('#searchSubmit').click(function(){

	//get user location
	//Yelp API request - catagory, user loc, key, secret
	//pull results to array
	//random number 0 to 39
	//random selection from the array
	//post to /bar/search with ajax

	// $.ajax({
	// 	method: 'POST',
	// 	url: 'http://localhost:3000/bar/search',
	// 	data:
	// })
})
