<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<title>Create Job</title>
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
	<form:form commandName="search" action="saveJob" onsubmit="if(validate11('ql,qp,qf[],qi[]','form3','Please enter Keywords or select Job Category or Industry to search.',new Array('qp','eo','idqi','ql'))) { setRecentSearches('rcnt_srch'); return true;} else return false;"
		method="POST">
		<div class="cl">&nbsp;</div>
		<div class="sp30"></div>
		<input type="hidden" name="xz" value="2_0_5"><input
			type="hidden" name="xt" value="qf"><input type="hidden"
			name="xid" value="140826390375946100"> <input type="hidden"
			name="xz" value="1_0_2"> <input type="hidden" id="uen"
			name="uen" value=""> <input type="hidden" id="usl" name="usl"
			value=""> <input type="hidden" id="fsug" name="fsug" value="">
		<input type="hidden" name="id" value=""> 
		<input type="hidden" id="qctcFil" name="qctcFil" value="1">
		<form:hidden path="jobId"/>
		<div class="wrapper">
			<div class="colL_ASP">
				<h1 class="bt_Bdr_org h1_20">Create Jobs</h1>
				<div class="tpBg_ASP">
					<div class="sp10"></div>
					<div id="idErrMsg"></div>
					<div class="row_frm" id="divid_qp">
						<label for="keywds">Keywords:</label>
						<p>
							<form:input type="text" path="keyword" id="qp" class="text"
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
							<form:select path="jobTitle" id="jobTitle">
								<form:option value="" selected="ture" lable="Job Title."/>
								<form:option value="0" label="Software Engineer"/>
								<form:option value="1" label="Hardware Engineer"/>
								</form:select>
						</p>
					</div>
					<div class="row_frm">
						<label for="jobType">Job Type:</label>
						<p>
							<form:select path="jobType" name="qe" id="jobType">
								<form:option value="" selected="ture" label="Job Type"/>
								<form:option value="0" label="Full Time"/>
								<form:option value="1" label="Part Time"/>
								<form:option value="2" lable="Contract"/>
								<form:option value="3" label="Intern ship"/>
								</form:select>
						</p>
					</div>
					 <div class="row_frm">
						<label for="exp">Experience:</label>
						<p>
							<form:select path="exp" name="exp" id="exp">
								<form:option value="" selected="true" label="Exp."/>
								<form:option value="0" label="0"/>
								<form:option value="1" label="1"/>
								<form:option value="2" label="2"/>
								<form:option value="3" label="3"/>
								<form:option value="4" label="4"/>
								<form:option value="5" label="5"/>
								<form:option value="6" label="6"/>
								<form:option value="7" label="7"/>
								<form:option value="8" label="8"/>
								<form:option value="9" label="9"/>
								<form:option value="10" label="10"/>
								<form:option value="11" label="11"/>
								<form:option value="12" label="12"/>
								<form:option value="13" label="13"/>
								<form:option value="14" label="14"/>
								<form:option value="15" label="15"/>
								<form:option value="16" label="16"/>
								<form:option value="17" label="17"/>
								<form:option value="18" label="18"/>
								<form:option value="19" label="19"/>
								<form:option value="20" label="20"/>
								<form:option value="21" label="21"/>
								<form:option value="22" label="22"/>
								<form:option value="23" label="23"/>
								<form:option value="24" label="24"/>
								<form:option value="25" label="25"/>
								<form:option value="26" label="26"/>
								<form:option value="27" label="27"/>
								<form:option value="28" label="28"/>
								<form:option value="29" label="29"/>
								<form:option value="30" label="30"/></form:select>
						</p>
					</div>
					<div class="row_frm" id="divid_ql">
						<label for="location">Location:</label>
						<p>
							<form:input type="text" path="location" id="ql" class="text" value=""
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
							<form:select path="expectedSal"  name="expSal" id="minSalSL" onChange="change_qx('on');" >
								<form:option
									value="-1" selected="true" label="Min"/>
								<form:option value="12477" label="&lt; .5"/>
								<form:option value="1" label="1"/>
								<form:option value="2" label="2"/>
								<form:option value="3" label="3"/>
								<form:option value="4" label="4"/>
								<form:option value="5" label="5"/>
								<form:option value="6" label="6"/>
								<form:option value="7" label="7"/>
								<form:option value="8" label="8"/>
								<form:option value="9" label="9"/>
								<form:option value="10" label="10"/>
								<form:option value="11" label="11"/>
								<form:option value="12" label="12"/>
								<form:option value="13" label="13"/>
								<form:option value="14" label="14"/>
								<form:option value="15" label="15"/>
								<form:option value="16" label="16"/>
								<form:option value="17" label="17"/>
								<form:option value="18" label="18"/>
								<form:option value="19" label="19"/>
								<form:option value="20" label="20"/>
								<form:option value="21" label="21"/>
								<form:option value="22" label="22"/>
								<form:option value="23" label="23"/>
								<form:option value="24" label="24"/>
								<form:option value="25" label="25"/>
								<form:option value="26" label="26"/>
								<form:option value="27" label="27"/>
								<form:option value="28" label="28"/>
								<form:option value="29" label="29"/>
								<form:option value="30" label="30"/>
								<form:option value="31" label="31"/>
								<form:option value="32" label="32"/>
								<form:option value="33" label="33"/>
								<form:option value="34" label="34"/>
								<form:option value="35" label="35"/>
								<form:option value="36" label="36"/>
								<form:option value="37" label="37"/>
								<form:option value="38" label="38"/>
								<form:option value="39" label="39"/>
								<form:option value="40" label="40"/>
								<form:option value="41" label="41"/>
								<form:option value="42" label="42"/>
								<form:option value="43" label="43"/>
								<form:option value="44" label="44"/>
								<form:option value="45" label="45"/>
								<form:option value="46" label="46"/>
								<form:option value="47" label="47"/>
								<form:option value="48" label="48"/>
								<form:option value="49" label="49"/>
								<form:option value="50" label="50"/>
								</form:select> <em>&ndash;</em> 
								<form:select path="maxSal" 	name="qx" id="maxSalSL">
								<form:option value="-1" selected="true" label="Max"/>
							</form:select> <em>In Lakhs</em>
						</p>
					</div> 
					
					<div class="sp20"></div>
					<div class="srcBt">
						<button id="search" type="submit">
							<div>
								<p></p>
								<b>Save</b><em></em>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</form:form>
	
</body>
</html>
