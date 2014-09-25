<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Home</title>
<link href="<%=request.getContextPath()%>/resources/css/css-menu.css" rel="stylesheet" type="text/css" />

<style>
.error {
	color: #ff0000;
}

.errorblock{
	color: #000;
	background-color: #ffEEEE;
	border: 3px solid #ff0000;
	padding:8px;
	margin:16px;
}
body
{
background-image:url('../resources/images/ShBZl.png');
background-color:#cccccc;
}
</style>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="resources/pbTable.min.js"></script>
<script src="resources/search.js"></script>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="resources/css/screen.css"> 
<script>	
function openTab(obj, tab){
	var els = document.getElementsByTagName("a");
	for (var i = 0, l = els.length; i < l; i++) {
	    var el = els[i];
	    if (el.innerText == obj.innerText) {
	       el.className='current';
	    } else {
	    	el.className='';
	    }
	}
	if(tab=='createJob'){
		 document.getElementById('framepage').src = '/jobsearch/spring/createJob';
	} else if(tab=='searchJob'){
		 document.getElementById('framepage').src = '/jobsearch/spring/searchJob';
	} 
}
</script>
</head>
<body>
<div align="right" style="position:absolute;top: 0px;right: 0px">
		<a style="text-decoration: none;" href="<%=request.getContextPath()%>/spring/logout"><font style="padding-left : 20px;" size="3" color="white">Logout</font></a>
	</div>
	<div class="menu4">
    <a href="#1" onclick="openTab(this, 'searchJob')" class="current"><span>Search Job</span></a>
    <a href="#2" onclick="openTab(this, 'createJob')"><span>Create Job</span></a>

</div>
<div class="menu4sub">

 </div>
 <iframe id='framepage' width="100%" height="600" src="/jobsearch/spring/searchJob"> </iframe>
	
	
</body>
</html>
