package com.example.myapp.entity;


public class User extends BaseEntity<Long> {

    private String username;
    private String pwd;
    
    public User(){};

    public User(String username, String pwd){
        setUsername(username);
        setPwd(pwd);
    }

    // --------- Persistent Properties --------- //
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    // --------- /Persistent Properties --------- //
    
    
}
