package cn.honeyjam.service;

import cn.honeyjam.mapper.WordMapper;
import cn.honeyjam.pojo.PageResult;
import cn.honeyjam.pojo.Word;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;


@Service
public class WordService {
    @Autowired
    private WordMapper wordMapper;
    @Autowired
    private ManagerService managerService;
    @Transactional
    public PageResult<Word> queryWord(Map<String,String[]> map,String word, Integer currentPage, Integer rows)
    {
        Set<String> keySet = map.keySet();
        for(String key : keySet)
        {
            if("uids".equals(key))
            {
                String[] uids = map.get("uids");
                if(uids.length<=0)
                {
                    continue;
                }
                for(int i=0;i<uids.length;i++)
                {
                    Integer id = Integer.parseInt(uids[i]);
                    managerService.delWord(id);
                }
            }
        }
        PageHelper.startPage(currentPage,rows);
        List<Word> wordList = wordMapper.queryWord(word);
        Page<Word> pageInfo = (Page<Word>)wordList;
        return new PageResult(currentPage,rows,pageInfo.getResult(), (long) pageInfo.getPages(),pageInfo.getTotal());
    }
}
