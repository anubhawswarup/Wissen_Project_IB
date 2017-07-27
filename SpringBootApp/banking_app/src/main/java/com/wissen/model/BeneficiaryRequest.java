package com.wissen.model;

public class BeneficiaryRequest {
	
	String fromAccount;
	String toAccount;
	String userName;
	public String getFromAccount() {
		return fromAccount;
	}
	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}
	public String getToAccount() {
		return toAccount;
	}
	public void setToAccount(String toAccount) {
		this.toAccount = toAccount;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "BeneficiaryRequest [fromAccount=" + fromAccount + ", toAccount=" + toAccount + ", userName=" + userName
				+ "]";	}
		
}
