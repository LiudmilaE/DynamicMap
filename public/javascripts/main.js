$(document).ready(function(){
  const afri = {
    lat: 3.3192925,
    lng: 4.4218547,
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: afri
  });

});
