//Cities data [name:xx , coordinate:{lat:xx, lng:xx}]

var cities = [{
  name: "Xi'an",
  coord: {lat: 34.3483581, lng: 108.9218753}
},
{
  name:'Hangzhou',
  coord: {lat:30.2741,lng:120.1551}
},
{
  name:'Suzhou',
  coord: {lat:31.2990,lng:120.5853}
},
{
  name:'Shanghai',
  coord: {lat:31.230,lng:121.470}
},
{
  name:'Beijing',
  coord: {lat:39.930,lng:116.400}
},
{
  name:'Wuhan',
  coord: {lat:30.580,lng:114.270}
},
{
  name:'Chengdu',
  coord: {lat:30.670,lng:104.070}
},
{
  name:'Harbin',
  coord: {lat:45.750,lng:126.650}
},
{
  name:'Nanjing',
  coord: {lat:32.050,lng:118.780}
},
{
  name:'Jinan',
  coord: {lat:36.670,lng:117.000}
},
{
  name:'Shenyang',
  coord: {lat:41.800,lng:123.450}
},
{
  name:'zhuhai',
  coord: {lat:22.210928,lng:113.552971}
},
{
  name:'Kunming',
  coord: {lat:24.8801,lng:102.8329}
},
{
  name:'Guilin',
  coord: {lat:25.2345,lng:110.1800}
},
{
  name:'Dalian',
  coord: {lat:38.9140,lng:121.6147}
},
{
	name:'Yantai',
  coord: {lat:37.4645,lng:121.4479}
},
{
	name:'Qingdao',
  coord: {lat:36.0671,lng:120.3826}
},
{
	name:'Sanya',
  coord: {lat:18.2528,lng:109.5119}
},
{
	name:'Xining',
  coord: {lat:36.6171,lng:101.7782}
},
{
	name:'Ürümqi',
  coord: {lat:43.8256,lng:87.6168}
},
{
	name:'Datong',
  coord: {lat:40.0768,lng:113.3001}
},
{
	name:'Changsha',
  coord: {lat:28.2282, lng:112.9388}
},
{
	name:'Xiangyang',
  coord: {lat:32.0090, lng:112.1224}
}
];

// initializing markers variable for google map markers
var markers = [];

//initializing google map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7970062, lng: 109.653086},
    zoom: 4,
    mapTypeControl: true,
          mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER
          },
    styles:[
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fdfcf8"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f8c967"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e9bc62"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e98d58"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#db8555"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ]
  });

//initializing google map marker icon
  var Icon = {
    url:'img/yellow_star.png',
    size: new google.maps.Size(32,32),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(16, 16)
  };

//initializing google map infowindow
  infoWindow = new google.maps.InfoWindow({
  	maxWidth:325
  });

//import cities data into google markers
  cities.forEach(function(cities){
    cities.marker = new google.maps.Marker({
      position: cities.coord,
      icon: Icon,
      map: map,
      animation: google.maps.Animation.DROP,
      title: cities.name
    });

//open infowindow and marker animation when markers is clicked
  google.maps.event.addListener(cities.marker, 'click', function() {
	   WikiInfoWindow(cities);
	   toggleBounce(cities.marker);
  });

//add markers object into cities data
  markers.push({
    name: cities.name,
    marker: cities.marker
  });

  });

//initializing knockout
  ko.applyBindings(new ViewModel());
}

//ajax request from wikipedia and bing, and formating into infowindow for the input city
function WikiInfoWindow(cities){
  var extract ='';
  var imagesurl='';
  var imageSearch = 'full city ' + encodeURIComponent(cities.name);
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?'+
  				'action=query'+
  				'&format=json'+
  				'&prop=images'+
  				'%7Cextracts'+
  				'&list='+
  				'&meta='+
  				'&titles='+cities.name+
  				'&imlimit=10'+
  				'&exintro=1';

  $.ajax({
  url: wikiUrl,
  data: {
  			 format: 'json'
  },
  dataType: 'jsonp'
  }).done( function ( data ){
  var pages = data.query.pages;
  for (var id in pages){
      		var extract = pages[id].extract;
  		};

  		$.ajax({
  	type:'GET',
  	url:'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' + 
  		imageSearch +
    		'&mkt=en-us',
  	headers:{     
  		'Ocp-Apim-Subscription-Key': '43a65902c89044fd92a8c2c87deafed1',
  	}
  }).done(function(data){
  	imagesurl1 = data.value[0].thumbnailUrl;
  	imagesurl2 = data.value[1].thumbnailUrl;

  	var contentString = '<div>'+ 
  			'<img src = "' +
  				imagesurl1 + '"height="200" width="267" align="center">' +'<br/>'+
  				'<img src = "' +
  				imagesurl2 + '"height="200" width="267" align="center">' +
  			'<h3>' + cities.name + '</h3>' +
  				extract + 
  				'</div>';
  		infoWindow.setContent(contentString);
  	infoWindow.open(map, cities.marker);
  }).fail(function(){
  	alert("Failed to load bing image")
  });
  }).fail(function(){
  	alert("Failed to load wikipedia")
  });
}

//google marker bounce animation when clicked
function toggleBounce(marker) {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
marker.setAnimation(null);
}, 700);
  }
}

//when city is clicked on the list, trigger open infowindow and marker animation
function clickedcity(name) {
  cities.forEach(function(clicked) {
    if(clicked.name == name){
      google.maps.event.trigger(clicked.marker, 'click');
    };
  });
}

//open and close the overlay
function open_overlay() {
    document.getElementById("overlay").style.display = "block";
}
function close_overlay() {
    document.getElementById("overlay").style.display = "none";
}

//viewmodel, filter the city list according to the filter input
var ViewModel = function()  {
  var self = this;

  this.filter = ko.observable("");

  this.filteredcities = ko.computed(function() {
    var filter = self.filter().toLowerCase();
    if (!filter) {
      cities.forEach(function(city) {
        if (city.marker) {
          city.marker.setVisible(true);
        }
      });
      return cities;
    } else {
      return ko.utils.arrayFilter(cities, function(city) {
        var matched = city.name.toLowerCase().indexOf(filter) !== -1;
        if (matched) {
          city.marker.setVisible(true);
        } else {
          city.marker.setVisible(false);
        }
    
        return matched;
      });
    }
  });

};
