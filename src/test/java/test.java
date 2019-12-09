import cn.honeyjam.mapper.WordMapper;
import cn.honeyjam.service.WordService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:application.xml"})
public class test {
    @Autowired
    private WordService wordService;
    @Autowired
    private WordMapper wordMapper;
    @Test
    public void teststart()
    {
//        PageResult<Word> word = wordService.queryWord("一马",1,2);
//        System.out.println(word);
    }

}
