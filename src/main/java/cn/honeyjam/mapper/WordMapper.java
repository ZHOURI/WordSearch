package cn.honeyjam.mapper;

import cn.honeyjam.pojo.Word;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;
@org.apache.ibatis.annotations.Mapper
public interface WordMapper extends Mapper<Word> {
    @Select("select * from bas_idiom where word like CONCAT('%',#{word},'%')")
    List<Word> queryWord(@Param("word")String word);

}
