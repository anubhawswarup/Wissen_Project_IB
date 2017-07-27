package com.wissen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.wissen.model.Account;
import com.wissen.model.Transfer;

public interface TransferRepository extends JpaRepository<Transfer, Integer> {
	
	List<Transfer> findByFromAccountOrToAccountOrderByTimeStampDesc(Account account1, Account account2);

}
