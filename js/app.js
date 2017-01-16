function testcar() {
	$(".carousel").carousel(0);
}

$("#destinationCountrySelectList").change(function () {
    var selectedText = $(this).find("option:selected").text();
    
    $(".test").text(selectedText);
	console.log(selectedText);
});
