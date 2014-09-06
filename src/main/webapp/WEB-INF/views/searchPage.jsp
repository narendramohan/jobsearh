<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Home</title>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="resources/pbTable.min.js"></script>
<script src="resources/search.js"></script>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="resources/css/screen.css"> 
	
<script>
	var a = 0;
	var b = 0;
	var suggestelement = "qp";
	var form_n = "form3";
	var sample = Array();
	var set = 9;

	var newflag = "";
	var disable = Array();
	var a11 = 0;
	var b11 = 0;
	var suggestelement1 = "ql";
	var form_n1 = "form3";
	var sample1 = Array();
	var newflag1 = "";
	var disable = Array();
	var domain_cat = "http://jobsearch.naukri.com/";
	var cookieDomainName = ".naukri.com";
	var adv_form = 1;
	var ckName = "rcnt_srch";
	$(document).ready(function(e) {
		$('#tabla-demo').pbTable({
			selectable : true,
			sortable : true,
			toolbar : {
				enabled : true,
				filterBox : true,
				tags : [ {
					display : 'Woman',
					toSearch : 'woman'
				}, {
					display : 'Batman',
					toSearch : 'batman'
				}, {
					display : 'DC Comics',
					toSearch : 'DC Comics'
				}, ],
				buttons : [ 'view', 'edit', 'delete' ]
			},
			onView : function() {
				alert('View button was pressed');
			},
			onEdit : function() {
				alert('Edit button was pressed');
			},
			onDelete : function() {
				alert('Delete button was pressed');
			}
		});
	});

	
</script>
</head>
<body>
	<div id="autosuggest" style="display: none">
		<ul></ul>
	</div>
	<div id="autosuggest1" style="display: none">
		<ul></ul>
	</div>
	<form name=form3 action="search/job"
		onsubmit="if(validate11('ql,qp,qf[],qi[]','form3','Please enter Keywords or select Job Category or Industry to search.',new Array('qp','eo','idqi','ql'))) { setRecentSearches('rcnt_srch'); return true;} else return false;"
		method=POST>
		<div class="cl">&nbsp;</div>
		<div class="sp30"></div>
		<input type="hidden" name="xz" value="2_0_5"><input
			type="hidden" name="xt" value="qf"><input type="hidden"
			name="xid" value="140826390375946100"> <input type="hidden"
			name="xz" value="1_0_2"> <input type="hidden" id="uen"
			name="uen" value=""> <input type="hidden" id="usl" name="usl"
			value=""> <input type="hidden" id="fsug" name="fsug" value="">
		<input type="hidden" name="id" value=""> <input type="hidden"
			id="qctcFil" name="qctcFil" value="1">
		<div class="wrapper">
			<div class="colL_ASP">
				<h1 class="bt_Bdr_org h1_20">Search Jobs</h1>
				<div class="tpBg_ASP">
					<div class="sp10"></div>
					<div id="idErrMsg"></div>
					<div class="row_frm" id="divid_qp">
						<label for="keywds">Keywords:</label>
						<p>
							<input type="text" name="keyword" id="qp" class="text"
								onkeypress="removeError(new Array('qp','ql','eo','idqi'),'form',1);"
								onfocus="tooltip('Skills, Designation etc.', this);" value=""
								autocomplete="off" />
							<script>
								if (a)
									createAutoSuggest('qp', 'form3', 'autosuggest');
							</script>
							<em class="dispBlk">Skills, Designation etc.</em>
						</p>
					</div>
					<div class="row_frm">
						<label for="exp">Job Title:</label>
						<p>
							<select name="jobTitle" id="jobTitle"><option value="" selected>Job Title.</option>
								<option value="0">Software Engineer</option>
								<option value="1">Hardware Engineer</option>
								</select>
						</p>
					</div>
					<div class="row_frm">
						<label for="jobType">Job Type:</label>
						<p>
							<select name="qe" id="expSL"><option value="" selected>Job Type.</option>
								<option value="0">Full Time</option>
								<option value="1">Part Time</option>
								<option value="2">Contract</option>
								<option value="3">Intern ship</option>
								</select>
						</p>
					</div>
					<div class="row_frm">
						<label for="exp">Experience:</label>
						<p>
							<select name="expSL" id="expSL"><option value="" selected>Exp.</option>
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option></select>
						</p>
					</div>
					<div class="row_frm" id="divid_ql">
						<label for="location">Location:</label>
						<p>
							<input type="text" name="loc" id="ql" class="text" value=""
								onblur="hidetip();"
								onfocus="tooltip('Separate multiple locations by comma.', this)"
								autocomplete="off"
								onkeypress="removeError(new Array('qp','ql','eo','idqi'),'form',1);" />
							<em class="dispBlk">Separate multiple locations by comma</em>
						</p>
					</div>
					<script>
						if (a11) {
							createAutoSuggest('ql', 'form3', 'autosuggest1');
						}
					</script>
					
					<div class="row_frm">
						<label for="expectedSal">Expected Salary:</label>
						<p>
							<select name="expSal" id="minSalSL" onChange="change_qx('on');" ><option
									value="-1">Min</option>
								<option value="12477">&lt; .5</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
								<option value="34">34</option>
								<option value="35">35</option>
								<option value="36">36</option>
								<option value="37">37</option>
								<option value="38">38</option>
								<option value="39">39</option>
								<option value="40">40</option>
								<option value="41">41</option>
								<option value="42">42</option>
								<option value="43">43</option>
								<option value="44">44</option>
								<option value="45">45</option>
								<option value="46">46</option>
								<option value="47">47</option>
								<option value="48">48</option>
								<option value="49">49</option>
								<option value="50">50</option></select> <em>&ndash;</em> <select
								name="qx" id="maxSalSL">
								<option value=-1 selected>Max</option>
							</select> <em>In Lakhs</em>
						</p>
					</div>
					
					<div class="sp20"></div>
					<div class="srcBt">
						<button id="search" type="submit">
							<div>
								<p></p>
								<b>Search</b><em></em>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>
	
</body>
</html>
