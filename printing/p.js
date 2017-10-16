/*jslint browser: true*/
/*global $, jQuery, alert*/

function validateInput() {
   
	"use strict";
    var flag = 0;
	if (!$('#firstName').val()) {
		$("#senderNotification1").html("Required");
		$('#senderNotification1').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification1").html("");
	}
	if (!$('#lastName').val()) {
		$("#senderNotification2").html("Required");
		$('#senderNotification2').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification2").html("");
	}
	if (!$('#street').val()) {
		$("#senderNotification3").html("Required");
		$('#senderNotification3').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification3").html("");
	}
	if (!$('#city').val()) {
		$("#senderNotification4").html("Required");
		$('#senderNotification4').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification4").html("");
	}
	if (!$('#postalCode').val()) {
		$("#senderNotification5").html("Required");
		$('#senderNotification5').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification5").html("");
	}
	if (!$('#email').val()) {
		$("#senderNotification7").html("Required");
		$('#senderNotification7').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification7").html("");
	}
	if (!$('#country').val()) {
		$("#senderNotification8").html("Required");
		$('#senderNotification8').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#senderNotification8").html("");
	}
	if (!$('#firstNameRecipient').val()) {
		$("#receiverNotification1").html("Required");
		$('#receiverNotification1').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification1").html("");
	}
	if (!$('#lastNameRecipient').val()) {
		$("#receiverNotification2").html("Required");
		$('#receiverNotification2').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification2").html("");
	}
	if (!$('#streetAddressRecipient').val()) {
		$("#receiverNotification3").html("Required");
		$('#receiverNotification3').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification3").html("");
	}
	if (!$('#cityRecipient').val()) {
		$("#receiverNotification4").html("Required");
		$('#receiverNotification4').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification4").html("");
	}
	if (!$('#postalCodeRecipient').val()) {
		$("#receiverNotification5").html("Required");
		$('#receiverNotification5').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification5").html("");
	}
	if (!$('#mobilePhoneRecipient').val() && !$('#phoneRecipient').val()) {
		$("#receiverNotification6").html("Required at least 1 phone number");
		$('#receiverNotification6').css('color', 'red');
		$("#receiverNotification9").html("Required at least 1 phone number");
		$('#receiverNotification9').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification6").html("");
		$("#receiverNotification9").html("");
	}
	if (!$('#length').val()) {
		$("#receiverNotification10").html("Required");
		$('#receiverNotification10').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification10").html("");
	}
	if (!$('#width').val()) {
		$("#receiverNotification11").html("Required");
		$('#receiverNotification11').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification11").html("");
	}
    if (!$('#height').val()) {
		$("#receiverNotification12").html("Required");
		$('#receiverNotification12').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification12").html("");
	}
    if (!$('#valueCustoms').val()) {
		$("#receiverNotification13").html("Required");
		$('#receiverNotification13').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification13").html("");
	}
    if (!$('#item1').val()) {
		$("#receiverNotification14").html("Required");
		$('#receiverNotification14').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification14").html("");
	}
    if (!$('#weightCustoms').val()) {
		$("#receiverNotification15").html("Required");
		$('#receiverNotification15').css('color', 'red');
        flag = flag + 1;
	} else {
		$("#receiverNotification15").html("");
	}
    
    if (flag === 0) {
        return true;
    } else {
        return false;
    }
}

function myFunction() {
	"use strict";
	window.print();
}

function chargeableWeightCustoms(length, width, height, weight) {
	"use strict";
    weight = (Math.ceil(weight * 2) / 2).toFixed(1);
	var chargeableKg = (Number(length) * Number(height) * Number(width)) / 6000;
	
	if (chargeableKg > weight) {
		chargeableKg = (Math.ceil(chargeableKg * 2) / 2).toFixed(1);
		return chargeableKg;
	} else {
		return " ";
	}
}

function myFunction2() {
    "use strict";
    var name = "", address1 = "", phone1 = "", name2 = "", address2 = "", phone2 = "", service = "", agent = "169", weight = 0, charW;
    weight = $("#weightCustoms").val();
    weight = (Math.ceil(weight * 2) / 2).toFixed(1);
    charW = chargeableWeightCustoms($('#length').val(), $('#width').val(), $('#height').val(), weight);
    address1 = $('#city').val() + " " + $('#province').val() + " " + $('#postalCode').val();
    phone1 = $('#mobilePhone').val() + " " + $('#phone').val();
    name = $('#firstName').val();
    name = name + " " + $('#lastName').val();
    name2 = $('#firstNameRecipient').val() + " " + $('#lastNameRecipient').val();
    address2 = $('#cityRecipient').val() + " " + $('#provinceRecipient').val() + " " + $('#postalCodeRecipient').val();
    phone2 = $('#mobilePhoneRecipient').val() + " " + $('#phoneRecipient').val();
    service = $('input[name=radioAirSea]:checked').val();
    
    if (service === "economy") {
        agent = "168";
        service = service + " Sea";
    }
    
	$("#senderFirstName").html(name);
	$("#senderStreet").html($('#street').val());
	$("#senderCity").html(address1);
	$("#senderPhone").html(phone1);
	$("#senderEmail").html($('#email').val());
	$("#senderCountry").html($('#country').val());
	$("#receiverFirstName").html(name2);
    $("#r_unitTd").html($('#unitRecipient').val());
    $("#s_unitTd").html($('#s_unit').val());
	$("#receiverStreet").html($('#streetAddressRecipient').val());
	$("#receiverCity").html(address2);
	$("#receiverPhone").html(phone2);
    $("#countryRed").val($("#destinationCountrySelectList option:selected").text());
	$("#receivercountry").html($("#destinationCountrySelectList option:selected").text());
    $("#serviceType2").html(service.toUpperCase());
    $('#agentCode2').html(agent);
    $('#shipValue2').html("$" + $('#valueCustoms').val());
    $("#lenghtTD").html($('#length').val());
    $("#widthTD").html($('#width').val());
    $("#heightTD").html($('#height').val());
    $("#weightTd").html(weight);
    $("#chargealeTD").html(charW);
    $("#unit1").html($('#item1').val());
    $("#unit2").html($('#item2').val());
    $("#unit3").html($('#item3').val());
    $("#unit4").html($('#item4').val());
    $("#unit5").html($('#item5').val());
    $("#unit6").html($('#item6').val());
    $("#unit7").html($('#item7').val());
    $("#unit8").html($('#item8').val());
    $("#unit9").html($('#item9').val());
    $("#unit10").html($('#item10').val());
    $("#unit11").html($('#item11').val());
    $("#unit12").html($('#item12').val());
    $("#unit13").html($('#item13').val());
    $("#unit14").html($('#item14').val());
    $("#amount1").html($('#qty1').val());
    $("#amount2").html($('#qty2').val());
    $("#amount3").html($('#qty3').val());
    $("#amount4").html($('#qty4').val());
    $("#amount5").html($('#qty5').val());
    $("#amount6").html($('#qty6').val());
    $("#amount7").html($('#qty7').val());
    $("#amount8").html($('#qty8').val());
    $("#amount9").html($('#qty9').val());
    $("#amount10").html($('#qty10').val());
    $("#amount11").html($('#qty11').val());
    $("#amount12").html($('#qty12').val());
    $("#amount13").html($('#qty13').val());
    $("#amount14").html($('#qty14').val());
    
   
    
}

function formSubmit() {
    "use strict";
    if (validateInput()) {
        alert();
        document.forms["submit"].submit();
    }
}
$(document).ready(function () {
    "use strict";
	var settings = {
		bgColor: "#FFFFFF",
        color: "#000000",
        barWidth: 3,
        barHeight: 55,
        fontSize: 30

	};

	$("#demo").barcode($("#barcodeId").val(), "code128", settings);
});
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
	dd = '0' + dd;
}
if (mm < 10) {
	mm = '0' + mm;
}
today =  yyyy + '-' + mm + '-' + dd;
document.getElementById('dateSpan').innerHTML = today;

function loadEcoButton() {
    "use strict";
    if ($("#receivercountry").html($("#destinationCountrySelectList option:selected").text()) === "POLAND") {
      
	    $("#eco").show();
        $("#ecoRad").show();
    }
}

function myFunction3() {
    "use strict";
    if (validateInput()) {
        document.getElementById("mainForm").submit();
    }
}

function setSea() {
    "use strict";
	
    //$("#serviceType").removeClass("hidden-print").addClass("visible-print");
    //$("#serviceType2").removeClass("visible-print").addClass("hidden-print");
    $("#serviceType3").removeClass("visible-print").addClass("hidden-print");
}

function setAir() {
    "use strict";
	
    //$("#serviceType").removeClass("visible-print").addClass("hidden-print");
    //$("#serviceType2").removeClass("hidden-print").addClass("visible-print");
    $("#serviceType3").removeClass("visible-print").addClass("hidden-print");
}

function setEco() {
    "use strict";
	
    //$("#serviceType").removeClass("visible-print").addClass("hidden-print");
    //$("#serviceType2").removeClass("visible-print").addClass("hidden-print");
    $("#serviceType3").removeClass("hidden-print").addClass("visible-print");
}

$("input:radio[name=radioAirSea]").click(function () {
    "use strict";
	var value = $(this).val();
	
    if (value === "sea") {
			
		
        setSea();
            //$( "#serviceType" ).toggleClass( "hidden-print");

    } else if (value === "air") {
        setAir();
    } else if (value === "economy") {
        setEco();
    }
	
});
function loadInfo() {
    "use strict";
    loadEcoButton();
    myFunction2();
}

function loadEcoButton() {
    "use strict";
   
    if ($("#destinationCountrySelectList4 option:selected").text() === "POLAND") {
      
	    $("#eco").show();
        $("#ecoRad").show();
    }
}
function hideEcoRadio() {
	"use strict";
	$("#eco").hide();
	$("#ecoRad").hide();
	$("#radioSea").prop("checked", true);
}
$("#destinationCountrySelectList4").change(function () {
	"use strict";
    
	hideEcoRadio();
    var selectedText = $(this).find("option:selected").text();
    if (selectedText === "POLAND") {
	    $("#eco").show();
        $("#ecoRad").show();
    } else {
        hideEcoRadio();
    }
});