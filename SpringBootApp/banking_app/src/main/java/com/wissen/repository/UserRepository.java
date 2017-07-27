package com.wissen.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.wissen.model.User;

@Component
public interface UserRepository extends JpaRepository<User, String> {

	User findByUserName(String userName);
	
}
