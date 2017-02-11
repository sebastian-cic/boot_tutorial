//"use strict";

/*global $, jQuery, alert*/


function PopRegion(region, price, seaBool, deliveryCharge, minKg, maxKg, deliveryMessage, sender, minAirKg, maxAirKg) {
	"use strict";
	this.region = region;
	this.price = price;
	this.seaBool = seaBool;
	this.deliveryCharge = deliveryCharge;
	this.minKg = minKg;
	this.maxkg = maxKg;
	this.deliveryMessage = deliveryMessage;
	this.sender = sender;
	this.minAirKg = minAirKg;
	this.maxAirKg = maxAirKg;
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

//listAllDestinations = russiaCityAir.concat(russiaRegionAir, russianCitySea, pysankaSea, pysankaAir, polimexAir, polimexSea);

// polimex air parcels
polimexAir.push(new PopRegion("Austria", 11.00, false, 25.00, 1, 30, "5-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Belgium", 11.00, false, 25.00, 1, 30, "5-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Croatia (Mainland)", 11.00, false, 45.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Czech Republic", 11.00, false, 20.00, 1, 30, "5-10 business days", "Polimex"));
polimexAir.push(new PopRegion("Denmark", 11.00, false, 25.00, 1, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Finland", 11.00, false, 45.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("France", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Germany", 11.00, false, 20.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Hungary", 11.00, false, 25.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Ireland", 11.00, false, 45.00, 1, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Italy (Mainland)", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Luxembourg", 11.00, false, 25.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Netherlands", 11.00, false, 25.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Portugal (Mainland)", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Spain (Mainland)", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));

polimexAir.push(new PopRegion("Romania", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Slovakia", 11.00, false, 20.00, 1, 30, "5-10 business days", "Polimex"));
polimexAir.push(new PopRegion("Slovenia", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("Sweden", 11.00, false, 35.00, 1, 30, "7-14 business days", "Polimex"));
polimexAir.push(new PopRegion("United Kingdom", 11.00, false, 25.00, 1, 30, "7-14 business days", "Polimex"));

// polimex sea parcels
polimexSea.push(new PopRegion("Austria", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Belgium", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Croatia (Mainland)", 5.25, true, 45.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Czech Republic", 5.25, true, 20.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Denmark", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Finland", 5.25, true, 45.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("France", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Germany", 5.25, true, 20.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Hungary", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Ireland", 5.25, true, 45.00, 1, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Italy (Mainland)", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Luxembourg", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Netherlands", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Portugal (Mainland)", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Spain (Mainland)", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));

polimexSea.push(new PopRegion("Romania", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Slovakia", 5.25, true, 20.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Slovenia", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("Sweden", 5.25, true, 35.00, 1, 30, "4-7 weeks", "Polimex"));
polimexSea.push(new PopRegion("United Kingdom", 5.25, true, 25.00, 1, 30, "4-7 weeks", "Polimex"));




//pysanka air parcels
pysankaAir.push(new PopRegion("Ukraine (West)", 8.45, false, 15.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Ukraine (East)", 8.45, false, 15.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Lithuania", 7.45, false, 20.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Latvia", 7.45, false, 20.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Estonia", 7.45, false, 20.00, 5, 30, "N/a", "Pysanka"));
pysankaAir.push(new PopRegion("Belarus", 7.45, false, 20.00, 5, 30, "N/a", "Pysanka"));

//pysanka sea parcels
pysankaSea.push(new PopRegion("Ukraine (West)", 5.75, true, 10.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Ukraine (East)", 5.75, true, 15.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Lithuania", 5.75, true, 20.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Latvia", 5.75, true, 20.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Estonia", 5.75, true, 20.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Belarus", 5.25, true, 20.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Kazakhstan", 8.25, true, 25.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Uzbekistan", 8.25, true, 25.00, 1, 30, "N/a", "Pysanka"));
pysankaSea.push(new PopRegion("Kyrgyzstan", 8.25, true, 25.00, 1, 30, "N/a", "Pysanka"));

//russian city sea
russianCitySea.push(new PopRegion("Moscow", 7.75, true, 25.00, 1, 30, "N/a", "Pysanka"));
russianCitySea.push(new PopRegion("St.Petersburg", 7.75, true, 25.00, 1, 30, "N/a", "Pysanka"));
russianCitySea.push(new PopRegion("Other", 8.25, true, 25.00, 1, 30, "N/a", "Pysanka"));

//Array of russian city objects Air
russiaCityAir.push(new PopRegion("Abakan", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Anadyr", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Arkhangelsk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Astrakhan", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Barnaul", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Belgorod", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Birobidzhan", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Blagoveshchensk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Briansk", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Cheboksay", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Cheliabinsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Cherkessk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Chita", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ekaterinburg", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Elista", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Gorno-Altaysk", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Grozny", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Irkutsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ivanovo", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Izhevsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Kaliningrad", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kaluga", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kazan", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kemerovo", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Khabarovsk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Khanty-Mansiysk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kirov", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kostroma", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Krasnodar", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Krasnoyarsk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Kudymkar", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kurgan", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kursk", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Kyzyl", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Lipetsk", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Magadan", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Magas", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Makhachkala", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Maykop", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Moscow", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Murmansk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Nalchik", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Naryan-Mar", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Nizhnyj Novgorod", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Norilsk", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Novgorod", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Novosibirsk", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Omsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Orel", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Orenburg", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Penza", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Perm", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Petropavlovsk", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Petrozavodsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Pskov", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Riazan", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Rostov-na-Donu", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Salekhard", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Samara", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Saransk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Saratov", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Smolensk", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Stavropol", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("St.Petersburg", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Syktyvkar", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Tambov", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tiumen", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tomsk", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Tula", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("tver", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Ufa", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ulan-Ude", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Ulianovsk", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vladikavkaz", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vladimir", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
		  
russiaCityAir.push(new PopRegion("Vladivostok", 11.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Volgograd", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Vologda", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Voronezh", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yakutsk", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaCityAir.push(new PopRegion("Yaroslavl", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yoshkar-Ola", 11.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaCityAir.push(new PopRegion("Yuzhno-Sakhalinsk", 16.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

		  
//Array of russian region objects

russiaRegionAir.push(new PopRegion("Khakassiya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chukotskiy A.O.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Arkhangelskaya obl", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Astrakhanskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Altayskiy kray", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Belgorodskaya", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Yevreyskiy A.O.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Amurskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Brianskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chuvashiya", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Cheliabinskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Karachaevo-Cherkesiya Resp", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chitinskaya obl", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sverdlovskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kalmykiya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Altay Resp.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Chechnya Resp.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Irkutskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ivanovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Udmurtiya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Kaliningradskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kaluzhskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tatarstan Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kemerovskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Khabarovskiy kray", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Khanty-Mansiyski A.O.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kirovskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kostromskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Krasnodarskiy kray", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Krasnoyarskiy kray", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Komi-Permyatskiy A.O.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kurganskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kurskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tyva Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Lipetskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Magadanskaya obl.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ingushetiya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Dagestan Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Adygea Resp", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Moskovskaya obl.", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Murmanskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("kabardyno-Balkarskaya Resp.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Nenetskiy A.O.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Nizhegorodskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Taymyrskiy A.O.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Novgorodskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Novosibirskaya obl.", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Omskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Orlovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Orenburgskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Penzenskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Permskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kamchatskiy kray", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Kareliya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Pskovskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Riazanskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Rostovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Yamalo-Nenetskiy A.O.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Samarskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Mordovia Resp", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Saratovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Smolenskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Stavropolskiy kray", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Leningradskaya obl.", 9.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Komi Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Tambovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tiumenskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tomskaya obl.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tulskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Tverskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Bashkortostan Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Buriatiya Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Ulianovskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sev.Osetia Resp.Alanya", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Vladimirskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Primorskiy kray", 13.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Volgogradskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Vologodskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Voronezhskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sakha(Yakutiya) Resp.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

russiaRegionAir.push(new PopRegion("Yaroslavskaya obl.", 9.95, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Mari-El Resp.", 13.45, false, 25.00, 5, 20, "N/a", "Pysanka"));
russiaRegionAir.push(new PopRegion("Sakhalinskaya obl.", 19.95, false, 25.00, 5, 20, "N/a", "Pysanka"));

// list of all available countries, russia added as default to access regions and cities.
listAllCountries = polimexSea.concat(pysankaSea);
listAllCountries.push(new PopRegion("Russia"));
listAllCountries.push(new PopRegion("Poland"));
//list of all destinations, air and sea.
listAllDestinations = russiaCityAir.concat(russiaRegionAir, russianCitySea, pysankaSea, pysankaAir, polimexAir, polimexSea);

//functions to disable and enable select/dropdown menus 
function disableCitySelectMenu() {
	"use strict";
	$("#destinationCitySelectList").attr("disabled", true);
}

function enableCitySelectMenu() {
	"use strict";
	$("#destinationCitySelectList").attr("disabled", false);
}

function disableRegionSelectMenu() {
	"use strict";
	$("#destinationRegionSelectList").attr("disabled", true);
}

function enableRegionSelectMenu() {
	"use strict";
	$("#destinationRegionSelectList").attr("disabled", false);
}


function setFlagImage(location) {
	"use strict";
	$(".carousel").carousel(location);
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

// populate destination country list and set default to 0(Austria)
var  i = 0;
for (i = 0; i < listAllCountries.length; i += 1) {
    $("#destinationCountrySelectList").append('<option value="' + [i] + '">' + listAllCountries[i].region + "</option>'");
}
$("#destinationCountrySelectList").val('0');

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
}

//populate select dropdown for russian air parcels
function selectRussiaAir() {
	"use strict";
	$("#destinationCitySelectList").empty();
	$("#destinationCitySelectList").append('<option value=' + "default" + '>' + " " + "</option>'");
	for (i = 0; i < russiaCityAir.length; i += 1) {
		$("#destinationCitySelectList").append('<option value="' + [i] + '">' + russiaCityAir[i].region + "</option>'");
	}
	$("#destinationRegionSelectList").empty();
	$("#destinationRegionSelectList").append('<option value=' + "default" + '>' + " " + "</option>'");
	for (i = 0; i < russiaRegionAir.length; i += 1) {
		$("#destinationRegionSelectList").append('<option value="' + [i] + '">' + russiaRegionAir[i].region + "</option>'");
	}
	$("#destinationCitySelectList").val('39');
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
    var selectedText = $(this).find("option:selected").text(), radioValue = $('input[name=radioAirSea]:checked').val(), screenSize = $(window).width(), optionVal = $(this).find("option:selected").val();
    if (selectedText !== "Russia") {
		disableCitySelectMenu();
		disableRegionSelectMenu();
		$("#destinationCitySelectList").empty();
		$("#destinationRegionSelectList").empty();
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
});

//search and return specific destination object
function search(destination, airSeaType) {
	"use strict";
	var i, packageType;
	if (airSeaType === 'sea') {
		packageType = true;
	} else if (airSeaType === 'air') {
		packageType = false;
	}
    for (i = 0; i < listAllDestinations.length; i += 1) {
        if (listAllDestinations[i].region === destination && listAllDestinations[i].seaBool === packageType) {
			return listAllDestinations[i];
        }
    }
}
/*
//alert(search("Austria", "sea"));
for (i = 0; i < listAllCountries.length; i += 1) {
	console.log(listAllCountries.length);
    if (listAllCountries[i].seaBool === false) {
		console.log(listAllCountries[i]);
    }
}*/


function calcPrice() {
	"use strict";
	var packageType, destination, total, destObject, weight;
	weight = $("#weight").val();
	if (weight < 1) {
		alert();
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
	total = destObject.price * weight + destObject.deliveryCharge;
	$("#totalSpan").html(total);
	$("#deliverySpan").html(destObject.deliveryMessage);
	
	//console.log(destObject.region, destObject.deliveryCharge, destObject.price);

}

$("#weight").attr("placeholder", "MIN " + " " + "MAX " + " " + "KG");


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

//toggle between showing map and europe img
$("#showHideMap").click(function () {
    "use strict";
	$("#map").toggle();
	$("#mapImg").toggle();
});


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
