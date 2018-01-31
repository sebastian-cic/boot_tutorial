
//"use strict";
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


function capitalizeFirstLetter(string) {
    "use strict";
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    selectedText.trim();
    if (selectedText === "POLAND") {
	    $("#eco").show();
        $("#ecoRad").show();
    } else {
        hideEcoRadio();
    }
});

$(document).ready(function () {
    if ($("#destinationCountrySelectList4 option:selected").text() === "POLAND") {
      
	    $("#eco").show();
        $("#ecoRad").show();
    }
});

function submit() {
    if (validateInput()) {
		$.ajax({
			type: "POST",
			url: "submit.php",
			data: $("form").serialize()
		}).done(function (msg) {
			if (msg.startsWith("print.php")) {
				window.location.href = '/' + msg;
			} else {
				alert(msg);
			}
		});
    } else {
        alert("Please enter all required fields.");
    }
}

$("tr.table").click(function () {
    var tableData = $(this).children("td").map(function () {
        return $(this).text();
    }).get();
    window.location.href = '/print.php?id=' + $.trim(tableData[0]);
});