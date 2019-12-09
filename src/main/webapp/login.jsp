<%--
  Created by IntelliJ IDEA.
  User: 黑客Jack
  Date: 2019/11/4
  Time: 17:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<html>--%>
<%--<head>--%>
    <%--<title>Title</title>--%>
    <%--<script src="js/jquery-1.11.0.min.js"></script>--%>
<%--</head>--%>
<%--<body>--%>
<%--<form action="${pageContext.request.contextPath}/login" method="post" id="myForm">--%>
    <%--<lable>用户名：</lable><input type="text" name="username">--%>
    <%--<label>密码：</label><input type="password" name="password">--%>
    <%--<input type="submit" name="" id="" value="提交">--%>
<%--</form>--%>
<%--${error_msg}--%>
<%--</body>--%>
<%--</html>--%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>成语词典登录界面</title>

    <link rel="stylesheet" type="text/css" href="./css/login.css" />
</head>
<body>
<form action="${pageContext.request.contextPath}/user/login" method="post" id="myform">
<div class="container">
    <div class="sigup-form">
        <div class="logo-box">
            <span style="font-weight: bold; font-size:20px ;">用户登陆</span>
            <div class="logo"></div>
        </div>
        <input type="admin" class="form-control username" name="username" placeholder="请输入用户名"/></br>
        <input type="password" class="form-control password" name="password" placeholder="请输入密码"/></br>
        <a href="javascript:void(0);" class="submit-btn">登陆</a>
        <div class="login-tip" style="color: #fd3366;font-size: 13px ; opacity: 0;"></div>
    </div>
</div>
</form>

<script src="./js/jquery-3.2.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="./js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
<script src="./js/app.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    $(".submit-btn").handleLogin();
</script>

</body>
</html>
