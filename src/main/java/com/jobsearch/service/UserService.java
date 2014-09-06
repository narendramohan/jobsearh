package com.jobsearch.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;

import com.jobsearch.model.LoginForm;
import com.jobsearch.model.User;

public interface UserService {
	public User getUser();

	public UserDetails loadUserByUsername(String username);

	public User loginUser(LoginForm loginForm);

	public User updatUser(LoginForm loginForm);
	public void addUser(User user);
	public void editUser(User user);
	public List<User> listUser();

	public void deleteUser(User prepareModel);

	public User getUser(Integer id);
	public User getUser(String userName);
	public boolean isUserExists(String userName);
	public void activateUser(User user);
	public void blockUser(String user);

	public boolean isEmailExists(String email);
	public int getRejectedRequestCount(String userName);
}
