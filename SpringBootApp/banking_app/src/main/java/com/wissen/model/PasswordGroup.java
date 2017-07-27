package com.wissen.model;

public class PasswordGroup {
	private String cpassword;
	private String password;
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "PasswordGroup [cpassword=" + cpassword + ", password=" + password + "]";
	}
	

}
