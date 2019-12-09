package cn.honeyjam.pojo;

import com.sun.istack.internal.NotNull;

import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Table(name = "user")
public class User implements Serializable {
    @Id
    private Integer id;
    @NotNull
    private String username;
    @NotNull
    private String password;
    private Date createtime;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", createtime=" + createtime +
                '}';
    }

    public Date getCreattime() {
        return createtime;
    }

    public void setCreattime(Date creattime) {
        this.createtime = creattime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
