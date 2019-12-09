package cn.honeyjam.controller;

import cn.honeyjam.pojo.PageResult;
import cn.honeyjam.pojo.User;
import cn.honeyjam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
@RequestMapping("user")
@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("login")
    public String checkLogin(
            HttpServletRequest request,
            @RequestParam("username")String username,
            @RequestParam("password")String password,
            Model model) {
        if (username!= null && password!= null) {
            boolean b = userService.checkLogin(username, password);
            if (b) {
                HttpSession session = request.getSession();
                session.setAttribute("user",username);
                return "index";
            } else {
                model.addAttribute("error_msg", "用户名或者密码不正确");
            }
        } else {
            model.addAttribute("error_msg", "用户名或者密码不能为空");
        }
        return "loginView";
    }

    @RequestMapping("logout")
    public String logout(HttpServletRequest request)
    {
        HttpSession session = request.getSession();
        session.removeAttribute("user");
        return "loginView";
    }

    @RequestMapping("loginView")
    public String loginView() {
        return "loginView";
    }

    @RequestMapping("registerView")
    public String registerView(){
        return "registerView";
    }

    @RequestMapping("register")
    public Map<String,String> register(@RequestBody User user)
    {
        Map<String,String> map = new HashMap<>();
        if(user == null)
        {
            map.put("status","false");
            map.put("error","注册失败");
            return map;
        }
        Boolean register = userService.register(user);
        if(register)
        {
            map.put("status","true");
            map.put("success","注册成功");
        }
        else{
            map.put("status","false");
            map.put("error","注册失败");
        }
        return map;
    }

    @RequestMapping("queryUser")
    public String queryUser(
            @RequestParam(value = "currentPage",defaultValue = "1")Integer currentPage,
            @RequestParam(value = "rows",defaultValue = "10")Integer rows,
            @RequestParam(value = "username",defaultValue = "")String username,
            HttpServletRequest request,
            Model model
    ){
        Map<String,String[]> map = request.getParameterMap();
        PageResult<User> pageResult = userService.queryUser(map, username, currentPage, rows);
        model.addAttribute("pageResult",pageResult);
        model.addAttribute("map",map);
        return "managerUsers";
    }
    @ResponseBody
    @RequestMapping("delUser")
    public Boolean delUser(@RequestParam("id")Integer id)
    {
        if(id<0){
            return false;
        }
       return userService.delUser(id);
    }
    @ResponseBody
    @RequestMapping("addUser")
    public Map<String,String> addUser(@RequestBody User user){
        Map<String,String> map = new HashMap<>();
        if(user==null)
        {
            map.put("status","false");
            map.put("error","添加失败");
        }
        Boolean b = userService.addUser(user);
        if(b)
        {
            map.put("status","true");
            map.put("success","添加成功");
        }else{
            map.put("status","false");
            map.put("error","添加失败");
        }
        return map;
    }
    @ResponseBody
    @RequestMapping("editUser")
    public Map<String,String> editUser(@RequestBody User user)
    {
        Map<String,String> map = new HashMap<>();
        if(user.getId()==null)
        {
            map.put("status","false");
            map.put("error","修改失败");
        }
        Boolean b = userService.editUser(user);
        if(b)
        {
            map.put("status","true");
            map.put("success","修改成功");
        }else{
            map.put("status","false");
            map.put("error","修改失败");
        }
        return map;
    }

    @RequestMapping("queryUserOne")
    public String queryUserOne(@RequestParam("id")Integer id, Model model)
    {
        if(id<0){
            return null;
        }
        User user = userService.queryUserOne(id);
        model.addAttribute("User",user);
        return "editUserView";
    }

    @RequestMapping("addUserView")
    public String addUserView()
    {
        return "addUserView";
    }
}
