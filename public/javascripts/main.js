$(document).ready(function(){
	const afri = {
		lat: 3.3192925,
		lng: 4.4218547,
	};
	const ng = {
		lat: 9.0546462,
		lng: 7.2539279,
	};

const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: afri,
		mapTypeId: 'roadmap'
	});

	// var marker = new google.maps.Marker({
	// 				 position: afri,
	// 				 map: map
	// 			 });

				 function addMarker(location, map) {
					 // Add the marker at the clicked location, and add the next-available label
					 // from the array of alphabetical characters.
					 var marker = new google.maps.Marker({
						 position: location,
						 map: map
					 });
				 }
				 $('#Nigeriabutton').on('click', function() {
						 addMarker(ng, map);
					 });




// Add organizations markers to map
let markers = [];

function putMarkers(arr){
	arr.forEach(function(organization){
		if(organization.status === "accepted"){
			let title = organization.name
			let position = {
				lat: organization.location.coordinates[1],
				lng: organization.location.coordinates[0],
			};
			var pin = new google.maps.Marker({ position, map, title });
			markers.push(pin)
		}
	});
}

putMarkers(allOrganizations);

function creatList (arr, cond) {
	return arr.filter(function(obj){
    return (obj.category) === cond;
	});
}


$('#filter1').change( function () {

	let incubators = creatList(allOrganizations, "incubator");
	let startups =creatList(allOrganizations, "startup");
	marker.setMap(null);

$("#filter1 option:selected" ).each(function() {
	console.log($( this ).text());
	switch($( this ).text()) {
			case 'incubator':
				putMarkers(incubators);
				break;
			case 'startup':
				putMarkers(startups);
				break;
		}
	});
})




});
