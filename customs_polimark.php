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
	<title>Customs Declaration For Shipping Parcels</title>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
</head>
<body onload="loadInfo()">
	
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
	<section class="hidden-print" id="middle">
		<div class="container-fluid hidden-print" id="mainContainer">
			<div class="row">
				
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden-print">
					<h2>Polimark Customs Declaration Form</h2>
						<?php
	   
	    $servername = "sql5c11b.megasqlservers.com";
	    $username = "polimarkco156110";
	    $password = "ui1iIgOFqzz0aCx3";
	    $dbname = "forms_polimarkco156110";

	 
	    // Create connection
	    $conn = new mysqli($servername, $username, $password, $dbname);

	    // Check connection
	    if ($conn->connect_error) {
	        die("Connection failed: " . $conn->connect_error);
	    } 
	    $sql = "SELECT id,s_name, s_last, s_unit, s_street,s_city,s_province,s_country,s_postal, s_email, s_mobile, s_home, r_name, r_last,r_unit, r_street, r_city, r_province, r_country, r_postal, r_mobile, r_home,service,h , l ,w,value ,item1,qty1, item2,qty2,item3,qty3,item4,qty4 ,item5,qty5,item6,qty6,item7,qty7,item8,qty8,item9,qty9,item10,qty10,item11,qty11,item12,qty12,item13,qty13,item14,qty14, submitDate, weight FROM customs3";
	    $result = $conn->query($sql);
    echo "<div id='sss'>";                
	 echo "<table class='table'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Lastname</th>
<th>Lastname</th>
<th>Lastname</th>
<th>Lastname</th>
</tr>";
	    if ($result->num_rows > 0) {
	        // output data of each row
	        while($row = $result->fetch_assoc()) {
	 
                echo "<tr class='table' id=".$row['id'].">";
                echo "<td  class='col-md-1'>" . $row['id'] . "</td>";
                echo "<td  class='col-md-2'>" . $row['s_name'] . "</td>";
                echo "<td  class='col-md-2'>" . $row['s_last'] . "</td>";
                echo "<td  class='col-md-1'>" . $row['r_country'] . "</td>";
                echo "<td  class='col-md-3'>" . $row['s_email'] . "</td>";
                echo "<td  class='col-md-1'>" . $row['submitDate'] . "</td>";
                echo "</tr>";
	        }
            echo "</table>";
            echo "</div>";
	    } else {
	        echo "0 results";
	    }
	    $conn->close();
	    ?><button class="btn btn-success" onclick="myFunction()" type="button">print</button> <button class="btn btn-warning" onclick="myFunction3()" type="button">submit</button>
				</div>
				
			</div>
		</div>
	</section>
	<form action="" id="theForm" method="post" name="submit2">
		<section class="hidden-print" id="top">
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
									<span id="senderNotification1"></span> <label class="hidden-print" for="firstName">First Name *</label> <input class="form-control hidden-print" id="firstName" name="s_name" placeholder="Your First Name" type="text" value="<?php echo isset($_POST['s_name']) ? $_POST['s_name'] : '' ?>">
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
									<span id="senderNotification2"></span> <label class="hidden-print" for="lastName">Last Name*</label> <input class="form-control hidden-print" id="lastName" name="s_last" placeholder="Your Last Name" type="text" value="<?php echo isset($_POST['s_last']) ? $_POST['s_last'] : '' ?>">
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
									<label class="hidden-print" for="unit">Unit #</label> <input class="form-control hidden-print text-nowrap" id="s_unit" name="s_unit" placeholder="" type="text" value="<?php echo isset($_POST['s_unit']) ? $_POST['s_unit'] : '' ?>">
								</div>
								<div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
									<span id="senderNotification3"></span> <label class="hidden-print" for="streetAddress">Street Address*</label> <input class="form-control hidden-print" id="street" name="s_street" placeholder="Your Street Address" type="text" value="<?php echo isset($_POST['s_street']) ? $_POST['s_street'] : '' ?>">
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
									<span id="senderNotification4"></span> <label class="hidden-print" for="city">City*</label> <input class="form-control hidden-print" id="city" name="s_city" placeholder="Your City" type="text" value="Calgary">
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
									<label class="hidden-print" for="province">Province*</label> <input class="form-control hidden-print" id="province" name="s_province" placeholder="Your Province" type="text" value="AB">
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
									<span id="senderNotification8"></span> <label class="hidden-print" for="country">Country*</label> <input class="form-control hidden-print" id="country" name="s_country" placeholder="Your Country" type="text" value="Canada">
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
									<span id="senderNotification5"></span> <label class="hidden-print" for="postalCode">Postal Code*</label> <input class="form-control hidden-print" id="postalCode" name="s_postal" placeholder="Your Postal Code" type="text" value="<?php echo isset($_POST['s_postal']) ? $_POST['s_postal'] : '' ?>">
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
									<span id="senderNotification7"></span> <label class="hidden-print" for="email">Email*</label> <input class="form-control hidden-print" id="email" name="s_email" placeholder="Your Email" type="email" value="<?php echo isset($_POST['s_email']) ? $_POST['s_email'] : '' ?>">
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
									<label class="hidden-print" for="mobilePhone">Mobile Phone</label> <input class="form-control hidden-print" id="mobilePhone" name="s_mobile" placeholder="Your Mobile Phone #" type="text" value="<?php echo isset($_POST['s_mobile']) ? $_POST['s_mobile'] : '' ?>">
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
									<label class="hidden-print" for="phone">Alternate Phone</label> <input class="form-control hidden-print" id="phone" name="s_home" placeholder="Your Alternate Phone #" type="text" value="<?php echo isset($_POST['s_home']) ? $_POST['s_home'] : '' ?>">
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
								<span id="receiverNotification1"></span> <label class="hidden-print" for="firstNameRecipient">First Name*</label> <input class="form-control hidden-print" id="firstNameRecipient" name="r_name" placeholder="Recipient's First Name" type="text" value="<?php echo isset($_POST['r_name']) ? $_POST['r_name'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<span id="receiverNotification2"></span> <label class="hidden-print" for="lastNameRecipient">Last Name*</label> <input class="form-control hidden-print" id="lastNameRecipient" name="r_last" placeholder="Recipient's Last Name" type="text" value="<?php echo isset($_POST['r_last']) ? $_POST['r_last'] : '' ?>">
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
								<label class="hidden-print" for="unitRecipient">Unit #</label> <input class="form-control hidden-print" id="unitRecipient" name="r_unit" placeholder="" type="text" value="<?php echo isset($_POST['r_unit']) ? $_POST['r_unit'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-7 col-md-7 col-lg-9">
								<span id="receiverNotification3"></span> <label class="hidden-print" for="streetAddressRecipient">Street Address*</label> <input class="form-control hidden-print" id="streetAddressRecipient" name="r_street" placeholder="Recipient's Street Address" type="text" value="<?php echo isset($_POST['r_street']) ? $_POST['r_street'] : '' ?>">
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
								<span id="receiverNotification4"></span> <label class="hidden-print" for="cityRecipient">City*</label> <input class="form-control hidden-print" id="cityRecipient" name="r_city" placeholder="Recipient's City" type="text" value="<?php echo isset($_POST['r_city']) ? $_POST['r_city'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<label class="hidden-print" for="provinceRecipient">Region</label> <input class="form-control hidden-print" id="provinceRecipient" name="r_province" placeholder="If Applicable" type="text" value="<?php echo isset($_POST['r_province']) ? $_POST['r_province'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
								<div class="form-group">
									<label class="hidden-print" for="destinationCountrySelectList4">Country*</label> <select class="form-control hidden-print" id="destinationCountrySelectList4" name="r_country">
										<option value="AUSTRIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'AUSTRIA') 
         echo 'selected= "selected"';
          ?>>AUSTRIA</option>
    <option value="BELARUS" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'BELARUS') 
         echo 'selected= "selected"';
          ?>>BELARUS</option>
    <option value="BELGIUM" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'BELGIUM') 
         echo 'selected= "selected"';
          ?>>BELGIUM</option>
    <option value="CROATIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'CROATIA') 
         echo 'selected= "selected"';
          ?>>CROATIA</option>
      <option value="CZECH REPUBLIC" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'CZECH REPUBLIC') 
         echo 'selected= "selected"';
          ?>>CZECH REPUBLIC</option>
    <option value="DENMARK" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'DENMARK') 
         echo 'selected= "selected"';
          ?>>DENMARK</option>
      <option value="ESTONIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'ESTONIA') 
         echo 'selected= "selected"';
          ?>>ESTONIA</option>
    <option value="FINLAND" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'FINLAND') 
         echo 'selected= "selected"';
          ?>>FINLAND</option>
      <option value="FRANCE" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'FRANCE') 
         echo 'selected= "selected"';
          ?>>FRANCE</option>
    <option value="GERMANY" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'GERMANY') 
         echo 'selected= "selected"';
          ?>>GERMANY</option>
      <option value="HUNGARY" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'HUNGARY') 
         echo 'selected= "selected"';
          ?>>HUNGARY</option>
    <option value="IRELAND" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'IRELAND') 
         echo 'selected= "selected"';
          ?>>IRELAND</option>
      <option value="ITALY" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'ITALY') 
         echo 'selected= "selected"';
          ?>>ITALY</option>
    <option value="KAZAKHSTAN" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'KAZAKHSTAN') 
         echo 'selected= "selected"';
          ?>>KAZAKHSTAN</option>
      <option value="KYRGYZSTAN" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'KYRGYZSTAN') 
         echo 'selected= "selected"';
          ?>>KYRGYZSTAN</option>
    <option value="LATVIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'LATVIA') 
         echo 'selected= "selected"';
          ?>>LATVIA</option>
      <option value="LITHUANIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'LITHUANIA') 
         echo 'selected= "selected"';
          ?>>LITHUANIA</option>
    <option value="LUXEMBOURG" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'LUXEMBOURG') 
         echo 'selected= "selected"';
          ?>>LUXEMBOURG</option>
      <option value="NETHERLANDS" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'NETHERLANDS') 
         echo 'selected= "selected"';
          ?>>NETHERLANDS</option>
    <option value="POLAND" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'POLAND') 
         echo 'selected= "selected"';
          ?>>POLAND</option>
      <option value="PORTUGAL" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'PORTUGAL') 
         echo 'selected= "selected"';
          ?>>PORTUGAL</option>
    <option value="ROMANIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'ROMANIA') 
         echo 'selected= "selected"';
          ?>>ROMANIA</option>
      <option value="RUSSIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'RUSSIA') 
         echo 'selected= "selected"';
          ?>>RUSSIA</option>
    <option value="SLOVAKIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'SLOVAKIA') 
         echo 'selected= "selected"';
          ?>>SLOVAKIA</option>
      <option value="SLOVENIA" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'SLOVENIA') 
         echo 'selected= "selected"';
          ?>>SLOVENIA</option>
    <option value="SPAIN" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'SPAIN') 
         echo 'selected= "selected"';
          ?>>SPAIN</option>
      <option value="SWEDEN" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'SWEDEN') 
         echo 'selected= "selected"';
          ?>>SWEDEN</option>
    <option value="UKRAINE" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'UKRAINE') 
         echo 'selected= "selected"';
          ?>>UKRAINE</option>
      <option value="UNITED KINGDOM" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'UNITED KINGDOM') 
         echo 'selected= "selected"';
          ?>>UNITED KINGDOM</option>
    <option value="UZBEKISTAN" <?php if(isset($_POST['r_country']) && $_POST['r_country'] == 'UZBEKISTAN') 
         echo 'selected= "selected"';
          ?>>UZBEKISTAN</option>
      
  </select>
								</div>
							</div>
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
					</div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
						<span id="receiverNotification5"></span> <label class="hidden-print" for="postalCodeRecipient">Postal Code*</label> <input class="form-control hidden-print" id="postalCodeRecipient" name="r_postal" placeholder="Recipient's Postal Code" type="text" value="<?php echo isset($_POST['r_postal']) ? $_POST['r_postal'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="row">
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<span id="receiverNotification6"></span> <label class="hidden-print" for="mobilePhoneRecipient">Mobile Phone*(or home#)</label> <input class="form-control hidden-print" id="mobilePhoneRecipient" name="r_mobile" placeholder="Recipient's Mobile Phone #" type="text" value="<?php echo isset($_POST['r_mobile']) ? $_POST['r_mobile'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
								<span id="receiverNotification9"></span> <label class="hidden-print" for="phoneRecipient">Home Phone*(or mobile#)</label> <input class="form-control hidden-print" id="phoneRecipient" name="r_home" placeholder="Recipient's Alternate Phone #" type="text" value="<?php echo isset($_POST['r_home']) ? $_POST['r_home'] : '' ?>">
							</div>
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="top">
			<div class="jumbotron hidden-print">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
						<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 hidden-print">
							<h2>Parcel Details</h2>
							<h3>Parcel Shipping Service Type*</h3>
							<div class="radio">
								<div class="radio-inline ecoTest">
                                    
								<label class="radio-inline"><input checked id="radioSea" name="radioAirSea" type="radio" value="sea" <?php if (isset($_POST[ 'radioAirSea']) && $_POST[ 'radioAirSea']=='sea' ){echo ' checked="checked"';}?>>Sea</label>
						</div>
								<div class="radio-inline">
                                    
                                    <label class="radio-inline"><input id="radioAir" name="radioAirSea" type="radio" value="air" <?php if (isset($_POST[ 'radioAirSea']) && $_POST[ 'radioAirSea']=='air' ){echo ' checked="checked"';}?>>Air</label>
						        </div>
                                    
								<div class="radio-inline economyRadio">
									<label class="radio-inline"><input hidden="" id="eco" name="radioAirSea" type="radio" value="economy" <?php if (isset($_POST[ 'radioAirSea']) && $_POST[ 'radioAirSea']=='economy' ){echo ' checked="checked"';}?>><span hidden="" id="ecoRad">Economy</span></label>
						</div>
							</div>
							<div class="row hidden-print">
								<div class="col-xs-8 col-sm-12 col-md-7">
									<h3>Parcel Dimensions*</h3>
									<div class="row" id="dimensionsRow">
										<div class="col-xs-4 col-sm-4 col-md-4 num-col">
											<span id="receiverNotification10"></span> <input class="form-control num" id="length" name="l" placeholder="cm" step="0.01" type="number" value="<?php echo isset($_POST['l']) ? $_POST['l'] : '' ?>">
										</div>
										<div class="col-xs-4 col-sm-4 col-md-4 num-col">
											<span id="receiverNotification11"></span> <input class="form-control num" id="width" name="w" placeholder="cm" step="0.01" type="number" value="<?php echo isset($_POST['w']) ? $_POST['w'] : '' ?>">
										</div>
										<div class="col-xs-4 col-sm-4 col-md-4 num-col">
											<span id="receiverNotification12"></span> <input class="form-control num" id="height" name="h" placeholder="cm" step="0.01" type="number" value="<?php echo isset($_POST['h']) ? $_POST['h'] : '' ?>">
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
									<h3>Value*</h3><span id="receiverNotification13"></span> <input class="form-control num" id="valueCustoms" name="value" placeholder="$CAD" type="number" value="<?php echo isset($_POST['value']) ? $_POST['value'] : '' ?>">
								</div>
							</div>
							<div class="row hidden-print">
								<div class="col-xs-4 col-sm-4 col-md-4 num-col">
									<h3>Weight*</h3><span id="receiverNotification15"></span> <input class="form-control num" id="weightCustoms" name="weight" placeholder="KG" step="0.01" type="number" value="<?php echo isset($_POST['weight']) ? $_POST['weight'] : '' ?>">
								</div>
							</div>
						</div>
						<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
					</div>
				</div>
			</div>
		</section>
		<section class="hidden-print" id="middle">
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
								<span id="receiverNotification14"></span> <label class="hidden-print" for="item1">Item 1*</label> <input class="form-control hidden-print" id="item1" name="item1" placeholder="Description" type="text" value="<?php echo isset($_POST['item1']) ? $_POST['item1'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-1 col-md-1">
								<label class="hidden-print" for="qty1">Quantity</label> <input class="form-control num" id="qty1" name="qty1" placeholder="#" type="number" value="<?php echo isset($_POST['qty1']) ? $_POST['qty1'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-1 col-md-1"></div>
							<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
								<label class="hidden-print" for="item2">Item 2</label> <input class="form-control hidden-print" id="item2" name="item2" placeholder="Description" type="text" value="<?php echo isset($_POST['item2']) ? $_POST['item2'] : '' ?>">
							</div>
							<div class="col-xs-12 col-sm-1 col-md-1">
								<label class="hidden-print" for="qty2">Quantity</label> <input class="form-control num" id="qty2" name="qty2" placeholder="#" type="number" value="<?php echo isset($_POST['qty2']) ? $_POST['qty2'] : '' ?>">
							</div>
							<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
						</div>
					</div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item3">Item 3</label> <input class="form-control hidden-print" id="item3" name="item3" placeholder="Description" type="text" value="<?php echo isset($_POST['item3']) ? $_POST['item3'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty3">Quantity</label> <input class="form-control num" id="qty3" name="qty3" placeholder="#" type="number" value="<?php echo isset($_POST['qty3']) ? $_POST['qty3'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item4">Item 4</label> <input class="form-control hidden-print" id="item4" name="item4" placeholder="Description" type="text" value="<?php echo isset($_POST['item4']) ? $_POST['item4'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty4">Quantity</label> <input class="form-control num" id="qty4" name="qty4" placeholder="#" type="number" value="<?php echo isset($_POST['qty4']) ? $_POST['qty4'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item5">Item 5</label> <input class="form-control hidden-print" id="item5" name="item5" placeholder="Description" type="text" value="<?php echo isset($_POST['item5']) ? $_POST['item5'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty5">Quantity</label> <input class="form-control num" id="qty5" name="qty5" placeholder="#" type="number" value="<?php echo isset($_POST['qty5']) ? $_POST['qty5'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item6">Item 6</label> <input class="form-control hidden-print" id="item6" name="item6" placeholder="Description" type="text" value="<?php echo isset($_POST['item6']) ? $_POST['item6'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty6">Quantity</label> <input class="form-control num" id="qty6" name="qty6" placeholder="#" type="number" value="<?php echo isset($_POST['qty6']) ? $_POST['qty6'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item7">Item 7</label> <input class="form-control hidden-print" id="item7" name="item7" placeholder="Description" type="text" value="<?php echo isset($_POST['item7']) ? $_POST['item7'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty7">Quantity</label> <input class="form-control num" id="qty7" name="qty7" placeholder="#" type="number" value="<?php echo isset($_POST['qty7']) ? $_POST['qty7'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item8">Item 8</label> <input class="form-control hidden-print" id="item8" name="item8" placeholder="Description" type="text" value="<?php echo isset($_POST['item8']) ? $_POST['item8'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty8">Quantity</label> <input class="form-control num" id="qty8" name="qty8" placeholder="#" type="number" value="<?php echo isset($_POST['qty8']) ? $_POST['qty8'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item9">Item 9</label> <input class="form-control hidden-print" id="item9" name="item9" placeholder="Description" type="text" value="<?php echo isset($_POST['item9']) ? $_POST['item9'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty9">Quantity</label> <input class="form-control num" id="qty9" name="qty9" placeholder="#" type="number" value="<?php echo isset($_POST['qty9']) ? $_POST['qty9'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item10">Item 10</label> <input class="form-control hidden-print" id="item10" name="item10" placeholder="Description" type="text" value="<?php echo isset($_POST['item10']) ? $_POST['item10'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty10">Quantity</label> <input class="form-control num" id="qty10" name="qty10" placeholder="#" type="number" value="<?php echo isset($_POST['qty10']) ? $_POST['qty10'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item11">Item 11</label> <input class="form-control hidden-print" id="item11" name="item11" placeholder="Description" type="text" value="<?php echo isset($_POST['item11']) ? $_POST['item11'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty11">Quantity</label> <input class="form-control num" id="qty11" name="qty11" placeholder="#" type="number" value="<?php echo isset($_POST['qty11']) ? $_POST['qty11'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item12">Item 12</label> <input class="form-control hidden-print" id="item12" name="item12" placeholder="Description" type="text" value="<?php echo isset($_POST['item12']) ? $_POST['item12'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty12">Quantity</label> <input class="form-control num" id="qty12" name="qty12" placeholder="#" type="number" value="<?php echo isset($_POST['qty12']) ? $_POST['qty12'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item13">Item 13</label> <input class="form-control hidden-print" id="item13" name="item13" placeholder="Description" type="text" value="<?php echo isset($_POST['item13']) ? $_POST['item13'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty13">Quantity</label> <input class="form-control num" id="qty13" name="qty13" placeholder="#" type="number" value="<?php echo isset($_POST['qty13']) ? $_POST['qty13'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1"></div>
					<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<label class="hidden-print" for="item14">Item 14</label> <input class="form-control hidden-print" id="item14" name="item14" placeholder="Description" type="text" value="<?php echo isset($_POST['item14']) ? $_POST['item14'] : '' ?>">
					</div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<label class="hidden-print" for="qty14">Quantity</label> <input class="form-control num" id="qty14" name="qty14" placeholder="#" type="number" value="<?php echo isset($_POST['qty14']) ? $_POST['qty14'] : '' ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<br>
						<input class="form-control num hide" hidden="" id="barcodeId" name="barcodeId" type="number" value="<?php echo $conn->insert_id ?>">
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-10 col-md-10">
						<p></p>
						<p></p>
					</div>
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
				</div>
				<div class="row hidden-print">
					<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					<div class="col-xs-12 col-sm-1 col-md-1">
						<div class="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
					</div>
				</div>
			</div>
		</section><!--   <button type="button" onclick="myFunction2()"  >Click Me!</button>
        <button type="button" onclick="myFunction3()"  >testing!</button>
        <button type="button" onclick="myFunction()"  >print</button>
        <input type="submit" id="sub" name="submit2" value="submit2" action="">-->
	</form>
	<div class="visible-print">
		<div class="blended_grid">
			<div class="headerBarcode">
				<div id="demo"></div>
			</div>
			<div class="bar">
				<img id="leftPic" src="img/parcel.png"><br>
			</div>
			<div class="logo"><img id="logoImg" src="img/PolimarkLogoWhite.jpg"></div>
			<div class="addressSpan">
				&nbsp;&nbsp;&nbsp; WWW.POLIMARK.COM<br>
				&nbsp;&nbsp;&nbsp; 1-888-888-1186<br>
				&nbsp;&nbsp;&nbsp; 403-243-7333
			</div>
			<div class="address2">
				538 Cleveland Cres. S.E.<br>
				Calgary Alberta<br>
			</div>
			<div class="agent">
				<span id="agentCode">AGENT CODE:<br></span> <span id="agentCode2"></span>
			</div>
			<div class="shippingtype">
				<span id="serviceType">SERVICE TYPE:<br></span> <span id="serviceType2"></span>
			</div>
			<div class="dateSub">
				<span id="shipDate">DATE:<br></span> <span id="dateSpan"></span>
			</div>
			<div class="declaredVal">
				<span id="shipValue">DECLARED VALUE:<br></span> <span id="shipValue2"></span>
			</div>
			<div class="addressInput">
				<table class="addressTable">
					<tbody>
						<tr>
							<th class="senderTH">SENDER</th>
							<th class="senderTH2"></th>
						</tr>
						<tr>
							<td>NAME:</td>
							<td class="underLine" id="senderFirstName"></td>
						</tr>
						<tr>
							<td>UNIT#:</td>
							<td id="s_unitTd"></td>
						</tr>
						<tr>
							<td>ADDRESS:</td>
							<td class="underLine" id="senderStreet"></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="senderCity"></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="senderCountry"></td>
						</tr>
						<tr>
							<td>PHONE:</td>
							<td class="underLine" id="senderPhone"></td>
						</tr>
						<tr>
							<td>EMAIL:</td>
							<td class="underLine" id="senderEmail"></td>
						</tr>
					</tbody>
				</table>
				<table class="addressTable">
					<tbody>
						<tr>
							<th class="senderTH">RECEIVER</th>
							<th class="senderTH2"></th>
						</tr>
						<tr>
							<td>NAME:</td>
							<td class="underLine" id="receiverFirstName"></td>
						</tr>
						<tr>
							<td>UNIT:</td>
							<td id="r_unitTd"></td>
						</tr>
						<tr>
							<td>STREET:</td>
							<td class="underLine" id="receiverStreet"></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="receiverCity"></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="receivercountry"></td>
						</tr>
						<tr>
							<td>PHONE:</td>
							<td class="underLine" id="receiverPhone"></td>
						</tr>
					</tbody>
				</table><!--  NAME:<span class="underLine" id="senderFirstName"></span> lastNAME:<span class="underLine" id="senderLastName"></span><br>
                        Street:<span class="underLine" id="senderStreet"></span><br>
                            city:<span ></span><br>
                            country:<span ></span><br>
                            postal:<span ></span><br>
                            phone1:<span ></span><br>
                            phone2:<span ></span><br>
                            email:<span ></span><br><br>
    
      NAME:<span ></span> lastNAME:<span class="underLine" id="receiverlastName"></span><br>
                        Street:<span ></span><br>
                            city:<span ></span><br>
                            country:<span ></span><br>
                            postal:<span ></span><br>
                            phone1:<span ></span><br>
                            phone2:<span ></span><br>-->
			</div>
			<div class="itemList">
				<table class="tableItems" style="width:100%">
					<tr>
						<th class="numList"></th>
						<th class="itemsList">Item Description</th>
						<th class="qtyList">#PCS</th>
					</tr>
					<tr>
						<td>1:</td>
						<td id="unit1"></td>
						<td id="amount1"></td>
					</tr>
					<tr>
						<td>2:</td>
						<td id="unit2"></td>
						<td id="amount2"></td>
					</tr>
					<tr>
						<td>3:</td>
						<td id="unit3"></td>
						<td id="amount3"></td>
					</tr>
					<tr>
						<td>4:</td>
						<td id="unit4"></td>
						<td id="amount4"></td>
					</tr>
					<tr>
						<td>5:</td>
						<td id="unit5"></td>
						<td id="amount5"></td>
					</tr>
					<tr>
						<td>6:</td>
						<td id="unit6"></td>
						<td id="amount6"></td>
					</tr>
					<tr>
						<td>7:</td>
						<td id="unit7"></td>
						<td id="amount7"></td>
					</tr>
					<tr>
						<td>8:</td>
						<td id="unit8"></td>
						<td id="amount8"></td>
					</tr>
					<tr>
						<td>9:</td>
						<td id="unit9"></td>
						<td id="amount9"></td>
					</tr>
					<tr>
						<td>10:</td>
						<td id="unit10"></td>
						<td id="amount10"></td>
					</tr>
					<tr>
						<td>11:</td>
						<td id="unit11"></td>
						<td id="amount11"></td>
					</tr>
					<tr>
						<td>12:</td>
						<td id="unit12"></td>
						<td id="amount12"></td>
					</tr>
					<tr>
						<td>13:</td>
						<td id="unit13"></td>
						<td id="amount13"></td>
					</tr>
					<tr>
						<td>14:</td>
						<td id="unit14"></td>
						<td id="amount14"></td>
					</tr>
				</table>
			</div>
			<div>
				<table class="tableItems" style="width:100%">
					<tr>
						<th class="weightTable">WEIGHT</th>
						<th class="chargeableTable">CHARGEABLE WEIGHT</th>
						<th class="widthCol">WIDTH</th>
						<th class="heightCol">HEIGHT</th>
						<th class="lengthCol">LENGTH</th>
					</tr>
					<tr>
						<td id="weightTd"></td>
						<td id="chargealeTD"></td>
						<td id="lenghtTD"></td>
						<td id="widthTD"></td>
						<td id="heightTD"></td>
					</tr>
				</table>
				<p></p>
			</div>
			<h4>CONDITIONS OF CARRY</h4>
			<div class="legalInformation">
				Condition one: Receipt and Freight: Received on the date specified from the consignor mentioned herein, consigned and destined herein, which the carrier agrees to carry and to deliver to the consignee at the said destination subject to the rates and classification in effect on the date of shipment. Freight charges are prepaid.<br>
				Condition two: Limitation of liability: (a) Carrier shall not be liable for any loss, damage or destruction arising from the following causes: Acts of God, the Queen’s or public enemies, riots, strikes, authority of the law, nuclear reaction, radioactive contamination. (b) The amount of any loss for which the carrier is liable for shall not exceed the lesser of Cdn $3.00 per KG or Cdn $60.00 per shipment unless additional insurance is purchased, and then the maximum liability shall be the declared value as it appears on the customs Declaration. Shall any loss, damage or destruction take place on the territory of Poland the reimbursement may be made to the consignee in Polish currency. In case of any discrepancy , the value will be taken by consignor’s i.e. store receipt and/or product market value. (c) Unless the parties agree otherwise in writing, the carrier shall not be liable for any special, consequential or other damages caused by any delay of a shipment, regardless of the cause of delay.<br>
				Condition three: Notice of Claim: (a) No Carrier is liable for loss or damage to any goods carried under this contract unless notice thereof setting out particulars of the damage or loss and the estimated amount claimed respect of such loss or damage is given in writing together with a customer’s copy of the Customs Declaration to the originating carrier within sixty (60) days after the delivery of the goods, or, in the case of failure to make deliver, within six (6) months from the date of shipment. (b) The final statement of claim must be filed within six (6) months from the date of shipment together with a customer copy of the Custom Declaration.<br>
				Condition four: Partial Invalidity: Any provision herein prohibited by law shall to the extent prohibited be ineffective without invalidating any other portion hereof.<br>
				Condition five: Modification of Contract: No agent, servant or representative of the carrier has the authority to alter, modify or waive any provisions of this contract.<br>
				Condition six: Check before signing! It is a duty of the receiving party to check the contents of a parcel in the presence of the delivery person. Possible claims can be considered only on the base of a written report, 6 months from the date of shipment.<br><br>
                Polimark is not responsible for shipments containing glass, ceramic or other fragile items that are not properly packed for shipment.<br>
                Shipper certifies that the particulars on the face hereof are correct and that insofar as any part of the cosignment contains restricted articles such part is properly described by name and is in a proper condition for carriage by air according to the international Air Transportation's Restricted Articles Regulations. False declaration of goods will be subject to penalties<br>
                I agree with the terms and conditions above. <br><br>
                SIGNATURE:_________________________________________________
                
			</div>
		</div>
	</div>
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
					<!--<div class="col-sm-12 col-xs-4">
						<!--    <div class="fb-like" data-action="like" data-href="http://www.polimark.com" data-layout="button_count" data-share="false" data-show-faces="true"></div>
						<div class="fb-like" data-action="like" data-href="http://www.polimark.com" data-layout="button" data-share="false" data-show-faces="false" data-size="small"></div>-->
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
					<!--<div class="col-sm-12 cols-xs-6">
						<a class="twitter-share-button" data-show-count="false" data-text="Calgary&#39;s affordable alternative for shipping to Europe and Russia." href="https://twitter.com/share">Tweet</a> 
						<script async charset="utf-8" src="//platform.twitter.com/widgets.js">
						</script>
					</div>-->
					<div class="col-sm-12 hidden-xs">
						<div>
							<span class="shareCols">&nbsp;</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4">
				<h3>Hours</h3>Tuesday - Thursday: 10 - 5<br>
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
				<h3>Partners</h3><a href="http://www.polimex.com/en/content/parcels-to-europe">Polimex</a>
			</div>
		</div>
		<div class="row">
			<div class=" cols-md-12" id="copyright">
				<p class="text-center">&#9400; 2017 Polimark</p>
			</div>
		</div>
	</footer>
	<!--<div id="fb-root"></div>
	<script>
	(function(d, s, id) {
	 var js, fjs = d.getElementsByTagName(s)[0];
	 if (d.getElementById(id)) return;
	 js = d.createElement(s); js.id = id;
	 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
	 fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	</script>-->
	<link href="css/customs_polimark.css" rel="stylesheet"><!--<link href="css/print.css" rel="stylesheet">-->
	<!--<link href="css/printForm.css" rel="stylesheet">-->
	<script src="js/customs_polimark.js">
	</script>
</body>
</html>