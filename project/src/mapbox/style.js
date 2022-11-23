export default {
    styleJSON (){ 
        return{
        "version": 8,
        "name": "qgis2web export",
        "pitch": 0,
        "light": {
            "intensity": 0.2
        },
        "sources": {
            "GoogleSatellite_0": {
                "type": "raster",
                "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
                "tileSize": 256
            },
            "rgb2_1": {
                "type": "image",
                "url": "./data/rgb2_1.png",
                "coordinates": [
                    [110.690391, -7.614276],
                    [110.699619, -7.614276],
                    [110.699619, -7.609012],
                    [110.690391, -7.609012]
                ]
            },
            "ndvi2_2": {
                "type": "image",
                "url": "./data/ndvi2_2.png",
                "coordinates": [
                    [110.691154, -7.614410],
                    [110.697257, -7.614410],
                    [110.697257, -7.607881],
                    [110.691154, -7.607881]
                ]
            },
            "Titikkoordinatpoint_3": {
                "type": "geojson",
                "data": "Titikkoordinatpoint_3.js"
            }
                        },
        "sprite": "",
        "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
        "layers": [
            {
                "id": "background",
                "type": "background",
                "layout": {},
                "paint": {
                    "background-color": "#ffffff"
                }
            },
            {
                "id": "lyr_GoogleSatellite_0_0",
                "type": "raster",
                "source": "GoogleSatellite_0"
            },
            {
                "id": "lyr_rgb2_1_1",
                "type": "raster",
                "source": "rgb2_1",
                "minzoom": 0,
                "maxzoom": 22
            },
            {
                "id": "lyr_ndvi2_2_2",
                "type": "raster",
                "source": "ndvi2_2",
                "minzoom": 0,
                "maxzoom": 22
            },
            {
                "id": "lyr_Titikkoordinatpoint_3_0",
                "type": "circle",
                "source": "Titikkoordinatpoint_3",
                "layout": {},
                "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
            }
    ],
    }
}}