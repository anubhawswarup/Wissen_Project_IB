package com.wissen.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

//import com.wissen.service.*;
import com.wissen.model.Account;
import com.wissen.model.AccountRequest;
import com.wissen.model.BeneficiaryRequest;
import com.wissen.model.BeneficiaryResponse;
import com.wissen.model.LoginRequest;
import com.wissen.model.Response;
import com.wissen.model.Roles;
import com.wissen.model.Status;
import com.wissen.model.Transfer;
import com.wissen.model.Type;
import com.wissen.model.User;
import com.wissen.model.UserRequest;
import com.wissen.repository.AccountRepository;
import com.wissen.repository.TransferRepository;
import com.wissen.repository.UserRepository;

@Service
public class ServiceImpl {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	TransferRepository transferRepository;

	public Response addUser(UserRequest req) {
		// TODO Auto-generated method stub

		System.out.println(req);
		// System.out.println(req.getPasswordGroup());
		Response response = new Response();
		User user = new User();
		user.setUserName(req.getUserName());
		user.setFname(req.getFname());
		user.setMname(req.getLname());
		user.setLname(req.getLname());
		user.setEmail(req.getEmail());
		user.setAadharNum(req.getAadharNum());
		user.setGender(req.getGender());
		user.setPancardNum(req.getPancardNum());
		user.setPhone(req.getPhone());
		user.setAddress(req.getAddress());
		user.setPassword("#");
		user.setRole(Roles.USER);
		user.setStatus(Status.PENDING);

		if (userRepository.findOne(user.getUserName()) == null) {
			userRepository.save(user);
			response.setStatus("SUCCESS");
			response.setError("NONE");
		} else {
			response.setStatus("FAILED");
			response.setError("USERNAME ALREADY USED");
		}
		return response;
	}

	public Response checkLogin(LoginRequest loginRequest) {
		// TODO Auto-generated method stub

		System.out.println("checkLoginDetails" + loginRequest.getPassword() + loginRequest.getUserName());
		Response response = new Response();
		User user = userRepository.findOne(loginRequest.getUserName());
		if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
			response.setRole(user.getRole().toString());
			response.setStatus("SUCCESS");
			response.setError("NONE");
		} else {
			response.setStatus("FAILED");
			response.setError("INVALID USERNAME AND PASSWORD");
		}

		return response;

	}

	public List<BeneficiaryResponse> getAccountByUserName(String userName) {
		// TODO Auto-generated method stub

		List<Account> accounts = accountRepository.findByUser(userRepository.findOne(userName));
		List<BeneficiaryResponse> accountsNum = new ArrayList<>();
		for (Account account : accounts) {
			BeneficiaryResponse bf = new BeneficiaryResponse();
			bf.setAccountNum(account.getAccNum());
			bf.setUserName(account.getUser().getUserName());
			bf.setBalance(account.getBalance());
			bf.setType(account.getType());
			bf.setOpeningDate(account.getOpeningDate());
			accountsNum.add(bf);
		}
		return accountsNum;
	}

	public Response addBeneficiary(BeneficiaryRequest request) {
		// TODO Auto-generated method stub
		Response response = new Response();
		String fromAccount = request.getFromAccount();
		String toAccount = request.getToAccount();
		String userName = request.getUserName();

		if (accountRepository.findOne(request.getFromAccount()).getBeneficiaries()
				.contains(accountRepository.findOne(toAccount)) || fromAccount.equals(toAccount)) {
			response.setStatus("FAILED");
			response.setError("Beneficiary already exist");
			return response;
		}

		if (accountRepository.findOne(toAccount) != null
				&& accountRepository.findOne(toAccount).getUser().getUserName().equals(userName)) {
			Account account = accountRepository.findOne(request.getFromAccount());
			account.getBeneficiaries().add(accountRepository.findOne(request.getToAccount()));
			accountRepository.save(account);
			response.setStatus("SUCCESS");
			response.setError("NONE");
		} else {
			response.setStatus("FAILED");
			response.setError("INVALID DETAILS");
		}
		return response;
	}

	public List<BeneficiaryResponse> getBeneficiary(String accNum) {
		// TODO Auto-generated method stub
		Account acc = accountRepository.findOne(accNum);
		if (acc == null)
			return new ArrayList<>();
		List<Account> accounts = acc.getBeneficiaries();

		List<BeneficiaryResponse> accountsNum = new ArrayList<>();
		for (Account account : accounts) {
			BeneficiaryResponse bf = new BeneficiaryResponse();
			bf.setAccountNum(account.getAccNum());
			bf.setUserName(account.getUser().getUserName());

			accountsNum.add(bf);
		}
		return accountsNum;
	}

	public Response deleteBen(String account, String benId) {
		// TODO Auto-generated method stub
		Response response = new Response();
		Account account1 = accountRepository.findOne(account);
		Account account2 = accountRepository.findOne(benId);

		if (account1 != null && account2 != null && account1.getBeneficiaries().contains(account2)) {
			account1.getBeneficiaries().remove(account2);
			System.out.println(account1.getBeneficiaries());
			response.setStatus("SUCCESS");
			response.setError("NONE");
			accountRepository.save(account1);
		} else {
			response.setStatus("FAILED");
			response.setError("INVALID DETAILS");
		}

		return response;
	}

	public List<Transfer> getTransferList(String accNum) {
		// TODO Auto-generated method stub
		Account account1 = accountRepository.findOne(accNum);
		System.out.println(account1);
		System.out.println(transferRepository.findByFromAccountOrToAccountOrderByTimeStampDesc(account1, account1));
		return transferRepository.findByFromAccountOrToAccountOrderByTimeStampDesc(account1, account1);
	}

	public Response deleteUser(String username) {
		// TODO Auto-generated method stub
		System.out.println(username + " here");
		User u = userRepository.findByUserName(username);
		Response response = new Response();
		if (u == null) {
			response.setError("Not a valid request");
			response.setStatus("FAILED");
		} else {

			response.setError("Rejected");
			response.setStatus("NONE");
			SendEmail sendEmail = new SendEmail();
			String subject = "Infinity bank application rejected";
			String message = "Sorry your application has been rejected. Please try again with the Infinity Bank";
			sendEmail.sendEmail(u.getEmail(), subject, message);

			userRepository.delete(u);

		}
		return response;
	}

	public static String generatePassword() {
		String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		StringBuilder salt = new StringBuilder();
		Random rnd = new Random();
		while (salt.length() < 8) { // length of the random string.
			int index = (int) (rnd.nextFloat() * SALTCHARS.length());
			salt.append(SALTCHARS.charAt(index));
		}
		String saltStr = salt.toString();
		return saltStr;
	}

	public static long generateRandom(int length, Iterable<Account> iterable) {
		Random random = new Random();
		char[] digits = new char[length];
		digits[0] = (char) (random.nextInt(9) + '1');
		for (int i = 1; i < length; i++) {
			digits[i] = (char) (random.nextInt(10) + '0');
		}

		Long x = Long.parseLong(new String(digits));

		for (Account a : iterable) {
			if (a.getAccNum().equals(x + "")) {
				return generateRandom(12, iterable);
			}
		}
		return Long.parseLong(new String(digits));
	}

	public Response approveUser(String username) throws NoSuchAlgorithmException {

		User u = userRepository.findByUserName(username);
		Response response = new Response();
		if (u == null) {
		response.setError("Not a valid request");
		response.setStatus("FAILED");
		} else {
		u.setStatus(Status.ACTIVE);
		Account account = new Account();
		account.setUser(u);
		account.setOpeningDate(new Date());
		account.setAccNum(generateRandom(12, accountRepository.findAll()) + "");
		account.setBalance(0);
		account.setType(Type.SAVING);

		u.getAccounts().add(account);

		System.out.println(username + "username");

		//accountRepository.save(account);
		

		String password = generatePassword()+username;
		MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());

        byte byteData[] = md.digest();

        //convert the byte to hex format method 1
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < byteData.length; i++) {
         sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
        }

        System.out.println("Digest(in hex format):: " + sb.toString());

        //convert the byte to hex format method 2
        StringBuffer hexString = new StringBuffer();
    	for (int i=0;i<byteData.length;i++) {
    		String hex=Integer.toHexString(0xff & byteData[i]);
   	     	if(hex.length()==1) hexString.append('0');
   	     	hexString.append(hex);
    	}
    	System.out.println("Digest(in hex format):: " + hexString.toString());
/*    	
    	
    	

		MessageDigest md = MessageDigest.getInstance("MD5");

		String password = generatePassword()+username;
		//System.out.println(password);
		md.update(password.getBytes());
		//System.out.println(password.getBytes().toString());
		System.out.print(md.digest());*/
		u.setPassword(hexString.toString());

		userRepository.save(u);
		response.setError("Approved");
		response.setStatus("NONE");

		SendEmail sendEmail = new SendEmail();
		String subject = "Infinity bank application approved";
		String message = "Congratulations!!!" + "/n"
		+ "Your application has been approved. Welcome to the Infinity Bank" + "\n"
		+ "Your temporary password is : " + password + "\n" + "Please dont share it with anyone" + "/n"
		+ "You can change this password once you have logged in." + "\n"
		+ " Go to My Profile->Edit Profile";
		sendEmail.sendEmail(u.getEmail(), subject, message);

		}
		// u.getAccounts().add(arg0)

		return response;

		}

	

	public BeneficiaryResponse addAccountByUserName(AccountRequest req) {
		// TODO Auto-generated method stub
		System.out.println(req.getUsername());
		System.out.println(req.getAccountType());
		User u = userRepository.findByUserName(req.getUsername());

		String accnum = generateRandom(12, accountRepository.findAll()) + "";

		Account account = new Account();
		account.setUser(u);
		account.setAccNum(accnum);
		account.setOpeningDate(new Date());
		account.setType(req.getAccountType());
		account.setBalance(0);
		accountRepository.save(account);
		u.getAccounts().add(account);
		userRepository.save(u);

		// Response response = new Response();
		BeneficiaryResponse br = new BeneficiaryResponse();
		br.setAccountNum(accnum);
		br.setBalance(0);
		br.setOpeningDate(new Date());
		br.setType(req.getAccountType());
		return br;

	}

	public List<User> getAllPendingUsers(HttpServletRequest request) {
		// TODO Auto-generated method stub
		List<User> allUsers = (List<User>) userRepository.findAll();
		List<User> pendingUsers = new ArrayList<>();
		for (User u : allUsers) {
			if (u.getStatus().equals(Status.PENDING)) {
				pendingUsers.add(u);
			}
		}
		return pendingUsers;
	}

}
