package com.wissen.model;

public class UpdateUserRequest {
	private String userName;
	private String email;
	private String phone;
	private String pincode;
	private String street;
	private String state;
	private String country;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincoide) {
		this.pincode = pincoide;
	}
	@Override
	public String toString() {
		return "UpdateUserRequest [userName=" + userName + ", email=" + email + ", phone=" + phone + ", pincode="
				+ pincode + ", street=" + street + ", state=" + state + ", country=" + country + "]";
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	

}
