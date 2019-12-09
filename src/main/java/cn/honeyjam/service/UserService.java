package cn.honeyjam.service;

import cn.honeyjam.mapper.UserMapper;
import cn.honeyjam.pojo.PageResult;
import cn.honeyjam.pojo.User;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;
    public boolean checkLogin(String username, String password) {
        User user = new User();
        user.setPassword(password);
        user.setUsername(username);
        User user1 = userMapper.selectOne(user);
        if(user1!=null)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public Boolean register(User user) {
        return userMapper.insert(user)>0;
    }

    public Boolean delUser(Integer id) {
        return userMapper.deleteByPrimaryKey(id)>0;
    }

    public PageResult<User> queryUser(Map<String, String[]> map, String username, Integer currentPage, Integer rows) {
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
                    delUser(id);
                }
            }
        }
        PageHelper.startPage(currentPage,rows);
        Example example = new Example(User.class);
        Example.Criteria criteria = example.createCriteria();
        if(!"".equals(username))
        {
            criteria.andLike("username",username);
        }
        List<User> userList = userMapper.selectByExample(example);
        Page<User> pageInfo = (Page<User>)userList;
        return new PageResult(currentPage,rows,pageInfo.getResult(), (long) pageInfo.getPages(),pageInfo.getTotal());
    }

    public Boolean addUser(User user) {
        user.setId(null);
        user.setCreattime(new Date());
        return userMapper.insertSelective(user)>0;
    }

    public User queryUserOne(Integer id) {
        User user = userMapper.selectByPrimaryKey(id);
        if(user!=null)
        {
            return user;
        }
        return null;
    }

    public Boolean editUser(User user) {
        return userMapper.updateByPrimaryKeySelective(user)>0;
    }
}
