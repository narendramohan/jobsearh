package com.jobsearch.controller;

import javax.servlet.http.HttpSession;

import junit.framework.Assert;

import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;

import com.jobsearch.model.LoginForm;

public class HomeControllerTest {

	@Test
	public void testController() {
		HomeController controller = new HomeController();
		Model model = new ExtendedModelMap();
		 LoginForm loginForm = new LoginForm();
		 HttpSession session = Mockito.mock(HttpSession.class);
		Assert.assertEquals("login-page",controller.home(model,session, loginForm));
		
		Object message = model.asMap().get("controllerMessage");
		Assert.assertEquals("Welcome to jobsearch page!",message);		
	}
}
