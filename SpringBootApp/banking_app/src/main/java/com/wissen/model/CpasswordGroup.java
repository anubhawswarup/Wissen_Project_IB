package com.wissen.model;

public class CpasswordGroup {
	
private String newPassword;
private String cnewPassword;
public String getNewPassword() {
	return newPassword;
}
public void setNewPassword(String newPassword) {
	this.newPassword = newPassword;
}
public String getCnewPassword() {
	return cnewPassword;
}
public void setCnewPassword(String cnewPassword) {
	this.cnewPassword = cnewPassword;
}
@Override
public String toString() {
	return "CpasswordGroup [newPassword=" + newPassword + ", cnewPassword=" + cnewPassword + "]";
}

}
