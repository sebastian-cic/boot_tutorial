"use strict";

/*global $, jQuery, alert*/
/*
// test func for setting img in carousel
function testcar() {
	//$(".carousel").carousel(0);
}

//test function for populating select list
function test() {
	var ddl = "#destinationCitySelectList";
    $(ddl).append('<option value="' + "sss" + '">' + "aaa" + "</option>'");
}
*/


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

function enableHeight() {
	$("#height").attr("disabled", false);
}

function enableLength() {
	$("#length").attr("disabled", false);
}

function enableWidth() {
	$("#width").attr("disabled", false);
}

function enableWeight() {
	$("#weight").attr("disabled", false);
}

function disableHeight() {
	$("#height").attr("disabled", true);
}
function disableLength() {
	$("#length").attr("disabled", true);
}
function disableWidth() {
	$("#width").attr("disabled", true);
}
function disableWeight() {
	$("#weight").attr("disabled", true);
}


function testDisable(){
	disableCitySelectMenu();
	disableLength();
	disableWeight() ;
	 disableWidth();
	 disableHeight();
	 disableRegionSelectMenu();
}








$("#destinationCountrySelectList").change(function () {
    var selectedText = $(this).find("option:selected").text();
    if (selectedText !== "Russia") {
		disableCitySelectMenu();
		disableRegionSelectMenu();
		console.log(selectedText);
	} else {
		enableCitySelectMenu();
		enableRegionSelectMenu();
		console.log(selectedText);
	}
});

