var qErrFlag = 0;
	var qErrFlagbot = 0;
	var qErrFlagAgent = 0;
	var CUR_FILE = '';
	var CUR_POS = '';
	var Cat_Map_Arr = {};
	var Loc_Map_Arr = {
		"delhi" : "delhi",
		"patna" : "patna",
		"mumbai" : "mumbai",
		"bangalore" : "bangalore",
		"gurgaon" : "gurgaon",
		"noida" : "noida",
		"chennai" : "chennai",
		"pune" : "pune",
		"hyderabad" : "hyderabad",
		"kolkata" : "kolkata",
		"ahmedabad" : "ahmedabad",
		"chandigarh" : "chandigarh",
		"andaman nicobar" : "andaman-and-nicobar-islands",
		"port blair" : "port-blair",
		"andhra pradesh" : "andhra-pradesh",
		"visakhapatnam" : "visakhapatnam-vizag",
		"vijayawada" : "vijayawada",
		"nellore" : "nellore",
		"guntur" : "guntur",
		"tirupati" : "tirupati",
		"rajahmundry" : "rajahmundry",
		"warangal" : "warangal",
		"kakinada" : "kakinada",
		"kurnool" : "kurnool",
		"anantapur" : "anantapur",
		"nizamabad" : "nizamabad",
		"guntakal" : "guntakal",
		"adilabad" : "adilabad",
		"cuddapah" : "cuddapah-kadapa",
		"kamalapuram" : "kamalapuram",
		"karimnagar" : "karimnagar",
		"khammam" : "khammam",
		"arunachal pradesh" : "arunachal-pradesh",
		"itanagar" : "itanagar",
		"assam" : "assam",
		"guwahati" : "guwahati",
		"silchar" : "silchar",
		"dimapur" : "dimapur",
		"tezpur" : "tezpur",
		"bihar" : "bihar",
		"bhagalpur" : "bhagalpur",
		"muzaffarpur" : "muzaffarpur",
		"gaya" : "gaya",
		"munger" : "munger",
		"chandigarh" : "chandigarh",
		"chhattisgarh" : "chhattisgarh",
		"raipur" : "raipur",
		"bilaspur" : "bilaspur",
		"bhilai" : "bhilai",
		"raigarh" : "raigarh",
		"dadra nagar haveli" : "dadra-and-nagar-haveli",
		"silvassa" : "silvassa",
		"daman and diu" : "daman-and-diu",
		"goa" : "goa",
		"panjim" : "panjim",
		"vasco da gama" : "vascodagama",
		"gujarat" : "gujarat",
		"vadodara baroda" : "vadodara-baroda",
		"surat" : "surat",
		"rajkot" : "rajkot",
		"vapi" : "vapi",
		"bharuch" : "bharuch",
		"ankleshwar" : "ankleshwar",
		"gandhinagar" : "gandhinagar",
		"bhuj" : "bhuj",
		"jamnagar" : "jamnagar",
		"anand" : "anand",
		"bhavnagar" : "bhavnagar",
		"valsad" : "valsad",
		"kandla" : "kandla",
		"porbandar" : "porbandar",
		"mundra" : "mundra",
		"veraval" : "veraval",
		"godhra" : "godhra",
		"junagadh" : "junagadh",
		"lakhtar" : "lakhtar",
		"surendranagar" : "surendranagar",
		"haryana" : "haryana",
		"faridabad" : "faridabad",
		"ambala" : "ambala",
		"panipat" : "panipat",
		"karnal" : "karnal",
		"rohtak" : "rohtak",
		"hisar" : "hisar",
		"manesar" : "manesar",
		"kurukshetra" : "kurukshetra",
		"sonepat" : "sonepat",
		"panchkula" : "panchkula",
		"yamunanagar" : "yamunanagar",
		"rewari" : "rewari",
		"bawal" : "bawal",
		"dharuhera" : "dharuhera",
		"bhiwani" : "bhiwani",
		"jind" : "jind",
		"palwal" : "palwal",
		"himachal pradesh" : "himachal-pradesh",
		"baddi" : "baddi",
		"shimla" : "shimla",
		"kulu manali" : "kullu-manali",
		"kullu manali" : "kullu-manali",
		"dharmasala" : "dharmasala",
		"dalhousie" : "dalhousie",
		"chamba" : "chamba",
		"mandi" : "mandi",
		"jammu and kashmir" : "jammu-kashmir",
		"jammu" : "jammu",
		"srinagar" : "srinagar",
		"saudiarabia" : "saudi-arabia",
		"saudi arabia" : "saudi-arabia",
		"dubai" : "dubai",
		"oman" : "oman",
		"qatar" : "qatar",
		"united states (u.s)" : "usa",
		"united states" : "usa",
		"singapore" : "singapore",
		"kuwait" : "kuwait",
		"nigeria" : "nigeria",
		"bahrain" : "bahrain",
		"united kingdom (u.k)" : "uk",
		"united kingdom" : "uk",
		"australia" : "australia",
		"malaysia" : "malaysia",
		"indonesia" : "indonesia",
		"tanzania" : "tanzania",
		"canada" : "canada",
		"south africa" : "south-africa",
		"abu dhabi" : "abu-dhabi",
		"kenya" : "kenya",
		"libya" : "libya",
		"afghanistan" : "afghanistan",
		"uae" : "uae",
		"jharkhand" : "jharkhand",
		"jamshedpur" : "jamshedpur",
		"ranchi" : "ranchi",
		"bokaro" : "bokaro",
		"dhanbad" : "dhanbad",
		"karnataka" : "karnataka",
		"mysoru mysore" : "mysore",
		"mysore" : "mysore",
		"mangalore" : "mangalore",
		"hubli" : "hubli",
		"belgaum" : "belgaum",
		"bellary" : "bellary",
		"gulbarga" : "gulbarga",
		"dharwad" : "dharwad",
		"kolar" : "kolar",
		"bidar" : "bidar",
		"koppal" : "koppal",
		"shimoga" : "shimoga",
		"hospet" : "hospet",
		"tumkur" : "tumkur",
		"kerala" : "kerala",
		"ernakulam kochi cochin" : "ernakulam-kochi-cochin",
		"trivandrum" : "trivandrum",
		"kozhikode calicut" : "kozhikode-calicut",
		"thrissur trichur" : "thrissur-trichur",
		"kottayam" : "kottayam",
		"kollam quilon" : "kollam-quilon",
		"kannur cannannore" : "kannur-cannannore",
		"palakkad palghat" : "palakkad-palghat",
		"alappuzha alleppey" : "alappuzha-alleppey",
		"malappuram" : "malappuram",
		"pathanamthitta" : "pathanamthitta",
		"kasargode" : "kasargode",
		"idukki" : "idukki",
		"lakshadweep" : "lakshadweep",
		"minicoy" : "minicoy",
		"madhya pradesh" : "madhya-pradesh",
		"mp" : "madhya-pradesh",
		"indore" : "indore",
		"bhopal" : "bhopal",
		"jabalpur" : "jabalpur",
		"gwalior" : "gwalior",
		"ujjain" : "ujjain",
		"satna" : "satna",
		"ratlam" : "ratlam",
		"rewa" : "rewa",
		"maharashtra" : "maharashtra",
		"navi mumbai" : "navi-mumbai",
		"nagpur" : "nagpur",
		"nasik" : "nasik",
		"aurangabad" : "aurangabad",
		"kolhapur" : "kolhapur",
		"ahmednagar" : "ahmednagar",
		"raigad" : "raigad",
		"solapur" : "solapur",
		"jalgaon" : "jalgaon",
		"thane" : "thane",
		"satara" : "satara",
		"tarapur" : "tarapur",
		"akola" : "akola",
		"amravati" : "amravati",
		"baramati" : "baramati",
		"chiplun" : "chiplun",
		"dhule" : "dhule",
		"manipur" : "manipur",
		"imphal" : "imphal",
		"meghalaya" : "meghalaya",
		"shillong" : "shillong",
		"mizoram" : "mizoram",
		"aizawal" : "aizawal",
		"nagaland" : "nagaland",
		"kohima" : "kohima",
		"ncr" : "ncr-nct-of-delhi",
		"delhi ncr" : "ncr-nct-of-delhi",
		"faridabad" : "faridabad",
		"orissa" : "orissa",
		"bhubaneshwar" : "bhubaneshwar",
		"cuttack" : "cuttack",
		"rourkela" : "rourkela",
		"paradeep" : "paradeep",
		"puri" : "puri",
		"angul" : "angul",
		"pondicherry" : "pondicherry",
		"punjab" : "punjab",
		"ludhiana" : "ludhiana",
		"mohali" : "mohali",
		"amritsar" : "amritsar",
		"jalandhar" : "jalandhar",
		"bathinda" : "bathinda",
		"patiala" : "patiala",
		"pathankot" : "pathankot",
		"phagwara" : "phagwara",
		"rajpura" : "rajpura",
		"rupnagar" : "rupnagar",
		"sangrur" : "sangrur",
		"barnala" : "barnala",
		"hoshiarpur" : "hoshiarpur",
		"kapurthala" : "kapurthala",
		"firozpur" : "firozpur",
		"gurdaspur" : "gurdaspur",
		"kala" : "kala",
		"moga" : "moga",
		"morinda" : "morinda",
		"banur" : "banur",
		"faridkot" : "faridkot",
		"rajasthan" : "rajasthan",
		"jaipur" : "jaipur",
		"udaipur" : "udaipur",
		"jodhpur" : "jodhpur",
		"kota" : "kota",
		"ajmer" : "ajmer",
		"bhiwadi" : "bhiwadi",
		"bhilwara" : "bhilwara",
		"jaisalmer" : "jaisalmer",
		"alwar" : "alwar",
		"banswara" : "banswara",
		"bikaner" : "bikaner",
		"ganganagar" : "ganganagar",
		"nagar" : "nagar",
		"abu" : "abu",
		"sikkim" : "sikkim",
		"gangtok" : "gangtok",
		"tamil nadu" : "tamil-nadu",
		"chennai" : "chennai",
		"coimbatore" : "coimbatore",
		"madurai" : "madurai",
		"trichy" : "trichy",
		"hosur" : "hosur",
		"salem" : "salem",
		"erode" : "erode",
		"tirunelveli" : "tirunelveli",
		"vellore" : "vellore",
		"cuddalore" : "cuddalore",
		"tuticorin" : "tuticorin",
		"thanjavur" : "thanjavur",
		"nagercoil" : "nagercoil",
		"ooty" : "ooty",
		"kanchipuram" : "kanchipuram",
		"karur" : "karur",
		"kalpakkam" : "kalpakkam",
		"mamandur" : "mamandur",
		"tripura" : "tripura",
		"agartala" : "agartala",
		"uttarakhand" : "uttarakhand",
		"dehradun" : "dehradun",
		"roorkee" : "roorkee",
		"haridwar" : "haridwar",
		"rudrapur" : "rudrapur",
		"pantnagar" : "pantnagar",
		"uttar pradesh" : "uttar-pradesh",
		"up" : "uttar-pradesh",
		"ghaziabad" : "ghaziabad",
		"lucknow" : "lucknow",
		"agra" : "agra",
		"kanpur" : "kanpur",
		"meerut" : "meerut",
		"varanasi" : "varanasi",
		"allahabad" : "allahabad",
		"bareilly" : "bareilly",
		"gorakhpur" : "gorakhpur",
		"moradabad" : "moradabad",
		"aligarh" : "aligarh",
		"mathura" : "mathura",
		"faizabad" : "faizabad",
		"bahraich" : "bahraich",
		"gajraula" : "gajraula",
		"jhansi" : "jhansi",
		"orai" : "orai",
		"west bengal" : "west-bengal",
		"durgapur" : "durgapur",
		"siliguri" : "siliguri",
		"asansol" : "asansol",
		"haldia" : "haldia",
		"kharagpur" : "kharagpur"
	};

	function validate11(xt, form, msg, arrInline, agent, govt) {
		if (newflag == "DOWN") {
			newflag = "";
			return false;
		} else //if(flagUsedSuggestion)
		{
			if (gbi('hintbox'))
				hidetip();
			if (firstSuggestion != '') {
				if (elem_name == 'ql') {
					tmpStr = document.getElementById(elem_name).value;
					var arr_tmp = tmpStr.split(',');
					if (arr_tmp.length > 1) {
						tmpStr = trim(arr_tmp[arr_tmp.length - 1]);
						arr_tmp = arr_tmp.slice(0, arr_tmp.length - 1);
						tmpStr = arr_tmp.join(',');
						delete (arr_tmp);
						tmpStr = tmpStr + "," + firstSuggestion;
					} else
						tmpStr = firstSuggestion;
					document.getElementById(elem_name).value = tmpStr;
					delete (tmpStr);
				} else if (document.getElementById('fsug'))
					document.getElementById('fsug').value = firstSuggestion;
			}
		}
		document.getElementById('autosuggest1').style.display = "none";
		document.getElementById('autosuggest').style.display = "none";
		if (gbi('autosuggestbot1'))
			document.getElementById('autosuggestbot1').style.display = "none";
		if (gbi('autosuggestbot'))
			document.getElementById('autosuggestbot').style.display = "none";
		//		return false;
		//		return validate(xt,form,msg,arrInline,agent,govt);
		if (!validate(xt, form, msg, arrInline, agent, govt))
			return false;
		else {
			if (form == 'quickbarbot') {
				var formaction = document.quickbarbot;
				var fareaid = gbi('fareabotSL');
				var qlid = gbi('qlbot');
				if (qlid.value != ""
						&& fareaid.value == ''
						&& qlid.value != 'Enter city or state'
						&& Loc_Map_Arr[trim(qlid.value).toLowerCase()]
						&& (gbi('qpbot').value == ''
								&& gbi('expbotSL').value == ''
								&& (gbi('minSalbotSL').value == '-1' || gbi('minSalbotSL').value == '') && (gbi('maxSalbotSL').value == '-1' || gbi('maxSalbotSL').value == ''))) {
					if (gbi('idqi'))
						if (gbi('idqi').value == '')
							formaction.action = domain_cat
									+ "jobs-in-"
									+ Loc_Map_Arr[trim(qlid.value)
											.toLowerCase()];
					if (!gbi('idqi'))
						formaction.action = domain_cat + "jobs-in-"
								+ Loc_Map_Arr[trim(qlid.value).toLowerCase()];
				}
				if ((fareaid && fareaid.value != '' && Cat_Map_Arr[fareaid.value])) {
					if (gbi('qpbot').value == ''
							&& (gbi('qlbot').value == '' || gbi('qlbot').value == 'Enter city or state')
							&& gbi('expbotSL').value == ''
							&& (gbi('minSalbotSL').value == '-1' || gbi('minSalbotSL').value == '')
							&& (gbi('maxSalbotSL').value == '-1' || gbi('maxSalbotSL').value == '')) {
						if (gbi('idqi'))
							if (gbi('idqi').value == '')
								formaction.action = domain_cat
										+ Cat_Map_Arr[fareaid.value];
						if (!gbi('idqi'))
							formaction.action = domain_cat
									+ Cat_Map_Arr[fareaid.value];
					}
				}
				return true;
			} else {
				var formaction = document.forms[0];
				var fareaid = gbi('fareaSL');
				var qlid = gbi('ql');
				var qpid = gbi('qp');
				if (gbi('qp').value == ''
						&& (gbi('ql').value == '' || gbi('ql').value == 'Enter city or state')
						&& gbi('expSL').value == ''
						&& (gbi('minSalSL').value == '-1' || gbi('minSalSL').value == '')
						&& (gbi('maxSalSL').value == '-1' || gbi('maxSalSL').value == '')) {
					if ((fareaid && fareaid.value != '' && Cat_Map_Arr[fareaid.value])) {
						if (gbi('idqi'))
							if (gbi('idqi').value == '')
								formaction.action = domain_cat
										+ Cat_Map_Arr[fareaid.value];
						if (!gbi('idqi'))
							formaction.action = domain_cat
									+ Cat_Map_Arr[fareaid.value];
					}

				} else {
					if (qlid.value) {
						var finalloc = "";
						var arrloc = qlid.value.split(",");
						for (var i = 0; i < arrloc.length; i++)
							finalloc = finalloc
									+ ","
									+ correctlocationspell(arrloc[i].replace(
											/^[\s]+/, '').replace(/[\s]+$/, '')
											.replace(/[\s]{2,}/, ' '));
						qlid.value = finalloc.replace(/(^,)|(,$)/g, "");
					}

					if (form != 'msngr') {
						action = generateStaticURL(qpid.value, qlid.value);
						formaction.action = domain_cat + action;
					}
				}
				return true;
			}
			return false;
		}
		//		return flagUsedSuggestion;

	}
	function clearText(thefield) {
		if (thefield.name == "qp") {
			if (trim(thefield.value) == "Keyword")
				thefield.value = "";
		}
		if (trim(thefield.name) == "ql") {
			if (thefield.value == "location")
				thefield.value = "";
		}
	}
	function setText(thefield) {
		if (trim(thefield.value) == "") {
			if (thefield.name == "qp") {
				thefield.defaultValue = "Keyword";
				thefield.value = "Keyword";
			}
			if (thefield.name == "ql") {
				thefield.defaultValue = "location";
				thefield.value = "location";
			}
		}
	}
	function trim(inputString) {
		if (typeof inputString != "string") {
			return inputString;
		}
		var retValue = inputString;
		var ch = retValue.substring(0, 1);
		while (ch == " ") {
			retValue = retValue.substring(1, retValue.length);
			ch = retValue.substring(0, 1);
		}
		ch = retValue.substring(retValue.length - 1, retValue.length);
		while (ch == " ") {
			retValue = retValue.substring(0, retValue.length - 1);
			ch = retValue.substring(retValue.length - 1, retValue.length);
		}
		while (retValue.indexOf("  ") != -1) {
			retValue = retValue.substring(0, retValue.indexOf("  "))
					+ retValue.substring(retValue.indexOf("  ") + 1,
							retValue.length);
		}
		return retValue;
	}
	function checkCat(thisform, limit) {
		var c = 0;
		for (var i = 0; i < thisform.options.length; i++) {
			if (thisform.options[i].selected && thisform.options[i].value != "") {
				c++;
			}
		}
		if (c > 0 && thisform.options[0].value == "")
			thisform.options[0].selected = false;

		if (c > limit && limit) {
			alert("Please choose " + limit + " categories only !");
			for (var i = 0; i < thisform.options.length; i++) {
				if (thisform.options[i].selected) {
					thisform.options[i].selected = false;
					thisform.focus();
				}
			}
		}
	}
	function addOption(selectbox, value, text) {
		if (selectbox == null || selectbox == 'undefined')
			return;
		selectbox.options[selectbox.options.length] = new Option(text, value);
	}
	function removeAllOptions(selectbox) {
		if (selectbox == null || selectbox == 'undefined')
			return;
		var i;
		for (i = selectbox.options.length - 1; i >= 0; i--) {
			selectbox.remove(i);
		}
	}
	function change_qx(type, id) {
		if (!id) {
			var minid = 'minSal';
			var maxid = 'maxSal';
		} else {
			var minid = 'minSalbot';
			var maxid = 'maxSalbot';
		}
		if (document.getElementById(minid + "SL"))
			var dd_qm = document.getElementById(minid + "SL");
		else
			var dd_qm = document.getElementById("qm");
		if (document.getElementById(maxid + "SL"))
			var dd_qx = document.getElementById(maxid + "SL");
		else
			var dd_qx = document.getElementById("qx");

		if (type == 'off')
			dd_qm.value = dd_qx.value = -1;

		var min_value = parseInt(dd_qm.value);

		removeAllOptions(dd_qx);
		addOption(dd_qx, -1, 'Max');
		if (min_value < 0) {
			if (document.getElementById(maxid)) {
				document.getElementById(maxid).value = 'Max';
				document.getElementById(maxid).style.color = "#8D8D8D";
				document.getElementById(maxid + "SL").size = 2;
				document.getElementById(maxid + "SL").style.height = "16px";
			}
			return;
		} else if (min_value == 12477) {
			addOption(dd_qx, 12477, "< .5");
			min_value = 1;
		}

		var final_value = 50;
		var part = '';
		if (document.getElementById(maxid + "SL")
				&& typeof (adv_form) == 'undefined') {
			var maxddSize = final_value - min_value + 3;
			if (maxddSize < 10) {
				document.getElementById(maxid + "SL").size = maxddSize;
				document.getElementById(maxid + "SL").style.height = maxddSize
						* 14 + "px";
			} else {
				document.getElementById(maxid + "SL").size = 10;
				document.getElementById(maxid + "SL").style.height = "160px";
			}
		}
		while (min_value <= final_value) {
			if (min_value == 1)
				part = '';
			else
				part = '';
			var str = min_value;
			addOption(dd_qx, min_value, str + " " + part);
			min_value += 1;
		}
		delete (part);

		addOption(dd_qx, 10000000, "> 50");
	}

	function openForm(url) {
		url = url + "&r=" + Math.round((Math.random() * 100000));
		window.open(url, "_self");
		return false;
	}

	function validate(params, form, msg, arrInline, agent, govt) {
		if (form == 'quickbarbot')
			var msgid = 'divInlineErrMsgbot';
		else
			var msgid = 'divInlineErrMsg';

		var found = false;
		for (var form_loop = 0; form_loop < document.forms.length; form_loop++) {
			if (document.forms[form_loop].name == form) {
				formname = document.forms[form_loop];
				break;
			}
		}
		var paramArray = params.split(",");
		var i;
		for (i = 0; i < paramArray.length; i++) {
			if (paramArray[i] == "qp") {
				if (trim(formname.elements[paramArray[i]].value) != ""
						&& (trim(formname.elements[paramArray[i]].value) != "Keyword"
								&& trim(formname.elements[paramArray[i]].value) != "Enter designation, role, skills etc." && trim(formname.elements[paramArray[i]].value) != "Enter the keywords / designation that describe your desired job")) {
					found = true;
					break;
				}
			} else if (paramArray[i] == "ql") {
				if (trim(formname.elements[paramArray[i]].value) != ""
						&& (trim(formname.elements[paramArray[i]].value) != "Location" && trim(formname.elements[paramArray[i]].value) != "Enter city or state")) {
					found = true;
					break;
				}
			} else if (paramArray[i] == "qf[]" || paramArray[i] == "qe"
					|| paramArray[i] == "qi[]") {
				if (formname.elements[paramArray[i]].selectedIndex > 0) {
					found = true;
					break;
				}
			} else if (paramArray[i] == "qdsg") {
				if (trim(formname.elements[paramArray[i]].value) != ""
						&& trim(formname.elements[paramArray[i]].value) != "Designation") {
					found = true;
					break;
				}
			}
		}
		if (!found) {
			if (!qErrFlag && !qErrFlagAgent) {
				if (form == 'form3' || form == 'msngr') {
					if (govt == 1)
						document.getElementById('idErrMsg').innerHTML = "<div class=\"errormess\"><div class=\"fl\"><img src=\""+imgURL+"images/erroricon2.gif\" alt=\"\" width=\"27\" height=\"27\" hspace=\"10\"></div><div class=\"fl\" style=\"margin-top:3px;width:88%;\"><strong>Please enter Keywords to search.</strong></div><div class=\"cls\"><img src=\""+imgURL+"images/spacer.gif\" alt=\"\" width=\"1\" height=\"1\"></div></div>";
					else {
						if (form == 'msngr')
							document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please specify Keywords to proceed.</div>";
						else
							document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please enter Keywords or Location or select Job Category or Industry to search.</div>";
						document.getElementById('idErrMsg').scrollIntoView();
					}

					for (i = 0; i < arrInline.length; i++) {
						if (arrInline[i] == 'eo' || arrInline[i] == 'idqi'
								|| arrInline[i] == 'qp' || arrInline[i] == 'ql') {
							document.getElementById("divid_" + arrInline[i]).className = 'row_Err';
							continue;
						}
						if (form == 'msngr')
							document.getElementById("divid_" + arrInline[i]).className = 'row_Err';
					}
				} else if (form == 'quickbar' || form == 'quickbarbot') {
					if (govt == 1) {
						document.getElementById(msgid).innerHTML = "Please enter Keywords to search.";
					} else {
						document.getElementById(msgid).innerHTML = msg;
						defaultText('l', 'band');
						defaultText1('l');
						if (gbi('srcBgbot')) {
							defaultText('l', 'band', 'qpbot');
							defaultText1('l', 'qlbot');
						}
					}
					document.getElementById(msgid).style.display = "block";
					if (document.getElementById('divfordisplay'))
						document.getElementById('divfordisplay').style.top = (parseInt(document
								.getElementById("divfordisplay").style.top
								.substr(
										0,
										(document
												.getElementById("divfordisplay").style.top.length - 2))) + 30)
								+ 'px';
					for (i = 0; i < arrInline.length; i++) {

						if (arrInline[i] == 'farea' || arrInline[i] == 'qp'
								|| arrInline[i] == 'fareabot'
								|| arrInline[i] == 'qpbot'
								|| arrInline[i] == 'ql'
								|| arrInline[i] == 'qlbot') {
							document.getElementById("spanid_" + arrInline[i]).className += " errIN";
							continue;
						}
						document.getElementById(arrInline[i]).className = 'errIN';
					}
				}
				qErrFlag = 1;
			}
		}
		var errAgent = 0;
		if (agent && qErrFlag != 2) {
			var mn_trim = trim(document.form3.mn.value);
			if (mn_trim == "" || mn_trim.search(/^[A-Za-z0-9\._@\- ]+$/) == -1) {
				qErrFlagAgent = 3;
				document.getElementById('divid_mnid').className = 'row_Err';
				errAgent = 1;
				if (mn_trim.search(/^[A-Za-z0-9\._@\- ]+$/) == -1)
					mnError = 1;
				if (mn_trim == "")
					mnError = 2;

			}

			if (errAgent) {
				if (!found)
					document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please enter Keywords or select Job Category or Industry to search, and provide a name to save Search Agent.</div>";
				else if (mnError == 1)
					document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">You have entered Invalid characters in the field. Please Enter a valid name for Search Agent.Allowed Characters are \"A-Z, a-z, . _ @ - ,0-9\"</div>";
				else if (mnError == 2)
					document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please provide a name to save Search Agent for future reference.</div>";

				found = false;
			}
		}
		if (found) {
			if (!qErrFlag || !qErrFlagbot) {
				if (form == 'quickbarbot')
					var ql = document.getElementById('qlbot');
				else
					var ql = document.getElementById('ql');

				var locinChar = /[^a-zA-Z,.;&\\\/\s\-()]/;
				if (locinChar.test(ql.value)) {
					if (form == 'form3') {
						document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please avoid entering any number/special character in location field.</div>";
						document.getElementById("divid_ql").className = 'row_Err';
					} else if (form == 'quickbar' || form == 'quickbarbot') {
						document.getElementById(msgid).innerHTML = "Please avoid entering any number/special character in location field.";
						document.getElementById(msgid).style.display = "block";
						if (document.getElementById('divfordisplay'))
							document.getElementById('divfordisplay').style.top = (parseInt(document
									.getElementById("divfordisplay").style.top
									.substr(
											0,
											(document
													.getElementById("divfordisplay").style.top.length - 2))) + 30)
									+ 'px';
						if (gbi("qlbot") && form == 'quickbarbot')
							document.getElementById("qlbot").className = "textbox error1";
						else
							document.getElementById("ql").className = "textbox error1";
					} else if (form == 'msngr') {
						document.getElementById('idErrMsg').innerHTML = "<div class=\"errMess_P w100p\">Please avoid entering any number/special character in location field.</div>";
						document.getElementById("divid_ql").className = 'row_Err';
						document.getElementById('idErrMsg').scrollIntoView();
					}
					found = false;
				}
				if (form == 'quickbarbot')
					qErrFlagbot = 2;
				else
					qErrFlag = 2;
			} else
				found = false;
		}
		//alert(qErrFlag+'==='+qErrFlagAgent+' :: fnd : '+found);
		return found;
	}

	function countSelectedJobs(a, flag, obj, src) {
		var total = 0;
		var axc2 = "";
		var d;

		if (src == 'sp') {
			d = document.form33;
		} else {
			d = document.form3;
		}

		for (var i = 0; i < d.elements.length; i++) {

			var e = d.elements[i];
			if (e.type == "checkbox") {
				if (e.checked) {
					total = total + 1;

				}
			}
		}
		if (d.prevj) {
			var prevj = trim(d.prevj.value);
			if (prevj) {
				var arrprevj = prevj.split(",");
				if (d.currj) {
					var currj = trim(d.currj.value);
					var arrcurrj = currj.split(",");
					for (pi = 0; pi < arrprevj.length; pi++) {
						for (cj = 0; cj < arrcurrj.length; cj++) {
							if (arrprevj[pi] == arrcurrj[cj]) {
								arrprevj.splice(pi, 1);
							}
						}
					}
				}
				total = total + arrprevj.length;
			}
		}
		if (total == 0 && flag != 2 && flag != 3) {
			modalwin(400, 'layershow', obj);
			gbi('idLayerMsg').innerHTML = 'Please Select atleast One Job To Continue';
			//				alert("Please Select atleast One Job To Continue");
			return false;
		}
		if (flag == 0 || flag == 2 || flag == 3 || flag == 5) {
			if ((!applyLeft || (applyLeft - total) < 0) && applyLeft != "") {
				if (applyLeft - total == -1) {
					modalwin(400, 'layershow', obj);
					if (total > 0) {
						if (flag == 3)
							gbi('idLayerMsg').innerHTML = "You can only apply to 50 jobs in a day.<br>Please uncheck "
									+ (total - applyLeft)
									+ " job(s) to be within this quota.";
						else
							gbi('idLayerMsg').innerHTML = "You can only apply to 50 jobs in a day.<br>Please uncheck "
									+ (total - applyLeft)
									+ " job(s) to be within this quota.";

						// Check 1
						//							alert("You cannot apply to more than 50 jobs per day. You can save these jobs and apply to them tomorrow.");
					} else {
						if (flag == 3)
							gbi('idLayerMsg').innerHTML = "You can only apply to 50 jobs in a day.<br>You can save these jobs and apply to them tomorrow.";
						else
							gbi('idLayerMsg').innerHTML = "You can only apply to 50 jobs in a day.<br>You can save these jobs and apply to them tomorrow.";
					}
				}
				if (flag == 0)
					return false;
			} else if ((!mal || (mal - total) < 0) && mal != "") {
				if (mal - total == -1) {
					modalwin(400, 'layershow', obj);
					if (total > 0) {
						if (flag == 3)
							gbi('idLayerMsg').innerHTML = "You can only apply to 150 jobs in a month.<br>Please uncheck "
									+ (total - mal)
									+ " job(s) to be within this quota.";
						else if (flag == 5) {
							gbi('idLayerMsg').innerHTML = "You can only apply to 150 jobs in a month.";
							return false;
						} else
							gbi('idLayerMsg').innerHTML = "You can only apply to 150 jobs in a month.<br>You can save these jobs and refer to them later.";
					} else {
						if (flag == 3)
							gbi('idLayerMsg').innerHTML = "You can only apply to 150 jobs in a month.<br>You can save these jobs and apply in next month.";
						else
							gbi('idLayerMsg').innerHTML = "You can only apply to 150 jobs in a month.<br>You can save these jobs and apply in next month.";
					}
				}
				if (flag == 0)
					return false;
			} else if (total > 5) {
				if (src == 'sp') {
					if (document.form33.id)
						axc2 = document.form33.id.value;
				} else {
					if (document.form3.id)
						axc2 = document.form3.id.value;
				}

				if ((axc2 == "" || !axc2)
						&& (total == 6 || flag != 2 && flag != 3)) {
					modalwin(400, 'layershow', obj);
					gbi('idLayerMsg').innerHTML = "You cannot apply to more than 5 jobs at a time.";
					return false;
					//						alert("You cannot apply to more than 10 jobs at a time ");
				} else if (flag == 3) {
					modalwin(400, 'layershow', obj);
					// Check 3
					if (total == 6)
						gbi('idLayerMsg').innerHTML = "You cannot apply to more than 5 jobs at a time,<br> however you can delete more jobs.";
					//	                                      alert("You cannot apply to more than 10 jobs at a time, however you can delete more jobs.");
				} else if (total == 6 || flag != 2) {
					modalwin(400, 'layershow', obj);
					// Case when the user clicks on the Apply button.
					//alert("Check 4....");
					gbi('idLayerMsg').innerHTML = "You cannot apply to more than 5 jobs at a time,<br> however you can delete more jobs.";
					//						alert("You cannot apply to more than 10 jobs at a time, however you can save more jobs and apply later ");
				}
				if (flag == 0 || flag == 5)
					return false;
			} else if ((total - applyLeft) == 0 && total
					&& (flag == 2 || flag == 3)) {
				modalwin(400, 'layershow', obj);
				gbi('idLayerMsg').innerHTML = "You have reached the limit of 50 applies in a day.";
			} else if ((total - mal) == 0 && total && (flag == 2 || flag == 3)) {
				modalwin(400, 'layershow', obj);
				gbi('idLayerMsg').innerHTML = "You have reached the limit of 150 applies in a<br> month.";
			}
		}
		return true;
	}

	function removeError(arrElementId, src, errFlag) {
		if (src == 'quickbarbot')
			var msgid = 'divInlineErrMsgbot';
		else
			var msgid = 'divInlineErrMsg';

		//alert("sssssss ==> "+qErrFlag+'==='+qErrFlagAgent);
		if (qErrFlagAgent) {
			if (qErrFlag != errFlag && errFlag != qErrFlagAgent)
				return false;
		} else if (qErrFlag != errFlag)
			return false;

		if (src == 'form' || src == 'msngr') {
			var i = 0;
			document.getElementById('idErrMsg').innerHTML = '';
			for (i = 0; i < arrElementId.length; i++) {
				if (arrElementId[i] == 'eo' || arrElementId[i] == 'idqi'
						|| arrElementId[i] == 'qp' || arrElementId[i] == 'ql'
						|| arrElementId[i] == 'mnid'
						|| arrElementId[i] == 'idqi1') {
					document.getElementById("divid_" + arrElementId[i]).className = 'row_frm';
					continue;
				}
				if (src == 'msngr')
					document.getElementById("divid_" + arrElementId[i]).className = "row_frm";
			}
		} else if (src == 'quickbar' || src == 'quickbarbot') {
			if (document.getElementById(msgid).style.display == "block") {
				var i = 0;
				//	                        document.getElementById('divInlineErrMsg').style.display = "none";
				document.getElementById(msgid).innerHTML = "";
				if (document.getElementById('divfordisplay'))
					document.getElementById('divfordisplay').style.top = (parseInt(document
							.getElementById("divfordisplay").style.top
							.substr(
									0,
									(document.getElementById("divfordisplay").style.top.length - 2))) - 30)
							+ 'px';

				for (i = 0; i < arrElementId.length; i++) {
					if (arrElementId[i] == 'farea'
							|| arrElementId[i] == 'fareabot') {
						document.getElementById("spanid_" + arrElementId[i]).className = 'dd';
					} else if (arrElementId[i] == 'qp'
							|| arrElementId[i] == 'qpbot')
						document.getElementById("spanid_" + arrElementId[i]).className = '';
					else if (arrElementId[i] == 'qlbot'
							|| arrElementId[i] == 'ql')
						document.getElementById("spanid_" + arrElementId[i]).className = '';
				}
			}
		}
		if (qErrFlagAgent) {
			if (qErrFlagAgent == errFlag)
				qErrFlagAgent = 0;
			else
				qErrFlag = 0;
		} else
			qErrFlag = 0;
	}

	function getLastAnchorTag(tmpElem) {
		while (tmpElem.tagName != 'A' && tmpElem.parentNode) {
			tmpElem = tmpElem.parentNode;
		}
		return tmpElem;
	}

	function srchRes(e, flag) {
		var srcEle;
		if (!e)
			e = window.event; // ie
		if (typeof e.target != 'undefined')
			srcEle = e.target; // firefox
		else if (typeof e.srcElement != 'undefined')
			srcEle = e.srcElement; // ie
		else
			return false;
		if (srcEle.tagName == 'SPAN' || srcEle.tagName == 'IMG'
				|| srcEle.tagName == 'STRONG' || srcEle.tagName == 'B'
				|| srcEle.tagName == 'I' || srcEle.tagName == 'EM'
				|| srcEle.tagName == 'A') {
			srcEle = getLastAnchorTag(srcEle);
			if (srcEle && srcEle.tagName == 'SPAN')
				return false;
		}
		switch (srcEle.className) {
		case 'l_m':
			if (flag)
				break;
		case 'l_j':
		case 'l_fj':
		case 'l_fc':
		case 'l_frc':
		case 'l_jtc':
		case 'l_rc':
		case 'l_ic':
		case 'l_vs':
		case 'l_va':
		case 'l_sa':
		case 'img1':
		case 'l_tfarea':
		case 'l_trole':
			callFunc(srcEle, flag);
			return false;
		case 'pgsel c_pg':
			if (flag) {
				document.form3.applylayer.value = '';
				return false;
			}
			break;
		case 'c_ch':
			if (e.type == 'click')
				return countSelectedJobs(srcEle, 2);
		}
	}
	function SAVE(div, flag) {
		var id = div.id;
		var pos = div.id;
		CUR_FILE = id;
		var savejobs_url = '';
		if (flag == 'jd') {
			var job_str = "f=" + CUR_FILE;
		} else {
			var job_str = "jobsarr[]=" + CUR_FILE;
		}
		if (typeof (var_xz2) != 'undefined'
				&& ((var_xz2 == '6' || var_xz2 == '7' || var_xz2 == '13')
						|| (var_xz1 == '8') || (var_xz1 == '12'))) {
			//	                savejobs_url = window.location.href+"&savejobs=1&jobsarr[]="+CUR_FILE;
			savejobs_url = m_u + sr_f + "?savejobs=1&" + job_str + "&js=1&xz="
					+ var_xz1 + "_" + var_xz2 + "_" + var_xz3 + "&" + crit_u
					+ xid + xq;
		} else {
			var tmpXZ = '';
			if (typeof (var_xz1) != 'undefined')
				tmpXZ = var_xz1;
			else
				tmpXZ = '1';
			savejobs_url = m_u + sr_f + "?savejobs=1&" + job_str + "&js=1&xz="
					+ tmpXZ + "_0_42&" + crit_u + xid + xq;
			delete (tmpXZ);
		}
		div.href = savejobs_url;
	}

	function JD(div, flag) {
		try {
			var fid = div.parentNode.parentNode.id;
			var pos = div.id;
			var href = div.href;
			var arr_cat = href.split('?');
			//	      var url = m_u+jd_f+jd_url+'&f='+fid+"&xp="+pos+xid+crit_u+id;
			var url = arr_cat[0] + jd_url + "&xp=" + pos + xid + "&qp="
					+ hlite_kwd + id + "&f=-" + fid;
			div.href = url;
			div.target = '_blank';
			return true;
			//  div.onclick = function() { window.open(url,'','width=785,height=570,resizable=1,scrollbars=1'); return false; };
		} catch (e) {
		}

	}
	function LOGO(div, flag) {
		var fid = div.parentNode.parentNode.id;
		var pos = div.id;
		var url = m_u + jd_f + '?xz=8_16_3&js=1' + '&f=' + fid + "&xp=" + pos
				+ xid + crit_u + id;
		div.href = url;
		div.target = '_blank';
		return true;
		//  div.onclick = function() { window.open(url,'','width=785,height=570,resizable=1,scrollbars=1'); return false; };
	}
	function FJ(div, flag) {
		var id = div.id;
		var href = div.href;
		var arr_cat = href.split('?');
		var url = arr_cat[0] + jd_url + xid + "&qp=" + hlite_kwd + "&f=-" + id;
		//	      var url = m_u+jd_f+fj_url+'&f='+id+xid+crit_u;
		div.href = url;
		div.target = '_blank';
		return true;
		//		div.onclick = function() { window.open(url,'','width=785,height=570,resizable=1,scrollbars=1'); return false; };
	}

	function VSJ(div, flag) {
		var id = div.id;
		var url = m_u + sr_f + vsj_url + xid + crit_u + '&qv=' + id;
		div.target = '_blank';
		div.href = url;
	}

	function VAJ(div, flag) {
		var arr = div.id.split('_');
		var cmpid = arr[0];
		var tem = (arr[1]) ? arr[1] : '';
		delete (arr);
		var url = m_u + sr_f + vaj_url + '&qc=' + cmpid + '&tem=' + tem + xid
				+ crit_u + '&qd=';
		div.target = '_blank';
		div.href = url;
	}
	function RC(div, flag) {
		var role = div.id;
		var url = m_u + sr_f + rc_url + '&qr[]=' + role + xid + xq;
		div.href = url;
	}

	function IC(div, flag) {
		var ind = div.id;
		var url = m_u + sr_f + ic_url + '&qi[]=' + ind + xid + xq;
		div.href = url;
	}

	function FC(div, flag) {
		var arr = div.id.split('_');
		var href = div.href;
		if (arr[0] == 'r') {
			var compid = arr[1];
			var tem = arr[2];
			var url = m_u + sr_f + fc_url + crit_u + '&qc=' + compid + '&tem='
					+ tem + xid + xq;
			div.target = '_blank';
			div.href = url;
		} else if (arr[0] == 'j') {
			var f = arr[1];
			var url = m_u + jd_f + fc_jd_url + crit_u + '&filename=' + f + xid
					+ xq;
			div.href = url;
			div.target = '_blank';
			//			div.onclick = function() { window.open(url,'','width=785,height=570,resizable=1,scrollbars=1'); return false; };
		}
		delete (arr);
	}

	function FRC(div, flag) {
		var index = div.id;
		var url = m_u + sr_f + frc_url + '&qo=' + index + xid + xq;
		div.href = url;
	}
	function TFA(div, flag) {
		var farea = div.id;
		var url = m_u + sr_f + tfa_url + '&qf[]=' + farea + xid + xq;
		div.target = '_blank';
		div.href = url;
	}
	function TR(div, flag) {
		var role = div.id;
		var url = m_u + sr_f + tr_url + '&qr[]=' + role + xid + xq;
		div.target = '_blank';
		div.href = url;
	}
	function JTC(div, flag) {
		var index = div.id;
		var url = m_u + sr_f + jtc_url + '&qk=' + index + xid + xq;
		div.href = url;
	}

	function lpShowHide() {
		obj_middle_panel = document.getElementById('divfordisplay');
		//	    obj = document.getElementById('pane-left');
		obj = document.getElementById('leftcol');
		//document.getElementById('lp-blend').style.width = "0px";
		if (typeof obj != 'undefined') {
			objAnc = document.getElementById('alpShowHide');
			if (obj.style.display == '') {
				obj_middle_panel.style.left = "25px";
				obj.style.display = 'none';
				if (typeof objAnc != 'undefined') {
					objAnc.className = "show";
				}
				setCookie("SRCH_PREF", "H", "11223344", "/", cookieDomainName,
						"");
			} else if (obj.style.display == 'none') {
				obj_middle_panel.style.left = '200px';
				obj.style.display = '';
				setCookie("SRCH_PREF", "", "1", "/", cookieDomainName, "");
				if (typeof objAnc != 'undefined') {
					objAnc.className = "hide";
				}
			}
		}
		return false;
	}

	function lpInit() {
		obj = document.getElementById('alpShowHide');
		if (typeof obj != 'undefined') {
			obj.className = "hide";
		}
	}
	function setCookie(name, value, expires, path, domain, secure) {
		var today = new Date();
		today.setTime(today.getTime());
		if (expires) {
			expires = expires * 1000 * 60 * 60 * 24;
		}
		var expires_date = new Date(today.getTime() + (expires));
		document.cookie = name + '=' + escape(value)
				+ ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
				((path) ? ';path=' + path : '')
				+ ((domain) ? ';domain=' + domain : '')
				+ ((secure) ? ';secure' : '');
	}
	function getCookie(name) {
		var start = document.cookie.indexOf(name + "=");
		var len = start + name.length + 1;
		if ((!start) && (name != document.cookie.substring(0, name.length))) {
			return "";
		}
		if (start == -1)
			return "";
		var end = document.cookie.indexOf(';', len);
		if (end == -1)
			end = document.cookie.length;
		return unescape(document.cookie.substring(len, end));
	}

	function screenresolution() {
		var x = screen.width;
		if (x == "800") {
			document.getElementById("divfordisplay").width = "470";
		} else if (x == "1024") {
			document.getElementById("divfordisplay").width = "680";
		} else if (x == "1280") {
			document.getElementById("divfordisplay").width = "940";
		}
	}

	function dd(type, sel_val) {
		if (type == 'exp' || type == 'expbot') {
			var i = 0;
			var sel = document.getElementById(type + "SL");
			var sel_exp = 0;
			if (sel_val != '')
				sel_exp = sel_val;
			while (i <= 30) {
				var tmp = document.createElement("option");
				tmp.value = i;
				tmp.innerHTML = i;
				tmp.label = i;
				tmp.text = i;
				if (i == sel_exp) {
					tmp.selected = true;
					document.getElementById(type).value = sel_exp
				}
				sel.appendChild(tmp);
				i++;
			}
		}
		if (type == 'expplus' || type == 'expplusbot') {
			if (type == 'expplusbot')
				var selid = "expbot";
			else
				var selid = "exp";
			var i = 0;
			var sel = document.getElementById(selid + "SL");
			var sel_exp = 0;
			if (sel_val != '')
				sel_exp = sel_val;
			while (i <= 30) {
				var tmp = document.createElement("option");
				tmp.value = i;
				tmp.innerHTML = i;
				tmp.label = i;
				tmp.text = i;
				if (i == sel_exp) {
					tmp.selected = true;
					document.getElementById(selid).value = sel_exp
				}
				sel.appendChild(tmp);
				i++;
			}
		} else if (type == 'ctc' || type == 'ctcbot') {
			var i = 1;
			if (type == 'ctcbot')
				var selid = "minSalbot";
			else
				var selid = "minSal";
			var sel = document.getElementById(selid + "SL");
			var sel_ctc = -1;
			if (sel_val != '')
				sel_ctc = sel_val;
			var tmp;
			tmp = document.createElement("option");
			tmp.value = 12477;
			tmp.innerHTML = "< .5";
			tmp.label = "< .5";
			tmp.text = "< .5";
			if (sel_ctc == 12477) {
				tmp.selected = true;
				document.getElementById(selid).value = "< .5";
			}
			sel.appendChild(tmp);
			part = '';
			while (i <= 50) {
				tmp = document.createElement("option");
				tmp.value = i;
				tmp.innerHTML = i;
				tmp.label = i;
				tmp.text = i;
				if (i == sel_ctc) {
					tmp.selected = true;
					document.getElementById(selid).value = sel_ctc;
				}
				sel.appendChild(tmp);
				i = i + 1;
				//				part='s';
			}
			delete (part);
		} else if (type == 'ctcplus' || type == 'ctcplusbot') {
			if (type == 'ctcplusbot')
				var selid = "minSalbot";
			else
				var selid = "minSal";

			var i = 15;
			var sel = document.getElementById(selid + "SL");
			var sel_ctc = -1;
			if (sel_val != '')
				sel_ctc = sel_val;
			part = '';
			while (i <= 50) {
				tmp = document.createElement("option");
				tmp.value = i;
				tmp.innerHTML = i;
				tmp.label = i;
				tmp.text = i;
				if (i == sel_ctc) {
					tmp.selected = true;
					document.getElementById(selid).value = sel_ctc;
				}
				sel.appendChild(tmp);
				i = i + 1;
				//	                      part='s';
			}
			delete (part);
		} else if (type == 'farea' || type == 'fareaplus' || type == 'fareabot'
				|| type == 'fareaplusbot') {
			if (type == 'fareabot' || type == 'fareaplusbot')
				var typeid = 'fareabot';
			else
				var typeid = 'farea';

			var sel_farea = "";
			var tmp;
			var sel = document.getElementById(typeid + "SL");
			sel.remove(0);
			if (sel_val != '')
				sel_farea = sel_val;
			tmp = document.createElement("option");
			tmp.value = "";
			tmp.innerHTML = "Select";
			tmp.label = "Select";
			tmp.text = "Select";
			if (sel_farea == "-1" || sel_farea == "")
				tmp.selected = true;
			sel.appendChild(tmp);
			var a1 = qsb1;
			var a2 = qsb2;
			var a3 = qsb3;
			if (type == 'fareaplus' || type == 'fareaplusbot') {
				var a3 = premiumaqsb3;

			}
			tmpArr = {
				"0" : {
					"label" : ddFAlabel1,
					data : a1
				},
				"1" : {
					"label" : ddFAlabel2,
					data : a2
				},
				"2" : {
					"label" : ddFAlabel3,
					data : a3
				}
			};

			for ( var k1 in tmpArr) {
				var arr1 = tmpArr[k1];
				tmp = document.createElement("optgroup");
				tmp.innerHTML = arr1.label;
				tmp.label = arr1.label;
				tmp.text = arr1.label;
				sel.appendChild(tmp);
				for ( var k2 in arr1.data) {
					tmp = document.createElement("option");
					tmp.value = k2;
					tmp.innerHTML = arr1.data[k2];
					tmp.label = arr1.data[k2];
					tmp.text = arr1.data[k2];
					if (k2 == sel_farea) {
						tmp.selected = true;
						document.getElementById(typeid).value = arr1.data[k2];
					}
					;
					sel.appendChild(tmp);
				}
			}
		}

	}

	function screenheight() {
		document.getElementById("divfordisplay").top = "300";
	}

	var SRCH_PREF = "S";//getCookie("SRCH_PREF");

	function func_1(pos, pid) {
		var ret_str = '';
		return ret_str;
	}

	function func_1a2(pos, pid) {
		var ret_str = '';
		var doc = document.getElementById('aa_' + pos);

		if (doc.innerHTML.indexOf('Applied') < 0)
			ret_str += "<div class=\"bdrBT\"><span width=\"45%\" id=\"sp_"
					+ pos
					+ "\"><a class='lnk' id='ap_"
					+ pos
					+ "' onclick=\"applyjob(new Array('"
					+ pos
					+ "'),new Array('"
					+ pid
					+ "'));\"><strong>Apply to this job</strong></a></span><span width=\"10%\">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>";
		else
			ret_str += "<div class=\"bdrBT\"><span width=\"45%\" id=\"sp_"
					+ pos
					+ "\"><a class='lnk' id='ap_"+pos+"'><strong>Re-Apply ?</strong></a> (Not Recommended) </span><span width=\"10%\">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>";

		ret_str += func_2(pos, pid, 1);
		ret_str += "</div>";

		return ret_str;
	}

	function func_2(pos, pid, fl) {
		var ret_str = '';
		var doc = document.getElementById('aa_' + pos);
		if (doc.innerHTML.indexOf('Saved') < 0)
			ret_str += "<span width=\"45%\"><a class='lnk' id='sv_" + pos
					+ "' onclick=\"savejob(new Array('" + pos
					+ "'),new Array('" + pid
					+ "'));\"><strong>Save this job</strong></a></span>";
		else {
			ret_str += "<span width=\"45%\"><a class='lnk' id='sv_"+pos+"'><strong>Job Saved Successfully</strong></a></span>";
		}
		if (!fl)
			ret_str = "<div class=\"bdrBT\">" + ret_str + "</div>";
		return ret_str;
	}

	function func_3(pos, pid) {
		var ret_str = '';
		var tmp1 = document.getElementById('p_' + pos);
		var tmp2 = document.getElementById('l_' + pos);

		ret_str += "<div class=\"bdrBT\"><strong>Related Searches : </strong> <br>";

		ret_str += "1. View all <a href=\"" + m_u + sr_f + "?xz=1_0_3&qp="
				+ tmp1.innerHTML + "&qt=all&qs=r&js=1" + xid + "\"><b>"
				+ tmp1.innerHTML + "</b></a> jobs.<br>";

		var i, arrLoc = tmp2.innerHTML.split(',');
		if (arrLoc) {
			var strLoc = '';
			strLoc += "<a href=\"" + m_u + sr_f + "?xz=1_0_3&qp="
					+ tmp1.innerHTML + "&ql=" + arrLoc[0] + "&qt=all&qs=r&js=1"
					+ xid + "\"><b>" + trim(arrLoc[0]) + "</b></a>";
			for (i = 1; i < arrLoc.length; i++) {
				arrLoc[i] = trim(arrLoc[i]);
				strLoc += " or <a href=\"" + m_u + sr_f + "?xz=1_0_3&qp="
						+ tmp1.innerHTML + "&ql=" + arrLoc[i]
						+ "&qt=all&qs=r&js=1" + xid + "\"><b>" + arrLoc[i]
						+ "</b></a>";
			}
			if (arrLoc.length > 1)
				strLoc = "only in " + strLoc;
			else
				strLoc = "in " + strLoc;
			ret_str += "2. View all '" + tmp1.innerHTML + "' jobs " + strLoc
					+ ".<br>";
			delete (arrLoc);
		}

		ret_str += "</div>";

		return ret_str;
	}

	function func_4(pos, pid) {
		var ret_str = '';
		var Url = m_u + jd_f + jd_url + '&f=' + pid + "&xp=" + pos + xid
				+ crit_u + '&mFrm=Y';
		ret_str += "<div class=\"mailIcon\"> <a href=\"javascript:void(0);\" onclick=\"this.onclick='javascript:void(0);'; window.open('"
				+ Url
				+ "','','width=785,height=570,resizable=1,scrollbars=1');\"><strong>Email this job to a Friend.</strong><a/></div><div class=\"bdrBT\"></div>";
		return ret_str;
	}

	function func_5(pos, pid) {
		var ret_str = '';
		ret_str += "<div class=\"cls\"><br /><a href=\""
				+ l_u
				+ "%26pid%3D"
				+ pid
				+ "\" id=\"lg_1\"><strong>Login to see Applicant's Comparison</strong></a></div>";
		return ret_str;
	}

	function func_6(pos, pid) {
		var ret_str = '';
		ret_str += "<div id=\"a_pat_"+pos+"\">";
		ret_str += "</div>";
		makeRequestPlugin(m_u + "js_getApplyPattern.php?file=" + pid, "a_pat_"
				+ pos, 5);
		return ret_str;
	}

	function toggleDiv(c_div, o_div) {
		if (c_div && c_div != '')
			document.getElementById(c_div).style.display = 'none';
		if (o_div && o_div != '')
			document.getElementById(o_div).style.display = 'block';
		return false;
	}

	function fetchJobDetails(divname, xml) {
		var arrM = xml2array(xml);
		delete (xml);
		var ret_str = '';
		var div = document.getElementById(divname);
		var Url = m_u + jd_f + jd_url + '&f=' + CUR_FILE + "&js=1&xp="
				+ CUR_POS + xid + crit_u + '&mFrm=Y&xz=1_0_43';

		var str_minsal = "";
		var str_maxsal = "";
		if (arrM.naukrijobdetails.MINSAL == '12477')
			str_minsal = 'Less than 50000';
		else
			str_minsal = arrM.naukrijobdetails.MINSAL;
		if (arrM.naukrijobdetails.MAXSAL == '12477')
			str_maxsal = ' - Less than 50000';
		else
			str_maxsal = ' - ' + arrM.naukrijobdetails.MAXSAL;

		ret_str += "<div class=\"pdt10\">" + arrM.naukrijobdetails.JOBDESC
				+ "</div>";

		var str_ctc = '';
		if (arrM.naukrijobdetails.SHOW_SAL == 'n') {
			if (typeof arrM.naukrijobdetails.SALARY != 'undefined'
					&& arrM.naukrijobdetails.SALARY != '')
				str_ctc = arrM.naukrijobdetails.SALARY;
		} else {
			var str_minsal = "";
			var str_maxsal = "";
			if (arrM.naukrijobdetails.MINSAL == '12477')
				str_minsal = 'Less than 50000';
			else
				str_minsal = arrM.naukrijobdetails.MINSAL;
			if (arrM.naukrijobdetails.MAXSAL == '12477')
				str_maxsal = ' - Less than 50000';
			else
				str_maxsal = ' - ' + arrM.naukrijobdetails.MAXSAL;
			var str_currency = 'Rupees';
			if (arrM.naukrijobdetails.CURRENCY_SAL == 'U.S Dollars')
				str_currency = 'U.S. Dollars';
			if (arrM.naukrijobdetails.MINSAL == arrM.naukrijobdetails.MAXSAL)
				str_maxsal = '';
			str_ctc = str_currency + " " + str_minsal + str_maxsal;
			delete (str_currency);
		}

		if (str_ctc != '')
			ret_str += "<div class=\"ctcNew pdt10\"><strong>CTC:</strong> "
					+ str_ctc + " </div>";
		delete (str_ctc);

		ret_str += "<div class=\"grnColmr pdt10\">Keywords: "
				+ arrM.naukrijobdetails.KEYWORDS
				+ "</div><div style=\"margin-right:10px;\">";

		var tmp1 = document.getElementById('l_' + CUR_POS);
		if (tmp1.innerHTML.indexOf(",") < 0 && qlFlag < 1)
			ret_str += "<div class=\"pdt10\"><a href=\""
					+ m_u
					+ sr_f
					+ "?xz="
					+ var_xz1
					+ "_0_"
					+ var_xz3
					+ crit_u
					+ "&ql="
					+ tmp1.innerHTML
					+ "&js=1"
					+ xid
					+ "\" class=\"mrUnder\">View all jobs for this Location</a></div>";
		delete (tmp1);

		var savejobs_url = '';
		if (typeof (var_xz1) != 'undefined'
				&& typeof (var_xz2) != 'undefined'
				&& ((var_xz1 == '1' && (var_xz2 == '6' || var_xz2 == '7')) || (var_xz1 == '8'))) {
			savejobs_url = window.location.href + "&savejobs=1&jobsarr[]="
					+ CUR_FILE;
		} else {
			var tmpXZ = '';
			if (typeof (var_xz1) != 'undefined')
				tmpXZ = var_xz1;
			else
				tmpXZ = '1';
			savejobs_url = m_u + sr_f + "?savejobs=1&jobsarr[]=" + CUR_FILE
					+ "&js=1&xz=" + tmpXZ + "_0_42&" + crit_u + xid + xq;
			delete (tmpXZ);
		}
		if (var_xz1 != '23' && var_xz3 != '51') {
			ret_str += "<div class=\"pdt10\"><a href=\""+m_u+sr_f+vsj_url+"&xz=1_7_41"+xid+crit_u+'&qv='+CUR_FILE+"\" target='_blank' class=\"mrUnder\">View Similar Jobs</a></div><div class=\"cls\"><br><a href=\""+savejobs_url+"\" class=\"svJobLink\">Save Job</a><a href=\"javascript:void(0);\" onclick=\"window.open('"
					+ Url
					+ "','','width=785,height=570,resizable=1,scrollbars=1');\" class=\"svJobLink\">Email Job</a></div></div>";
		}

		div.innerHTML = ret_str;
		delete (div);
		delete (ret_str);
		delete (arrM);
		adjust();
	}

	function showApplyPattern(divname, text) {
		var ret_str = '';
		if (text != '') {
			var arrPat = text.split(',');
			var total = parseFloat(arrPat[0]) + parseFloat(arrPat[1])
					+ parseFloat(arrPat[2]);
			ret_str += "<div class=\"app\" id=\"app1\" style=\"display: block;width:290px;margin-top:12px;\"><strong style=\"padding:2px 0px 0px 2px; color: rgb(27, 59, 72); float: left; font-size: 11px; line-height: 18px;\">Your Comparison with other applicants</strong><div style=\"text-align: right;\"></div><div class=\"cls\"><img alt=\"\" src=\""+imgurl+"images/spacer.gif\"></div><div style=\"padding: 1px 4px 4px; font-size:11px;\"><div style=\"margin-top: 6px;\">Total no. of applicants : "
					+ total
					+ "</div><div class=\"ctc\"><img src=\""+imgurl+"images/spacer.gif\"></div><div class=\"lower\"><strong>Lower</strong></div><div class=\"matching\"><strong>Matching</strong></div><div class=\"higher\"><strong>Higher</strong></div><div style=\"border-bottom: 1px dotted rgb(0, 0, 0); margin-left: 75px;\" class=\"cls\"><img alt=\"\" src=\""
					+ imgurl
					+ "images/spacer.gif\" width=\"100%\" height=\"4\"></div><div class=\"ctc\">CTC :</div><div class=\"lower\">"
					+ arrPat[1]
					+ "</div><div class=\"matching\">"
					+ arrPat[2]
					+ "</div><div class=\"higher\">"
					+ arrPat[0]
					+ "</div><div style=\"border-bottom: 1px dotted rgb(0, 0, 0); margin-left: 75px;\" class=\"cls\"><img alt=\"\" src=\""
					+ imgurl
					+ "images/spacer.gif\" width=\"100%\" height=\"4\"></div><div class=\"ctc\">Exp :</div><div class=\"lower\">"
					+ arrPat[4]
					+ "</div><div class=\"matching\">"
					+ arrPat[5]
					+ "</div><div class=\"higher\">"
					+ arrPat[3]
					+ "</div><div class=\"cls\"><img alt=\"\" src=\""+imgurl+"images/spacer.gif\"></div></div></div>";
			delete (total);
			document.getElementById(divname).innerHTML = ret_str;
		}
	}

	function callFunc(div, flag) {
		switch (div.className) {
		case 'l_j':
			JD(div, flag);
			break;
		case 'l_vs':
			VSJ(div, flag);
			break;
		case 'l_va':
			VAJ(div, flag);
			break;
		case 'l_rc':
			RC(div, flag);
			break;
		case 'l_ic':
			IC(div, flag);
			break;
		case 'l_fj':
			FJ(div, flag);
			break;
		case 'l_fc':
			FC(div, flag);
			break;
		case 'l_frc':
			FRC(div, flag);
			break;
		case 'l_jtc':
			JTC(div, flag);
			break;
		case 'l_sa':
			SAVE(div, flag);
			break;
		case 'img1':
			LOGO(div, flag);
			break;
		case 'l_tfarea':
			TFA(div, flag);
			break;
		case 'l_trole':
			TR(div, flag);
			break;
		}
		delete (flag);
	}

	function Lnk(pos, dt, vaj, viewSim) {
		var doc = document.getElementById('ex_' + pos);
		var str = "";
		doc.className = "pbD ft11";
		//		str="<div class=\"actRow\"><span class=\"fl\">";
		/*	
		if(viewSim)
		        {
		                str += "<a class='l_vs'>View similar jobs</a>  | ";
		        }

			str+="<a class='l_sa'>Save</a>  |  </span><a href=\"javascript:void(0)\" class=\"mAct\" rel=\"mAction\" id=\"m_"+pos+"\" onclick=\"showAction(this,"+pos+", \'jAct\','"+vaj+"',"+viewSim+")\">More Actions</a><span class=\"pbD\">Posted Date: "+dt+"</span></div>";
		 */
		str = "<a href=\"javascript:void(0)\" class=\"mAct\" rel=\"mAction\" id=\"m_"
				+ pos
				+ "\" onclick=\"showAction(this,"
				+ pos
				+ ", 'jAct','"
				+ vaj
				+ "',"
				+ viewSim
				+ ");\" style=\"margin-right:40px;\">Actions</a>Posted Date:"
				+ dt;

		doc.innerHTML = str;
	}

	function chgCls(obj) {
		if (obj.className == "pLinksY")
			obj.className = "pLinks";
		else
			obj.className = "pLinksY";
	}
	function findPosTop(divID) {
		disblock(divID);
		obj = gbi(divID);
		var curleft = curtop = 0;
		//	      alert(obj);
		if (obj.offsetParent) {
			curleft = obj.offsetLeft;
			curtop = obj.offsetTop;
			while (obj = obj.offsetParent) {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			}
		}
		gbi('iframeFSch').style.top = gbi(divID + 'Div').style.top = curtop
				+ 16 + "px";
		gbi('iframeFSch').style.left = gbi(divID + 'Div').style.left = curleft
				+ "px";

	}
	function disblock(divID) {
		var newArray = new Array('dsD1Div', 'dsD2Div', 'dsD3Div', 'dsD4Div')
		if (gbi(divID + 'Div').style.display == 'block') {
			gbi('iframeFSch').style.display = gbi(divID + 'Div').style.display = 'none';
			gbi(divID).parentNode.className = '';
		} else {
			for (i = 0; i < newArray.length; i++) {
				if (gbi(newArray[i])
						&& document.getElementById("dsD" + (i + 1))) {
					gbi(newArray[i]).style.display = "none";
					gbi("dsD" + (i + 1)).parentNode.className = '';
				}
			}
			gbi('iframeFSch').style.display = gbi(divID + 'Div').style.display = 'block';
			gbi('iframeFSch').style.height = (gbi(divID + 'Div').offsetHeight)
					+ "px";
			gbi('iframeFSch').style.width = (gbi(divID + 'Div').offsetWidth)
					+ "px";
			gbi(divID).parentNode.className = 'onCBg';
		}
	}
	function gbi(layerid) {
		return document.getElementById(layerid);
	}

	function afterLoad(flag_default, flag_pid) {
		if (typeof flag_pid != 'undefined' && flag_pid > 0) {
			if (typeof selectedpid == 'undefined')
				return false;
			if (selectedpid < 50
					&& typeof (document.getElementById('ch_'
							+ (selectedpid + 1))) == 'object')
				selectedpid += 1;
			if (typeof (document.getElementById('ch_' + selectedpid)) == 'object')
				document.getElementById('ch_' + selectedpid).focus();
		}
	}

	function adjustHeight() {
		var obj = document.getElementById('bdrTpPos');
		var curtop = 0;
		if (obj.offsetParent) {
			curleft = obj.offsetLeft
			curtop = obj.offsetTop
			while (obj = obj.offsetParent) {
				curleft += obj.offsetLeft;
				curtop += obj.offsetTop;
			}
		}

		if (typeof document.getElementById('leftcol') != 'undefined'
				&& document.getElementById('leftcol') != null) {
			document.getElementById('leftcol').style.top = curtop + "px";
			document.getElementById('leftcol').style.display = "block";
		}
		if (typeof document.getElementById('rightcol') != 'undefined'
				&& document.getElementById('rightcol') != null) {
			document.getElementById('rightcol').style.top = curtop + "px";
			document.getElementById('rightcol').style.display = "block";
			;
		}
	}

	var showListDivId = '';
	var qf_flag = 1;
	function showList(id) {
		d = gbi(id);
		showListDivId = id;
		if (qf_flag) {
			d.style.display = 'block';
			qf_flag = 0;
			gbi('eo').focus();
		} else {
			d.style.display = 'none';
			qf_flag = 1;
		}

		/*
			var d=gbi(id);
			showListDivId=id;
			if(d.style.display=='none')
			{
				d.style.display='block';
				gbi('eo').focus();
			}
			else
				d.style.display='none';
		 */
	}

	function gbi(id) {
		return document.getElementById(id);
	}

	function hideAction() {
		var d = gbi(showListDivId);
		if (d)
			d.style.display = "none";
	}
	function getSelect(obj, idfa) {
		if (obj.selectedIndex != -1)
			gbi(idfa).value = obj.options[obj.selectedIndex].text;
		obj.onblur = hideAction;
		qf_flag = 1;
	}

	function defaultText(act, from, id) {
		if (!id)
			var id = 'qp';
		var qpobj = document.getElementById(id), tmp;
		//		qpobj.value = qpobj.value.replace(/^\s\+|\s\+$/,'');
		if ((tmp = qpobj.value.replace(/^\s\+|\s\+$/, ''))
				&& tmp != qpobj.value)
			qpobj.value = tmp;
		if (from == 'browse') {
			if (qpobj.value == '' && (act == 'b' || act == 'l')) {
				qpobj.value = "Enter designation, role, skills etc";
				qpobj.style.color = "#8D8D8D";
			} else if (qpobj.value == 'Enter designation, role, skills etc'
					&& (act == 'f' || act == 's')) {
				document.getElementById(id).value = "";
				qpobj.style.color = "#333";
			}
		} else if (from == 'govt') {
			if (qpobj.value == '' && (act == 'b' || act == 'l'))
				qpobj.value = "Put Job Title, Company Name, Skills";
			else if (qpobj.value == 'Put Job Title, Company Name, Skills'
					&& (act == 'f' || act == 's'))
				document.getElementById(id).value = "";
		} else if (from == 'band') {
			if (qpobj.value == '' && (act == 'b' || act == 'l')) {
				qpobj.style.color = "#8D8D8D";
				qpobj.value = "Enter designation, role, skills etc.";
			} else if (qpobj.value == 'Enter designation, role, skills etc.'
					&& (act == 'f' || (act == 's' && !qErrFlag))) {
				qpobj.style.color = "#333";
				document.getElementById(id).value = "";
			} else if (qpobj.value != 'Enter designation, role, skills etc.') {
				qpobj.style.color = "#333";
			}
		}
	}

	function defaultText1(act, id) {
		if (!id)
			var id = 'ql';

		var qlobj = document.getElementById(id), tmp;
		if ((tmp = qlobj.value.replace(/^\s\+|\s\+$/, ''))
				&& tmp != qlobj.value)
			qlobj.value = tmp;
		if (qlobj.value == '' && (act == 'b' || act == 'l')) {
			qlobj.style.color = "#8D8D8D";
			qlobj.value = "Enter city or state";
		}
		if (qlobj.value == 'Enter city or state'
				&& (act == 'f' || (act == 's' && !qErrFlag))) {
			qlobj.style.color = "#333";
			document.getElementById(id).value = "";
		} else if (qlobj.value != 'Enter city or state') {
			qlobj.style.color = "#333";
		}

	}

	function textColordd(elementName) {
		if (gbi(elementName)) {
			elementobj = gbi(elementName);
			getID = elementName.split('SL');
			try {
				var str = elementobj.options[elementobj.selectedIndex].innerHTML;
				if (str == "Select" || str == "Max" || str == "Min"
						|| str == "Exp.") {
					gbi(getID[0]).style.color = "#8D8D8D";
				} else {
					gbi(getID[0]).style.color = "#333";
				}
			} catch (e) {
			}
		} else
			return;
	}
	//Browse Landing Page
	function getHighlight(obj) {
		var getprLI = obj.parentNode.parentNode.getElementsByTagName('li');
		var getAnc = obj.parentNode.parentNode.getElementsByTagName('a');
		for (i = 0; i < getprLI.length; i++) {
			getprLI[i].className = '';
			if (getAnc[i].rel)
				gbi(getAnc[i].rel).style.display = 'none';
		}
		obj.parentNode.className = 'sel';
		if (obj.rel)
			gbi(obj.rel).style.display = 'block';

	}
	function GetExpriredMsg(viewSimilarJobUrl) {
		document.getElementById('expired').innerHTML = '<em class="notifyIcon"></em>This job cannot be applied to anymore as it has either expired or was removed by the advertiser. However you might want to '
				+ '<a href="'+viewSimilarJobUrl+'" target="_blank">view similar jobs.</a>';
	}
	//Search Cluster revamp functions
	function SetSortType(type) {
		if (type != document.getElementById('qsfrmBand').value) {
			document.getElementById('qsfrmBand').value = type;
			document.getElementById('fr').value = 2;
			document.formBand.submit();
			return false;
		}
	}
	function showMore(id, obj) {
		var getLi = gbi(id).getElementsByTagName('*');
		var getIi = 0
		while (getLi[getIi]) {
			getLi[getIi].style.display = '';
			getIi++
		}
		obj.parentNode.style.display = 'none';
	}
	function showFilterResultTag() {
		var inputchk = gbi('colLC').getElementsByTagName('input');
		for (i = 0; i < inputchk.length; i++) {
			if ((inputchk[i].type) == 'checkbox' && inputchk[i].checked) {
				if (gbi('showFR1'))
					gbi('showFR1').style.display = "inline";
				if (gbi('showFR2'))
					gbi('showFR2').style.display = "inline";
				if (gbi('showFR3'))
					gbi('showFR3').style.display = "inline";
			}
		}

	}
	function combinecluster(url) {
		var IsOpen = url;
		var relA = '';
		qm = '';
		qx = '';
		var qo = 0;
		var cityflag = 0;
		var ctcflag = 0;

		var allA = $n('#colL .lChk a');
		for (var i = 0; i < allA.length; i++) {
			var eq = allA.eq(i);
			if (eq.attr('class') == 'chk') {
				if (eq.attr('name') == 'qctc[]') {
					ctcflag = 1;
					if (eq.attr('rel') == "#3") {
						qm = '12477';
						qx = '3';
					}
					if (eq.attr('rel') == "#6") {
						if (qm == '')
							qm = '3';
						qx = '6';
					}
					if (eq.attr('rel') == "#10") {
						if (qm == '')
							qm = '6';
						qx = '10';
					}
					if (eq.attr('rel') == "#15") {
						if (qm == '')
							qm = '10';
						qx = '15';
					}
					if (eq.attr('rel') == "#25") {
						if (qm == '')
							qm = '15';
						qx = '10000000';
					}
				}
				if (eq.attr('name') == "qcity[]")
					cityflag = 1;

				if (eq.attr('name') == 'qo') {
					if (parseInt(trimhash(eq.attr('rel'))) > qo)
						qo = trimhash(eq.attr('rel'));
				} else
					relA += "&" + eq.attr('name') + "="
							+ trimhash(eq.attr('rel'));
			}
		}
		if (qm != '' && qx != '')
			relA += "&qm=" + qm + "&qx=" + qx + "&qctcFil=1";
		if (qo == 0)
			qo = 365;
		relA += "&qo=" + qo;

		url = url + relA;
		if (cityflag == 0 && val_ql)
			url = url + "&ql=" + encodeURIComponent(val_ql);
		if (ctcflag == 0 && val_qctc == "") {
			if (val_ctc && val_ctc != -1) {
				url = url + "&qm=" + val_ctc;
				if (val_qx && val_qx != -1)
					url = url + "&qx=" + val_qx;
				url = url + "&qctcFil=1";
			}
		}
		if (val_qp && IsOpen != "")
			url = url + "&qp=" + encodeURIComponent(val_qp);
		if (val_qe)
			url = url + "&qe=" + val_qe;
		if (val_qs)
			url = url + "&qs=" + val_qs;
		if (val_qc) {
			url = url + "&qc=" + val_qc;
			if (val_qs)
				url = url + "&qcname=" + val_qcname;
		}
		if (IsOpen != "")
			window.open(url, "_self");
		else
			return url;
	}
	function RefineCluster(id, url, cluster, pgflag) {
		if (gbi(id)) {
			var inputchk = gbi(id).getElementsByTagName('input');
			var str = "";
			var qm = "";
			var qx = "";
			var qo = 0;
			var flag = 0;
			var cityflag = 0;
			var ctcflag = 0;
			for (i = 0; i < inputchk.length; i++) {
				if ((inputchk[i].type) == 'checkbox' && inputchk[i].checked) {
					flag = 1;
					if (cluster == 'qo' && inputchk[i].name == cluster) {
						if (parseInt(inputchk[i].value) > qo) {
							qo = parseInt(inputchk[i].value);
							str = "&" + cluster + "=" + qo;
						}
					} else if (inputchk[i].name == pgflag) {
						str += "&" + pgflag + "=" + inputchk[i].value;

					} else if (cluster == 'ctcCluster'
							&& inputchk[i].name == cluster) {
						ctcflag = 1;
						var ctcselect = '';
						if (inputchk[i].value == '1') {
							qm = '12477';
							qx = '3';
							ctcselect += "&qctc[]=1";

						}
						if (inputchk[i].value == '2') {
							if (qm == '') {
								qm = '3';
							}
							qx = '6';
							ctcselect += "&qctc[]=2";
						}
						if (inputchk[i].value == '3') {
							if (qm == '') {
								qm = '6';
							}
							qx = '10';
							ctcselect += "&qctc[]=3";
						}
						if (inputchk[i].value == '4') {
							if (qm == '') {
								qm = '10';
							}
							qx = '15';
							ctcselect += "&qctc[]=4";
						}
						if (inputchk[i].value == '5') {
							if (qm == '') {
								qm = '15';
							}
							qx = '25';
							ctcselect += "&qctc[]=5";
						}
						if (inputchk[i].value == '6') {
							if (qm == '') {
								qm = '25';
							}
							qx = '10000000';
							ctcselect += "&qctc[]=6";
						}
						str += "&qm=" + qm + "&qx=" + qx + "&qctcFil=1";
						if (ctcselect)
							str += ctcselect;
					} else {
						if (cluster == "qcity[]")
							cityflag = 1;
						str += "&" + cluster + "="
								+ encodeURIComponent(inputchk[i].value);
					}
				}
			}
			url = url + str;
			if (cityflag == 0 && val_ql && cluster == "qcity[]")
				url = url + "&ql=" + encodeURIComponent(val_ql);
			if (qo == "" && cluster == 'qo')
				url = url + "&qo=365";
			if (ctcflag == 0 && val_qctc == "") {
				if (val_ctc && val_ctc != -1) {
					url = url + "&qm=" + val_ctc;
					if (val_qx && val_qx != -1)
						url = url + "&qx=" + val_qx;
					url = url + "&qctcFil=1";
				}
			}

		}
		return url;
		//window.open(url,"_self");
	}
	function showRCSuggestion(RXML) {
		var x = RXML.getElementsByTagName("SUGGEST");
		var xcount = x.length;
		var urlE = "";
		for (var i = 0; i < xcount; i++) {
			var li = document.createElement("li");
			var suggestion = x[i].childNodes[0].nodeValue;
			var suggestion1 = suggestion.replace(/\'/g, '').replace(/<b>/g, '')
					.replace(/<\/b>/g, '').replace(/\'/g, '');
			if (suggestion1 != "") {
				gbi('suggestedSearch').style.display = "block";
				urlE = "";
				//urlE = combinecluster(""); 
				li.innerHTML = "&bull; &nbsp;  <a href=\"" + m_u + sr_f
						+ "?xz=1_0_65&qp=" + suggestion1 + urlE + "\">"
						+ suggestion + "</a>";
				gbi('bulID').appendChild(li);
				if (gbi('linktoRC'))
					gbi('linktoRC').style.display = "block";
			}
		}
		// document.getElementById(info).innerHTML=RXML;

	}

	function toggleClassSrp(obj, id) {
		if (obj.className == 'srpPlus') {
			obj.className = 'srpMinus';
			gbi(id).style.display = '';
		} else {
			obj.className = 'srpPlus';
			gbi(id).style.display = 'none';
		}

	}

	function toggleMoreInfo(obj, id) {
		if (obj.className == 'moreInfoPlus') {
			obj.className = 'moreInfoMinus';
			gbi(id).style.display = '';
		} else {
			obj.className = 'moreInfoPlus';
			gbi(id).style.display = 'none';
		}

	}
	function smj_validateEmail(email, err) {
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		var address = document.getElementById(email).value;
		address = address.replace(/^\s+|\s+$/g, "");
		if (reg.test(address) == false) {
			if (gbi(err)) {
				gbi(err).style.display = "block";
				if (address == "")
					gbi(err).innerHTML = "Please enter an e-mail address to receive alerts.";
				else
					gbi(err).innerHTML = "Please enter a valid e-mail address to receive alerts.";
			}
		} else {
			if (search_path)
				smjURL = search_path;
			smjURL = smjURL + "js_msngr.php?f=" + fileStr
					+ "&ma=Save Messenger";
			if (var_xz1 && var_xz2)
				smjURL = smjURL + "&xz=" + var_xz1 + "_" + var_xz2 + "_4" + xid;
			if (crit_u)
				smjURL = smjURL + crit_u;
			address = encodeURIComponent(address);
			if (smj_url)
				smjURL = smjURL + smj_url + "&me=" + address + "&me2="
						+ address + "&nr=1";
			if (xo)
				smjURL = smjURL + "&xo=" + xo;
			window.open(smjURL, "_self");
		}
	}
	/*SUDS*/
	var stopwords = "100% garunteed|100% guaranteed|100% Job Assistance|Account no|Account number|Amount|Application fee|Attractive discounts|Bomb blast|By Industry Professionals|Certification Programme|Certification Program|Charges|Complimentary cover letter|Congratulations|Costs|Courses we offer|Criminal|Cunt|Dag|Degree Program|Degree Programme|Deposit cash|Deposit the cash|Detailed resume critique|Discount|Discover a bright future in ERP|Early Bird Offer|Economy Pack|Electronic mail award promotion|Express Resume|Facial|FESTIVAL OFFER|For admission|For Enquiries|For Enquiries and Registration|For Registration|Freak|Free|Free Class|Free Demo|Free Demo Class|Free registration|Frenchify|Full Payment|Funds to an account|Garunteed placement|Gasbag|Get Certified|Get Trained Certified & Placed !|Get Trained|Goose|guaranteed|Guaranteed placement|Guarantee|Guaranty|High Paying|Illegal|In favor of|In favour of|Interview knowhows|Jackpot lottery|Jerk|Job opportunities|LIC of India|Lottery|LOTTERY DRAW|Lotto|Lucky winners|Microphallus|New Batch|New Batches|NEW BATCHES STARTING|Nigerian local office|Nigger|Nominated bank account|Nonsense|Offer letter|Opportunities!!!!!!!!!|Opportunity!!!|Participate as an investor|Partner naukri.com|Payment|Placement assistance|Premium Resume Development|Privately looking|Redneck|Refugee camp|Refundable|Replacement Clause|Resume Critique|Resume Development|Resume Flash|Scam|Scholarship|Service tax|Skill oriented course|Start-Up Kit|Student visa|Through Industry Professionals|Training Cum Placement|Urgent Attention|Valid till|Value Pack|We charge|Will of god|Winning|Wish to invite|WORLDWIDE OPPORTUNITIES|You are a winner|sexual harassment";

	var stopwordArr = stopwords.split("|");

	function replaceAll(txt, replace, with_this) {
		return txt.replace(new RegExp(replace, 'gi'), with_this);
	}
	function correctlocationspell(loc) {
		loc = loc.replace(/(\()|(\))|(\.)/g, "");
		var temp = "";
		var reg = "\," + loc + "\,";
		var reg1 = "\," + loc + "[a-z]?\,";
		var reg2 = "\," + loc + "\,";
		var locarr = sample1;
		for (var i = 0; i < locarr.length; i++) {
			var splitloc = locarr[i].split(' ');
			if (splitloc.length > 1) {
				for (var j = 0; j < splitloc.length; j++)
					locarr[i] = locarr[i] + "," + splitloc[j];
			}
		}
		loclist = locarr.join(',');
		loclist = "location," + loclist + ",location";
		loclist = loclist.replace(/(\()|(\))|(\.)/g, "");
		for (i = 0; i < loc.length; i++) {
			temp = loc.split('');
			temp[i] = '';
			temp1 = temp.join('');
			reg = reg + "|\," + temp1 + "\,";

			temp = loc.split('');
			temp[i] = "[a-z]?" + temp[i];
			temp1 = temp.join('');
			reg1 = reg1 + "|\," + temp1 + "\,";

			temp = loc.split('');
			temp[i] = "[a-z]?";
			temp1 = temp.join('');
			reg2 = reg2 + "|\," + temp1 + "\,";

		}
		var regex = new RegExp('\\b(' + reg + ')', 'i');
		var matchr = regex.exec(loclist);
		if (matchr)
			return matchr[0].replace(/(^,)|(,$)/g, "");
		else {
			regex = new RegExp('\\b(' + reg1 + ')', 'i');

			matchr = regex.exec(loclist);
			if (matchr)
				return matchr[0].replace(/(^,)|(,$)/g, "");
			else {
				regex = new RegExp('\\b(' + reg2 + ')', 'i');
				matchr = regex.exec(loclist);
				if (matchr)
					return matchr[0].replace(/(^,)|(,$)/g, "");
				else
					return loc;

			}
		}
	}

	function generateStaticURL(kw, loc) {
		kw = kw.replace(/Enter designation, role, skills etc./ig, "").replace(
				/\s{2,}/g, ' ');
		loc = loc.replace(/Enter city or state/ig, "");
		var Kwrd_Action_Str = "";
		var Loc_Action_Str = "";
		var action = "";
		var Spcl_Char_Arr = {
			"+" : " plus ",
			"#" : " sharp ",
			"." : " dot ",
			'"' : " quotes ",
			"'" : " quotes ",
			"/" : " "
		};
		if (kw != "") {
			kw = kw.toLowerCase();
			kw = kw.replace(/\s{2,}/g, " ");
			kw = kw.replace(/\bjobs in\b/gi, "");
			kw = kw.replace(/\bjobs\b/gi, "");
			kw = kw.replace(/\blimited\b/gi, "");
			kw = kw.replace(/\bcorporation\b/gi, "");
			kw = kw.replace(/\bcareers\b/gi, "");
			kw = kw.replace(/\band\b/gi, "");
			kw = kw.replace(/\bor\b/gi, "");
			while (kw.indexOf("c++ c++") != -1)
				kw = kw.replace("c++ c++", "c++");
			for (i in stopwordArr) {
				kw = replaceAll(kw.toLowerCase(), "\\b"
						+ stopwordArr[i].toLowerCase(), "");
			}
			kw = replaceAll(kw, ",", " ");
			kw = kw.replace(/[^.+#\-'" a-zA-Z0-9]/ig, " ").replace(
					/and {1,}$/g, "");
			var Tmp_Kwrd_Str = trim(kw).toLowerCase();
			Tmp_Kwrd_Arr = Tmp_Kwrd_Str.split(",");
			for (i in Tmp_Kwrd_Arr) {
				for (key in Spcl_Char_Arr)
					Tmp_Kwrd_Arr[i] = replaceAll(Tmp_Kwrd_Arr[i], "\\" + key,
							Spcl_Char_Arr[key]);
				Tmp_Kwrd_Arr[i] = trim(replaceAll(Tmp_Kwrd_Arr[i], "\ \ ", " "));
				Tmp_Arr = Tmp_Kwrd_Arr[i].split(" ");
			}
			Kwrd_Action_Str = Tmp_Kwrd_Arr.join(" ");
		}
		if (loc != "") {
			loc = loc.replace(/\bjobs in\b/gi, "");
			loc = loc.replace(/\bjobs\b/gi, "");
			loc = loc.split("\\").join(" ");
			loc = loc.split("/").join(" ");
			loc = loc.replace(/[^, a-zA-Z]/ig, "").replace(/,{1,}$/g, "");
			loc = replaceAll(trim(loc).toLowerCase(), "  ", " ");
			for (i in stopwordArr) {
				loc = replaceAll(loc, "\\b" + stopwordArr[i].toLowerCase()
						+ "\\b", "");
			}
			Loc_Arr = loc.split(",");
			Tmp_Str = Loc_Arr.join(" and ");
			Tmp_Arr = Tmp_Str.split(" ");
			Loc_Action_Str = Tmp_Arr.join(" ");
		}
		if (Kwrd_Action_Str == "" && Loc_Action_Str != "")
			action = action + "jobs in " + Loc_Action_Str;
		else if (Kwrd_Action_Str != "" && Loc_Action_Str == "")
			action = action + Kwrd_Action_Str + " jobs";
		else if (Kwrd_Action_Str != "" && Loc_Action_Str != "")
			action = action + Kwrd_Action_Str + " jobs in " + Loc_Action_Str;
		//finally replace all consecutive duplicate words
		action = action.replace(/[\s]*plus[\s]+(plus[\s]*)+/gi, ' + ');
		action = action.replace(/-/g, " ").replace(/\s{2,}/g, ' ');
		do {
			var newTemp = action;
			var action = newTemp.replace(/\s(\w+\s)\1/, " $1");
			action = action.replace(/^(\w+\s)\1/, "$1");
			action = action.replace(/(\s\w+)\1$/, "$1");
		} while (action.length != newTemp.length);
		while (action.indexOf(" + ") != -1)
			action = action.replace(" + ", " plus plus ");
		action = trim(action).replace(/\s/g, "-");
		if (action == "")
			action = "jobs-in-india";
		return action;
	}

	/*SUDS FUNCTIONS*/
	function setRecentSearches(ckName) {
		if (newflag == "DOWN") {
			/* do nothing */
		} else {
			recentSearchesCookieVal = getCookie(ckName);
			qp = gbi('qp').value;
			ql = gbi('ql').value;
			exp = gbi('expSL').value;//Exp.
			minSal = gbi('minSalSL').value; //MIn
			maxSal = gbi('maxSalSL').value; //Max

			fareaObj = gbi('fareaSL');
			farea = fareaObj.value;
			if (farea == "")
				fareaTxt = ""
			else
				fareaTxt = fareaObj.options[fareaObj.selectedIndex].text;

			indV = new Array("", "", "", "");
			ind = gbi('idqi');
			if (typeof ind != "undefined" && ind != null) {
				j = 0;
				for (l = 0; l < ind.length; l++) {
					if (ind[l].selected && ind[l].selected != "") {
						indV[j++] = ind[l].value;
						indV[j++] = ind[l].text;
					}
				}
			}
			newSearchStr = "";
			if (qp != "" && qp != "undefined"
					&& qp != "Enter designation, role, skills etc,")
				newSearchStr = qp + ", ";
			else
				qp = "";
			if (ql != "" && ql != "undefined" && ql != "Enter city or state")
				newSearchStr += ql + ", ";
			else
				ql = "";
			if (exp != "" && exp != "undefined" && exp != "Exp.") {
				years = exp == 1 ? "yr" : "yrs";
				newSearchStr += exp + " " + years + ", ";
			} else
				exp = "";
			salStr = "";
			if (minSal != "" && minSal != "undefined" && minSal != "-1"
					&& minSal != "Min") {
				if (minSal == 12477)
					salStr = "&lt;.5 Lakhs";
				else {
					lakh = minSal == 1 ? "Lakh" : "Lakhs";
					salStr = minSal + " " + lakh;
				}
				if (maxSal != "" && maxSal != "undefined" && maxSal != "-1"
						&& maxSal != "Max") {
					if (maxSal == 12477)
						salStr += "-&lt;.5 Lakhs";
					else if (maxSal == 10000000) {
						salStr += "-&gt;50 Lakhs "
					} else {
						lakh = maxSal == 1 ? "Lakh" : "Lakhs";
						salStr += "-" + maxSal + " " + lakh;
					}
				} else {
					maxSal = "";
				}
				newSearchStr += salStr + ", ";
			} else {

				maxSal = "";
				minSal = "";
			}
			if (farea != "" && farea != "Select" && farea != "-1") {
				newSearchStr += fareaTxt + ", ";
			}

			blankFlag = true;
			if (indV[0] != "") {
				newSearchStr += indV[1] + ", ";
				blankFlag = false;
			}
			if (indV[2] != "") {
				newSearchStr += indV[3];
				blankFlag = false;
			}
			if (qp == "" && ql == "" && farea == "" && blankFlag) {
				blankFlag = 1;
			}

			newSearchStr = newSearchStrTrimmed = newSearchStr.replace(
					/\s{1,}/g, " ").replace(/,\s{1,}$/g, "");
			if (newSearchStr == '')
				return;
			newSearchStr = newSearchStr.replace(/\'/g, "&#39;").replace(/\"/g,
					"&quot;");

			if (newSearchStr.length > 30)
				newSearchStrTrimmed = newSearchStrTrimmed.substring(0, 27)
						+ "...";
			newSearchStrTrimmed = newSearchStrTrimmed.replace(/\'/g, "&#39;")
					.replace(/\"/g, "&quot;");

			recentSearches = getRecentSearchArray(ckName);

			searchExistFlag = false;
			for (i in recentSearches) {
				if (recentSearches[i][11].replace(/\s{1,}/g, '').toLowerCase() == newSearchStr
						.replace(/\s{1,}/g, '').toLowerCase()) {
					recentSearches.push(recentSearches.splice(i, 1)[0]);
					searchExistFlag = true;
				}
			}

			if (searchExistFlag == false) {
				newSearch = new Array(qp, ql, exp, minSal, maxSal, farea,
						fareaTxt, indV[0], indV[1], indV[2], indV[3],
						newSearchStr, newSearchStrTrimmed);
				recentSearches.push(newSearch);
				if (recentSearches.length > 3)
					recentSearches.shift();
			}

			recentSearchesCookieVal = JSON.stringify(recentSearches);
			setCookie(ckName, recentSearchesCookieVal, "1500", "/",
					cookieDomainName);
		}
	}

	function parseJSON(inputString) {
		if (inputString)
			return (eval('(' + inputString + ')'))
		else
			return false;
	}

	function getRecentSearchArray(ckName) {
		recentSearchesCookieVal = getCookie(ckName);
		if (recentSearchesCookieVal != ""
				&& recentSearchesCookieVal != "undefined")
			recentSearches = parseJSON(recentSearchesCookieVal)
		else
			recentSearches = new Array();
		return recentSearches;
	}

	function submitRecentSearch(index, ckName) {
		recentSearchArray = getRecentSearchArray(ckName);
		srchArr = recentSearchArray[index];

		if (srchArr[0] != "" || srchArr[1] != "") {
			action = domain_cat + generateStaticURL(srchArr[0], srchArr[1]);
		} else
			action = searchpath + searchfilename;

		xz = gbi("xz").value;
		xzArr = xz.split("_");
		xzArr[1] = "13";
		xz = xzArr.join("_");

		rcntSrchFrm = "<form id='rcnt_srch_frm' action='"+action+"' method='post' ><input type='hidden' name='qp' id='r_qp' value=''><input type='hidden' id='r_ql' name='ql' value=''><input type='hidden' id='r_qe' name='qe' value=''><input type='hidden' id='r_qm' name='qm' value=''><input id='r_qx' type='hidden' name='qx' value=''>";
		farea = "<input type='hidden' name ='qf[]' id='r_qf'  value=''>";
		ind1 = "<input type='hidden' name ='qi[]' id='r_qi1' value=''>";
		ind2 = "<input type='hidden' name ='qi[]' id='r_qi2' value=''>";
		xz = "<input type='hidden' name ='xz' value='"+xz+"'>";
		ctcFil = "";
		if (typeof srchArr[3] != undefined && srchArr[3] != "")
			ctcFil = "<input type='hidden' name ='qctcFil' value='1'>";
		rcntSrchFrm += farea + ind1 + ind2 + xz + ctcFil + "</form>";

		gbi('div_rcnt_srch_frm').innerHTML = rcntSrchFrm;
		gbi("r_qp").value = srchArr[0];
		gbi("r_ql").value = srchArr[1];
		gbi("r_qe").value = srchArr[2];
		gbi("r_qm").value = srchArr[3];
		gbi("r_qx").value = srchArr[4];
		gbi("r_qf").value = srchArr[5];
		gbi("r_qi1").value = srchArr[7];
		gbi("r_qi2").value = srchArr[9];

		recentSearches.push(recentSearches.splice(index, 1)[0]);
		recentSearchesCookieVal = JSON.stringify(recentSearches);
		setCookie(ckName, recentSearchesCookieVal, "1500", "/",
				cookieDomainName);

		gbi('rcnt_srch_frm').submit();

	}
	function getRecentSearchContent(ckName) {
		recentSearches = getRecentSearchArray(ckName);
		rcntSrchStr = "";
		if (recentSearches != 'undefined' && recentSearches.length != 0) {
			for (i in recentSearches) {
				if (i == 0)
					pipe = "";
				else
					pipe = "|";
				rcntSrchStr = "<li title=\""+recentSearches[i][11]+"\"><a href=\"javascript:submitRecentSearch("
						+ i
						+ ",'"
						+ ckName
						+ "')\"  >"
						+ recentSearches[i][12]
						+ "</a>" + pipe + "</li>" + rcntSrchStr;
			}
			rcntSrchStr = "<div class=\"recent_s\"><ul><li>Recent Searches: </li>"
					+ rcntSrchStr;
			rcntSrchStr += "</ul></div>";

		}
		return rcntSrchStr;
	}