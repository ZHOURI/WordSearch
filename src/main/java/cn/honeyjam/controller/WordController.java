package cn.honeyjam.controller;

import cn.honeyjam.pojo.PageResult;
import cn.honeyjam.pojo.Word;
import cn.honeyjam.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/words")
public class WordController {
    @Autowired
    private WordService service;
    @RequestMapping("/queryWord")
    public ResponseEntity<PageResult<Word>> queryWord(
            @RequestParam("word")String word,
            @RequestParam(value = "currentPage",defaultValue = "1")Integer currentPage,
            @RequestParam(value = "rows",defaultValue = "10")Integer rows,
            HttpServletRequest request
            )
    {
        Map<String,String[]> map = request.getParameterMap();
        PageResult<Word> result = service.queryWord(map,word, currentPage, rows);
        return ResponseEntity.ok(result);
    }

}
