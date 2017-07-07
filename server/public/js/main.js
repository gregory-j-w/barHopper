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

var loc = {
	userLat: 0,
	userLong: 0,
	radius: ($('#searchRadius option:selected').val() * 1609)
};

navigator.geolocation.getCurrentPosition(function(position) {
	loc.userLat = position.coords.latitude;
	loc.userLong = position.coords.longitude
	console.log(loc)
	initMap()
})

$('#searchSubmit').click(function(){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/bar/search',
		data: loc,
		success: function(response){
			console.log(response)
			barLoc.lat = response.location.coordinates[1];
			barLoc.long = response.location.coordinates[0];
			barLoc.address = response.address;
			window.location = "http://localhost:3000/bar/assignment"
		}
	})
})

//add map to search and assignment pages

//map on search page
function initMap() {

  map = new google.maps.Map(document.getElementById('searchMap'), {
    center: {lat: loc.userLat, lng: loc.userLong},
    zoom: 15

  });
	console.log("searchMap ran");
}

var barLoc = {
	lat: 0.00000000,
	long: 0.00000000,
	address:"",
};

// function initAssignmentMap() {
//   map = new google.maps.Map(document.getElementById('assignmentMap'), {
//     center: {lat: userLoc.lat, lng: userLoc.long},
//     zoom: 8
//   });
// 	console.log("searchMap ran");
// 	$('#assignemntMap').attr('script','https://maps.googleapis.com/maps/api/js?key=AIzaSyCD8M1keM0LUP3E-9o77NxoXg1AlzBQ1uw=initSearchMap');
// }
