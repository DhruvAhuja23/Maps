
mapboxgl.accessToken = 'pk.eyJ1IjoiZGhydXZhaHVqYTIzIiwiYSI6ImNrbzV3MDUwOTF4NHkydms0YW8zNDdmczEifQ.0zT5Ku8lOGUCepv8HPd9sQ';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{ enableHighAccuracy: true })

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation(){
setupMap([28.74,77.10])
}
function setupMap(center){
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom:18
});
map.addControl(new mapboxgl.NavigationControl());
var directions=new MapboxDirections({
    accessToken: mapboxgl.accessToken
})
map.addControl(directions,"top-left")
}

