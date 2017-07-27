package com.wissen.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import com.wissen.model.Account;
import com.wissen.model.Type;
import com.wissen.model.User;


@Component
public interface AccountRepository extends JpaRepository<Account, String> {

	List<Account> findByType(Type type);
	List<Account> findByUser(User user);
	
	@Query(value = "SELECT count(*) FROM account where type = :s and opening_date BETWEEN :d1 AND :d2", nativeQuery = true)
	long countByDate(@Param(value = "s") String s, @Param(value = "d1") Date d1, @Param(value = "d2") Date d2);

}
