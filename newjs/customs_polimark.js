
//"use strict";
/*global $, jQuery, alert*/

$("tr.table").click(function () {
    var tableData = $(this).children("td").map(function () {
        return $(this).text();
    }).get();
    window.location.href = '/print.php?id=' + $.trim(tableData[0]);
});