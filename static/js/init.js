function initialize_app(){

	ObservatorySelector = $('<div/>',{
		id : 'observatory-selector'
	});

	MapFilterHeading = $('<h3/>',{
		text : 'Filter'
	});

	MapAssetDataMenu = $('<div/>', {
		id : 'map-asset-data-menu'
	});

	MapDataFilter = $('<div/>', {
		id : 'map-data-filter'
	});

	MapFilter = $('<div/>', {
		id : 'map-filter'
	});

	TestDynamicLoad = $('<div/>', {
		id : 'dynamic-load-container'
	})

	$('#left').find('.map-view').append(ObservatorySelector);
	$('#left').find('.map-view').append(MapFilterHeading);
	$('#left').find('.map-view').append(MapAssetDataMenu);
	$('#left').find('.map-view').append(MapDataFilter);
	$('#left').find('.map-view').append(MapFilter);
	$('#left').prepend(TestDynamicLoad);

    IONUX.init();
};