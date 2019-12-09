<%--
  Created by IntelliJ IDEA.
  User: 黑客Jack
  Date: 2019/12/8
  Time: 18:48
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<!-- 网页使用的语言 -->
<html lang="zh-CN">
<head>
    <%--<base href="<%=basePath%>"/>--%>
    <!-- 指定字符集 -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>修改用户</title>
    <script src="../../js/jquery-3.2.1.min.js"></script>
    <script src="../../js/common.js"></script>
    <link href="../../css/bootstrap.min.css" rel="stylesheet">
    <script src="../../js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../../css/style.css">
    <link rel="stylesheet" href="../../css/bootstrap-markdown.min.css" type="text/css">
    <script type="text/javascript" src="../../js/bootstrap-markdown.js" ></script>
    <script>
        $(function () {
            $("#editor-zh").markdown({language:'zh'});
            sendAjax("${pageContext.request.contextPath}/man/editWord");
        })
    </script>
</head>
<body>
<div class="container" style="width: 50%;">
    <h3 style="text-align: center;">修改成语</h3>
    <form action="" method="post" id="myform">
        <input type="text" name="id" value="${Word.id}" hidden>
        <div class="form-group">
            <label for="word">成语：</label>
            <input type="text" class="form-control" id="word" name="word" value="${Word.word}" />
        </div>
        <div class="form-group">
            <label for="pinyin">拼音：</label>
            <input type="text" class="form-control" id="pinyin" name="pinyin" value="${Word.pinyin}"  />
        </div>
        <div class="form-group">
            <label for="abbreviation">首字母：</label>
            <input type="text" class="form-control" id="abbreviation" name="abbreviation" value="${Word.abbreviation}"  />
        </div>
        <div class="form-group">
            <label>出处：</label><br/>
            <textarea name="derivation" rows="10" style="width: 100%">${Word.derivation}</textarea>
        </div>
        <div class="form-group">
            <label>解释：</label><br/>
            <textarea name="explanation" rows="10" style="width: 100%">${Word.explanation}</textarea>
        </div>
        <div class="form-group">
            <label>示例：</label>
            <textarea id="editor-zh" name="example" rows="10">${Word.example}</textarea>
        </div>

        <div class="form-group" style="text-align: center">
            <input class="btn btn-primary" id="submit1" type="submit" value="提交" />
            <input class="btn btn-default" type="reset" value="重置" />
            <input class="btn btn-default" type="button" value="返回" onclick="history.back()"/>
        </div>
    </form>
</div>
</body>
</html>


