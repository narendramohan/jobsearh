package com.jobsearch.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.jobsearch.dao.UserDao;
import com.jobsearch.model.LoginForm;
import com.jobsearch.model.User;
import com.jobsearch.service.UserService;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource(name = "userDao")
	UserDao userDao;
	@Override
	public User getUser() {
		// TODO Auto-generated method stub
		return null;
	}
	public UserDetails loadUserByUsername
	  (String username) throws UsernameNotFoundException {
	    /*List<GrantedAuthority> authorities = new 
	    ArrayList<GrantedAuthority>();
	    // fetch user from e.g. DB
	    
	    if ("client".equals(username)) {
	      authorities.add(new SimpleGrantedAuthority("CLIENT"));//'ROLE_USER'
	      authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
	      User user = new User(username, "pass", true, true, 
	      true, true, authorities);
	      
	      return user;
	    }
	    if ("admin".equals(username)) {
	      authorities.add(new SimpleGrantedAuthority("ADMIN"));
	      authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
	      User user = new User(username, "pass", true, true, 
	      false, false, authorities);
	      return user;
	    } else {
	      
	    }*/return null;
	  }
	@Override
	public User loginUser(LoginForm loginForm) {
		return userDao.loginUser(loginForm);
	}
	public User getEmail(LoginForm loginForm){
		return userDao.getEmail(loginForm);
	}
	@Override
	public User updatUser(LoginForm loginForm) {
		return userDao.updatUser(loginForm);
	}
	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void addUser(User user) {
		userDao.addUser(user);
	}
	
	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void editUser(User user) {
		userDao.editUser(user);
	}

	public List<User> listUser() {
		
		return userDao.listUser();
	}

	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void deleteUser(User prepareModel) {
		userDao.deleteUser(prepareModel);

	}

	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public User getUser(Integer id) {
		
		return userDao.getUser(id);
	}
	
	public User getUser(String userName){
		return userDao.getUser(userName);
	}
	
	public boolean isUserExists(String userName){
		return userDao.isUserExists(userName);
	}
	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void activateUser(User user) {
		userDao.activateUser(user);
		
	}
	public boolean isEmailExists(String email){
		return userDao.isEmailExists(email);
	}

	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
	public void blockUser(String user) {
		userDao.blockUser(user);
		
	}
	
	
	public int getRejectedRequestCount(String userName){
		return 0;
	}
}
