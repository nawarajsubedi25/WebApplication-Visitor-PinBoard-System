<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Registration </title>
    <script src="https://s.codepen.io/assets/libs/modernizr.js" type="text/javascript"></script>
    <script src="js/Registration.js"></script>
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css'>
    <!--link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.0/css/bootstrapValidator.min.css'-->
    <link rel="stylesheet" href="css/Registration.css">

</head>

<body>
    <section id="contact">
        <div class="container">

            <form class="well form-horizontal" action="data.php" method="post" id="contact_form">
                <fieldset>

                    <!-- Form Name -->
                    <legend>Monroe-West Monroe Convention and Visitors Bureau (CVB)</legend>

                     <!-- Text input-->

                    <div class="form-group">
                        <label for="zipCode" class="col-md-4 control-label">Zip Code</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                <input name="zipCode" id="zipCode" placeholder="Zip Code" class="form-control" type="text">
                            </div>
                        </div>
                    </div>

                    <!-- Text input-->

                    <div class="form-group">
                        <label for="cityName" class="col-md-4 control-label">City</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                                <div id="city_dropdown">
                                    <input name="cityName" id="cityName" placeholder="City" class="form-control" type="text">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Select Basic -->

                    <div class="form-group">
                        <label for="stateName" class="col-md-4 control-label">State</label>
                        <div class="col-md-5 selectContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
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
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="countryName" class="col-md-4 control-label">Country</label>
                        <div class="col-md-5 selectContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-flag"></i></span>
                                <select name="countryName" id="countryName" class="form-control selectpicker" type="selectBox">
                                    <option value="">Select your Country</option>
                                    <option value="US">United States</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AX">Åland Islands</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AG">Antigua and Barbuda</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia, Plurinational State of</option>
                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="BA">Bosnia and Herzegovina</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="IO">British Indian Ocean Territory</option>
                                    <option value="BN">Brunei Darussalam</option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">Central African Republic</option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">Cocos (Keeling) Islands</option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Côte d'Ivoire</option>
                                    <option value="HR">Croatia</option>
                                    <option value="CU">Cuba</option>
                                    <option value="CW">Curaçao</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">Dominican Republic</option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="TF">French Southern Territories</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GG">Guernsey</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HM">Heard Island and McDonald Islands</option>
                                    <option value="VA">Holy See (Vatican City State)</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IR">Iran, Islamic Republic of</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IM">Isle of Man</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JE">Jersey</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                    <option value="KR">Korea, Republic of</option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LA">Lao People's Democratic Republic</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">Libya</option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macao</option>
                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="FM">Micronesia, Federated States of</option>
                                    <option value="MD">Moldova, Republic of</option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="ME">Montenegro</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">Northern Mariana Islands</option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PK">Pakistan</option>
                                    <option value="PW">Palau</option>
                                    <option value="PS">Palestinian Territory, Occupied</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Réunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">Russian Federation</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="BL">Saint Barthélemy</option>
                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                    <option value="KN">Saint Kitts and Nevis</option>
                                    <option value="LC">Saint Lucia</option>
                                    <option value="MF">Saint Martin (French part)</option>
                                    <option value="PM">Saint Pierre and Miquelon</option>
                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">Sao Tome and Principe</option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="RS">Serbia</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                    <option value="SK">Slovakia</option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                    <option value="SS">South Sudan</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">Syrian Arab Republic</option>
                                    <option value="TW">Taiwan, Province of China</option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">Tanzania, United Republic of</option>
                                    <option value="TH">Thailand</option>
                                    <option value="TL">Timor-Leste</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">Trinidad and Tobago</option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">Turks and Caicos Islands</option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">United Arab Emirates</option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="UM">United States Minor Outlying Islands</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">Virgin Islands, British</option>
                                    <option value="VI">Virgin Islands, U.S.</option>
                                    <option value="WF">Wallis and Futuna</option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label">First Name</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input name="firstName" placeholder="First Name" class="form-control" type="text">
                            </div>
                        </div>
                    </div>

                    <!-- Text input-->

                    <div class="form-group">
                        <label class="col-md-4 control-label">Last Name</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input name="lastName" placeholder="Last Name" class="form-control" type="text">
                            </div>
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Number In Party</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                                <input name="noInParty" placeholder="Enter the Number" class="form-control" type="text">
                            </div>
                        </div>
                    </div>

                    <!-- Text input-->
                    <div class="form-group">
                        <label class="col-md-4 control-label">E-Mail(Optional)</label>
                        <div class="col-md-5 inputGroupContainer">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                <input name="email" placeholder="E-Mail Address (Optional)" class="form-control" type="text">
                            </div>
                        </div>
                    </div>

                    <!-- radio checks -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Traveling for?</label>
                        <div class="col-md-6">
                                    <div class="radio-inline">
                                        <label>
                                            <input type="radio" name="TravelingFor" value="business" Checked/> Business
                                        </label>
                                    </div>
                                    <div class="radio-inline">
                                        <label>
                                            <input type="radio" name="TravelingFor" value="Pleasure" /> Pleasure
                                        </label>
                                    </div>
                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="TravelingFor" value="Convention" /> Convention
                                </label>
                            </div>

                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="TravelingFor" value="Others" /> Others
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- radio checks -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">How did you hear about the Monroe West Monroe CVB?</label>
                        <div class="col-md-6">
                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="HowDidYouHear" value="Billboard" Checked/> Billboard
                                </label>

                            </div>
                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="HowDidYouHear" value="Interstate Signs" /> Interstate Signs
                                </label>
                                <br>
                            </div>
                                    <div class="radio-inline">
                                        <label>
                                            <input type="radio" name="HowDidYouHear" value="Others" /> Others
                                        </label>
                                    </div>
                        </div>
                    </div>
                    <!-- radio checks -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">Are you going to stay in a Monroe-West Monroe hotel?</label>
                        <div class="col-md-6">
                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="DidYouStay" value="yes" Checked/> Yes
                                </label>
                            </div>
                            <div class="radio-inline">
                                <label>
                                    <input type="radio" name="DidYouStay" value="no" /> No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                    <label class="col-md-2 control-label"> </label>
                       <div class="col-md-8 checkbox">
                           <input type="checkbox" name="emailYes" value="Bike"> I would like to receive monthly emails about Monroe-West Monroe events.
                           </div>
                    </div>
                    <!-- Button -->
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4">
                        <div id="floating-pane1">
                            <button type="submit" class="btn btn-success btn-lg">Submit Registration <span class="glyphicon glyphicon-send"></span>
                            </button>
                        </div>
                        <div id="floating-pane2">
                            <button type="reset" class="btn btn-danger btn-lg">Reset Form <span class="glyphicon glyphicon-refresh"></span>
                            </button>
                        </div>
                        <div id="floating-pane3">
                            <a href="index.php" class="btn btn-warning btn-lg"><span class="glyphicon glyphicon-step-backward"></span> Return Home </a>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </section>
    <script>
        $(document).ready(function() {
            var address = '';
            var query = window.location.search.substring(1);
            if (query) {
                var address = query.replace(/%20/g, " ");
                if (address.substring(0, 13) == "Unnamed Road,") {
                    address = address.substring(13);
                }
            }
            var city = '';
            var state = '';
            var country = '';
            var zipcode = '';
            //make a request to the google geocode api
            $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + address)
                .success(function(response) {
                    //find the city and state
                    var address_components = response.results[0].address_components;
                    var lat = response.results[0].geometry.location.lat;
                    var lng = response.results[0].geometry.location.lng;
                    // alert(lat);
                    //alert(lng);
                    $.each(address_components, function(index, component) {
                        var types = component.types;
                        $.each(types, function(index, type) {
                            if (type == 'locality') {
                                city = component.long_name;
                            }
                            if (type == 'administrative_area_level_1') {
                                state = component.short_name;
                            }
                            if (type == 'country') {
                                country = component.short_name;
                            }
                            if (type == 'postal_code') {
                                zipcode = component.short_name;
                            }
                        });
                    });

                    $('#cityName').val(city);
                    document.getElementById("cityName").style.color = '#700404';
                     if (document.getElementById("cityName").value)
                                   {
                                   document.getElementById("cityName").style.backgroundColor = '#c4ad2b';
                                   }

                    $('#zipCode').val(zipcode);
                    document.getElementById("zipCode").style.color = '#700404';
                     if (document.getElementById("zipCode").value)
                                   {
                                   document.getElementById("zipCode").style.backgroundColor = '#c4ad2b';
                                   }


                    $('#stateName').val(state);
                    document.getElementById("stateName").style.color = '#700404';
                     if (document.getElementById("stateName").value)
                                   {
                                   document.getElementById("stateName").style.backgroundColor = '#c4ad2b';
                                   }
                    $('#countryName').val(country);
                    document.getElementById("countryName").style.color = '#700404';
                    if (document.getElementById("countryName").value)
                                   {
                                   document.getElementById("countryName").style.backgroundColor = '#c4ad2b';
                                   }

                });
        });
    </script>
    <script>
        $(document).ready(function() {
            $('#zipCode').keyup(function() {
                if ($(this).val().length >= 5) {
                    var city = '';
                    var state = '';
                    var country = '';
                    var zipcode = $(this).val();;
                    //make a request to the google geocode api
                    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode)
                        .success(function(response) {
                            //find the city and state
                            var address_components = response.results[0].address_components;
                            $.each(address_components, function(index, component) {
                                var types = component.types;
                                $.each(types, function(index, type) {
                                    if (type == 'locality') {
                                        city = component.long_name;
                                    }
                                    if (type == 'administrative_area_level_1') {
                                        state = component.short_name;
                                    }
                                    if (type == 'country') {
                                        country = component.short_name;
                                    }
                                    if (type == 'postal_code') {
                                        zipcode = component.short_name;
                                    }
                                });
                            });
                            //pre-fill the city ,state and country
                            var cities = response.results[0].postcode_localities;
                            if (cities) {
                                //turn city into a dropdown if necessary
                                var $select = $(document.createElement('select'));
                                console.log(cities);
                                $.each(cities, function(index, locality) {
                                    var $option = $(document.createElement('option'));
                                    $option.html(locality);
                                    $option.attr('value', locality);
                                    if (city == locality) {
                                        $option.attr('selected', 'selected');
                                    }
                                    $select.append($option);
                                });
                                $select.attr('id', 'cityName');
                                $('#city_dropdown').html($select);
                            } else {
                                $('#cityName').val(city);
                                   document.getElementById("cityName").style.color = '#700404';
                                   if (document.getElementById("cityName").value)
                                   {
                                   document.getElementById("cityName").style.backgroundColor = '#c4ad2b';
                                   }

                            }

                            $('#stateName').val(state);
                            document.getElementById("stateName").style.color = '#700404';
                            if (document.getElementById("stateName").value)
                                   {
                                   document.getElementById("stateName").style.backgroundColor = '#c4ad2b';
                                   }

                            $('#countryName').val(country);
                            document.getElementById("countryName").style.color = '#700404';
                            if (document.getElementById("countryName").value)
                                   {
                                   document.getElementById("countryName").style.backgroundColor = '#c4ad2b';
                                   }
                            $('#zipCode').val(zipcode);
                            document.getElementById("zipCode").style.color = '#700404';
                            if (document.getElementById("zipCode").value)
                                   {
                                   document.getElementById("zipCode").style.backgroundColor = '#c4ad2b';
                                   }


                        });
                }
            });
        });
    </script>

    <script src='js/bootstrapvalidator.min.js'></script>
    <script src="js/index.js"></script>
</body>

</html>