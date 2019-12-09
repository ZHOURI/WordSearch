<%--
  Created by IntelliJ IDEA.
  User: 黑客Jack
  Date: 2019/8/12
  Time: 18:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<meta http-equiv="pragma"content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires"content="0">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 1. 导入CSS的全局样式 -->
<link href="../../css/bootstrap.css" rel="stylesheet">
<!-- 2. jQuery导入，建议使用1.9以上的版本 -->
<script src="../../js/jquery-3.2.1.min.js"></script>
<script src="../../js/common.js"></script>
<!-- 3. 导入bootstrap的js文件 -->
<script src="../../js/bootstrap.js"></script>
<link href="../../css/downStyle.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="../../css/style.css" type="text/css">
<script src="../../js/script.js"></script>
<html>
<head>
    <title>在线成语后台管理</title>
    <link rel="icon" href="../image/dorm.png" sizes="32x32">
</head>
<body>
<div>
    <div id="header">
        <p style="line-height: 100px;text-align: center;color: white;font-size: 50px">在线后台管理成语库</p>
        <div id="nav1">
            <ul>
                <li><a href="">了解更多</a></li>
                <li><a href="">关于我们</a></li>
                <li><a href="${pageContext.request.contextPath}/user/logout">退出</a></li>
                <li><a href="">主页</a></li>
            </ul>
        </div>
    </div>
    <div id="content">
        <div id="left" style="background-color:lightskyblue;width: 18%;height: auto;float: left;">
            <div>
                <div class="colors" style="margin-left: 20px"><a href="javascript:void(0)" class="default"> </a><a href="javascript:void(0)" class="blue"> </a><a href="javascript:void(0)" class="white"></a></div>
                <div id="menu" class="menu">
                    <div class="menu-header">管理面板</div>
                    <ul>
                        <li><a href="${pageContext.request.contextPath}/man/managerWords"><i class="fa fa-user"> </i>成语管理</a></li>
                        <li><a href="${pageContext.request.contextPath}/user/queryUser"><i class="fa fa-user"> </i>成员管理</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="right" style="background-color: white;width:82%;height: auto;float: left;">
            <iframe src="${pageContext.request.contextPath}/man/managerWords" name="myframe" width="100%" height="100%" frameborder="0px" scrolling="">
            </iframe>
        </div>
    </div>
</div>
</body>
</html>
