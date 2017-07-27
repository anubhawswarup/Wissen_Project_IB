package com.wissen.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the address database table.
 * 
 */
@Entity
@NamedQuery(name="Address.findAll", query="SELECT a FROM Address a")
public class Address implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="address_id")
	private int addressId;
	
	private String country;

	private String pincode;

	private String state;

	private String street;

	//bi-directional one-to-one association to User
	@JsonIgnore
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_name")
	private User user;
	
	public Address() {
	}
	

	
	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", country=" + country + ", pincode=" + pincode + ", state=" + state
				+ ", street=" + street + ", user=" + user + "]";
	}



	public int getAddressId() {
		return addressId;
	}


	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}


	public String getCountry() {
		return this.country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPincode() {
		return this.pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStreet() {
		return this.street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}


}