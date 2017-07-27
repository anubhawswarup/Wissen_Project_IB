package com.wissen.model;

public class DeleteBenRequest {
	
	private String account;
	private String benId;
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getBenId() {
		return benId;
	}
	public void setBenId(String benId) {
		this.benId = benId;
	}
	@Override
	public String toString() {
		return "DeleteBenRequest [account=" + account + ", benId=" + benId + "]";
	}
	

}
