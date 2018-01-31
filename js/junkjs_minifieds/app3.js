
//"use strict";
/*global $, jQuery, alert*/

// function to create objects for each destination
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

//arrays for each shipping destination group. polimex & pysanka = countries, russia... = cities and regions for russia, econo used to hold Poland economy class
//ListAllcountries contains only a list of countries, used to populate drop down list, listalldestinations = countries + russian cities and regions
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

///***** create all destination objects
//economy destinations parcels
econo.push(new PopRegion("Poland", 3.30, "economy", 18.00, 4, 70, "12-16 weeks", "Polimex"));


// polimex air parcels
polimexAir.push(new PopRegion("Austria", 11.00, "air", 25.00, 4, 30, "5-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Belgium", 11.00, "air", 25.00, 4, 30, "5-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Croatia (Mainland)", 11.00, "air", 45.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Czech Republic", 11.00, "air", 20.00, 4, 30, "5-10 business days", "Polimex"));
polimexAir.push(new PopRegion("Denmark", 11.00, "air", 25.00, 4, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Finland", 11.00, "air", 45.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("France", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Germany", 11.00, "air", 20.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Hungary", 11.00, "air", 25.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Ireland", 11.00, "air", 45.00, 4, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Italy (Mainland)", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Luxembourg", 11.00, "air", 25.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Netherlands", 11.00, "air", 25.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Portugal (Mainland)", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Spain (Mainland)", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Romania", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Slovakia", 11.00, "air", 20.00, 4, 30, "5-10 business days", "Polimex"));
polimexAir.push(new PopRegion("Slovenia", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Sweden", 11.00, "air", 35.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("United Kingdom", 11.00, "air", 25.00, 4, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Lithuania", 11.00, "air", 20.00, 5, 30, "2-3 weeks", "Polimex"));
polimexAir.push(new PopRegion("Latvia", 11.00, "air", 20.00, 5, 30, "2-3 weeks", "Polimex"));

polimexAir.push(new PopRegion("Poland", 11.00, "air", 18.00, 4, 30, "7-14 business days", "Polimex"));

// polimex sea parcels
polimexSea.push(new PopRegion("Austria", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Belgium", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Croatia (Mainland)", 5.25, "sea", 45.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Czech Republic", 5.25, "sea", 20.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Denmark", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Finland", 5.25, "sea", 45.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("France", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Germany", 5.25, "sea", 20.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Hungary", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Ireland", 5.25, "sea", 45.00, 4, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Italy (Mainland)", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Luxembourg", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Netherlands", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Portugal (Mainland)", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Spain (Mainland)", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Romania", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Slovakia", 5.25, "sea", 20.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Slovenia", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Sweden", 5.25, "sea", 35.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("United Kingdom", 5.25, "sea", 25.00, 4, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Lithuania", 5.25, "sea", 20.00, 5, 30, "6-8 weeks", "Polimex"));
polimexSea.push(new PopRegion("Latvia", 5.25, "sea", 20.00, 5, 30, "6-8 weeks", "Polimex"));

polimexSea.push(new PopRegion("Poland", 5.00, "sea", 8.00, 4, 70, "4-7 weeks", "Polimex"));


//pysanka air parcels
pysankaAir.push(new PopRegion("Ukraine (West)", 8.45, "air", 15.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Ukraine (East)", 8.45, "air", 15.00, 5, 30, "2-3 weeks", "Pysanka"));
pysankaAir.push(new PopRegion("Estonia", 8.45, "air", 20.00, 5, 30, "2-3 weeks", "Pysanka"));
pysankaAir.push(new PopRegion("Belarus", 8.45, "air", 20.00, 5, 10, "2-3 weeks", "Pysanka"));
pysankaAir.push(new PopRegion("Kazakhstan", 0, "air", 0, 0, 999, "Air shipping not available", "Pysanka"));
pysankaAir.push(new PopRegion("Uzbekistan", 0, "air", 0, 0, 999, "Air shipping not available", "Pysanka"));
pysankaAir.push(new PopRegion("Kyrgyzstan", 0, "air", 0, 0, 999, "Air shipping not available", "Pysanka"));
//pysanka sea parcels
pysankaSea.push(new PopRegion("Ukraine (West)", 5.75, "sea", 10.00, 5, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Ukraine (East)", 5.75, "sea", 15.00, 5, 30, "6-8 weeks", "Pysanka"));
pysankaSea.push(new PopRegion("Estonia", 5.75, "sea", 20.00, 5, 30, "6-8 weeks", "Pysanka"));
pysankaSea.push(new PopRegion("Belarus", 5.25, "sea", 20.00, 5, 10, "6-8 weeks", "Pysanka"));
pysankaSea.push(new PopRegion("Kazakhstan", 8.25, "sea", 25.00, 5, 30, "6-8 weeks", "Pysanka"));
pysankaSea.push(new PopRegion("Uzbekistan", 8.25, "sea", 25.00, 5, 30, "6-8 weeks", "Pysanka"));
pysankaSea.push(new PopRegion("Kyrgyzstan", 8.25, "sea", 25.00, 5, 30, "6-8 weeks", "Pysanka"));

//russian city sea
russianCitySea.push(new PopRegion("Moscow", 7.75, "sea", 25.00, 5, 30, "6-8 weeks", "Pysanka"));
russianCitySea.push(new PopRegion("St.Petersburg", 7.75, "sea", 25.00, 5, 30, "6-8 weeks", "Pysanka"));
russianCitySea.push(new PopRegion("Other", 8.25, "sea", 25.00, 5, 30, "8 weeks for European area, 16+ weeks for Asian area.", "Pysanka"));

//Array of russian city objects Air
russiaCityAir.push(new PopRegion("Abakan", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Anadyr", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Arkhangelsk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Astrakhan", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Barnaul", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Belgorod", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Birobidzhan", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Blagoveshchensk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Bryansk", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Cheboksary", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Chelyabinsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Cherkessk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Chita", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yekaterinburg", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Elista", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Gorno-Altaysk", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Grozny", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Irkutsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ivanovo", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Izhevsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Kaliningrad", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kaluga", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kazan", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kemerovo", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Khabarovsk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Khanty-Mansiysk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kirov", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kostroma", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Krasnodar", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Krasnoyarsk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Kudymkar", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kurgan", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kursk", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kyzyl", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Lipetsk", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Magadan", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Magas", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Makhachkala", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Maykop", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Moscow", 9.95, "air", 25.00, 5, 20, "2-3 weeks", "Pysanka"));

russiaCityAir.push(new PopRegion("Murmansk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Nalchik", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Naryan-Mar", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Nizhny Novgorod", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Norilsk", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Novgorod", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Novosibirsk", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Omsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Orel", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Orenburg", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Penza", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Perm", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Petropavlovsk", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Petrozavodsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Pskov", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Ryazan", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Rostov-on-Don", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Salekhard", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Samara", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Saransk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Saratov", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Smolensk", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Stavropol", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("St.Petersburg", 9.95, "air", 25.00, 5, 20, "2-3 weeks", "Pysanka"));
russiaCityAir.push(new PopRegion("Syktyvkar", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Tambov", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tyumen", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tomsk", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tula", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tver", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Ufa", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ulan-Ude", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ulyanovsk", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vladikavkaz", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vladimir", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
		  
russiaCityAir.push(new PopRegion("Vladivostok", 11.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Volgograd", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vologda", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Voronezh", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yakutsk", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Yaroslavl", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yoshkar-Ola", 11.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yuzhno-Sakhalinsk", 16.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

		  
//Array of russian region objects

russiaRegionAir.push(new PopRegion("Khakassia ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chukotskiy A.O.", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Arkhangelskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Astrakhanskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Altayskiy kray", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Belgorodskaya", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Yevreyskiy A.O.", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Amurskaya", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Brianskaya", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chuvashiya", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Cheliabinskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Karachaevo-Cherkesiya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chitinskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sverdlovskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kalmykiya", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Altay ", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chechnya ", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Irkutskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ivanovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Udmurtiya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Kaliningradskaya", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kaluzhskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tatarstan ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kemerovskaya ", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Khabarovskiy", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Khanty-Mansiyski A.O.", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kirovskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kostromskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Krasnodarskiy kray", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Krasnoyarskiy kray", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Komi-Permyatskiy A.O.", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kurganskaya ", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kurskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tyva ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Lipetskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Magadanskaya ", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ingushetiya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Dagestan ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Adygea ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Moskovskaya ", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Murmanskaya ", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kabardyno-Balkarskaya ", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Nenetskiy A.O.", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Nizhegorodskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Taymyrskiy A.O.", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Novgorodskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Novosibirskaya ", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Omskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Orlovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Orenburgskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Penzenskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Permskaya", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kamchatskiy kray", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kareliya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Pskovskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Riazanskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Rostovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Yamalo-Nenetskiy A.O.", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Samarskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Mordovia ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Saratovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Smolenskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Stavropolskiy kray", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Leningradskaya ", 9.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Komi ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Tambovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tiumenskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tomskaya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tulskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tverskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Bashkortostan ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Buriatiya ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ulianovskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sev.Osetia Resp.Alanya", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Vladimirskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Primorskiy kray", 13.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Volgogradskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Vologodskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Voronezhskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sakha(Yakutiya) ", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Yaroslavskaya ", 9.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Mari-El ", 13.45, "air", 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sakhalinskaya", 19.95, "air", 25.00, 5, 20, "N/a", "Pysanka"));

// list of all available countries, russia added as default to access regions and cities.
listAllCountries = polimexSea.concat(pysankaSea);
listAllCountries.push(new PopRegion("Russia"));
//list of all destinations, air and sea.
listAllDestinations = russiaCityAir.concat(russiaRegionAir, russianCitySea, pysankaSea, pysankaAir, polimexAir, polimexSea, econo);

// adds economy radio option, used by poland
function showEcoRadio() {
	"use strict";
	$("#eco").show();
	$("#ecoRad").show();
}
// hides economy radio option, used by poland
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

// used to change image on carousel to display flag to match selected country
function setFlagImage(location) {
	"use strict";
	$(".carousel").carousel(location);
}


// compare function to sort array of objects , alphabetic sort.
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
// populate destination country list,(dropdown menu) and set default to 0(Austria)
var  i = 0;
for (i = 0; i < listAllCountries.length; i += 1) {
    $("#destinationCountrySelectList").append('<option value="' + [i] + '">' + listAllCountries[i].region + "</option>'");
	$("#destinationCountrySelectList2").append('<option value="' + [i] + '">' + listAllCountries[i].region + "</option>'");
}


//populate select dropdown menu for russian Sea parcels
function selectRussiaSea() {
	"use strict";
	$("#destinationCitySelectList").empty();
	$("#destinationRegionSelectList").empty();
	$("#destinationCitySelectList").append('<option value=' + "default" + '>' + " " + "</option>'");
	for (i = 0; i < russianCitySea.length; i += 1) {
		$("#destinationCitySelectList").append('<option value="' + [i] + '">' + russianCitySea[i].region + "</option>'");
	}
	$("#destinationCitySelectList").val('0');
	$("#destinationRegionSelectList").append('<option hidden value=' + "default" + '>' + "Not Required" + "</option>'");
}

//populate select dropdown for russian air parcels
function selectRussiaAir() {
	"use strict";
	$("#destinationCitySelectList").empty();
	$("#destinationCitySelectList").append('<option hidden value=' + "default" + '>' + "City OR Region" + "</option>'");
	for (i = 0; i < russiaCityAir.length; i += 1) {
		$("#destinationCitySelectList").append('<option value="' + [i] + '">' + russiaCityAir[i].region + "</option>'");
	}
	$("#destinationRegionSelectList").empty();
	$("#destinationRegionSelectList").append('<option hidden value=' + "default" + '>' + "City OR Region" + "</option>'");
	for (i = 0; i < russiaRegionAir.length; i += 1) {
		$("#destinationRegionSelectList").append('<option value="' + [i] + '">' + russiaRegionAir[i].region + "</option>'");
	}
	$("#destinationCitySelectList").val('38');
}

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

/*
//function takes in destination and redirects to landing page for specific country
function redirectToSpecificCountryPage(destination) {
	"use strict";
	var dest = destination.replace(/\s+/g, '-');
	if (dest.includes("(")) {
		if (!dest.includes("East") && !dest.includes("West")) {
			dest = dest.substring(0, dest.indexOf("(") - 1);
		}
		
	}
	
	window.location = "shipping-to-" + dest.toLowerCase() + ".html";
	//window.location.replace("file:///C:/Users/seb/gitclones/boot_tutorial/shipping-to-" + destination + ".html");
}

// onclick for country select menu, redirect to landing page for that country
$("#destinationCountrySelectList").change(function () {
	"use strict";
    var selectedText = $(this).find("option:selected").text();
	redirectToSpecificCountryPage(selectedText);
});

*/

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

// check user input, no input, size too large, combinded dimensions to large
function verifyUserInput(length, height, width) {
	"use strict";
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
}

//function to check chargebale weight, dimension multiplied together divided by 6000 compared to actual weight
function chargeableWeight(length, width, height, weight) {
	"use strict";
	var chargeableKg = (Number(length) * Number(height) * Number(width)) / 6000;
	
	if (chargeableKg > weight) {
		chargeableKg = (Math.ceil(chargeableKg * 2) / 2).toFixed(1);
		$("#note").show();
		$("#noteSpan").html("Weight to size ratio too low, displaying cost for chargeable weight of " + chargeableKg + " kg.");
		return chargeableKg;
	} else {
		return weight;
	}
}

//scroll to element on page
function scroll(elementId) {
	"use strict";
	$('html, body').animate({
        scrollTop: $(elementId).offset().top
    }, 1000);
}

// returns proper delivery charge. additional delivery charge applied after 20kg and each additional 10kg after that.
function setDeliveryCharge(weight, deliveryCharge, maxWeight) {
	"use strict";
	if (weight > maxWeight) {
		return;
	}
	
	if (weight > 20) {
		return deliveryCharge * (Math.ceil(weight / 10) - 1);
	} else {
		return deliveryCharge;
	}
	
}

//calculates price
function calcPrice() {
	"use strict";
	//note and msg tags hidden
	$("#note").hide();
	$("#msg").hide();
	
	var packageType, destination, total, destObject, weight, length, width, height, $window, charWeight;
	
	weight = $("#weight").val();
	length  = $("#length").val();
	height  = $("#height").val();
	width  = $("#width").val();
	//if no weight or under 1kg show msg and return
	if (weight < 1) {
		$("#note").show();
		$("#noteSpan").html("Please enter a weight");
		if ($(window).width() < 768) {
			scroll("#weight");
		}
		
		return;
	}
	//verify user input correct
	if (!verifyUserInput(length, height, width)) {
		$("#totalSpan").html("$0.00");
		$("#deliverySpan").html("N/A");
		if ($(window).width() < 768) {
			scroll("#weight");
		}
		
		return;
	}
	
	
	packageType = $('input[name=radioAirSea]:checked').val();
	destination = $("#destinationCountrySelectList").find("option:selected").text();
	// checks city and region drop down, russian city region destination selected from dropdown that is not blank
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
	//set chargeable weight 
	
	//check overweight
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
	
	charWeight = chargeableWeight(length, width, height, weight);
	// calculate total append to results totalspan
	
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
	// if object has a msg field display it ie no air for uzbekistan
	if (destObject.msg) {
		$("#msg").show();
		$("#msgSpan").html(destObject.msg);
	}
	// hide note for objects that have 0 as a price
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
/// not sure if i want to use this
/*
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
*/

// initiate google maps
function initMap() {
	"use strict";
	var uluru = {lat: 51.017334, lng: -114.0532739999};
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

//clicking on "show on map" in location section will scroll to and display google map in main section
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
		$('#testerTable').append("<h3 id='"  + listAllCountries[i].region.split(" ")[0]+ "'>" + listAllCountries[i].region + "</h3>");
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

function addPriceTolandingPage() {
	"use strict";
	// get object for country
	var air, sea;
	sea = search($("#destinationCountrySelectList").find("option:selected").text(), "sea");
	air = search($("#destinationCountrySelectList").find("option:selected").text(), "air");
	// russia is undefined 
	if (sea === undefined) {
		sea = search("Moscow", "sea");
		air = search("Moscow", "air");
	}
	//attach to landing page
	$("#seaPriceSpan").html(sea.price.toFixed(2));
	$("#airPriceSpan").html(air.price.toFixed(2));
}
// onload init
function init(valOfCountryToSet) {
	"use strict";
	//disable russian city and region 
	disableCitySelectMenu();
	disableRegionSelectMenu();
	//set drop down select to display country matching landing page
	$("#destinationCountrySelectList").val(0);
	//22 is russia, enable russian city selections
	if (valOfCountryToSet === 22) {
		selectRussiaSea();
		var screenSize = $(window).width();
		if (screenSize < 992) {
			$("#russianDestinationCityId").show();
		}
		enableCitySelectMenu();
		//19 = poland, display economy radio button
	} else if (valOfCountryToSet === 19) {
		showEcoRadio();
	}
	addPriceTolandingPage();
}