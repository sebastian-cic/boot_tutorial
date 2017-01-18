"use strict";

/*global $, jQuery, alert*/

function testcar() {
	$(".carousel").carousel(0);
}


function disableCitySelectMenu() {
	$("#destinationCitySelectList").attr("disabled", true);
}

function enableCitySelectMenu() {
	$("#destinationCitySelectList").attr("disabled", false);
}

function disableRegionSelectMenu() {
	$("#destinationRegionSelectList").attr("disabled", true);
}

function enableRegionSelectMenu() {
	$("#destinationRegionSelectList").attr("disabled", false);
}

$("#destinationCountrySelectList").change(function () {
    var selectedText = $(this).find("option:selected").text();
    if (selectedText === "germany") {
		disableCitySelectMenu();
		disableRegionSelectMenu();
		console.log(selectedText);
	} else {
		enableCitySelectMenu();
		enableRegionSelectMenu();
		console.log(selectedText);
	}
});
