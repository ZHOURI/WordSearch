<%--
  Created by IntelliJ IDEA.
  User: 黑客Jack
  Date: 2019/8/25
  Time: 20:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<html>
<head>
    <!-- 指定字符集 -->
    <meta charset="utf-8">
    <!-- 使用Edge最新的浏览器的渲染方式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- viewport视口：网页可以根据设置的宽度自动进行适配，在浏览器的内部虚拟一个容器，容器的宽度与设备的宽度相同。
    width: 默认宽度与设备的宽度相同
    initial-scale: 初始的缩放比，为1:1 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>在线用户后台管理</title>
    <!-- 1. 导入CSS的全局样式 -->
    <link href="../../css/bootstrap.min.css" rel="stylesheet">
    <!-- 2. jQuery导入，建议使用1.9以上的版本 -->
    <script src="../../js/jquery-3.2.1.min.js"></script>
    <!-- 3. 导入bootstrap的js文件 -->
    <script src="../../js/bootstrap.min.js"></script>
    <script src="../../js/common.js"></script>
    <link rel="stylesheet" href="../../css/style.css">
    <script>
        $(function () {
            delSelect();
        })
    </script>
    <style type="text/css">
        td, th {
            text-align: center;
        }
    </style>
</head>
<body>
<div class="container" style="width: 1800px">
    <h3 style="text-align: center">用户管理</h3>
    <div style="float:left;">
        <form class="form-inline" style="margin: 5px" action="${pageContext.request.contextPath}/user/queryUser" method="post">
            <div class="form-group" style="margin-left: 10px">
                <label for="exampleInputAddress1">姓名</label>
                <input type="text" class="form-control" id="exampleInputAddress1" name="username" value="${map.username[0]}" placeholder="">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
        </form>
    </div>
    <div style="float: left;margin-top: 30px;">
        <a href="${pageContext.request.contextPath}/user/addUser?currentPage=${pageResult.currentPage}"><button type="button" class="btn btn-primary">添加用户</button></a>
        <a id="delSelect"><button type="button" class="btn btn-primary">删除选中</button></a>
    </div>
    <form method="post" action="${pageContext.request.contextPath}/user/queryUser?currentPage=${pageResult.currentPage}" id="myform">
        <table border="1" class="table table-bordered table-hover">
            <tr class="success">
                <th><input type="checkbox" name="uid" id="first"></th>
                <th>编号</th>
                <th>名字</th>
                <th>密码</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            <c:if test="${empty pageResult.list}">
                <tr><td colspan="9">暂无相关消息</td></tr>
            </c:if>
            <c:if test="${not empty pageResult.list}">
                <c:forEach items="${pageResult.list}" var="user" varStatus="u">
                    <tr>
                        <td><input type="checkbox" name="uids" value="${user.id}"></td>
                        <td>${u.count}</td>
                        <td>${user.username}</td>
                        <td>${user.password}</td>
                        <td><fmt:formatDate value="${user.creattime}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
                        <td colspan="2"><button class="btn btn-default btn-sm" onclick="queryOne('${pageContext.request.contextPath}/user/queryUserOne',${user.id})">修改</button>&nbsp;<button class="btn btn-default btn-sm" onclick="delOne('${pageContext.request.contextPath}/user/delUser',${user.id})">删除</button></td>
                        </td>
                    </tr>
                </c:forEach>
            </c:if>
            <tr>
                <td colspan="7" style="text-align:center"><a class="btn btn-primary" href="${pageContext.request.contextPath}/user/addUserView">添加用户</a></td>
            </tr>
        </table>
    </form>
    <c:if test="${pageResult.totalPages>0}">
        <ul class="pagination">
            <c:if test="${pageResult.currentPage<=1}">
                <li class="disabled"><a href="javascript:void(0)">&laquo;</a></li>
            </c:if>
            <c:if test="${pageResult.currentPage>1}">
                <li><a href="${pageContext.request.contextPath}/user/queryUser?currentPage=${pageResult.currentPage-1}&room_ID=${map.room_ID[0]}">&laquo;</a></li>
            </c:if>
            <c:forEach begin="${pageResult.currentPage-5>0?(pageResult.totalPages-pageResult.currentPage<=5?pageResult.totalPages-9:pageResult.currentPage-4):1}" end="${pageResult.currentPage<=pageResult.totalPages-5?(pageResult.currentPage+5<10&&pageResult.totalPages>=10?10:pageResult.currentPage+5):pageResult.totalPages}" step="1" varStatus="s" var="i">
                <c:if test="${pageResult.currentPage==i}">
                    <li class="active"><a href="${pageContext.request.contextPath}/user/queryUser?currentPage=${i}&room_ID=${map.room_ID[0]}">${i}</a></li>
                </c:if>
                <c:if test="${pageResult.currentPage!=i}">
                    <li><a href="${pageContext.request.contextPath}/user/queryUser?currentPage=${i}&room_ID=${map.room_ID[0]}">${i}</a></li>
                </c:if>
            </c:forEach>
            <c:if test="${pageResult.currentPage>=pageResult.totalPages}">
                <li class="disabled"><a href="javascript:void(0)">&raquo;</a></li>
            </c:if>
            <c:if test="${pageResult.currentPage<pageResult.totalPages}">
                <li><a href="${pageContext.request.contextPath}/user/queryUser?currentPage=${pageResult.currentPage+1}&room_ID=${map.room_ID[0]}">&raquo;</a></li>
            </c:if>
            <li style="font-size: 25px;margin-left: 20px">总共有${pageResult.totalCount}条记录,有${pageResult.totalPages}页</li>
        </ul><br>
        <span style="font-size: 20px;margin-top: 15px">跳转到：<input type="text" style="width: 100px;height: 30px;" id="jump" value="${pageResult.currentPage}">
            <a><button type="button" class="btn btn-primary" onclick="jump('/user/queryUser?room_ID=${map.room_ID[0]}',${pageResult.totalPages})">跳转到</button></a>
        </span>
    </c:if>
</div>
<div id="login_content">
    <div id="head"><span>文本详情</span></div>
    <div id="login_tent">
        <div style="width: 400px;height: 400px;word-wrap: break-word;padding: 20px">
            <p id="msg"></p>
        </div>
        <p style="text-align: center;"><input type="submit" value="关闭" id="submit1" style="width:50px;"/></p>
    </div>
</div>
<div id="beijing"></div>
</body>
</html>
