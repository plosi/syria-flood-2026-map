ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2348553.712592, 1383961.863018, 2764905.663665, 1587444.215764]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_adm2_with_operations_1 = new ol.format.GeoJSON();
var features_adm2_with_operations_1 = format_adm2_with_operations_1.readFeatures(json_adm2_with_operations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm2_with_operations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm2_with_operations_1.addFeatures(features_adm2_with_operations_1);
var lyr_adm2_with_operations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm2_with_operations_1, 
                style: style_adm2_with_operations_1,
                popuplayertitle: 'adm2_with_operations',
                interactive: false,
                title: '<img src="styles/legend/adm2_with_operations_1.png" /> adm2_with_operations'
            });
var format_sdn_admin0_2 = new ol.format.GeoJSON();
var features_sdn_admin0_2 = format_sdn_admin0_2.readFeatures(json_sdn_admin0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdn_admin0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdn_admin0_2.addFeatures(features_sdn_admin0_2);
var lyr_sdn_admin0_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdn_admin0_2, 
                style: style_sdn_admin0_2,
                popuplayertitle: 'sdn_admin0',
                interactive: false,
                title: '<img src="styles/legend/sdn_admin0_2.png" /> sdn_admin0'
            });
var format_20260426_HCF_3 = new ol.format.GeoJSON();
var features_20260426_HCF_3 = format_20260426_HCF_3.readFeatures(json_20260426_HCF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20260426_HCF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20260426_HCF_3.addFeatures(features_20260426_HCF_3);
var lyr_20260426_HCF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20260426_HCF_3, 
                style: style_20260426_HCF_3,
                popuplayertitle: '20260426_HCF',
                interactive: true,
    title: '20260426_HCF<br />\
    <img src="styles/legend/20260426_HCF_3_0.png" /> Mobile Clinic<br />\
    <img src="styles/legend/20260426_HCF_3_1.png" /> PHCC<br />\
    <img src="styles/legend/20260426_HCF_3_2.png" /> Rural Hospital<br />' });
var format_sdn_office_locations_4 = new ol.format.GeoJSON();
var features_sdn_office_locations_4 = format_sdn_office_locations_4.readFeatures(json_sdn_office_locations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdn_office_locations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdn_office_locations_4.addFeatures(features_sdn_office_locations_4);
var lyr_sdn_office_locations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdn_office_locations_4, 
                style: style_sdn_office_locations_4,
                popuplayertitle: 'sdn_office_locations',
                interactive: true,
                title: '<img src="styles/legend/sdn_office_locations_4.png" /> sdn_office_locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_adm2_with_operations_1.setVisible(true);lyr_sdn_admin0_2.setVisible(true);lyr_20260426_HCF_3.setVisible(true);lyr_sdn_office_locations_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_adm2_with_operations_1,lyr_sdn_admin0_2,lyr_20260426_HCF_3,lyr_sdn_office_locations_4];
lyr_adm2_with_operations_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_sdn_admin0_2.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_20260426_HCF_3.set('fieldAliases', {'name': 'name', 'type': 'type', 'lat': 'lat', 'lon': 'lon', });
lyr_sdn_office_locations_4.set('fieldAliases', {'office_nam': 'office_nam', 'lat': 'lat', 'lon': 'lon', });
lyr_adm2_with_operations_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_sdn_admin0_2.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_20260426_HCF_3.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_sdn_office_locations_4.set('fieldImages', {'office_nam': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_adm2_with_operations_1.set('fieldLabels', {'adm2_name': 'inline label - visible with data', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_sdn_admin0_2.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'version': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm0_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_20260426_HCF_3.set('fieldLabels', {'name': 'inline label - always visible', 'type': 'no label', 'lat': 'inline label - visible with data', 'lon': 'inline label - visible with data', });
lyr_sdn_office_locations_4.set('fieldLabels', {'office_nam': 'inline label - visible with data', 'lat': 'inline label - always visible', 'lon': 'inline label - always visible', });
lyr_sdn_office_locations_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});