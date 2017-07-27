package com.wissen.model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@Cacheable(false)
@Entity
@NamedQuery(name="Transfer.findAll", query="SELECT t FROM Transfer t")
public class Transfer implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="tranfer_id")
	private int tranferId;

	private double amount;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm a")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="time_stamp")
	private Date timeStamp;

	//bi-directional many-to-one association to Account
	@JsonIgnoreProperties({"balance","type","user","beneficiaries","transfersfrom","transfersto","openingDate"})
	@ManyToOne()
	@JoinColumn(name="acc_num")
	private Account fromAccount;

	//bi-directional many-to-one association to Account
	@JsonIgnoreProperties({"balance","type","user","beneficiaries","transfersfrom","transfersto","openingDate"})
	@ManyToOne()
	@JoinColumn(name="transfer_acc_num")
	private Account toAccount;
	
	
	private String description;
	

	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Transfer() {
	}


	public int getTranferId() {
		return tranferId;
	}


	public void setTranferId(int tranferId) {
		this.tranferId = tranferId;
	}

	public double getAmount() {
		return this.amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getTimeStamp() {
		return this.timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}

	public Account getFromAccount() {
		return fromAccount;
	}

	public void setFromAccount(Account fromAccount) {
		this.fromAccount = fromAccount;
	}

	public Account getToAccount() {
		return toAccount;
	}

	public void setToAccount(Account toAccount) {
		this.toAccount = toAccount;
	}


	@Override
	public String toString() {
		return "Transfer [tranferId=" + tranferId + ", amount=" + amount + ", timeStamp=" + timeStamp + ", fromAccount="
				+ fromAccount + ", toAccount=" + toAccount + ", description=" + description + "]";
	}

}