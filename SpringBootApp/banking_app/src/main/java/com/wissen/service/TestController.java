package com.wissen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import com.wissen.model.Account;
import com.wissen.model.AccountRequest;
import com.wissen.model.AccountUpdateRequest;
import com.wissen.model.Address;
import com.wissen.model.BeneficiaryRequest;
import com.wissen.model.BeneficiaryResponse;
import com.wissen.model.ChangePasswordRequest;
import com.wissen.model.DeleteBenRequest;
import com.wissen.model.LoginRequest;
import com.wissen.model.PasswordGroup;
import com.wissen.model.Response;
import com.wissen.model.Roles;
import com.wissen.model.Status;
import com.wissen.model.Transfer;
import com.wissen.model.TransferRequest;
import com.wissen.model.Type;
import com.wissen.model.UpdateUserRequest;
import com.wissen.model.User;
import com.wissen.model.UserRequest;
import com.wissen.repository.AccountRepository;
import com.wissen.repository.TransferRepository;
import com.wissen.repository.UserRepository;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin("*")
@RestController
public class TestController {

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	TransferRepository transferRepository;

	@Autowired
	TransferService transferService;

	@Autowired
	ServiceImpl serviceImpl;

	// @RequestMapping("/accounts")
	// List<Account> getAll(){
	// return (List<Account>) accountRepository.findAll();
	// }

	// @RequestMapping("/login") // TO DO
	// String login(HttpServletRequest request){
	// // ModelAndView mav= new ModelAndView();
	// // mav.addObject("login","present");
	//
	// request.getSession().setAttribute("login", "present");
	// return "Success";
	// }

	// @RequestMapping("/logOut")
	// String logOut(HttpServletRequest request,HttpServletResponse response){
	// // ModelAndView mav= new ModelAndView();
	// // mav.addObject("login","present");
	//
	// request.getSession().removeAttribute("login");
	// return "Success";
	// }

	@RequestMapping(value = "/users", method = RequestMethod.GET)
	List<User> getAllUser(HttpServletRequest request) {

		// if(request.getSession().getAttribute("login")!=null || 1==1) {
		return (List<User>) userRepository.findAll();
		// }
	
		// return null;
	}

	@RequestMapping(value = "/remove", method = RequestMethod.GET)
	String removeUser() {

		User user = userRepository.findOne("utk");
		userRepository.delete(user);
		return "successfuly added";
	}

	// @RequestMapping(value = "/addUser", method = RequestMethod.PUT, consumes =
	// "application/json")
	// Response addUser(@RequestBody UserRequest req) {
	//
	// System.out.println(user);
	// System.out.println(user.getAddress());
	// Response response = new Response();
	// user.setRole(Roles.USER);
	// user.setStatus(Status.PENDING);
	// user.getAddress().setUser(user);
	//
	// if (userRepository.findOne(user.getUserName()) == null) {
	// userRepository.save(user);
	// response.setStatus("SUCCESS");
	// response.setError("NONE");
	// } else {
	// response.setStatus("FAILED");
	// response.setError("USERNAME ALREADY USED");
	// }
	// return response;
	// }

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	User getUserDetails(@RequestParam String userName) {

		return userRepository.findOne(userName);
	}

	@RequestMapping(value = "/addUser", method = RequestMethod.PUT, consumes = "application/json")
	Response addUser(@RequestBody UserRequest req) {

		return serviceImpl.addUser(req);
	}

	@RequestMapping(value = "/checkLoginDetails", consumes = "application/json", method = RequestMethod.POST) // done
	Response checkLoginDetails(@RequestBody LoginRequest loginRequest) {

		return serviceImpl.checkLogin(loginRequest);
	}

	@RequestMapping(value = "/transfer", consumes = "application/json", method = RequestMethod.PUT)
	public Response doTransaction(@RequestBody TransferRequest transferRequest) {

		return transferService.doTransaction(transferRequest);

	}

	@RequestMapping(value = "/getAllPendingUsers", method = RequestMethod.GET)
	List<User> getAllPendingUsers(HttpServletRequest request) {

		return serviceImpl.getAllPendingUsers(request);

	}

	@RequestMapping(value = "/getAccountNumByUserName", method = RequestMethod.GET)
	List<BeneficiaryResponse> getAccountByUserName(@RequestParam(name = "username") String userName) {

		return serviceImpl.getAccountByUserName(userName);

	}

	@RequestMapping(value = "/createBeneficiary", method = RequestMethod.PUT, consumes = "application/json")
	Response addBeneficiary(@RequestBody BeneficiaryRequest request) {

		return serviceImpl.addBeneficiary(request);
	}

	@RequestMapping(value = "/getBeneficiary", method = RequestMethod.GET)
	List<BeneficiaryResponse> getBeneficiary(@RequestParam String accNum) {
		return serviceImpl.getBeneficiary(accNum);
	}

	@RequestMapping(value = "/deleteBeneficiary", method = RequestMethod.GET)
	Response deleteBen(@RequestParam String account, @RequestParam String benId) {

		return serviceImpl.deleteBen(account, benId);
	}

	@RequestMapping(value = "/transactionList", method = RequestMethod.GET)
	List<Transfer> getTransferList(@RequestParam String accNum) {

		return serviceImpl.getTransferList(accNum);

	}

	@RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
	Response deleteUser(@RequestParam String username) {

		return serviceImpl.deleteUser(username);
	}

	@RequestMapping(value = "/approveUser", method = RequestMethod.GET)
	Response approveUser(@RequestParam String username) {
		try {
			return serviceImpl.approveUser(username);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@RequestMapping(value = "/addAccountByUsername", method = RequestMethod.POST, consumes = "application/json")
	BeneficiaryResponse addAccountByUserName(@RequestBody AccountRequest req) {

		return serviceImpl.addAccountByUserName(req);

	}
	
	@RequestMapping(value = "/updatePassword", method = RequestMethod.POST, consumes = "application/json")
	Response updatePassword(@RequestBody ChangePasswordRequest req) throws NoSuchAlgorithmException {
		System.out.println(req);
		Response response = new Response();

		User user = userRepository.findOne(req.getUsername());
		if (user.getPassword().equals(req.getOldPassword())) {
			response.setStatus("SUCCESS");
			response.setError("NONE");

			
			user.setPassword(req.getCpasswordGroup().getNewPassword());
			userRepository.save(user);

		} else {
			response.setStatus("FAILED");
			response.setError("INVALID OLD PASSWORD");
		}

		return response;
	}

	@RequestMapping(value = "/updateuser", consumes = "application/json", method = RequestMethod.POST)
	Response updateUser(@RequestBody UpdateUserRequest req) {

		System.out.println("in update controller \n" + req);

		Response response= new Response();
		
		User user= userRepository.findOne(req.getUserName());
		if(user!=null) {
			user.setEmail(req.getEmail());
			user.setPhone(req.getPhone());
			Address address= user.getAddress();
			address.setState(req.getState());
			address.setCountry(req.getCountry());
			address.setPincode(req.getPincode());
			address.setState(req.getState());
			
			userRepository.save(user);
			response.setError("NONE");
			response.setStatus("SUCCESS");
		}else {
			response.setError("NONE");
			response.setStatus("Failed");
			
		}
		return response;
		
	}
	@RequestMapping(value = "/getCount", method = RequestMethod.GET)
	List<Integer> getCount() throws ParseException {

		List<Integer> list = new ArrayList<>();
		list.add((int) userRepository.count());
		list.add((int) accountRepository.count());

		List<Account> accounts = accountRepository.findByType(Type.SAVING);
		System.out.println("here save" + accounts.size());
		list.add(accounts.size());

		accounts = accountRepository.findByType(Type.CURRENT);
		System.out.println("here " + accounts.size());
		list.add(accounts.size());
		int count1 = 0;
		
		List<User> users = (List<User>) userRepository.findAll();
		for(User u : users) {
			if(u.getStatus().equals(Status.PENDING)) {
				count1++;
			}
		}
		list.add(count1);

		for (int i = 0; i < 12; i++) {

			if (i < 9) {
				String inputString = "2017-0" + i + "-01 00:00:00";
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Date inputDate = dateFormat.parse(inputString);

				String outputString = "2017-0" + (i + 1) + "-01 00:00:00";
				Date outputDate = dateFormat.parse(outputString);

				long count = accountRepository.countByDate("CURRENT", inputDate, outputDate);
				list.add((int) count);
			} else {
				String inputString = "2017-" + i + "-01 00:00:00";
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Date inputDate = dateFormat.parse(inputString);

				String outputString = "2017-" + (i + 1) + "-01 00:00:00";
				Date outputDate = dateFormat.parse(outputString);

				long count = accountRepository.countByDate("CURRENT", inputDate, outputDate);
				list.add((int) count);
			}
		}
		for (int i = 0; i < 12; i++) {

			if (i < 9) {
				String inputString = "2017-0" + i + "-01 00:00:00";
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Date inputDate = dateFormat.parse(inputString);

				String outputString = "2017-0" + (i + 1) + "-01 00:00:00";
				Date outputDate = dateFormat.parse(outputString);

				long count = accountRepository.countByDate("SAVING", inputDate, outputDate);
				list.add((int) count);
			} else {
				String inputString = "2017-" + i + "-01 00:00:00";
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				Date inputDate = dateFormat.parse(inputString);

				String outputString = "2017-" + (i + 1) + "-01 00:00:00";
				Date outputDate = dateFormat.parse(outputString);

				long count = accountRepository.countByDate("SAVING", inputDate, outputDate);
				list.add((int) count);
			}
		}
		System.out.println("here" + list);

		return list;
	}
	@RequestMapping(value = "/allusers",method=RequestMethod.GET)
	List<User> getAllUsers(){
		List<User> l=(List<User>) userRepository.findAll();
		return l;
	}
	
	@RequestMapping(value = "/allaccounts",method=RequestMethod.GET)
	List<Account> getAllAccounts(){
		List<Account> l=(List<Account>) accountRepository.findAll();
		return l;
	}
	
	@RequestMapping(value = "/alltransactions",method=RequestMethod.GET)
	List<Transfer> getAllTransactions(){
		List<Transfer> l=(List<Transfer>) transferRepository.findAll();
		return l;
	}
	
//	@RequestMapping(value = "/deleteone",method=RequestMethod.GET)
//	void deleteUser(@RequestParam String userName) {
//		System.out.println(userName);
//		userRepository.delete(userName);
//	}

	@RequestMapping(value = "/deleteaccount",method=RequestMethod.GET)
	void deleteAccount(@RequestParam String accNum) {
		System.out.println(accNum);
		accountRepository.delete(accNum);
		
	}
	@RequestMapping(value = "/updateaccount",consumes = "application/json",method=RequestMethod.POST)
	Response updateAccount(@RequestBody AccountUpdateRequest updatedAccount) {
		System.out.println("in update account controller \n" + updatedAccount);
		
		
		
		Response resp=new Response();
		if (accountRepository.findOne(updatedAccount.getAccNum()) !=null) {
			
			Account a=accountRepository.findOne(updatedAccount.getAccNum());
			System.out.println(a);
			a.setBalance(updatedAccount.getBalance());
			a.setType( Type.valueOf(updatedAccount.getType()));
			a.setUser(userRepository.findOne(updatedAccount.getUserName()));
			//a.setBalance(updatedAccount.getBalance());
//			System.out.println(u);
			//System.out.println(a);
			accountRepository.save(a);
			resp.setStatus("SUCCESS");
			resp.setError("NONE");
		} else {
			resp.setStatus("FAILED");
			resp.setError("Cant update, account does not exists");
		}
		return resp;
		
		
		
		//resp.setStatus("UPDATED");
		//return resp;
	}

}
