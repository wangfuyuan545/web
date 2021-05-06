function initDemoMap() {
  var Esri_WorldImagery = L.tileLayer(
    "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  );

  var Esri_DarkGreyCanvas = L.tileLayer(
    "http://{s}.sm.mapstack.stamen.com/" +
      "(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/" +
      "{z}/{x}/{y}.png",
  );

  var baseLayers = {
    Satellite: Esri_WorldImagery,
    "Grey Canvas": Esri_DarkGreyCanvas
  };

  var map = L.map("map", {
    layers: [Esri_WorldImagery]
  });

  var layerControl = L.control.layers(baseLayers);
  layerControl.addTo(map);
  map.setView([20, 120], 5);

  return {
    map: map,
    layerControl: layerControl
  };
}

// demo map
var mapStuff = initDemoMap();
var map = mapStuff.map;
var layerControl = mapStuff.layerControl;


// load data (u, v grids) from somewhere (e.g. https://github.com/danwild/wind-js-server)
$/*.getJSON("wind-gbr.json", function(data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: "GBR Wind",
      displayPosition: "bottomleft",
      displayEmptyString: "No wind data"
    },
    data: data,
    maxVelocity: 10
  });

  layerControl.addOverlay(velocityLayer, "Wind - Great Barrier Reef");
});
*/

function getValue(){
    var btn = document.getElementById("datepicker");
    var value1=btn.value;
    return{
      value1:value1
    };
}

/*var url = 'jsonfile/'+$val+'.json';

$.getJSON(url, function(data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: "GBR Water",
      displayPosition: "bottomleft",
      displayEmptyString: "No water data"
    },
    data: data,
    maxVelocity: 0.6,
    velocityScale: 0.1 // arbitrary default 0.005
  });

  layerControl.addOverlay(velocityLayer, "流场显示");
});*/

/*$.getJSON("wind-global.json", function(data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: "Global Wind",
      displayPosition: "bottomleft",
      displayEmptyString: "No wind data"
    },
    data: data,
    maxVelocity: 15
  });

  layerControl.addOverlay(velocityLayer, "Wind - Global");
});*/

