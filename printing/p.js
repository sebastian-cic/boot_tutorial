/*jslint browser: true*/
/*global $, jQuery, alert*/


function validateInput() {
	"use strict";
	if (!$('#firstName').val()) {
        $("#senderNotification1").html("cannot be blank");
        $('#senderNotification1').css('color', 'red');
    } else {
        $("#senderNotification1").html("");
    }
		
	if (!$('#lastname').val()) {
        $("#senderNotification2").html("cannot be blank");
        $('#senderNotification2').css('color', 'red');
    } else {
        $("#senderNotification2").html("");
    }
    
    if (!$('#street').val()) {
        $("#senderNotification3").html("cannot be blank");
        $('#senderNotification3').css('color', 'red');
    } else {
        $("#senderNotification3").html("");
    }
    
    if (!$('#city').val()) {
        $("#senderNotification4").html("cannot be blank");
        $('#senderNotification4').css('color', 'red');
    } else {  
        $("#senderNotification4").html("");
    }
    
    if (!$('#postalCode').val()) {
        $("#senderNotification5").html("cannot be blank");
        $('#senderNotification5').css('color', 'red');
    } else {
        $("#senderNotification5").html("");
    }
    
    if (!$('#phone').val()) {
        $("#senderNotification6").html("cannot be blank");
        $('#senderNotification6').css('color', 'red');
    } else {
        $("#senderNotification6").html("");
    }
    
    if (!$('#email').val()) {
        $("#senderNotification7").html("cannot be blank");
        $('#senderNotification7').css('color', 'red');
    } else {
        $("#senderNotification7").html("");
    }
    
    if (!$('#country').val()) {
         $("#senderNotification8").html("cannot be blank");
        $('#senderNotification8').css('color', 'red');
    } else {
        $("#senderNotification8").html("");
    }
    
    if (!$('#firstNameReceiver').val()) {
         $("#receiverNotification1").html("cannot be blank");
        $('#receiverNotification1').css('color', 'red');
    } else {
        $("#receiverNotification1").html("");
    }
    
    if (!$('#lastnameReceiver').val()) {
         $("#receiverNotification2").html("cannot be blank");
        $('#receiverNotification2').css('color', 'red');
    } else {
        $("#receiverNotification2").html("");
    }
       
    if (!$('#streetReceiver').val()) {
         $("#receiverNotification3").html("cannot be blank");
        $('#receiverNotification3').css('color', 'red');
    } else {
        $("#receiverNotification3").html("");
    }
    
     if (!$('#cityReceiver').val()) {
          $("#receiverNotification4").html("cannot be blank");
        $('#receiverNotification4').css('color', 'red');
    } else {
        $("#receiverNotification4").html("");
    }
    
     if (!$('#postalCodeReceiver').val()) {
          $("#receiverNotification5").html("cannot be blank");
        $('#receiverNotification5').css('color', 'red');
    } else {
        $("#receiverNotification5").html("");
    }
    
    if (!$('#phoneReceiver').val() && !$('#phoneReceiver2').val()) {
         $("#receiverNotification6").html("Required at least 1 phone number");
        $('#receiverNotification6').css('color', 'red');
         $("#receiverNotification9").html("Required at least 1 phone number");
        $('#receiverNotification9').css('color', 'red');
    } else {
        $("#receiverNotification6").html("");
         $("#receiverNotification8").html("");
    }
    
    if (!$('#emailReceiver').val()) {
         $("#receiverNotification7").html("cannot be blank");
        $('#receiverNotification7').css('color', 'red');
    } else {
        $("#receiverNotification7").html("");
    }
    
    if (!$('#countryReceiver').val()) {
         $("#receiverNotification8").html("cannot be blank");
        $('#receiverNotification8').css('color', 'red');
    } else {
        $("#receiverNotification8").html("");
    }
    
     



}

function myFunction() {
    "use strict";
    window.print();
}

function myFunction2() {
  
 $("#demo").barcode(
"12345688", 
"ean8" 
);     
    validateInput();
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

$(document).ready(function(){

    var settings = {
        
          bgColor: "#000000",
          color:"#666666"
          
        };
    
$("#demo").barcode("11111678", "ean8", settings );
});


