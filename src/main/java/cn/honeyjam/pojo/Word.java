package cn.honeyjam.pojo;

import javax.annotation.Generated;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "bas_idiom")
public class Word {
    @Id
    private Integer id;
    private String word;
    private String pinyin;
    private String abbreviation;
    private String derivation;
    private String explanation;
    private String example;
    private Integer addUserId;

    @Override
    public String toString() {
        return "Word{" +
                "id=" + id +
                ", word='" + word + '\'' +
                ", pinyin='" + pinyin + '\'' +
                ", abbreviation='" + abbreviation + '\'' +
                ", derivation='" + derivation + '\'' +
                ", explanation='" + explanation + '\'' +
                ", example='" + example + '\'' +
                ", addUserId=" + addUserId +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getPinyin() {
        return pinyin;
    }

    public void setPinyin(String pinyin) {
        this.pinyin = pinyin;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getDerivation() {
        return derivation;
    }

    public void setDerivation(String derivation) {
        this.derivation = derivation;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getExample() {
        return example;
    }

    public void setExample(String example) {
        this.example = example;
    }

    public Integer getAddUserId() {
        return addUserId;
    }

    public void setAddUserId(Integer addUserId) {
        this.addUserId = addUserId;
    }
}
