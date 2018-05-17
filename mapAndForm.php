<html>

	<head>
		<title>Welcome to Kathamndu, Nepal</title>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<!-- Address autofill plugin -->
		<script src="js/Registration.js"></script>

		<!-- Bootstrap CSS -->
		<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
		<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css'>
		<link rel="stylesheet" href="css/mapAndForm.css">
		<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

		<!-- Google Map -->
		<script src="https://maps.google.com/maps/api/js?v=3.9&libraries=places&amp;sensor=false"></script>

		<!-- Form Validation Plugin -->
		<script type="text/javascript" src="formvalidation/jquery-1.10.2.min.js"></script>
		<script src="js/addressAjax.js"></script>
		<script>
			window.onload = function() {
				// Initialize variables
				var encodedString;
				var address;
				var markerCluster;
				var marker;
				var x;
				var positionArray = [];
				var result = [];
				var markerMoved = false;
				var stringArray,
				    markers = [];
				var userMarker = [];
				var clusterClicked = false;
				var summaryPanel = document.getElementById('addressRefine');
				summaryPanel.innerHTML = "";
				var gm = google.maps;
				/******** Initialize Map **********/
				var map = new gm.Map(document.getElementById('map_canvas'), {
					zoom : 4,
					minZoom : 3,
					center : {
						lat : 39.81528751808606,
						lng : -99.5625000167638
					},
				});

				/*********************************/
				// Initialize variables
				var geocoder = new gm.Geocoder();
				var iw = new gm.InfoWindow();
				var oms = new OverlappingMarkerSpiderfier(map, {
					markersWontMove : true,
					markersWontHide : true
				});
				var shadow = new gm.MarkerImage(new gm.Size(37, 34), new gm.Point(0, 0),
				// anchor - where to meet map location
				new gm.Point(10, 34));
				/****** Set the Infowindow of marker **********/
				oms.addListener('click', function(marker) {
					iw.setContent(marker.desc);
					iw.open(map, marker);
				});
				/*************** Show multiple marker of same place**********/
				oms.addListener('spiderfy', function(markers) {
					for (var i = 0; i < markers.length; i++) {
						markers[i].setIcon('images/defultMarker.png');
						markers[i].setShadow(null);
					}
					iw.close();
				});
				/********** Closed Multiple marker of same place *******/
				oms.addListener('unspiderfy', function(markers) {
					for (var i = 0; i < markers.length; i++) {
						markers[i].setIcon("images/iconRed.png");
						markers[i].setShadow(shadow);
					}
				});
				/******* Mark pin on Map form the values of database *************/
				var bounds = new gm.LatLngBounds();
				encodedString = document.getElementById("encodedString").value;
				stringArray = encodedString.split("END");
				for ( x = 0; x < stringArray.length; x = x + 1) {
					var addressDetails = [];
					addressDetails = stringArray[x].split("ZIPCODE");
					setMarker(map, addressDetails);
				}

				function setMarker(map, addressDetails) {
					var lat = new gm.LatLng(addressDetails[1], addressDetails[2]);
					bounds.extend(lat);
					marker = new gm.Marker({
						map : map,
						position : lat,
						content : addressDetails[0],
						title : addressDetails[0]
					});
					marker.desc = addressDetails[0];
					oms.addMarker(marker);
					markers.push(marker);
				}

				/********* MarkerClusterer to show the no of visitor from that place *******/
				var mcOptions = {
					gridSize : 50,
					maxZoom : 15,
					imagePath : 'images/m'
				};
				markerCluster = new MarkerClusterer(map, markers, mcOptions);
				/*****************************************************************************/
				var geocoder = new google.maps.Geocoder();
				var address = document.getElementById("address").value;
				if (address !== "") {
					geocoder.geocode({
						'address' : address
					}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {

							var bounds = new google.maps.LatLngBounds();
							bounds.extend(results[0].geometry.location);
							map.fitBounds(bounds);
							map.setZoom(7);

						}

					});
				}

				/***********************************************************************************************
				 Mark on the Map
				 ***********************************************************************************************/
				function getReverseGeocodingData(latlng) {
					// summaryPanel.innerHTML = "";
					geocoder = new gm.Geocoder();
					geocoder.geocode({
						'latLng' : latlng
					}, function(results, status) {
						// This is checking to see if the Geoeode Status is OK before proceeding
						if (status == gm.GeocoderStatus.OK) {
							console.log(results);
							address = (results[0].formatted_address);
							if (!markerMoved) {
								placeMarker(latlng, address);
								positionArray = [latlng.lat(), latlng.lng()];
								markerMoved = true;
							} else {
								result = [latlng.lat(), latlng.lng()];
								transition(result);
							}
						}
					});
				}

				function placeMarker(location, address) {
					marker = new gm.Marker({
						position : location,
						map : map,
						content : address,
						animation : gm.Animation.DROP,
						title : address,
						draggable : true,
						icon : 'images/visitorMarker.png'
					});
					summaryPanel.innerHTML = address;
					marker.addListener('dragend', handleEvent);
					marker.desc = address;
					oms.addMarker(marker);
					userMarker.push(marker);
				}

				/*******************************************************************************/
				/******************* Pin Marker on Map only when it is not clicked on Cluster ***/
				gm.event.addListener(map, 'click', function(event) {
					// setTimeout to relay the map click event to be the last thing javascript should execute
					setTimeout(function() {
						if (!clusterClicked) {
							// call the function to pin on map
							getReverseGeocodingData(event.latLng);

							// To execute the show hide effect
							showhide();
							clusterClicked = false;
						} else {
							clusterClicked = false;
						}
					}, 0);
				});
				/******************** Clear all marker from Map ********************************/
				function clearMarkers(map) {
					for (var i = 0; i < userMarker.length; i++) {
						userMarker[i].setMap(map);
					}
				}

				/**************************************************************************************
				 Click event for MarkerCluster. If click on MarkerCluster then it will zoom on
				 Markercluster insted of mark on Map
				 **************************************************************************************/
				gm.event.addListener(markerCluster, "clusterclick", function(cluster) {
					cluster.stopPropagation();
					clusterClicked = true;
				});

				var numDeltas = 100;
				var delay = 10;
				//milliseconds
				var i = 1;
				var deltaLat;
				var deltaLng;

				function transition(result) {
					i = 1;
					deltaLat = (result[0] - positionArray[0]) / numDeltas;
					deltaLng = (result[1] - positionArray[1]) / numDeltas;
					moveMarker();
				}

				/**********************************************************
				 Marker moving animation
				 *********************************************************/
				function moveMarker() {
					positionArray[0] += deltaLat;
					positionArray[1] += deltaLng;
					var latlng = new google.maps.LatLng(positionArray[0], positionArray[1]);
					marker.setPosition(latlng);
					if (i == numDeltas) {
						clearMarkers(null);
						// Delete previous marker at the end of moving
						marker = new gm.Marker({
							position : latlng,
							map : map,
							content : address,
							title : address,
							draggable : true,
							icon : 'images/visitorMarker.png'
						});
						summaryPanel.innerHTML = address;
						marker.addListener('dragend', handleEvent);
						marker.desc = address;
						oms.addMarker(marker);
						userMarker.push(marker);
					}
					if (i != numDeltas) {
						i++;
						setTimeout(moveMarker, delay);
					}
				}

				/******************************************************************************
				 Drage Event on Marker
				 *****************************************************************************/
				function handleEvent(event) {
					updateMarkerAddress(marker.getPosition());
					showhide();
				}

				/********************************************************************************
				 Update Marker address after dragging
				 *******************************************************************************/
				function updateMarkerAddress(latlng) {
					// summaryPanel.innerHTML = "";
					geocoder = new gm.Geocoder();
					geocoder.geocode({
						'latLng' : latlng
					}, function(results, status) {
						/*************************************************
						 if No address is availabe in drag end position
						 *************************************************/
						if (status !== gm.GeocoderStatus.OK) {
							var latitudeLangutide = new google.maps.LatLng(positionArray[0], positionArray[1]);
							clearMarkers(null);
							marker = new gm.Marker({
								position : latitudeLangutide,
								map : map,
								content : address,
								title : address,
								draggable : true,
								icon : 'images/visitorMarker.png'
							});
							summaryPanel.innerHTML = address;
							marker.addListener('dragend', handleEvent);
							marker.desc = address;
							oms.addMarker(marker);
							userMarker.push(marker);
						}
						// This is checking to see if the Geoeode Status is OK before proceeding
						else {
							console.log(results);
							address = (results[0].formatted_address);
							updateMarkerPosition(latlng, address);
							positionArray = [latlng.lat(), latlng.lng()];
						}
					});
				}

				/***************************************************************
				 Delete the last marker and create marker in drag end position
				 ***************************************************************/
				function updateMarkerPosition(latlng, address) {
					clearMarkers(null);
					marker = new gm.Marker({
						position : latlng,
						map : map,
						content : address,
						title : address,
						draggable : true,
						icon : 'images/visitorMarker.png'
					});
					summaryPanel.innerHTML = address;
					marker.addListener('dragend', handleEvent);
					marker.desc = address;
					oms.addMarker(marker);
					userMarker.push(marker);
				}

				/******************************* Zoom In and Zoom Out*********************************/
				// Setup the click event listener - zoomIn
				gm.event.addDomListener(document.getElementById('plus'), 'click', function() {
					map.setZoom(map.getZoom() + 1);
				});
				// Setup the click event listener - zoomOut
				gm.event.addDomListener(document.getElementById('minus'), 'click', function() {
					map.setZoom(map.getZoom() - 1);
				});
				/********************************************************************************/
				/***********************************
				 * Show and hide events
				 */
				function showhide() {
					$('#introtext').hide();
					$('#greetingtext').hide();
					$('#addresstext').show();
				}

			};
		</script>
	</head>
	<body>
		<!-- PHP TO CONNECT DATABASE TO MAP -->
		<?php
		include 'DatabaseConnection.php';
		$raj= new DatabaseConnection();
		$query = "SELECT * FROM VISITOR";
		$result= $raj->returnQuery($query);
		$encodedString = "";
		$x= 0;
		while ($row = $result->fetch_array()) {
		if ($x == 0) {
		$separator = "";
		} else {
		$separator = "END";
		}
		$encodedString = $encodedString . $separator .
		$row[1]." ".$row[2]." ".$row[3]." ".$row[4]." ".$row[5]." ".$row[6].
		"ZIPCODE".$row[14]."ZIPCODE".$row[15];;
		$x = $x + 1;
		}
		?>
		<input style="display:none" type="hidden" id="address" name="address" class="textbox" placeholder="Provide Your Location" value="<?php echo $_POST["address"];?>" >
		<!-- Hiddend div to pass the lat-lng and information to pin the map from the database -->
		<input style="display:none" type="hidden" id="encodedString" name="encodedString"  value="<?php echo $encodedString;?>" />

		<div class="container-fluid">

			<div class = "row " id="mapandinfo" >
				<div class = "col-lg-4"  id="thankyou">
					<div id= "logo">
						<img src="images/nepalTourismBoard.jpg">
					</div>

					<div id="text">
						<div class="welcomeText" id="introtext">
							<h2><span class="glyphicon glyphicon-map-marker mapicon"></span>Pin your location on the map.</h2>
						</div>
						<div class= "welcomeText"  id="addresstext" style="display:none" >
							<h3>Your address : </h3><h2><div id = "addressRefine" style="display:none;"></div><span class="glyphicon glyphicon-map-marker mapicon"></span><div class="well" id="Output"></div></h2>
							<br>
							<br>
							<br>
							<h3>Reclick or drag the pin to change</h3>
							<h3><span class="glyphicon glyphicon-forward"></span>Hit Next to confirm</h3>
							<button style="float:right"class="btn btn-primary btn-lg" id="next" onclick="myFunction()">
								Next
							</button>
						</div>

						<div class= "welcomeText" id="greetingtext" style="display:none">
							<h3 style="">Thank You for visiting Monroe, Lousiana.</h3>

							<h3 style="text-align:center; font-size:30px;"><span class="glyphicon glyphicon-envelope mapicon"></span><div class="well" id="well"></div></h3>
							<br>
							<br>
							<h3>Please help us provide better service by answering few questions.</h3>
							<form action="thankyou.php" method="post">
								<div class="form-group" style="display:none">
									<input name="zipCode" id="zip" class="form-control" type="text">
									<input name="cityName" id="city"  class="form-control" type="text">
									<select name="stateName" id="state" class="form-control selectpicker" type="selectBox">
										<option value="">Chose a State</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District Of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
									<input name="countryName" id="country" class="form-control" type="text">
								</div>

								<button type="submit" id="no" class="btn btn-danger btn-lg" name="finalsubmit"  value="clicke">
									No
								</button>
								<a href="#threeQuestions" style="float:right" id="yes" class="btn btn-primary btn-lg">Yes</a>
							</form>

						</div>
					</div>
				</div>
				<div class = "col-lg-8"  id="map" >
					<div id="map_canvas"></div>
					<div id ="zoomers" >
						<button id="plus">
							+
						</button>
						<br>
						<button id="minus">
							-
						</button>
					</div>
				</div>
			</div>
			<form action = "thankyou.php" method = "post" id="contact_form" class="form-horizontal">
				<div class = "question eachSection" id="threeQuestions"  style="display:none">
					<div class="form-group">
						<legend>
							Please select your purpose of travel.
						</legend>
						<div class="right-inner-addon">
							<label class="radio-inline">
								<input type="radio" name="TravelingFor" value="Business">
								Business</label>
							<label class="radio-inline">
								<input type="radio" name="TravelingFor" value="Pleasure">
								Pleasure</label>
							<label class="radio-inline">
								<input type="radio" name="TravelingFor" value="Convention">
								Convention</label>
							<label class="radio-inline">
								<input type="radio" name="TravelingFor" value="Others">
								Others</label>
						</div>
					</div>

					<div class="form-group">
						<legend>
							How did you hear about us?
						</legend>
						<div class="right-inner-addon">
							<label class="radio-inline">
								<input type="radio" name="HowDidYouHear"value="Billboard">
								Billboard</label>
							<label class="radio-inline">
								<input type="radio" name="HowDidYouHear" value="Interstate">
								Interstate Signs</label>
							<label class="radio-inline">
								<input type="radio" name="HowDidYouHear" value="Others">
								Others</label>
						</div>
					</div>

					<div class="form-group">
						<legend>
							Are you going to stay in hotel near Kathamndu?
						</legend>
						<div class="right-inner-addon">
							<label class="radio-inline">
								<input type="radio" name="DidYouStay" value="Yes">
								Yes</label>
							<label class="radio-inline">
								<input type="radio" name="DidYouStay" value = "No">
								No</label>
						</div>
					</div>
					<!--------- Hidden for input type for zip, city, state and country ------------>
					<div class="form-group" style="display:none">
						<input name="zipCode" id="zipCode" class="form-control" type="text">
						<input name="cityName" id="cityName"  class="form-control" type="text">
						<select name="stateName" id="stateName" class="form-control selectpicker" type="selectBox">
							<option value="">Chose a State</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
						<input name="countryName" id="countryName" class="form-control" type="text">
					</div>
					<a style = "float:right" href="#nameAndEmail" id='linkToNameAndEmail' class="btn btn-primary btn-lg">Next</a>
				</div>
				<div class="question eachSection" id='nameAndEmail' style="display:none">
					<div class=" row form-group">
						<div class="col-sm-4 ">
							<div class="right-inner-addon">
								<input class="form-control input-lg" name="firstName" placeholder="First name" type="text">
							</div>
						</div>
						<div class="col-sm-4">
							<div class="right-inner-addon">
								<input class="form-control input-lg"  name="lastName" type="text" placeholder="Last name">
							</div>
						</div>
					</div>
					<div class="row form-group" >
						<div class="col-lg-8">
							<div class="right-inner-addon">
								<input class="form-control input-lg" name="noInParty" placeholder="Enter the number in party">
							</div>
						</div>
					</div>
					<div class="row form-group">
						<div class="col-lg-8">
							<input type="checkbox" name="emailYes" id="emailYes" onclick="ShowHideDiv(this)">
							<p style="font-size:28px;display:inline">
								I would like to receive monthly emails about  events from Nepal Tourism Board.
							</p>
						</div>
					</div>

					<div class="row form-group" id="emailAsk" style="display:none">
						<div class="col-lg-8">
							<div class="right-inner-addon">
								<input class="form-control input-lg" data-placement="left" type="text" data-toggle="popover" data-content="What's your email ?" name="email" type="text" placeholder="Email">
							</div>
						</div>
					</div>
					<div id="submitbutton">
						<button style = "float:right" type="submit" id ="finalsubmit" class="btn btn-success btn-lg" name="finalsubmit"  value="clicke">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	</body>

	<!--- Script to print the Address and fill the address information on input filed --->
	<script>
		$(document).ready(function() {
			$('#addressRefine').bind("DOMSubtreeModified", function() {
				var address = document.getElementById("addressRefine").innerHTML;
				if (address !== "") {
					address = address.replace(/%20/g, " ");
					if (address.substring(0, 13) == "Unnamed Road,") {
						address = address.substring(13);
					}

					var city = '';
					var state = '';
					var country = '';
					var zipcode = '';
					//make a request to the google geocode api
					$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + address).success(function(response) {
						//find the city and state
						var address_components = response.results[0].address_components;
						var refineaddress = "";
						$.each(address_components, function(index, component) {
							var types = component.types;
							$.each(types, function(index, type) {
								if (type == 'locality') {
									city = component.long_name;

								}
								if (type == 'administrative_area_level_1') {
									state = component.short_name;

								}
								if (type == 'postal_code') {
									zipcode = component.short_name;

								}
								if (type == 'country') {
									country = component.short_name;

								}

							});
						});

						/*  To Generate better Output of the address ( City, State Zip, Country */

						if (city !== "") {
							refineaddress = city + ", ";
						}

						if (state !== "") {
							refineaddress += state + " ";
						}

						if (zipcode !== "") {
							refineaddress += zipcode + ", ";
						}
						if (country !== "") {
							refineaddress += country;
						}
						/************************
						 *  Show address in div after user pin the location
						 */
						document.getElementById("Output").innerHTML = refineaddress;
						/**************************
						 * Auto fill address in respective input
						 */
						$('#cityName').val(city);
						$('#city').val(city);

						$('#zipCode').val(zipcode);
						$('#zip').val(zipcode);

						$('#stateName').val(state);
						$('#state').val(state);

						$('#countryName').val(country);
						$('#country').val(country);

					});
				}
			});
		});
	</script>
	<script type="text/javascript">
		function ShowHideDiv(emailYes) {
			var emailAsk = document.getElementById("emailAsk");
			emailAsk.style.display = emailYes.checked ? "block" : "none";
		}
	</script>

	<!-- Map and Auto fill -->
	<script src="js/jquery.min.js"></script>
	<script src="js/showhide.js"></script>
	<script src="js/markerclusterer.js"></script>
	<script src="js/oms.min.js"></script>

	<!-- Pop Over effect -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.easing.min.js"></script>

	<!-- Slide Effect-->
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	<script src="https://ui.jquery.com/latest/ui/effects.core.js"></script>
	<script src="https://ui.jquery.com/latest/ui/effects.slide.js"></script>

	<!-- Form Validation Js -->
	<script type="text/javascript" src="formvalidation/bootstrap.min.js"></script>
	<script type="text/javascript" src="formvalidation/bootstrapValidator.js"></script>
	<script src="js/index.js"></script>

</html>