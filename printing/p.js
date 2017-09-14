/*jslint browser: true*/
/*global $, jQuery, alert*/

function myFunction() {
    "use strict";
    window.print();
}

function myFunction2() {
    "use strict";
    $("#senderFirstName").html($('#firstName').val());
    $("#senderLastName").html($('#lastname').val());
    $("#senderStreet").html($('#street').val());
    $("#senderCity").html($('#city').val());
    $("#senderPostalCode").html($('#postalCode').val());
    $("#senderPhone").html($('#phone').val());
    $("#senderEmail").html($('#email').val());
    $("#senderCountry").html($('#country').val());
    
    $("#receiverFirstName").html($('#firstNameReceiver').val());
    $("#receiverlastName").html($('#lastnameReceiver').val());
    $("#receiverStreet").html($('#streetReceiver').val());
    $("#receiverCity").html($('#cityReceiver').val());
    $("#receiverPostalCode").html($('#postalCodeReceiver').val());
    $("#receiverPhone").html($('#phoneReceiver').val());
    $("#receiverEmail").html($('#emailReceiver').val());
    $("#receivercountry").html($('#countryReceiver').val());
}

function appendInput() {
	"use strict";
	alert();
		
		//$("#1").html("Please enter dimensions to verify size restrictions.");

}

$("#demo").barcode(
    "1234567890128", // Value barcode (dependent on the type of barcode)
    "ean13" // type (string)
);