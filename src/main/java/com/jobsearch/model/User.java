package com.jobsearch.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "user")
public class User implements Serializable {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "login_id")
	private String loginId;

	@Column(name = "password")
	private String password;

	@Column(name = "type")
	private int type;
	
	@Column(name = "status")
	private int status;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String userName) {
		this.name = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	

}
/*public class User implements UserDetails {

	*//**
	 * 
	 *//*
	private static final long serialVersionUID = 1L;
	String username; 
	String password; 
	boolean credentialsNonExpired; 
	boolean enabled;
	boolean accountNonExpired; 
	boolean accountNonLocked; 
	List<GrantedAuthority> authorities;
	public User(String username, String string, boolean accountNonExpired, boolean accountNonLocked,
			boolean d, boolean e, List<GrantedAuthority> authorities) {
		this.username=username;
		this.password=string;
		this.accountNonExpired=accountNonExpired;
		this.accountNonLocked=accountNonLocked;
		this.credentialsNonExpired=d;
		this.enabled=e;
		this.authorities=authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return authorities;
	}

	@Override
	public String getPassword() {
		
		return password;
	}

	@Override
	public String getUsername() {
		
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		
		return accountNonExpired;
	}

	@Override
	public boolean isAccountNonLocked() {
		
		return accountNonLocked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		
		return credentialsNonExpired;
	}

	@Override
	public boolean isEnabled() {
		
		return enabled;
	}

}
*/