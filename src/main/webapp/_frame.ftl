[#-- if we have a user in the request, we display the application --]
[#if _r.user??]
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>ProjectMVC: Simple AddressBook</title>

	<link rel="stylesheet" href="${_r.contextPath}/bootstrap/css/bootstrap.min.css" type="text/css" />
	<!--
	<link rel="stylesheet" href="${_r.contextPath}/bootstrap/css/bootstrap-theme.min.css" type="text/css" />
	-->

	[@webBundle path="/js/" type="js" /]

	[@webBundle path="/css/" type="css" /]

</head>

<body>
	[@includeFrameContent /]
</body>

</html>
[#-- if no user, we include the loginpage --]
[#else]
[@includeTemplate name="loginpage.ftl"/] 
[/#if]