package com.wissen.model;

public class ChangePasswordRequest {
	
	private String oldPassword;
	private CpasswordGroup cpasswordGroup;
	private String username;
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public CpasswordGroup getCpasswordGroup() {
		return cpasswordGroup;
	}
	public void setCpasswordGroup(CpasswordGroup cpasswordGroup) {
		this.cpasswordGroup = cpasswordGroup;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "ChangePasswordRequest [oldPassword=" + oldPassword + ", cpasswordGroup=" + cpasswordGroup
				+ ", username=" + username + "]";
	}

}
