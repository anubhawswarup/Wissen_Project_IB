package com.wissen.model;

import java.util.Date;

public class BeneficiaryResponse {
	
	String accountNum;
	String userName;
	double balance;
	Type type;
	Date openingDate;
	
	
	public Date getOpeningDate() {
		return openingDate;
	}
	public void setOpeningDate(Date openingDate) {
		this.openingDate = openingDate;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public String getAccountNum() {
		return accountNum;
	}
	public void setAccountNum(String accountNum) {
		this.accountNum = accountNum;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
		
	public Type getType() {
		return type;
	}
	public void setType(Type type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "BeneficiaryResponse [accountNum=" + accountNum + ", userName=" + userName + ", balance=" + balance
				+ ", type=" + type + ", openingDate=" + openingDate + "]";
	}
	

}
