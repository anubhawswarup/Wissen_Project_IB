package com.wissen.repository;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.wissen.model.Account;
import com.wissen.model.Type;

@Component
public class InterestRepository {
	
	@Autowired
	private AccountRepository accountRepsository;

	@Scheduled(fixedRate = 300000)
    public void reportCurrentTime() {
       List<Account> accounts=accountRepsository.findByType(Type.valueOf("SAVING"));
       System.out.println("=====================Interest given============================");
       for(Account account:accounts) {
    	   account.setBalance(Double.parseDouble(new DecimalFormat("#.##").format(account.getBalance()+0.1*account.getBalance())));
    	   accountRepsository.save(account);
       }
       
    }

}
