function initMap(){
    var options = {
    zoom:8,
    center:{lat:20.5937,lng:78.9629}
    }
    
    var map = new google.maps.Map(document.getElementById('map'),options)
    var markers = [
    {
    coords: {lat: 35.8617, lng: 104.1954},
    content: '<h1>China</h1>'
    },
    {
    coords: {lat: 36.2048, lng: 138.2529},
    content: '<h1>Japan</h1>'
    },
    {
    coords: {lat: 35.9078, lng: 127.7669},
    content: '<h1>South Korea</h1>'
    }
    ]
    
    for(var i=0; i<markers.length;i++){
    addMarker(markers[i])
    }
    
    function addMarker(props){
    var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    
    })
    
    if(props.content){
    var infowindow = new google.maps.InfoWindow({
    content:props.content
    })
    
    marker.addListener('click',function(){
    infowindow.open(map,marker)
    })
    }
    }
    }