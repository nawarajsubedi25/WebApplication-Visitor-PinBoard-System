<?php
include('session.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Admin Page</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<!-- CUSTOM CSS --->
		<link href="css/admin.css" rel="stylesheet">
		<link href="css/headerandfooter.css" rel="stylesheet">
		<!-- Create the Google Map search box and link it to the address search box -->
		<script src="https://maps.google.com/maps/api/js?v=3.9&libraries=places&amp;sensor=false"></script>

		<script>
			window.onload = function() {

				// Create the Google Map search box and link it to the address search box
				var input = document.getElementById('address');
				var searchBox = new google.maps.places.SearchBox(input);

				var miles = document.getElementById("miles").value;
				var address = document.getElementById("address").value;
				if (miles !== "" && address !== "") {

					document.getElementById("regularfilter").style.display = "none";

				}
			};

			var state = "";

			function show() {
				document.getElementById("ScrollCB").style.visibility = 'visible';
			}

			function hide() {
				document.getElementById("ScrollCB").style.visibility = 'hidden';
			}

			function clicked(element) {
				if (element.checked) {
					state += element.value + " ";
					document.getElementById("statename").value = state;
				} else {
					state = state.replace(element.value + " ", "");
					document.getElementById("statename").value = state;
				}
			}
		</script>
	</head>
	<body>
		<div class = "header">
			<aside class="bg-dark">
				<div class="container text-center">
					<div class="call-to-action">
						<h2><a style ="color:white" href ="admin.php"><span class="glyphicon glyphicon-home"></span></a>Nepal Tourism Board Admin Site</h2>

					</div>
				</div>
			</aside>

		</div>
		<div class="container">
			<div class="well">
				<h1>Welcome <?php  echo $login_session;?></h1>
				<a class="btn btn-sm btn-primary" href="createAccount.php">Add Admin</a>

				<a id = "logout" href = "logout.php">
				<button id = logoutBtn class="btn btn-danger btn-md">
					Log Out
				</button></a>
			</div>
			<h3>Enter one or more filters</h3>

			<div class = "well">
				<form method ="post" action = "admin.php">
					City
					<input type="text" name="city" value="<?php echo $_POST["city"];?>"/>
					<div id="state" onmouseover="show()" onmouseout="hide()">
						State
						<input id="statename" type="text" name="state" readonly value="<?php echo $_POST["state"];?>"/>
						<div id="ScrollCB">
							<input type="checkbox" name="b1" value="AL" onclick="clicked(this)">
							Alabama
							<br>
							<input type="checkbox" name="b2" value="AK" onclick="clicked(this)">
							Alaska
							<br>
							<input type="checkbox" name="b3" value="AZ"onclick="clicked(this)">
							Arizona
							<br>
							<input type="checkbox" name="b4" value="AR"onclick="clicked(this)">
							Arkansas
							<br>
							<input type="checkbox" name="b5" value="CA"onclick="clicked(this)">
							California
							<br>
							<input type="checkbox" name="b6" value="CO"onclick="clicked(this)">
							Colorado
							<br>
							<input type="checkbox" name="b7" value="CT"onclick="clicked(this)">
							Connecticut
							<br>
							<input type="checkbox" name="b8" value="DE"onclick="clicked(this)">
							Delaware
							<br>
							<input type="checkbox" name="b9" value="DC"onclick="clicked(this)">
							District Of Columbia
							<br>
							<input type="checkbox" name="b10" value="FL"onclick="clicked(this)">
							Florida
							<br>
							<input type="checkbox" name="b11" value="GA"onclick="clicked(this)">
							Georgia
							<br>
							<input type="checkbox" name="b12" value="HI"onclick="clicked(this)">
							Hawaii
							<br>
							<input type="checkbox" name="b13" value="ID"onclick="clicked(this)">
							Idaho
							<br>
							<input type="checkbox" name="b14" value="IL"onclick="clicked(this)">
							Illinois
							<br>
							<input type="checkbox" name="b15" value="IN"onclick="clicked(this)">
							Indiana
							<br>
							<input type="checkbox" name="b16" value="IA"onclick="clicked(this)">
							Iowa
							<br>
							<input type="checkbox" name="b17" value="KS"onclick="clicked(this)">
							Kansas
							<br>
							<input type="checkbox" name="b18" value="KY"onclick="clicked(this)">
							Kentucky
							<br>
							<input type="checkbox" name="b19" value="LA"onclick="clicked(this)">
							Louisiana
							<br>
							<input type="checkbox" name="b20" value="ME"onclick="clicked(this)">
							Maine
							<br>
							<input type="checkbox" name="b21" value="MD"onclick="clicked(this)">
							Maryland
							<br>
							<input type="checkbox" name="b22" value="MA"onclick="clicked(this)">
							Massachusetts
							<br>
							<input type="checkbox" name="b23" value="MI"onclick="clicked(this)">
							Michigan
							<br>
							<input type="checkbox" name="b24" value="MN"onclick="clicked(this)">
							Minnesota
							<br>
							<input type="checkbox" name="b25" value="MS"onclick="clicked(this)">
							Mississippi
							<br>
							<input type="checkbox" name="b26" value="MO"onclick="clicked(this)">
							Missouri
							<br>
							<input type="checkbox" name="b27" value="MT"onclick="clicked(this)">
							Montana
							<br>
							<input type="checkbox" name="b28" value="NE"onclick="clicked(this)">
							Nebraska
							<br>
							<input type="checkbox" name="b29" value="NV"onclick="clicked(this)">
							Nevada
							<br>
							<input type="checkbox" name="b30" value="NH"onclick="clicked(this)">
							New Hampshire
							<br>
							<input type="checkbox" name="b31" value="NJ"onclick="clicked(this)">
							New Jersey
							<br>
							<input type="checkbox" name="b32" value="NM"onclick="clicked(this)">
							New Mexico
							<br>
							<input type="checkbox" name="b33" value="NY"onclick="clicked(this)">
							New York
							<br>
							<input type="checkbox" name="b34" value="NC"onclick="clicked(this)">
							North Carolina
							<br>
							<input type="checkbox" name="b35" value="ND"onclick="clicked(this)">
							North Dakota
							<br>
							<input type="checkbox" name="b36" value="OH"onclick="clicked(this)">
							Ohio
							<br>
							<input type="checkbox" name="b37" value="OK"onclick="clicked(this)">
							Oklahoma
							<br>
							<input type="checkbox" name="b38" value="OR"onclick="clicked(this)">
							Oregon
							<br>
							<input type="checkbox" name="b39" value="PA"onclick="clicked(this)">
							Pennsylvania
							<br>
							<input type="checkbox" name="b40" value="RI"onclick="clicked(this)">
							Rhode Island
							<br>
							<input type="checkbox" name="b41" value="SC"onclick="clicked(this)">
							South Carolina
							<br>
							<input type="checkbox" name="b42" value="SD"onclick="clicked(this)">
							South Dakota
							<br>
							<input type="checkbox" name="b43" value="TN"onclick="clicked(this)">
							Tennessee
							<br>
							<input type="checkbox" name="b44" value="TX"onclick="clicked(this)">
							Texas
							<br>
							<input type="checkbox" name="b45" value="UT"onclick="clicked(this)">
							Utah
							<br>
							<input type="checkbox" name="b46" value="VT"onclick="clicked(this)">
							Vermont
							<br>
							<input type="checkbox" name="b47" value="VA"onclick="clicked(this)">
							Virginia
							<br>
							<input type="checkbox" name="b48" value="WA"onclick="clicked(this)">
							Washington
							<br>
							<input type="checkbox" name="b49" value="WV"onclick="clicked(this)">
							West Virginia
							<br>
							<input type="checkbox" name="b50" value="WI"onclick="clicked(this)">
							Wisconsin
							<br>
							<input type="checkbox" name="b51" value="WY"onclick="clicked(this)">
							Wyoming
							<br>

						</div>
					</div>

					Zip
					<input type="number" min="0" max="99999" name="zip" value="<?php echo $_POST["zip"];?>"/>
					From
					<input type = "date" name="from" value="<?php echo $_POST["from"];?>"/>
					To
					<input type = "date" name="to" value="<?php echo $_POST["to"];?>"/>
					<input type="submit" value="Submit" id="regularsubmit"/>
					<a style ="color:black" href="admin.php">
					<input type="button" value="Reset"/>
					</a>

				</form>
			</div>
			<h3>Proximity Filter</h3>
			<div class = "well">
				<form method ="post" action = "admin.php">
					<label>Miles</label>
					<input type = "text" id="miles" placeholder="Enter a number" name="miles" value="<?php echo $_POST['miles']; ?>">
					<label>Near of</label>
					<input type="text" id="address" class="myinput" placeholder="Enter a City" name="address" value="<?php echo $_POST['address']; ?>">
					From
					<input type = "date" name="from" value="<?php echo $_POST["from"];?>"/>
					To
					<input type = "date" name="to" value="<?php echo $_POST["to"];?>"/>
					<input type="submit" value="Submit" name="proximitysubmit" id="proximitysubmit">
					<a style ="color:black" href="admin.php">
					<input type="button" value="Reset"/>
					</a>
				</form>

			</div>
			<div class ="filteroption" id="regularfilter">

				<br>

				<?php
				$conn= new DatabaseConnection();
				//Summary query
				$query = "SELECT COUNT(*) as count FROM (SELECT * FROM VISITOR";
				$city = trim(ucwords(strtolower($_POST["city"])));
				$state = trim($_POST["state"]);
				$zip = trim($_POST["zip"]);
				$from = trim($_POST["from"]);
				$to =  trim($_POST["to"]);
				$date= trim($from.$to);
				$filter="";
				if( $city!="" || $state !="" || $zip !="" || $date!="" ){
				$query.=" WHERE ";

				if ( $city!=""){
				$query.="City = '".$city."'";
				$filter.=" from ".ucfirst($city);
				}
				if($state !=""){

				$stateString;

				$stateArray = explode(" ", $state);

				foreach ($stateArray as $value) {
				$stateString.="'".$value."',";
				}

				$stateString = substr($stateString, 0, -1);

				if (strpos($query,"=")===false){
				$query.=" State in (".$stateString.")";
				}
				else {

				$query.=" AND State in (".$stateString.")";
				}
				if ($city!="")
				$filter.=", ".$state;
				else
				$filter.=" ".$state;

				}

				if($zip !=""){
				if (strpos($query,"=")===false){
				$query.=" Zipcode = '".$zip."'";
				}
				else {

				$query.=" AND Zipcode = '".$zip."'";
				}
				if($city!=""||$state!="")
				$filter.=" ".$zip;
				else
				$filter.=" from ".$zip;

				}
				if($date!=""){
				$convertedFrom = new DateTime($from);
				$date1 = $convertedFrom->getTimestamp();
				$convertedTo = new DateTime($to);
				$date2 = $convertedTo->getTimestamp();
				if (strpos($query,"=")===false){
				$query.=" Time > ".$date1." AND Time < ".$date2;
				}
				else {

				$query.=" AND Time > ".$date1." AND Time < ".$date2;
				}
				if($from != "" && $to != "")
				$filter.=" between ".$from." and ".$to;
				else if ($from != "")
				$filter.=" between ".$from." and now";
				else
				$filter.=" up until ".$to;
				}
				$query.=")AS T";

				$result= $conn->returnQuery($query);

				if($result->num_rows > 0){
				$row = $result->fetch_assoc();
				echo "
				<div class='well'>
					<h3><span style ='color:blue'>Summary:</span> ";
					echo $row['count']." visitors ".$filter.".";
					echo "</h3>
				</div>";
				}
				}
				else{
				echo "
				<div class='well'>
					<h3>";
					echo "The 30 most recent visitors are listed below.";
					echo "</h3>
				</div>
				";
				echo"
				<br>
				";

				}
				echo'
				<div id="addandgenerate" >
					<a class="input-lg" href = "addvisitor.php"><span class="glyphicon glyphicon-plus"></span> Add visitor</a>';
					echo'<a  id ="reportbutton" href = "Report.php">
					<button class="btn btn-primary btn-lg">
						Generate Report
					</button></a>
				</div>';

				//Display results query
				$query1 = "SELECT * FROM VISITOR";
				$city1 = trim($_POST["city"]);
				$state1 = trim($_POST["state"]);
				$zip1 = trim($_POST["zip"]);
				$from1 = trim($_POST["from"]);
				$to1 =  trim($_POST["to"]);
				$date1= trim($from.$to);
				if( $city1!="" || $state1 !="" || $zip1 !="" || $date1!="" ){
				$query1.=" WHERE ";

				if ( $city1!=""){
				$query1.="City = '".$city1."'";

				}
				if($state1 !=""){

				$stateString1;

				$stateArray1 = explode(" ", $state1);

				foreach ($stateArray1 as $value1) {
				$stateString1.="'".$value1."',";
				}

				$stateString1 = substr($stateString1, 0, -1);

				if (strpos($query1,"=")===false){
				$query1.=" State in (".$stateString1.")";
				}
				else {

				$query1.=" AND State in (".$stateString1.")";
				}

				}

				if($zip1 !=""){
				if (strpos($query1,"=")===false){
				$query1.=" Zipcode = '".$zip1."'";
				}
				else {

				$query1.=" AND Zipcode = '".$zip1."'";
				}

				}
				if($date1!=""){
				$convertedFrom1 = new DateTime($from1);
				$date11 = $convertedFrom1->getTimestamp();
				$convertedTo1 = new DateTime($to1);
				$date21 = $convertedTo1->getTimestamp();
				if (strpos($query1,"=")===false){
				$query1.=" Time > ".$date11." AND Time < ".$date21;
				}
				else {

				$query1.=" AND Time > ".$date11." AND Time < ".$date21;
				}

				}

				}
				else{
				$query1.=" ORDER BY Time DESC LIMIT 30 ";
				}
				/**************************************************************
				Retriving query
				**************************************************************/

				$result1= $conn->returnQuery($query1);
				echo "
				<br>
				";
				if ($result1->num_rows > 0) {
				echo "";
				echo"
				<div class='table-responsive'>
					<table class='table table-hover table-condensed'>
						<tr>
							<th>First Name </th>
							<th>Last Name </th>
							<th>City </th>
							<th>State </th>
							<th>Zipcode </th>
							<th>Country </th>
							<th>Party </th>
							<th>Purpose </th>
							<th>Hear </th>
							<th>Hotel</th>
							<th>Email </th>
							<th>Submission Date </th>
						</tr>

						";
						$csvdata = array();

						while($row = $result1->fetch_assoc())
						{
						$csvdata[]=array($row["Fname"],$row["Lname"],$row["City"],$row["State"],$row["Zipcode"],$row["Country"],$row["Party"],$row["Purpose"],$row["Hear"],$row["Hotel"],$row["Email"],date('d F Y H:i:s', $row["Time"])) ;
						echo"
						<tr>
							<td><a style='color:#333' href='visitor.php?id={$row["id"]}'>{$row["Fname"]}</a></td>
							<td>{$row["Lname"]}</td>
							<td><a style='color:#333' href='visitor.php?id={$row["id"]}'>{$row["City"]}</a></td>
							<td><a style='color:#333'  href='visitor.php?id={$row["id"]}'>{$row["State"]}</a></td>
							<td><a style='color:#333'  href='visitor.php?id={$row["id"]}'>{$row["Zipcode"]}</a></td>
							<td><a style='color:#333'  href='visitor.php?id={$row["id"]}'>{$row["Country"]}</a></td>
							<td>{$row["Party"]}</td>
							<td>{$row["Purpose"]}</td>
							<td>{$row["Hear"]}</td>
							<td>{$row["Hotel"]}</td>
							<td>{$row["Email"]}</td>

							<td>".date('d F Y H:i:s', $row["Time"])."</td>
						</tr>
						";

						}

						echo"
					</table>
				</div>";

				}
				//var_dump($csvdata);
				$_SESSION["report"] = $csvdata;

				//made some changes

				?>

			</div>

			<div class="filteroption" id="proximityfilter">
				<?php
				if (isset($_POST["proximitysubmit"]) && !empty($_POST["proximitysubmit"])) {

				$address = urlencode($_POST["address"]);
				$miles=$_POST["miles"];
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

				echo "
				<br>
				";

				$query= "SELECT COUNT(*)
				FROM ( SELECT Fname, Lname, City, State, Zipcode, ( 3959 * ACOS( COS( RADIANS( '$latitude' ) ) * COS( RADIANS( lat ) ) * COS( RADIANS( lng ) - RADIANS( '$longitude' ) ) + SIN( RADIANS( '$latitude' ) ) * SIN( RADIANS( lat ) ) ) ) AS distance
				FROM VISITOR
				HAVING distance <='$miles'
				ORDER BY distance
				) AS T";

				$result= $conn->returnQuery($query);
				echo "
				<br>
				";
				if ($result->num_rows > 0) {
				echo"
				<div class='table-responsive'>
					<table class='table table-hover table-condensed'>
						<tr>
							<th>Total Number of people within the given radius </th>
						</tr>

						";
						$csvdata = array();

						while($row = $result->fetch_assoc())
						{

						$csvdata[]=array($row["COUNT(*)"]);
						echo"
						<tr>
							<td>{$row["COUNT(*)"]}</td>
						</tr>
						";

						}
						echo"
					</table>
				</div>";

				}
				echo '
				<div class="addandgenerate" style="position:relative">
					<h3>Summary</h3><a  id ="reportbutton" href = "Report.php">
					<button class="btn btn-primary btn-lg">
						Generate Report
					</button></a>
				</div>';

				$query= " SELECT City, COUNT(City)
				FROM
				(SELECT Fname, Lname, City, State, Zipcode, ( 3959 * ACOS( COS( RADIANS( '$latitude' ) ) * COS( RADIANS( lat ) ) * COS( RADIANS( lng ) - RADIANS( '$longitude' ) ) + SIN( RADIANS( '$latitude' ) ) * SIN( RADIANS( lat ) ) ) ) AS distance
				FROM VISITOR
				HAVING distance <='$miles'
				ORDER BY distance
				) AS T
				GROUP BY City";

				$result= $conn->returnQuery($query);
				echo "
				<br>
				";
				if ($result->num_rows > 0) {
				echo"
				<div class='table-responsive'>
					<table class='table table-hover table-condensed'>
						<tr>
							<th>City </th>
							<th>No of People </th>
						</tr>

						";
						$csvdata = array();

						while($row = $result->fetch_assoc())
						{

						$csvdata[]=array($row["City"],$row["COUNT(City)"]);
						echo"
						<tr>
							<td>{$row["City"]}</td>
							<td>{$row["COUNT(City)"]}</td>
						</tr>
						";

						}
						echo"
					</table>
				</div>";

				}

				$query= "SELECT Fname, Lname, City, State, Zipcode, ( 3959 * ACOS( COS( RADIANS( '$latitude' ) ) * COS( RADIANS( lat ) ) * COS( RADIANS( lng ) - RADIANS( '$longitude' ) ) + SIN( RADIANS( '$latitude' ) ) * SIN( RADIANS( lat ) ) ) ) AS distance
				FROM VISITOR
				HAVING distance <='$miles'
				ORDER BY distance";

				$result= $conn->returnQuery($query);
				echo "
				<br>
				";
				if ($result->num_rows > 0) {
				echo"
				<div class='table-responsive'>
					<table class='table table-hover table-condensed'>
						<tr>
							<th>First Name </th>
							<th>Last Name </th>
							<th>City </th>
							<th>State </th>
							<th>Zipcode </th>
							<th>Distance Miles </th>
						</tr>

						";
						$csvdata = array();

						while($row = $result->fetch_assoc())
						{

						$csvdata[]=array($row["Fname"],$row["Lname"],$row["City"], $row["Zipcode"],$row["State"],$row["distance"]);
						echo"
						<tr>
							<td><a href='visitor.php?id={$row["id"]}'>{$row["Fname"]}</a></td>
							<td>{$row["Lname"]}</td>
							<td>{$row["City"]}</td>
							<td>{$row["State"]}</td>
							<td>{$row["Zipcode"]}</td>
							<td>{$row["distance"]}</td>
						</tr>
						";

						}
						echo"
					</table>
				</div>"."\n";
				}

				echo "
				<br>
				";

				}
				?>

			</div>
		</div>

	</body>
	<footer>
		<div class="foot ">
			<p>
				&copy;2017 Monroe West Monroe Visitor Center
			</p>

		</div>
	</footer>

</html>
