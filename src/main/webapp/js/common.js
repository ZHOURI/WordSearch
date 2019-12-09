$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
function sendAjax(url) {
    $("#myform").submit(function (e) {
        e.preventDefault();
        var para = $("#myform").serializeObject() ;
        // alert(para);
        para = JSON.stringify(para) ;
        $.ajax({
            url:url,
            type:"post",
            contentType:"application/json;charset=UTF-8",
            data:para,
            success:function (data) {
                console.log(data);
                if(data.status=="true")
                {
                    alert(data.success);
                    self.location=document.referrer;
                }
                else
                {
                    alert(data.error);
                }
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function addStuOne() {

}
function addRepair(url1,url2){
    $("#submit1").click(function (e) {
        e.preventDefault();
        var para = $("#myform").serializeObject();
        para = JSON.stringify(para) ;
        // alert(para);
        $.ajax({
            url:url1,
            type:"post",
            contentType:"application/json;charset=UTF-8",
            data:para,
            success:function (data) {
                if(data.status=="true")
                {
                    if($("#images").val()==''&&$("#images1").val()=='')
                    {
                        self.location=document.referrer;
                        return;
                    }
                    var id = data.id;
                    var formData = new FormData($("#myform1")[0]);
                    $.ajax({
                        url:url2+"?id="+id,
                        type:"post",
                        data:formData,
                        async: false,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success:function (data) {
                            if(data.status=="true")
                            {
                                alert("添加成功");
                                self.location=document.referrer;
                            }
                            else
                            {
                                alert("添加失败");
                            }
                        },
                        error:function () {
                            alert("访问出错");
                        }
                    })
                }
                else
                {
                    alert(data.error);
                }
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
// function addRepair(){
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject();
//         para = JSON.stringify(para) ;
//         alert(para);
//         $.ajax({
//             url:'${pageContext.request.contextPath}/man/addRepair.do',
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     if($("#images").val()==''&&$("#images1").val()=='')
//                     {
//                         self.location=document.referrer;
//                         return;
//                     }
//                     var id = data.id;
//                     var formData = new FormData($("#myform1")[0]);
//                     $.ajax({
//                         url:"${pageContext.request.contextPath}/man/addRepairImages.do?id="+id,
//                         type:"post",
//                         data:formData,
//                         async: false,
//                         cache: false,
//                         contentType: false,
//                         processData: false,
//                         success:function (data) {
//                             if(data.status=="true")
//                             {
//                                 alert("添加成功");
//                                 self.location=document.referrer;
//                             }
//                             else
//                             {
//                                 alert("添加失败");
//                             }
//                         },
//                         error:function () {
//                             alert("访问出错");
//                         }
//                     })
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
function mySelect(arg) {
    $("#select option").each(function () {
        if(this.text==arg)
        {
            this.selected="selected";
            return;
        }
    })
}

function editOne(url,id) {
    $("#myform").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:url,
            data:{id:id},
            type:"post",
            success:function (data) {
                alert(data.msg);
                fresh();
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function editFormOne(ele,url,id) {
    ele.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:url,
            data:{id:id},
            type:"post",
            success:function (data) {
                alert(data.msg);
                fresh();
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function editStay(stayId)
{
    $.ajax({
        url:"/man/editStay.do",
        data:{id:stayId},
        type:"post",
        success:function (data) {
            alert(data.msg);
            fresh();
        },
        error:function () {
            alert("访问出错");
        }
    })
}
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
function fresh(){
    // 框架内页面刷新：可实现局部刷新与整个页面重定向
    self.location.reload();  //刷新框架内页面
    // window.parent.location.href='http://koushuling.top'; //页面重定向
};
function jump(url,totalPage) {
    var currentPage = $("#jump").val();
    if(currentPage<=0||currentPage>totalPage)
    {
        alert("超出页数限定范围");
        return;
    }
    else
    {
        window.location.href=url+"&currentPage="+currentPage;
    }

}
// function editFees(feesId)
// {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/editFees.do",
//         data:{id:feesId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }

// function editWater(waterId)
// {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/editWater.do",
//         data:{id:waterId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
function delSelect() {
    var delSelect = document.getElementById("delSelect");
    delSelect.onclick= function () {
        var flag= confirm("确定删除所选项？");
        if(flag)
        {
            var uids = document.getElementsByName("uids");
            flag1 = false;
            for(var i=0;i<uids.length;i++)
            {
                if(uids[i].checked)
                {
                    flag1=true;
                    break;
                }
            }
        }
        if(flag1)
        {
            $("#myform").submit();
        }
    }

    document.getElementById("first").onclick=function()
    {
        var uids = document.getElementsByName("uids");
        for(var i=0;i<uids.length;i++)
        {
            uids[i].checked = this.checked;
        }
    }
}
// function editRepair(repairId)
// {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/editRepair.do",
//         data:{id:repairId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }

function addStuPunish() {
    var a=document.querySelector('#header a');
    var login=document.getElementById('login_content');
    var beijing=document.getElementById('beijing');
    var head=document.getElementById('head');
    a.onclick=function(){
        login.style.display='block';
        beijing.style.display='block';
    }
    head.onmousedown=function(e){
        var login=document.getElementById('login_content');
        e=e||event;
        var x=e.pageX-login.offsetLeft;
        var y=e.pageY-login.offsetTop;
        document.onmousemove=function(e){
            //点击着移动，所以onmousemove嵌入在onmousedown中
            e=e||event;
            var loginX=e.pageX-x;
            var loginY=e.pageY-y;
            loginX=loginX<0?0:loginX;
            loginY=loginY<0?0:loginY;
            maxX=window.innerWidth-login.offsetWidth;
            maxY=window.innerHeight-login.offsetHeight;
            loginX=loginX>maxX?maxX:loginX;
            loginY=loginY>maxY?maxY:loginY;
            login.style.left=loginX+150+'px';
            login.style.top=loginY+150+'px';
        }
    }
    document.onmouseup=function(){
        document.onmousemove=null;
    };
    $("#btf").click(function()
    {
        login.style.display='none';
        beijing.style.display='none';
    });
    $("#submit1").click(function (e) {
        e.preventDefault();
        var para = $("#myform").serializeObject() ;
        para = JSON.stringify(para) ;
        // alert(para);
        $.ajax({
            url:"${pageContext.request.contextPath}/man/addStuPunish.do",
            type:"post",
            contentType:"application/json;charset=UTF-8",
            data:para,
            success:function (data) {
                if(data.status=="true")
                {
                    alert(data.success);
                    fresh();
                }
                else
                {
                    alert(data.error);
                }

            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function openImages() {
    var login=document.getElementById('login_content');
    var beijing=document.getElementById('beijing');
    var head=document.getElementById('head');
    login.style.display='block';
    beijing.style.display='block';
    letDivCenter(login);
    head.onmousedown=function(e){
        var login=document.getElementById('login_content');
        e=e||event;
        var x=e.pageX-login.offsetLeft;
        var y=e.pageY-login.offsetTop;
        document.onmousemove=function(e){
            //点击着移动，所以onmousemove嵌入在onmousedown中
            e=e||event;
            var loginX=e.pageX-x;
            var loginY=e.pageY-y;
            loginX=loginX<0?0:loginX;
            loginY=loginY<0?0:loginY;
            maxX=window.innerWidth-login.offsetWidth;
            maxY=window.innerHeight-login.offsetHeight;
            loginX=loginX>maxX?maxX:loginX;
            loginY=loginY>maxY?maxY:loginY;
            login.style.left=loginX+150+'px';
            login.style.top=loginY+150+'px';
        }
    }
    document.onmouseup=function(){
        document.onmousemove=null;
    };
    $("#btf").click(function()
    {
        login.style.display='none';
        beijing.style.display='none';
    });
    $("#submit").click(function (e) {
        e.preventDefault();
        var formData = new FormData($("#myform1")[0]);
        $.ajax({
            url:"${pageContext.request.contextPath}/com/updRepairImages.do",
            type:"post",
            data:formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success:function (data) {
                alert("上传成功");
                login.style.display='none';
                beijing.style.display='none';
                self.location=document.referrer;
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
// function updateStuFees() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updFees.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
function letDivCenter(divName){
    var top = (document.body.clientHeight - $(divName).height())/2;
    var left = ($(window).width() - $(divName).width())/2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    console.log($(window).height());
    $(divName).css( { position : 'fix', 'top' :  top, left : left + scrollLeft } ).show();
}
function open(msg) {
    // var a=$("tr td:nth-child(4) a");
    // var msg = a.text();
    var login=document.getElementById('login_content');
    // var beijing=document.getElementById('beijing');
    var head=document.getElementById('head');
    var submit1=document.getElementById("submit1");
    var msgElem = document.getElementById("msg");
    login.style.display='block';
    // beijing.style.display='block';
    letDivCenter(login);
    msgElem.innerText = msg;
    submit1.onclick=function(){
        login.style.display='none';
        beijing.style.display='none';
    }
}
function updateRepair(url,id,url1) {
    $("#submit1").click(function (e) {
        e.preventDefault();
        var para = $("#myform").serializeObject() ;
        para = JSON.stringify(para);
        // alert(para);
        // var formData = new FormData($("#myform")[0]);
        $.ajax({
            url:url,
            type:"post",
            contentType:"application/json;charset=UTF-8",
            data:para,
            success:function (data) {
                if(data.status=="true")
                {
                    if($("#images").val()==''&&$("#images1").val()=='')
                    {
                        self.location=document.referrer;
                        return;
                    }
                    var formData = new FormData($("#myform1")[0]);
                    $.ajax({
                        url:url1+"?id="+id,
                        type:"post",
                        data:formData,
                        async: false,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success:function (data) {
                            alert("上传成功");
                            self.location=document.referrer;
                        },
                        error:function () {
                            alert("访问出错");
                        }
                    })
                }
                else
                {
                    alert(data.error);
                }
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
// function updateRoomPunish() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updRoomPunish.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function updateWater() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updWater.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function updateStay() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/stu/updStay.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
function updateOne(url) {
    $("#submit1").click(function (e) {
        e.preventDefault();
        var para = $("#myform").serializeObject() ;
        para = JSON.stringify(para);
        // alert(para);
        $.ajax({
            url:url,
            type:"post",
            contentType:"application/json;charset=UTF-8",
            data:para,
            success:function (data) {
                if(data.status=="true")
                {
                    alert(data.success);
                    self.location=document.referrer;
                }
                else
                {
                    alert(data.error);
                }
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
// function updateHealth() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updHealth.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function updateVisitor() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updVisitor.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function updateNotice() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updNotice.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function updateStuPunish() {
//     $("#submit1").click(function (e) {
//         e.preventDefault();
//         var para = $("#myform").serializeObject() ;
//         para = JSON.stringify(para);
//         alert(para);
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/updStuPunish.do",
//             type:"post",
//             contentType:"application/json;charset=UTF-8",
//             data:para,
//             success:function (data) {
//                 if(data.status=="true")
//                 {
//                     alert(data.success);
//                     self.location=document.referrer;
//                 }
//                 else
//                 {
//                     alert(data.error);
//                 }
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }

// function delStuFees(feesId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delStuFees.do",
//         data:{id:feesId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
// function delRoomPunish(roomPunishId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delRoomPunish.do",
//         data:{id:roomPunishId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
// function delWater(waterId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delWater.do",
//         data:{id:waterId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
function delOne(url,Id) {
    var flag= confirm("确定删除该成语？");
    if(!flag)
    {
        return;
    }
    $("#myform").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:url,
            data:{id:Id},
            type:"post",
            success:function (data) {
                if(data) {
                    alert("删除成功");
                    fresh();
                }
                else{
                    alert("删除失败");
                }
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function delFormOne(ele,url,Id) {
    ele.submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:url,
            data:{id:Id},
            type:"post",
            success:function (data) {
                alert(data.msg);
                fresh();
            },
            error:function () {
                alert("访问出错");
            }
        })
    })
}
function queryOne(url,Id) {
    $("#myform").submit(function (e) {
        e.preventDefault();
        window.location.href=url+'?id='+Id;
    })
}
function queryFormOne(ele,url,Id) {
    ele.submit(function (e) {
        e.preventDefault();
        window.location.href=url+'?id='+Id;
    })
}
// function delNotice(noticeId) {
//     $("#myform").submit(function (e) {
//         e.preventDefault();
//         $.ajax({
//             url:"${pageContext.request.contextPath}/man/delNotice.do",
//             data:{id:noticeId},
//             type:"post",
//             success:function (data) {
//                 alert(data.msg);
//                 fresh();
//             },
//             error:function () {
//                 alert("访问出错");
//             }
//         })
//     })
// }
// function delVisitor(visitorId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delVisitor.do",
//         data:{id:visitorId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
// function delRepair(repairId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delRepair.do",
//         data:{id:repairId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }
// function delStay(stayId) {
//     $.ajax({
//         url:"${pageContext.request.contextPath}/man/delStay.do",
//         data:{id:stayId},
//         type:"post",
//         success:function (data) {
//             alert(data.msg);
//             fresh();
//         },
//         error:function () {
//             alert("访问出错");
//         }
//     })
// }

