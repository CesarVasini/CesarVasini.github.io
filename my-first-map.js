function init(){
map = new OpenLayers.Map('draw-map-here');
originalOSM = new OpenLayers.Layer.OSM("OpenStreetMap");
map.addLayers([originalOSM]);
map.setCenter(new OpenLayers.LonLat(96.33899700000126,2.4700000000000246).transform(new OpenLayers.Projection("EPSG:4326"),map.getProjectionObject()), 10);
}