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

var userLoc = {
	lat: 0.00000000,
	long: 0.00000000
};

navigator.geolocation.getCurrentPosition(function(position) {
	userLoc.lat = position.coords.latitude;
	userLoc.long = position.coords.longitude
})

$('#searchSubmit').click(function(){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/bar/search',
		data: userLoc
	})
})
