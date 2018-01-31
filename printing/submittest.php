<?php
    date_default_timezone_set('America/Edmonton');

    if ((isset($_POST['s_name']) && !trim($_POST['s_name']) == '') 
        && (isset($_POST['s_last']) && !trim($_POST['s_last']) == '') 
        && (isset($_POST['s_street']) && !trim($_POST['s_street']) == '') 
        && (isset($_POST['s_postal']) && !trim($_POST['s_postal']) == '') 
        && (isset($_POST['s_email']) && !trim($_POST['s_email']) == '') 
        && (isset($_POST['r_name']) && !trim($_POST['r_name']) == '') 
        && (isset($_POST['r_last']) && !trim($_POST['r_last']) == '') 
        && (isset($_POST['r_street']) && !trim($_POST['r_street']) == '') 
        && (isset($_POST['r_city']) && !trim($_POST['r_city']) == '') 
        && (isset($_POST['r_country']) && !trim($_POST['r_country']) == '') 
        && (isset($_POST['r_postal']) && !trim($_POST['r_postal']) == '') 
        && (isset($_POST['h']) && !trim($_POST['h']) == '') 
        && (isset($_POST['l']) && !trim($_POST['l']) == '')
        && (isset($_POST['w']) && !trim($_POST['w']) == '') 
        && (isset($_POST['value']) && !trim($_POST['value']) == '') 
        && (isset($_POST['item1']) && !trim($_POST['item1']) == '') 
        && (isset($_POST['weight']) && !trim($_POST['weight']) == '')) 
    {                    
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

        $guid;
        if (function_exists('com_create_guid') === true)
        {
            $guid = trim(com_create_guid(), '{}');
        }
    
        $guid = sprintf('%04X%04X-%04X-%04X-%04X-%04X%04X%04X', mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(16384, 20479), mt_rand(32768, 49151), mt_rand(0, 65535), mt_rand(0, 65535), mt_rand(0, 65535));

        $sql = "INSERT INTO customs3 (s_name, s_last,s_unit, s_street,s_city,s_province,s_country,s_postal, s_email, s_mobile, s_home, r_name, r_last, r_unit,r_street, r_city, r_province, r_country, r_postal, r_mobile, r_home, service, h, l , w,value,item1,qty1,item2,qty2,item3,qty3,item4,qty4,item5,qty5,item6,qty6,item7,qty7,item8,qty8,item9,qty9,item10,qty10,item11,qty11,item12,qty12,item13,qty13,item14,qty14,submitDate,weight,guid) 
            VALUES ('".$_POST["s_name"]."','".$_POST["s_last"]."','".$_POST["s_unit"]."','".$_POST["s_street"]."','".$_POST["s_city"]."','".$_POST["s_province"]."','".$_POST["s_country"]."','".$_POST["s_postal"]."','".$_POST["s_email"]."','".$_POST["s_mobile"]."','".$_POST["s_home"]."','".$_POST["r_name"]."','".$_POST["r_last"]."','".$_POST["r_unit"]."','".$_POST["r_street"]."','".$_POST["r_city"]."','".$_POST["r_province"]."','".$_POST["r_country"]."','".$_POST["r_postal"]."','".$_POST["r_mobile"]."','".$_POST["r_home"]."','".$_POST["radioAirSea"]."','".$_POST["h"]."','".$_POST["l"]."','".$_POST["w"]."','".$_POST["value"]."','".$_POST["item1"]."','".$_POST["qty1"]. "','".$_POST["item2"]."','".$_POST["qty2"]."','".$_POST["item3"]."','".$_POST["qty3"]."','".$_POST["item4"]."','".$_POST["qty4"]."','".$_POST["item5"]."','".$_POST["qty5"]."','".$_POST["item6"]."','".$_POST["qty6"]."','".$_POST["item7"]."','".$_POST["qty7"]."','".$_POST["item8"]."','".$_POST["qty8"]."','".$_POST["item9"]."','".$_POST["qty9"]."','".$_POST["item10"]."','".$_POST["qty10"]."','".$_POST["item11"]."','".$_POST["qty11"]."','".$_POST["item12"]."','".$_POST["qty12"]."','".$_POST["item13"]."','".$_POST["qty13"]."','".$_POST["item14"]."','".$_POST["qty14"]."','".date('Y-m-d')."','".$_POST["weight"]."','".$guid."')";
        $conn->query($sql);
        
        echo 'print.php?id='.$conn->insert_id;
    } else {
        echo 'Error: Could not submit information. Please make sure to fill out all required fields and try again.';
    }
    $conn->close();
?>	