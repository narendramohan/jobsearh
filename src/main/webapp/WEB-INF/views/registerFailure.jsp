<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>webchat</title>
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
background-image:url('<%=request.getContextPath()%>/images/ShBZl.png');
background-color:#cccccc;
}
</style>
</head>
<body>
	<h2>User registration is unsuccessful. Please <a href="<%=request.getContextPath()%>/spring/register">register</a> again.</h2>
	<h3>To login please <a href="<%=request.getContextPath()%>/spring/">click here</a>.</h3>
</body>
</html>