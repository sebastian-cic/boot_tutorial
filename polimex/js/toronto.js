//"use strict";

/*global $, jQuery, alert*/


function PopRegion(region, price, packageType, deliveryCharge, minKg, maxKg, deliveryMessage, sender, msg) {
	"use strict";
	this.region = region;
	this.price = price;
	this.packageType = packageType;
	this.deliveryCharge = deliveryCharge;
	this.minKg = minKg;
	this.maxkg = maxKg;
	this.deliveryMessage = deliveryMessage;
	this.sender = sender;
	this.msg = msg;
}


var russiaRegionAir = [];
var russiaCityAir = [];
var russianCitySea = [];
var pysankaSea = [];
var pysankaAir = [];
var polimexSea = [];
var polimexAir = [];
var listAllCountries = [];
var listAllDestinations = [];
var econo = [];

//economy destinations parcels
//econo.push(new PopRegion("Poland", 3.30, "economy", 18.00, 1, 70, "12-16 weeks", "Polimex"));


// polimex air parcels
polimexAir.push(new PopRegion("Austria", 7.00, "air", 30.00, 1, 30, "5-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Belgium", 7.00, "air", 25.00, 1, 30, "5-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Croatia (Mainland)", 7.00, "air", 45.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Czech Republic", 7.00, "air", 20.00, 1, 30, "5-10 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Denmark", 7.00, "air", 25.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexAir.push(new PopRegion("Finland", 7.00, "air", 45.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("France", 7.00, "air", 30.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Germany", 7.00, "air", 20.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Hungary", 7.00, "air", 25.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Ireland", 7.00, "air", 35.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexAir.push(new PopRegion("Italy (Mainland)", 7.00, "air", 35.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Luxembourg", 7.00, "air", 25.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Netherlands", 7.00, "air", 25.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Portugal (Mainland)", 7.00, "air", 45.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Spain (Mainland)", 7.00, "air", 35.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexAir.push(new PopRegion("Romania", 7.00, "air", 45.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Slovakia", 7.00, "air", 20.00, 1, 30, "5-10 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Slovenia", 7.00, "air", 35.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("Sweden", 7.00, "air", 30.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexAir.push(new PopRegion("United Kingdom", 7.00, "air", 30.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexAir.push(new PopRegion("Poland", 6.00, "air", 15.00, 1, 30, "7-14 business days", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

// polimex sea parcels
polimexSea.push(new PopRegion("Austria", 3.00, "sea", 30.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Belgium", 3.00, "sea", 25.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Croatia (Mainland)", 3.00, "sea", 45.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Czech Republic", 3.00, "sea", 20.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Denmark", 3.00, "sea", 25.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexSea.push(new PopRegion("Finland", 3.00, "sea", 45.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("France", 3.00, "sea", 30.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Germany", 3.00, "sea", 20.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Hungary", 3.00, "sea", 25.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Ireland", 3.00, "sea", 35.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexSea.push(new PopRegion("Italy (Mainland)", 3.00, "sea", 35.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Luxembourg", 3.00, "sea", 25.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Netherlands", 3.00, "sea", 25.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Portugal (Mainland)", 3.00, "sea", 45.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Spain (Mainland)", 3.00, "sea", 35.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexSea.push(new PopRegion("Romania", 3.00, "sea", 45.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Slovakia", 3.00, "sea", 20.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Slovenia", 3.00, "sea", 35.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("Sweden", 3.00, "sea", 30.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));
polimexSea.push(new PopRegion("United Kingdom", 3.00, "sea", 30.00, 1, 30, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));

polimexSea.push(new PopRegion("Poland", 2.00, "sea", 15.00, 1, 70, "4-7 weeks", "Polimex", "Prices for shipping from GTA only. Contact us for pricing at other locations."));



// list of all available countries, russia added as default to access regions and cities.
listAllCountries = polimexSea.concat(pysankaSea);
//listAllCountries.push(new PopRegion("Russia"));
//list of all destinations, air and sea.
listAllDestinations = russiaCityAir.concat(russiaRegionAir, russianCitySea, pysankaSea, pysankaAir, polimexAir, polimexSea, econo);


function showEcoRadio() {
	"use strict";
	$("#eco").show();
	$("#ecoRad").show();
}

function hideEcoRadio() {
	"use strict";
	$("#eco").hide();
	$("#ecoRad").hide();
	$("#radioSea").prop("checked", true);
}

//functions to disable and enable select/dropdown menus 
function disableCitySelectMenu() {
	"use strict";
	$("#destinationCitySelectList").attr("disabled", true);
	$("#destinationCitySelectList").append('<option hidden value=' + "default" + '>' + "Not Required " + "</option>'");
}

function enableCitySelectMenu() {
	"use strict";
	$("#destinationCitySelectList").attr("disabled", false);
	
}

function disableRegionSelectMenu() {
	"use strict";
	$("#destinationRegionSelectList").attr("disabled", true);
	$("#destinationRegionSelectList").append('<option hidden value=' + "default" + '>' + "Not Required " + "</option>'");
}

function enableRegionSelectMenu() {
	"use strict";
	$("#destinationRegionSelectList").attr("disabled", false);
}


function setFlagImage(location) {
	"use strict";
	$(".carousel").carousel(location);
}


function init() {
	"use strict";
	disableCitySelectMenu();
	disableRegionSelectMenu();
}
// compare function to sort array of objects for russian regian list, alphabetic sort.
function compare(a, b) {
	"use strict";
    if (a.region < b.region) {return -1; }
    if (a.region > b.region) {return 1; }
    return 0;
}
//Alphabetize countries
listAllCountries.sort(compare);
russiaRegionAir.sort(compare);
russiaCityAir.sort(compare);
// populate destination country list and set default to 0(Austria)
var  i = 0;
for (i = 0; i < listAllCountries.length; i += 1) {
    $("#destinationCountrySelectList").append('<option value="' + [i] + '">' + listAllCountries[i].region + "</option>'");
	$("#destinationCountrySelectList2").append('<option value="' + [i] + '">' + listAllCountries[i].region + "</option>'");
}
$("#destinationCountrySelectList").val('0');

// Get radio value along with country selection
// if russia selected, switching between air and sea disable/enables dropdown menus for city and region
//if screen is tablet or smaller hide/show select menu only when russia selected
$("input:radio[name=radioAirSea]").click(function () {
    "use strict";
	var value = $(this).val(), selectedText = $("#destinationCountrySelectList").find("option:selected").text(), screenSize = $(window).width();
	if (selectedText === "Russia") {
		if (value === "sea") {
			if (screenSize < 992) {
				$("#russianDestinationCityId").show();
				$("#russianDestinationRegionId").hide();
			}
			enableCitySelectMenu();
			disableRegionSelectMenu();
			selectRussiaSea();
		} else {
			if (screenSize < 992) {
				$(".russianDestination").show();
			}
			enableRegionSelectMenu();
			enableCitySelectMenu();
			selectRussiaAir();
		}
	}
});

//disable city or region for russia air parcels to allow only one selection at a time
$("#destinationCitySelectList").change(function () {
	"use strict";
	$("#destinationRegionSelectList").val('default');
});

$("#destinationRegionSelectList").change(function () {
	"use strict";
	$("#destinationCitySelectList").val('default');
});

//when clicking on country select dropdown
//
$("#destinationCountrySelectList").change(function () {
	"use strict";
	hideEcoRadio();
    var selectedText = $(this).find("option:selected").text(), radioValue = $('input[name=radioAirSea]:checked').val(), screenSize = $(window).width(), optionVal = $(this).find("option:selected").val();
    if (selectedText !== "Russia") {
		disableCitySelectMenu();
		disableRegionSelectMenu();
		$("#destinationCitySelectList").empty();
		$("#destinationRegionSelectList").empty();
		$("#destinationRegionSelectList").append('<option hidden value=' + "default" + '>' + "Not Required " + "</option>'");
		$("#destinationCitySelectList").append('<option hidden value=' + "default" + '>' + "Not Required " + "</option>'");
		if (screenSize < 992) {
			$(".russianDestination").hide();
		} else {
			$(".russianDestination").show();
		}
		
    } else {
		if (radioValue === "sea") {
			if (screenSize < 992) {
				$("#russianDestinationCityId").show();
			}
			enableCitySelectMenu();
			disableRegionSelectMenu();
			selectRussiaSea();
		} else {
			if (screenSize < 992) {
				$(".russianDestination").show();
			}
			enableCitySelectMenu();
			enableRegionSelectMenu();
			selectRussiaAir();
		}
	}
	setFlagImage(Number(optionVal));
	if (selectedText === "Poland") {
		showEcoRadio();
	}
});

//search and return specific destination object
function search(destination, type) {
	"use strict";
	var i;
	for (i = 0; i < listAllDestinations.length; i += 1) {
        if (listAllDestinations[i].region === destination && listAllDestinations[i].packageType === type) {
			return listAllDestinations[i];
		}
	}
}

function verifyUserInput(length, height, width, dest) {
	"use strict";
	var arr;
	function sortNumber(a, b) {
		return a - b;
	}

	if (height || height.length !== 0 || width || width.length !== 0 || length || length.length !== 0) {
		arr = [length, width, height];
		arr.sort(sortNumber);
	}

	if (dest === "Poland") {
		if (length < 1 || height < 1 || width < 1) {
			$("#note").show();
			$("#noteSpan").html("Please enter dimensions to verify size restrictions.");
			return false;
		} else if (length > 120 || height > 120 || width > 120) {
			$("#note").show();
			$("#noteSpan").html("Oversized. Please contact us for pricing on packages longer than 120cm.");
			return false;
		} else if (Number(length) + Number(height) + Number(width) > 220) {
			$("#note").show();
			$("#noteSpan").html("Oversized. Please contact us for pricing packages with total dimensions (L + W + H) greater than 220cm. ");
			return false;
		}
		return true;
	} else {
		if (length < 1 || height < 1 || width < 1) {
			$("#note").show();
			$("#noteSpan").html("Please enter dimensions to verify size restrictions.");
			return false;
		} else if (length > 120 || height > 120 || width > 120) {
			$("#note").show();
			$("#noteSpan").html("Oversized. Please contact us for pricing on packages longer than 120cm.");
			return false;
		} else if (Number(arr[0] * 2)  + Number(arr[1] * 2) + Number(arr[2]) > 300) {
			$("#note").show();
			$("#noteSpan").html("Please contact us for size restrictions to the EU, max size is Longest side + (2 * height) + (2 * width) totaling no more than 300cm");
			return false;
		}
		return true;
	}
}
function chargeableWeight(length, width, height, weight) {
	"use strict";
	var chargeableKg = (Number(length) * Number(height) * Number(width)) / 6000;
	//console.log(chargeableKg );
	//console.log(weight );
	
	if (chargeableKg > weight) {
		chargeableKg = (Math.ceil(chargeableKg * 2) / 2).toFixed(1);
		$("#note").show();
		$("#noteSpan").html("Weight to size ratio too low, displaying cost for chargeable weight of " + chargeableKg + " kg.");
		return Number(chargeableKg);
	} else {
		return weight;
	}
}

function scroll(elementId) {
	"use strict";
	$('html, body').animate({
        scrollTop: $(elementId).offset().top
    }, 1000);
}
function setDeliveryCharge(weight, deliveryCharge, maxWeight) {
	"use strict";
	if (weight > maxWeight) {
		return;
	}
	if (weight > 30) {
		//
		var deli;
		deli = deliveryCharge  + (((Math.ceil(weight / 10) - 3)*10));
		console.log(typeof deli);
		console.log( deli);
		return deli;
		
		//this is for polimark
		//return deliveryCharge * (Math.ceil(weight / 10) - 1);
	} else {
		return deliveryCharge;
	}
	
}
function calcPrice() {
	"use strict";
	$("#note").hide();
	$("#msg").hide();
	
	var packageType, destination, total, destObject, weight, length, width, height, $window, dest, charWeight;
	dest  = $("#destinationCountrySelectList").find("option:selected").text();
	weight = $("#weight").val();
	length  = $("#length").val();
	height  = $("#height").val();
	width  = $("#width").val();
	if (weight < 1) {
		$("#note").show();
		$("#noteSpan").html("Please enter a weight");
		if ($(window).width() < 768) {
			scroll("#weight");
		}
		
		return;
	}
	if (!verifyUserInput(length, height, width, dest)) {
		$("#totalSpan").html("$0.00");
		$("#deliverySpan").html("N/A");
		if ($(window).width() < 768) {
			scroll("#weight");
		}
		
		return;
	}
	
	
	packageType = $('input[name=radioAirSea]:checked').val();
	destination = $("#destinationCountrySelectList").find("option:selected").text();
	// checks city and region drop down sets destination to dropdown that is not blank
	if ($("#destinationCitySelectList").find("option:selected").text() !== " " && destination === "Russia") {
		destination = $("#destinationCitySelectList").find("option:selected").text();
	} else if ($("#destinationRegionSelectList").find("option:selected").text() !== " "  && destination === "Russia") {
		destination = $("#destinationRegionSelectList").find("option:selected").text();
	}
	// get the destination object
	destObject = search(destination, packageType);
	
	// set min weight if under
	if (weight < destObject.minKg) {
		weight = destObject.minKg;
		$("#note").show();
		$("#noteSpan").html("Results for minimum weight of " + destObject.minKg + " kg.");
	}
	
	
	if (weight > destObject.maxkg) {
		$("#totalSpan").html("$0.00");
		$("#deliverySpan").html("N/A");
		$("#note").show();
		$("#noteSpan").html("Overweight package.<br> For packages over " + destObject.maxkg + " kg please contact us for pricing.");
		if ($(window).width() < 768) {
			scroll("#weight");
		}
		return;
	}
	//set chargeable weight 
	charWeight = chargeableWeight(length, width, height, weight);
	
	if (destObject.region.toLowerCase() === "poland") {
		total = destObject.price * charWeight + setDeliveryCharge(weight, destObject.deliveryCharge, destObject.maxkg);
	} else {
		total = destObject.price * charWeight + destObject.deliveryCharge;
	}
	
	
	$("#totalSpan").html("$" + total.toFixed(2));
	$("#deliverySpan").html(destObject.deliveryMessage);
	if ($(window).width() < 768) {
		scroll("#weight");
	}
	
	if (destObject.msg) {
		$("#msg").show();
		$("#msgSpan").html(destObject.msg);
	}
	
	if (!destObject.price) {
		$("#note").hide();
	}

}

//hide russian city region on devices smaller then desktop
if ($(window).width() < 992) {
    $(".russianDestination").hide();
} else {
    $(".russianDestination").show();
}

//show hide russian dropdowns when resizing desktop
$(document).ready(function () {
	"use strict";
    var $window = $(window);
	
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 992) {
            $(".russianDestination").hide();
        } else {
			$(".russianDestination").show();
		}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});
///////// more and less js

$(document).ready(function () {
	"use strict";
	var showChar = 200, ellipses = "...", moretext = "more", lesstext = "less";

	$('.more').each(function () {
		var content = $(this).html(), c = content.substr(0, showChar),  h = content.substr(showChar - 1, content.length - showChar), html = c + '<span class="moreellipses">' + ellipses + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

		if (content.length > showChar) {

			$(this).html(html);
		}

	});

	$(".morelink").click(function () {
		if ($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});



function initMap() {
	"use strict";
	var uluru = {lat: 43.643506, lng: -79.447637};
	var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 14,
		    center: uluru
	    });
	var marker = new google.maps.Marker({
			position: uluru,
			map: map
	    });
}
//toggle between showing map and europe img
$("#showHideMap").click(function () {
    "use strict";
	$("#mapHide").toggle();
	$("#mapImg").toggle();
	initMap();
});

$("#mapBottom").click(function () {
    "use strict";
	$("#mapHide").toggle();
	$("#mapImg").toggle();
	initMap();
	if ($(window).width() < 768) {
		scroll("#leftPanel");
	}
	
});


// populates table for shipping-pricing page from list of all available destinations
function populateTable() {
	"use strict";
	var j, e;
	//for each country create header, table and table header. Add class to table, add id to header for scrolling 
	for (i = 0; i < listAllCountries.length; i += 1) {
		$('#testerTable').append("<h3 id='" + listAllCountries[i].region.split(" ")[0] + "'>" + listAllCountries[i].region + "</h3>");
		e = $(document.createElement('table'));
		e.addClass("table table-inverse" + " table" + listAllCountries[i].region);
		e.append('<thead class="table"><tr><th>Shipping<br> Type</th><th>Price /KG</th><th>Min KG</th><th>Max KG</th><th>Delivery charge</th></tr></thead> <tbody>');
		//for each country find all matches of shipping type (ie sea,air economy) and append to table object info
		for (j = 0; j < listAllDestinations.length; j += 1) {
			if (listAllDestinations[j].region === listAllCountries[i].region && listAllDestinations[j].price !== 0) {
				e.append("<tr>" + "<td>" + listAllDestinations[j].packageType.toUpperCase()  + "</td>" + "<td>" + listAllDestinations[j].price.toFixed(2)  + "</td>" + "<td>" + listAllDestinations[j].minKg  + "</td>" + "<td>" + listAllDestinations[j].maxkg  + "</td>" + "<td>" + listAllDestinations[j].deliveryCharge.toFixed(2)  + "</td>" + "</tr>");
			}
		}
		//append to div on page
		$('#testerTable').append(e);
	}
	//append russian cities by sea to russian table created in first for loop
	$('.tableRussia').append("<tr id='Row'><td class='russiaRow'>Cities by sea </td></tr>");
	for (i = 0; i < russianCitySea.length; i += 1) {
		$('.tableRussia').append("<tr>" + "<td>" + russianCitySea[i].region  + "</td>" + "<td>" + russianCitySea[i].price.toFixed(2)  + "</td>" + "<td>" + russianCitySea[i].minKg  + "</td>" + "<td>" + russianCitySea[i].maxkg  + "</td>" + "<td>" + russianCitySea[i].deliveryCharge.toFixed(2)  + "</td>" + "</tr>");
	}
	//append russian cities by air to russian table created in first for loop
	$('.tableRussia').append("<tr><td class='russiaRow'>Cities by air </td></tr>");
	for (i = 0; i < russiaCityAir.length; i += 1) {
		$('.tableRussia').append("<tr>" + "<td>" + russiaCityAir[i].region  + "</td>" + "<td>" + russiaCityAir[i].price.toFixed(2)  + "</td>" + "<td>" + russiaCityAir[i].minKg  + "</td>" + "<td>" + russiaCityAir[i].maxkg  + "</td>" + "<td>" + russiaCityAir[i].deliveryCharge.toFixed(2)  + "</td>" + "</tr>");
	}
	//append russian regions by air to russian table created in first for loop
	$('.tableRussia').append("<tr ><td class='russiaRow'>Regions by air </td></tr>");
	for (i = 0; i < russiaRegionAir.length; i += 1) {
		$('.tableRussia').append("<tr>" + "<td>" + russiaRegionAir[i].region  + "</td>" + "<td>" + russiaRegionAir[i].price.toFixed(2)  + "</td>" + "<td>" + russiaRegionAir[i].minKg  + "</td>" + "<td>" + russiaRegionAir[i].maxkg  + "</td>" + "<td>" + russiaRegionAir[i].deliveryCharge.toFixed(2)  + "</td>" + "</tr>");
	}
}

populateTable();

// on click on shipping-pricing page scroll to country
$("#destinationCountrySelectList2").change(function () {
	"use strict";
    var selectedText = $(this).find("option:selected").text();
	selectedText = selectedText.split(" ")[0];
	scroll("#" + selectedText);
});