<!DOCTYPE html>
<html>
<head>

	<script src="http://code.jquery.com/jquery-latest.min.js">
	</script>
	<script src="js/jquery-barcode.js" type="text/javascript">
	</script>
   
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<script src="js/bootstrap.min.js">
	</script>
	<title>Parcel Shipping To Europe. Parcel Price Calculator</title>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    
</head>
<body onload="">
	
	<?php
   
	$servername = "sql5c11b.megasqlservers.com";
	$username = "polimarkco156110";
	$password = "ac2212ac";
	$dbname = "forms_polimarkco156110";

 
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
	//echo "Connected successfully";

    if( !empty($_POST)){
 echo $_POST; 
print_r($_POST);
$sql = "INSERT INTO customs3 ( s_name, s_last,s_unit, s_street,s_city,s_province,s_country,s_postal, s_email, s_mobile, s_home, r_name, r_last, r_unit,r_street)
        VALUES ('".$_POST["s_name"]."','".$_POST["s_last"]."','".$_POST["s_unit"]."','".$_POST["s_street"]."','".$_POST["s_city"]."','".$_POST["s_province"]."','".$_POST["s_country"]."','".$_POST["s_postal"]."','".$_POST["s_email"]."','".$_POST["s_mobile"]."','".$_POST["s_home"]."','".$_POST["r_name"]."','".$_POST["r_last"]."')";
        $conn->query($sql);
  }
    
	/*$sql = "INSERT INTO customs2 ( name, last)
	VALUES ( 'D', 'john@example.com')";

	if ($conn->query($sql) === TRUE) { 
	  echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
*/
	$sql = "SELECT id,s_name, s_last, s_unit, s_street,s_city,s_province,s_country,s_postal, s_email, s_mobile, s_home, r_name, r_last FROM customs3";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	        echo "id: " . $row["id"]. " - Name: " . $row["s_name"]. " last " . $row["s_last"]. " unit: " . $row["s_unit"]." street: " . $row["s_street"]. " city " . $row["s_city"]. " prov: " . $row["s_province"]." country: " . $row["s_country"]." postal: " . $row["s_postal"]. " email " . $row["s_email"]. " mobile: " . $row["s_mobile"]." home: " . $row["s_home"]. "<br> - Name: " . $row["r_name"]. " last " . $row["r_last"]."<br>";
	    }
	} else {
	    echo "0 results";
	}
    
 
	?>
	<header class="container-fluid hidden-print">
		<div id="headerImg"><img class="img-responsive center-block hidden-print" id="polimark" src="img/PolimarkLogo.png"></div>
		<nav class="navbar navbar-inverse navbar-static-top" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle collapsed" data-target="#navbar-collapse-1" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
				</div><!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							<a href="index.html">Shipping Calculator</a>
						</li>
						<li class="inactive">
							<a href="shipping-pricing.html">Price Details</a>
						</li>
						<li class="inactive">
							<a href="shipping-information.html">Before You Ship</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<section id="middle" class="hidden-print">
		<div class="container-fluid hidden-print" id="mainContainer">
			<div class="row">
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 hidden-print">
                        <h2 >things about customs declarations</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
				
				</div>
            
			</div>
		
	</section>
    
   <form method="POST" action="">
	<section id="top"  class="hidden-print">
     
		<div class="jumbotron hidden-print">
			<div class="container-fluid">
                <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2 class="hidden-print">Sender's Information</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
				<div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="firstName">First Name</label> <input class="form-control hidden-print" id="firstName" name="s_name" placeholder="Your First Name" type="text" >
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastName">Last Name</label> <input class="form-control hidden-print" id="lastName" name="s_last" placeholder="Your Last Name" type="text">
							</div>
							<div class="col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                <input type="submit"  value="">
						<div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-1">
								<label class="hidden-print" for="unit">Unit #</label> <input class="form-control hidden-print text-nowrap" id="unitRecipient" name="s_unit" placeholder="N/A" type="text" >
							</div>
							<div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
								<label class="hidden-print" for="streetAddress">Street Address</label> <input class="form-control hidden-print" id="streetAddress" name="s_street" placeholder="Your Street Address" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="city">City</label> <input class="form-control hidden-print" id="city" name="s_city" placeholder="Your City" value="Calgary" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="province">Province</label> <input class="form-control hidden-print" id="province" name="s_province" placeholder="Your Province" value="AB" type="text">
							</div>
                           
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="country">Country</label> <input class="form-control hidden-print" id="country" name="s_country" placeholder="Your Country" value="Canada" type="text">
							</div>
                            
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                   <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="postalCode">Postal Code</label> <input class="form-control hidden-print" id="postalCode" name="s_postal" placeholder="Your Postal Code"  type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                 <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="email">Email</label> <input class="form-control hidden-print" id="email" name="s_email" placeholder="Your Email" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="mobilePhone">Mobile Phone</label> <input class="form-control hidden-print" id="mobilePhone" name="s_mobile" placeholder="Your Mobile Phone #" type="text">
							</div>
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="phone">Alternate Phone</label> <input class="form-control hidden-print" id="phone" name="s_home" placeholder="Your Alternate Phone #" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
			</div>
		</div>
        
	</section>
       
    	<section id="middle">
		<div class="container-fluid hidden-print" id="mainContainer">
		   <div class="row hidden-print">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2 class="hidden-print">Recipient's Information</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
				<div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="firstNameRecipient">First Name</label> <input class="form-control hidden-print" id="firstNameRecipient" name="r_name" placeholder="Recipient's First Name" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastNameRecipient">Last Name</label> <input class="form-control hidden-print" id="lastNameRecipient" name="r_last" placeholder="Recipient's Last Name" type="text">
							</div>
							<div class="col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
						<div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-1">
								<label class="hidden-print" for="unitRecipient">Unit #</label> <input class="form-control hidden-print" id="unitRecipient" placeholder="N/A" type="text">
							</div>
							<div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
								<label class="hidden-print" for="streetAddressRecipient">Street Address</label> <input class="form-control hidden-print" id="streetAddressRecipient" placeholder="Recipient's Street Address" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="cityRecipient">City</label> <input class="form-control hidden-print" id="cityRecipient" placeholder="Recipient's City" value="" type="text">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="provinceRecipient">Region</label> <input class="form-control hidden-print" id="provinceRecipient" placeholder="If Applicable" value="" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                                <div class="form-group">
                                    <label  class="hidden-print" for="destinationCountrySelectList">Country</label> <select class="form-control hidden-print" id="destinationCountrySelectList" name="country"></select></div>
							</div>
                            
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
            
						<div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="postalCodeRecipient">Postal Code</label> <input class="form-control hidden-print" id="postalCodeRecipient" placeholder="Recipient's Postal Code"  type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    
				
                 <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="mobilePhoneRecipient">Mobile Phone</label> <input class="form-control hidden-print" id="mobilePhoneRecipient" placeholder="Recipient's Mobile Phone #" type="text">
							</div>
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="phoneRecipient">Alternate Phone</label> <input class="form-control hidden-print" id="phoneRecipient" placeholder="Recipient's Alternate Phone #" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
			</div>

	</section>
       </form>
    <section id="top">
		<div class="jumbotron hidden-print">
			<div class="container-fluid">
               	<div class="row">
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 hidden-print">
                        <h2 >Parcel Details</h2>
                        <h3>Parcel Shipping Service Type</h3>
                        <div class="radio">
						<div class="radio-inline ecoTest">
							<label class="radio-inline"><input checked id="radioSea" name="radioAirSea" type="radio" value="sea">Sea</label>
						</div>
						<div class="radio-inline">
							<label class="radio-inline"><input id="radioAir" name="radioAirSea" type="radio" value="air">Air</label>
						</div>
						<div class="radio-inline economyRadio">
							<label class="radio-inline"><input hidden="" id="eco" name="radioAirSea" type="radio" value="economy"><span hidden="" id="ecoRad">Economy</span></label>
						</div>
					</div>
                        <div class="row hidden-print">
						<div class="col-xs-8 col-sm-12 col-md-7">
                            <h3>Parcel Dimensions</h3>
							<div class="row" id="dimensionsRow">
								<div class="col-xs-4 col-sm-4 col-md-4 num-col">
									<input class="form-control num" id="length" name="lenght" placeholder="cm" type="number">
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4 num-col">
									<input class="form-control num" id="width" name="width" placeholder="cm" type="number">
								</div>
								<div class="col-xs-4 col-sm-4 col-md-4 num-col">
									<input class="form-control num" id="height" name="height" placeholder="cm" type="number">
								</div>
							</div>
						</div>
					</div>
                        
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
				
				</div>
                <div class="row hidden-print">
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 hidden-print">
                        
                     
                        <div class="row hidden-print">
					<div class="col-xs-4 col-sm-4 col-md-4 num-col">
                        <h3>Value</h3>
									<input class="form-control num" id="height" name="height" placeholder="$CAD" type="number">
								</div>
					</div>
                        
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
				
				</div>
			</div>
		</div>
	</section>
    	<section id="middle" class="hidden-print">
		<div class="container-fluid hidden-print" id="mainContainer">
		   <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2 class="hidden-print">Description Of Goods</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                
                 <div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                     
						<div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            <div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            <div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            <div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            <div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            <div class="row hidden-print">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                             <div class="col-xs-12 col-sm-1 col-md-1 ">
                                 <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 "></div>
                               
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastname">Item</label> <input class="form-control hidden-print" id="lastname" placeholder="Description" type="text">
							</div>
                            <div class="col-xs-12 col-sm-1 col-md-1 ">
                                <label class="hidden-print" for="height">Quantity</label>
									<input class="form-control num" id="height" name="height" placeholder="#" type="number">
								</div>
							
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
            
			</div>

	</section>
   
    <section id="top" class="visible-print">
		<div class="container ">
			<div class="container-fluid">
				<div class="row">
                    <span> </span>
					<div class="col-sm-1 col-md-1"></div>
					<div class="col-sm-6 col-md-6">
                         <div id="demo" class="visible-print">demo div</div>
                        <div>AGEENT CODE ___  ___  ___
                        <div id="serviceType" class="visible-print">
                        
                            <img id="parcelImg" src="img/ship.png"></div>
                       
                        <span id="serviceType2" class="serviceImg hidden-print">
                        
                       
                        <img  id="parcelImg" src="img/plane.png">
                    
                        </span>
                         <span id="serviceType3" class="serviceImg hidden-print">
                        
                       
                        <img  id="parcelImg" src="img/parcel.png">
                    
                        </span>
                        
                            Date:<span id="dateSpan"></span></div>
					</div>
				<div class="col-sm-4 col-md-4">
                 
                    </div>
					<div class="col-sm-1 col-md-1"></div>
				</div>
			</div>
		</div>
	</section>
   
    
    <section id="top" class="visible-print">
		<div class="container ">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-1 col-md-1"></div>
					<div class="col-sm-6 col-md-6">
                       


						 <div class="printOutResults">NAME:<span class="underLine" id="senderFirstName"></span> lastNAME:<span class="underLine" id="senderLastName"></span><br>
                        Street:<span class="underLine" id="senderStreet"></span><br>
                            city:<span class="underLine" id="senderCity"></span><br>
                            country:<span class="underLine" id="senderCountry"></span><br>
                            postal:<span class="underLine" id="senderPostalCode"></span><br>
                            phone:<span class="underLine" id="senderPhone"></span><br>
                            email:<span class="underLine" id="senderEmail"></span><br>
                        </div>
                          <div class="printOutResults" >Reciever NAME:<span class="underLine" id="receiverFirstName"></span> RecieverlastNAME:<span id="receiverlastName"></span><br>
                       Reciever Street:<span class="underLine" id="receiverStreet"></span><br>
                         Reciever   city:<span class="underLine" id="receiverCity"></span><br>
                          Reciever  country:<span class="underLine" id="receiverPostalCode"></span><br>
                          Reciever  postal:<span class="underLine" id="receiverPhone"></span><br>
                          Reciever  phone:<span class="underLine" id="receiverEmail"></span><br>
                         Reciever   email:<span class="underLine" id="receivercountry"></span><br>
                        </div>
                         
                     
					</div>
				<div class="col-sm-4 col-md-4">
                    <div class="printOutResults2" >Customs declaration<br>
                         <span class="underLine" >description</span> <br>
                         1:<span class="underLine"></span><br>
                          2:<span class="underLine" ></span> <br>
                         3:<span class="underLine"></span><br>
                          4:<span class="underLine" ></span> <br>
                         5:<span class="underLine"></span><br>
                          6:<span class="underLine" ></span> <br>
                         7:<span class="underLine"></span><br>
                          8:<span class="underLine" ></span> <br>
                         9:<span class="underLine"></span><br>
                         10:<span class="underLine" ></span> <br>
                         11:<span class="underLine"></span><br>
                         12:<span class="underLine" ></span> <br>
                         13:<span class="underLine"></span><br>
                         14:<span class="underLine" ></span> <br>
                         15:<span class="underLine"></span><br>
                    </div>
                    </div>
					<div class="col-sm-1 col-md-1"></div>
				</div>
			</div>
		</div>
	</section>
    <section id="top" class="visible-print">
		<div class="container ">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-1 col-md-1"></div>
					<div class="col-sm-6 col-md-6">
                        <div>WEIGHT: <span id="weightTag"></span> Dimensions:<span id="lenghtTag"></span>/<span id="widthTag"></span>/<span id="heightTag"></span></div>
					</div>
				<div class="col-sm-4 col-md-4">
                 
                    </div>
					<div class="col-sm-1 col-md-1"></div>
				</div>
			</div>
		</div>
	</section>
    <footer class="container-fluid hidden-print">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4">
				<h3>Share</h3>
				<div class="row">
					<div class="col-sm-12 col-xs-4">
						<!--<div class="fb-share-button" data-href="http://www.polimark.com/index.html" data-layout="button" data-mobile-iframe="true">
							<a class="fb-xfbml-parse-ignore" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.polimark.com%2F&amp;src=sdkpreparse" target="_blank">Share</a>
						</div>-->
					</div>
					<div class="col-sm-12 hidden-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
					<div class="col-sm-12 col-xs-4">
					<!--	<div class="fb-like" data-action="like" data-href="http://www.polimark.com" data-layout="button_count" data-share="false" data-show-faces="true"></div>-->
						<div class="fb-like" data-href="http://www.polimark.com" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
					</div>
					
					<div class="col-sm-12 hidden-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
					<div class="col-sm-12 cols-xs-4">
						<div>
							<span class="center-text"><a href="mailto:?subject=Polimark%20Shipping&body=Shipping%20to%20Europe%20and%20Russia.%0Awww.polimark.com"><img id="mailto" src="img/mail-square.png"></a></span>
						</div>
					</div>
					<div class="col-sm-12 hidden-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="visible-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
					<div class="col-sm-12 cols-xs-6">
						<a class="twitter-share-button" data-show-count="false" data-text="Calgary&#39;s affordable alternative for shipping to Europe and Russia." href="https://twitter.com/share">Tweet</a>
						<script async charset="utf-8" src="//platform.twitter.com/widgets.js">
						</script> 
					</div>
					<div class="col-sm-12 hidden-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4">
				<h3>Hours</h3>
				
				Tuesday - Thursday: 10 - 5<br>
				Friday: 10-6<br>
				Saturday: 10 - 2<br>
				Sunday - Monday: Closed<br>
				<h3>Contact</h3>
				<p><span class="glyphicon glyphicon-envelope"></span> &nbsp;&nbsp; <a href="mailto:Adam@polimark.com">Adam@polimark.com</a><br></p>
				<p><span class="glyphicon glyphicon-phone-alt"></span> &nbsp;&nbsp; 403-243-7333</p>
				<p><span class="glyphicon glyphicon-phone-alt"></span> &nbsp;&nbsp; 1-888-888-1186</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4">
				<h3>Location</h3>538 Cleveland Cres. S.E.<br>
				Calgary Alberta<br>
				T2G 4A9<br>
				Canada
				
				<h3>Partners</h3>
				<a href="http://www.polimex.com/en/content/parcels-to-europe">Polimex</a>
			</div>
		</div>
		<div class="row">
			<div class=" cols-md-12" id="copyright">
				<p class="text-center">&#9400; 2017 Polimark</p>
			</div>
		</div>
	</footer>
    <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
	<link href="css/app4.css" rel="stylesheet">
    <link href="css/print.css" rel="stylesheet">
     <script src="js/app1.js">
	</script>
     <script src="js/p.js">
	</script>
</body>
</html>