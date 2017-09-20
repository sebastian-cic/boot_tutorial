<!DOCTYPE html>
<html>
<head>

	<script src="http://code.jquery.com/jquery-latest.min.js">
	</script>
	<script src="jquery-barcode.js" type="text/javascript">
	</script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<script src="js/bootstrap.min.js">
	</script>
	<title>Parcel Shipping To Europe. Parcel Price Calculator</title>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
</head>
<body>
	<div id="loadOverlay" style="background-color:#333; position:absolute; top:0px; left:0px; width:100%; height:100%; z-index:2000;"></div>
	<meta content="http://www.polimark.com/index.html" property="og:url">
	<meta content="website" property="og:type">
	<meta content="Polimark Shipping" property="og:title">
	<meta content="Calgary's affordable alternative for shipping parcels to Europe and Russia." property="og:description">
	<meta content="http://www.polimark.com/img/PolimarkLogoSmall2.jpg" property="og:image">
	<meta content="Calgary affordable parcel shipping. Get a price quote with our shipping calculator for sending your parcel to Europe by air or sea." name="description">
	<style>
	       .col-xs{
	           background-color: aqua; !important;
	       }
	</style><?php
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


	$sql = "INSERT INTO customs (id,s_firstname, s_lastname)
	VALUES (DEFAULT, 'Doe', 'john@example.com')";

	if ($conn->query($sql) === TRUE) {
	    //echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$sql = "SELECT id, s_firstname, s_lastname FROM customs";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	       // echo "id: " . $row["id"]. " - Name: " . $row["s_firstname"]. " " . $row["s_lastname"]. "<br>";
	    }
	} else {
	    echo "0 results";
	}
	?>
	<header class="container-fluid">
		<div id="headerImg"><img class="img-responsive center-block" id="polimark" src="img/PolimarkLogo.png"></div>
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
	<section id="middle">
		<div class="container-fluid" id="mainContainer">
			<div class="row">
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2>things about customs declarations</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
				
				</div>
			</div>
		
	</section>
	<section id="top">
		<div class="jumbotron">
			<div class="container-fluid">
                <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2>Sender's Information</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="firstName">First Name</label> <input class="form-control hidden-print" id="firstName" placeholder="Your First Name" type="text" >
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastName">Last Name</label> <input class="form-control hidden-print" id="lastName" placeholder="Your Last Name" type="text">
							</div>
							<div class="col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
						<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-1">
								<label class="hidden-print" for="unit">Unit #</label> <input class="form-control hidden-print text-nowrap" id="unitRecipient" placeholder="N/A" type="text" >
							</div>
							<div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
								<label class="hidden-print" for="streetAddress">Street Address</label> <input class="form-control hidden-print" id="streetAddress" placeholder="Your Street Address" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="city">City</label> <input class="form-control hidden-print" id="city" placeholder="Your City" value="Calgary" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="province">Province</label> <input class="form-control hidden-print" id="province" placeholder="Your Province" value="AB" type="text">
							</div>
                           
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="country">Country</label> <input class="form-control hidden-print" id="country" placeholder="Your Country" value="Canada" type="text">
							</div>
                            
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                   <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="postalCode">Postal Code</label> <input class="form-control hidden-print" id="postalCode" placeholder="Your Postal Code"  type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                 <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="email">Email</label> <input class="form-control hidden-print" id="email" placeholder="Your Email" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="mobilePhone">Mobile Phone</label> <input class="form-control hidden-print" id="mobilePhone" placeholder="Your Mobile Phone #" type="text">
							</div>
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<label class="hidden-print" for="phone">Alternate Phone</label> <input class="form-control hidden-print" id="phone" placeholder="Your Alternate Phone #" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
			</div>
		</div>
	</section>
    	<section id="middle">
		<div class="container-fluid" id="mainContainer">
		   <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2>Recipient's Information</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="firstNameRecipient">First Name</label> <input class="form-control hidden-print" id="firstNameRecipient" placeholder="Recipient's First Name" type="text">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="lastNameRecipient">Last Name</label> <input class="form-control hidden-print" id="lastNameRecipient" placeholder="Recipient's Last Name" type="text">
							</div>
							<div class="col-xs-0 col-sm-4 col-md-4 col-lg-4"></div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
						<div class="row">
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
                <div class="row">
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
								<label class="hidden-print" for="countryRecipient">Country</label> <input class="form-control hidden-print" id="countryRecipient" placeholder="Recipient's Country" value="" type="text">
							</div>
                            
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
            
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="postalCodeRecipient">Postal Code</label> <input class="form-control hidden-print" id="postalCodeRecipient" placeholder="Recipient's Postal Code"  type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    
				
                 <div class="row">
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
<section id="top">
		<div class="jumbotron">
			<div class="container-fluid">
			  <div class="row">
                    <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					
					<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <h2>pracel declar info</h2>
                </div>
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                 <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                    <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                    <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="lastname">Last Name</label> <input class="form-control hidden-print" id="lastname" placeholder="Your Last Name" type="text">
							</div>
                            <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
                    </div>
				</div>
                    
			</div>
		</div>
	</section>
	<link href="css/app4.css" rel="stylesheet">
</body>
</html>