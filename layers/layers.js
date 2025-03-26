var wms_layers = [];

var format_Panihati_0 = new ol.format.GeoJSON();
var features_Panihati_0 = format_Panihati_0.readFeatures(json_Panihati_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panihati_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panihati_0.addFeatures(features_Panihati_0);
var lyr_Panihati_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panihati_0, 
                style: style_Panihati_0,
                popuplayertitle: "Panihati",
                interactive: true,
                    title: '<img src="styles/legend/Panihati_0.png" /> Panihati'
                });

lyr_Panihati_0.setVisible(true);
var layersList = [lyr_Panihati_0];
lyr_Panihati_0.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', 'pop_den': 'pop_den', 'sex_ratio': 'sex_ratio', 'per_Lt_p': 'per_Lt_p', 'per_lit_f_': 'per_lit_f_', 'per_st': 'per_st', 'per_sc': 'per_sc', 'per_main_w': 'per_main_w', 'per_margin': 'per_margin', 'State': 'State', 'District': 'District', 'Subdistt': 'Subdistt', 'Town_Villa': 'Town_Villa', 'EB': 'EB', 'Level': 'Level', 'Name': 'Name', 'No_HH': 'No_HH', 'TOT_P': 'TOT_P', 'TOT_M': 'TOT_M', 'TOT_F': 'TOT_F', 'P_SC': 'P_SC', 'M_SC': 'M_SC', 'F_SC': 'F_SC', 'P_ST': 'P_ST', 'M_ST': 'M_ST', 'F_ST': 'F_ST', 'P_LIT': 'P_LIT', 'M_LIT': 'M_LIT', 'F_LIT': 'F_LIT', 'P_ILL': 'P_ILL', 'M_ILL': 'M_ILL', 'F_ILL': 'F_ILL', 'TOT_WORK_P': 'TOT_WORK_P', 'TOT_WORK_M': 'TOT_WORK_M', 'TOT_WORK_F': 'TOT_WORK_F', 'MAINWORK_P': 'MAINWORK_P', 'MAINWORK_M': 'MAINWORK_M', 'MAINWORK_F': 'MAINWORK_F', 'MARGWORK_P': 'MARGWORK_P', 'MARGWORK_M': 'MARGWORK_M', 'MARGWORK_F': 'MARGWORK_F', 'NON_WORK_P': 'NON_WORK_P', 'NON_WORK_M': 'NON_WORK_M', 'NON_WORK_F': 'NON_WORK_F', 'Good_Con_R': 'Good_Con_R', 'Two_DW_Roo': 'Two_DW_Roo', 'OWN_House': 'OWN_House', 'Rentad_Hou': 'Rentad_Hou', 'Radio': 'Radio', 'TV': 'TV', 'Mobile': 'Mobile', 'Safe_Water': 'Safe_Water', 'Electricit': 'Electricit', 'Closed_Dra': 'Closed_Dra', 'Hav_Bathro': 'Hav_Bathro', 'Hav_Kitche': 'Hav_Kitche', 'Hav_Bicycl': 'Hav_Bicycl', 'Hav_scoote': 'Hav_scoote', });
lyr_Panihati_0.set('fieldImages', {'Id': '', 'Area': '', 'pop_den': '', 'sex_ratio': '', 'per_Lt_p': '', 'per_lit_f_': '', 'per_st': '', 'per_sc': '', 'per_main_w': '', 'per_margin': '', 'State': '', 'District': '', 'Subdistt': '', 'Town_Villa': '', 'EB': '', 'Level': '', 'Name': '', 'No_HH': '', 'TOT_P': '', 'TOT_M': '', 'TOT_F': '', 'P_SC': '', 'M_SC': '', 'F_SC': '', 'P_ST': '', 'M_ST': '', 'F_ST': '', 'P_LIT': '', 'M_LIT': '', 'F_LIT': '', 'P_ILL': '', 'M_ILL': '', 'F_ILL': '', 'TOT_WORK_P': '', 'TOT_WORK_M': '', 'TOT_WORK_F': '', 'MAINWORK_P': '', 'MAINWORK_M': '', 'MAINWORK_F': '', 'MARGWORK_P': '', 'MARGWORK_M': '', 'MARGWORK_F': '', 'NON_WORK_P': '', 'NON_WORK_M': '', 'NON_WORK_F': '', 'Good_Con_R': '', 'Two_DW_Roo': '', 'OWN_House': '', 'Rentad_Hou': '', 'Radio': '', 'TV': '', 'Mobile': '', 'Safe_Water': '', 'Electricit': '', 'Closed_Dra': '', 'Hav_Bathro': '', 'Hav_Kitche': '', 'Hav_Bicycl': '', 'Hav_scoote': '', });
lyr_Panihati_0.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', 'pop_den': 'no label', 'sex_ratio': 'no label', 'per_Lt_p': 'no label', 'per_lit_f_': 'no label', 'per_st': 'no label', 'per_sc': 'no label', 'per_main_w': 'no label', 'per_margin': 'no label', 'State': 'no label', 'District': 'no label', 'Subdistt': 'no label', 'Town_Villa': 'no label', 'EB': 'no label', 'Level': 'no label', 'Name': 'no label', 'No_HH': 'no label', 'TOT_P': 'no label', 'TOT_M': 'no label', 'TOT_F': 'no label', 'P_SC': 'no label', 'M_SC': 'no label', 'F_SC': 'no label', 'P_ST': 'no label', 'M_ST': 'no label', 'F_ST': 'no label', 'P_LIT': 'no label', 'M_LIT': 'no label', 'F_LIT': 'no label', 'P_ILL': 'no label', 'M_ILL': 'no label', 'F_ILL': 'no label', 'TOT_WORK_P': 'no label', 'TOT_WORK_M': 'no label', 'TOT_WORK_F': 'no label', 'MAINWORK_P': 'no label', 'MAINWORK_M': 'no label', 'MAINWORK_F': 'no label', 'MARGWORK_P': 'no label', 'MARGWORK_M': 'no label', 'MARGWORK_F': 'no label', 'NON_WORK_P': 'no label', 'NON_WORK_M': 'no label', 'NON_WORK_F': 'no label', 'Good_Con_R': 'no label', 'Two_DW_Roo': 'no label', 'OWN_House': 'no label', 'Rentad_Hou': 'no label', 'Radio': 'no label', 'TV': 'no label', 'Mobile': 'no label', 'Safe_Water': 'no label', 'Electricit': 'no label', 'Closed_Dra': 'no label', 'Hav_Bathro': 'no label', 'Hav_Kitche': 'no label', 'Hav_Bicycl': 'no label', 'Hav_scoote': 'no label', });
lyr_Panihati_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});