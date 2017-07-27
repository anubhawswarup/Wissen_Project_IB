package com.wissen.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserRequest {

	private String userName;

	
	private String aadharNum;

	private String email;

	private String fname;

	private String gender;

	private String lname;

	private String mname;

	private String pancardNum;

	//private  PasswordGroup passwordGroup;

	private String phone;
	
	private Address address;
	
	public UserRequest() {
	}
	
	

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getAadharNum() {
		return this.aadharNum;
	}

	public void setAadharNum(String aadharNum) {
		this.aadharNum = aadharNum;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFname() {
		return this.fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
	public String getLname() {
		return this.lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getMname() {
		return this.mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getPancardNum() {
		return this.pancardNum;
	}

	public void setPancardNum(String pancardNum) {
		this.pancardNum = pancardNum;
	}

	
	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Address getAddress() {
		return this.address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}



//	public PasswordGroup getPasswordGroup() {
//		return passwordGroup;
//	}
//
//
//
//	public void setPasswordGroup(PasswordGroup passwordGroup) {
//		this.passwordGroup = passwordGroup;
//	}
//


	@Override
	public String toString() {
		return "UserRequest [userName=" + userName + ", aadharNum=" + aadharNum + ", email=" + email + ", fname="
				+ fname + ", gender=" + gender + ", lname=" + lname + ", mname=" + mname + ", pancardNum=" + pancardNum
				 + ", phone=" + phone + ", address=" + address + "]";
	}
	
}
