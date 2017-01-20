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


function testDisable() {
	disableCitySelectMenu();
	disableLength();
	disableWeight();
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

var destinations = [];


/*
function regTest(region) {
	var car = region[0];
	alert(car);
	
}
*/
//regTest(region);
function Destination(destinationCountry, destinationRegion, destinationCity, seaKG, airKG) {
	this.country = destinationCountry;
	this.region = destinationRegion;
	this.city = destinationCity;
	this.sea = seaKG;
	this.air = airKG;
}

//russian
//destinations.push(new Destination("Russia", "", "none", , ));


function PopRegion(region, price) {
	this.region = region;
	this.price = price;
}

var region = [];

region.push(new PopRegion("Khakassiya Resp.", 13.45));
region.push(new PopRegion("Chukotskiy A.O.", 19.95));
region.push(new PopRegion("Arkhangelskaya obl", 13.45));
region.push(new PopRegion("Astrakhanskaya obl.", 13.45));
region.push(new PopRegion("Altayskiy kray", 13.95));

region.push(new PopRegion("Belgorodskaya", 9.95));
region.push(new PopRegion("Yevreyskiy A.O.", 13.95));
region.push(new PopRegion("Amurskaya obl.", 13.95));
region.push(new PopRegion("Brianskaya obl.", 9.95));
region.push(new PopRegion("Chuvashiya", 13.45));

region.push(new PopRegion("Cheliabinskaya obl.", 13.45));
region.push(new PopRegion("Karachaevo-Cherkesiya Resp", 13.45));
region.push(new PopRegion("Chitinskaya obl", 13.45));
region.push(new PopRegion("Sverdlovskaya obl.", 13.45));
region.push(new PopRegion("Kalmykiya Resp.", 13.45));

region.push(new PopRegion("Altay Resp.", 19.95));
region.push(new PopRegion("Chechnya Resp.", 19.95));
region.push(new PopRegion("Irkutskaya obl.", 13.45));
region.push(new PopRegion("Ivanovskaya obl.", 9.95));
region.push(new PopRegion("Udmurtiya Resp.", 13.45));

region.push(new PopRegion("Kaliningradskaya obl.", 13.95));
region.push(new PopRegion("Kaluzhskaya obl.", 9.95));
region.push(new PopRegion("Tatarstan Resp.", 13.45));
region.push(new PopRegion("Kemerovskaya obl.", 13.95));
region.push(new PopRegion("Khabarovskiy kray", 13.95));

region.push(new PopRegion("Khanty-Mansiyski A.O.", 13.95));
region.push(new PopRegion("Kirovskaya obl.", 13.45));
region.push(new PopRegion("Kostromskaya obl.", 9.95));
region.push(new PopRegion("Krasnodarskiy kray", 9.95));
region.push(new PopRegion("Krasnoyarskiy kray", 13.95));

region.push(new PopRegion("Komi-Permyatskiy A.O.", 13.45));
region.push(new PopRegion("Kurganskaya obl.", 13.95));
region.push(new PopRegion("Kurskaya obl.", 9.95));
region.push(new PopRegion("Tyva Resp.", 13.45));
region.push(new PopRegion("Lipetskaya obl.", 9.95));

region.push(new PopRegion("Magadanskaya obl.", 19.95));
region.push(new PopRegion("Ingushetiya Resp.", 13.45));
region.push(new PopRegion("Dagestan Resp.", 13.45));
region.push(new PopRegion("Adygea Resp", 9.95));
region.push(new PopRegion("Moskovskaya obl.", 9.45));

region.push(new PopRegion("Murmanskaya obl.", 13.95));
region.push(new PopRegion("kabardyno-Balkarskaya Resp.", 13.95));
region.push(new PopRegion("Nenetskiy A.O.", 13.45));
region.push(new PopRegion("Nizhegorodskaya obl.", 13.45));
region.push(new PopRegion("Taymyrskiy A.O.", 19.95));

region.push(new PopRegion("Novgorodskaya obl.", 9.95));
region.push(new PopRegion("Novosibirskaya obl.", 13.95));
region.push(new PopRegion("Omskaya obl.", 13.45));
region.push(new PopRegion("Orlovskaya obl.", 9.95));
region.push(new PopRegion("Orenburgskaya obl.", 13.45));

region.push(new PopRegion("Penzenskaya obl.", 13.45));
region.push(new PopRegion("Permskaya obl.", 13.45));
region.push(new PopRegion("Kamchatskiy kray", 19.95));
region.push(new PopRegion("Kareliya Resp.", 13.45));
region.push(new PopRegion("Pskovskaya obl.", 13.45));

region.push(new PopRegion("Riazanskaya obl.", 13.45));
region.push(new PopRegion("Rostovskaya obl.", 9.95));
region.push(new PopRegion("Yamalo-Nenetskiy A.O.", 19.95));
region.push(new PopRegion("Samarskaya obl.", 9.95));
region.push(new PopRegion("Mordovia Resp", 13.45));

region.push(new PopRegion("Saratovskaya obl.", 9.95));
region.push(new PopRegion("Smolenskaya obl.", 9.95));
region.push(new PopRegion("Stavropolskiy kray", 13.45));
region.push(new PopRegion("Leningradskaya obl.", 9.45));
region.push(new PopRegion("Komi Resp.", 13.45));

region.push(new PopRegion("Tambovskaya obl.", 9.95));
region.push(new PopRegion("Tiumenskaya obl.", 13.45));
region.push(new PopRegion("Tomskaya obl.", 13.45));
region.push(new PopRegion("Tulskaya obl.", 9.95));
region.push(new PopRegion("Tverskaya obl.", 9.95));

region.push(new PopRegion("Bashkortostan Resp.", 13.45));
region.push(new PopRegion("Buriatiya Resp.", 13.45));
region.push(new PopRegion("Ulianovskaya obl.", 9.95));
region.push(new PopRegion("Sev.Osetia Resp.Alanya", 13.95));
region.push(new PopRegion("Vladimirskaya obl.", 9.95));

region.push(new PopRegion("Primorskiy kray", 13.95));
region.push(new PopRegion("Volgogradskaya obl.", 9.95));
region.push(new PopRegion("Vologodskaya obl.", 9.95));
region.push(new PopRegion("Voronezhskaya obl.", 9.95));
region.push(new PopRegion("Sakha(Yakutiya) Resp.", 19.95));

region.push(new PopRegion("Yaroslavskaya obl.", 9.95));
region.push(new PopRegion("Mari-El Resp.", 13.45));
region.push(new PopRegion("Sakhalinskaya obl.", 19.95));


alert(region.length);
region.sort();

for (var i = 0, len = region.length; i < len; i++) {
  console.log(region[i].region, region[i].price);
}