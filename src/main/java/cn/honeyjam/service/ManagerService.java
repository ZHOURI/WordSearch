package cn.honeyjam.service;

import cn.honeyjam.mapper.ManagerMapper;
import cn.honeyjam.mapper.WordMapper;
import cn.honeyjam.pojo.User;
import cn.honeyjam.pojo.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author 黑客Jack
 */
@Service
public class ManagerService {
    @Autowired
    private ManagerMapper managerMapper;
    @Autowired
    private WordMapper wordMapper;
    public boolean checkLogin(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return false;
    }

    public Word queryWordOne(Integer id) {
        Word word = wordMapper.selectByPrimaryKey(id);
        if(word==null)
        {
            return null;
        }
        return word;
    }

    public Boolean addWord(Word word) {
        word.setId(null);
        return wordMapper.insert(word)>0;
    }

    public Boolean delWord(Integer id) {
       return wordMapper.deleteByPrimaryKey(id)>0;
    }

    public Boolean editWord(Word word) {
        return wordMapper.updateByPrimaryKeySelective(word)>0;
    }
}
