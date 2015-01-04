package com.example.myapp.entity;


public class Contact extends BaseEntity<Long> {

    private String email;

    
    
    // --------- Persistent Properties --------- //

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
    
    // --------- /Persistent Properties --------- //
    
    
}
