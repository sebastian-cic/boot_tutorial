function PopRegion(a,b,c,d,e,f,g,h,i){"use strict";this.region=a,this.price=b,this.packageType=c,this.deliveryCharge=d,this.minKg=e,this.maxkg=f,this.deliveryMessage=g,this.sender=h,this.msg=i}function showEcoRadio(){"use strict";$("#eco").show(),$("#ecoRad").show()}function hideEcoRadio(){"use strict";$("#eco").hide(),$("#ecoRad").hide(),$("#radioSea").prop("checked",!0)}function disableCitySelectMenu(){"use strict";$("#destinationCitySelectList").attr("disabled",!0),$("#destinationCitySelectList").append("<option hidden value=default>Not Required </option>'")}function enableCitySelectMenu(){"use strict";$("#destinationCitySelectList").attr("disabled",!1)}function disableRegionSelectMenu(){"use strict";$("#destinationRegionSelectList").attr("disabled",!0),$("#destinationRegionSelectList").append("<option hidden value=default>Not Required </option>'")}function enableRegionSelectMenu(){"use strict";$("#destinationRegionSelectList").attr("disabled",!1)}function setFlagImage(a){"use strict";$(".carousel").carousel(a)}function init(){"use strict";disableCitySelectMenu(),disableRegionSelectMenu()}function compare(a,b){"use strict";return a.region<b.region?-1:a.region>b.region?1:0}function selectRussiaSea(){"use strict";for($("#destinationCitySelectList").empty(),$("#destinationRegionSelectList").empty(),$("#destinationCitySelectList").append("<option value=default> </option>'"),i=0;i<russianCitySea.length;i+=1)$("#destinationCitySelectList").append('<option value="'+[i]+'">'+russianCitySea[i].region+"</option>'");$("#destinationCitySelectList").val("0"),$("#destinationRegionSelectList").append("<option hidden value=default>Not Required</option>'")}function selectRussiaAir(){"use strict";for($("#destinationCitySelectList").empty(),$("#destinationCitySelectList").append("<option hidden value=default>City OR Region</option>'"),i=0;i<russiaCityAir.length;i+=1)$("#destinationCitySelectList").append('<option value="'+[i]+'">'+russiaCityAir[i].region+"</option>'");for($("#destinationRegionSelectList").empty(),$("#destinationRegionSelectList").append("<option hidden value=default>City OR Region</option>'"),i=0;i<russiaRegionAir.length;i+=1)$("#destinationRegionSelectList").append('<option value="'+[i]+'">'+russiaRegionAir[i].region+"</option>'");$("#destinationCitySelectList").val("39")}function search(a,b){"use strict";var c;for(c=0;c<listAllDestinations.length;c+=1)if(listAllDestinations[c].region===a&&listAllDestinations[c].packageType===b)return listAllDestinations[c]}function verifyUserInput(a,b,c){"use strict";return a<1||b<1||c<1?($("#note").show(),$("#noteSpan").html("Please enter dimensions to verify size restrictions."),!1):a>120||b>120||c>120?($("#note").show(),$("#noteSpan").html("Oversized. Please contact us for pricing on packages longer than 120cm."),!1):!(Number(a)+Number(b)+Number(c)>220)||($("#note").show(),$("#noteSpan").html("Oversized. Please contact us for pricing packages with total dimensions (L + W + H) greater than 220cm. "),!1)}function chargeableWeight(a,b,c,d){"use strict";var e=Number(a)*Number(c)*Number(b)/6e3;return e>d?(e=(Math.ceil(2*e)/2).toFixed(1),$("#note").show(),$("#noteSpan").html("Weight to size ratio too low, displaying cost for chargeable weight of "+e+" kg."),e):d}function scroll(a){"use strict";$("html, body").animate({scrollTop:$(a).offset().top},1e3)}function setDeliveryCharge(a,b,c){"use strict";if(!(a>c))return a>20?b*(Math.ceil(a/10)-1):b}function calcPrice(){"use strict";$("#note").hide(),$("#msg").hide();var a,b,c,d,e,f,g,h;return e=$("#weight").val(),f=$("#length").val(),h=$("#height").val(),g=$("#width").val(),e<1?($("#note").show(),$("#noteSpan").html("Please enter a weight"),void($(window).width()<768&&scroll("#weight"))):verifyUserInput(f,h,g)?(a=$("input[name=radioAirSea]:checked").val(),b=$("#destinationCountrySelectList").find("option:selected").text()," "!==$("#destinationCitySelectList").find("option:selected").text()&&"Russia"===b?b=$("#destinationCitySelectList").find("option:selected").text():" "!==$("#destinationRegionSelectList").find("option:selected").text()&&"Russia"===b&&(b=$("#destinationRegionSelectList").find("option:selected").text()),d=search(b,a),console.log(a),e<d.minKg&&(e=d.minKg,$("#note").show(),$("#noteSpan").html("Results for minimum weight of "+d.minKg+" kg.")),e=chargeableWeight(f,g,h,e),e>d.maxkg?($("#totalSpan").html("$0.00"),$("#deliverySpan").html("N/A"),$("#note").show(),$("#noteSpan").html("Overweight package.<br> For packages over "+d.maxkg+" kg please contact us for pricing."),void($(window).width()<768&&scroll("#weight"))):(c=d.price*e+setDeliveryCharge(e,d.deliveryCharge,d.maxkg),$("#totalSpan").html("$"+c.toFixed(2)),$("#deliverySpan").html(d.deliveryMessage),$(window).width()<768&&scroll("#weight"),d.msg&&($("#msg").show(),$("#msgSpan").html(d.msg)),void(d.price||$("#note").hide()))):($("#totalSpan").html("$0.00"),$("#deliverySpan").html("N/A"),void($(window).width()<768&&scroll("#weight")))}function initMap(){"use strict";var a={lat:51.017334,lng:-114.0532739999},b=new google.maps.Map(document.getElementById("map"),{zoom:14,center:a});new google.maps.Marker({position:a,map:b})}var russiaRegionAir=[],russiaCityAir=[],russianCitySea=[],pysankaSea=[],pysankaAir=[],polimexSea=[],polimexAir=[],listAllCountries=[],listAllDestinations=[],econo=[];econo.push(new PopRegion("Poland",3.3,"economy",18,4,70,"12-16 weeks","Polimex")),polimexAir.push(new PopRegion("Austria",11,"air",25,4,30,"5-14 business days","Polimex")),polimexAir.push(new PopRegion("Belgium",11,"air",25,4,30,"5-14 business days","Polimex")),polimexAir.push(new PopRegion("Croatia (Mainland)",11,"air",45,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Czech Republic",11,"air",20,4,30,"5-10 business days","Polimex")),polimexAir.push(new PopRegion("Denmark",11,"air",25,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Finland",11,"air",45,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("France",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Germany",11,"air",20,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Hungary",11,"air",25,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Ireland",11,"air",45,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Italy (Mainland)",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Luxembourg",11,"air",25,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Netherlands",11,"air",25,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Portugal (Mainland)",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Spain (Mainland)",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Romania",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Slovakia",11,"air",20,4,30,"5-10 business days","Polimex")),polimexAir.push(new PopRegion("Slovenia",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Sweden",11,"air",35,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("United Kingdom",11,"air",25,4,30,"7-14 business days","Polimex")),polimexAir.push(new PopRegion("Poland",11,"air",18,4,30,"7-14 business days","Polimex")),polimexSea.push(new PopRegion("Austria",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Belgium",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Croatia (Mainland)",5.25,"sea",45,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Czech Republic",5.25,"sea",20,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Denmark",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Finland",5.25,"sea",45,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("France",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Germany",5.25,"sea",20,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Hungary",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Ireland",5.25,"sea",45,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Italy (Mainland)",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Luxembourg",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Netherlands",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Portugal (Mainland)",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Spain (Mainland)",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Romania",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Slovakia",5.25,"sea",20,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Slovenia",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Sweden",5.25,"sea",35,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("United Kingdom",5.25,"sea",25,4,30,"4-7 weeks","Polimex")),polimexSea.push(new PopRegion("Poland",5,"sea",8,4,70,"4-7 weeks","Polimex")),pysankaAir.push(new PopRegion("Ukraine (West)",8.45,"air",15,5,30,"N/a","Pysanka")),pysankaAir.push(new PopRegion("Ukraine (East)",8.45,"air",15,5,30,"2-3 weeks","Pysanka")),pysankaAir.push(new PopRegion("Lithuania",7.45,"air",20,5,30,"2-3 weeks","Pysanka")),pysankaAir.push(new PopRegion("Latvia",7.45,"air",20,5,30,"2-3 weeks","Pysanka")),pysankaAir.push(new PopRegion("Estonia",7.45,"air",20,5,30,"2-3 weeks","Pysanka")),pysankaAir.push(new PopRegion("Belarus",7.45,"air",20,5,10,"2-3 weeks","Pysanka")),pysankaAir.push(new PopRegion("Kazakhstan",0,"air",0,0,999,"Air shipping not available","Pysanka")),pysankaAir.push(new PopRegion("Uzbekistan",0,"air",0,0,999,"Air shipping not available","Pysanka")),pysankaAir.push(new PopRegion("Kyrgyzstan",0,"air",0,0,999,"Air shipping not available","Pysanka")),pysankaSea.push(new PopRegion("Ukraine (West)",5.75,"sea",10,5,30,"N/a","Pysanka")),pysankaSea.push(new PopRegion("Ukraine (East)",5.75,"sea",15,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Lithuania",5.75,"sea",20,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Latvia",5.75,"sea",20,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Estonia",5.75,"sea",20,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Belarus",5.25,"sea",20,5,10,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Kazakhstan",8.25,"sea",25,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Uzbekistan",8.25,"sea",25,5,30,"6-8 weeks","Pysanka")),pysankaSea.push(new PopRegion("Kyrgyzstan",8.25,"sea",25,5,30,"6-8 weeks","Pysanka")),russianCitySea.push(new PopRegion("Moscow",7.75,"sea",25,4,30,"6-8 weeks","Pysanka")),russianCitySea.push(new PopRegion("St.Petersburg",7.75,"sea",25,4,30,"6-8 weeks","Pysanka")),russianCitySea.push(new PopRegion("Other",8.25,"sea",25,4,30,"8 weeks for European area, 16+ weeks for Asian area.","Pysanka")),russiaCityAir.push(new PopRegion("Abakan",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Anadyr",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Arkhangelsk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Astrakhan",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Barnaul",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Belgorod",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Birobidzhan",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Blagoveshchensk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Bryansk",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Cheboksary",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Chelyabinsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Cherkessk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Chita",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Yekaterinburg",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Elista",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Gorno-Altaysk",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Grozny",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Irkutsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Ivanovo",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Izhevsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kaliningrad",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kaluga",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kazan",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kemerovo",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Khabarovsk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Khanty-Mansiysk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kirov",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kostroma",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Krasnodar",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Krasnoyarsk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kudymkar",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kurgan",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kursk",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Kyzyl",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Lipetsk",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Magadan",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Magas",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Makhachkala",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Maykop",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Moscow",9.95,"air",25,5,20,"2-3 weeks","Pysanka")),russiaCityAir.push(new PopRegion("Murmansk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Nalchik",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Naryan-Mar",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Nizhny Novgorod",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Norilsk",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Novgorod",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Novosibirsk",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Omsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Orel",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Orenburg",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Penza",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Perm",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Petropavlovsk",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Petrozavodsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Pskov",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Ryazan",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Rostov-on-Don",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Salekhard",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Samara",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Saransk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Saratov",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Smolensk",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Stavropol",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("St.Petersburg",9.95,"air",25,5,20,"2-3 weeks","Pysanka")),russiaCityAir.push(new PopRegion("Syktyvkar",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Tambov",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Tyumen",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Tomsk",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Tula",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Tver",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Ufa",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Ulan-Ude",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Ulyanovsk",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Vladikavkaz",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Vladimir",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Vladivostok",11.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Volgograd",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Vologda",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Voronezh",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Yakutsk",16.95,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Yaroslavl",9.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Yoshkar-Ola",11.45,"air",25,5,20,"N/a","Pysanka")),russiaCityAir.push(new PopRegion("Yuzhno-Sakhalinsk",16.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Khakassia ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Chukotskiy A.O.",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Arkhangelskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Astrakhanskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Altayskiy kray",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Belgorodskaya",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Yevreyskiy A.O.",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Amurskaya",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Brianskaya",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Chuvashiya",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Cheliabinskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Karachaevo-Cherkesiya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Chitinskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Sverdlovskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kalmykiya",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Altay ",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Chechnya ",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Irkutskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Ivanovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Udmurtiya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kaliningradskaya",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kaluzhskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tatarstan ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kemerovskaya ",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Khabarovskiy",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Khanty-Mansiyski A.O.",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kirovskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kostromskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Krasnodarskiy kray",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Krasnoyarskiy kray",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Komi-Permyatskiy A.O.",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kurganskaya ",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kurskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tyva ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Lipetskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Magadanskaya ",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Ingushetiya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Dagestan ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Adygea ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Moskovskaya ",9.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Murmanskaya ",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kabardyno-Balkarskaya ",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Nenetskiy A.O.",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Nizhegorodskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Taymyrskiy A.O.",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Novgorodskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Novosibirskaya ",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Omskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Orlovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Orenburgskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Penzenskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Permskaya",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Kamchatskiy kray",19.95,"air",25,5,20,"N/a","Pysanka"));russiaRegionAir.push(new PopRegion("Kareliya ",13.45,"air",25,5,20,"N/a","Pysanka"));russiaRegionAir.push(new PopRegion("Pskovskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Riazanskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Rostovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Yamalo-Nenetskiy A.O.",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Samarskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Mordovia ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Saratovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Smolenskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Stavropolskiy kray",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Leningradskaya ",9.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Komi ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tambovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tiumenskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tomskaya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tulskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Tverskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Bashkortostan ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Buriatiya ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Ulianovskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Sev.Osetia Resp.Alanya",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Vladimirskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Primorskiy kray",13.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Volgogradskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Vologodskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Voronezhskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Sakha(Yakutiya) ",19.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Yaroslavskaya ",9.95,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Mari-El ",13.45,"air",25,5,20,"N/a","Pysanka")),russiaRegionAir.push(new PopRegion("Sakhalinskaya",19.95,"air",25,5,20,"N/a","Pysanka")),listAllCountries=polimexSea.concat(pysankaSea),listAllCountries.push(new PopRegion("Russia")),listAllDestinations=russiaCityAir.concat(russiaRegionAir,russianCitySea,pysankaSea,pysankaAir,polimexAir,polimexSea,econo),listAllCountries.sort(compare),russiaRegionAir.sort(compare),russiaCityAir.sort(compare);var i=0;for(i=0;i<listAllCountries.length;i+=1)$("#destinationCountrySelectList").append('<option value="'+[i]+'">'+listAllCountries[i].region+"</option>'");$("#destinationCountrySelectList").val("0"),$("input:radio[name=radioAirSea]").click(function(){"use strict";var a=$(this).val(),b=$("#destinationCountrySelectList").find("option:selected").text(),c=$(window).width();"Russia"===b&&("sea"===a?(c<992&&($("#russianDestinationCityId").show(),$("#russianDestinationRegionId").hide()),enableCitySelectMenu(),disableRegionSelectMenu(),selectRussiaSea()):(c<992&&$(".russianDestination").show(),enableRegionSelectMenu(),enableCitySelectMenu(),selectRussiaAir()))}),$("#destinationCitySelectList").change(function(){"use strict";$("#destinationRegionSelectList").val("default")}),$("#destinationRegionSelectList").change(function(){"use strict";$("#destinationCitySelectList").val("default")}),$("#destinationCountrySelectList").change(function(){"use strict";hideEcoRadio();var a=$(this).find("option:selected").text(),b=$("input[name=radioAirSea]:checked").val(),c=$(window).width(),d=$(this).find("option:selected").val();"Russia"!==a?(disableCitySelectMenu(),disableRegionSelectMenu(),$("#destinationCitySelectList").empty(),$("#destinationRegionSelectList").empty(),$("#destinationRegionSelectList").append("<option hidden value=default>Not Required </option>'"),$("#destinationCitySelectList").append("<option hidden value=default>Not Required </option>'"),c<992?$(".russianDestination").hide():$(".russianDestination").show()):"sea"===b?(c<992&&$("#russianDestinationCityId").show(),enableCitySelectMenu(),disableRegionSelectMenu(),selectRussiaSea()):(c<992&&$(".russianDestination").show(),enableCitySelectMenu(),enableRegionSelectMenu(),selectRussiaAir()),setFlagImage(Number(d)),"Poland"===a&&showEcoRadio()}),$(window).width()<992?$(".russianDestination").hide():$(".russianDestination").show(),$(document).ready(function(){"use strict";function b(){var b=a.width();b<992?$(".russianDestination").hide():$(".russianDestination").show()}var a=$(window);b(),$(window).resize(b)}),$(document).ready(function(){"use strict";var a=200,b="...",c="more",d="less";$(".more").each(function(){var d=$(this).html(),e=d.substr(0,a),f=d.substr(a-1,d.length-a),g=e+'<span class="moreellipses">'+b+'&nbsp;</span><span class="morecontent"><span>'+f+'</span>&nbsp;&nbsp;<a href="" class="morelink">'+c+"</a></span>";d.length>a&&$(this).html(g)}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(c)):($(this).addClass("less"),$(this).html(d)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})}),$("#showHideMap").click(function(){"use strict";$("#mapHide").toggle(),$("#mapImg").toggle(),initMap()}),$("#mapBottom").click(function(){"use strict";$("#mapHide").toggle(),$("#mapImg").toggle(),initMap(),$(window).width()<768&&scroll("#leftPanel")});