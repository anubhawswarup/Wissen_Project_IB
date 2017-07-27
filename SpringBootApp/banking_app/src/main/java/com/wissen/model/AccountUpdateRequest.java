package com.wissen.model;



public class AccountUpdateRequest {

private String userName;

private String accNum;

private String type;


private int balance;




public String getAccNum() {

return accNum;

}

public void setAccNum(String accNum) {

this.accNum = accNum;

}

@Override

public String toString() {

return "AccountUpdateRequest [userName=" + userName + ", acc_num=" + accNum + ", type=" + type + ", balance="

+ balance + "]";

}

public String getUserName() {

return userName;

}

public void setUserName(String userName) {

this.userName = userName;

}


public String getType() {

return type;

}

public void setType(String type) {

this.type = type;

}

public int getBalance() {

return balance;

}

public void setBalance(int balance) {

this.balance = balance;

} 

}