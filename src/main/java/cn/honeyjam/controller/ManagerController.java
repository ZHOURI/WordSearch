package cn.honeyjam.controller;

import cn.honeyjam.pojo.PageResult;
import cn.honeyjam.pojo.Word;
import cn.honeyjam.service.ManagerService;
import cn.honeyjam.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("man")
@Controller
public class ManagerController {
    @Autowired
    private ManagerService managerService;
    @Autowired
    private WordService wordService;
    @RequestMapping("managerWords")
    public String managerWords(
            Model model,
           @RequestParam(value = "word",defaultValue = "") String word,
           @RequestParam(value = "currentPage",defaultValue = "1") Integer currentPage,
           @RequestParam(value = "rows",defaultValue = "10")Integer rows,
            HttpServletRequest request
            )
    {
        Map<String,String[]> map = request.getParameterMap();
        PageResult<Word> pageResult = wordService.queryWord(map, word, currentPage, rows);
        model.addAttribute("pageResult",pageResult);
        model.addAttribute("map",map);
        return "managerWords";
    }

    @RequestMapping("index")
    public String index()
    {
        return "index";
    }

    @RequestMapping("addWordView")
    public String addWord()
    {
        return "addWordView";
    }

    @RequestMapping("queryWordOne")
    public String queryWordOne(Model model,@RequestParam("id")Integer id)
    {
        Word word = managerService.queryWordOne(id);
        model.addAttribute("Word",word);
        return "editWordView";
    }

    @ResponseBody
    @RequestMapping("addWord")
    public Map<String,String> addWord(@RequestBody Word word)
    {
        Map<String , String> map = new HashMap<>();
        if(word==null)
        {
            map.put("error","添加失败");
            map.put("status","false");
        }
        Boolean b = managerService.addWord(word);
        if(b)
        {
            map.put("success","添加成功");
            map.put("status","true");
        }
        else
        {
            map.put("error","添加失败");
            map.put("status","false");
        }
        return map;
    }

    @ResponseBody
    @RequestMapping("editWord")
    public Map<String,String> editWord(@RequestBody Word word)
    {
        Map<String , String> map = new HashMap<>();
        if(word.getId()==null)
        {
            map.put("error","修改失败");
            map.put("status","false");
        }
        Boolean b = managerService.editWord(word);
        if(b)
        {
            map.put("success","修改成功");
            map.put("status","true");
        }
        else
        {
            map.put("error","修改失败");
            map.put("status","false");
        }
        return map;
    }
    @ResponseBody
    @RequestMapping("delWord")
    public Boolean delWord(@RequestParam("id")Integer id)
    {
        if(id<0)
        {
            return false;
        }
        return managerService.delWord(id);
    }
}
