var arrNumbers = ['1234', '5678', '9876'];
var arrNumberFilter = [];

for (var i = 0; i < arrNumbers.length; i++) {
    arrNumberFilter.push(['inventorynumber', 'is', arrNumbers[i]]);

    if (i != (arrNumbers.length - 1))
        arrNumberFilter.push('OR');
}

var arrRes = nlapiSearchRecord('inventorynumber', null, arrNumberFilter);


require(['N/search'], 
	function(search){
		var arrNumbers = ['1234', '5678', '9876'];
		var arrNumberFilter = new Array();

		for (var i = 0; i < arrNumbers.length; i++) {
			var tempRawFilter = {
					name: 'inventorynumber',
					operator: search.Operator.IS,
					values: [arrNumbers[i]]
			};
			var tempSeaFilter = search.createFilter(tempRawFilter);
			arrNumberFilter.push(tempSeaFilter);
		}
		console.log(arrNumberFilter);

		vay mySearch = search.create({
			type: 'inventorynumber',
			columns: null,
			filters: arrNumberFilter
		}).run();

		var resultSets = mySearch.getRange({
			start: 0,
			end: 1000
		});
		
		console.log(resultSets.length);
	}
);