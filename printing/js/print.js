//"use strict";
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
	var settings = {
		bgColor: "#FFFFFF",
        color: "#000000",
        barWidth: 3,
        barHeight: 55,
        fontSize: 30

	};

	$("#demo").barcode($("#barcodeId").val(), "code39", settings);
});

