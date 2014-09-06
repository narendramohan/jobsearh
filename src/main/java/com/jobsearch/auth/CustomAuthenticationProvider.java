package com.jobsearch.auth;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.jobsearch.service.UserService;
@Component("customAuthenticationProvider")
public class CustomAuthenticationProvider implements AuthenticationProvider {
	 @Autowired
	  private UserService userService;
	 @Override
	    public Authentication authenticate(Authentication authentication) 
	      throws AuthenticationException {
	        /*String name = authentication.getName();
	        String password = authentication.getCredentials().toString();
	 
	        // use the credentials to try to authenticate against the third party system
	        if (authenticatedAgainstThirdPartySystem()) {
	            List<GrantedAuthority> grantedAuths = new ArrayList<>();
	            return new UsernamePasswordAuthenticationToken(name, password, grantedAuths);
	        } else {
	            throw new AuthenticationException("Unable to auth against third party systems");
	        }*/
		 	String username = (String) authentication.getPrincipal();
		    String password = (String) authentication.getCredentials();
		    UserDetails user = userService.loadUserByUsername(username);
		    if (user != null && user.getPassword().equals(password)) {
		      Collection<? extends GrantedAuthority> authorities = user.getAuthorities();
		      return new UsernamePasswordAuthenticationToken(username, password, authorities);
		    }
		    throw new BadCredentialsException("Bad Credentials");
	    }
	 
	    @Override
	    public boolean supports(Class<?> authentication) {
	        return authentication.equals(UsernamePasswordAuthenticationToken.class);
	    }

}
