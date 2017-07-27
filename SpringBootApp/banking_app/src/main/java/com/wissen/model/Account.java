package com.wissen.model;

import java.io.Serializable;
import javax.persistence.*;

import com.couchbase.client.deps.com.fasterxml.jackson.annotation.JsonBackReference;
import com.couchbase.client.deps.com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Date;

/**
 * The persistent class for the account database table.
 * 
 */
@Cacheable(false)
@Entity
@NamedQuery(name="Account.findAll", query="SELECT a FROM Account a")
public class Account implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="acc_num")
	private String accNum;

	private double balance;

	@Enumerated(EnumType.STRING)
	private Type type;

	
	@JsonIgnoreProperties({"password","lname"})
	@ManyToOne()
	@JoinColumn(name="user_name")
	private User user;

	//bi-directional many-to-many association to Account

	@JsonIgnoreProperties("beneficiaries")	
	@ManyToMany(cascade=CascadeType.ALL)
	@JoinTable(
		name="beneficiary"
		, joinColumns={
			@JoinColumn(name="beneficiary_acc_num")
			}
		, inverseJoinColumns={
			@JoinColumn(name="acc_num")
			}
		)
	private List<Account> beneficiaries;

	
	//bi-directional many-to-one association to Transfer
	
	@JsonIgnore
	@OneToMany(mappedBy="fromAccount",cascade=CascadeType.ALL)
	private List<Transfer> transfersfrom;
	
	@JsonIgnore
	@OneToMany(mappedBy="toAccount",cascade=CascadeType.ALL)
	private List<Transfer> transfersto;
	
	@Temporal(TemporalType.DATE)
	@Column(name="opening_date")
	private Date openingDate;


	public Account() {
	}
	
		
	
	public Date getOpeningDate() {
		return openingDate;
	}



	public void setOpeningDate(Date openingDate) {
		this.openingDate = openingDate;
	}



	public String getAccNum() {
		return accNum;
	}

	public void setAccNum(String accNum) {
		this.accNum = accNum;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Account> getBeneficiaries() {
		return beneficiaries;
	}
	
	public void setBeneficiaries(List<Account> beneficiaries) {
		this.beneficiaries = beneficiaries;
	}

	public List<Transfer> getTransfersfrom() {
		return transfersfrom;
	}

	public void setTransfersfrom(List<Transfer> transfersfrom) {
		this.transfersfrom = transfersfrom;
	}

	public List<Transfer> getTransfersto() {
		return transfersto;
	}

	public void setTransfersto(List<Transfer> transfersto) {
		this.transfersto = transfersto;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((accNum == null) ? 0 : accNum.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Account other = (Account) obj;
		if (accNum == null) {
			if (other.accNum != null)
				return false;
		} else if (!accNum.equals(other.accNum))
			return false;
		return true;
	}



	@Override
	public String toString() {
		return "Account [accNum=" + accNum+ "balance"+this.getBalance()+"]";
	}
	
}