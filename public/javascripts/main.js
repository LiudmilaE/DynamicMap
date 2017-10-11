$(document).ready(function(){
  const afri = {
    lat: 3.3192925,
    lng: 4.4218547,
  };
  const ng = {
    lat: 8.9233587,
    lng: -0.3674603,
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: afri,
    mapTypeId: 'roadmap'
  });

  var marker = new google.maps.Marker({
           position: afri,
           map: map
         });

         function addMarker(location, map) {
           // Add the marker at the clicked location, and add the next-available label
           // from the array of alphabetical characters.
           var marker = new google.maps.Marker({
             position: location,
             label: labels[labelIndex++ % labels.length],
             map: map
           });
         }
         $('#Nigeriabutton').event.addListener(map, 'click', function(event) {
             addMarker(ng, map);
           });




});
