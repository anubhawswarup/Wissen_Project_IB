package com.wissen.model;

public class AccountRequest {

	String username;
	Type accountType;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Type getAccountType() {
		return accountType;
	}
	public void setAccountType(Type accountType) {
		this.accountType = accountType;
	}

}