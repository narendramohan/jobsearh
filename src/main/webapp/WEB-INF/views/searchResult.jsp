<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ page session="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Search Result page</title>
	<script src="../../resources/jquery-1.3.2.debug.js" type="text/javascript"></script>
    <script src="../../resources/json.htmTable.js" type="text/javascript"></script>
    <script src="../../resources/json.debug.js" type="text/javascript"></script>
    <link href="../../resources/css/default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
$(document).ready(function() {
var data = '${jsonString}';

var json = JSON.parse(data);
$('#DynamicGridLoading').hide();
$('#DynamicGrid').append(CreateDetailView(data, "lightPro", true)).fadeIn();
$("#button").click(function(){
    window.location.href='/jobsearch/spring/searchJob';
});
});
</script>

</head>
<body>
<form id="form1" >
    <div id="DynamicGrid" >
        <div id="DynamicGridLoading" >
            <img src="../../resources/images/loading.gif" /><span> Loading Data... </span>
        </div>
    </div>
    </form>
</body>
</html>