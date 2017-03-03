<?php
$servername = "sql5c11b.megasqlservers.com";
$username = "polimarkco334562";
$password = "ac2212ac";
$dbname = "phpmy1_polimark_com";

echo "Con";
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>