package com.wissen.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;


/**
 * The persistent class for the user database table.
 * 
 */
@Entity
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="user_name")
	private String userName;

	@Column(name="aadhar_num")
	private String aadharNum;

	private String email;

	private String fname;

	private String gender;

	private String lname;

	private String mname;

	@Column(name="pancard_num")
	private String pancardNum;

	@JsonIgnore
	private String password;

	private String phone;
	
	@Enumerated(EnumType.STRING)
	private Roles role;
	@Enumerated(EnumType.STRING)
	private Status status;

	//bi-directional many-to-one association to Account
	@JsonIgnore
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	private List<Account> accounts;

	//bi-directional one-to-one association to Address

	@OneToOne(mappedBy="user", fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	private Address address;

		
	
	public User() {
	}
	
	@Override
	public String toString() {
		return "User [userName=" + userName + ", aadharNum=" + aadharNum + ", email=" + email + ", fname=" + fname
				+ ", gender=" + gender +  ", lname=" + lname + ", mname=" + mname
				+ ", pancardNum=" + pancardNum + ", password=" + password + ", phone=" + phone + ", role=" + role
				+ ", status=" + status + ", accounts=" + accounts + ", address=" + address + "]";
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

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Roles getRole() {
		return this.role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public Status getStatus() {
		return this.status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Account> getAccounts() {
		return this.accounts;
	}

	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}

	public Account addAccount(Account account) {
		getAccounts().add(account);
		account.setUser(this);

		return account;
	}

	public Account removeAccount(Account account) {
		getAccounts().remove(account);
		account.setUser(null);

		return account;
	}

	public Address getAddress() {
		return this.address;
	}

	public void setAddress(Address address) {
		this.address = address;
		this.address.setUser(this);
	}

}