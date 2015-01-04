package com.example.myapp.entity;


public class Group extends BaseEntity<Long> {
    
    private String name;
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


}
