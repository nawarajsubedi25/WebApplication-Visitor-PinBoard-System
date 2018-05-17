<?php
//Database Connector
include 'DatabaseConnection.php';
// Page refresh after 5 sec
header( "refresh:5;url=index.html" );

// Open php if there is any post available in final submit
if (isset($_POST["finalsubmit"]) && !empty($_POST["finalsubmit"]))
{
// Geeting value from the form
$firstname= ucwords(strtolower($_POST["firstName"]));
$lastname= ucwords(strtolower($_POST["lastName"]));
$city= ucwords(strtolower($_POST["cityName"]));
$state=strtoupper($_POST["stateName"]);
$zipcode=strtoupper($_POST["zipCode"]);
$country=strtoupper($_POST["countryName"]);
$noinparty=$_POST["noInParty"];
if($noinparty==0)
{
$noinparty=1;
}
$travelingfor=$_POST["TravelingFor"];
$howdidyouhear=$_POST["HowDidYouHear"];
$didyoustay=$_POST["DidYouStay"];
$email=strtolower($_POST["email"]);
$count;
date_default_timezone_set('America/Chicago');
$date = time();

/*******************************************************************************************
* Converting the Latitude and longitude for the address
********************************************************************************************/
$address = urlencode($city." ,".$state.", ".$zipcode.", ".$country);
$url = "http://maps.googleapis.com/maps/api/geocode/json?address=$address&sensor=false";
$google_api_response =file_get_contents( $url );
$results = json_decode( $google_api_response);
$results = (array) $results;
$status = $results["status"];
$location_all_fields = (array) $results["results"][0];
$location_geometry = (array) $location_all_fields["geometry"];
$location_lat_long = (array) $location_geometry["location"];
if( $status == 'OK'){
$latitude = $location_lat_long["lat"];
$longitude = $location_lat_long["lng"];
}else{
$latitude = '';
$longitude = '';
}
/**********************************************************************************
Checking How many times he visited. If he has salready visited
then system update his no of visit.
*********************************************************************************/
$raj= new DatabaseConnection();
$queryCheckCount= "SELECT Vcount FROM VISITOR WHERE Fname='$firstname' AND Lname='$lastname' AND  Zipcode='$zipcode' AND City='$city'";
$result=$raj->returnQuery($queryCheckCount);
$row = $result->fetch_assoc();
//Insert into database if visitor is new and susscefully fill all the information
if($row["Vcount"] ==0)
{
$count=1;
$query = "INSERT INTO VISITOR (Fname,Lname,City,State,Zipcode,Country,Party,Purpose,Hear,Hotel,Email,Time,Vcount,Lat,Lng) VALUES('$firstname','$lastname', '$city','$state',
'$zipcode','$country','$noinparty','$travelingfor','$howdidyouhear','$didyoustay','$email','$date','$count','$latitude','$longitude')";
$raj->insertDatabase($query);
}
else
{
// Insert in database if visitor submit the form without providing any information ( No button)
if ($firstname==null && $lastname==null)
{
$count=1;
$query = "INSERT INTO VISITOR (Fname,Lname,City,State,Zipcode,Country,Party,Purpose,Hear,Hotel,Email,Time,Vcount,Lat,Lng) VALUES('$firstname','$lastname', '$city','$state',
'$zipcode','$country','$noinparty','$travelingfor','$howdidyouhear','$didyoustay','$email','$date','$count','$latitude','$longitude')";
$raj->insertDatabase($query);
}
// if same visitor visited twice it will just update the count to that visitor
else
{
$count=$row["Vcount"]+1;
$query="UPDATE VISITOR SET Vcount=$count WHERE Fname='$firstname' AND Lname='$lastname' AND  Zipcode='$zipcode' AND City='$city'";
$raj->insertDatabase($query);
}
}
}
?>
<html>

	<head>
		<title>Monro-West-Monroe C&VB</title>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">

		<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
		<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css'>
		<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
		<style type="text/css">
			html {

				background: url(images/thankyou.jpg) no-repeat center center fixed;
				-webkit-background-size: cover;
				-moz-background-size: cover;
				-o-background-size: cover;
				background-size: cover;
			}
			body {
				background-size: cover;
				background: none;
			}

			.container {
				position: relative;
				height: 100%;
				width: 100%;
			}
			.thankyou {

				position: absolute;
				left: 120;
				bottom: 120;
				color: white;
				max-width: 450px;
			}
			.btn-lg {
				padding: 10px 30px;
				font-size: 35px;
				line-height: 1.33;
				border-radius: 6px;
			}

		</style>
	</head>
	<body>
		<div class="container">
			<div class="thankyou">
				<h1>Thank You for visiting Nepal</h1>
				<h4>Please visit our front desk if you'd like more information</h4>
				<br>
				<a href="index.html" class="btn btn-default btn-lg">Exit</a>
			</div>
		</div>
	</body>
</html>