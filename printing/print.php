<html>
	<head>
	<title>Customs Information</title>
	</head>
	<body>

	<?php
		date_default_timezone_set('America/Edmonton');
			
        if (!isset($_GET["id"])) { 
            echo "<h1>Data Not Found!</h1>";
            return;
        }

         $servername = "sql5c11b.megasqlservers.com";
         $username = "polimarkco156110";
        $password = "ui1iIgOFqzz0aCx3";
	     $dbname = "forms_polimarkco156110";
        //$servername = "localhost";
        //$username = "root";
        //$password = "test";
        //$dbname = "polimark";
    
	    // Create connection
	    $conn = new mysqli($servername, $username, $password, $dbname);

	    // Check connection
	    if ($conn->connect_error) {
	        die("Connection failed: " . $conn->connect_error);
        } 

        $sql = "SELECT id,s_name,s_last,s_unit,s_street,s_city,s_province,s_country,s_postal,s_email,s_mobile,s_home,r_name,r_last,r_unit,r_street,r_city,r_province,r_country,r_postal,r_mobile,r_home,service,h,l,w,value,item1,qty1,item2,qty2,item3,qty3,item4,qty4,item5,qty5,item6,qty6,item7,qty7,item8,qty8,item9,qty9,item10,qty10,item11,qty11,item12,qty12,item13,qty13,item14,qty14,submitDate,weight FROM customs3 WHERE id = ". $_GET["id"];
        $result = $conn->query($sql);
        
        if ($result->num_rows == 0) { 
            echo "<h1>Data Not Found!</h1>";
            return;
        }

        if ($result->num_rows > 1) { 
            echo "<h1>Error!</h1>";
            return;
        }
        
        $row = $result->fetch_row();

        $serviceType;
        if ($row[22] == "economy") {
            $serviceType = 168;
        } else {
            $serviceType = 169;
        }
        
        $weight = $row[56];    
        $roundedWeight = number_format(ceil($weight * 2)/2, 1);
        $charWeight = ($row[23] * $row[24] * $row[25])/6000; 
        $charWeight = number_format(ceil($charWeight * 2)/2, 1);  
        $weight = max($roundedWeight, $charWeight);
        
        $country = $row[18];
       
        if ($country == "UKRAINE" || $country == "BELARUS" || $country == "KAZAKHSTAN" || $country == "UZBEKISTAN" || $country == "KYRGYZSTAN" || $country == "RUSSIA") {
            if ($weight < 5) {
                $weight = 5;
            }
        } else {
             if ($row[22] == "air") {
                if ($weight < 1) {
                    $weight = 1;
                }
             } else {
                if ($weight < 4) {
                    $weight = 4;
                }
             }
        }
        $conn->close();
     ?>
	
    <div class="printBar" >
		<input hidden="" id="barcodeId" name="barcodeId" type="number" value="<?php echo $row[0] ?>">
		<center>
		<button class="button no-print" onclick="window.print();" type="button">Print Form</button>
		<button class="button2 no-print" onclick="window.history.back();" type="button">Back To Customs Declarations</button>
		</center>
	</div>
    <div>
		<div class="blended_grid">
			<div class="headerBarcode">
				<div id="demo"></div>
			</div>
			<div class="bar">
				<img id="leftPic" src="img/parcel.png">
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
                T2G 4A9
			</div>
			<div class="agent">
				<span id="agentCode">AGENT CODE:<br> <?php echo $serviceType ?></span> <span id="agentCode2"></span>
			</div>
			<div class="shippingtype">
				<span id="serviceType">SERVICE TYPE:<br><?php echo ucfirst($row[22]) ?></span> <span id="serviceType2"></span>
			</div>
			<div class="dateSub">
				<span id="shipDate">DATE:<br><?php echo date("Y/m/d") ?></span> <span id="dateSpan"></span>
			</div>
			<div class="declaredVal">
				<span id="shipValue">DECLARED VALUE:<br>$<?php echo " ".$row[26] ?></span> <span id="shipValue2"></span>
			</div>
			<div class="addressTable">
				<table class="senderAddressTable">
					<tbody>
						<tr>
							<th class="senderTH">SENDER</th>
							<th class="senderTH2"></th>
						</tr>
						<tr>
							<td>NAME:</td>
							<td class="underLine" id="senderFirstName"><?php echo $row[1]." ".$row[2] ?></td>
						</tr>
						<tr>
							<td>UNIT#:</td>
							<td id="s_unitTd"> <?php echo $row[3] == 0 ? "": $row[3] ?></td>
						</tr>
						<tr>
							<td>ADDRESS:</td>
							<td class="underLine" id="senderStreet"><?php echo $row[4] ?></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="senderCity"><?php echo $row[5]." ".$row[6]." ".$row[7] ?> </td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="senderCountry"><?php echo $row[8]." " ?></td>
						</tr>
						<tr>
							<td>PHONE:</td>
							<td class="underLine" id="senderPhone"><?php echo $row[10]." ".$row[11]." " ?></td>
						</tr>
						<tr>
							<td>EMAIL:</td>
							<td class="underLine" id="senderEmail"><?php echo $row[9]?></td>
						</tr>
					</tbody>
				</table>
				<table class="receiverAddressTable">
					<tbody>
						<tr>
							<th class="senderTH">RECEIVER</th>
							<th class="senderTH2"></th>
						</tr>
						<tr>
							<td>NAME:</td>
							<td class="underLine" id="receiverFirstName"><?php echo $row[12]." ".$row[13] ?></td>
						</tr>
						<tr>
							<td>UNIT:</td>
							<td id="r_unitTd"><?php echo $row[14]?></td>
						</tr>
						<tr>
							<td>STREET:</td>
							<td class="underLine" id="receiverStreet"><?php echo $row[15] ?></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="receiverCity"><?php echo $row[16]." ".$row[17]." ".$row[18] ?></td>
						</tr>
						<tr>
							<td></td>
							<td class="underLine" id="receivercountry"><?php echo $row[19]." " ?></td>
						</tr>
						<tr>
							<td>PHONE:</td>
							<td class="underLine" id="receiverPhone"> <?php echo $row[20]." ".$row[21] ?></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="itemList">
				<table class="tableItems">
					<tr>
						<th class="numList"></th>
						<th class="itemsList">Item Description</th>
						<th class="qtyList"># PCS</th>
					</tr>
					<tr>
						<td>1:</td>
						<td id="unit1"><?php echo $row[27] ?></td>
						<td id="amount1"><?php echo $row[28]  == 0 ? "": $row[28] ?></td>
					</tr>
					<tr>
						<td>2:</td>
						<td id="unit2"><?php echo $row[29] ?></td>
						<td id="amount2"><?php echo $row[30]  == 0 ? "": $row[30] ?></td>
					</tr>
					<tr>
						<td>3:</td>
						<td id="unit3"><?php echo $row[31] ?></td>
						<td id="amount3"><?php echo $row[32]  == 0 ? "": $row[32] ?></td>
					</tr>
					<tr>
						<td>4:</td>
						<td id="unit4"><?php echo $row[33] ?></td>
						<td id="amount4"><?php echo $row[34]  == 0 ? "": $row[34] ?></td>
					</tr>
					<tr>
						<td>5:</td>
						<td id="unit5"><?php echo $row[35] ?></td>
						<td id="amount5"><?php echo $row[36]  == 0 ? "": $row[36] ?></td>
					</tr>
					<tr>
						<td>6:</td>
						<td id="unit6"><?php echo $row[37] ?></td>
						<td id="amount6"><?php echo $row[38]  == 0 ? "": $row[38] ?></td>
					</tr>
					<tr>
						<td>7:</td>
						<td id="unit7"><?php echo $row[39] ?></td>
						<td id="amount7"><?php echo $row[40]  == 0 ? "": $row[40] ?></td>
					</tr>
					<tr>
						<td>8:</td>
						<td id="unit8"><?php echo $row[41] ?></td>
						<td id="amount8"><?php echo $row[42]  == 0 ? "": $row[42] ?></td>
					</tr>
					<tr>
						<td>9:</td>
						<td id="unit9"><?php echo $row[43] ?></td>
						<td id="amount9"><?php echo $row[44]  == 0 ? "": $row[44] ?></td>
					</tr>
					<tr>
						<td>10:</td>
						<td id="unit10"><?php echo $row[45] ?></td>
						<td id="amount10"><?php echo $row[46]  == 0 ? "": $row[46] ?></td>
					</tr>
					<tr>
						<td>11:</td>
						<td id="unit11"><?php echo $row[47] ?></td>
						<td id="amount11"><?php echo $row[48]  == 0 ? "": $row[48] ?></td>
					</tr>
					<tr>
						<td>12:</td>
						<td id="unit12"><?php echo $row[49] ?></td>
						<td id="amount12"><?php echo $row[50]  == 0 ? "": $row[50] ?></td>
					</tr>
					<tr>
						<td>13:</td>
						<td id="unit13"><?php echo $row[51] ?></td>
						<td id="amount13"><?php echo $row[52]  == 0 ? "": $row[52] ?></td>
					</tr>
					<tr>
						<td>14:</td>
						<td id="unit14"><?php echo $row[53] ?></td>
						<td id="amount14"><?php echo $row[54]  == 0 ? "": $row[54] ?></td>
					</tr>
				</table>
			</div>
			<div>
				<table class="tablePackageInfo">
					<tr>
						<th class="weightTable">WEIGHT</th>
						<th class="chargeableTable">CHARGEABLE WEIGHT</th>
						<th class="widthCol">WIDTH</th>
						<th class="heightCol">HEIGHT</th>
						<th class="lengthCol">LENGTH</th>
					</tr>
					<tr>
						<td id="weightTd"><?php echo $row[56] ?>kg</td>
						<td id="chargealeTd"><?php echo $weight ?>kg</td>
						<td id="lenghtTd"><?php echo $row[24] ?>cm</td>
						<td id="widthTd"><?php echo $row[25] ?>cm</td>
						<td id="heightTd"><?php echo $row[23] ?>cm</td>
					</tr>
				</table>
				<p></p>
			</div>
           
            <div>
				<br />
				<div class="freightLabel">Freight:</div>
				<div class="insuranceLabel">Insurance:</div>
				<br /><br />
			</div>
			<h4>CONDITIONS OF CARRY</h4>
			<div class="legalInformation">
                <p>CONDITION ONE – Receipt and Freight:
Received on the date specified from the Sender, Polimex Trading Inc. (“Polimex”) and its agents agree to use their best efforts to deliver the shipment to the Receiver at the said destination subject
to the rates in effect on the date of shipment. Freight charges are prepaid. Where Polimex’s agents are unable to the deliver to the Receiver’s address, a notice will be left at the Receiver’s address
stating that delivery has been attempted and the location of a nearby pickup parcel shop where the shipment can be picked up during the shop’s business hours. If after seven (7) days the shipment
has not been picked up by the Receiver, then the Sender agrees that Polimex or its agents may forward the shipment to the agent’s warehouse in Europe. If Polimex or its agents do not receive
instructions from the Sender or Receiver within a reasonable period after the shipment has been forwarded to the agent’s warehouse, then the Sender agrees that Polimex or its agents may destroy
or sell the content of the shipment without any further liability to the Sender or the Receiver. The Sender agrees to pay Polimex any costs incurred in forwarding, disposing of or returning the
shipment and any charges (if any) for making additional delivery attempts and for the agreed appropriate next action.</p>
                 <p>CONDITION TWO – Limitation of Liability:
(a) Physical Damage and Delay: Unless the parties agree otherwise in writing, Polimex shall not be liable for any physical damage to the shipment or for delay in the delivery of the
shipment, regardless of the cause of the damage or delay.
(b) Loss of Shipment: Polimex shall only be liable for the amount set out below in (d) below in the event of a loss of the shipment, except arising from the following causes: acts of God,
the Queen’s or public enemies, riots, and strikes, authority of law, nuclear reaction and radioactive contamination.
(c) Indirect, Special and Consequential Damages: Unless the parties agree otherwise in writing, Polimex shall not be liable for any indirect, general, special or consequential damages
resulting from damage to shipment or from the loss, mishandling or delay in the delivery of a shipment, regardless of the cause of the damage, loss, mishandling or delay.
(d) Amount of Liability: In the event of loss of shipment, the amount of any loss for which Polimex is liable for shall not exceed the lesser of CAD $3.00 per kilogram or CAD $60.00
per shipment unless additional insurance is purchased from Polimex and the maximum liability shall be the declared value as it appears on the Customs Declaration. Shall any loss or
destruction take place on the territory of Poland the reimbursement may be made to Receiver in Polish currency. In case of any discrepancy, the value will be taken by the Sender’s
i.e. store receipt and/or product market value. No interest is payable on any claim payment.</p>
                 <p>CONDITION THREE – Notice of Claim:
(a) Polimex is not liable for loss to any goods carried under this contract unless notice thereof setting out particulars of the loss and the estimated amount claimed with respect to such
loss is given in writing together with a customer’s copy of the Customs Declaration to Polimex within thirty (30) days after the delivery of the goods, or, in case of failure to make
delivery of a sea shipment, within sixty (60) days from the date of such shipment, or in case of failure to make delivery of an air shipment, within thirty (30) days from the date of
such shipment.</p>
                 <p>CONDITION FOUR – Partial Invalidity:
Any provision herein prohibited by law shall to the extent prohibited be ineffective without invalidating any other portion hereof.</p>
                 <p>CONDITION FIVE – Modification of Contract:
No agent, servant or representative of Polimex has authority to alter, modify or waive any provisions of this contract.</p>
                 <p>CONDITION SIX – Check Before Signing!
It is the duty of the receiving party to check the contents of a parcel in the presence of the delivery person. Possible claims can be considered only on the basis of a written report, thirty days (30)
from the date of delivery.</p>
                 <p>CONDITION SEVEN - False Declaration
False declaration of goods will be subject to penalties, including, but not limited to, forfeiture and seizure by customs authorities.</p>
                 <p>CONDITION EIGHT – Indemnification
The Sender shall indemnify and/or compensate Polimex from any and all claims, demands, loss or damage, direct or indirect, suffered by Polimex and its designated representative as a result of,
or in any way connected to the Sender’s failure to abide by these terms and conditions.</p>
                  <p>CONDITION NINE – Governing Law
If the Sender's address is not in a Canadian province or territory, these terms and conditions are to be governed by, and interpreted under, the laws in force in the province of Ontario, Canada. The
forum for any legal proceedings shall be the province of Ontario, Canada.</p>
                 <p>PROHIBITED ITEMS
 Cash in any denomination of any kind
 Batteries
 Alcohol, cigarettes, liquers or other illegal substances
 Explosives (including, but not limited to, flares, fireworks, toys and starting pistol caps, explosive fuses and igniters)
 Gases (including, but not limited to, aerosol products, bear/dog spray, cigarette lighters
 Flammable Liquids (including, but not limited to, aftershave, perfumes, paint, thinners and solvents, alcohols)
 Flammable substances (including, but not limited to, fire starters, matches, and fuel tablets)
 Oxidizers and organic peroxides (including, but not limited to, fertilizers)
 Toxic and infectious substances (including, but not limited to, pesticides)
 Drugs and medicines
 Radioactive Materials
 Corrosives (including, but not limited to, battery acid, disinfectants and cleaning products)
 Engines
 Plants and animals (dead or alive)
 Firearms and components, including, but not limited to, pellet guns, ball bearing (BB) guns, compressed air (zip) guns and guns using CO2 cylinders to launch projectiles
 Ammunition of any type
 Written correspondence, documents and mail</p><br><br>
                
                SIGNATURE:_________________________________________________
                
			</div>
		</div>
	</div>
	<link href="css/printForm.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="js/jquery-barcode.js" type="text/javascript"></script>
    <script src="js/print3.js"></script>
</body>
</html>
	