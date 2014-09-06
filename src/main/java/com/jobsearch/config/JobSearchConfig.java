package com.jobsearch.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.jobsearch.auth.AuthManager;
import com.jobsearch.service.UserService;
import com.jobsearch.service.impl.UserServiceImpl;
import com.jobsearch.ui.LoginFormListener;
@Configuration
@ComponentScan(basePackages = {"com.jobsearch.ui" , 
  "com.jobsearch.auth", "com.jobsearch.service"})
public class JobSearchConfig {
	@Bean
	  public AuthManager authManager() {
	    AuthManager res = new AuthManager();
	    return res;
	  }
	  @Bean
	  public UserService userService() {
	    UserService res = new UserServiceImpl();
	    return res;
	  }
	  @Bean
	  public LoginFormListener loginFormListener() {
	    return new LoginFormListener();
	  }
}
