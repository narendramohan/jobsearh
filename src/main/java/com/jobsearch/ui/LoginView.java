package com.jobsearch.ui;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.vaadin.navigator.View;
import com.vaadin.navigator.ViewChangeListener;
import com.vaadin.ui.VerticalLayout;

public class LoginView extends VerticalLayout implements View {
public LoginView() {
  LoginForm loginForm = new LoginForm();
  addComponent(loginForm);
}
public void enter(ViewChangeListener.ViewChangeEvent event) {
}

};
